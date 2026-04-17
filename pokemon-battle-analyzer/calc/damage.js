/**
 * 宝可梦冠军伤害计算模块
 *
 * 核心公式（Gen V+ / Lv.50）：
 * BaseDmg = floor(floor(22 * Power * A / D) / 50) + 2
 * 最终伤害 = floor(BaseDmg * Targets * Weather * Critical * Random * STAB * Type * Burn * Other)
 *
 * 注：22 = floor(2*50/5+2)
 */

/**
 * 计算单次伤害（返回最小值和最大值）
 *
 * @param {Object} params
 * @param {number} params.attackStat  攻击方有效攻击/特攻
 * @param {number} params.defenseStat 防御方有效防御/特防
 * @param {number} params.power       技能威力
 * @param {string} params.moveType    技能属性
 * @param {string} params.category    'physical'|'special'
 * @param {string[]} params.atkTypes  攻击方属性（用于STAB）
 * @param {string[]} params.defTypes  防御方属性（用于相克）
 * @param {Object} params.field       场地状态 { weather, terrain, trickRoom, tailwind }
 * @param {Object} params.atkStatus   攻击方状态 { burned }
 * @param {Object} params.modifiers   额外修正 { isCrit, itemMult, abilityMult, targetsMult }
 * @returns {{ min: number, max: number, minPct: number, maxPct: number, typeEff: number, note: string }}
 */
function calcDamage(params) {
  const {
    attackStat,
    defenseStat,
    defenderHP,
    power,
    moveType,
    category,
    atkTypes = [],
    defTypes = [],
    field = {},
    atkStatus = {},
    modifiers = {}
  } = params;

  if (!power || power <= 0) {
    return { min: 0, max: 0, minPct: 0, maxPct: 0, typeEff: 1, note: '变化技无伤害' };
  }

  // 属性相克（允许外部传入覆盖值，用于冷冻干燥等特殊技能）
  const typeEff = modifiers.typeEffOverride !== undefined
    ? modifiers.typeEffOverride
    : ((typeof getTypeEffectiveness === 'function') ? getTypeEffectiveness(moveType, defTypes) : 1);

  if (typeEff === 0) {
    return { min: 0, max: 0, minPct: 0, maxPct: 0, typeEff: 0, note: '无效（免疫）' };
  }

  // STAB（允许外部覆盖，用于适应力等特性）
  const stab = modifiers.stabOverride !== undefined
    ? modifiers.stabOverride
    : (atkTypes.includes(moveType) ? 1.5 : 1.0);

  // 基础伤害（不含随机数）
  const baseDmg = Math.floor(Math.floor(22 * power * attackStat / defenseStat) / 50) + 2;

  // 多目标（双打中打全体×0.75）
  const targetsMult = modifiers.targetsMult || 1;

  // 天气修正
  const weatherMult = calcWeatherMult(moveType, field.weather, defTypes);

  // 暴击
  const critMult = modifiers.isCrit ? 1.5 : 1;

  // 灼烧
  const burnMult = (atkStatus.burned && category === 'physical') ? 0.5 : 1;

  // 场地修正
  const terrainMult = calcTerrainMult(moveType, field.terrain, field.grounded, atkTypes, defTypes);

  // 道具/特性修正（外部传入）
  const itemMult = modifiers.itemMult || 1;
  const abilityMult = modifiers.abilityMult || 1;

  // 光墙/反射壁（×0.5，但暴击无效）
  const screenMult = (modifiers.screen && !modifiers.isCrit) ? 0.5 : 1;

  // 计算最小和最大伤害（随机数 0.85 ~ 1.00，步长 1/100）
  function finalDmg(randomMult) {
    return Math.floor(
      baseDmg *
      targetsMult *
      weatherMult *
      critMult *
      randomMult *
      stab *
      typeEff *
      burnMult *
      terrainMult *
      itemMult *
      abilityMult *
      screenMult
    );
  }

  const minDmg = finalDmg(0.85);
  const maxDmg = finalDmg(1.00);

  const hp = defenderHP || 1;
  const minPct = parseFloat((minDmg / hp * 100).toFixed(1));
  const maxPct = parseFloat((maxDmg / hp * 100).toFixed(1));

  return {
    min: minDmg,
    max: maxDmg,
    minPct,
    maxPct,
    typeEff,
    stab,
    note: buildDamageNote(typeEff, stab, weatherMult, terrainMult, burnMult, critMult)
  };
}

/**
 * 天气对技能威力的修正
 */
function calcWeatherMult(moveType, weather, defTypes) {
  if (!weather || weather === 'none') return 1;
  if (weather === 'sun' || weather === 'harsh-sun') {
    if (moveType === 'fire') return 1.5;
    if (moveType === 'water') return 0.5;
  }
  if (weather === 'rain' || weather === 'heavy-rain') {
    if (moveType === 'water') return 1.5;
    if (moveType === 'fire') return 0.5;
  }
  if (weather === 'sandstorm') {
    // 沙暴提升岩石系特防，不影响直接伤害倍率（通过防御值处理）
    return 1;
  }
  if (weather === 'hail' || weather === 'snow') {
    // 冰雹提升冰系防御，不影响进攻倍率
    return 1;
  }
  return 1;
}

/**
 * 场地对技能威力的修正
 * @param {string} moveType
 * @param {string} terrain
 * @param {boolean} grounded 是否接触地面（飞行/悬浮不受场地影响）
 * @param {string[]} atkTypes
 * @param {string[]} defTypes
 */
function calcTerrainMult(moveType, terrain, grounded = true, atkTypes = [], defTypes = []) {
  if (!terrain || terrain === 'none') return 1;
  if (!grounded) return 1; // 飞行宝可梦不受场地影响（攻击方）

  if (terrain === 'electric' && moveType === 'electric') return 1.3;
  if (terrain === 'grassy' && moveType === 'grass') return 1.3;
  if (terrain === 'psychic' && moveType === 'psychic') return 1.3;
  if (terrain === 'misty' && moveType === 'dragon') return 0.5;
  return 1;
}

