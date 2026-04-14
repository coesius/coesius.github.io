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

  // 属性相克
  const typeEff = (typeof getTypeEffectiveness === 'function')
    ? getTypeEffectiveness(moveType, defTypes)
    : 1;

  if (typeEff === 0) {
    return { min: 0, max: 0, minPct: 0, maxPct: 0, typeEff: 0, note: '无效（免疫）' };
  }

  // STAB
  const stab = atkTypes.includes(moveType) ? 1.5 : 1.0;

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
function calcMyMoveDamages(attacker, defender, myMoves, field = {}, atkStatus = {}) {
  const results = [];

  // 对方三种防御配置
  const defConfigs = [
    { label: '无投资（最低防御）', hpSP: 0, defSP: 0, natureMult: 1.0 },
    { label: '满HP+满防御', hpSP: 32, defSP: 32, natureMult: 1.0 },
    { label: '满HP+满防御+性格加成', hpSP: 32, defSP: 32, natureMult: 1.1 }
  ];

  for (const move of myMoves) {
    if (!move || !MOVES[move]) continue;
    const moveData = MOVES[move];
    if (moveData.category === 'status') continue;

    const isPhys = moveData.category === 'physical';
    const atkStat = isPhys ? attacker.stats.effective.atk : attacker.stats.effective.spa;
    const atkBase = isPhys ? attacker.pokemon.baseStats.atk : attacker.pokemon.baseStats.spa;

    const moveResults = [];
    for (const defCfg of defConfigs) {
      // 计算对方防御值
      const defBase = isPhys ? defender.baseStats.def : defender.baseStats.spd;
      const defHP_base = defender.baseStats.hp;

      const defStat = calcStat(defBase, defCfg.defSP, defCfg.natureMult);
      const defHP = calcHP(defHP_base, defCfg.hpSP);

      // 沙暴特殊：岩石系特防×1.5
      let finalDefStat = defStat;
      if (!isPhys && field.weather === 'sandstorm' && defender.types.includes('rock')) {
        finalDefStat = Math.floor(finalDefStat * 1.5);
      }
      // 冰雹：冰系防御×1.5（Generation IX新增）
      if (isPhys && field.weather === 'hail' && defender.types.includes('ice')) {
        finalDefStat = Math.floor(finalDefStat * 1.5);
      }

      // 道具对伤害的修正
      const typeEff = (typeof getTypeEffectiveness === 'function')
        ? getTypeEffectiveness(moveData.type, defender.types)
        : 1;
      const itemMult = (typeof getItemDamageMult === 'function')
        ? getItemDamageMult(attacker.item || 'none', moveData.category, moveData.type, typeEff)
        : 1;

      const dmg = calcDamage({
        attackStat: atkStat,
        defenseStat: finalDefStat,
        defenderHP: defHP,
        power: moveData.power,
        moveType: moveData.type,
        category: moveData.category,
        atkTypes: attacker.pokemon.types,
        defTypes: defender.types,
        field,
        atkStatus,
        modifiers: { itemMult }
      });

      moveResults.push({ ...defCfg, ...dmg, hp: defHP });
    }

    results.push({
      moveId: move,
      moveName: moveData.name,
      moveType: moveData.type,
      category: moveData.category,
      power: moveData.power,
      results: moveResults
    });
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
function calcOpponentThreats(defender, attacker, oppMoveIds, field = {}, minPower = 60) {
  const threats = [];

  // 对方三种进攻配置（攻击/特攻）
  const atkConfigs = [
    { label: '无投资', atkSP: 0, natureMult: 1.0 },
    { label: '满攻击', atkSP: 32, natureMult: 1.0 },
    { label: '满攻击+性格加成', atkSP: 32, natureMult: 1.1 }
  ];

  // 我方防御值（按实际配置）
  const myHP = defender.stats.hp;
  const myDef = defender.stats.effective.def;
  const mySpd = defender.stats.effective.spd;

  for (const moveId of oppMoveIds) {
    if (!MOVES[moveId]) continue;
    const moveData = MOVES[moveId];
    if (moveData.category === 'status') continue;
    if (!moveData.power || moveData.power < minPower) continue;

    const isPhys = moveData.category === 'physical';
    const defBase = isPhys ? attacker.baseStats.atk : attacker.baseStats.spa;

    // 计算属性相克
    const typeEff = (typeof getTypeEffectiveness === 'function')
      ? getTypeEffectiveness(moveData.type, defender.pokemon.types)
      : 1;
    if (typeEff === 0) continue;

    // 对我方的有效防御值
    let myDefStat = isPhys ? myDef : mySpd;
    // Psyshock 用物理防御
    if (moveId === 'psyshock' || moveId === 'psystrike') {
      myDefStat = myDef;
    }
    // 沙暴对我方岩石系特防加成
    if (!isPhys && field.weather === 'sandstorm' && defender.pokemon.types.includes('rock')) {
      myDefStat = Math.floor(myDefStat * 1.5);
    }

    const moveResults = [];
    for (const atkCfg of atkConfigs) {
      const oppAtkStat = calcStat(defBase, atkCfg.atkSP, atkCfg.natureMult);

      const dmg = calcDamage({
        attackStat: oppAtkStat,
        defenseStat: myDefStat,
        defenderHP: myHP,
        power: moveData.power,
        moveType: moveData.type,
        category: moveData.category,
        atkTypes: attacker.types,
        defTypes: defender.pokemon.types,
        field,
        atkStatus: {},
        modifiers: {}
      });

      moveResults.push({ ...atkCfg, ...dmg });
    }

    // 用最大伤害（满配对我）作为威胁排序依据
    const maxThreat = moveResults[moveResults.length - 1];

    threats.push({
      moveId,
      moveName: moveData.name,
      moveType: moveData.type,
      category: moveData.category,
      power: moveData.power,
      typeEff,
      results: moveResults,
      threatScore: maxThreat.maxPct  // 用满配最大伤害%作为威胁分
    });
  }

  // 按威胁度降序排列
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
