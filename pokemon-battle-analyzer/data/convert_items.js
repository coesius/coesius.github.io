/**
 * 道具数据更新脚本
 * 从 Items.txt 读取实装物品列表，从 showdown_cn.js 获取中文名，生成新的 items.js
 * 运行: node data/convert_items.js
 */
const fs = require('fs');
const path = require('path');

// ===================== 解析 showdown_cn.js 翻译表 =====================
const cnSrc = fs.readFileSync(path.join(__dirname, 'showdown_cn.js'), 'utf-8');
const startIdx = cnSrc.indexOf('var translations = {');
let depth = 0, endIdx = -1;
for (let i = startIdx + 'var translations = '.length; i < cnSrc.length; i++) {
  if (cnSrc[i] === '{') depth++;
  else if (cnSrc[i] === '}') { depth--; if (depth === 0) { endIdx = i + 1; break; } }
}
let translations = {};
eval('translations = ' + cnSrc.slice(startIdx + 'var translations = '.length, endIdx));
console.log(`加载翻译条目: ${Object.keys(translations).length}`);

// ===================== 解析 Items.txt =====================
const txt = fs.readFileSync(path.join(__dirname, 'Items.txt'), 'utf-8');
const lines = txt.split('\n').map(l => l.trim()).filter(Boolean);

// 提取物品列表（按制表符分隔的行是有效描述行）
const items = [];
let section = 'battle';
for (const line of lines) {
  if (line.startsWith('Items\t') || line === 'Items') continue;
  if (line.startsWith('Mega Stones')) { section = 'mega'; continue; }
  if (line.startsWith('Berries')) { section = 'berry'; continue; }
  const parts = line.split('\t');
  if (parts.length >= 2) {
    items.push({ name: parts[0], desc: parts[1], section });
  }
}
console.log(`解析道具: ${items.filter(i => i.section === 'battle').length} 战斗道具, ${items.filter(i => i.section === 'berry').length} 树果`);