/**
 * 构建伤害说明文本
 */
function buildDamageNote(typeEff, stab, weatherMult, terrainMult, burnMult, critMult) {
  const notes = [];
  if (typeEff >= 4) notes.push('效果无比绝佳');
  else if (typeEff >= 2) notes.push('效果绝佳');
  else if (typeEff <= 0.25) notes.push('效果极差');
  else if (typeEff <= 0.5) notes.push('效果不好');
  if (stab > 1) notes.push('本系加成');
  if (weatherMult > 1) notes.push('天气加成');
  if (terrainMult > 1) notes.push('场地加成');
  if (burnMult < 1) notes.push('灼烧减半');
  if (critMult > 1) notes.push('命中要害');
  return notes.join(' / ');
}

// ─── 动态威力辅助函数 ───

/**
 * 扑击/逆境反击 威力表（按HP比例）
 */
function flailPower(hpRatio) {
  if (hpRatio > 0.6875) return 20;
  if (hpRatio > 0.3542) return 40;
  if (hpRatio > 0.2083) return 80;
  if (hpRatio > 0.1042) return 100;
  if (hpRatio > 0.0417) return 150;
  return 200;
}

/**
 * 电球威力（按攻击方速度 / 防御方速度 比值）
 */
function getElectroBallPower(atkSpe, defSpe) {
  if (!defSpe || defSpe === 0) return 40;
  const ratio = atkSpe / defSpe;
  if (ratio >= 4) return 150;
  if (ratio >= 3) return 120;
  if (ratio >= 2) return 80;
  if (ratio >  1) return 60;
  return 40;
}

/** 打草结/踢倒威力（按目标体重） */
function getWeightBasedPower(targetWeight) {
  if (targetWeight >= 200) return 120;
  if (targetWeight >= 100) return 100;
  if (targetWeight >= 50)  return 80;
  if (targetWeight >= 25)  return 60;
  if (targetWeight >= 10)  return 40;
  return 20;
}

/** 重磅冲撞/热力碰撞威力（按攻击方/目标体重比） */
function getHeavySlamPower(atkWeight, defWeight) {
  if (!defWeight || defWeight === 0) return 40;
  const ratio = atkWeight / defWeight;
  if (ratio >= 5) return 120;
  if (ratio >= 4) return 100;
  if (ratio >= 3) return 80;
  if (ratio >= 2) return 60;
  return 40;
}

/**
 * 批量计算我方招式对敌方三种防御配置的伤害
 *
 * @param {Object} attacker 我方配置 { pokemon, stats, nature, item, sp, moves }
 * @param {Object} defender 对方宝可梦数据
 * @param {Array}  myMoves  我方技能列表（最多4个）
 * @param {Object} field    场地状态
 * @param {Object} atkStatus 我方状态
 * @returns {Array} 每个技能的三种情况伤害
 */
