/**
 * 宝可梦冠军属性值计算模块
 *
 * 核心公式（Lv.50，IV=31，SP → EV 换算 SP*8）：
 *   HP   = floor((2*Base + 31 + floor(SP*8/4)) * 50/100) + 50 + 10
 *   Stat = floor((floor((2*Base + 31 + floor(SP*8/4)) * 50/100) + 5) * Nature)
 */

/** Rank倍率表：攻/防/特攻/特防/速度 */
const RANK_MULT = {
  '-6': [2, 8],  // 2/8 = 0.25
  '-5': [2, 7],
  '-4': [2, 6],
  '-3': [2, 5],
  '-2': [2, 4],
  '-1': [2, 3],
   '0': [1, 1],
  '+1': [3, 2],
  '+2': [4, 2],
  '+3': [5, 2],
  '+4': [6, 2],
  '+5': [7, 2],
  '+6': [8, 2]
};

/**
 * 计算HP属性值
 * @param {number} base 种族值
 * @param {number} sp SP点数 (0-32)
 * @returns {number} 实际HP值
 */
function calcHP(base, sp = 0) {
  const ev = sp * 8;
  return Math.floor((2 * base + 31 + Math.floor(ev / 4)) * 50 / 100) + 50 + 10;
}

/**
 * 计算非HP属性值
 * @param {number} base 种族值
 * @param {number} sp SP点数 (0-32)
 * @param {number} natureMult 性格倍率 (0.9 / 1.0 / 1.1)
 * @returns {number} 实际属性值
 */
function calcStat(base, sp = 0, natureMult = 1.0) {
  const ev = sp * 8;
  const inner = Math.floor((2 * base + 31 + Math.floor(ev / 4)) * 50 / 100) + 5;
  return Math.floor(inner * natureMult);
}

/**
 * 计算所有属性值
 * @param {Object} pokemon 宝可梦数据（含 baseStats）
 * @param {Object} config 配置 { nature, sp: {hp,atk,def,spa,spd,spe}, rankBoosts: {atk,def,spa,spd,spe}, item, status }
 * @returns {Object} 各属性实际值和带rank的有效值
 */
