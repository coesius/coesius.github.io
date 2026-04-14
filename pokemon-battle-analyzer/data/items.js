// 常用竞技道具数据
// category: 'offensive'|'defensive'|'speed'|'utility'
// effect: 道具效果描述，用于计算

const ITEMS = {
  // ========== 讲究系 ==========
  'choice-scarf': {
    name: '讲究围巾',
    nameEn: 'Choice Scarf',
    category: 'speed',
    desc: '速度×1.5，但只能使用第一个选择的招式',
    speedMult: 1.5,
    locked: true
  },
  'choice-band': {
    name: '讲究头带',
    nameEn: 'Choice Band',
    category: 'offensive',
    desc: '攻击×1.5，但只能使用第一个选择的招式',
    atkMult: 1.5,
    locked: true
  },
  'choice-specs': {
    name: '讲究眼镜',
    nameEn: 'Choice Specs',
    category: 'offensive',
    desc: '特攻×1.5，但只能使用第一个选择的招式',
    spaMult: 1.5,
    locked: true
  },

  // ========== 攻击道具 ==========
  'life-orb': {
    name: '生命宝珠',
    nameEn: 'Life Orb',
    category: 'offensive',
    desc: '招式威力×1.3，但使用招式后扣除最大HP的10%',
    damageMult: 1.3
  },
  'expert-belt': {
    name: '达人腰带',
    nameEn: 'Expert Belt',
    category: 'offensive',
    desc: '超效果招式威力×1.2',
    superEffMult: 1.2
  },
  'muscle-band': {
    name: '力量头带',
    nameEn: 'Muscle Band',
    category: 'offensive',
    desc: '物理招式威力×1.1',
    physMult: 1.1
  },
  'wise-glasses': {
    name: '博识眼镜',
    nameEn: 'Wise Glasses',
    category: 'offensive',
    desc: '特殊招式威力×1.1',
    specMult: 1.1
  },

  // ========== 防御道具 ==========
  'leftovers': {
    name: '吃剩的东西',
    nameEn: 'Leftovers',
    category: 'defensive',
    desc: '每回合末恢复最大HP的1/16'
  },
  'rocky-helmet': {
    name: '凸凸头盔',
    nameEn: 'Rocky Helmet',
    category: 'defensive',
    desc: '受到接触技能时，对方扣除最大HP的1/6'
  },
  'assault-vest': {
    name: '突击背心',
    nameEn: 'Assault Vest',
    category: 'defensive',
    desc: '特防×1.5，但只能使用攻击招式',
    spdMult: 1.5
  },
  'eviolite': {
    name: '进化奇石',
    nameEn: 'Eviolite',
    category: 'defensive',
    desc: '未完全进化宝可梦的防御和特防×1.5'
  },

  // ========== 速度/优先道具 ==========
  'quick-claw': {
    name: '先制之爪',
    nameEn: 'Quick Claw',
    category: 'speed',
    desc: '有一定概率先手行动（约20%）'
  },
  'iron-ball': {
    name: '铁球',
    nameEn: 'Iron Ball',
    category: 'speed',
    desc: '速度×0.5，地面技能可命中飞行/漂浮',
    speedMult: 0.5
  },

  // ========== 恢复道具 ==========
  'sitrus-berry': {
    name: '西托拉木果',
    nameEn: 'Sitrus Berry',
    category: 'defensive',
    desc: 'HP低于50%时恢复最大HP的25%'
  },
  'aguav-berry': {
    name: '蒙古斯特木果',
    nameEn: 'Aguav Berry',
    category: 'defensive',
    desc: 'HP低于25%时恢复最大HP的33%（混乱性格触发时会造成混乱）'
  },

  // ========== 属性宝石 ==========
  'fire-gem': { name: '火焰宝石', nameEn: 'Fire Gem', category: 'offensive', type: 'fire', gemMult: 1.3 },
  'water-gem': { name: '水宝石', nameEn: 'Water Gem', category: 'offensive', type: 'water', gemMult: 1.3 },
  'electric-gem': { name: '电气宝石', nameEn: 'Electric Gem', category: 'offensive', type: 'electric', gemMult: 1.3 },
  'grass-gem': { name: '草宝石', nameEn: 'Grass Gem', category: 'offensive', type: 'grass', gemMult: 1.3 },
  'ice-gem': { name: '冰宝石', nameEn: 'Ice Gem', category: 'offensive', type: 'ice', gemMult: 1.3 },
  'fighting-gem': { name: '格斗宝石', nameEn: 'Fighting Gem', category: 'offensive', type: 'fighting', gemMult: 1.3 },
  'poison-gem': { name: '毒宝石', nameEn: 'Poison Gem', category: 'offensive', type: 'poison', gemMult: 1.3 },
  'ground-gem': { name: '地面宝石', nameEn: 'Ground Gem', category: 'offensive', type: 'ground', gemMult: 1.3 },
  'flying-gem': { name: '飞行宝石', nameEn: 'Flying Gem', category: 'offensive', type: 'flying', gemMult: 1.3 },
  'psychic-gem': { name: '超能力宝石', nameEn: 'Psychic Gem', category: 'offensive', type: 'psychic', gemMult: 1.3 },
  'bug-gem': { name: '虫宝石', nameEn: 'Bug Gem', category: 'offensive', type: 'bug', gemMult: 1.3 },
  'rock-gem': { name: '岩石宝石', nameEn: 'Rock Gem', category: 'offensive', type: 'rock', gemMult: 1.3 },
  'ghost-gem': { name: '幽灵宝石', nameEn: 'Ghost Gem', category: 'offensive', type: 'ghost', gemMult: 1.3 },
  'dragon-gem': { name: '龙宝石', nameEn: 'Dragon Gem', category: 'offensive', type: 'dragon', gemMult: 1.3 },
  'dark-gem': { name: '恶宝石', nameEn: 'Dark Gem', category: 'offensive', type: 'dark', gemMult: 1.3 },
  'steel-gem': { name: '钢宝石', nameEn: 'Steel Gem', category: 'offensive', type: 'steel', gemMult: 1.3 },
  'fairy-gem': { name: '妖精宝石', nameEn: 'Fairy Gem', category: 'offensive', type: 'fairy', gemMult: 1.3 },
  'normal-gem': { name: '一般宝石', nameEn: 'Normal Gem', category: 'offensive', type: 'normal', gemMult: 1.3 },

  // ========== 增幅/场地道具 ==========
  'terrain-extender': {
    name: '地形扩展器',
    nameEn: 'Terrain Extender',
    category: 'utility',
    desc: '使用场地技能时，效果延续8回合而非5回合'
  },
  'heat-rock': {
    name: '炎热岩',
    nameEn: 'Heat Rock',
    category: 'utility',
    desc: '使用晴天时，效果延续8回合而非5回合'
  },
  'damp-rock': {
    name: '潮湿岩',
    nameEn: 'Damp Rock',
    category: 'utility',
    desc: '使用降雨时，效果延续8回合而非5回合'
  },
  'smooth-rock': {
    name: '平滑岩',
    nameEn: 'Smooth Rock',
    category: 'utility',
    desc: '使用沙暴时，效果延续8回合而非5回合'
  },
  'icy-rock': {
    name: '冰冻岩',
    nameEn: 'Icy Rock',
    category: 'utility',
    desc: '使用冰雹时，效果延续8回合而非5回合'
  },

  // ========== 特殊道具 ==========
  'focus-sash': {
    name: '气势头带',
    nameEn: 'Focus Sash',
    category: 'defensive',
    desc: 'HP满时，受到一击必杀的攻击时剩余1HP存活'
  },
  'focus-band': {
    name: '气势腰带',
    nameEn: 'Focus Band',
    category: 'defensive',
    desc: '有一定概率（约11.7%）在受到致命一击时剩余1HP存活'
  },
  'white-herb': {
    name: '白色香草',
    nameEn: 'White Herb',
    category: 'utility',
    desc: '一次性恢复所有属性下降状态'
  },
  'power-herb': {
    name: '力量香草',
    nameEn: 'Power Herb',
    category: 'offensive',
    desc: '使用需要蓄力的招式时可以立即释放（一次性）'
  },
  'shed-shell': {
    name: '脱皮壳',
    nameEn: 'Shed Shell',
    category: 'utility',
    desc: '可以无视捕捉效果逃跑'
  },
  'black-sludge': {
    name: '黑色污泥',
    nameEn: 'Black Sludge',
    category: 'defensive',
    desc: '毒系宝可梦每回合末恢复HP的1/16，非毒系扣除HP的1/8'
  },
  'none': {
    name: '无道具',
    nameEn: 'None',
    category: 'utility',
    desc: '不携带道具'
  }
};