function calcMyMoveDamages(attacker, defender, myMoves, field = {}, atkStatus = {}, abilityInfo = {}) {
  const myAbilityId  = abilityInfo.myAbility  || '';
  const defAbilityId = abilityInfo.defAbility || '';
  const defPossible  = abilityInfo.defPossibleAbilities || [];
  const oppStatus    = abilityInfo.oppStatus  || '';  // 对方异常状态（用于 hex/venoshock/brine）

  const results = [];

  // 对方三种防御配置
  const defConfigs = [
    { label: '无投资（最低防御）',     hpSP: 0,  defSP: 0,  natureMult: 1.0 },
    { label: '满HP+满防御',           hpSP: 32, defSP: 32, natureMult: 1.0 },
    { label: '满HP+满防御+性格加成',  hpSP: 32, defSP: 32, natureMult: 1.1 }
  ];

  for (const moveId of myMoves) {
    if (!moveId || !MOVES[moveId]) continue;
    const moveData = MOVES[moveId];
    if (moveData.category === 'status') continue;

    // ── 1. 特殊技能场地联动（气象球/地形脉冲/日光束等）
    const specialEff = (typeof applySpecialMoveEffects === 'function')
      ? applySpecialMoveEffects(moveId, field) : {};

    let effectMoveType = specialEff.newType  || moveData.type;
    let effectPower    = specialEff.newPower || moveData.power;

    // ── 1b. 动态威力计算
    let dynamicNote = '';
    if (moveData.dynamicPower) {
      const atkSpe  = attacker.stats.effective.spe;
      const defSpe  = (typeof calcStat === 'function')
        ? calcStat(defender.baseStats.spe, 0, 1.0) : defender.baseStats.spe;
      const myRanks = abilityInfo.myRanks || {};

      if (moveData.dynamicPower === 'gyro-ball') {
        if (atkSpe > 0) {
          const p = Math.max(1, Math.min(150, Math.floor(25 * defSpe / atkSpe)));
          effectPower = p;
          dynamicNote = `陀螺球威力${p}（对方速度按无投资估算）`;
        }
      } else if (moveData.dynamicPower === 'electro-ball') {
        const p = getElectroBallPower(atkSpe, defSpe);
        effectPower = p;
        dynamicNote = `电球威力${p}（对方速度按无投资估算）`;
      } else if (moveData.dynamicPower === 'flail') {
        // 默认展示满HP（威力20），备注最大威力
        dynamicNote = '满HP威力20，HP极低（≤4%）时威力达200';
      } else if (moveData.dynamicPower === 'water-spout') {
        dynamicNote = '满HP威力150，随HP降低而减弱';
      } else if (moveData.dynamicPower === 'stored-power') {
        const boostTotal = Object.values(myRanks).filter(v => v > 0).reduce((s, v) => s + v, 0);
        effectPower = 20 + 20 * boostTotal;
        dynamicNote = boostTotal > 0
          ? `辅助力量当前威力${effectPower}（含+${boostTotal}级正面提升）`
          : '辅助力量（无能力提升时威力20）';
      } else if (moveData.dynamicPower === 'grass-knot' || moveData.dynamicPower === 'low-kick') {
        const defWeight = defender.weight || 0;
        if (defWeight > 0) {
          effectPower = getWeightBasedPower(defWeight);
          dynamicNote = `威力${effectPower}（目标体重${defWeight}kg）`;
        } else {
          effectPower = 60;
          dynamicNote = '体重未知，按50kg估算威力60';
        }
      } else if (moveData.dynamicPower === 'heavy-slam' || moveData.dynamicPower === 'heat-crash') {
        const atkWeight = attacker.pokemon.weight || 0;
        const defWeight = defender.weight || 0;
        if (atkWeight > 0 && defWeight > 0) {
          effectPower = getHeavySlamPower(atkWeight, defWeight);
          dynamicNote = `威力${effectPower}（我方${atkWeight}kg / 对方${defWeight}kg）`;
        } else {
          effectPower = 80;
          dynamicNote = '体重未知，按默认威力80估算';
        }
      } else if (moveData.dynamicPower === 'hard-press') {
        // 硬压：威力 = 目标剩余HP百分比（最高100）
        // 我方攻击对方：对方HP按满HP估算（最坏情况威力100）
        effectPower = 100;
        dynamicNote = '硬压（对方满HP时威力100，随HP降低而减弱）';
      } else if (moveData.dynamicPower === 'last-respects') {
        const fainted = abilityInfo.faintedAllies || 0;
        effectPower = Math.min(300, 50 + 50 * fainted);
        dynamicNote = fainted > 0
          ? `扫墓当前威力${effectPower}（${fainted}只队友倒下）`
          : '扫墓（无队友倒下时威力50，每倒下一只+50，上限300）';
      } else if (moveData.dynamicPower === 'rage-fist') {
        const timesHit = abilityInfo.timesHit || 0;
        effectPower = Math.min(350, 50 + 50 * timesHit);
        dynamicNote = timesHit > 0
          ? `愤怒之拳当前威力${effectPower}（被攻击${timesHit}次）`
          : '愤怒之拳（未被攻击时威力50，每被攻击一次+50，上限350）';
      }
    }

    // ── 2. 技能标签
    const flags = (typeof getMoveFlags === 'function')
      ? getMoveFlags(moveId, { ...moveData, type: effectMoveType, power: effectPower })
      : {};

    // ── 3. 攻击方特性效果（我方）
    const atkAbilEff = (myAbilityId && typeof getAtkAbilityEffect === 'function')
      ? getAtkAbilityEffect(myAbilityId, moveId,
          { ...moveData, type: effectMoveType, power: effectPower },
          flags, attacker.pokemon.types, field)
      : {};

    if (atkAbilEff.newType)  effectMoveType = atkAbilEff.newType;
    if (atkAbilEff.powerMult && atkAbilEff.powerMult !== 1)
      effectPower = Math.floor(effectPower * atkAbilEff.powerMult);

    const isPhys  = moveData.category === 'physical';
    let   atkStat = isPhys ? attacker.stats.effective.atk : attacker.stats.effective.spa;

    // 扑击：使用防御代替攻击
    if (moveData.dynamicPower === 'body-press') {
      atkStat = attacker.stats.effective.def;
    }
    // 欺诈：使用对方攻击代替自身攻击
    if (moveData.dynamicPower === 'foul-play') {
      // 对方攻击按无投资估算（最保守）
      atkStat = (typeof calcStat === 'function')
        ? calcStat(defender.baseStats.atk, 0, 1.0)
        : defender.baseStats.atk;
      dynamicNote = `欺诈（使用对方攻击${atkStat}，按无投资估算）`;
    }
    // 光子喷涌/太晶爆发：使用攻击/特攻中较高者
    if (moveData.dynamicPower === 'photon-geyser') {
      const myAtk = attacker.stats.effective.atk;
      const mySpa = attacker.stats.effective.spa;
      atkStat = Math.max(myAtk, mySpa);
      if (myAtk >= mySpa) {
        dynamicNote = `使用攻击（${myAtk}）计算伤害（高于特攻${mySpa}）`;
      }
    }
    if (atkAbilEff.atkStatMult) atkStat = Math.floor(atkStat * atkAbilEff.atkStatMult);

    // ── 3b. 必定击中要害（alwaysCrit）：无视攻击方负面能力变化
    const alwaysCrit = !!moveData.alwaysCrit;
    if (alwaysCrit) {
      const baseAtkStat = isPhys ? attacker.stats.base.atk : attacker.stats.base.spa;
      atkStat = Math.max(baseAtkStat, atkStat);
    }

    // ── 3c. 条件威力（conditionalPower）
    let conditionalNote = '';
    if (moveData.conditionalPower) {
      const { boostedPower, condition } = moveData.conditionalPower;
      let condMet = false;
      if (condition === 'targetHasStatus' && oppStatus && oppStatus !== 'none') condMet = true;
      if (condition === 'targetPoisoned' && (oppStatus === 'poison' || oppStatus === 'bad-poison')) condMet = true;
      if (condition === 'userHasStatus' && (atkStatus.burned || atkStatus.paralyzed || atkStatus.poisoned)) condMet = true;
      if (condition === 'targetHalfHP' && abilityInfo.oppHalfHP) condMet = true;

      if (condMet) {
        effectPower = boostedPower;
        conditionalNote = moveData.note || '条件威力触发';
      } else {
        conditionalNote = moveData.note || '';
      }
    }

    // ── 4. 基础属性相克（用于 filter/solid-rock 判断）
    const baseTypeEff = (typeof getTypeEffectiveness === 'function')
      ? getTypeEffectiveness(effectMoveType, defender.types) : 1;

    // 冷冻干燥对水属性固定超效
    let typeEffOverride;
    if (moveId === 'freeze-dry' && defender.types.includes('water')) {
      typeEffOverride = Math.max(baseTypeEff, 2);
    }

    // ── 4b. 固定伤害技能（黑夜魔影/地球上投，等级50固定50伤害）
    if (moveData.fixedDamage) {
      const fixedDmg = moveData.fixedDamage;
      // 仍需检查属性免疫
      if (baseTypeEff === 0) continue;
      const moveResults = defConfigs.map(cfg => {
        const defHP = calcHP(defender.baseStats.hp, cfg.hpSP);
        const pct   = parseFloat((fixedDmg / defHP * 100).toFixed(1));
        return { ...cfg, min: fixedDmg, max: fixedDmg, minPct: pct, maxPct: pct,
                 typeEff: 1, hp: defHP, note: `固定伤害${fixedDmg}` };
      });
      results.push({
        moveId, moveName: moveData.name, moveType: effectMoveType,
        originalType: null, category: moveData.category, power: 0,
        fixedDamage: fixedDmg, results: moveResults,
        ...(dynamicNote && { dynamicNote })
      });
      continue;
    }

    // ── 5. 单配置伤害计算函数（含防御方特性）
    const computeDmg = (defCfg, defAbilEff, powerOverride) => {
      if (defAbilEff && defAbilEff.immune) {
        const defHP = calcHP(defender.baseStats.hp, defCfg.hpSP);
        return { ...defCfg, min: 0, max: 0, minPct: 0, maxPct: 0,
                 typeEff: 0, note: defAbilEff.note || '免疫', hp: defHP };
      }

      const defBase = isPhys ? defender.baseStats.def : defender.baseStats.spd;
      const defStat = calcStat(defBase, defCfg.defSP, defCfg.natureMult);
      const defHP   = calcHP(defender.baseStats.hp, defCfg.hpSP);

      let finalDefStat = defStat;
      if (!isPhys && field.weather === 'sandstorm' && defender.types.includes('rock'))
        finalDefStat = Math.floor(finalDefStat * 1.5);
      if (isPhys && field.weather === 'hail' && defender.types.includes('ice'))
        finalDefStat = Math.floor(finalDefStat * 1.5);

      const effTypeEff = typeEffOverride !== undefined ? typeEffOverride : baseTypeEff;
      const itemMult   = (typeof getItemDamageMult === 'function')
        ? getItemDamageMult(attacker.item || 'none', moveData.category, effectMoveType, effTypeEff) : 1;

      const oppScreens = field.oppScreens || {};
      const hasScreen  = isPhys
        ? (oppScreens.reflect || oppScreens.auroraVeil)
        : (oppScreens.lightScreen || oppScreens.auroraVeil);

      const abilMult = (defAbilEff && defAbilEff.mult) ? defAbilEff.mult : 1;

      // 全开猛撞/闪电猛冲：超效时额外×1.3
      const collisionMult = (moveId === 'collision-course' || moveId === 'electro-drift')
        && effTypeEff >= 2 ? 1.3 : 1;

      const usePower = (powerOverride !== undefined) ? powerOverride : effectPower;

      const dmg = calcDamage({
        attackStat:  atkStat,
        defenseStat: finalDefStat,
        defenderHP:  defHP,
        power:       usePower,
        moveType:    effectMoveType,
        category:    moveData.category,
        atkTypes:    attacker.pokemon.types,
        defTypes:    defender.types,
        field,
        atkStatus,
        modifiers: {
          itemMult,
          screen:          !!hasScreen,
          stabOverride:    atkAbilEff.stabOverride,
          abilityMult:     abilMult * collisionMult,
          typeEffOverride: typeEffOverride,
          isCrit:          alwaysCrit
        }
      });

      // 合并说明文本
      const noteArr = [specialEff.note, atkAbilEff.note, conditionalNote,
                       defAbilEff && defAbilEff.note, dmg.note].filter(Boolean);
      return { ...defCfg, ...dmg, hp: defHP, note: noteArr.join(' / ') || undefined };
    };

    // ── 6. 主结果（已知或无特性）
    const knownDefAbilEff = (defAbilityId && typeof getDefAbilityEffect === 'function')
      ? getDefAbilityEffect(defAbilityId, effectMoveType, moveData.category, moveId, flags, baseTypeEff)
      : {};

    let moveResults;

    if (moveData.tripleAxel) {
      // 三旋击：3次命中，威力分别为 20 / 40 / 60，合计 120
      moveResults = defConfigs.map(cfg => {
        const hits = [20, 40, 60].map(p => {
          const r = computeDmg({ ...cfg, _powerOverride: p }, knownDefAbilEff, p);
          return r;
        });
        const defHP   = hits[0].hp;
        const totMin  = hits.reduce((s, h) => s + h.min, 0);
        const totMax  = hits.reduce((s, h) => s + h.max, 0);
        const minPct  = parseFloat((totMin / defHP * 100).toFixed(1));
        const maxPct  = parseFloat((totMax / defHP * 100).toFixed(1));
        return { ...cfg, ...hits[2], min: totMin, max: totMax, minPct, maxPct, hp: defHP };
      });
    } else if (moveData.hitCount || moveData.hitMin) {
      // 固定多段 / 随机 2-5 段
      moveResults = defConfigs.map(cfg => {
        const single = computeDmg(cfg, knownDefAbilEff);
        const defHP  = single.hp;

        if (moveData.hitCount) {
          const n = moveData.hitCount;
          return {
            ...cfg, ...single,
            min: single.min * n, max: single.max * n,
            minPct: parseFloat((single.min * n / defHP * 100).toFixed(1)),
            maxPct: parseFloat((single.max * n / defHP * 100).toFixed(1)),
            hp: defHP
          };
        } else {
          const lo = moveData.hitMin, hi = moveData.hitMax;
          return {
            ...cfg, ...single,
            min: single.min * lo, max: single.max * hi,
            minPct: parseFloat((single.min * lo / defHP * 100).toFixed(1)),
            maxPct: parseFloat((single.max * hi / defHP * 100).toFixed(1)),
            hp: defHP
          };
        }
      });
    } else {
      moveResults = defConfigs.map(cfg => computeDmg(cfg, knownDefAbilEff));
    }

    // ── 7. 特性未知时，枚举有影响的特性形成情景
    let scenarios = [];
    if (!defAbilityId && defPossible.length > 0 && typeof getDistinctDefAbilityEffects === 'function') {
      const variants = getDistinctDefAbilityEffects(
        defPossible, effectMoveType, moveData.category, moveId, flags, baseTypeEff
      );
      for (const { abilityId, effect } of variants) {
        const abilData = (defender.abilities || []).find(a => a.id === abilityId);
        const abilName = abilData ? abilData.name : abilityId;

        let scenarioResults;
        if (moveData.tripleAxel) {
          scenarioResults = defConfigs.map(cfg => {
            const hits = [20, 40, 60].map(p => computeDmg({ ...cfg, _powerOverride: p }, effect, p));
            const defHP  = hits[0].hp;
            const totMin = hits.reduce((s, h) => s + h.min, 0);
            const totMax = hits.reduce((s, h) => s + h.max, 0);
            return { ...cfg, ...hits[2], min: totMin, max: totMax,
                     minPct: parseFloat((totMin / defHP * 100).toFixed(1)),
                     maxPct: parseFloat((totMax / defHP * 100).toFixed(1)), hp: defHP };
          });
        } else if (moveData.hitCount || moveData.hitMin) {
          scenarioResults = defConfigs.map(cfg => {
            const single = computeDmg(cfg, effect);
            const defHP  = single.hp;
            if (moveData.hitCount) {
              const n = moveData.hitCount;
              return { ...cfg, ...single, min: single.min * n, max: single.max * n,
                       minPct: parseFloat((single.min * n / defHP * 100).toFixed(1)),
                       maxPct: parseFloat((single.max * n / defHP * 100).toFixed(1)), hp: defHP };
            } else {
              const lo = moveData.hitMin, hi = moveData.hitMax;
              return { ...cfg, ...single, min: single.min * lo, max: single.max * hi,
                       minPct: parseFloat((single.min * lo / defHP * 100).toFixed(1)),
                       maxPct: parseFloat((single.max * hi / defHP * 100).toFixed(1)), hp: defHP };
            }
          });
        } else {
          scenarioResults = defConfigs.map(cfg => computeDmg(cfg, effect));
        }

        scenarios.push({
          abilityId,
          abilityName: abilName,
          results: scenarioResults
        });
      }
    }

    const entry = {
      moveId,
      moveName:     moveData.name,
      moveType:     effectMoveType,
      originalType: effectMoveType !== moveData.type ? moveData.type : null,
      category:     moveData.category,
      power:        effectPower,
      results:      moveResults
    };
    if (moveData.hitCount) entry.hitCount = moveData.hitCount;
    if (moveData.hitMin)   { entry.hitMin = moveData.hitMin; entry.hitMax = moveData.hitMax; }
    if (moveData.tripleAxel) entry.tripleAxel = true;
    if (alwaysCrit)          entry.alwaysCrit = true;
    // 条件威力：条件未触发时，附加备注供 UI 提示
    if (moveData.conditionalPower && moveData.note && conditionalNote === moveData.note) {
      entry.conditionalNote = moveData.note;
    }
    if (scenarios.length > 0) entry.scenarios = scenarios;
    if (dynamicNote)           entry.dynamicNote = dynamicNote;
    results.push(entry);
  }

  return results;
}

