// 25种性格数据
// boost: 加成属性（1.1倍），reduce: 削弱属性（0.9倍），null表示无影响
const NATURES = {
  hardy:    { name: '勤奋', nameEn: 'Hardy',    boost: null,  reduce: null  },
  lonely:   { name: '孤僻', nameEn: 'Lonely',   boost: 'atk', reduce: 'def' },
  brave:    { name: '勇敢', nameEn: 'Brave',    boost: 'atk', reduce: 'spe' },
  adamant:  { name: '固执', nameEn: 'Adamant',  boost: 'atk', reduce: 'spa' },
  naughty:  { name: '顽皮', nameEn: 'Naughty',  boost: 'atk', reduce: 'spd' },
  bold:     { name: '大胆', nameEn: 'Bold',     boost: 'def', reduce: 'atk' },
  docile:   { name: '坦率', nameEn: 'Docile',   boost: null,  reduce: null  },
  relaxed:  { name: '悠闲', nameEn: 'Relaxed',  boost: 'def', reduce: 'spe' },
  impish:   { name: '淘气', nameEn: 'Impish',   boost: 'def', reduce: 'spa' },
  lax:      { name: '乐天', nameEn: 'Lax',      boost: 'def', reduce: 'spd' },
  timid:    { name: '胆小', nameEn: 'Timid',    boost: 'spe', reduce: 'atk' },
  hasty:    { name: '急躁', nameEn: 'Hasty',    boost: 'spe', reduce: 'def' },
  serious:  { name: '认真', nameEn: 'Serious',  boost: null,  reduce: null  },
  jolly:    { name: '爽朗', nameEn: 'Jolly',    boost: 'spe', reduce: 'spa' },
  naive:    { name: '天真', nameEn: 'Naive',    boost: 'spe', reduce: 'spd' },
  modest:   { name: '内敛', nameEn: 'Modest',   boost: 'spa', reduce: 'atk' },
  mild:     { name: '温和', nameEn: 'Mild',     boost: 'spa', reduce: 'def' },
  quiet:    { name: '冷静', nameEn: 'Quiet',    boost: 'spa', reduce: 'spe' },
  bashful:  { name: '害羞', nameEn: 'Bashful',  boost: null,  reduce: null  },
  rash:     { name: '浮躁', nameEn: 'Rash',     boost: 'spa', reduce: 'spd' },
  calm:     { name: '温顺', nameEn: 'Calm',     boost: 'spd', reduce: 'atk' },
  gentle:   { name: '温柔', nameEn: 'Gentle',   boost: 'spd', reduce: 'def' },
  sassy:    { name: '自大', nameEn: 'Sassy',    boost: 'spd', reduce: 'spe' },
  careful:  { name: '慎重', nameEn: 'Careful',  boost: 'spd', reduce: 'spa' },
  quirky:   { name: '浮躁', nameEn: 'Quirky',   boost: null,  reduce: null  }
};

// 获取某个属性的加速性格列表
function getNaturesBoostingStat(stat) {
  return Object.entries(NATURES)
    .filter(([, n]) => n.boost === stat)
    .map(([id, n]) => ({ id, ...n }));
}

// 获取某个属性的减速性格列表
function getNaturesReducingStat(stat) {
  return Object.entries(NATURES)
    .filter(([, n]) => n.reduce === stat)
    .map(([id, n]) => ({ id, ...n }));
}

/**
 * 获取性格对某属性的倍率
 * @param {string} natureId 性格ID
 * @param {string} stat 属性名 (atk/def/spa/spd/spe)
 * @returns {number} 1.1 / 1.0 / 0.9
 */
function getNatureMultiplier(natureId, stat) {
  const nature = NATURES[natureId];
  if (!nature || stat === 'hp') return 1.0;
  if (nature.boost === stat) return 1.1;
  if (nature.reduce === stat) return 0.9;
  return 1.0;
}

// 加速性格（速度+1.1）
const SPEED_BOOST_NATURES = ['timid', 'hasty', 'jolly', 'naive'];
// 减速性格（速度×0.9）
const SPEED_REDUCE_NATURES = ['brave', 'relaxed', 'quiet', 'sassy'];
// 加攻性格
const ATK_BOOST_NATURES = ['lonely', 'brave', 'adamant', 'naughty'];
// 加特攻性格
const SPA_BOOST_NATURES = ['modest', 'mild', 'quiet', 'rash'];
// 加防性格
const DEF_BOOST_NATURES = ['bold', 'docile', 'relaxed', 'impish', 'lax'];
// 加特防性格
const SPD_BOOST_NATURES = ['calm', 'gentle', 'sassy', 'careful'];