/**
 * 获取道具对速度的倍率
 * @param {string} itemId
 * @returns {number}
 */
function getItemSpeedMult(itemId) {
  const item = ITEMS[itemId];
  if (!item) return 1;
  return item.speedMult || 1;
}

// 别名：兼容 calc/stats.js 和其他模块的调用
const getItemSpeedMultiplier = getItemSpeedMult;

/**
 * 获取道具对进攻属性的倍率
 * @param {string} itemId
 * @param {string} category 'physical'|'special'
 * @param {string} moveType 技能属性
 * @param {number} typeEffMult 属性相克倍率
 * @returns {number}
 */
function getItemDamageMult(itemId, category, moveType, typeEffMult) {
  const item = ITEMS[itemId];
  if (!item) return 1;
  let mult = 1;
  if (item.damageMult) mult *= item.damageMult;
  if (item.physMult && category === 'physical') mult *= item.physMult;
  if (item.specMult && category === 'special') mult *= item.specMult;
  if (item.superEffMult && typeEffMult >= 2) mult *= item.superEffMult;
  if (item.gemMult && item.type === moveType) mult *= item.gemMult;
  return mult;
}

/**
 * 获取道具对攻击属性的乘数（直接影响攻击/特攻值）
 * @param {string} itemId
 * @param {string} category 'physical'|'special'
 * @returns {number}
 */
function getItemStatMult(itemId, category) {
  const item = ITEMS[itemId];
  if (!item) return 1;
  if (item.atkMult && category === 'physical') return item.atkMult;
  if (item.spaMult && category === 'special') return item.spaMult;
  if (item.spdMult && category === 'special_defense') return item.spdMult; // assault vest
  return 1;
}