// ===================== 机械效果定义表 =====================
function toKebab(name) {
  return name.toLowerCase().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// 属性倍率道具：type → 对应属性
const TYPE_BOOST_ITEMS = {
  'black-belt':     'fighting',
  'black-glasses':  'dark',
  'charcoal':       'fire',
  'dragon-fang':    'dragon',
  'fairy-feather':  'fairy',
  'hard-stone':     'rock',
  'magnet':         'electric',
  'metal-coat':     'steel',
  'miracle-seed':   'grass',
  'mystic-water':   'water',
  'never-melt-ice': 'ice',
  'poison-barb':    'poison',
  'sharp-beak':     'flying',
  'silk-scarf':     'normal',
  'silver-powder':  'bug',
  'soft-sand':      'ground',
  'spell-tag':      'ghost',
  'twisted-spoon':  'psychic',
};

// 属性抗性树果：type → 对应属性
const RESIST_BERRY_ITEMS = {
  'occa-berry':   'fire',
  'passho-berry': 'water',
  'wacan-berry':  'electric',
  'rindo-berry':  'grass',
  'yache-berry':  'ice',
  'chople-berry': 'fighting',
  'kebia-berry':  'poison',
  'shuca-berry':  'ground',
  'coba-berry':   'flying',
  'payapa-berry': 'psychic',
  'tanga-berry':  'bug',
  'charti-berry': 'rock',
  'kasib-berry':  'ghost',
  'haban-berry':  'dragon',
  'colbur-berry': 'dark',
  'babiri-berry': 'steel',
  'roseli-berry': 'fairy',
  'chilan-berry': 'normal',
};

// 其他已知机械属性
const EXTRA_PROPS = {
  'choice-scarf':  { category: 'speed',      speedMult: 1.5, locked: true },
  'quick-claw':    { category: 'speed',       desc2: '有一定概率先手行动（约20%）' },
  'leftovers':     { category: 'defensive' },
  'shell-bell':    { category: 'defensive' },
  'focus-sash':    { category: 'defensive' },
  'focus-band':    { category: 'defensive' },
  'white-herb':    { category: 'utility' },
  'mental-herb':   { category: 'utility' },
  'bright-powder': { category: 'utility' },
  'kings-rock':    { category: 'utility' },
  'scope-lens':    { category: 'offensive' },
  'light-ball':    { category: 'offensive',   note: '仅皮卡丘，攻击和特攻×2' },
  'sitrus-berry':  { category: 'defensive' },
  'lum-berry':     { category: 'defensive' },
  'oran-berry':    { category: 'defensive' },
  'cheri-berry':   { category: 'defensive' },
  'chesto-berry':  { category: 'defensive' },
  'pecha-berry':   { category: 'defensive' },
  'rawst-berry':   { category: 'defensive' },
  'aspear-berry':  { category: 'defensive' },
  'persim-berry':  { category: 'defensive' },
  'leppa-berry':   { category: 'utility' },
};

// ===================== 生成 items.js =====================
let out = `// 宝可梦冠军实装道具数据（由 convert_items.js 生成）
// 数据来源：游戏内实装道具，中文名来自 Pokemon Showdown 汉化
// speedMult: 速度倍率 | typeMult+type: 属性威力倍率(×1.2)
// resistType: 抗性树果对应属性（受该属性超效果攻击时伤害×0.5）

const ITEMS = {
  'none': { name: '无道具', nameEn: 'None', category: 'utility', desc: '不携带道具' },\n`;

const notFound = [];

for (const item of items) {
  if (item.section === 'mega') continue; // Mega石由形态系统处理

  const id = toKebab(item.name);
  const cnName = translations[item.name] || null;
  if (!cnName) notFound.push(item.name);

  const displayName = cnName || item.name;
  const extra = EXTRA_PROPS[id] || {};
  const resistType = RESIST_BERRY_ITEMS[id];
  const boostType  = TYPE_BOOST_ITEMS[id];

  let category = extra.category || (item.section === 'berry' ? 'defensive' : 'utility');

  // 构建属性字符串
  const props = [`name: '${displayName}'`, `nameEn: '${item.name}'`, `category: '${category}'`];
  if (extra.speedMult) props.push(`speedMult: ${extra.speedMult}`);
  if (extra.locked)    props.push(`locked: true`);
  if (boostType)       props.push(`typeMult: 1.2`, `type: '${boostType}'`);
  if (resistType)      props.push(`resistType: '${resistType}'`);
  if (extra.note)      props.push(`note: '${extra.note}'`);

  out += `  '${id}': { ${props.join(', ')} },\n`;
}

// 保留现有的讲究头带/眼镜、生命宝珠等（不在 Items.txt 中但常见于分析）
out += `
  // ── 以下未在冠军实装但对伤害计算有意义，保留用于分析 ──
  'choice-band':  { name: '讲究头带',  nameEn: 'Choice Band',  category: 'offensive', atkMult: 1.5, locked: true },
  'choice-specs': { name: '讲究眼镜',  nameEn: 'Choice Specs', category: 'offensive', spaMult: 1.5, locked: true },
  'assault-vest': { name: '突击背心',  nameEn: 'Assault Vest', category: 'defensive', spdMult: 1.5 },
  'life-orb':     { name: '生命宝珠',  nameEn: 'Life Orb',     category: 'offensive', damageMult: 1.3 },
  'expert-belt':  { name: '达人腰带',  nameEn: 'Expert Belt',  category: 'offensive', superEffMult: 1.2 },
`;

out += `};\n`;

// 保留现有函数体
out += `
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
`;

fs.writeFileSync(path.join(__dirname, 'items.js'), out, 'utf-8');
console.log(`✓ 已生成 items.js：${items.filter(i => i.section !== 'mega').length} 个道具`);
if (notFound.length) console.log(`⚠ 未找到翻译（${notFound.length}）: ${notFound.join(', ')}`);
