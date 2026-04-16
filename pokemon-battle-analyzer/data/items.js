// 宝可梦冠军实装道具数据（由 convert_items.js 生成）
// 数据来源：游戏内实装道具，中文名来自 Pokemon Showdown 汉化
// speedMult: 速度倍率 | typeMult+type: 属性威力倍率(×1.2)
// resistType: 抗性树果对应属性（受该属性超效果攻击时伤害×0.5）

const ITEMS = {
  'none': { name: '无道具', nameEn: 'None', category: 'utility', desc: '不携带道具' },
  'black-belt': { name: '黑带', nameEn: 'Black Belt', category: 'utility', typeMult: 1.2, type: 'fighting' },
  'black-glasses': { name: '黑色眼镜', nameEn: 'Black Glasses', category: 'utility', typeMult: 1.2, type: 'dark' },
  'bright-powder': { name: '光粉', nameEn: 'Bright Powder', category: 'utility' },
  'charcoal': { name: '木炭', nameEn: 'Charcoal', category: 'utility', typeMult: 1.2, type: 'fire' },
  'choice-scarf': { name: '讲究围巾', nameEn: 'Choice Scarf', category: 'speed', speedMult: 1.5, locked: true },
  'dragon-fang': { name: '龙之牙', nameEn: 'Dragon Fang', category: 'utility', typeMult: 1.2, type: 'dragon' },
  'fairy-feather': { name: '妖精之羽', nameEn: 'Fairy Feather', category: 'utility', typeMult: 1.2, type: 'fairy' },
  'focus-band': { name: '气势头带', nameEn: 'Focus Band', category: 'defensive' },
  'focus-sash': { name: '气势披带', nameEn: 'Focus Sash', category: 'defensive' },
  'hard-stone': { name: '硬石头', nameEn: 'Hard Stone', category: 'utility', typeMult: 1.2, type: 'rock' },
  'kings-rock': { name: '王者之证', nameEn: 'King\'s Rock', category: 'utility' },
  'leftovers': { name: '吃剩的东西', nameEn: 'Leftovers', category: 'defensive' },
  'light-ball': { name: '电气球', nameEn: 'Light Ball', category: 'offensive', note: '仅皮卡丘，攻击和特攻×2' },
  'magnet': { name: '磁铁', nameEn: 'Magnet', category: 'utility', typeMult: 1.2, type: 'electric' },
  'mental-herb': { name: '心灵香草', nameEn: 'Mental Herb', category: 'utility' },
  'metal-coat': { name: '金属膜', nameEn: 'Metal Coat', category: 'utility', typeMult: 1.2, type: 'steel' },
  'miracle-seed': { name: '奇迹种子', nameEn: 'Miracle Seed', category: 'utility', typeMult: 1.2, type: 'grass' },
  'mystic-water': { name: '神秘水滴', nameEn: 'Mystic Water', category: 'utility', typeMult: 1.2, type: 'water' },
  'never-melt-ice': { name: '不融冰', nameEn: 'Never-Melt Ice', category: 'utility', typeMult: 1.2, type: 'ice' },
  'poison-barb': { name: '毒针', nameEn: 'Poison Barb', category: 'utility', typeMult: 1.2, type: 'poison' },
  'quick-claw': { name: '先制之爪', nameEn: 'Quick Claw', category: 'speed' },
  'scope-lens': { name: '焦点镜', nameEn: 'Scope Lens', category: 'offensive' },
  'sharp-beak': { name: '锐利鸟嘴', nameEn: 'Sharp Beak', category: 'utility', typeMult: 1.2, type: 'flying' },
  'shell-bell': { name: '贝壳之铃', nameEn: 'Shell Bell', category: 'defensive' },
  'silk-scarf': { name: '丝绸围巾', nameEn: 'Silk Scarf', category: 'utility', typeMult: 1.2, type: 'normal' },
  'silver-powder': { name: '银粉', nameEn: 'Silver Powder', category: 'utility', typeMult: 1.2, type: 'bug' },
  'soft-sand': { name: '柔软沙子', nameEn: 'Soft Sand', category: 'utility', typeMult: 1.2, type: 'ground' },
  'spell-tag': { name: '诅咒之符', nameEn: 'Spell Tag', category: 'utility', typeMult: 1.2, type: 'ghost' },
  'twisted-spoon': { name: '弯曲的汤匙', nameEn: 'Twisted Spoon', category: 'utility', typeMult: 1.2, type: 'psychic' },
  'white-herb': { name: '白色香草', nameEn: 'White Herb', category: 'utility' },
  'aspear-berry': { name: '利木果', nameEn: 'Aspear Berry', category: 'defensive' },
  'babiri-berry': { name: '霹霹果', nameEn: 'Babiri Berry', category: 'defensive', resistType: 'steel' },
  'charti-berry': { name: '草蚕果', nameEn: 'Charti Berry', category: 'defensive', resistType: 'rock' },
  'cheri-berry': { name: '樱子果', nameEn: 'Cheri Berry', category: 'defensive' },
  'chesto-berry': { name: '零余果', nameEn: 'Chesto Berry', category: 'defensive' },
  'chilan-berry': { name: '灯浆果', nameEn: 'Chilan Berry', category: 'defensive', resistType: 'normal' },
  'chople-berry': { name: '莲蒲果', nameEn: 'Chople Berry', category: 'defensive', resistType: 'fighting' },
  'coba-berry': { name: '棱瓜果', nameEn: 'Coba Berry', category: 'defensive', resistType: 'flying' },
  'colbur-berry': { name: '刺耳果', nameEn: 'Colbur Berry', category: 'defensive', resistType: 'dark' },
  'haban-berry': { name: '莓榴果', nameEn: 'Haban Berry', category: 'defensive', resistType: 'dragon' },
  'kasib-berry': { name: '佛柑果', nameEn: 'Kasib Berry', category: 'defensive', resistType: 'ghost' },
  'kebia-berry': { name: '通通果', nameEn: 'Kebia Berry', category: 'defensive', resistType: 'poison' },
  'leppa-berry': { name: '苹野果', nameEn: 'Leppa Berry', category: 'utility' },
  'lum-berry': { name: '木子果', nameEn: 'Lum Berry', category: 'defensive' },
  'occa-berry': { name: '巧可果', nameEn: 'Occa Berry', category: 'defensive', resistType: 'fire' },
  'oran-berry': { name: '橙橙果', nameEn: 'Oran Berry', category: 'defensive' },
  'passho-berry': { name: '千香果', nameEn: 'Passho Berry', category: 'defensive', resistType: 'water' },
  'payapa-berry': { name: '福禄果', nameEn: 'Payapa Berry', category: 'defensive', resistType: 'psychic' },
  'pecha-berry': { name: '桃桃果', nameEn: 'Pecha Berry', category: 'defensive' },
  'persim-berry': { name: '柿仔果', nameEn: 'Persim Berry', category: 'defensive' },
  'rawst-berry': { name: '莓莓果', nameEn: 'Rawst Berry', category: 'defensive' },
  'rindo-berry': { name: '罗子果', nameEn: 'Rindo Berry', category: 'defensive', resistType: 'grass' },
  'roseli-berry': { name: '洛玫果', nameEn: 'Roseli Berry', category: 'defensive', resistType: 'fairy' },
  'shuca-berry': { name: '腰木果', nameEn: 'Shuca Berry', category: 'defensive', resistType: 'ground' },
  'sitrus-berry': { name: '文柚果', nameEn: 'Sitrus Berry', category: 'defensive' },
  'tanga-berry': { name: '扁樱果', nameEn: 'Tanga Berry', category: 'defensive', resistType: 'bug' },
  'wacan-berry': { name: '烛木果', nameEn: 'Wacan Berry', category: 'defensive', resistType: 'electric' },
  'yache-berry': { name: '番荔果', nameEn: 'Yache Berry', category: 'defensive', resistType: 'ice' },

  // ── 以下未在冠军实装但对伤害计算有意义，保留用于分析 ──
  'choice-band':  { name: '讲究头带',  nameEn: 'Choice Band',  category: 'offensive', atkMult: 1.5, locked: true },
  'choice-specs': { name: '讲究眼镜',  nameEn: 'Choice Specs', category: 'offensive', spaMult: 1.5, locked: true },
  'assault-vest': { name: '突击背心',  nameEn: 'Assault Vest', category: 'defensive', spdMult: 1.5 },
  'life-orb':     { name: '生命宝珠',  nameEn: 'Life Orb',     category: 'offensive', damageMult: 1.3 },
  'expert-belt':  { name: '达人腰带',  nameEn: 'Expert Belt',  category: 'offensive', superEffMult: 1.2 },
};

