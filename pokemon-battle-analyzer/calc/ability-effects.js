/**
 * 特性与技能交互效果模块
 * 处理防御方特性免疫/减伤、攻击方特性增益、特殊技能场地联动
 */

// ── 技能标签集合 ──────────────────────────────────────

/** 拳击系技能（铁拳×1.2） */
const PUNCH_MOVES = new Set([
  'fire-punch', 'ice-punch', 'thunder-punch', 'drain-punch', 'mach-punch',
  'focus-punch', 'shadow-punch', 'bullet-punch', 'meteor-mash', 'hammer-arm',
  'sky-uppercut', 'comet-punch', 'mega-punch', 'dynamic-punch', 'power-up-punch',
  'ice-hammer', 'surging-strikes', 'plasma-fists', 'rage-fist'
]);

/** 音波系技能（隔音免疫；朋克摇滚×1.3 仅冠军未实装，不计入） */
const SOUND_MOVES = new Set([
  'hyper-voice', 'boomburst', 'bug-buzz', 'sparkling-aria', 'clanging-scales',
  'clangorous-soul', 'disarming-voice', 'echoed-voice', 'noble-roar',
  'overdrive', 'parting-shot', 'relic-song', 'snore', 'torch-song',
  'uproar', 'round', 'sing', 'growl', 'roar', 'screech', 'metal-sound',
  'supersonic', 'chatter', 'snarl', 'alluring-voice'
]);

/** 弹/炸弹系技能（子弹防弹免疫） */
const BALL_BOMB_MOVES = new Set([
  'aura-sphere', 'shadow-ball', 'sludge-bomb', 'focus-blast', 'energy-ball',
  'seed-bomb', 'mud-bomb', 'weather-ball', 'electro-ball', 'gyro-ball',
  'magnet-bomb', 'zap-cannon', 'acid-spray', 'bullet-seed', 'barrage',
  'mist-ball', 'luster-purge', 'pyro-ball', 'rock-blast', 'egg-bomb'
]);

/** 咬击系技能（强颚×1.5） */
const BITE_MOVES = new Set([
  'bite', 'crunch', 'fire-fang', 'ice-fang', 'thunder-fang', 'poison-fang',
  'psychic-fangs', 'fishious-rend', 'jaw-lock', 'hyper-fang', 'leech-life',
  'bug-bite'
]);

/** 斩击系技能（锋利×1.5） */
const CUT_MOVES = new Set([
  'cut', 'slash', 'night-slash', 'leaf-blade', 'psycho-cut', 'cross-poison',
  'air-cutter', 'fury-cutter', 'x-scissor', 'razor-leaf', 'false-swipe',
  'sacred-sword', 'secret-sword', 'ceaseless-edge', 'kowtow-cleave',
  'stone-axe', 'bitter-blade', 'aerial-ace', 'dragon-claw', 'shadow-claw'
]);

/** 波动系技能（大炮手×1.5） */
const PULSE_MOVES = new Set([
  'water-pulse', 'dragon-pulse', 'dark-pulse', 'aura-sphere', 'heal-pulse',
  'origin-pulse', 'oblivion-wing', 'terrain-pulse', 'core-enforcer'
]);

/** 含反弹伤害的技能（鲁莽×1.2） */
const RECOIL_MOVES = new Set([
  'double-edge', 'flare-blitz', 'brave-bird', 'volt-tackle', 'wood-hammer',
  'head-smash', 'wave-crash', 'wild-charge', 'take-down', 'submission',
  'head-charge', 'high-jump-kick', 'jump-kick'
]);

/**
 * 物理技能中属于非接触的（其余物理技能视为接触）
 * 用于 tough-claws 判断
 */
const NON_CONTACT_PHYSICAL = new Set([
  'earthquake', 'magnitude', 'bulldoze', 'rock-slide', 'stone-edge',
  'rock-blast', 'self-destruct', 'explosion', 'rock-tomb', 'icicle-spear',
  'bullet-seed', 'pin-missile', 'precipice-blades', 'head-smash',
  'diamond-storm', 'gyro-ball', 'heavy-slam', 'heat-crash',
  'first-impression', 'wave-crash', 'rock-throw', 'rock-wrecker'
]);

