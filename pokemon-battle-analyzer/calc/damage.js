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
  if (typeEff >= 4) notes.push('效果极佳★');
  else if (typeEff >= 2) notes.push('效果拔群');
  else if (typeEff <= 0.25) notes.push('效果极差');
  else if (typeEff <= 0.5) notes.push('效果不好');
  if (stab > 1) notes.push('本系加成');
  if (weatherMult > 1) notes.push('天气加成');
  if (terrainMult > 1) notes.push('场地加成');
  if (burnMult < 1) notes.push('灼烧减半');
  if (critMult > 1) notes.push('急所');
  return notes.join(' / ');
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
    if (atkAbilEff.atkStatMult) atkStat = Math.floor(atkStat * atkAbilEff.atkStatMult);

    // ── 4. 基础属性相克（用于 filter/solid-rock 判断）
    const baseTypeEff = (typeof getTypeEffectiveness === 'function')
      ? getTypeEffectiveness(effectMoveType, defender.types) : 1;

    // 冷冻干燥对水属性固定超效
    let typeEffOverride;
    if (moveId === 'freeze-dry' && defender.types.includes('water')) {
      typeEffOverride = Math.max(baseTypeEff, 2);
    }

    // ── 5. 单配置伤害计算函数（含防御方特性）
    const computeDmg = (defCfg, defAbilEff) => {
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

      const dmg = calcDamage({
        attackStat:  atkStat,
        defenseStat: finalDefStat,
        defenderHP:  defHP,
        power:       effectPower,
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
          abilityMult:     abilMult,
          typeEffOverride: typeEffOverride
        }
      });

      // 合并说明文本
      const noteArr = [specialEff.note, atkAbilEff.note,
                       defAbilEff && defAbilEff.note, dmg.note].filter(Boolean);
      return { ...defCfg, ...dmg, hp: defHP, note: noteArr.join(' / ') || undefined };
    };

    // ── 6. 主结果（已知或无特性）
    const knownDefAbilEff = (defAbilityId && typeof getDefAbilityEffect === 'function')
      ? getDefAbilityEffect(defAbilityId, effectMoveType, moveData.category, moveId, flags, baseTypeEff)
      : {};

    const moveResults = defConfigs.map(cfg => computeDmg(cfg, knownDefAbilEff));

    // ── 7. 特性未知时，枚举有影响的特性形成情景
    let scenarios = [];
    if (!defAbilityId && defPossible.length > 0 && typeof getDistinctDefAbilityEffects === 'function') {
      const variants = getDistinctDefAbilityEffects(
        defPossible, effectMoveType, moveData.category, moveId, flags, baseTypeEff
      );
      for (const { abilityId, effect } of variants) {
        const abilData = (defender.abilities || []).find(a => a.id === abilityId);
        const abilName = abilData ? abilData.name : abilityId;
        scenarios.push({
          abilityId,
          abilityName: abilName,
          results: defConfigs.map(cfg => computeDmg(cfg, effect))
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
    if (scenarios.length > 0) entry.scenarios = scenarios;
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

    if (!effectPower || effectPower < minPower) continue;

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

    const isPhys   = moveData.category === 'physical';
    const defBase  = isPhys ? attacker.baseStats.atk : attacker.baseStats.spa;

    // ── 4. 属性相克
    const typeEff = (typeof getTypeEffectiveness === 'function')
      ? getTypeEffectiveness(effectMoveType, defender.pokemon.types) : 1;
    if (typeEff === 0) continue;

    // ── 5. 我方防御值
    let myDefStat = isPhys ? myDef : mySpd;
    if (moveId === 'psyshock' || moveId === 'psystrike') myDefStat = myDef;
    if (!isPhys && field.weather === 'sandstorm' && defender.pokemon.types.includes('rock'))
      myDefStat = Math.floor(myDefStat * 1.5);

    // ── 6. 我方防御特性减伤
    const myAbilDefEff = (myAbilityId && typeof getDefAbilityEffect === 'function')
      ? getDefAbilityEffect(myAbilityId, effectMoveType, moveData.category, moveId, flags, typeEff)
      : {};

    if (myAbilDefEff.immune) continue; // 我方免疫，跳过此威胁

    const myDefAbilMult = myAbilDefEff.mult || 1;

    // ── 7. 计算三种进攻配置
    const moveResults = [];
    for (const atkCfg of atkConfigs) {
      let oppAtkStat = calcStat(defBase, atkCfg.atkSP, atkCfg.natureMult);
      if (oppAbilEff.atkStatMult) oppAtkStat = Math.floor(oppAtkStat * oppAbilEff.atkStatMult);

      const myScreens = field.myScreens || {};
      const hasScreen = isPhys
        ? (myScreens.reflect || myScreens.auroraVeil)
        : (myScreens.lightScreen || myScreens.auroraVeil);

      const dmg = calcDamage({
        attackStat:  oppAtkStat,
        defenseStat: myDefStat,
        defenderHP:  myHP,
        power:       effectPower,
        moveType:    effectMoveType,
        category:    moveData.category,
        atkTypes:    attacker.types,
        defTypes:    defender.pokemon.types,
        field,
        atkStatus:   {},
        modifiers: {
          screen:       !!hasScreen,
          stabOverride: oppAbilEff.stabOverride,
          abilityMult:  myDefAbilMult
        }
      });

      const noteArr = [specialEff.note, abilityNote, myAbilDefEff.note, dmg.note].filter(Boolean);
      moveResults.push({ ...atkCfg, ...dmg, note: noteArr.join(' / ') || undefined });
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
      results:     moveResults,
      threatScore: maxThreat.maxPct
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
