/**
 * 数据转换脚本：pokemon_data.js → pokemon.js 格式
 * 支持：特性、Mega 形态、showdown 中文名、拼音字段
 * 运行: node data/convert_pokemon.js
 */
const fs = require('fs');
const path = require('path');
const { pinyin: getPinyin } = require('pinyin-pro');

// ===================== 解析 showdown_cn.js 翻译表 =====================
const cnSrc = fs.readFileSync(path.join(__dirname, 'showdown_cn.js'), 'utf-8');
// 提取 translations 对象字符串
const startIdx = cnSrc.indexOf('var translations = {');
let depth = 0, endIdx = -1;
for (let i = startIdx + 'var translations = '.length; i < cnSrc.length; i++) {
  if (cnSrc[i] === '{') depth++;
  else if (cnSrc[i] === '}') { depth--; if (depth === 0) { endIdx = i + 1; break; } }
}
let translations = {};
try {
  eval('translations = ' + cnSrc.slice(startIdx + 'var translations = '.length, endIdx));
} catch(e) {
  console.warn('翻译表解析警告:', e.message);
}
console.log(`加载翻译条目: ${Object.keys(translations).length}`);

// ===================== 解析 pokemon_data.js =====================
const src = fs.readFileSync(path.join(__dirname, 'pokemon_data.js'), 'utf-8');
const arrStr = src.trim().replace(/^r\s*=\s*/, '').replace(/;$/, '');
const r = eval('(' + arrStr + ')');
console.log(`解析完成，共 ${r.length} 只宝可梦`);

// ===================== 辅助函数 =====================
function toKebab(name) {
  return name.toLowerCase()
    .replace(/[()]/g, '').replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// pokemon_data.js 名称 → showdown_cn.js key 的显式映射表
// 用于两边命名规则不一致的地区/特殊形态
const NAME_TO_SD_KEY = {
  // 阿罗拉形态
  'Alolan Raichu':       'Raichu-Alola',
  'Alolan Ninetales':    'Ninetales-Alola',
  // 洗翠形态
  'Hisuian Arcanine':    'Arcanine-Hisui',
  'Hisuian Avalugg':     'Avalugg-Hisui',
  'Hisuian Decidueye':   'Decidueye-Hisui',
  'Hisuian Goodra':      'Goodra-Hisui',
  'Hisuian Samurott':    'Samurott-Hisui',
  'Hisuian Typhlosion':  'Typhlosion-Hisui',
  'Hisuian Zoroark':     'Zoroark-Hisui',
  // 伽勒尔形态（showdown 里不统一，部分用"Galarian X"，部分用"X-Galar"）
  'Galarian Stunfisk':   'Stunfisk-Galar',
  // 帕底亚形态
  'Paldean Tauros':              'Tauros-Paldea-Combat',
  'Paldean Tauros (Blaze)':      'Tauros-Paldea-Blaze',
  'Paldean Tauros (Aqua)':       'Tauros-Paldea-Aqua',
  // 洛托姆各形态（pokemon_data 用 "X Rotom"，showdown 用 "Rotom-X"）
  'Heat Rotom':   'Rotom-Heat',
  'Wash Rotom':   'Rotom-Wash',
  'Frost Rotom':  'Rotom-Frost',
  'Fan Rotom':    'Rotom-Fan',
  'Mow Rotom':    'Rotom-Mow',
  // 性别形态（pokemon_data 用 -M/-F，showdown 雄性直接用基础名）
  'Meowstic-M':     'Meowstic',
  'Basculegion-M':  'Basculegion',
};

// 根据宝可梦名称查找 showdown 中文名（含别名兼容）
function getCnName(enName) {
  const sdKey = NAME_TO_SD_KEY[enName] || enName;
  return translations[sdKey] || enName;
}

// 根据能力英文名获取 showdown 中文名
function getAbilityCn(enName) {
  return translations[enName] || enName;
}

// 从 form 名称生成形态 ID（去掉基础宝可梦名称前缀）
function getFormId(baseName, formName) {
  // "Mega Charizard X" → remove "Mega " + "Charizard " → "X" → "mega-x"
  // "Mega Venusaur"   → remove "Mega " + "Venusaur"   → "" → "mega"
  let remainder = formName.replace(/^Mega\s+/, '').replace(baseName, '').trim();
  if (!remainder) return 'mega';
  return 'mega-' + remainder.toLowerCase().replace(/\s+/g, '-');
}

// 推断 showdown 形态名称 Key（用于查找中文名）
// Pokemon name + formId → Showdown key
// "Charizard" + "mega-x" → "Charizard-Mega-X"
function getShowdownFormKey(pokemonName, formId) {
  const parts = formId.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1));
  return pokemonName + '-' + parts.join('-');
}