/**
 * 获取技能的标签集合
 * @param {string} moveId
 * @param {Object} moveData
 * @returns {{ isPunch, isSound, isBall, isBite, isCut, isPulse, hasRecoil, isContact }}
 */
function getMoveFlags(moveId, moveData) {
  return {
    isPunch:    PUNCH_MOVES.has(moveId),
    isSound:    SOUND_MOVES.has(moveId),
    isBall:     BALL_BOMB_MOVES.has(moveId),
    isBite:     BITE_MOVES.has(moveId),
    isCut:      CUT_MOVES.has(moveId),
    isPulse:    PULSE_MOVES.has(moveId),
    hasRecoil:  RECOIL_MOVES.has(moveId),
    isContact:  moveData.category === 'physical' && !NON_CONTACT_PHYSICAL.has(moveId)
  };
}

// ── 技能与场地联动效果 ────────────────────────────────

/**
 * 技能与天气/场地的特殊交互（气象球、地形脉冲、日光束/叶刃等）
 * @param {string} moveId
 * @param {Object} field  { weather, terrain }
 * @returns {{ newType?: string, newPower?: number, note?: string }}
 */
function applySpecialMoveEffects(moveId, field) {
  const weather = field.weather || 'none';
  const terrain = field.terrain || 'none';

  if (moveId === 'weather-ball') {
    const wMap = {
      sun: { type: 'fire', cn: '火' }, 'harsh-sun': { type: 'fire', cn: '火' },
      rain: { type: 'water', cn: '水' }, 'heavy-rain': { type: 'water', cn: '水' },
      sandstorm: { type: 'rock', cn: '岩' },
      hail: { type: 'ice', cn: '冰' }, snow: { type: 'ice', cn: '冰' }
    };
    const wInfo = wMap[weather];
    if (wInfo) {
      return { newType: wInfo.type, newPower: 100, note: `气象球→${wInfo.cn}×2` };
    }
  }

  if (moveId === 'terrain-pulse') {
    const tMap = {
      electric: { type: 'electric', cn: '电' },
      grassy:   { type: 'grass',    cn: '草' },
      psychic:  { type: 'psychic',  cn: '超' },
      misty:    { type: 'fairy',    cn: '妖' }
    };
    const tInfo = tMap[terrain];
    if (tInfo) {
      return { newType: tInfo.type, newPower: 100, note: `地形脉冲→${tInfo.cn}×2` };
    }
  }

  if (moveId === 'solar-beam' || moveId === 'solar-blade') {
    const badWeather = ['rain', 'heavy-rain', 'sandstorm', 'hail', 'snow'];
    if (badWeather.includes(weather)) {
      return { newPower: 60, note: '非晴天威力减半' };
    }
  }

  return {};
}

// ── 防御方特性效果 ────────────────────────────────────

/**
 * 计算防御方特性对受到伤害的影响
 * @param {string} abilityId
 * @param {string} moveType    技能属性（已经过特殊效果处理）
 * @param {string} category    'physical'|'special'
 * @param {string} moveId
 * @param {Object} flags       getMoveFlags 的结果
 * @param {number} typeEff     属性相克倍率（用于 filter/solid-rock 判断）
 * @returns {{ immune?: boolean, mult?: number, note?: string }}
 */
