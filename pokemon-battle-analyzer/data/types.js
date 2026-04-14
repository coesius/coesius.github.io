// 属性相克表
// type effectiveness: 0 = immune, 0.5 = not very effective, 1 = normal, 2 = super effective
// CHART[attackType][defenseType] = multiplier

const TYPE_NAMES = {
  normal: '一般',
  fire: '火',
  water: '水',
  electric: '电',
  grass: '草',
  ice: '冰',
  fighting: '格斗',
  poison: '毒',
  ground: '地面',
  flying: '飞行',
  psychic: '超能力',
  bug: '虫',
  rock: '岩石',
  ghost: '幽灵',
  dragon: '龙',
  dark: '恶',
  steel: '钢',
  fairy: '妖精'
};

const TYPES = Object.keys(TYPE_NAMES);

// TYPE_CHART[attack][defense] = multiplier
const TYPE_CHART = {
  normal:   { normal:1, fire:1,   water:1,   electric:1, grass:1,   ice:1,   fighting:1,   poison:1, ground:1, flying:1,   psychic:1,  bug:1,   rock:0.5, ghost:0,   dragon:1, dark:1,   steel:0.5, fairy:1   },
  fire:     { normal:1, fire:0.5, water:0.5, electric:1, grass:2,   ice:2,   fighting:1,   poison:1, ground:1, flying:1,   psychic:1,  bug:2,   rock:0.5, ghost:1,   dragon:0.5, dark:1,  steel:2,   fairy:1   },
  water:    { normal:1, fire:2,   water:0.5, electric:1, grass:0.5, ice:1,   fighting:1,   poison:1, ground:2, flying:1,   psychic:1,  bug:1,   rock:2,   ghost:1,   dragon:0.5, dark:1,  steel:1,   fairy:1   },
  electric: { normal:1, fire:1,   water:2,   electric:0.5, grass:0.5, ice:1, fighting:1,   poison:1, ground:0, flying:2,   psychic:1,  bug:1,   rock:1,   ghost:1,   dragon:0.5, dark:1,  steel:1,   fairy:1   },
  grass:    { normal:1, fire:0.5, water:2,   electric:1, grass:0.5, ice:1,   fighting:1,   poison:0.5, ground:2, flying:0.5, psychic:1, bug:0.5, rock:2,   ghost:1,   dragon:0.5, dark:1,  steel:0.5, fairy:1   },
  ice:      { normal:1, fire:0.5, water:0.5, electric:1, grass:2,   ice:0.5, fighting:1,   poison:1, ground:2, flying:2,   psychic:1,  bug:1,   rock:1,   ghost:1,   dragon:2,   dark:1,  steel:0.5, fairy:1   },
  fighting: { normal:2, fire:1,   water:1,   electric:1, grass:1,   ice:2,   fighting:1,   poison:0.5, ground:1, flying:0.5, psychic:0.5, bug:0.5, rock:2, ghost:0,   dragon:1,   dark:2,  steel:2,   fairy:0.5 },
  poison:   { normal:1, fire:1,   water:1,   electric:1, grass:2,   ice:1,   fighting:1,   poison:0.5, ground:0.5, flying:1, psychic:1, bug:1,   rock:0.5, ghost:0.5, dragon:1,   dark:1,  steel:0,   fairy:2   },
  ground:   { normal:1, fire:2,   water:1,   electric:2, grass:0.5, ice:1,   fighting:1,   poison:2, ground:1, flying:0,   psychic:1,  bug:0.5, rock:2,   ghost:1,   dragon:1,   dark:1,  steel:2,   fairy:1   },
  flying:   { normal:1, fire:1,   water:1,   electric:0.5, grass:2, ice:1,   fighting:2,   poison:1, ground:1, flying:1,   psychic:1,  bug:2,   rock:0.5, ghost:1,   dragon:1,   dark:1,  steel:0.5, fairy:1   },
  psychic:  { normal:1, fire:1,   water:1,   electric:1, grass:1,   ice:1,   fighting:2,   poison:2, ground:1, flying:1,   psychic:0.5, bug:1,  rock:1,   ghost:1,   dragon:1,   dark:0,  steel:0.5, fairy:1   },
  bug:      { normal:1, fire:0.5, water:1,   electric:1, grass:2,   ice:1,   fighting:0.5, poison:0.5, ground:1, flying:0.5, psychic:2, bug:1,   rock:1,   ghost:0.5, dragon:1,   dark:2,  steel:0.5, fairy:0.5 },
  rock:     { normal:2, fire:2,   water:1,   electric:1, grass:1,   ice:2,   fighting:0.5, poison:1, ground:0.5, flying:2,  psychic:1,  bug:2,   rock:1,   ghost:1,   dragon:1,   dark:1,  steel:0.5, fairy:1   },
  ghost:    { normal:0, fire:1,   water:1,   electric:1, grass:1,   ice:1,   fighting:1,   poison:1, ground:1, flying:1,   psychic:2,  bug:1,   rock:1,   ghost:2,   dragon:1,   dark:0.5, steel:1,  fairy:1   },
  dragon:   { normal:1, fire:1,   water:1,   electric:1, grass:1,   ice:1,   fighting:1,   poison:1, ground:1, flying:1,   psychic:1,  bug:1,   rock:1,   ghost:1,   dragon:2,   dark:1,  steel:0.5, fairy:0   },
  dark:     { normal:1, fire:1,   water:1,   electric:1, grass:1,   ice:1,   fighting:0.5, poison:1, ground:1, flying:1,   psychic:2,  bug:1,   rock:1,   ghost:2,   dragon:1,   dark:0.5, steel:0.5, fairy:0.5 },
  steel:    { normal:1, fire:0.5, water:0.5, electric:0.5, grass:1, ice:2,   fighting:1,   poison:1, ground:1, flying:1,   psychic:1,  bug:1,   rock:2,   ghost:1,   dragon:1,   dark:1,  steel:0.5, fairy:2   },
  fairy:    { normal:1, fire:0.5, water:1,   electric:1, grass:1,   ice:1,   fighting:2,   poison:0.5, ground:1, flying:1,  psychic:1,  bug:1,   rock:1,   ghost:1,   dragon:2,   dark:2,  steel:0.5, fairy:1   }
};

/**
 * 计算进攻属性对防御宝可梦（可能双属性）的综合倍率
 * @param {string} attackType 进攻属性
 * @param {string[]} defenseTypes 防御方属性（1或2个）
 * @returns {number} 综合倍率
 */
function getTypeEffectiveness(attackType, defenseTypes) {
  let mult = 1;
  for (const dt of defenseTypes) {
    mult *= (TYPE_CHART[attackType]?.[dt] ?? 1);
  }
  return mult;
}

/**
 * 获取属性相克文字描述
 */
function getEffectivenessLabel(mult) {
  if (mult === 0) return { text: '无效', class: 'immune' };
  if (mult <= 0.25) return { text: '效果极差', class: 'not-effective-2' };
  if (mult <= 0.5) return { text: '效果不好', class: 'not-effective' };
  if (mult >= 4) return { text: '效果极佳★', class: 'super-effective-2' };
  if (mult >= 2) return { text: '效果拔群', class: 'super-effective' };
  return { text: '普通效果', class: 'normal-effective' };
}
