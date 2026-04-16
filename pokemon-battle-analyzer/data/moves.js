// 竞技常用技能数据
// category: 'physical'|'special'|'status'
// priority: 先制度（0=普通，1=优先，-1=后手等）

const MOVES = {
  // ========== 一般属性 ==========
  'quick-attack': { name: '电光一闪', nameEn: 'Quick Attack', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 30, priority: 1 },
  'extreme-speed': { name: '神速', nameEn: 'Extreme Speed', type: 'normal', category: 'physical', power: 80, accuracy: 100, pp: 5, priority: 2 },
  'body-slam': { name: '泰山压顶', nameEn: 'Body Slam', type: 'normal', category: 'physical', power: 85, accuracy: 100, pp: 15, priority: 0 },
  'double-edge': { name: '舍身冲撞', nameEn: 'Double-Edge', type: 'normal', category: 'physical', power: 120, accuracy: 100, pp: 15, priority: 0 },
  'return': { name: '报恩', nameEn: 'Return', type: 'normal', category: 'physical', power: 102, accuracy: 100, pp: 20, priority: 0 },
  'facade': { name: '硬撑', nameEn: 'Facade', type: 'normal', category: 'physical', power: 70, accuracy: 100, pp: 20, priority: 0, note: '异常状态时威力翻倍' },
  'hyper-voice': { name: '巨声', nameEn: 'Hyper Voice', type: 'normal', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },
  'boomburst': { name: '爆音波', nameEn: 'Boomburst', type: 'normal', category: 'special', power: 140, accuracy: 100, pp: 10, priority: 0 },
  'swift': { name: '高速星星', nameEn: 'Swift', type: 'normal', category: 'special', power: 60, accuracy: 0, pp: 20, priority: 0, alwaysHit: true },

  // ========== 火属性 ==========
  'flamethrower': { name: '喷射火焰', nameEn: 'Flamethrower', type: 'fire', category: 'special', power: 90, accuracy: 100, pp: 15, priority: 0 },
  'fire-blast': { name: '大字爆炎', nameEn: 'Fire Blast', type: 'fire', category: 'special', power: 110, accuracy: 85, pp: 5, priority: 0 },
  'overheat': { name: '过热', nameEn: 'Overheat', type: 'fire', category: 'special', power: 130, accuracy: 90, pp: 5, priority: 0, note: '使用后特攻-2' },
  'heat-wave': { name: '热风', nameEn: 'Heat Wave', type: 'fire', category: 'special', power: 95, accuracy: 90, pp: 10, priority: 0 },
  'fire-punch': { name: '火焰拳', nameEn: 'Fire Punch', type: 'fire', category: 'physical', power: 75, accuracy: 100, pp: 15, priority: 0 },
  'flare-blitz': { name: '闪焰冲锋', nameEn: 'Flare Blitz', type: 'fire', category: 'physical', power: 120, accuracy: 100, pp: 15, priority: 0, note: '反弹伤害1/3' },
  'sacred-fire': { name: '神圣之火', nameEn: 'Sacred Fire', type: 'fire', category: 'physical', power: 100, accuracy: 95, pp: 5, priority: 0 },
  'burning-jealousy': { name: '妒火', nameEn: 'Burning Jealousy', type: 'fire', category: 'special', power: 70, accuracy: 100, pp: 5, priority: 0 },

  // ========== 水属性 ==========
  'surf': { name: '冲浪', nameEn: 'Surf', type: 'water', category: 'special', power: 90, accuracy: 100, pp: 15, priority: 0 },
  'hydro-pump': { name: '水炮', nameEn: 'Hydro Pump', type: 'water', category: 'special', power: 110, accuracy: 80, pp: 5, priority: 0 },
  'scald': { name: '热水', nameEn: 'Scald', type: 'water', category: 'special', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'water-fall': { name: '攀瀑', nameEn: 'Waterfall', type: 'water', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'aqua-jet': { name: '水流喷射', nameEn: 'Aqua Jet', type: 'water', category: 'physical', power: 40, accuracy: 100, pp: 20, priority: 1 },
  'crabhammer': { name: '蟹钳锤', nameEn: 'Crabhammer', type: 'water', category: 'physical', power: 100, accuracy: 90, pp: 10, priority: 0 },
  'liquidation': { name: '水流裂破', nameEn: 'Liquidation', type: 'water', category: 'physical', power: 85, accuracy: 100, pp: 10, priority: 0 },
  'origin-pulse': { name: '根源波动', nameEn: 'Origin Pulse', type: 'water', category: 'special', power: 110, accuracy: 85, pp: 10, priority: 0 },
  'wave-crash': { name: '波动冲', nameEn: 'Wave Crash', type: 'water', category: 'physical', power: 120, accuracy: 100, pp: 10, priority: 0, note: '反弹伤害1/3' },

  // ========== 电属性 ==========
  'thunderbolt': { name: '十万伏特', nameEn: 'Thunderbolt', type: 'electric', category: 'special', power: 90, accuracy: 100, pp: 15, priority: 0 },
  'thunder': { name: '打雷', nameEn: 'Thunder', type: 'electric', category: 'special', power: 110, accuracy: 70, pp: 10, priority: 0, note: '降雨必中' },
  'wild-charge': { name: '疯狂伏特', nameEn: 'Wild Charge', type: 'electric', category: 'physical', power: 90, accuracy: 100, pp: 15, priority: 0, note: '反弹伤害1/4' },
  'thunder-punch': { name: '雷电拳', nameEn: 'Thunder Punch', type: 'electric', category: 'physical', power: 75, accuracy: 100, pp: 15, priority: 0 },
  'volt-tackle': { name: '伏特攻击', nameEn: 'Volt Tackle', type: 'electric', category: 'physical', power: 120, accuracy: 100, pp: 15, priority: 0, note: '反弹伤害1/3' },
  'bolt-strike': { name: '雷击', nameEn: 'Bolt Strike', type: 'electric', category: 'physical', power: 130, accuracy: 85, pp: 5, priority: 0 },
  'discharge': { name: '放电', nameEn: 'Discharge', type: 'electric', category: 'special', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'volt-switch': { name: '伏特替换', nameEn: 'Volt Switch', type: 'electric', category: 'special', power: 70, accuracy: 100, pp: 20, priority: 0 },

  // ========== 草属性 ==========
  'energy-ball': { name: '能量球', nameEn: 'Energy Ball', type: 'grass', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },
  'giga-drain': { name: '终极吸取', nameEn: 'Giga Drain', type: 'grass', category: 'special', power: 75, accuracy: 100, pp: 10, priority: 0 },
  'leaf-blade': { name: '叶刃', nameEn: 'Leaf Blade', type: 'grass', category: 'physical', power: 90, accuracy: 100, pp: 15, priority: 0 },
  'power-whip': { name: '强力鞭打', nameEn: 'Power Whip', type: 'grass', category: 'physical', power: 120, accuracy: 85, pp: 10, priority: 0 },
  'wood-hammer': { name: '木槌', nameEn: 'Wood Hammer', type: 'grass', category: 'physical', power: 120, accuracy: 100, pp: 15, priority: 0, note: '反弹伤害1/3' },
  'bullet-seed': { name: '种子机关枪', nameEn: 'Bullet Seed', type: 'grass', category: 'physical', power: 25, accuracy: 100, pp: 30, priority: 0, note: '2-5连击' },
  'seed-flare': { name: '种子闪光', nameEn: 'Seed Flare', type: 'grass', category: 'special', power: 120, accuracy: 85, pp: 5, priority: 0 },
  'grassy-glide': { name: '青草滑梯', nameEn: 'Grassy Glide', type: 'grass', category: 'physical', power: 55, accuracy: 100, pp: 20, priority: 0, note: '草木场地中优先度+1' },

  // ========== 冰属性 ==========
  'ice-beam': { name: '冰冻光束', nameEn: 'Ice Beam', type: 'ice', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },
  'blizzard': { name: '暴风雪', nameEn: 'Blizzard', type: 'ice', category: 'special', power: 110, accuracy: 70, pp: 5, priority: 0, note: '下雪天气必中' },
  'ice-punch': { name: '冰冻拳', nameEn: 'Ice Punch', type: 'ice', category: 'physical', power: 75, accuracy: 100, pp: 15, priority: 0 },
  'icicle-crash': { name: '冰柱坠击', nameEn: 'Icicle Crash', type: 'ice', category: 'physical', power: 85, accuracy: 90, pp: 10, priority: 0 },
  'freeze-dry': { name: '冷冻干燥', nameEn: 'Freeze-Dry', type: 'ice', category: 'special', power: 70, accuracy: 100, pp: 20, priority: 0, note: '对水属性效果不一般' },
  'icicle-spear': { name: '冰锥', nameEn: 'Icicle Spear', type: 'ice', category: 'physical', power: 25, accuracy: 100, pp: 30, priority: 0, note: '2-5连击' },
  'glacial-lance': { name: '雪矛', nameEn: 'Glacial Lance', type: 'ice', category: 'physical', power: 120, accuracy: 100, pp: 5, priority: 0 },

  // ========== 格斗属性 ==========
  'close-combat': { name: '近身战', nameEn: 'Close Combat', type: 'fighting', category: 'physical', power: 120, accuracy: 100, pp: 5, priority: 0, note: '使用后防御和特防各-1' },
  'superpower': { name: '蛮力', nameEn: 'Superpower', type: 'fighting', category: 'physical', power: 120, accuracy: 100, pp: 5, priority: 0, note: '使用后攻击和防御各-1' },
  'high-jump-kick': { name: '飞膝踢', nameEn: 'High Jump Kick', type: 'fighting', category: 'physical', power: 130, accuracy: 90, pp: 10, priority: 0, note: '命中失败则扣HP' },
  'drain-punch': { name: '吸取拳', nameEn: 'Drain Punch', type: 'fighting', category: 'physical', power: 75, accuracy: 100, pp: 10, priority: 0 },
  'mach-punch': { name: '音速拳', nameEn: 'Mach Punch', type: 'fighting', category: 'physical', power: 40, accuracy: 100, pp: 30, priority: 1 },
  'aura-sphere': { name: '波导弹', nameEn: 'Aura Sphere', type: 'fighting', category: 'special', power: 80, accuracy: 0, pp: 20, priority: 0, alwaysHit: true },
  'focus-blast': { name: '真气弹', nameEn: 'Focus Blast', type: 'fighting', category: 'special', power: 120, accuracy: 70, pp: 5, priority: 0 },
  'hammer-arm': { name: '臂锤', nameEn: 'Hammer Arm', type: 'fighting', category: 'physical', power: 100, accuracy: 90, pp: 10, priority: 0, note: '速度-1' },

  // ========== 毒属性 ==========
  'sludge-bomb': { name: '污泥炸弹', nameEn: 'Sludge Bomb', type: 'poison', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },
  'sludge-wave': { name: '污泥波', nameEn: 'Sludge Wave', type: 'poison', category: 'special', power: 95, accuracy: 100, pp: 10, priority: 0 },
  'gunk-shot': { name: '垃圾射击', nameEn: 'Gunk Shot', type: 'poison', category: 'physical', power: 120, accuracy: 80, pp: 5, priority: 0 },
  'poison-jab': { name: '毒击', nameEn: 'Poison Jab', type: 'poison', category: 'physical', power: 80, accuracy: 100, pp: 20, priority: 0 },

  // ========== 地面属性 ==========
  'earthquake': { name: '地震', nameEn: 'Earthquake', type: 'ground', category: 'physical', power: 100, accuracy: 100, pp: 10, priority: 0 },
  'earth-power': { name: '大地之力', nameEn: 'Earth Power', type: 'ground', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },
  'drill-run': { name: '直冲钻', nameEn: 'Drill Run', type: 'ground', category: 'physical', power: 80, accuracy: 95, pp: 10, priority: 0, note: '高击中要害率' },
  'high-horsepower': { name: '十万马力', nameEn: 'High Horsepower', type: 'ground', category: 'physical', power: 95, accuracy: 95, pp: 10, priority: 0 },
  'stomping-tantrum': { name: '跺脚', nameEn: 'Stomping Tantrum', type: 'ground', category: 'physical', power: 75, accuracy: 100, pp: 10, priority: 0 },
  'precipice-blades': { name: '断崖之剑', nameEn: 'Precipice Blades', type: 'ground', category: 'physical', power: 120, accuracy: 85, pp: 10, priority: 0 },

  // ========== 飞行属性 ==========
  'brave-bird': { name: '勇鸟猛攻', nameEn: 'Brave Bird', type: 'flying', category: 'physical', power: 120, accuracy: 100, pp: 15, priority: 0, note: '反弹伤害1/3' },
  'airslash': { name: '空气斩', nameEn: 'Air Slash', type: 'flying', category: 'special', power: 75, accuracy: 95, pp: 15, priority: 0 },
  'hurricane': { name: '暴风', nameEn: 'Hurricane', type: 'flying', category: 'special', power: 110, accuracy: 70, pp: 10, priority: 0, note: '降雨必中' },
  'acrobatics': { name: '杂技', nameEn: 'Acrobatics', type: 'flying', category: 'physical', power: 55, accuracy: 100, pp: 15, priority: 0, note: '无道具时威力翻倍' },
  'fly': { name: '飞翔', nameEn: 'Fly', type: 'flying', category: 'physical', power: 90, accuracy: 95, pp: 15, priority: 0 },
  'dual-wingbeat': { name: '双翼', nameEn: 'Dual Wingbeat', type: 'flying', category: 'physical', power: 40, accuracy: 90, pp: 10, priority: 0, note: '命中2次' },

  // ========== 超能力属性 ==========
  'psychic': { name: '超能力', nameEn: 'Psychic', type: 'psychic', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },
  'psyshock': { name: '精神冲击', nameEn: 'Psyshock', type: 'psychic', category: 'special', power: 80, accuracy: 100, pp: 10, priority: 0, note: '依据对方物理防御计算' },
  'zen-headbutt': { name: '意念头锤', nameEn: 'Zen Headbutt', type: 'psychic', category: 'physical', power: 80, accuracy: 90, pp: 15, priority: 0 },
  'expanding-force': { name: '广域战力', nameEn: 'Expanding Force', type: 'psychic', category: 'special', power: 80, accuracy: 100, pp: 10, priority: 0, note: '心灵场地威力×1.5且打全体' },
  'psycho-cut': { name: '精神利刃', nameEn: 'Psycho Cut', type: 'psychic', category: 'physical', power: 70, accuracy: 100, pp: 20, priority: 0, note: '高击中要害率' },
  'future-sight': { name: '预知未来', nameEn: 'Future Sight', type: 'psychic', category: 'special', power: 120, accuracy: 100, pp: 10, priority: 0, note: '2回合后触发' },

  // ========== 虫属性 ==========
  'bug-buzz': { name: '虫鸣', nameEn: 'Bug Buzz', type: 'bug', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },
  'x-scissor': { name: '十字剪', nameEn: 'X-Scissor', type: 'bug', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'leech-life': { name: '吸血', nameEn: 'Leech Life', type: 'bug', category: 'physical', power: 80, accuracy: 100, pp: 10, priority: 0 },
  'first-impression': { name: '迎头一击', nameEn: 'First Impression', type: 'bug', category: 'physical', power: 90, accuracy: 100, pp: 10, priority: 2, note: '只能在刚出场时使用' },

  // ========== 岩石属性 ==========
  'stone-edge': { name: '尖石攻击', nameEn: 'Stone Edge', type: 'rock', category: 'physical', power: 100, accuracy: 80, pp: 5, priority: 0, note: '高击中要害率' },
  'rock-slide': { name: '岩崩', nameEn: 'Rock Slide', type: 'rock', category: 'physical', power: 75, accuracy: 90, pp: 10, priority: 0 },
  'power-gem': { name: '力量宝石', nameEn: 'Power Gem', type: 'rock', category: 'special', power: 80, accuracy: 100, pp: 20, priority: 0 },
  'diamond-storm': { name: '钻石风暴', nameEn: 'Diamond Storm', type: 'rock', category: 'physical', power: 100, accuracy: 95, pp: 5, priority: 0 },
  'head-smash': { name: '双刃头锤', nameEn: 'Head Smash', type: 'rock', category: 'physical', power: 150, accuracy: 80, pp: 5, priority: 0, note: '反弹伤害1/2' },

  // ========== 幽灵属性 ==========
  'shadow-ball': { name: '暗影球', nameEn: 'Shadow Ball', type: 'ghost', category: 'special', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'shadow-claw': { name: '暗影爪', nameEn: 'Shadow Claw', type: 'ghost', category: 'physical', power: 70, accuracy: 100, pp: 15, priority: 0, note: '高击中要害率' },
  'shadow-sneak': { name: '影子偷袭', nameEn: 'Shadow Sneak', type: 'ghost', category: 'physical', power: 40, accuracy: 100, pp: 30, priority: 1 },
  'astral-barrage': { name: '星碎', nameEn: 'Astral Barrage', type: 'ghost', category: 'special', power: 120, accuracy: 100, pp: 5, priority: 0 },
  'poltergeist': { name: '灵骚', nameEn: 'Poltergeist', type: 'ghost', category: 'physical', power: 110, accuracy: 90, pp: 5, priority: 0, note: '需要对方携带道具' },
  'hex': { name: '祸不单行', nameEn: 'Hex', type: 'ghost', category: 'special', power: 65, accuracy: 100, pp: 10, priority: 0, note: '对方有异常状态时威力翻倍' },

  // ========== 龙属性 ==========
  'dragon-claw': { name: '龙爪', nameEn: 'Dragon Claw', type: 'dragon', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'outrage': { name: '逆鳞', nameEn: 'Outrage', type: 'dragon', category: 'physical', power: 120, accuracy: 100, pp: 10, priority: 0, note: '2-3回合连续，结束后混乱' },
  'draco-meteor': { name: '流星群', nameEn: 'Draco Meteor', type: 'dragon', category: 'special', power: 130, accuracy: 90, pp: 5, priority: 0, note: '使用后特攻-2' },
  'dragon-pulse': { name: '龙之波动', nameEn: 'Dragon Pulse', type: 'dragon', category: 'special', power: 85, accuracy: 100, pp: 10, priority: 0 },
  'dragon-rush': { name: '龙之俯冲', nameEn: 'Dragon Rush', type: 'dragon', category: 'physical', power: 100, accuracy: 75, pp: 10, priority: 0 },
  'roaring-moon': { name: '月呼', nameEn: "Dragon's Wrath", type: 'dragon', category: 'physical', power: 120, accuracy: 100, pp: 10, priority: 0 },
  'breaking-swipe': { name: '广域破坏', nameEn: 'Breaking Swipe', type: 'dragon', category: 'physical', power: 60, accuracy: 100, pp: 15, priority: 0, note: '对方攻击-1' },

  // ========== 恶属性 ==========
  'crunch': { name: '咬碎', nameEn: 'Crunch', type: 'dark', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'dark-pulse': { name: '恶之波动', nameEn: 'Dark Pulse', type: 'dark', category: 'special', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'knock-off': { name: '拍落', nameEn: 'Knock Off', type: 'dark', category: 'physical', power: 65, accuracy: 100, pp: 20, priority: 0, note: '对方持有道具时威力×1.5，打落对方道具' },
  'foul-play': { name: '欺诈', nameEn: 'Foul Play', type: 'dark', category: 'physical', power: 95, accuracy: 100, pp: 15, priority: 0, note: '使用对方攻击值计算' },
  'sucker-punch': { name: '突袭', nameEn: 'Sucker Punch', type: 'dark', category: 'physical', power: 70, accuracy: 100, pp: 5, priority: 1, note: '对方使用攻击招式时成功' },
  'wicked-blow': { name: '暗冥强击', nameEn: 'Wicked Blow', type: 'dark', category: 'physical', power: 75, accuracy: 100, pp: 5, priority: 0, note: '必定击中要害' },

  // ========== 钢属性 ==========
  'iron-head': { name: '铁头', nameEn: 'Iron Head', type: 'steel', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'flash-cannon': { name: '加农光炮', nameEn: 'Flash Cannon', type: 'steel', category: 'special', power: 80, accuracy: 100, pp: 10, priority: 0 },
  'meteor-mash': { name: '彗星拳', nameEn: 'Meteor Mash', type: 'steel', category: 'physical', power: 90, accuracy: 90, pp: 10, priority: 0 },
  'heavy-slam': { name: '重磅冲撞', nameEn: 'Heavy Slam', type: 'steel', category: 'physical', power: 80, accuracy: 100, pp: 10, priority: 0, note: '威力依据体重差' },
  'magnet-bomb': { name: '磁铁炸弹', nameEn: 'Magnet Bomb', type: 'steel', category: 'physical', power: 60, accuracy: 0, pp: 20, priority: 0, alwaysHit: true },
  'doom-desire': { name: '破灭之愿', nameEn: 'Doom Desire', type: 'steel', category: 'special', power: 140, accuracy: 100, pp: 5, priority: 0, note: '2回合后触发' },
  'sunsteel-strike': { name: '流星闪冲', nameEn: 'Sunsteel Strike', type: 'steel', category: 'physical', power: 100, accuracy: 100, pp: 5, priority: 0 },

  // ========== 妖精属性 ==========
  'dazzling-gleam': { name: '魔法闪耀', nameEn: 'Dazzling Gleam', type: 'fairy', category: 'special', power: 80, accuracy: 100, pp: 10, priority: 0 },
  'moonblast': { name: '月亮之力', nameEn: 'Moonblast', type: 'fairy', category: 'special', power: 95, accuracy: 100, pp: 15, priority: 0 },
  'play-rough': { name: '嬉闹', nameEn: 'Play Rough', type: 'fairy', category: 'physical', power: 90, accuracy: 90, pp: 10, priority: 0 },
  'spirit-break': { name: '灵魂冲击', nameEn: 'Spirit Break', type: 'fairy', category: 'physical', power: 75, accuracy: 100, pp: 15, priority: 0 },
  'light-that-burns-the-sky': { name: '棱镜镭射', nameEn: 'Prismatic Laser', type: 'fairy', category: 'special', power: 140, accuracy: 100, pp: 5, priority: 0 },
  'sparkling-aria': { name: '泡影的咏叹调', nameEn: 'Sparkling Aria', type: 'fairy', category: 'special', power: 90, accuracy: 100, pp: 10, priority: 0 },

  // ========== 飞行属性（补充） ==========
  'air-slash': { name: '空气斩', nameEn: 'Air Slash', type: 'flying', category: 'special', power: 75, accuracy: 95, pp: 15, priority: 0 },

  // ========== 水属性（补充） ==========
  'waterfall': { name: '攀瀑', nameEn: 'Waterfall', type: 'water', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'aqua-tail': { name: '水流尾', nameEn: 'Aqua Tail', type: 'water', category: 'physical', power: 90, accuracy: 90, pp: 10, priority: 0 },
  'muddy-water': { name: '浊流', nameEn: 'Muddy Water', type: 'water', category: 'special', power: 90, accuracy: 85, pp: 10, priority: 0 },
  'surging-strikes': { name: '水流连打', nameEn: 'Surging Strikes', type: 'water', category: 'physical', power: 25, accuracy: 100, pp: 5, priority: 0, note: '必定命中3次，必定击中要害' },

  // ========== 草属性（补充） ==========
  'leech-seed': { name: '寄生种子', nameEn: 'Leech Seed', type: 'grass', category: 'status', power: 0, accuracy: 90, pp: 10, priority: 0, note: '每回合吸取对方1/8 HP' },
  'solar-beam': { name: '日光束', nameEn: 'Solar Beam', type: 'grass', category: 'special', power: 120, accuracy: 100, pp: 10, priority: 0, note: '晴天一回合发动' },
  'grass-knot': { name: '打草结', nameEn: 'Grass Knot', type: 'grass', category: 'special', power: 0, accuracy: 100, pp: 20, priority: 0, note: '威力依据对方体重' },
  'horn-leech': { name: '木角', nameEn: 'Horn Leech', type: 'grass', category: 'physical', power: 75, accuracy: 100, pp: 10, priority: 0, note: '回复造成伤害的50% HP' },
  'flower-trick': { name: '千变万花', nameEn: 'Flower Trick', type: 'grass', category: 'physical', power: 70, accuracy: 0, pp: 10, priority: 0, note: '必定命中，必定击中要害' },

  // ========== 超能力属性（补充） ==========
  'extrasensory': { name: '神通力', nameEn: 'Extrasensory', type: 'psychic', category: 'special', power: 80, accuracy: 100, pp: 20, priority: 0 },

  // ========== 格斗属性（补充） ==========
  'low-kick': { name: '踢倒', nameEn: 'Low Kick', type: 'fighting', category: 'physical', power: 0, accuracy: 100, pp: 20, priority: 0, note: '威力依据对方体重' },
  'cross-chop': { name: '十字劈', nameEn: 'Cross Chop', type: 'fighting', category: 'physical', power: 100, accuracy: 80, pp: 5, priority: 0, note: '高击中要害率' },
  'sacred-sword': { name: '圣剑', nameEn: 'Sacred Sword', type: 'fighting', category: 'physical', power: 90, accuracy: 100, pp: 15, priority: 0, note: '无视对方能力变化' },
  'collision-course': { name: '全开猛撞', nameEn: 'Collision Course', type: 'fighting', category: 'physical', power: 100, accuracy: 100, pp: 5, priority: 0, note: '超效果时威力×1.33' },
  'close-combat-bulk': { name: '近身战', nameEn: 'Close Combat', type: 'fighting', category: 'physical', power: 120, accuracy: 100, pp: 5, priority: 0 },

  // ========== 恶属性（补充） ==========
  'night-slash': { name: '暗袭要害', nameEn: 'Night Slash', type: 'dark', category: 'physical', power: 70, accuracy: 100, pp: 15, priority: 0, note: '高击中要害率' },
  'darkest-lariat': { name: 'DD金勾臂', nameEn: 'Darkest Lariat', type: 'dark', category: 'physical', power: 85, accuracy: 100, pp: 10, priority: 0, note: '无视对方能力变化' },
  'throat-chop': { name: '地狱突刺', nameEn: 'Throat Chop', type: 'dark', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0 },
  'parting-shot': { name: '抛下狠话', nameEn: 'Parting Shot', type: 'dark', category: 'status', power: 0, accuracy: 100, pp: 20, priority: 0, note: '对方攻击和特攻-1，然后换人' },

  // ========== 幽灵属性（补充） ==========
  'phantom-force': { name: '潜灵奇袭', nameEn: 'Phantom Force', type: 'ghost', category: 'physical', power: 90, accuracy: 100, pp: 10, priority: 0, note: '穿透守护' },
  'spirit-shackle': { name: '缝影', nameEn: 'Spirit Shackle', type: 'ghost', category: 'physical', power: 80, accuracy: 100, pp: 10, priority: 0 },

  // ========== 钢属性（补充） ==========
  'iron-tail': { name: '铁尾', nameEn: 'Iron Tail', type: 'steel', category: 'physical', power: 100, accuracy: 75, pp: 15, priority: 0 },
  'make-it-rain': { name: '淘金潮', nameEn: 'Make It Rain', type: 'steel', category: 'special', power: 120, accuracy: 100, pp: 5, priority: 0, note: '使用后特攻-1' },
  'behemoth-bash': { name: '巨兽弹', nameEn: 'Behemoth Bash', type: 'steel', category: 'physical', power: 100, accuracy: 100, pp: 5, priority: 0 },
  'behemoth-blade': { name: '巨兽斩', nameEn: 'Behemoth Blade', type: 'steel', category: 'physical', power: 100, accuracy: 100, pp: 5, priority: 0 },
  'body-press': { name: '扑击', nameEn: 'Body Press', type: 'fighting', category: 'physical', power: 80, accuracy: 100, pp: 10, priority: 0, note: '使用防御值计算伤害' },
  'gyro-ball': { name: '陀螺球', nameEn: 'Gyro Ball', type: 'steel', category: 'physical', power: 0, accuracy: 100, pp: 5, priority: 0, note: '速度越低威力越高，最高150' },

  // ========== 妖精属性（补充） ==========
  'mystical-fire': { name: '魔法火焰', nameEn: 'Mystical Fire', type: 'fire', category: 'special', power: 75, accuracy: 100, pp: 10, priority: 0, note: '使对方特攻-1' },

  // ========== 龙属性（补充） ==========
  'dragon-tail': { name: '龙尾', nameEn: 'Dragon Tail', type: 'dragon', category: 'physical', power: 60, accuracy: 90, pp: 10, priority: -6, note: '使对方强制换人' },
  'dragon-darts': { name: '龙箭', nameEn: 'Dragon Darts', type: 'dragon', category: 'physical', power: 50, accuracy: 100, pp: 10, priority: 0, note: '命中2次' },
  'electro-drift': { name: '闪电猛冲', nameEn: 'Electro Drift', type: 'electric', category: 'special', power: 100, accuracy: 100, pp: 5, priority: 0, note: '超效果时威力×1.33' },
  'dynamax-cannon': { name: '极巨炮', nameEn: 'Dynamax Cannon', type: 'dragon', category: 'special', power: 100, accuracy: 100, pp: 5, priority: 0 },
  'roaring-moon-move': { name: '龙啸', nameEn: "Roaring Moon's Wrath", type: 'dragon', category: 'physical', power: 120, accuracy: 100, pp: 10, priority: 0 },

  // ========== 岩石属性（补充） ==========
  'rock-blast': { name: '岩石爆击', nameEn: 'Rock Blast', type: 'rock', category: 'physical', power: 25, accuracy: 90, pp: 10, priority: 0, note: '2-5连击' },
  'diamond-storm-2': { name: '钻石风暴', nameEn: 'Diamond Storm', type: 'rock', category: 'physical', power: 100, accuracy: 95, pp: 5, priority: 0 },

  // ========== 毒属性（补充） ==========
  'toxic': { name: '剧毒', nameEn: 'Toxic', type: 'poison', category: 'status', power: 0, accuracy: 90, pp: 10, priority: 0, note: '使对方进入重毒状态' },

  // ========== 虫属性（补充） ==========
  'megahorn': { name: '超级角击', nameEn: 'Megahorn', type: 'bug', category: 'physical', power: 120, accuracy: 85, pp: 10, priority: 0 },

  // ========== 冰属性（补充） ==========
  'triple-axel': { name: '三旋击', nameEn: 'Triple Axel', type: 'ice', category: 'physical', power: 20, accuracy: 90, pp: 10, priority: 0, note: '命中3次，每次威力递增20' },
  'ice-fang': { name: '冰冻牙', nameEn: 'Ice Fang', type: 'ice', category: 'physical', power: 65, accuracy: 95, pp: 15, priority: 0 },
  'ice-spinner': { name: '冰旋', nameEn: 'Ice Spinner', type: 'ice', category: 'physical', power: 80, accuracy: 100, pp: 15, priority: 0, note: '消除场地效果' },

  // ========== 一般属性（补充） ==========
  'agility': { name: '高速移动', nameEn: 'Agility', type: 'psychic', category: 'status', power: 0, accuracy: 0, pp: 30, priority: 0, note: '速度+2' },
  'brick-break': { name: '劈瓦', nameEn: 'Brick Break', type: 'fighting', category: 'physical', power: 75, accuracy: 100, pp: 15, priority: 0, note: '破除反射壁/光墙' },
  'bulk-up': { name: '健美', nameEn: 'Bulk Up', type: 'fighting', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '攻击+1，防御+1' },
  'coil': { name: '盘蜷', nameEn: 'Coil', type: 'poison', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '攻击+1，防御+1，命中+1' },
  'cosmic-power': { name: '宇宙力量', nameEn: 'Cosmic Power', type: 'psychic', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '防御+1，特防+1' },
  'court-change': { name: '换场', nameEn: 'Court Change', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 10, priority: 0, note: '交换双方场地上的道具（隐形岩等）' },
  'defog': { name: '清除浓雾', nameEn: 'Defog', type: 'flying', category: 'status', power: 0, accuracy: 0, pp: 15, priority: 0, note: '消除危险技，降低对方回避' },
  'detect': { name: '看穿', nameEn: 'Detect', type: 'fighting', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 4, note: '本回合免疫所有攻击（类守护）' },
  'fake-out': { name: '击掌奇袭', nameEn: 'Fake Out', type: 'normal', category: 'physical', power: 40, accuracy: 100, pp: 10, priority: 3, note: '只能在刚出场时使用，使对方畏缩' },
  'final-gambit': { name: '搏命', nameEn: 'Final Gambit', type: 'fighting', category: 'special', power: 0, accuracy: 100, pp: 5, priority: 0, note: '对对方造成等同于使用者HP的伤害，使用者HP归零' },
  'follow-me': { name: '看我嘛', nameEn: 'Follow Me', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 2, note: '使对方攻击集中到自身（双打专用）' },
  'glare': { name: '大蛇瞪眼', nameEn: 'Glare', type: 'normal', category: 'status', power: 0, accuracy: 100, pp: 30, priority: 0, note: '使对方麻痹' },
  'haze': { name: '黑雾', nameEn: 'Haze', type: 'ice', category: 'status', power: 0, accuracy: 0, pp: 30, priority: 0, note: '重置双方所有能力变化' },
  'king-shield': { name: '王者盾牌', nameEn: 'King\'s Shield', type: 'steel', category: 'status', power: 0, accuracy: 0, pp: 10, priority: 4, note: '防御所有攻击，物理攻击使对方攻击-1' },
  'light-screen': { name: '光墙', nameEn: 'Light Screen', type: 'psychic', category: 'status', power: 0, accuracy: 0, pp: 30, priority: 0, note: '己方特殊伤害减半，5回合' },
  'morning-sun': { name: '晨光', nameEn: 'Morning Sun', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 0, note: '回复HP（晴天回复2/3）' },
  'recover': { name: '自我再生', nameEn: 'Recover', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 0, note: '回复最大HP的50%' },
  'reflect': { name: '反射壁', nameEn: 'Reflect', type: 'psychic', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '己方物理伤害减半，5回合' },
  'roost': { name: '羽栖', nameEn: 'Roost', type: 'flying', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 0, note: '回复最大HP的50%，本回合失去飞行属性' },
  'slack-off': { name: '偷懒', nameEn: 'Slack Off', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 0, note: '回复最大HP的50%' },
  'sleep-powder': { name: '催眠粉', nameEn: 'Sleep Powder', type: 'grass', category: 'status', power: 0, accuracy: 75, pp: 15, priority: 0, note: '使对方进入睡眠' },
  'snipe-shot': { name: '狙击', nameEn: 'Snipe Shot', type: 'water', category: 'special', power: 80, accuracy: 100, pp: 15, priority: 0, note: '无视重定向效果，高击中要害率' },
  'spikes': { name: '撒菱', nameEn: 'Spikes', type: 'ground', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '在对方场地设置撒菱' },
  'synthesis': { name: '光合作用', nameEn: 'Synthesis', type: 'grass', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 0, note: '回复HP（晴天回复2/3）' },
  'u-turn': { name: '急速折返', nameEn: 'U-turn', type: 'bug', category: 'physical', power: 70, accuracy: 100, pp: 20, priority: 0, note: '攻击后换人' },
  'wish': { name: '祈愿', nameEn: 'Wish', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 10, priority: 0, note: '下回合回复最大HP的50%' },
  'baton-pass': { name: '接棒', nameEn: 'Baton Pass', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 40, priority: 0, note: '换人时保留能力变化' },
  'baneful-bunker': { name: '碉堡', nameEn: 'Baneful Bunker', type: 'poison', category: 'status', power: 0, accuracy: 0, pp: 10, priority: 4, note: '防御所有攻击，接触攻击使对方中毒' },
  'clangorous-soul': { name: '魂舞烈音爆', nameEn: 'Clangorous Soul', type: 'dragon', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 0, note: '消耗1/3 HP，所有能力+1' },
  'pyro-ball': { name: '火焰球', nameEn: 'Pyro Ball', type: 'fire', category: 'physical', power: 120, accuracy: 90, pp: 5, priority: 0 },
  'torch-song': { name: '闪焰高歌', nameEn: 'Torch Song', type: 'fire', category: 'special', power: 80, accuracy: 100, pp: 10, priority: 0, note: '使用后特攻+1' },
  'aqua-step': { name: '流水旋舞', nameEn: 'Aqua Step', type: 'water', category: 'physical', power: 80, accuracy: 100, pp: 10, priority: 0, note: '使用后速度+1' },
  'rage-fist': { name: '愤怒之拳', nameEn: 'Rage Fist', type: 'ghost', category: 'physical', power: 50, accuracy: 100, pp: 10, priority: 0, note: '每次被攻击后本回合威力+50，最高350' },
  'kowtow-cleave': { name: '仆刀', nameEn: 'Kowtow Cleave', type: 'dark', category: 'physical', power: 85, accuracy: 0, pp: 10, priority: 0, note: '必定命中' },

  // ========== 钢属性（补充2） ==========
  'bullet-punch': { name: '子弹拳', nameEn: 'Bullet Punch', type: 'steel', category: 'physical', power: 40, accuracy: 100, pp: 30, priority: 1 },

  // ========== 格斗属性（补充2） ==========
  'dynamic-punch': { name: '爆裂拳', nameEn: 'Dynamic Punch', type: 'fighting', category: 'physical', power: 100, accuracy: 50, pp: 5, priority: 0, note: '命中后使对方混乱' },

  // ========== 一般属性（补充2） ==========
  'moonlight': { name: '月光', nameEn: 'Moonlight', type: 'fairy', category: 'status', power: 0, accuracy: 0, pp: 5, priority: 0, note: '回复HP（晴天回复2/3，沙暴/冰雹回复1/4）' },
  'signal-beam': { name: '信号光束', nameEn: 'Signal Beam', type: 'bug', category: 'special', power: 75, accuracy: 100, pp: 15, priority: 0 },
  'sky-attack': { name: '神鸟猛击', nameEn: 'Sky Attack', type: 'flying', category: 'physical', power: 140, accuracy: 90, pp: 5, priority: 0, note: '蓄力1回合，30%使对方畏缩' },
  'thunder-fang': { name: '雷电牙', nameEn: 'Thunder Fang', type: 'electric', category: 'physical', power: 65, accuracy: 95, pp: 15, priority: 0 },
  'trick': { name: '戏法', nameEn: 'Trick', type: 'psychic', category: 'status', power: 0, accuracy: 100, pp: 10, priority: 0, note: '与对方交换持有道具' },

  // ========== 变化招式（常用） ==========
  'swords-dance': { name: '剑舞', nameEn: 'Swords Dance', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '攻击+2' },
  'nasty-plot': { name: '诡计', nameEn: 'Nasty Plot', type: 'dark', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '特攻+2' },
  'calm-mind': { name: '冥想', nameEn: 'Calm Mind', type: 'psychic', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '特攻+1，特防+1' },
  'dragon-dance': { name: '龙之舞', nameEn: 'Dragon Dance', type: 'dragon', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '攻击+1，速度+1' },
  'quiver-dance': { name: '蝶舞', nameEn: 'Quiver Dance', type: 'bug', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '特攻+1，特防+1，速度+1' },
  'protect': { name: '守住', nameEn: 'Protect', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 10, priority: 4, note: '本回合免疫所有攻击' },
  'substitute': { name: '替身', nameEn: 'Substitute', type: 'normal', category: 'status', power: 0, accuracy: 0, pp: 10, priority: 0, note: '消耗25% HP创建替身' },
  'trick-room': { name: '戏法空间', nameEn: 'Trick Room', type: 'psychic', category: 'status', power: 0, accuracy: 0, pp: 5, priority: -7, note: '翻转速度顺序，5回合' },
  'tailwind': { name: '顺风', nameEn: 'Tailwind', type: 'flying', category: 'status', power: 0, accuracy: 0, pp: 15, priority: 0, note: '己方速度×2，4回合' },
  'spore': { name: '蘑菇孢子', nameEn: 'Spore', type: 'grass', category: 'status', power: 0, accuracy: 100, pp: 15, priority: 0, note: '使对方进入睡眠' },
  'thunder-wave': { name: '电磁波', nameEn: 'Thunder Wave', type: 'electric', category: 'status', power: 0, accuracy: 90, pp: 20, priority: 0, note: '使对方麻痹（速度×0.5）' },
  'will-o-wisp': { name: '鬼火', nameEn: 'Will-O-Wisp', type: 'fire', category: 'status', power: 0, accuracy: 85, pp: 15, priority: 0, note: '使对方灼烧（物理攻击×0.5）' },
  'stealth-rock': { name: '隐形岩', nameEn: 'Stealth Rock', type: 'rock', category: 'status', power: 0, accuracy: 0, pp: 20, priority: 0, note: '场地上设置隐形岩' },

  // ── 特性联动相关技能（补充） ──────────────────────────────────

  // 天气/场地联动
  'weather-ball':  { name: '气象球',   nameEn: 'Weather Ball',  type: 'normal',  category: 'special',  power: 50,  accuracy: 100, pp: 10, priority: 0, note: '天气下属性变化+威力×2' },
  'terrain-pulse': { name: '地形脉冲', nameEn: 'Terrain Pulse', type: 'normal',  category: 'special',  power: 50,  accuracy: 100, pp: 10, priority: 0, note: '场地下属性变化+威力×2' },
  'solar-blade':   { name: '叶刃日炸', nameEn: 'Solar Blade',   type: 'grass',   category: 'physical', power: 125, accuracy: 100, pp: 10, priority: 0, note: '晴天一回合发动，非晴天威力减半' },

  // 咬击系（强颚）
  'bite':          { name: '咬住',   nameEn: 'Bite',          type: 'dark',    category: 'physical', power: 60,  accuracy: 100, pp: 25, priority: 0 },
  'fire-fang':     { name: '火焰牙', nameEn: 'Fire Fang',     type: 'fire',    category: 'physical', power: 65,  accuracy: 95,  pp: 15, priority: 0 },
  'poison-fang':   { name: '剧毒牙',   nameEn: 'Poison Fang',   type: 'poison',  category: 'physical', power: 50,  accuracy: 100, pp: 15, priority: 0 },
  'psychic-fangs': { name: '精神之牙', nameEn: 'Psychic Fangs', type: 'psychic', category: 'physical', power: 85,  accuracy: 100, pp: 10, priority: 0, note: '破除反射壁/光墙' },
  'fishious-rend': { name: '鳃咬', nameEn: 'Fishious Rend',   type: 'water',   category: 'physical', power: 85,  accuracy: 100, pp: 10, priority: 0, note: '先手时威力×2' },
  'jaw-lock':      { name: '紧咬不放', nameEn: 'Jaw Lock',    type: 'dark',    category: 'physical', power: 80,  accuracy: 100, pp: 10, priority: 0, note: '使双方不能逃跑' },
  'bug-bite':      { name: '虫咬', nameEn: 'Bug Bite',        type: 'bug',     category: 'physical', power: 60,  accuracy: 100, pp: 20, priority: 0 },

  // 音波系（隔音）
  'disarming-voice': { name: '迷人之声', nameEn: 'Disarming Voice', type: 'fairy',  category: 'special',  power: 40,  accuracy: 0,   pp: 15, priority: 0, alwaysHit: true },
  'round':           { name: '合唱',   nameEn: 'Round',             type: 'normal', category: 'special',  power: 60,  accuracy: 100, pp: 15, priority: 0, note: '合唱时威力×2' },
  'snore':           { name: '打鼾',   nameEn: 'Snore',             type: 'normal', category: 'special',  power: 50,  accuracy: 100, pp: 15, priority: 0, note: '仅睡眠时可用' },
  'uproar':          { name: '吵闹',   nameEn: 'Uproar',            type: 'normal', category: 'special',  power: 90,  accuracy: 100, pp: 10, priority: 0, note: '2-5回合连续，阻止入眠' },
  'snarl':           { name: '大声咆哮',   nameEn: 'Snarl',             type: 'dark',   category: 'special',  power: 55,  accuracy: 95,  pp: 15, priority: 0, note: '使对方特攻-1' },
  'noble-roar':      { name: '战吼', nameEn: 'Noble Roar',      type: 'normal', category: 'status',   power: 0,   accuracy: 100, pp: 30, priority: 0, note: '使对方攻击/特攻-1' },
  'relic-song':      { name: '古老之歌', nameEn: 'Relic Song',      type: 'normal', category: 'special',  power: 75,  accuracy: 100, pp: 10, priority: 0, note: '使对方入眠' },
  'overdrive':       { name: '破音',   nameEn: 'Overdrive',         type: 'electric', category: 'special', power: 80, accuracy: 100, pp: 10, priority: 0 },
  'clanging-scales': { name: '鳞片噪音', nameEn: 'Clanging Scales', type: 'dragon', category: 'special',  power: 110, accuracy: 100, pp: 5,  priority: 0, note: '使用后防御-1' },
  'alluring-voice':  { name: '魅惑之声', nameEn: 'Alluring Voice', type: 'fairy',  category: 'special',  power: 80,  accuracy: 100, pp: 10, priority: 0 },

  // 波动系（大炮手）
  'water-pulse':   { name: '水之波动', nameEn: 'Water Pulse',   type: 'water',  category: 'special',  power: 60,  accuracy: 100, pp: 20, priority: 0 },

  // 接触/拳击系
  'aerial-ace':    { name: '燕返',   nameEn: 'Aerial Ace',   type: 'flying',   category: 'physical', power: 60,  accuracy: 0,   pp: 20, priority: 0, alwaysHit: true },
  'focus-punch':   { name: '真气拳', nameEn: 'Focus Punch',  type: 'fighting', category: 'physical', power: 150, accuracy: 100, pp: 20, priority: -3, note: '受攻击即失败' },
  'shadow-punch':  { name: '暗影拳', nameEn: 'Shadow Punch', type: 'ghost',    category: 'physical', power: 60,  accuracy: 0,   pp: 20, priority: 0, alwaysHit: true },

  // 妖精系补充
  'draining-kiss': { name: '吸取之吻', nameEn: 'Draining Kiss', type: 'fairy',  category: 'special',  power: 50,  accuracy: 100, pp: 10, priority: 0, note: '回复造成伤害的75%' },

  // 岩石系补充
  'ancient-power': { name: '原始之力', nameEn: 'Ancient Power', type: 'rock',  category: 'special',  power: 60,  accuracy: 100, pp: 5,  priority: 0, note: '10%使所有能力+1' },
};

/**
 * 获取技能的实际威力（考虑特殊情况）
 * @param {string} moveId
 * @returns {number|null}
 */
function getMovePower(moveId) {
  const move = MOVES[moveId];
  if (!move || move.category === 'status') return null;
  return move.power;
}
