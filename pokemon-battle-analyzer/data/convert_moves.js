/**
 * 招式名称汉化修正脚本
 * 从 showdown_cn.js 中查找每个招式的正确中文名，更新 moves.js
 * 运行: node data/convert_moves.js
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
try {
  eval('translations = ' + cnSrc.slice(startIdx + 'var translations = '.length, endIdx));
} catch (e) {
  console.warn('翻译表解析警告:', e.message);
}
console.log(`加载翻译条目: ${Object.keys(translations).length}`);

// ===================== 读取 moves.js =====================
const movesPath = path.join(__dirname, 'moves.js');
let src = fs.readFileSync(movesPath, 'utf-8');

// ===================== 逐条替换 =====================
let updated = 0, notFound = [];

// 匹配每个 name: 'X', nameEn: 'Y' 组合
src = src.replace(/name: '([^']*)', nameEn: '([^']*)'/g, (match, curName, enName) => {
  const cnName = translations[enName];
  if (cnName && cnName !== curName) {
    updated++;
    return `name: '${cnName}', nameEn: '${enName}'`;
  }
  if (!cnName) notFound.push(enName);
  return match;
});

// ===================== 输出结果 =====================
fs.writeFileSync(movesPath, src, 'utf-8');
console.log(`✓ 已更新 ${updated} 个招式名称`);
if (notFound.length) {
  const unique = [...new Set(notFound)];
  console.log(`⚠ 未找到翻译（${unique.length} 个）: ${unique.join(', ')}`);
}