// ===================== 拼音生成 =====================
function makePinyin(cnName) {
  // 只对汉字部分生成拼音，保留连字符分隔
  const full = getPinyin(cnName, { toneType: 'none', separator: '', nonZh: 'consecutive' })
    .toLowerCase().replace(/\s+/g, '');
  const abbr = getPinyin(cnName, { toneType: 'none', pattern: 'first', separator: '', nonZh: 'consecutive' })
    .toLowerCase().replace(/\s+/g, '');
  return { full, abbr };
}

// ===================== 生成输出 =====================
let output = `// 宝可梦冠军可用宝可梦数据
// 数据来源：宝可梦冠军环境官方数据，中文名来自 Pokemon Showdown 汉化插件
// baseStats: { hp, atk, def, spa, spd, spe }
// abilities: [{ id, name, nameEn, isHidden }]
// forms: { formId: { name, nameEn, types, baseStats, ability } }
// pinyin / pinyinAbbr: 全拼 / 首字母缩写（用于搜索）
// moves: 可学习的技能ID列表

const POKEMON = {\n`;

let count = 0, formCount = 0;

for (const p of r) {
  const id = toKebab(p.name);
  const cnName = getCnName(p.name);
  const bs = p.baseStats;
  const { full: py, abbr: pyAbbr } = makePinyin(cnName);

  // 特性
  const abilities = p.abilities.map(a => ({
    id: toKebab(a.name),
    name: getAbilityCn(a.name),
    nameEn: a.name,
    isHidden: !!a.isHidden
  }));

  // Mega 形态
  const forms = {};
  if (p.forms && p.forms.length > 0) {
    for (const f of p.forms) {
      const formId = getFormId(p.name, f.name);
      const sdKey = getShowdownFormKey(p.name, formId);
      const formCn = translations[sdKey] || f.name;
      const fbs = f.baseStats;
      const formAbility = f.abilities && f.abilities.length > 0 ? {
        id: toKebab(f.abilities[0].name),
        name: getAbilityCn(f.abilities[0].name),
        nameEn: f.abilities[0].name
      } : null;

      forms[formId] = {
        name: formCn,
        nameEn: f.name,
        types: f.types || p.types,
        baseStats: { hp: fbs.hp, atk: fbs.attack, def: fbs.defense, spa: fbs.spAtk, spd: fbs.spDef, spe: fbs.speed },
        ability: formAbility
      };
      formCount++;
    }
  }

  const moves = p.moves.map(m => toKebab(m.name));
  const typesStr = JSON.stringify(p.types);
  const statsStr = `{ hp: ${bs.hp}, atk: ${bs.attack}, def: ${bs.defense}, spa: ${bs.spAtk}, spd: ${bs.spDef}, spe: ${bs.speed} }`;
  const abilitiesStr = JSON.stringify(abilities);
  const movesStr = JSON.stringify(moves);

  output += `  '${id}': {\n`;
  output += `    id: ${p.dexNumber}, name: '${cnName}', nameEn: '${p.name}',\n`;
  output += `    pinyin: '${py}', pinyinAbbr: '${pyAbbr}',\n`;
  output += `    types: ${typesStr},\n`;
  output += `    baseStats: ${statsStr},\n`;
  output += `    abilities: ${abilitiesStr},\n`;
  if (Object.keys(forms).length > 0) {
    output += `    forms: ${JSON.stringify(forms, null, 0)},\n`;
  }
  output += `    moves: ${movesStr}\n`;
  output += `  },\n`;
  count++;
}

output += `};\n\n`;

// searchPokemon 函数（使用内嵌的 pinyin/pinyinAbbr 字段）
output += `// 按名称搜索宝可梦（支持中文、英文、全拼、拼音首字母）
function searchPokemon(query) {
  if (!query || query.trim() === '') return Object.entries(POKEMON).map(([id, p]) => ({ ...p, id }));
  const q = query.trim().toLowerCase();
  return Object.entries(POKEMON)
    .filter(([id, p]) =>
      id.includes(q) ||
      p.name.includes(query) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.pinyin.includes(q) ||
      p.pinyinAbbr.startsWith(q)
    )
    .map(([id, p]) => ({ ...p, id }));
}
`;

// 写入
const outPath = path.join(__dirname, 'pokemon.js');
fs.writeFileSync(outPath, output, 'utf-8');
console.log(`✓ 已生成 pokemon.js：${count} 只宝可梦，${formCount} 个形态`);