function getItemSpeedMult(itemId) {
  const item = ITEMS[itemId];
  if (!item) return 1;
  return item.speedMult || 1;
}
const getItemSpeedMultiplier = getItemSpeedMult;

function getItemDamageMult(itemId, category, moveType, typeEffMult) {
  const item = ITEMS[itemId];
  if (!item) return 1;
  let mult = 1;
  if (item.damageMult) mult *= item.damageMult;
  if (item.physMult   && category === 'physical') mult *= item.physMult;
  if (item.specMult   && category === 'special')  mult *= item.specMult;
  if (item.superEffMult && typeEffMult >= 2)       mult *= item.superEffMult;
  if (item.typeMult   && item.type === moveType)  mult *= item.typeMult;
  return mult;
}

function getItemStatMult(itemId, category) {
  const item = ITEMS[itemId];
  if (!item) return 1;
  if (item.atkMult && category === 'physical')         return item.atkMult;
  if (item.spaMult && category === 'special')          return item.spaMult;
  if (item.spdMult && category === 'special_defense')  return item.spdMult;
  return 1;
}

/**
 * 根据技能属性查找对应的属性强化道具（×1.2 typeMult 类）
 * @param {string} moveType
 * @returns {{ itemId: string, itemName: string } | null}
 */
function getTypeBoostItem(moveType) {
  for (const [id, item] of Object.entries(ITEMS)) {
    if (item.typeMult && item.type === moveType) {
      return { itemId: id, itemName: item.name };
    }
  }
  return null;
}