function getDefAbilityEffect(abilityId, moveType, category, moveId, flags, typeEff) {
  switch (abilityId) {
    case 'levitate':
      if (moveType === 'ground') return { immune: true, note: '漂浮：免疫地面' };
      break;
    case 'water-absorb':
      if (moveType === 'water') return { immune: true, note: '储水：免疫水属性' };
      break;
    case 'storm-drain':
      if (moveType === 'water') return { immune: true, note: '蓄水：免疫水属性' };
      break;
    case 'volt-absorb':
      if (moveType === 'electric') return { immune: true, note: '蓄电：免疫电属性' };
      break;
    case 'lightning-rod':
      if (moveType === 'electric') return { immune: true, note: '避雷针：免疫电属性' };
      break;
    case 'motor-drive':
      if (moveType === 'electric') return { immune: true, note: '电气引擎：免疫电属性' };
      break;
    case 'sap-sipper':
      if (moveType === 'grass') return { immune: true, note: '草食：免疫草属性' };
      break;
    case 'flash-fire':
      if (moveType === 'fire') return { immune: true, note: '引火：免疫火属性' };
      break;
    case 'earth-eater':
      if (moveType === 'ground') return { immune: true, note: '食土：免疫地面属性' };
      break;
    case 'dry-skin':
      if (moveType === 'water') return { immune: true, note: '干燥皮肤：免疫水属性' };
      if (moveType === 'fire')  return { mult: 1.25,   note: '干燥皮肤：火属性×1.25' };
      break;
    case 'thick-fat':
      if (moveType === 'fire' || moveType === 'ice') return { mult: 0.5, note: '厚脂肪：火/冰×0.5' };
      break;
    case 'water-bubble':
      if (moveType === 'fire') return { mult: 0.5, note: '水泡：受火属性×0.5' };
      break;
    case 'purifying-salt':
      if (moveType === 'ghost') return { mult: 0.5, note: '净盐：幽灵属性×0.5' };
      break;
    case 'filter':
    case 'solid-rock':
    case 'prism-armor':
      if (typeEff >= 2) return { mult: 0.75, note: '过滤/坚硬岩石：超效×0.75' };
      break;
    case 'fur-coat':
      if (category === 'physical') return { mult: 0.5, note: '毛皮大衣：物理×0.5' };
      break;
    case 'bulletproof':
      if (flags.isBall) return { immune: true, note: '子弹防弹：免疫弹系技能' };
      break;
    case 'soundproof':
      if (flags.isSound) return { immune: true, note: '隔音：免疫音波技能' };
      break;
    case 'wonder-guard':
      if (typeEff < 2) return { immune: true, note: '神奇守护：仅超效有效' };
      break;
  }
  return {};
}

// ── 攻击方特性效果 ────────────────────────────────────

/**
 * 计算攻击方特性对输出伤害的影响
 * @param {string}   abilityId
 * @param {string}   moveId
 * @param {Object}   moveData   { type, category, power, ... }（可能已经过特殊效果修改）
 * @param {Object}   flags      getMoveFlags 的结果
 * @param {string[]} atkTypes   攻击方当前属性
 * @param {Object}   field      场地状态 { weather, terrain }
 * @returns {{ newType?: string, powerMult?: number, atkStatMult?: number, stabOverride?: number, note?: string }}
 */
function getAtkAbilityEffect(abilityId, moveId, moveData, flags, atkTypes, field) {
  const mType    = moveData.type;
  const weather  = field.weather || 'none';
  const result   = {};

  switch (abilityId) {
    case 'adaptability':
      if (atkTypes.includes(mType)) {
        result.stabOverride = 2.0;
        result.note = '适应力：本系×2';
      }
      break;

    case 'aerilate':
      if (mType === 'normal') {
        result.newType   = 'flying';
        result.powerMult = 1.2;
        result.note = '天空皮肤：一般→飞行×1.2';
      }
      break;

    case 'refrigerate':
      if (mType === 'normal') {
        result.newType   = 'ice';
        result.powerMult = 1.2;
        result.note = '冷冻皮肤：一般→冰×1.2';
      }
      break;

    case 'pixilate':
      if (mType === 'normal') {
        result.newType   = 'fairy';
        result.powerMult = 1.2;
        result.note = '妖精皮肤：一般→妖精×1.2';
      }
      break;

    case 'galvanize':
      if (mType === 'normal') {
        result.newType   = 'electric';
        result.powerMult = 1.2;
        result.note = '电气皮肤：一般→电×1.2';
      }
      break;

    case 'normalize':
      if (mType !== 'normal') {
        result.newType   = 'normal';
        result.powerMult = 1.2;
        result.note = '正常化：技能属性→一般×1.2';
      }
      break;

    case 'liquid-voice':
      if (flags.isSound && mType !== 'water') {
        result.newType = 'water';
        result.note = '液音：音波技能→水属性';
      }
      break;

    case 'tough-claws':
      if (flags.isContact) {
        result.powerMult = 1.3;
        result.note = '硬爪：接触技能×1.3';
      }
      break;

    case 'iron-fist':
      if (flags.isPunch) {
        result.powerMult = 1.2;
        result.note = '铁拳：拳击技能×1.2';
      }
      break;

    case 'strong-jaw':
      if (flags.isBite) {
        result.powerMult = 1.5;
        result.note = '强颚：咬击技能×1.5';
      }
      break;

    case 'sharpness':
      if (flags.isCut) {
        result.powerMult = 1.5;
        result.note = '锋利：斩击技能×1.5';
      }
      break;

    case 'technician':
      if (moveData.power > 0 && moveData.power <= 60) {
        result.powerMult = 1.5;
        result.note = '技术高手：威力≤60×1.5';
      }
      break;

    case 'mega-launcher':
      if (flags.isPulse) {
        result.powerMult = 1.5;
        result.note = '大炮手：波动技能×1.5';
      }
      break;

    case 'reckless':
      if (flags.hasRecoil) {
        result.powerMult = 1.2;
        result.note = '鲁莽：反弹技能×1.2';
      }
      break;

    case 'sand-force':
      if ((weather === 'sandstorm') && ['rock', 'ground', 'steel'].includes(mType)) {
        result.powerMult = 1.3;
        result.note = '沙之力：沙暴岩/地/钢×1.3';
      }
      break;

    case 'solar-power':
      if ((weather === 'sun' || weather === 'harsh-sun') && moveData.category === 'special') {
        result.powerMult = 1.5;
        result.note = '光合力量：晴天特殊×1.5';
      }
      break;

    case 'water-bubble':
      if (mType === 'water') {
        result.powerMult = 2.0;
        result.note = '水泡：水属性×2';
      }
      break;

    case 'huge-power':
    case 'pure-power':
      if (moveData.category === 'physical') {
        result.atkStatMult = 2.0;
        result.note = '巨力/纯力：攻击×2';
      }
      break;

    case 'gorilla-tactics':
      if (moveData.category === 'physical') {
        result.atkStatMult = 1.5;
        result.note = '猩猩战术：攻击×1.5';
      }
      break;
  }

  return result;
}