/**
 * 计算对方可学技能对我方的威胁伤害（对方攻击我方）
 *
 * @param {Object} defender    我方宝可梦配置（被攻击方）
 * @param {Object} attacker    对方宝可梦数据
 * @param {Array}  oppMoveIds  对方可学技能列表
 * @param {Object} field       场地状态
 * @param {number} minPower    最低威力阈值
 * @returns {Array} 按威胁度排序的技能列表
 */
function calcOpponentThreats(defender, attacker, oppMoveIds, field = {}, minPower = 60, abilityInfo = {}) {
  const oppAbilityId       = abilityInfo.atkAbility         || '';
  const oppPossibleAbils   = abilityInfo.atkPossibleAbilities || [];
  const myAbilityId        = abilityInfo.myAbility           || '';
  const atkItem            = abilityInfo.atkItem             || '';
  const myStatus           = abilityInfo.myStatus            || '';
  const oppStatus          = abilityInfo.oppStatus           || '';
  const atkRanks           = abilityInfo.atkRanks            || {};

  const threats = [];

  // 对方三种进攻配置
  const atkConfigs = [
    { label: '无投资',           atkSP: 0,  natureMult: 1.0 },
    { label: '满攻击',           atkSP: 32, natureMult: 1.0 },
    { label: '满攻击+性格加成',  atkSP: 32, natureMult: 1.1 }
  ];

  const myHP  = defender.stats.hp;
  const myDef = defender.stats.effective.def;
  const mySpd = defender.stats.effective.spd;

  for (const moveId of oppMoveIds) {
    if (!MOVES[moveId]) continue;
    const moveData = MOVES[moveId];
    if (moveData.category === 'status') continue;

    // ── 1. 特殊技能场地联动
    const specialEff = (typeof applySpecialMoveEffects === 'function')
      ? applySpecialMoveEffects(moveId, field) : {};

    let effectMoveType = specialEff.newType  || moveData.type;
    let effectPower    = specialEff.newPower || moveData.power;

    // ── 1b. 动态威力计算（须在 minPower 检查前执行）
    let dynNoteOpp = '';
    if (moveData.dynamicPower) {
      const atkSpe   = (typeof calcStat === 'function')
        ? calcStat(attacker.baseStats.spe, 0, 1.0) : attacker.baseStats.spe;
      const defSpe   = defender.stats.effective.spe;
      const oppRanks = atkRanks;

      if (moveData.dynamicPower === 'gyro-ball') {
        if (atkSpe > 0) {
          const p = Math.max(1, Math.min(150, Math.floor(25 * defSpe / atkSpe)));
          effectPower = p;
          dynNoteOpp = `陀螺球威力${p}`;
        } else {
          effectPower = 150;
        }
      } else if (moveData.dynamicPower === 'electro-ball') {
        const p = getElectroBallPower(atkSpe, defSpe);
        effectPower = p;
        dynNoteOpp = `电球威力${p}`;
      } else if (moveData.dynamicPower === 'water-spout') {
        // 威力已为150，注明满HP
        dynNoteOpp = '喷水（满HP威力150）';
      } else if (moveData.dynamicPower === 'flail') {
        effectPower = 200;  // 最坏情况：对方HP极低
        dynNoteOpp = '扑击（对方HP极低时威力200）';
      } else if (moveData.dynamicPower === 'stored-power') {
        const boostTotal = Object.values(oppRanks).filter(v => v > 0).reduce((s, v) => s + v, 0);
        effectPower = 20 + 20 * boostTotal;
        if (boostTotal > 0) dynNoteOpp = `辅助力量威力${effectPower}`;
      } else if (moveData.dynamicPower === 'grass-knot' || moveData.dynamicPower === 'low-kick') {
        const myWeight = defender.pokemon.weight || 0;
        if (myWeight > 0) {
          effectPower = getWeightBasedPower(myWeight);
          dynNoteOpp = `威力${effectPower}（我方体重${myWeight}kg）`;
        } else {
          effectPower = 60;
        }
      } else if (moveData.dynamicPower === 'heavy-slam' || moveData.dynamicPower === 'heat-crash') {
        const atkWeight = attacker.weight || 0;
        const myWeight  = defender.pokemon.weight || 0;
        if (atkWeight > 0 && myWeight > 0) {
          effectPower = getHeavySlamPower(atkWeight, myWeight);
          dynNoteOpp = `威力${effectPower}（对方${atkWeight}kg / 我方${myWeight}kg）`;
        } else {
          effectPower = 80;
        }
      } else if (moveData.dynamicPower === 'hard-press') {
        // 硬压：对方攻击我方，按我方满HP估算（威力100）
        effectPower = 100;
        dynNoteOpp = '硬压（我方满HP时威力100，随HP降低而减弱）';
      } else if (moveData.dynamicPower === 'last-respects') {
        // 最坏情况：对方全队倒下5只，威力300
        effectPower = 300;
        dynNoteOpp = '扫墓（最坏情况：5只队友倒下，威力300）';
      } else if (moveData.dynamicPower === 'rage-fist') {
        // 最坏情况：被攻击6次，威力350
        effectPower = 350;
        dynNoteOpp = '愤怒之拳（最坏情况：被攻击6次，威力350）';
      } else if (moveData.dynamicPower === 'body-press') {
        // 扑击：对方使用防御代替攻击，按无投资防御估算
        dynNoteOpp = '扑击（使用对方防御代替攻击计算）';
      } else if (moveData.dynamicPower === 'foul-play') {
        // 欺诈：使用我方攻击代替对方攻击
        dynNoteOpp = '欺诈（使用我方攻击代替对方攻击计算）';
      } else if (moveData.dynamicPower === 'photon-geyser') {
        dynNoteOpp = '光子喷涌（使用对方攻击/特攻中较高者计算）';
      }
    }

    // 多段命中：用有效最大总威力来判断阈值（避免 25×5 被误过滤）
    let effectiveTotalPower = effectPower;
    if (moveData.hitCount) effectiveTotalPower = effectPower * moveData.hitCount;
    else if (moveData.hitMax) effectiveTotalPower = effectPower * moveData.hitMax;
    else if (moveData.tripleAxel) effectiveTotalPower = 120;

    if (!effectiveTotalPower || effectiveTotalPower < minPower) continue;

    // ── 2. 技能标签
    const flags = (typeof getMoveFlags === 'function')
      ? getMoveFlags(moveId, { ...moveData, type: effectMoveType, power: effectPower })
      : {};

    // ── 3. 确定对方特性效果（已知用已知，未知取最坏情况）
    let oppAbilEff = {};
    let abilityNote = '';

    if (oppAbilityId && typeof getAtkAbilityEffect === 'function') {
      oppAbilEff  = getAtkAbilityEffect(oppAbilityId, moveId,
        { ...moveData, type: effectMoveType, power: effectPower },
        flags, attacker.types, field);
      if (oppAbilEff.note) abilityNote = oppAbilEff.note;
    } else if (oppPossibleAbils.length > 0 && typeof getWorstCaseAtkAbilityEffect === 'function') {
      const worst = getWorstCaseAtkAbilityEffect(
        oppPossibleAbils, moveId,
        { ...moveData, type: effectMoveType, power: effectPower },
        flags, attacker.types, field
      );
      if (worst) {
        oppAbilEff  = worst.effect;
        // 查找能力名称
        const abilData = (attacker.abilities || []).find(a => a.id === worst.abilityId);
        const abilName = abilData ? abilData.name : worst.abilityId;
        abilityNote = `（含${abilName}加成）`;
      }
    }

    if (oppAbilEff.newType)  effectMoveType = oppAbilEff.newType;
    if (oppAbilEff.powerMult && oppAbilEff.powerMult !== 1)
      effectPower = Math.floor(effectPower * oppAbilEff.powerMult);

    // ── 3b. 条件威力（对方的 hex/facade 等）
    let oppCondNote = '';
    if (moveData.conditionalPower) {
      const { boostedPower, condition } = moveData.conditionalPower;
      let condMet = false;
      // hex/venoshock 系：我方（目标）有异常状态
      if (condition === 'targetHasStatus' && myStatus && myStatus !== 'none') condMet = true;
      if (condition === 'targetPoisoned' && (myStatus === 'poison' || myStatus === 'bad-poison')) condMet = true;
      // facade：攻击方（对方）自身有异常状态
      if (condition === 'userHasStatus' && oppStatus && oppStatus !== 'none') condMet = true;
      // brine：目标（我方）HP ≤ 50%
      if (condition === 'targetHalfHP' && abilityInfo.myHalfHP) condMet = true;

      if (condMet) {
        effectPower = boostedPower;
        oppCondNote = moveData.note || '条件威力触发';
      } else if (moveData.note) {
        oppCondNote = moveData.note;
      }
    }

    // ── 3c. 多段命中时，对威力阈值的二次检查（已在上方处理，此处跳过）

    const isPhys   = moveData.category === 'physical';
    const defBase  = isPhys ? attacker.baseStats.atk : attacker.baseStats.spa;

    // ── 4. 属性相克
    let typeEff = (typeof getTypeEffectiveness === 'function')
      ? getTypeEffectiveness(effectMoveType, defender.pokemon.types) : 1;
    // 冷冻干燥对水属性固定超效
    if (moveId === 'freeze-dry' && defender.pokemon.types.includes('water')) {
      typeEff = Math.max(typeEff, 2);
    }
    if (typeEff === 0) continue;

    // ── 4b. 固定伤害技能（黑夜魔影/地球上投，等级50固定50伤害）
    if (moveData.fixedDamage) {
      const fixedDmg = moveData.fixedDamage;
      const pct = parseFloat((fixedDmg / myHP * 100).toFixed(1));
      const fixedResults = atkConfigs.map(cfg => ({
        ...cfg, min: fixedDmg, max: fixedDmg, minPct: pct, maxPct: pct,
        typeEff: 1, note: `固定伤害${fixedDmg}`
      }));
      threats.push({
        moveId, moveName: moveData.name, moveType: effectMoveType,
        originalType: null, category: moveData.category, power: 0,
        fixedDamage: fixedDmg, typeEff, abilityNote: '', itemScenario: null,
        results: fixedResults, threatScore: pct
      });
      continue;
    }

    // ── 5. 我方防御值
    let myDefStat = isPhys ? myDef : mySpd;
    if (moveId === 'psyshock' || moveId === 'psystrike') myDefStat = myDef;
    // 必定击中要害：无视防守方正面防御/特防变化
    if (moveData.alwaysCrit) {
      const myBaseDefStat = isPhys ? defender.stats.base.def : defender.stats.base.spd;
      const myBaseDefStatPsyshock = defender.stats.base.def;
      if (moveId === 'psyshock' || moveId === 'psystrike') {
        myDefStat = Math.min(myBaseDefStatPsyshock, myDefStat);
      } else {
        myDefStat = Math.min(myBaseDefStat, myDefStat);
      }
    }
    if (!isPhys && field.weather === 'sandstorm' && defender.pokemon.types.includes('rock'))
      myDefStat = Math.floor(myDefStat * 1.5);

    // ── 6. 我方防御特性减伤
    const myAbilDefEff = (myAbilityId && typeof getDefAbilityEffect === 'function')
      ? getDefAbilityEffect(myAbilityId, effectMoveType, moveData.category, moveId, flags, typeEff)
      : {};

    if (myAbilDefEff.immune) continue; // 我方免疫，跳过此威胁

    const myDefAbilMult = myAbilDefEff.mult || 1;

    // ── 7. 道具修正（已知道具）
    const knownItemDamageMult = atkItem
      ? (typeof getItemDamageMult === 'function'
          ? getItemDamageMult(atkItem, moveData.category, effectMoveType, typeEff) : 1)
      : 1;
    const knownItemStatMult = atkItem
      ? (typeof getItemStatMult === 'function'
          ? getItemStatMult(atkItem, moveData.category) : 1)
      : 1;

    // ── 8. 计算三种进攻配置
    const myScreens = field.myScreens || {};
    const hasScreen = isPhys
      ? (myScreens.reflect || myScreens.auroraVeil)
      : (myScreens.lightScreen || myScreens.auroraVeil);

    const computeOppDmg = (atkCfg, itemDamageMult, itemStatMult, powerOverride) => {
      let oppAtkStat = calcStat(defBase, atkCfg.atkSP, atkCfg.natureMult);

      // 扑击：使用对方防御代替攻击
      if (moveData.dynamicPower === 'body-press') {
        oppAtkStat = calcStat(attacker.baseStats.def, atkCfg.atkSP, atkCfg.natureMult);
      }
      // 欺诈：使用我方攻击代替对方攻击
      if (moveData.dynamicPower === 'foul-play') {
        oppAtkStat = defender.stats.effective.atk;
      }
      // 光子喷涌：使用对方攻击/特攻中较高者
      if (moveData.dynamicPower === 'photon-geyser') {
        const oppAtk = calcStat(attacker.baseStats.atk, atkCfg.atkSP, atkCfg.natureMult);
        const oppSpa = calcStat(attacker.baseStats.spa, atkCfg.atkSP, atkCfg.natureMult);
        oppAtkStat = Math.max(oppAtk, oppSpa);
      }

      if (oppAbilEff.atkStatMult) oppAtkStat = Math.floor(oppAtkStat * oppAbilEff.atkStatMult);
      if (itemStatMult !== 1)     oppAtkStat = Math.floor(oppAtkStat * itemStatMult);

      const usePower = (powerOverride !== undefined) ? powerOverride : effectPower;
      const isAlwaysCrit = !!moveData.alwaysCrit;
      // 必定击中要害：无视攻击方负面能力变化（对方攻击通常无负面变化，此处保留逻辑完整性）
      // 防守方正面防御变化已在外层 myDefStat 处理

      // 全开猛撞/闪电猛冲：超效时额外×1.3
      const collisionMult = (moveId === 'collision-course' || moveId === 'electro-drift')
        && typeEff >= 2 ? 1.3 : 1;

      const dmg = calcDamage({
        attackStat:  oppAtkStat,
        defenseStat: myDefStat,
        defenderHP:  myHP,
        power:       usePower,
        moveType:    effectMoveType,
        category:    moveData.category,
        atkTypes:    attacker.types,
        defTypes:    defender.pokemon.types,
        field,
        atkStatus:   {},
        modifiers: {
          itemMult:     itemDamageMult,
          screen:       !!hasScreen,
          stabOverride: oppAbilEff.stabOverride,
          abilityMult:  myDefAbilMult * collisionMult,
          isCrit:       isAlwaysCrit
        }
      });
      return dmg;
    };

    // 多段命中的总伤害计算
    let moveResults = [];
    if (moveData.tripleAxel) {
      for (const atkCfg of atkConfigs) {
        const hits = [20, 40, 60].map(p => computeOppDmg(atkCfg, knownItemDamageMult, knownItemStatMult, p));
        const totMin = hits.reduce((s, h) => s + h.min, 0);
        const totMax = hits.reduce((s, h) => s + h.max, 0);
        const noteArr = [specialEff.note, abilityNote, oppCondNote, myAbilDefEff.note, hits[0].note].filter(Boolean);
        moveResults.push({ ...atkCfg, ...hits[2], min: totMin, max: totMax,
          minPct: parseFloat((totMin / myHP * 100).toFixed(1)),
          maxPct: parseFloat((totMax / myHP * 100).toFixed(1)),
          note: noteArr.join(' / ') || undefined });
      }
    } else if (moveData.hitCount || moveData.hitMin) {
      for (const atkCfg of atkConfigs) {
        const single = computeOppDmg(atkCfg, knownItemDamageMult, knownItemStatMult);
        const noteArr = [specialEff.note, abilityNote, oppCondNote, myAbilDefEff.note, single.note].filter(Boolean);
        if (moveData.hitCount) {
          const n = moveData.hitCount;
          moveResults.push({ ...atkCfg, ...single, min: single.min * n, max: single.max * n,
            minPct: parseFloat((single.min * n / myHP * 100).toFixed(1)),
            maxPct: parseFloat((single.max * n / myHP * 100).toFixed(1)),
            note: noteArr.join(' / ') || undefined });
        } else {
          const lo = moveData.hitMin, hi = moveData.hitMax;
          moveResults.push({ ...atkCfg, ...single, min: single.min * lo, max: single.max * hi,
            minPct: parseFloat((single.min * lo / myHP * 100).toFixed(1)),
            maxPct: parseFloat((single.max * hi / myHP * 100).toFixed(1)),
            note: noteArr.join(' / ') || undefined });
        }
      }
    } else {
      for (const atkCfg of atkConfigs) {
        const dmg = computeOppDmg(atkCfg, knownItemDamageMult, knownItemStatMult);
        const noteArr = [specialEff.note, abilityNote, oppCondNote, myAbilDefEff.note, dmg.note].filter(Boolean);
        moveResults.push({ ...atkCfg, ...dmg, note: noteArr.join(' / ') || undefined });
      }
    }

    // ── 9. 道具未知时，枚举该属性强化道具的情景
    let itemScenario = null;
    if (!atkItem && typeof getTypeBoostItem === 'function') {
      const boostItem = getTypeBoostItem(effectMoveType);
      if (boostItem) {
        let scenarioResults = [];
        if (moveData.tripleAxel) {
          for (const atkCfg of atkConfigs) {
            const hits = [20, 40, 60].map(p => computeOppDmg(atkCfg, 1.2, 1, p));
            const totMin = hits.reduce((s, h) => s + h.min, 0);
            const totMax = hits.reduce((s, h) => s + h.max, 0);
            scenarioResults.push({ ...atkCfg, ...hits[2], min: totMin, max: totMax,
              minPct: parseFloat((totMin / myHP * 100).toFixed(1)),
              maxPct: parseFloat((totMax / myHP * 100).toFixed(1)) });
          }
        } else if (moveData.hitCount || moveData.hitMin) {
          for (const atkCfg of atkConfigs) {
            const single = computeOppDmg(atkCfg, 1.2, 1);
            if (moveData.hitCount) {
              const n = moveData.hitCount;
              scenarioResults.push({ ...atkCfg, ...single, min: single.min * n, max: single.max * n,
                minPct: parseFloat((single.min * n / myHP * 100).toFixed(1)),
                maxPct: parseFloat((single.max * n / myHP * 100).toFixed(1)) });
            } else {
              const lo = moveData.hitMin, hi = moveData.hitMax;
              scenarioResults.push({ ...atkCfg, ...single, min: single.min * lo, max: single.max * hi,
                minPct: parseFloat((single.min * lo / myHP * 100).toFixed(1)),
                maxPct: parseFloat((single.max * hi / myHP * 100).toFixed(1)) });
            }
          }
        } else {
          scenarioResults = atkConfigs.map(atkCfg => {
            const dmg = computeOppDmg(atkCfg, 1.2, 1);
            return { ...atkCfg, ...dmg };
          });
        }
        itemScenario = {
          itemId:   boostItem.itemId,
          itemName: boostItem.itemName,
          results:  scenarioResults
        };
      }
    }

    const maxThreat = moveResults[moveResults.length - 1];

    threats.push({
      moveId,
      moveName:    moveData.name,
      moveType:    effectMoveType,
      originalType: effectMoveType !== moveData.type ? moveData.type : null,
      category:    moveData.category,
      power:       effectPower,
      typeEff,
      abilityNote,
      itemScenario,
      results:     moveResults,
      threatScore: maxThreat.maxPct,
      ...(moveData.hitCount && { hitCount: moveData.hitCount }),
      ...(moveData.hitMin && { hitMin: moveData.hitMin, hitMax: moveData.hitMax }),
      ...(moveData.tripleAxel && { tripleAxel: true }),
      ...(moveData.alwaysCrit && { alwaysCrit: true }),
      ...(oppCondNote && effectPower === moveData.power && { conditionalNote: oppCondNote }),
      ...(dynNoteOpp && { dynamicNote: dynNoteOpp })
    });
  }

  threats.sort((a, b) => b.threatScore - a.threatScore);
  return threats;
}

/**
 * 判断是否可能一击必杀（最大伤害 >= 我方HP）
 */
function canOneShot(maxDmg, myHP) {
  return maxDmg >= myHP;
}

/**
 * 判断最小伤害是否也能一击必杀
 */
function guaranteedOneShot(minDmg, myHP) {
  return minDmg >= myHP;
}