function calcAllStats(pokemon, config) {
  const { baseStats } = pokemon;
  const sp = config.sp || { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  const nature = config.nature || 'hardy';
  const natureMults = getNatureMultsFromId(nature);
  const ranks = config.rankBoosts || { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  const item = config.item || 'none';
  const status = config.status || null; // 'paralysis', 'burn', etc.

  const hp = calcHP(baseStats.hp, sp.hp);
  const atk = calcStat(baseStats.atk, sp.atk, natureMults.atk);
  const def = calcStat(baseStats.def, sp.def, natureMults.def);
  const spa = calcStat(baseStats.spa, sp.spa, natureMults.spa);
  const spd = calcStat(baseStats.spd, sp.spd, natureMults.spd);
  let spe = calcStat(baseStats.spe, sp.spe, natureMults.spe);

  // 道具对速度的影响
  const itemSpeedMult = getItemSpeedMultiplier(item);
  // 状态对速度的影响（麻痹×0.5）
  const statusSpeedMult = (status === 'paralysis') ? 0.5 : 1;

  // 基础实际值（不含rank）
  const baseValues = { hp, atk, def, spa, spd, spe };

  // 含道具和状态的速度
  const effectiveSpe = Math.floor(spe * itemSpeedMult * statusSpeedMult);

  // 含rank的有效攻/防值（用于伤害计算）
  function applyRank(val, rank) {
    const r = Math.max(-6, Math.min(6, rank || 0));
    const [num, den] = RANK_MULT[r > 0 ? `+${r}` : `${r}`];
    return Math.floor(val * num / den);
  }

  // 含rank的道具攻击倍率（讲究头带/眼镜）
  const choiceBandMult = (item === 'choice-band') ? 1.5 : 1;
  const choiceSpecsMult = (item === 'choice-specs') ? 1.5 : 1;
  // 突击背心提升特防
  const assaultVestMult = (item === 'assault-vest') ? 1.5 : 1;

  const effectiveAtk = Math.floor(applyRank(atk, ranks.atk) * choiceBandMult);
  const effectiveDef = applyRank(def, ranks.def);
  const effectiveSpa = Math.floor(applyRank(spa, ranks.spa) * choiceSpecsMult);
  const effectiveSpd = Math.floor(applyRank(spd, ranks.spd) * assaultVestMult);

  return {
    hp,
    // 基础值（不含rank/道具）
    base: { atk, def, spa, spd, spe },
    // 有效值（含rank/道具/状态）
    effective: {
      atk: effectiveAtk,
      def: effectiveDef,
      spa: effectiveSpa,
      spd: effectiveSpd,
      spe: effectiveSpe
    },
    ranks
  };
}

/**
 * 从性格ID获取各属性的倍率
 * @param {string} natureId
 * @returns {Object} {atk, def, spa, spd, spe} 各自的倍率
 */
function getNatureMultsFromId(natureId) {
  // 依赖 data/natures.js 中定义的 NATURES
  const nature = (typeof NATURES !== 'undefined') ? NATURES[natureId] : null;
  const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
  const result = {};
  for (const stat of stats) {
    if (nature && nature.boost === stat) result[stat] = 1.1;
    else if (nature && nature.reduce === stat) result[stat] = 0.9;
    else result[stat] = 1.0;
  }
  return result;
}

/**
 * 应用Rank变化的倍率（整数运算）
 * @param {number} baseVal 基础属性值
 * @param {number} rank -6 到 +6
 * @returns {number}
 */
function applyRankMult(baseVal, rank) {
  const r = Math.max(-6, Math.min(6, rank || 0));
  const key = r > 0 ? `+${r}` : `${r}`;
  const [num, den] = RANK_MULT[key];
  return Math.floor(baseVal * num / den);
}

/**
 * 快速计算对方速度的所有可能情况
 * @param {number} baseSpe 对方速度种族值
 * @returns {Array} 各配置下的速度值
 */
function calcAllPossibleSpeeds(baseSpe) {
  const results = [];
  const spValues = [0, 8, 16, 24, 32]; // 低/中/高 SP分配（抽样关键点）
  const natureLabels = [
    { mult: 0.9, label: '减速性格', key: 'reduce' },
    { mult: 1.0, label: '中性性格', key: 'neutral' },
    { mult: 1.1, label: '加速性格', key: 'boost' }
  ];
  const items = [
    { mult: 1, label: '无道具', id: 'none' },
    { mult: 1.5, label: '讲究围巾', id: 'choice-scarf' }
  ];
  const ranks = [-1, 0, 1, 2, 3, 4, 6];

  for (const spVal of spValues) {
    for (const nat of natureLabels) {
      const baseStat = calcStat(baseSpe, spVal, nat.mult);
      for (const item of items) {
        for (const rank of ranks) {
          const withRank = applyRankMult(baseStat, rank);
          const finalSpe = Math.floor(withRank * item.mult);
          results.push({
            sp: spVal,
            nature: nat.label,
            natureKey: nat.key,
            item: item.label,
            itemId: item.id,
            rank,
            baseStat,
            speed: finalSpe,
            label: buildSpeedLabel(spVal, nat.label, item.label, rank)
          });
        }
      }
    }
  }

  // 去重并排序
  const seen = new Set();
  return results
    .filter(r => {
      const key = r.speed;
      // 保留每个速度值的代表性配置（最简单的那个）
      return true; // 全部保留，由调用方筛选
    })
    .sort((a, b) => a.speed - b.speed);
}

function buildSpeedLabel(sp, nature, item, rank) {
  const parts = [];
  if (sp === 0) parts.push('速度0SP');
  else if (sp === 16) parts.push('速度16SP');
  else if (sp === 32) parts.push('速度满SP');
  else parts.push(`速度${sp}SP`);
  parts.push(nature);
  if (item !== '无道具') parts.push(item);
  if (rank > 0) parts.push(`速度+${rank}`);
  else if (rank < 0) parts.push(`速度${rank}`);
  return parts.join(' / ');
}

/**
 * 顺风状态速度翻倍
 */
function applyTailwind(speed) {
  return speed * 2;
}

/**
 * 奇异空间（Trick Room）中速度比较翻转
 */
function isFasterInTrickRoom(mySpeed, oppSpeed) {
  return mySpeed < oppSpeed; // 奇异空间中更慢的先手
}