// ── 场景分析辅助 ──────────────────────────────────────

/**
 * 从一组可能的特性 ID 中，找出会影响防御方承受伤害的特性
 * （仅返回产生免疫或倍率变化的特性）
 * @param {string[]} possibleAbilityIds
 * @param {string}   moveType
 * @param {string}   category
 * @param {string}   moveId
 * @param {Object}   flags
 * @param {number}   typeEff
 * @returns {Array<{ abilityId: string, effect: Object }>}
 */
function getDistinctDefAbilityEffects(possibleAbilityIds, moveType, category, moveId, flags, typeEff) {
  const scenarios = [];
  for (const abId of possibleAbilityIds) {
    if (!abId) continue;
    const eff = getDefAbilityEffect(abId, moveType, category, moveId, flags, typeEff);
    if (eff.immune || (eff.mult !== undefined && eff.mult !== 1)) {
      scenarios.push({ abilityId: abId, effect: eff });
    }
  }
  return scenarios;
}

/**
 * 从一组可能的特性 ID 中，找出最大化攻击伤害的特性
 * （用于对方威胁：取对我方最不利的情况）
 * @param {string[]} possibleAbilityIds
 * @param {string}   moveId
 * @param {Object}   moveData
 * @param {Object}   flags
 * @param {string[]} atkTypes
 * @param {Object}   field
 * @returns {{ abilityId: string, effect: Object }|null}  最坏情况的特性效果，无增益时返回 null
 */
function getWorstCaseAtkAbilityEffect(possibleAbilityIds, moveId, moveData, flags, atkTypes, field) {
  let worstAbilityId = null;
  let worstEffect    = null;
  let worstScore     = 0;  // powerMult × atkStatMult × (stabOverride ? stabOverride/1.5 : 1)

  for (const abId of possibleAbilityIds) {
    if (!abId) continue;
    const eff = getAtkAbilityEffect(abId, moveId, moveData, flags, atkTypes, field);

    // Compute a rough "boost score" for comparison
    const pm   = eff.powerMult   || 1;
    const asm  = eff.atkStatMult || 1;
    const sm   = eff.stabOverride ? (eff.stabOverride / 1.5) : 1;  // ratio vs default STAB
    const score = pm * asm * sm;

    if (score > worstScore) {
      worstScore     = score;
      worstAbilityId = abId;
      worstEffect    = eff;
    }
  }

  return (worstScore > 1 && worstEffect) ? { abilityId: worstAbilityId, effect: worstEffect } : null;
}
