// 宝可梦冠军可用宝可梦数据
// 数据来源：宝可梦冠军环境官方数据，中文名来自 Pokemon Showdown 汉化插件
// baseStats: { hp, atk, def, spa, spd, spe }
// abilities: [{ id, name, nameEn, isHidden }]
// forms: { formId: { name, nameEn, types, baseStats, ability } }
// pinyin / pinyinAbbr: 全拼 / 首字母缩写（用于搜索）
// moves: 可学习的技能ID列表

const POKEMON = {
  'venusaur': {
    id: 3, name: '妙蛙花', nameEn: 'Venusaur',
    pinyin: 'miaowahua', pinyinAbbr: 'mwh',
    types: ["grass","poison"],
    baseStats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    abilities: [{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":false},{"id":"chlorophyll","name":"叶绿素","nameEn":"Chlorophyll","isHidden":true}],
    forms: {"mega":{"name":"妙蛙花-超级进化","nameEn":"Mega Venusaur","types":["grass","poison"],"baseStats":{"hp":80,"atk":100,"def":123,"spa":122,"spd":120,"spe":80},"ability":{"id":"thick-fat","name":"厚脂肪","nameEn":"Thick Fat"}}},
    moves: ["acid-spray","amnesia","body-slam","bulldoze","bullet-seed","charm","curse","double-edge","earth-power","earthquake","endure","energy-ball","facade","frenzy-plant","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","helping-hand","hyper-beam","ingrain","knock-off","leaf-storm","leech-seed","light-screen","outrage","petal-blizzard","petal-dance","poison-jab","poison-powder","power-whip","protect","rest","round","scary-face","seed-bomb","sleep-powder","sleep-talk","sludge-bomb","sludge-wave","snore","solar-beam","stomping-tantrum","substitute","sunny-day","sweet-scent","swords-dance","synthesis","terrain-pulse","toxic","trailblaze","venoshock","weather-ball","worry-seed"]
  },
  'charizard': {
    id: 6, name: '喷火龙', nameEn: 'Charizard',
    pinyin: 'penhuolong', pinyinAbbr: 'phl',
    types: ["fire","flying"],
    baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"solar-power","name":"太阳之力","nameEn":"Solar Power","isHidden":true}],
    forms: {"mega-x":{"name":"喷火龙-超级进化-X","nameEn":"Mega Charizard X","types":["fire","dragon"],"baseStats":{"hp":78,"atk":130,"def":111,"spa":130,"spd":85,"spe":100},"ability":{"id":"tough-claws","name":"硬爪","nameEn":"Tough Claws"}},"mega-y":{"name":"喷火龙-超级进化-Y","nameEn":"Mega Charizard Y","types":["fire","flying"],"baseStats":{"hp":78,"atk":104,"def":78,"spa":159,"spd":115,"spe":100},"ability":{"id":"drought","name":"日照","nameEn":"Drought"}}},
    moves: ["acrobatics","aerial-ace","air-cutter","air-slash","ancient-power","beat-up","belly-drum","bite","blast-burn","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","counter","crunch","dig","double-edge","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-rush","dragon-tail","earthquake","endure","facade","fire-blast","fire-fang","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","fling","fly","focus-blast","focus-punch","giga-impact","heat-crash","heat-wave","helping-hand","hurricane","hyper-beam","inferno","iron-tail","mega-kick","outrage","overheat","protect","rest","roar","rock-slide","rock-tomb","roost","round","sandstorm","scale-shot","scary-face","scorching-sands","shadow-claw","sleep-talk","snore","solar-beam","steel-wing","substitute","sunny-day","swords-dance","temper-flare","thunder-punch","weather-ball","will-o-wisp"]
  },
  'blastoise': {
    id: 9, name: '水箭龟', nameEn: 'Blastoise',
    pinyin: 'shuijiangui', pinyinAbbr: 'sjg',
    types: ["water"],
    baseStats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    abilities: [{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":false},{"id":"rain-dish","name":"雨盘","nameEn":"Rain Dish","isHidden":true}],
    forms: {"mega":{"name":"水箭龟-超级进化","nameEn":"Mega Blastoise","types":["water"],"baseStats":{"hp":79,"atk":103,"def":120,"spa":135,"spd":115,"spe":78},"ability":{"id":"mega-launcher","name":"超级发射器","nameEn":"Mega Launcher"}}},
    moves: ["aqua-jet","aqua-ring","aqua-tail","aura-sphere","avalanche","bite","blizzard","body-press","bulldoze","brick-break","body-slam","chilling-water","crunch","dark-pulse","dig","dive","double-edge","dragon-pulse","earthquake","endure","facade","fake-out","flail","flash-cannon","fling","flip-turn","focus-blast","focus-punch","giga-impact","gyro-ball","haze","helping-hand","hydro-cannon","hydro-pump","hyper-beam","ice-beam","ice-punch","ice-spinner","iron-defense","iron-head","iron-tail","life-dew","liquidation","mega-kick","mirror-coat","mud-shot","muddy-water","outrage","protect","rain-dance","rapid-spin","rest","roar","rock-slide","rock-tomb","round","scary-face","shell-smash","sleep-talk","smack-down","snore","substitute","surf","terrain-pulse","water-pulse","water-spout","waterfall","wave-crash","weather-ball","whirlpool","yawn","zen-headbutt"]
  },
  'beedrill': {
    id: 15, name: '大针蜂', nameEn: 'Beedrill',
    pinyin: 'dazhenfeng', pinyinAbbr: 'dzf',
    types: ["bug","poison"],
    baseStats: { hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75 },
    abilities: [{"id":"swarm","name":"虫之预感","nameEn":"Swarm","isHidden":false},{"id":"sniper","name":"狙击手","nameEn":"Sniper","isHidden":true}],
    forms: {"mega":{"name":"大针蜂-超级进化","nameEn":"Mega Beedrill","types":["bug","poison"],"baseStats":{"hp":65,"atk":150,"def":40,"spa":15,"spd":80,"spe":145},"ability":{"id":"adaptability","name":"适应力","nameEn":"Adaptability"}}},
    moves: ["acrobatics","aerial-ace","agility","air-cutter","assurance","attract","baton-pass","brick-break","brutal-swing","bug-bite","bug-buzz","cross-poison","double-hit","double-edge","drill-run","dual-wingbeat","electroweb","endeavor","endure","facade","fell-stinger","focus-energy","giga-drain","giga-impact","hyper-beam","iron-defense","knock-off","lunge","payback","pin-missile","poison-jab","pollen-puff","pounce","protect","rest","round","screech","skitter-smack","sleep-talk","sludge-bomb","snore","solar-beam","string-shot","substitute","sunny-day","swords-dance","thief","throat-chop","toxic","toxic-spikes","u-turn","venoshock","x-scissor"]
  },
  'pidgeot': {
    id: 18, name: '大比鸟', nameEn: 'Pidgeot',
    pinyin: 'dabiniao', pinyinAbbr: 'dbn',
    types: ["normal","flying"],
    baseStats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"tangled-feet","name":"蹒跚","nameEn":"Tangled Feet","isHidden":false},{"id":"big-pecks","name":"健壮胸肌","nameEn":"Big Pecks","isHidden":true}],
    forms: {"mega":{"name":"大比鸟-超级进化","nameEn":"Mega Pidgeot","types":["normal","flying"],"baseStats":{"hp":83,"atk":80,"def":80,"spa":135,"spd":80,"spe":121},"ability":{"id":"no-guard","name":"无防守","nameEn":"No Guard"}}},
    moves: ["aerial-ace","agility","air-slash","attract","brave-bird","dual-wingbeat","endure","facade","feather-dance","fly","giga-impact","heat-wave","hurricane","hyper-beam","quick-attack","protect","rain-dance","rest","roost","round","sky-attack","sleep-talk","snore","steel-wing","substitute","sunny-day","tailwind","thief","u-turn","uproar","whirlwind"]
  },
  'arbok': {
    id: 24, name: '阿柏怪', nameEn: 'Arbok',
    pinyin: 'abaiguai', pinyinAbbr: 'abg',
    types: ["poison"],
    baseStats: { hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"shed-skin","name":"蜕皮","nameEn":"Shed Skin","isHidden":false},{"id":"unnerve","name":"紧张感","nameEn":"Unnerve","isHidden":true}],
    moves: ["acid-spray","beat-up","belch","bite","body-slam","breaking-swipe","brutal-swing","bulldoze","coil","crunch","dark-pulse","dig","double-edge","dragon-tail","earthquake","endure","facade","fire-fang","gastro-acid","giga-drain","giga-impact","glare","gunk-shot","haze","hyper-beam","ice-fang","iron-tail","knock-off","lash-out","leech-life","mud-shot","mud-slap","pain-split","payback","poison-fang","poison-jab","protect","psychic-fangs","rain-dance","rest","rock-slide","rock-tomb","round","scale-shot","scary-face","screech","seed-bomb","skitter-smack","sleep-talk","sludge-bomb","sludge-wave","snarl","snore","spit-up","spite","stockpile","stomping-tantrum","substitute","sucker-punch","sunny-day","swallow","switcheroo","thief","throat-chop","thunder-fang","toxic","toxic-spikes","trailblaze","venoshock","wrap"]
  },
  'pikachu': {
    id: 25, name: '皮卡丘', nameEn: 'Pikachu',
    pinyin: 'pikaqiu', pinyinAbbr: 'pkq',
    types: ["electric"],
    baseStats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    abilities: [{"id":"static","name":"静电","nameEn":"Static","isHidden":false},{"id":"lightning-rod","name":"避雷针","nameEn":"Lightning Rod","isHidden":true}],
    moves: ["agility","alluring-voice","body-slam","brick-break","charge","charge-beam","charm","dig","discharge","double-team","draining-kiss","eerie-impulse","electric-terrain","electro-ball","electroweb","encore","endeavor","endure","facade","fake-out","fake-tears","feint","flail","fling","focus-punch","grass-knot","helping-hand","iron-tail","knock-off","light-screen","mega-kick","nasty-plot","nuzzle","play-rough","protect","quick-attack","rain-dance","reflect","rest","reversal","rising-voltage","round","sleep-talk","snore","substitute","surf","sweet-kiss","thief","thunder","thunder-punch","thunder-wave","thunderbolt","tickle","trailblaze","upper-hand","volt-switch","volt-tackle","wild-charge","wish","zap-cannon"]
  },
  'raichu': {
    id: 26, name: '雷丘', nameEn: 'Raichu',
    pinyin: 'leiqiu', pinyinAbbr: 'lq',
    types: ["electric"],
    baseStats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
    abilities: [{"id":"static","name":"静电","nameEn":"Static","isHidden":false},{"id":"lightning-rod","name":"避雷针","nameEn":"Lightning Rod","isHidden":true}],
    moves: ["agility","alluring-voice","body-slam","brick-break","brutal-swing","charge","charge-beam","charm","dazzling-gleam","dig","discharge","double-team","drain-punch","draining-kiss","eerie-impulse","electric-terrain","electro-ball","electroweb","encore","endeavor","endure","facade","fake-out","fake-tears","feint","flail","fling","focus-blast","focus-punch","giga-impact","grass-knot","helping-hand","hyper-beam","iron-tail","knock-off","light-screen","mega-kick","nasty-plot","nuzzle","play-rough","protect","quick-attack","rain-dance","reflect","rest","reversal","rising-voltage","round","sleep-talk","snore","substitute","surf","sweet-kiss","thief","thunder","thunder-punch","thunder-wave","thunderbolt","tickle","trailblaze","upper-hand","volt-switch","volt-tackle","wild-charge","wish","zap-cannon"]
  },
  'machamp': {
    id: 68, name: '怪力', nameEn: 'Machamp',
    pinyin: 'guaili', pinyinAbbr: 'gl',
    types: ["fighting"],
    baseStats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
    abilities: [{"id":"guts","name":"毅力","nameEn":"Guts","isHidden":false},{"id":"no-guard","name":"无防守","nameEn":"No Guard","isHidden":false},{"id":"steadfast","name":"不屈之心","nameEn":"Steadfast","isHidden":true}],
    moves: ["assurance","attract","body-slam","brick-break","brutal-swing","bulk-up","bulldoze","bullet-punch","close-combat","coaching","counter","cross-chop","cross-poison","darkest-lariat","detect","dig","double-edge","drain-punch","dynamic-punch","earthquake","encore","endure","facade","fire-blast","fire-punch","flamethrower","fling","focus-blast","focus-energy","giga-impact","heavy-slam","helping-hand","high-horsepower","hyper-beam","ice-punch","knock-off","light-screen","low-kick","mega-kick","payback","poison-jab","protect","quick-guard","rain-dance","rest","reversal","rock-blast","rock-slide","rock-tomb","round","scary-face","seismic-toss","sleep-talk","snore","stomping-tantrum","stone-edge","storm-throw","substitute","sunny-day","superpower","thief","throat-chop","thunder-punch","tickle","wide-guard"]
  },
  'ariados': {
    id: 168, name: '阿利多斯', nameEn: 'Ariados',
    pinyin: 'aliduosi', pinyinAbbr: 'alds',
    types: ["bug","poison"],
    baseStats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 70, spe: 40 },
    abilities: [{"id":"swarm","name":"虫之预感","nameEn":"Swarm","isHidden":false},{"id":"insomnia","name":"不眠","nameEn":"Insomnia","isHidden":false},{"id":"sniper","name":"狙击手","nameEn":"Sniper","isHidden":true}],
    moves: ["acid-spray","agility","assurance","baton-pass","body-slam","bounce","bug-bite","bug-buzz","cross-poison","dig","disable","electroweb","endure","facade","fell-stinger","first-impression","focus-energy","foul-play","giga-drain","giga-impact","hex","hyper-beam","infestation","knock-off","leech-life","lunge","megahorn","night-shade","night-slash","pin-missile","poison-jab","pounce","protect","psychic-fangs","rage-powder","rest","round","scary-face","screech","shadow-sneak","skitter-smack","sleep-talk","sludge-bomb","sludge-wave","smart-strike","snore","solar-beam","spite","sticky-web","stomping-tantrum","string-shot","struggle-bug","substitute","sucker-punch","sunny-day","swords-dance","thief","throat-chop","toxic","toxic-spikes","toxic-thread","trailblaze","venoshock","x-scissor"]
  },
  'forretress': {
    id: 205, name: '佛烈托斯', nameEn: 'Forretress',
    pinyin: 'folietuosi', pinyinAbbr: 'flts',
    types: ["bug","steel"],
    baseStats: { hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40 },
    abilities: [{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":false},{"id":"overcoat","name":"防尘","nameEn":"Overcoat","isHidden":true}],
    moves: ["body-press","body-slam","bug-bite","bug-buzz","bulldoze","counter","curse","dig","double-edge","drill-run","earth-power","earthquake","endure","explosion","facade","flail","flash-cannon","giga-drain","giga-impact","gravity","gyro-ball","hard-press","heavy-slam","helping-hand","hyper-beam","ice-spinner","iron-defense","iron-head","light-screen","lunge","magnet-rise","metal-sound","pain-split","payback","pin-missile","poison-jab","pounce","power-trick","protect","rain-dance","rapid-spin","reflect","rest","reversal","rock-blast","rock-slide","rock-tomb","round","sand-tomb","sandstorm","seed-bomb","self-destruct","sleep-talk","smart-strike","snore","solar-beam","spikes","stealth-rock","steel-beam","steel-roller","stone-edge","struggle-bug","substitute","sunny-day","thunder-wave","toxic-spikes","venoshock","volt-switch"]
  },
  'medicham': {
    id: 308, name: '恰雷姆', nameEn: 'Medicham',
    pinyin: 'qialeimu', pinyinAbbr: 'qlm',
    types: ["fighting","psychic"],
    baseStats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 80 },
    abilities: [{"id":"pure-power","name":"瑜珈之力","nameEn":"Pure Power","isHidden":false},{"id":"telepathy","name":"心灵感应","nameEn":"Telepathy","isHidden":true}],
    forms: {"mega":{"name":"恰雷姆-超级进化","nameEn":"Mega Medicham","types":["fighting","psychic"],"baseStats":{"hp":60,"atk":100,"def":85,"spa":80,"spd":85,"spe":100},"ability":{"id":"pure-power","name":"瑜珈之力","nameEn":"Pure Power"}}},
    moves: ["acupressure","aerial-ace","agility","aura-sphere","axe-kick","baton-pass","blaze-kick","body-slam","brick-break","bulk-up","bullet-punch","calm-mind","close-combat","coaching","counter","detect","drain-punch","dynamic-punch","endure","energy-ball","expanding-force","facade","fake-out","feint","fire-punch","fling","focus-blast","focus-punch","giga-impact","grass-knot","gravity","guard-swap","helping-hand","high-jump-kick","hyper-beam","ice-punch","imprison","light-screen","low-kick","low-sweep","mega-kick","night-shade","pain-split","poison-jab","power-swap","power-trick","protect","psych-up","psychic","psychic-terrain","psycho-cut","psyshock","quick-guard","rain-dance","recover","reflect","rest","reversal","rock-slide","rock-tomb","round","shadow-ball","skill-swap","sleep-talk","snore","stored-power","substitute","sunny-day","taunt","thief","thunder-punch","trailblaze","trick","trick-room","upper-hand","vacuum-wave","zen-headbutt"]
  },
  'manectric': {
    id: 310, name: '雷电兽', nameEn: 'Manectric',
    pinyin: 'leidianshou', pinyinAbbr: 'lds',
    types: ["electric"],
    baseStats: { hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105 },
    abilities: [{"id":"static","name":"静电","nameEn":"Static","isHidden":false},{"id":"lightning-rod","name":"避雷针","nameEn":"Lightning Rod","isHidden":false},{"id":"minus","name":"负电","nameEn":"Minus","isHidden":true}],
    forms: {"mega":{"name":"雷电兽-超级进化","nameEn":"Mega Manectric","types":["electric"],"baseStats":{"hp":70,"atk":75,"def":80,"spa":135,"spd":80,"spe":135},"ability":{"id":"intimidate","name":"威吓","nameEn":"Intimidate"}}},
    moves: ["agility","attract","bite","body-slam","brutal-swing","charge","charge-beam","crunch","curse","discharge","eerie-impulse","electric-terrain","electro-ball","endure","facade","fire-fang","flamethrower","giga-impact","howl","hyper-beam","hyper-voice","ice-fang","iron-tail","light-screen","overheat","pounce","protect","psychic-fangs","quick-attack","rain-dance","rest","rising-voltage","roar","round","scary-face","sleep-talk","snarl","snore","substitute","supercell-slam","switcheroo","thief","thunder","thunder-fang","thunder-wave","thunderbolt","trailblaze","uproar","volt-switch","wild-charge"]
  },
  'sharpedo': {
    id: 319, name: '巨牙鲨', nameEn: 'Sharpedo',
    pinyin: 'juyasha', pinyinAbbr: 'jys',
    types: ["water","dark"],
    baseStats: { hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95 },
    abilities: [{"id":"rough-skin","name":"粗糙皮肤","nameEn":"Rough Skin","isHidden":false},{"id":"speed-boost","name":"加速","nameEn":"Speed Boost","isHidden":true}],
    forms: {"mega":{"name":"巨牙鲨-超级进化","nameEn":"Mega Sharpedo","types":["water","dark"],"baseStats":{"hp":70,"atk":140,"def":70,"spa":110,"spd":65,"spe":105},"ability":{"id":"strong-jaw","name":"强壮之颚","nameEn":"Strong Jaw"}}},
    moves: ["agility","ancient-power","aqua-jet","assurance","attract","avalanche","bite","blizzard","bounce","bulldoze","chilling-water","close-combat","crunch","dark-pulse","destiny-bond","dive","double-edge","earthquake","endure","facade","flip-turn","focus-energy","giga-impact","hydro-pump","hyper-beam","ice-beam","ice-fang","icy-wind","liquidation","night-slash","payback","poison-fang","poison-jab","protect","psychic-fangs","rain-dance","rest","rock-tomb","round","scald","scale-shot","scary-face","screech","sleep-talk","snarl","snore","substitute","surf","swagger","taunt","thrash","uproar","water-pulse","waterfall","whirlpool","zen-headbutt"]
  },
  'camerupt': {
    id: 323, name: '喷火驼', nameEn: 'Camerupt',
    pinyin: 'penhuotuo', pinyinAbbr: 'pht',
    types: ["fire","ground"],
    baseStats: { hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40 },
    abilities: [{"id":"magma-armor","name":"熔岩铠甲","nameEn":"Magma Armor","isHidden":false},{"id":"solid-rock","name":"坚硬岩石","nameEn":"Solid Rock","isHidden":false},{"id":"anger-point","name":"愤怒穴位","nameEn":"Anger Point","isHidden":true}],
    forms: {"mega":{"name":"喷火驼-超级进化","nameEn":"Mega Camerupt","types":["fire","ground"],"baseStats":{"hp":70,"atk":120,"def":100,"spa":145,"spd":105,"spe":20},"ability":{"id":"sheer-force","name":"强行","nameEn":"Sheer Force"}}},
    moves: ["amnesia","ancient-power","body-press","body-slam","bulldoze","burning-jealousy","charm","curse","dig","double-edge","earth-power","earthquake","endeavor","endure","eruption","facade","fire-blast","fire-spin","fissure","flame-charge","flamethrower","flare-blitz","flash-cannon","focus-energy","giga-impact","growth","heat-crash","heat-wave","heavy-slam","helping-hand","high-horsepower","howl","hyper-beam","iron-head","lash-out","lava-plume","mud-shot","mud-slap","overheat","protect","rain-dance","rest","roar","rock-slide","rock-tomb","round","sandstorm","scary-face","scorching-sands","self-destruct","sleep-talk","smack-down","snore","solar-beam","spit-up","stealth-rock","stockpile","stomping-tantrum","stone-edge","substitute","sunny-day","swallow","temper-flare","trailblaze","will-o-wisp","yawn","zen-headbutt"]
  },
  'banette': {
    id: 354, name: '诅咒娃娃', nameEn: 'Banette',
    pinyin: 'zuzhouwawa', pinyinAbbr: 'zzww',
    types: ["ghost"],
    baseStats: { hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65 },
    abilities: [{"id":"insomnia","name":"不眠","nameEn":"Insomnia","isHidden":false},{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":false},{"id":"cursed-body","name":"诅咒之躯","nameEn":"Cursed Body","isHidden":true}],
    forms: {"mega":{"name":"诅咒娃娃-超级进化","nameEn":"Mega Banette","types":["ghost"],"baseStats":{"hp":64,"atk":165,"def":75,"spa":93,"spd":83,"spe":75},"ability":{"id":"prankster","name":"恶作剧之心","nameEn":"Prankster"}}},
    moves: ["burning-jealousy","calm-mind","charge-beam","confuse-ray","curse","dark-pulse","dazzling-gleam","destiny-bond","disable","encore","endure","facade","fling","foul-play","giga-impact","gunk-shot","helping-hand","hex","hyper-beam","icy-wind","imprison","knock-off","lash-out","magic-room","nasty-plot","night-shade","pain-split","payback","phantom-force","poltergeist","pounce","protect","psych-up","psychic","rain-dance","rest","role-play","round","scary-face","screech","shadow-ball","shadow-claw","shadow-punch","shadow-sneak","skill-swap","skitter-smack","sleep-talk","snore","spite","substitute","sucker-punch","sunny-day","swagger","swords-dance","taunt","thief","throat-chop","thunder","thunder-wave","thunderbolt","torment","trailblaze","trick","trick-room","will-o-wisp","zen-headbutt"]
  },
  'chimecho': {
    id: 358, name: '风铃铃', nameEn: 'Chimecho',
    pinyin: 'fenglingling', pinyinAbbr: 'fll',
    types: ["psychic"],
    baseStats: { hp: 75, atk: 50, def: 80, spa: 95, spd: 90, spe: 65 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    forms: {"mega":{"name":"Mega Chimecho","nameEn":"Mega Chimecho","types":["psychic","steel"],"baseStats":{"hp":75,"atk":50,"def":110,"spa":135,"spd":120,"spe":65},"ability":{"id":"levitate","name":"飘浮","nameEn":"Levitate"}}},
    moves: ["ally-switch","baton-pass","boomburst","calm-mind","charge-beam","charm","cosmic-power","curse","dazzling-gleam","disable","double-edge","draining-kiss","encore","endure","energy-ball","expanding-force","extrasensory","facade","fake-tears","flash-cannon","future-sight","grass-knot","gravity","heal-bell","heal-pulse","healing-wish","helping-hand","hyper-beam","hypnosis","icy-wind","imprison","knock-off","light-screen","metal-sound","protect","psych-up","psychic","psychic-noise","psyshock","rain-dance","recover","recycle","reflect","rest","round","safeguard","screech","self-destruct","shadow-ball","skill-swap","sleep-talk","snarl","snore","stored-power","substitute","sunny-day","taunt","thunder-wave","trick","trick-room","uproar","wish","wrap","yawn","zen-headbutt"]
  },
  'glalie': {
    id: 362, name: '冰鬼护', nameEn: 'Glalie',
    pinyin: 'bingguihu', pinyinAbbr: 'bgh',
    types: ["ice"],
    baseStats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    abilities: [{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":false},{"id":"ice-body","name":"冰冻之躯","nameEn":"Ice Body","isHidden":false},{"id":"moody","name":"心情不定","nameEn":"Moody","isHidden":true}],
    forms: {"mega":{"name":"冰鬼护-超级进化","nameEn":"Mega Glalie","types":["ice"],"baseStats":{"hp":80,"atk":120,"def":80,"spa":120,"spd":80,"spe":100},"ability":{"id":"refrigerate","name":"冰冻皮肤","nameEn":"Refrigerate"}}},
    moves: ["avalanche","bite","blizzard","block","body-slam","bulldoze","chilling-water","crunch","dark-pulse","disable","double-team","earthquake","endure","explosion","facade","fake-tears","foul-play","freeze-dry","frost-breath","giga-impact","gyro-ball","helping-hand","hex","hyper-beam","ice-beam","ice-fang","ice-shard","ice-spinner","icicle-crash","icicle-spear","icy-wind","iron-head","light-screen","payback","protect","rain-dance","rest","round","scary-face","self-destruct","shadow-ball","sheer-cold","sleep-talk","snore","snowscape","spikes","spite","steel-roller","substitute","switcheroo","taunt","trailblaze","water-pulse","weather-ball"]
  },
  'luxray': {
    id: 405, name: '伦琴猫', nameEn: 'Luxray',
    pinyin: 'lunqinmao', pinyinAbbr: 'lqm',
    types: ["electric"],
    baseStats: { hp: 80, atk: 120, def: 79, spa: 95, spd: 79, spe: 70 },
    abilities: [{"id":"rivalry","name":"斗争心","nameEn":"Rivalry","isHidden":false},{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"guts","name":"毅力","nameEn":"Guts","isHidden":true}],
    moves: ["agility","baby-doll-eyes","bite","body-slam","charge","charge-beam","confuse-ray","crunch","discharge","double-edge","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","fake-tears","fire-fang","giga-impact","helping-hand","howl","hyper-beam","ice-fang","iron-tail","light-screen","night-slash","play-rough","protect","psychic-fangs","quick-attack","rain-dance","rest","rising-voltage","roar","round","scary-face","sleep-talk","snarl","snore","substitute","sunny-day","supercell-slam","superpower","swagger","thief","throat-chop","thunder","thunder-fang","thunder-wave","thunderbolt","trailblaze","volt-switch","wild-charge"]
  },
  'roserade': {
    id: 407, name: '罗丝雷朵', nameEn: 'Roserade',
    pinyin: 'luosileiduo', pinyinAbbr: 'lsld',
    types: ["grass","poison"],
    baseStats: { hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 90 },
    abilities: [{"id":"natural-cure","name":"自然回复","nameEn":"Natural Cure","isHidden":false},{"id":"poison-point","name":"毒刺","nameEn":"Poison Point","isHidden":false},{"id":"technician","name":"技术高手","nameEn":"Technician","isHidden":true}],
    moves: ["attract","body-slam","bullet-seed","charm","cotton-spore","dazzling-gleam","endure","energy-ball","extrasensory","facade","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","hyper-beam","ingrain","leaf-storm","leech-seed","life-dew","petal-blizzard","petal-dance","pin-missile","poison-jab","power-whip","protect","rain-dance","rest","round","seed-bomb","shadow-ball","sleep-powder","sleep-talk","sludge-bomb","snore","solar-beam","spikes","stun-spore","substitute","sunny-day","sweet-scent","swords-dance","synthesis","toxic","toxic-spikes","trailblaze","uproar","venoshock","weather-ball","worry-seed"]
  },
  'rampardos': {
    id: 409, name: '战槌龙', nameEn: 'Rampardos',
    pinyin: 'zhanchuilong', pinyinAbbr: 'zcl',
    types: ["rock"],
    baseStats: { hp: 97, atk: 165, def: 60, spa: 65, spd: 50, spe: 58 },
    abilities: [{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":false},{"id":"sheer-force","name":"强行","nameEn":"Sheer Force","isHidden":true}],
    moves: ["ancient-power","assurance","attract","avalanche","blizzard","body-press","body-slam","breaking-swipe","brick-break","bulldoze","crunch","curse","dig","double-edge","dragon-cheer","dragon-claw","dragon-pulse","dragon-tail","earth-power","earthquake","endeavor","endure","facade","fire-blast","fire-punch","flamethrower","fling","focus-blast","focus-energy","focus-punch","giga-impact","hammer-arm","head-smash","heavy-slam","hyper-beam","ice-beam","iron-head","iron-tail","meteor-beam","mud-slap","outrage","payback","protect","rain-dance","rest","roar","rock-blast","rock-slide","rock-tomb","round","sandstorm","scary-face","screech","sleep-talk","smack-down","snore","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","supercell-slam","superpower","surf","swords-dance","thief","thrash","thunder","thunder-punch","thunderbolt","trailblaze","uproar","whirlwind","zen-headbutt"]
  },
  'bastiodon': {
    id: 411, name: '护城龙', nameEn: 'Bastiodon',
    pinyin: 'huchenglong', pinyinAbbr: 'hcl',
    types: ["rock","steel"],
    baseStats: { hp: 60, atk: 52, def: 168, spa: 47, spd: 138, spe: 30 },
    abilities: [{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":false},{"id":"soundproof","name":"隔音","nameEn":"Soundproof","isHidden":true}],
    moves: ["ancient-power","attract","avalanche","blizzard","block","body-press","body-slam","bulldoze","counter","curse","dig","double-edge","earth-power","earthquake","endure","facade","fire-blast","fissure","flamethrower","flash-cannon","focus-energy","foul-play","giga-impact","guard-split","hard-press","heavy-slam","hyper-beam","ice-beam","iron-defense","iron-head","iron-tail","metal-burst","metal-sound","meteor-beam","mud-slap","outrage","power-gem","protect","rain-dance","reflect","rest","reversal","roar","rock-blast","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scary-face","scorching-sands","screech","sleep-talk","smack-down","snore","stealth-rock","steel-beam","steel-roller","stomping-tantrum","stone-edge","substitute","sunny-day","swagger","taunt","thunder","thunderbolt","trailblaze","wide-guard"]
  },
  'toxicroak': {
    id: 454, name: '毒骷蛙', nameEn: 'Toxicroak',
    pinyin: 'dukuwa', pinyinAbbr: 'dkw',
    types: ["poison","fighting"],
    baseStats: { hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 85 },
    abilities: [{"id":"anticipation","name":"危险预知","nameEn":"Anticipation","isHidden":false},{"id":"dry-skin","name":"干燥皮肤","nameEn":"Dry Skin","isHidden":false},{"id":"poison-touch","name":"毒手","nameEn":"Poison Touch","isHidden":true}],
    moves: ["acid-spray","aerial-ace","assurance","baton-pass","belch","bounce","brick-break","bulk-up","bulldoze","bullet-punch","chilling-water","close-combat","coaching","corrosive-gas","counter","cross-chop","cross-poison","dark-pulse","dig","drain-punch","dynamic-punch","earthquake","encore","endure","facade","fake-out","feint","flatter","fling","focus-blast","focus-punch","foul-play","giga-impact","gunk-shot","helping-hand","hyper-beam","ice-punch","icy-wind","knock-off","lash-out","low-kick","low-sweep","mega-kick","mud-shot","mud-slap","nasty-plot","payback","poison-jab","protect","quick-guard","rain-dance","rest","reversal","rock-slide","rock-tomb","round","scary-face","screech","shadow-ball","shadow-claw","sleep-talk","sludge-bomb","sludge-wave","snore","spite","stone-edge","substitute","sucker-punch","sunny-day","super-fang","swagger","swords-dance","taunt","thief","throat-chop","thunder-punch","toxic","upper-hand","vacuum-wave","venoshock","x-scissor"]
  },
  'watchog': {
    id: 505, name: '步哨鼠', nameEn: 'Watchog',
    pinyin: 'bushaoshu', pinyinAbbr: 'bss',
    types: ["normal"],
    baseStats: { hp: 60, atk: 85, def: 69, spa: 60, spd: 69, spe: 77 },
    abilities: [{"id":"illuminate","name":"发光","nameEn":"Illuminate","isHidden":false},{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"analytic","name":"分析","nameEn":"Analytic","isHidden":true}],
    moves: ["bite","bullet-seed","confuse-ray","crunch","detect","dig","double-team","double-edge","endure","facade","fire-punch","flamethrower","focus-energy","giga-impact","gunk-shot","hyper-beam","hypnosis","ice-punch","iron-tail","leer","light-screen","mud-shot","nasty-plot","power-up-punch","protect","rock-smash","seed-bomb","shadow-ball","skull-bash","substitute","super-fang","swift","swords-dance","tackle","take-down","thunder-punch","thunder-wave","thunderbolt","toxic","work-up","zen-headbutt"]
  },
  'liepard': {
    id: 510, name: '酷豹', nameEn: 'Liepard',
    pinyin: 'kubao', pinyinAbbr: 'kb',
    types: ["dark"],
    baseStats: { hp: 64, atk: 88, def: 50, spa: 88, spd: 50, spe: 106 },
    abilities: [{"id":"limber","name":"柔软","nameEn":"Limber","isHidden":false},{"id":"unburden","name":"轻装","nameEn":"Unburden","isHidden":false},{"id":"prankster","name":"恶作剧之心","nameEn":"Prankster","isHidden":true}],
    moves: ["assurance","attract","baton-pass","bite","burning-jealousy","charm","copycat","covet","crunch","dark-pulse","double-team","encore","endure","facade","fake-out","fake-tears","fire-fang","foul-play","giga-impact","grass-knot","gunk-shot","hyper-beam","hyper-voice","ice-fang","iron-tail","knock-off","lash-out","nasty-plot","night-slash","payback","play-rough","protect","psychic-fangs","psycho-cut","quick-attack","rain-dance","rest","round","screech","seed-bomb","shadow-ball","shadow-claw","skitter-smack","sleep-talk","snarl","snore","substitute","sucker-punch","sunny-day","swagger","taunt","thief","throat-chop","thunder-fang","thunder-wave","torment","trailblaze","trick","u-turn","yawn"]
  },
  'simisage': {
    id: 512, name: '花椰猿', nameEn: 'Simisage',
    pinyin: 'huayeyuan', pinyinAbbr: 'hyy',
    types: ["grass"],
    baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
    abilities: [{"id":"gluttony","name":"贪吃鬼","nameEn":"Gluttony","isHidden":false},{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":true}],
    moves: ["acrobatics","attract","belch","bite","brick-break","bullet-seed","crunch","dig","endure","energy-ball","facade","fake-out","fling","focus-blast","giga-drain","giga-impact","grass-knot","grassy-glide","gunk-shot","helping-hand","hyper-beam","iron-tail","leaf-storm","leech-seed","low-kick","low-sweep","nasty-plot","payback","protect","recycle","rest","rock-slide","rock-tomb","round","seed-bomb","shadow-claw","sleep-talk","snore","solar-beam","solar-blade","stuff-cheeks","substitute","sunny-day","superpower","taunt","thief","throat-chop","torment","trailblaze","uproar"]
  },
  'simisear': {
    id: 514, name: '爆香猿', nameEn: 'Simisear',
    pinyin: 'baoxiangyuan', pinyinAbbr: 'bxy',
    types: ["fire"],
    baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
    abilities: [{"id":"gluttony","name":"贪吃鬼","nameEn":"Gluttony","isHidden":false},{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":true}],
    moves: ["acrobatics","amnesia","attract","belch","bite","blaze-kick","brick-break","burning-jealousy","crunch","dig","endure","facade","fake-out","fire-blast","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","fling","focus-blast","giga-impact","grass-knot","gunk-shot","heat-wave","helping-hand","hyper-beam","iron-tail","low-kick","low-sweep","nasty-plot","overheat","payback","protect","recycle","rest","rock-slide","rock-tomb","round","scorching-sands","shadow-claw","sleep-talk","snore","solar-beam","stuff-cheeks","substitute","sunny-day","superpower","taunt","temper-flare","thief","throat-chop","uproar","will-o-wisp","yawn"]
  },
  'simipour': {
    id: 516, name: '冷水猿', nameEn: 'Simipour',
    pinyin: 'lengshuiyuan', pinyinAbbr: 'lsy',
    types: ["water"],
    baseStats: { hp: 75, atk: 98, def: 63, spa: 98, spd: 63, spe: 101 },
    abilities: [{"id":"gluttony","name":"贪吃鬼","nameEn":"Gluttony","isHidden":false},{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":true}],
    moves: ["acrobatics","aqua-ring","attract","belch","bite","blizzard","brick-break","chilling-water","crunch","dig","dive","endure","facade","fake-out","fling","flip-turn","focus-blast","giga-impact","grass-knot","gunk-shot","helping-hand","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","iron-tail","liquidation","low-kick","low-sweep","nasty-plot","payback","protect","rain-dance","recycle","rest","rock-slide","rock-tomb","round","scald","shadow-claw","sleep-talk","snore","stuff-cheeks","substitute","superpower","surf","taunt","thief","throat-chop","uproar","waterfall"]
  },
  'cofagrigus': {
    id: 563, name: '死神棺', nameEn: 'Cofagrigus',
    pinyin: 'sishenguan', pinyinAbbr: 'ssg',
    types: ["ghost"],
    baseStats: { hp: 58, atk: 50, def: 145, spa: 95, spd: 105, spe: 30 },
    abilities: [{"id":"mummy","name":"木乃伊","nameEn":"Mummy","isHidden":false}],
    moves: ["ally-switch","attract","body-press","calm-mind","confuse-ray","curse","dark-pulse","destiny-bond","disable","endure","energy-ball","facade","fake-tears","giga-drain","giga-impact","grass-knot","guard-split","guard-swap","haze","hex","hyper-beam","imprison","iron-defense","mean-look","memento","nasty-plot","night-shade","payback","phantom-force","poltergeist","power-split","power-swap","protect","psychic","rain-dance","rest","round","safeguard","scary-face","self-destruct","shadow-ball","shadow-claw","shadow-punch","skill-swap","sleep-talk","snore","substitute","thief","toxic-spikes","trick","trick-room","will-o-wisp","wonder-room","zen-headbutt"]
  },
  'reuniclus': {
    id: 579, name: '人造细胞卵', nameEn: 'Reuniclus',
    pinyin: 'renzaoxibaoluan', pinyinAbbr: 'rzxbl',
    types: ["psychic"],
    baseStats: { hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30 },
    abilities: [{"id":"overcoat","name":"防尘","nameEn":"Overcoat","isHidden":false},{"id":"magic-guard","name":"魔法防守","nameEn":"Magic Guard","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":true}],
    moves: ["acid-armor","ally-switch","attract","body-slam","calm-mind","charm","confuse-ray","drain-punch","encore","endeavor","endure","energy-ball","expanding-force","facade","fire-punch","flash-cannon","fling","focus-blast","focus-punch","future-sight","giga-impact","grass-knot","gravity","guard-swap","gyro-ball","hammer-arm","helping-hand","hyper-beam","ice-punch","imprison","iron-defense","knock-off","light-screen","night-shade","pain-split","power-swap","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","rain-dance","recover","reflect","rest","rock-slide","rock-tomb","round","safeguard","shadow-ball","skill-swap","sleep-talk","snore","steel-roller","stored-power","substitute","sunny-day","superpower","thunder","thunder-punch","thunder-wave","trick","trick-room","wonder-room","zen-headbutt"]
  },
  'beartic': {
    id: 614, name: '冻原熊', nameEn: 'Beartic',
    pinyin: 'dongyuanxiong', pinyinAbbr: 'dyx',
    types: ["ice"],
    baseStats: { hp: 95, atk: 130, def: 80, spa: 70, spd: 80, spe: 50 },
    abilities: [{"id":"snow-cloak","name":"雪隐","nameEn":"Snow Cloak","isHidden":false},{"id":"slush-rush","name":"拨雪","nameEn":"Slush Rush","isHidden":false},{"id":"swift-swim","name":"悠游自如","nameEn":"Swift Swim","isHidden":true}],
    moves: ["aerial-ace","aqua-jet","assurance","avalanche","blizzard","body-press","body-slam","brick-break","bulk-up","bulldoze","charm","chilling-water","close-combat","crunch","curse","dig","dive","double-edge","earthquake","encore","endeavor","endure","facade","flail","fling","focus-blast","focus-punch","frost-breath","giga-impact","grass-knot","hard-press","heavy-slam","hyper-beam","ice-beam","ice-fang","ice-punch","icicle-crash","icicle-spear","icy-wind","liquidation","low-kick","mega-kick","mud-shot","mud-slap","night-slash","play-rough","protect","rain-dance","rest","reversal","roar","rock-slide","rock-tomb","round","scary-face","shadow-claw","sheer-cold","sleep-talk","snarl","snore","snowscape","stone-edge","substitute","superpower","surf","swagger","swords-dance","taunt","thief","thrash","throat-chop","trailblaze","water-pulse","x-scissor","yawn"]
  },
  'florges': {
    id: 671, name: '花洁夫人', nameEn: 'Florges',
    pinyin: 'huajiefuren', pinyinAbbr: 'hjfr',
    types: ["fairy"],
    baseStats: { hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75 },
    abilities: [{"id":"flower-veil","name":"花幕","nameEn":"Flower Veil","isHidden":false},{"id":"symbiosis","name":"共生","nameEn":"Symbiosis","isHidden":true}],
    moves: ["alluring-voice","baton-pass","calm-mind","charm","chilling-water","copycat","dazzling-gleam","draining-kiss","endeavor","endure","energy-ball","facade","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","helping-hand","hyper-beam","light-screen","misty-explosion","misty-terrain","moonblast","petal-blizzard","petal-dance","pollen-puff","protect","psychic","psychic-noise","rain-dance","rest","round","safeguard","seed-bomb","skill-swap","sleep-talk","snore","solar-beam","stored-power","substitute","sunny-day","synthesis","tearful-look","trailblaze","trick","wish"]
  },
  'pangoro': {
    id: 675, name: '流氓熊猫', nameEn: 'Pangoro',
    pinyin: 'liumangxiongmao', pinyinAbbr: 'lmxm',
    types: ["fighting","dark"],
    baseStats: { hp: 95, atk: 124, def: 78, spa: 69, spd: 71, spe: 58 },
    abilities: [{"id":"iron-fist","name":"铁拳","nameEn":"Iron Fist","isHidden":false},{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":false},{"id":"scrappy","name":"胆量","nameEn":"Scrappy","isHidden":true}],
    moves: ["attract","beat-up","body-slam","brick-break","brutal-swing","bulk-up","bulldoze","bullet-punch","circle-throw","close-combat","coaching","comeuppance","crunch","dark-pulse","darkest-lariat","detect","dig","dragon-claw","drain-punch","earthquake","endure","entrainment","facade","fire-punch","fling","focus-blast","focus-energy","foul-play","giga-impact","grass-knot","gunk-shot","hammer-arm","headlong-rush","helping-hand","hyper-beam","hyper-voice","ice-punch","iron-head","knock-off","lash-out","low-kick","low-sweep","mega-kick","night-slash","outrage","parting-shot","payback","poison-jab","power-trip","protect","quash","quick-guard","rain-dance","rest","reversal","rock-slide","rock-tomb","round","scary-face","seismic-toss","shadow-claw","sleep-talk","sludge-bomb","snarl","snore","stomping-tantrum","stone-edge","storm-throw","substitute","sunny-day","superpower","surf","swords-dance","taunt","thief","throat-chop","thunder-punch","uproar","x-scissor","zen-headbutt"]
  },
  'aromatisse': {
    id: 683, name: '芳香精', nameEn: 'Aromatisse',
    pinyin: 'fangxiangjing', pinyinAbbr: 'fxj',
    types: ["fairy"],
    baseStats: { hp: 101, atk: 72, def: 72, spa: 99, spd: 89, spe: 29 },
    abilities: [{"id":"healer","name":"治愈之心","nameEn":"Healer","isHidden":false},{"id":"aroma-veil","name":"芳香幕","nameEn":"Aroma Veil","isHidden":true}],
    moves: ["after-you","alluring-voice","ally-switch","aromatic-mist","attract","calm-mind","charm","dazzling-gleam","disable","drain-punch","draining-kiss","encore","endure","energy-ball","facade","fake-tears","flail","flash-cannon","giga-impact","gyro-ball","heal-pulse","helping-hand","hyper-beam","hypnosis","light-screen","misty-explosion","misty-terrain","moonblast","nasty-plot","protect","psych-up","psychic","psyshock","rain-dance","reflect","rest","round","skill-swap","sleep-talk","snore","substitute","sunny-day","sweet-kiss","sweet-scent","thunder","thunderbolt","trick-room","wish"]
  },
  'slurpuff': {
    id: 685, name: '胖甜妮', nameEn: 'Slurpuff',
    pinyin: 'pangtianni', pinyinAbbr: 'ptn',
    types: ["fairy"],
    baseStats: { hp: 82, atk: 80, def: 86, spa: 85, spd: 75, spe: 72 },
    abilities: [{"id":"sweet-veil","name":"甜幕","nameEn":"Sweet Veil","isHidden":false},{"id":"unburden","name":"轻装","nameEn":"Unburden","isHidden":true}],
    moves: ["after-you","amnesia","attract","calm-mind","charm","copycat","cotton-guard","cotton-spore","dazzling-gleam","drain-punch","draining-kiss","endeavor","endure","energy-ball","facade","fake-tears","flamethrower","giga-impact","helping-hand","hyper-beam","light-screen","misty-explosion","play-rough","protect","psychic","rain-dance","rest","round","safeguard","sleep-talk","snore","sticky-web","string-shot","substitute","sunny-day","surf","sweet-scent","thief","thunder","thunderbolt","wish","yawn"]
  },
  'heliolisk': {
    id: 695, name: '光电伞蜥', nameEn: 'Heliolisk',
    pinyin: 'guangdiansanxi', pinyinAbbr: 'gdsx',
    types: ["electric","normal"],
    baseStats: { hp: 62, atk: 55, def: 52, spa: 109, spd: 94, spe: 109 },
    abilities: [{"id":"dry-skin","name":"干燥皮肤","nameEn":"Dry Skin","isHidden":false},{"id":"sand-veil","name":"沙隐","nameEn":"Sand Veil","isHidden":false},{"id":"solar-power","name":"太阳之力","nameEn":"Solar Power","isHidden":true}],
    moves: ["agility","ally-switch","attract","breaking-swipe","brutal-swing","bulldoze","charge","charge-beam","dark-pulse","dig","discharge","dragon-pulse","dragon-rush","dragon-tail","eerie-impulse","electric-terrain","electrify","electro-ball","electroweb","endure","facade","fire-punch","focus-blast","giga-impact","glare","grass-knot","hyper-beam","hyper-voice","iron-tail","light-screen","low-kick","low-sweep","mega-kick","morning-sun","mud-slap","parabolic-charge","pounce","protect","quick-attack","rain-dance","rest","rising-voltage","rock-slide","rock-tomb","round","sandstorm","scale-shot","shed-tail","sleep-talk","snore","solar-beam","substitute","sunny-day","surf","thunder","thunder-punch","thunder-wave","thunderbolt","trailblaze","u-turn","volt-switch","weather-ball","wild-charge"]
  },
  'dedenne': {
    id: 702, name: '咚咚鼠', nameEn: 'Dedenne',
    pinyin: 'dongdongshu', pinyinAbbr: 'dds',
    types: ["electric","fairy"],
    baseStats: { hp: 67, atk: 58, def: 57, spa: 81, spd: 67, spe: 101 },
    abilities: [{"id":"cheek-pouch","name":"颊囊","nameEn":"Cheek Pouch","isHidden":false},{"id":"pickup","name":"捡拾","nameEn":"Pickup","isHidden":false},{"id":"plus","name":"正电","nameEn":"Plus","isHidden":true}],
    moves: ["agility","charge","charge-beam","charm","covet","dazzling-gleam","dig","discharge","draining-kiss","eerie-impulse","electric-terrain","electro-ball","electroweb","endeavor","endure","entrainment","facade","fling","giga-impact","grass-knot","helping-hand","hyper-beam","iron-tail","light-screen","magnet-rise","misty-terrain","nuzzle","parabolic-charge","play-rough","protect","rain-dance","rest","rising-voltage","round","seed-bomb","sleep-talk","snore","substitute","sunny-day","super-fang","tearful-look","thief","thunder","thunder-punch","thunder-wave","thunderbolt","trailblaze","u-turn","volt-switch","wild-charge"]
  },
  'avalugg': {
    id: 713, name: '冰岩怪', nameEn: 'Avalugg',
    pinyin: 'bingyanguai', pinyinAbbr: 'byg',
    types: ["ice"],
    baseStats: { hp: 95, atk: 117, def: 184, spa: 44, spd: 46, spe: 28 },
    abilities: [{"id":"own-tempo","name":"我行我素","nameEn":"Own Tempo","isHidden":false},{"id":"ice-body","name":"冰冻之躯","nameEn":"Ice Body","isHidden":false},{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":true}],
    moves: ["aurora-veil","avalanche","bite","blizzard","body-press","body-slam","bulldoze","chilling-water","crunch","curse","double-edge","earthquake","endure","facade","flash-cannon","frost-breath","giga-impact","gyro-ball","heavy-slam","high-horsepower","hydro-pump","hyper-beam","ice-beam","ice-fang","ice-spinner","icicle-crash","icicle-spear","icy-wind","iron-defense","iron-head","mirror-coat","protect","rain-dance","rapid-spin","recover","rest","rock-slide","rock-tomb","round","scary-face","sleep-talk","snore","snowscape","stomping-tantrum","stone-edge","substitute","superpower","surf","wide-guard"]
  },
  'hisuian-avalugg': {
    id: 713, name: '冰岩怪-洗翠', nameEn: 'Hisuian Avalugg',
    pinyin: 'bingyanguai-xicui', pinyinAbbr: 'byg-xc',
    types: ["ice","rock"],
    baseStats: { hp: 95, atk: 127, def: 184, spa: 34, spd: 36, spe: 38 },
    abilities: [{"id":"strong-jaw","name":"强壮之颚","nameEn":"Strong Jaw","isHidden":false},{"id":"ice-body","name":"冰冻之躯","nameEn":"Ice Body","isHidden":false},{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":true}],
    moves: ["avalanche","blizzard","body-press","body-slam","bulldoze","crunch","curse","double-edge","earthquake","endure","facade","flash-cannon","giga-impact","head-smash","heavy-slam","high-horsepower","hyper-beam","ice-beam","ice-fang","ice-spinner","icicle-crash","icy-wind","iron-defense","iron-head","mountain-gale","power-gem","protect","rest","rock-blast","rock-slide","rock-tomb","sandstorm","scary-face","sleep-talk","snowscape","stealth-rock","stone-edge","substitute","superpower","wide-guard"]
  },
  'salazzle': {
    id: 758, name: '焰后蜥', nameEn: 'Salazzle',
    pinyin: 'yanhouxi', pinyinAbbr: 'yhx',
    types: ["poison","fire"],
    baseStats: { hp: 68, atk: 64, def: 60, spa: 111, spd: 60, spe: 117 },
    abilities: [{"id":"corrosion","name":"腐蚀","nameEn":"Corrosion","isHidden":false},{"id":"oblivious","name":"迟钝","nameEn":"Oblivious","isHidden":true}],
    moves: ["acid-spray","acrobatics","agility","beat-up","belch","body-slam","breaking-swipe","burning-jealousy","corrosive-gas","cross-poison","disable","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-tail","encore","endeavor","endure","facade","fake-out","fake-tears","fire-blast","fire-fang","fire-lash","flame-charge","flamethrower","flare-blitz","fling","foul-play","giga-impact","gunk-shot","heat-wave","helping-hand","hyper-beam","hyper-voice","iron-tail","knock-off","leech-life","mud-slap","nasty-plot","overheat","payback","poison-fang","poison-jab","protect","rest","round","scale-shot","scary-face","shadow-claw","skitter-smack","sleep-talk","sludge-bomb","sludge-wave","snore","substitute","sunny-day","swagger","sweet-scent","taunt","temper-flare","thief","thunder-wave","torment","toxic","toxic-spikes","trailblaze","venoshock","will-o-wisp"]
  },
  'passimian': {
    id: 766, name: '投掷猴', nameEn: 'Passimian',
    pinyin: 'touzhihou', pinyinAbbr: 'tzh',
    types: ["fighting"],
    baseStats: { hp: 100, atk: 120, def: 90, spa: 40, spd: 60, spe: 80 },
    abilities: [{"id":"receiver","name":"接球手","nameEn":"Receiver","isHidden":false},{"id":"defiant","name":"不服输","nameEn":"Defiant","isHidden":true}],
    moves: ["acrobatics","assurance","baton-pass","beat-up","body-slam","brick-break","brutal-swing","bulk-up","bulldoze","chilling-water","close-combat","coaching","counter","curse","double-edge","drain-punch","earthquake","electroweb","endure","energy-ball","facade","feint","fling","focus-blast","focus-energy","focus-punch","giga-impact","grass-knot","gunk-shot","gyro-ball","hyper-beam","iron-head","iron-tail","knock-off","low-kick","low-sweep","mega-kick","pain-split","payback","protect","quick-attack","quick-guard","rain-dance","rest","reversal","rock-slide","rock-tomb","round","scary-face","seed-bomb","seismic-toss","shadow-ball","sleep-talk","smack-down","snore","substitute","sunny-day","superpower","taunt","thief","thrash","trailblaze","u-turn","upper-hand","uproar","vacuum-wave"]
  },
  'flapple': {
    id: 841, name: '苹裹龙', nameEn: 'Flapple',
    pinyin: 'pingguolong', pinyinAbbr: 'pgl',
    types: ["grass","dragon"],
    baseStats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
    abilities: [{"id":"ripen","name":"熟成","nameEn":"Ripen","isHidden":false},{"id":"gluttony","name":"贪吃鬼","nameEn":"Gluttony","isHidden":false},{"id":"hustle","name":"活力","nameEn":"Hustle","isHidden":true}],
    moves: ["acid-spray","acrobatics","aerial-ace","air-slash","bullet-seed","draco-meteor","dragon-dance","dragon-pulse","dragon-rush","dual-wingbeat","endeavor","endure","energy-ball","facade","fly","focus-energy","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","grav-apple","growth","heavy-slam","hyper-beam","iron-defense","leaf-storm","leech-seed","outrage","pounce","protect","recycle","rest","round","scary-face","seed-bomb","sleep-talk","snore","solar-beam","substitute","sucker-punch","sunny-day","trailblaze","u-turn"]
  },
  'wyrdeer': {
    id: 899, name: '诡角鹿', nameEn: 'Wyrdeer',
    pinyin: 'guijiaolu', pinyinAbbr: 'gjl',
    types: ["normal","psychic"],
    baseStats: { hp: 103, atk: 105, def: 72, spa: 105, spd: 75, spe: 65 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":false},{"id":"sap-sipper","name":"食草","nameEn":"Sap Sipper","isHidden":true}],
    moves: ["agility","bite","body-slam","bulldoze","calm-mind","charge-beam","confuse-ray","curse","dig","disable","double-edge","earth-power","earthquake","endure","energy-ball","expanding-force","extrasensory","facade","future-sight","giga-impact","gravity","helping-hand","high-horsepower","hyper-beam","hypnosis","imprison","light-screen","lunge","megahorn","protect","psych-up","psychic","psychic-noise","psyshield-bash","psyshock","rain-dance","reflect","rest","roar","role-play","scary-face","shadow-ball","skill-swap","sleep-talk","solar-beam","spite","stored-power","substitute","sunny-day","thief","thrash","throat-chop","thunder","thunder-wave","thunderbolt","trailblaze","trick","trick-room","uproar","wild-charge","zen-headbutt"]
  },
  'bellibolt': {
    id: 939, name: '电肚蛙', nameEn: 'Bellibolt',
    pinyin: 'dianduwa', pinyinAbbr: 'ddw',
    types: ["electric"],
    baseStats: { hp: 109, atk: 64, def: 91, spa: 103, spd: 83, spe: 45 },
    abilities: [{"id":"electromorphosis","name":"电力转换","nameEn":"Electromorphosis","isHidden":false},{"id":"static","name":"静电","nameEn":"Static","isHidden":false},{"id":"damp","name":"湿气","nameEn":"Damp","isHidden":true}],
    moves: ["acid-spray","charge","charge-beam","chilling-water","confuse-ray","discharge","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","flail","giga-impact","hyper-beam","hyper-voice","light-screen","mud-shot","mud-slap","muddy-water","parabolic-charge","protect","rain-dance","reflect","rest","slack-off","sleep-talk","soak","substitute","sucker-punch","supercell-slam","thunder","thunder-wave","thunderbolt","toxic","volt-switch","water-pulse","weather-ball","wild-charge","zap-cannon"]
  },
  'espathra': {
    id: 956, name: '超能艳鸵', nameEn: 'Espathra',
    pinyin: 'chaonengyantuo', pinyinAbbr: 'cnyt',
    types: ["psychic"],
    baseStats: { hp: 95, atk: 60, def: 60, spa: 101, spd: 60, spe: 105 },
    abilities: [{"id":"opportunist","name":"跟风","nameEn":"Opportunist","isHidden":false},{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":false},{"id":"speed-boost","name":"加速","nameEn":"Speed Boost","isHidden":true}],
    moves: ["aerial-ace","agility","ally-switch","baby-doll-eyes","baton-pass","body-slam","brave-bird","calm-mind","confuse-ray","dazzling-gleam","double-edge","drill-peck","endure","energy-ball","expanding-force","facade","feather-dance","flash-cannon","foul-play","giga-impact","helping-hand","hex","hyper-beam","hyper-voice","hypnosis","last-resort","light-screen","low-kick","lumina-crash","mud-slap","night-shade","pluck","pounce","protect","psych-up","psychic","psychic-terrain","psyshock","quick-attack","rain-dance","reflect","rest","roost","sandstorm","seed-bomb","shadow-ball","skill-swap","sleep-talk","stored-power","substitute","sunny-day","thief","trick","trick-room","u-turn","uproar","zen-headbutt"]
  },
  'alolan-raichu': {
    id: 26, name: '雷丘-阿罗拉', nameEn: 'Alolan Raichu',
    pinyin: 'leiqiu-aluola', pinyinAbbr: 'lq-all',
    types: ["electric","psychic"],
    baseStats: { hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110 },
    abilities: [{"id":"surge-surfer","name":"冲浪之尾","nameEn":"Surge Surfer","isHidden":false}],
    moves: ["agility","alluring-voice","body-slam","brick-break","calm-mind","charge","charge-beam","charm","dazzling-gleam","dig","discharge","double-team","draining-kiss","eerie-impulse","electric-terrain","electro-ball","electroweb","encore","endeavor","endure","expanding-force","facade","fake-out","fake-tears","feint","flail","fling","focus-blast","focus-punch","giga-impact","grass-knot","helping-hand","hyper-beam","iron-tail","knock-off","light-screen","magic-room","mega-kick","nasty-plot","nuzzle","play-rough","protect","psychic","psychic-noise","psyshock","quick-attack","rain-dance","reflect","rest","reversal","rising-voltage","round","skill-swap","sleep-talk","snore","speed-swap","stored-power","substitute","surf","sweet-kiss","thief","thunder","thunder-punch","thunder-wave","thunderbolt","tickle","trailblaze","upper-hand","volt-switch","volt-tackle","wild-charge","wish","zap-cannon"]
  },
  'clefable': {
    id: 36, name: '皮可西', nameEn: 'Clefable',
    pinyin: 'pikexi', pinyinAbbr: 'pkx',
    types: ["fairy"],
    baseStats: { hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60 },
    abilities: [{"id":"cute-charm","name":"迷人之躯","nameEn":"Cute Charm","isHidden":false},{"id":"magic-guard","name":"魔法防守","nameEn":"Magic Guard","isHidden":false},{"id":"unaware","name":"纯朴","nameEn":"Unaware","isHidden":true}],
    forms: {"mega":{"name":"Mega Clefable","nameEn":"Mega Clefable","types":["fairy","flying"],"baseStats":{"hp":95,"atk":80,"def":93,"spa":135,"spd":110,"spe":70},"ability":{"id":"magic-bounce","name":"魔法镜","nameEn":"Magic Bounce"}}},
    moves: ["after-you","air-slash","alluring-voice","amnesia","baton-pass","blizzard","body-slam","bounce","brick-break","calm-mind","charge-beam","charm","chilling-water","copycat","cosmic-power","dazzling-gleam","dig","double-edge","drain-punch","draining-kiss","dual-wingbeat","encore","endeavor","endure","facade","fake-tears","fire-blast","fire-punch","flamethrower","fling","focus-blast","focus-punch","follow-me","future-sight","giga-impact","grass-knot","gravity","heal-pulse","helping-hand","hyper-beam","hyper-voice","ice-beam","ice-punch","icy-wind","imprison","knock-off","life-dew","light-screen","meteor-beam","meteor-mash","misty-explosion","misty-terrain","moonblast","moonlight","mystical-fire","night-shade","play-rough","protect","psych-up","psychic","psyshock","rain-dance","reflect","rest","round","safeguard","shadow-ball","sing","skill-swap","sleep-talk","snore","solar-beam","stealth-rock","stored-power","substitute","sunny-day","sweet-kiss","thief","thunder","thunder-punch","thunder-wave","thunderbolt","tickle","tri-attack","trick","uproar","water-pulse","wish","wonder-room","zen-headbutt"]
  },
  'ninetales': {
    id: 38, name: '九尾', nameEn: 'Ninetales',
    pinyin: 'jiuwei', pinyinAbbr: 'jw',
    types: ["fire"],
    baseStats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
    abilities: [{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"drought","name":"日照","nameEn":"Drought","isHidden":true}],
    moves: ["agility","attract","baby-doll-eyes","baton-pass","body-slam","burning-jealousy","calm-mind","charm","confuse-ray","dark-pulse","dig","disable","double-edge","encore","endure","energy-ball","extrasensory","facade","fake-tears","fire-blast","fire-spin","flail","flame-charge","flamethrower","flare-blitz","foul-play","giga-impact","healing-wish","heat-wave","helping-hand","hex","howl","hyper-beam","hypnosis","imprison","inferno","iron-tail","memento","mystical-fire","nasty-plot","night-shade","overheat","pain-split","payback","power-swap","protect","psych-up","psyshock","quick-attack","rest","roar","round","safeguard","scorching-sands","shadow-ball","sleep-talk","snarl","snore","solar-beam","spite","stored-power","substitute","sunny-day","tail-slap","weather-ball","will-o-wisp","zen-headbutt"]
  },
  'alolan-ninetales': {
    id: 38, name: '九尾-阿罗拉', nameEn: 'Alolan Ninetales',
    pinyin: 'jiuwei-aluola', pinyinAbbr: 'jw-all',
    types: ["ice","fairy"],
    baseStats: { hp: 73, atk: 67, def: 75, spa: 81, spd: 100, spe: 109 },
    abilities: [{"id":"snow-warning","name":"降雪","nameEn":"Snow Warning","isHidden":false},{"id":"snow-cloak","name":"雪隐","nameEn":"Snow Cloak","isHidden":true}],
    moves: ["agility","attract","aurora-veil","avalanche","baby-doll-eyes","baton-pass","blizzard","body-slam","calm-mind","charm","chilling-water","confuse-ray","dark-pulse","dazzling-gleam","dig","disable","double-edge","draining-kiss","encore","endure","extrasensory","facade","fake-tears","flail","foul-play","freeze-dry","giga-impact","helping-hand","hex","howl","hyper-beam","hypnosis","ice-beam","ice-shard","icicle-spear","icy-wind","imprison","iron-tail","misty-terrain","moonblast","nasty-plot","pain-split","payback","play-rough","power-swap","protect","psych-up","psyshock","rain-dance","rest","roar","round","safeguard","sleep-talk","snore","snowscape","spite","stored-power","substitute","tail-slap","triple-axel","weather-ball","wonder-room","zen-headbutt"]
  },
  'arcanine': {
    id: 59, name: '风速狗', nameEn: 'Arcanine',
    pinyin: 'fengsugou', pinyinAbbr: 'fsg',
    types: ["fire"],
    baseStats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"justified","name":"正义之心","nameEn":"Justified","isHidden":true}],
    moves: ["aerial-ace","agility","bite","body-slam","bulldoze","burn-up","charm","close-combat","covet","crunch","curse","dig","double-edge","dragon-pulse","endure","extreme-speed","facade","fire-blast","fire-fang","fire-spin","flame-charge","flamethrower","flare-blitz","giga-impact","heat-crash","heat-wave","helping-hand","howl","hyper-beam","hyper-voice","iron-head","iron-tail","morning-sun","outrage","overheat","play-rough","protect","psychic-fangs","raging-fury","rest","reversal","roar","round","scary-face","scorching-sands","sleep-talk","snarl","snore","solar-beam","substitute","sunny-day","temper-flare","thief","thrash","thunder-fang","wild-charge","will-o-wisp"]
  },
  'hisuian-arcanine': {
    id: 59, name: '风速狗-洗翠', nameEn: 'Hisuian Arcanine',
    pinyin: 'fengsugou-xicui', pinyinAbbr: 'fsg-xc',
    types: ["fire","rock"],
    baseStats: { hp: 95, atk: 115, def: 80, spa: 95, spd: 80, spe: 90 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"rock-head","name":"坚硬脑袋","nameEn":"Rock Head","isHidden":true}],
    moves: ["aerial-ace","agility","bite","body-slam","bulldoze","burn-up","close-combat","covet","crunch","dig","double-edge","dragon-pulse","endure","extreme-speed","facade","fire-blast","fire-fang","fire-spin","flame-charge","flamethrower","flare-blitz","giga-impact","head-smash","heat-crash","heat-wave","helping-hand","howl","hyper-beam","hyper-voice","iron-head","iron-tail","morning-sun","outrage","overheat","power-gem","protect","psychic-fangs","raging-fury","rest","reversal","roar","rock-blast","rock-slide","rock-tomb","round","sandstorm","scary-face","scorching-sands","sleep-talk","smack-down","smart-strike","snarl","snore","solar-beam","stealth-rock","stone-edge","substitute","sunny-day","temper-flare","thief","thrash","thunder-fang","wild-charge","will-o-wisp"]
  },
  'alakazam': {
    id: 65, name: '胡地', nameEn: 'Alakazam',
    pinyin: 'hudi', pinyinAbbr: 'hd',
    types: ["psychic"],
    baseStats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
    abilities: [{"id":"synchronize","name":"同步","nameEn":"Synchronize","isHidden":false},{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":false},{"id":"magic-guard","name":"魔法防守","nameEn":"Magic Guard","isHidden":true}],
    forms: {"mega":{"name":"胡地-超级进化","nameEn":"Mega Alakazam","types":["psychic"],"baseStats":{"hp":55,"atk":50,"def":65,"spa":175,"spd":105,"spe":150},"ability":{"id":"trace","name":"复制","nameEn":"Trace"}}},
    moves: ["ally-switch","attract","body-slam","calm-mind","dazzling-gleam","disable","double-team","drain-punch","encore","endure","energy-ball","expanding-force","facade","fire-punch","fling","focus-blast","foul-play","future-sight","giga-impact","grass-knot","guard-split","guard-swap","hyper-beam","ice-punch","imprison","iron-tail","light-screen","magic-room","mega-kick","nasty-plot","power-swap","protect","psychic","psychic-terrain","psycho-cut","psyshock","rain-dance","recover","reflect","rest","role-play","round","safeguard","shadow-ball","skill-swap","sleep-talk","snore","speed-swap","stored-power","substitute","sunny-day","taunt","thief","thunder-punch","thunder-wave","tri-attack","trick","trick-room","wonder-room","zen-headbutt"]
  },
  'victreebel': {
    id: 71, name: '大食花', nameEn: 'Victreebel',
    pinyin: 'dashihua', pinyinAbbr: 'dsh',
    types: ["grass","poison"],
    baseStats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70 },
    abilities: [{"id":"chlorophyll","name":"叶绿素","nameEn":"Chlorophyll","isHidden":false},{"id":"gluttony","name":"贪吃鬼","nameEn":"Gluttony","isHidden":true}],
    forms: {"mega":{"name":"Mega Victreebel","nameEn":"Mega Victreebel","types":["grass","poison"],"baseStats":{"hp":80,"atk":125,"def":85,"spa":135,"spd":95,"spe":70},"ability":{"id":"innards-out","name":"飞出的内在物","nameEn":"Innards Out"}}},
    moves: ["acid-spray","body-slam","bug-bite","bullet-seed","clear-smog","encore","endure","energy-ball","gastro-acid","giga-drain","giga-impact","grass-knot","grassy-glide","growth","hyper-beam","ingrain","knock-off","leaf-blade","leaf-storm","leech-life","lunge","poison-jab","poison-powder","pounce","power-whip","protect","reflect","rest","round","scary-face","seed-bomb","sleep-powder","sleep-talk","sludge-bomb","sludge-wave","snore","solar-beam","spit-up","stockpile","strength-sap","stun-spore","substitute","sucker-punch","sunny-day","swallow","sweet-scent","swords-dance","synthesis","thief","tickle","toxic","toxic-spikes","trailblaze","venoshock","weather-ball","worry-seed","wrap"]
  },
  'slowbro': {
    id: 80, name: '呆壳兽', nameEn: 'Slowbro',
    pinyin: 'daikeshou', pinyinAbbr: 'dks',
    types: ["water","psychic"],
    baseStats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
    abilities: [{"id":"oblivious","name":"迟钝","nameEn":"Oblivious","isHidden":false},{"id":"own-tempo","name":"我行我素","nameEn":"Own Tempo","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":true}],
    forms: {"mega":{"name":"呆壳兽-超级进化","nameEn":"Mega Slowbro","types":["water","psychic"],"baseStats":{"hp":95,"atk":75,"def":180,"spa":130,"spd":80,"spe":30},"ability":{"id":"shell-armor","name":"硬壳盔甲","nameEn":"Shell Armor"}}},
    moves: ["amnesia","avalanche","belch","belly-drum","blizzard","block","body-press","body-slam","brick-break","bulldoze","calm-mind","chilling-water","curse","dig","disable","dive","drain-punch","earthquake","endure","expanding-force","facade","fire-blast","flamethrower","fling","focus-blast","focus-punch","foul-play","future-sight","giga-impact","grass-knot","heal-pulse","helping-hand","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","imprison","iron-defense","iron-tail","light-screen","liquidation","mud-shot","muddy-water","nasty-plot","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","rain-dance","razor-shell","rest","round","safeguard","scald","shadow-ball","skill-swap","slack-off","sleep-talk","snore","snowscape","stored-power","substitute","sunny-day","surf","thunder-wave","tri-attack","trick","trick-room","water-pulse","waterfall","weather-ball","whirlpool","wonder-room","yawn","zen-headbutt"]
  },
  'galarian-slowbro': {
    id: 80, name: '伽勒尔呆壳兽', nameEn: 'Galarian Slowbro',
    pinyin: 'jialeerdaikeshou', pinyinAbbr: 'jledks',
    types: ["poison","psychic"],
    baseStats: { hp: 95, atk: 100, def: 95, spa: 100, spd: 70, spe: 30 },
    abilities: [{"id":"quick-draw","name":"速击","nameEn":"Quick Draw","isHidden":false},{"id":"own-tempo","name":"我行我素","nameEn":"Own Tempo","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":true}],
    moves: ["acid-spray","amnesia","avalanche","belch","belly-drum","blizzard","block","body-press","body-slam","brick-break","bulldoze","calm-mind","chilling-water","curse","dig","disable","dive","double-edge","drain-punch","earthquake","endure","expanding-force","facade","fire-blast","flamethrower","fling","focus-blast","foul-play","future-sight","giga-impact","grass-knot","gunk-shot","haze","heal-pulse","helping-hand","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","imprison","iron-defense","iron-tail","light-screen","liquidation","mud-shot","muddy-water","nasty-plot","poison-jab","power-gem","protect","psychic","psychic-terrain","psyshock","rain-dance","razor-shell","rest","rock-blast","round","safeguard","sandstorm","scary-face","shadow-ball","shell-side-arm","skill-swap","slack-off","sleep-talk","sludge-bomb","sludge-wave","smack-down","snore","snowscape","stored-power","substitute","sunny-day","surf","thunder-wave","toxic","toxic-spikes","tri-attack","trick","trick-room","venoshock","water-pulse","waterfall","weather-ball","whirlpool","wonder-room","yawn","zen-headbutt"]
  },
  'gengar': {
    id: 94, name: '耿鬼', nameEn: 'Gengar',
    pinyin: 'genggui', pinyinAbbr: 'gg',
    types: ["ghost","poison"],
    baseStats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    abilities: [{"id":"cursed-body","name":"诅咒之躯","nameEn":"Cursed Body","isHidden":false}],
    forms: {"mega":{"name":"耿鬼-超级进化","nameEn":"Mega Gengar","types":["ghost","poison"],"baseStats":{"hp":60,"atk":65,"def":80,"spa":170,"spd":95,"spe":130},"ability":{"id":"shadow-tag","name":"踩影","nameEn":"Shadow Tag"}}},
    moves: ["acid-spray","body-slam","brick-break","clear-smog","confuse-ray","corrosive-gas","curse","dark-pulse","dazzling-gleam","destiny-bond","disable","drain-punch","endure","energy-ball","facade","fire-punch","fling","focus-blast","focus-punch","foul-play","giga-drain","giga-impact","gunk-shot","haze","hex","hyper-beam","hypnosis","ice-punch","icy-wind","imprison","knock-off","mean-look","nasty-plot","night-shade","pain-split","payback","perish-song","phantom-force","poison-jab","poltergeist","protect","psych-up","psychic","psychic-noise","rain-dance","reflect-type","rest","round","scary-face","self-destruct","shadow-ball","shadow-claw","shadow-punch","skill-swap","skitter-smack","sleep-talk","sludge-bomb","sludge-wave","snore","spite","substitute","sucker-punch","sunny-day","taunt","thief","thunder","thunder-punch","thunder-wave","thunderbolt","toxic","toxic-spikes","trick","trick-room","venoshock","will-o-wisp","wonder-room"]
  },
  'kangaskhan': {
    id: 115, name: '袋兽', nameEn: 'Kangaskhan',
    pinyin: 'daishou', pinyinAbbr: 'ds',
    types: ["normal"],
    baseStats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
    abilities: [{"id":"early-bird","name":"早起","nameEn":"Early Bird","isHidden":false},{"id":"scrappy","name":"胆量","nameEn":"Scrappy","isHidden":false},{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":true}],
    forms: {"mega":{"name":"袋兽-超级进化","nameEn":"Mega Kangaskhan","types":["normal"],"baseStats":{"hp":105,"atk":125,"def":100,"spa":60,"spd":100,"spe":100},"ability":{"id":"parental-bond","name":"亲子爱","nameEn":"Parental Bond"}}},
    moves: ["assurance","attract","avalanche","beat-up","bite","blizzard","body-slam","brick-break","bulldoze","circle-throw","counter","crunch","dig","disable","double-hit","double-edge","drain-punch","dynamic-punch","earthquake","endeavor","endure","facade","fake-out","fire-blast","fire-punch","flamethrower","fling","focus-blast","focus-energy","giga-impact","hammer-arm","helping-hand","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","iron-tail","last-resort","low-kick","mega-kick","outrage","protect","rain-dance","rest","reversal","rock-slide","rock-tomb","round","safeguard","sandstorm","shadow-ball","shadow-claw","sleep-talk","snore","solar-beam","substitute","sucker-punch","sunny-day","surf","terrain-pulse","thief","thunder","thunder-punch","thunderbolt","uproar","whirlpool"]
  },
  'starmie': {
    id: 121, name: '宝石海星', nameEn: 'Starmie',
    pinyin: 'baoshihaixing', pinyinAbbr: 'bshx',
    types: ["water","psychic"],
    baseStats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
    abilities: [{"id":"illuminate","name":"发光","nameEn":"Illuminate","isHidden":false},{"id":"natural-cure","name":"自然回复","nameEn":"Natural Cure","isHidden":false},{"id":"analytic","name":"分析","nameEn":"Analytic","isHidden":true}],
    forms: {"mega":{"name":"Mega Starmie","nameEn":"Mega Starmie","types":["water","psychic"],"baseStats":{"hp":60,"atk":115,"def":95,"spa":130,"spd":100,"spe":120},"ability":{"id":"huge-power","name":"大力士","nameEn":"Huge Power"}}},
    moves: ["agility","ally-switch","ancient-power","aqua-jet","avalanche","blizzard","bulk-up","charge-beam","chilling-water","confuse-ray","cosmic-power","dazzling-gleam","dive","double-edge","endure","expanding-force","facade","flash-cannon","flip-turn","giga-impact","grass-knot","gravity","gyro-ball","hydro-pump","hyper-beam","ice-beam","ice-spinner","icy-wind","light-screen","liquidation","meteor-beam","minimize","power-gem","protect","psychic","psycho-cut","psyshock","rain-dance","rapid-spin","recover","reflect","rest","round","safeguard","scald","self-destruct","skill-swap","sleep-talk","snore","substitute","surf","thunder","thunder-wave","thunderbolt","tri-attack","trick","trick-room","water-pulse","waterfall","whirlpool","wonder-room","zen-headbutt"]
  },
  'pinsir': {
    id: 127, name: '凯罗斯', nameEn: 'Pinsir',
    pinyin: 'kailuosi', pinyinAbbr: 'kls',
    types: ["bug"],
    baseStats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
    abilities: [{"id":"hyper-cutter","name":"怪力钳","nameEn":"Hyper Cutter","isHidden":false},{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":false},{"id":"moxie","name":"自信过度","nameEn":"Moxie","isHidden":true}],
    forms: {"mega":{"name":"凯罗斯-超级进化","nameEn":"Mega Pinsir","types":["bug","flying"],"baseStats":{"hp":65,"atk":155,"def":120,"spa":65,"spd":90,"spe":105},"ability":{"id":"aerilate","name":"飞行皮肤","nameEn":"Aerilate"}}},
    moves: ["aerial-ace","attract","bind","body-slam","brick-break","brutal-swing","bug-bite","bulk-up","bulldoze","circle-throw","close-combat","detect","dig","double-hit","earthquake","endure","facade","feint","flail","fling","focus-blast","focus-energy","giga-impact","guillotine","hard-press","helping-hand","high-horsepower","hyper-beam","iron-defense","lunge","pounce","protect","quick-attack","rain-dance","rest","reversal","rock-slide","rock-tomb","round","seismic-toss","sleep-talk","snore","stone-edge","storm-throw","substitute","sunny-day","superpower","swords-dance","thief","thrash","throat-chop","x-scissor"]
  },
  'tauros': {
    id: 128, name: '肯泰罗', nameEn: 'Tauros',
    pinyin: 'kentailuo', pinyinAbbr: 'ktl',
    types: ["normal"],
    baseStats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"anger-point","name":"愤怒穴位","nameEn":"Anger Point","isHidden":false},{"id":"sheer-force","name":"强行","nameEn":"Sheer Force","isHidden":true}],
    moves: ["assurance","blizzard","body-slam","bulldoze","close-combat","curse","dig","double-edge","earthquake","endeavor","endure","facade","fire-blast","flamethrower","giga-impact","helping-hand","high-horsepower","hyper-beam","ice-beam","icy-wind","iron-head","iron-tail","lash-out","megahorn","outrage","payback","protect","raging-bull","rain-dance","rest","reversal","rock-slide","rock-tomb","round","sandstorm","scary-face","shadow-ball","sleep-talk","smart-strike","snore","solar-beam","stomping-tantrum","stone-edge","substitute","sunny-day","surf","swagger","thief","thrash","throat-chop","thunder","thunderbolt","trailblaze","uproar","whirlpool","wild-charge","zen-headbutt"]
  },
  'paldean-tauros': {
    id: 128, name: '肯泰罗-帕底亚-斗战种', nameEn: 'Paldean Tauros',
    pinyin: 'kentailuo-padiya-douzhanzhong', pinyinAbbr: 'ktl-pdy-dzz',
    types: ["fighting"],
    baseStats: { hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"anger-point","name":"愤怒穴位","nameEn":"Anger Point","isHidden":false},{"id":"cud-chew","name":"反刍","nameEn":"Cud Chew","isHidden":true}],
    moves: ["assurance","body-press","body-slam","bulk-up","bulldoze","close-combat","curse","dig","double-kick","double-edge","drill-run","earthquake","endeavor","endure","facade","fire-blast","flamethrower","giga-impact","headbutt","high-horsepower","hyper-beam","iron-head","lash-out","outrage","protect","raging-bull","rain-dance","rest","reversal","rock-slide","rock-tomb","sandstorm","scary-face","sleep-talk","smart-strike","stomping-tantrum","stone-edge","substitute","sunny-day","surf","swagger","take-down","thief","thrash","throat-chop","trailblaze","wild-charge","work-up","zen-headbutt"]
  },
  'paldean-tauros-blaze': {
    id: 128, name: '肯泰罗-帕底亚-火炽种', nameEn: 'Paldean Tauros (Blaze)',
    pinyin: 'kentailuo-padiya-huochizhong', pinyinAbbr: 'ktl-pdy-hcz',
    types: ["fighting","fire"],
    baseStats: { hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"anger-point","name":"愤怒穴位","nameEn":"Anger Point","isHidden":false},{"id":"cud-chew","name":"反刍","nameEn":"Cud Chew","isHidden":true}],
    moves: ["assurance","body-press","body-slam","bulk-up","bulldoze","close-combat","curse","dig","double-kick","double-edge","drill-run","earthquake","endeavor","endure","facade","fire-blast","fire-spin","flame-charge","flamethrower","flare-blitz","giga-impact","headbutt","high-horsepower","hyper-beam","iron-head","lash-out","outrage","overheat","protect","raging-bull","rain-dance","rest","reversal","rock-slide","rock-tomb","sandstorm","scary-face","sleep-talk","smart-strike","stomping-tantrum","stone-edge","substitute","sunny-day","surf","swagger","take-down","temper-flare","thief","thrash","throat-chop","trailblaze","wild-charge","will-o-wisp","work-up","zen-headbutt"]
  },
  'paldean-tauros-aqua': {
    id: 128, name: '肯泰罗-帕底亚-水澜种', nameEn: 'Paldean Tauros (Aqua)',
    pinyin: 'kentailuo-padiya-shuilanzhong', pinyinAbbr: 'ktl-pdy-slz',
    types: ["fighting","water"],
    baseStats: { hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"anger-point","name":"愤怒穴位","nameEn":"Anger Point","isHidden":false},{"id":"cud-chew","name":"反刍","nameEn":"Cud Chew","isHidden":true}],
    moves: ["aqua-jet","assurance","body-press","body-slam","bulk-up","bulldoze","chilling-water","close-combat","curse","dig","double-kick","double-edge","drill-run","earthquake","endeavor","endure","facade","fire-blast","flamethrower","giga-impact","headbutt","high-horsepower","hydro-pump","hyper-beam","iron-head","lash-out","liquidation","outrage","protect","raging-bull","rain-dance","rest","reversal","rock-slide","rock-tomb","sandstorm","scary-face","sleep-talk","smart-strike","stomping-tantrum","stone-edge","substitute","sunny-day","surf","swagger","take-down","thief","thrash","throat-chop","trailblaze","water-pulse","wave-crash","whirlpool","wild-charge","work-up","zen-headbutt"]
  },
  'gyarados': {
    id: 130, name: '暴鲤龙', nameEn: 'Gyarados',
    pinyin: 'baolilong', pinyinAbbr: 'bll',
    types: ["water","flying"],
    baseStats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"moxie","name":"自信过度","nameEn":"Moxie","isHidden":true}],
    forms: {"mega":{"name":"暴鲤龙-超级进化","nameEn":"Mega Gyarados","types":["water","dark"],"baseStats":{"hp":95,"atk":155,"def":109,"spa":70,"spd":130,"spe":81},"ability":{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker"}}},
    moves: ["aqua-tail","avalanche","bite","blizzard","body-slam","bounce","brutal-swing","bulldoze","chilling-water","crunch","dark-pulse","dive","double-edge","dragon-cheer","dragon-dance","dragon-pulse","dragon-rush","dragon-tail","earthquake","endeavor","endure","facade","fire-blast","flail","flamethrower","giga-impact","helping-hand","hurricane","hydro-pump","hyper-beam","ice-beam","ice-fang","icy-wind","iron-head","iron-tail","lash-out","muddy-water","outrage","payback","power-whip","protect","rain-dance","rest","roar","round","sandstorm","scald","scale-shot","scary-face","sleep-talk","snore","spite","stone-edge","substitute","sunny-day","surf","swagger","taunt","temper-flare","thrash","thunder","thunder-wave","thunderbolt","uproar","water-pulse","waterfall","whirlpool"]
  },
  'ditto': {
    id: 132, name: '百变怪', nameEn: 'Ditto',
    pinyin: 'baibianguai', pinyinAbbr: 'bbg',
    types: ["normal"],
    baseStats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
    abilities: [{"id":"limber","name":"柔软","nameEn":"Limber","isHidden":false},{"id":"imposter","name":"变身者","nameEn":"Imposter","isHidden":true}],
    moves: ["transform"]
  },
  'vaporeon': {
    id: 134, name: '水伊布', nameEn: 'Vaporeon',
    pinyin: 'shuiyibu', pinyinAbbr: 'syb',
    types: ["water"],
    baseStats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
    abilities: [{"id":"water-absorb","name":"储水","nameEn":"Water Absorb","isHidden":false},{"id":"hydration","name":"湿润之躯","nameEn":"Hydration","isHidden":true}],
    moves: ["acid-armor","alluring-voice","aqua-ring","baby-doll-eyes","baton-pass","bite","blizzard","body-slam","calm-mind","charm","chilling-water","copycat","covet","curse","detect","dig","dive","double-edge","endure","facade","fake-tears","flail","flip-turn","focus-energy","giga-impact","haze","helping-hand","hydro-pump","hyper-beam","hyper-voice","ice-beam","icy-wind","iron-tail","last-resort","liquidation","mud-slap","muddy-water","protect","quick-attack","rain-dance","rest","roar","round","scald","shadow-ball","sleep-talk","snore","stored-power","substitute","sunny-day","surf","tickle","trailblaze","water-pulse","waterfall","weather-ball","whirlpool","yawn"]
  },
  'jolteon': {
    id: 135, name: '雷伊布', nameEn: 'Jolteon',
    pinyin: 'leiyibu', pinyinAbbr: 'lyb',
    types: ["electric"],
    baseStats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
    abilities: [{"id":"volt-absorb","name":"蓄电","nameEn":"Volt Absorb","isHidden":false},{"id":"quick-feet","name":"飞毛腿","nameEn":"Quick Feet","isHidden":true}],
    moves: ["agility","alluring-voice","baby-doll-eyes","baton-pass","bite","body-slam","calm-mind","charge","charge-beam","charm","copycat","covet","curse","detect","dig","discharge","double-edge","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","fake-tears","flail","focus-energy","giga-impact","helping-hand","hyper-beam","hyper-voice","last-resort","light-screen","metal-sound","mud-slap","pin-missile","protect","quick-attack","rain-dance","rest","rising-voltage","roar","round","shadow-ball","sleep-talk","snore","stored-power","substitute","sunny-day","thunder","thunder-fang","thunder-wave","thunderbolt","tickle","trailblaze","volt-switch","weather-ball","wild-charge","yawn"]
  },
  'flareon': {
    id: 136, name: '火伊布', nameEn: 'Flareon',
    pinyin: 'huoyibu', pinyinAbbr: 'hyb',
    types: ["fire"],
    baseStats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
    abilities: [{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"guts","name":"毅力","nameEn":"Guts","isHidden":true}],
    moves: ["alluring-voice","baby-doll-eyes","baton-pass","bite","body-slam","burning-jealousy","calm-mind","charm","copycat","covet","curse","detect","dig","double-edge","endeavor","endure","facade","fake-tears","fire-blast","fire-fang","fire-spin","flail","flame-charge","flamethrower","flare-blitz","focus-energy","giga-impact","heat-wave","helping-hand","hyper-beam","hyper-voice","last-resort","lava-plume","mud-slap","overheat","protect","quick-attack","rain-dance","rest","roar","round","scary-face","scorching-sands","shadow-ball","sleep-talk","snore","stored-power","substitute","sunny-day","superpower","temper-flare","tickle","trailblaze","weather-ball","will-o-wisp","yawn"]
  },
  'aerodactyl': {
    id: 142, name: '化石翼龙', nameEn: 'Aerodactyl',
    pinyin: 'huashiyilong', pinyinAbbr: 'hsyl',
    types: ["rock","flying"],
    baseStats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
    abilities: [{"id":"rock-head","name":"坚硬脑袋","nameEn":"Rock Head","isHidden":false},{"id":"pressure","name":"压迫感","nameEn":"Pressure","isHidden":false},{"id":"unnerve","name":"紧张感","nameEn":"Unnerve","isHidden":true}],
    forms: {"mega":{"name":"化石翼龙-超级进化","nameEn":"Mega Aerodactyl","types":["rock","flying"],"baseStats":{"hp":80,"atk":135,"def":85,"spa":70,"spd":95,"spe":150},"ability":{"id":"tough-claws","name":"硬爪","nameEn":"Tough Claws"}}},
    moves: ["aerial-ace","agility","ancient-power","assurance","attract","bite","brutal-swing","bulldoze","crunch","curse","dragon-claw","dragon-dance","dragon-pulse","dual-wingbeat","earth-power","earthquake","endure","facade","fire-blast","fire-fang","flamethrower","fly","giga-impact","heat-wave","hurricane","hyper-beam","ice-fang","iron-head","iron-tail","meteor-beam","payback","protect","psychic-fangs","rain-dance","rest","roar","rock-blast","rock-slide","rock-tomb","roost","round","sandstorm","scary-face","sky-attack","sleep-talk","snore","stealth-rock","steel-wing","stone-edge","substitute","sunny-day","swagger","tailwind","taunt","thief","thunder-fang","whirlwind","wide-guard"]
  },
  'snorlax': {
    id: 143, name: '卡比兽', nameEn: 'Snorlax',
    pinyin: 'kabishou', pinyinAbbr: 'kbs',
    types: ["normal"],
    baseStats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    abilities: [{"id":"immunity","name":"免疫","nameEn":"Immunity","isHidden":false},{"id":"thick-fat","name":"厚脂肪","nameEn":"Thick Fat","isHidden":false},{"id":"gluttony","name":"贪吃鬼","nameEn":"Gluttony","isHidden":true}],
    moves: ["amnesia","attract","belch","belly-drum","bite","blizzard","block","body-press","body-slam","brick-break","bulldoze","charm","chilling-water","counter","covet","crunch","curse","dig","double-edge","earthquake","encore","endure","facade","fire-blast","fire-punch","fissure","flail","flamethrower","fling","focus-blast","focus-punch","gastro-acid","giga-impact","gunk-shot","hammer-arm","hard-press","heat-crash","heavy-slam","helping-hand","high-horsepower","hydro-pump","hyper-beam","hyper-voice","ice-beam","ice-punch","icy-wind","iron-head","last-resort","mud-slap","outrage","protect","rain-dance","recycle","rest","rock-slide","rock-tomb","round","sandstorm","screech","seed-bomb","self-destruct","shadow-ball","sleep-talk","smack-down","snore","solar-beam","stockpile","stomping-tantrum","substitute","sunny-day","supercell-slam","superpower","surf","swallow","terrain-pulse","thunder","thunder-punch","thunderbolt","trailblaze","uproar","wild-charge","yawn","zen-headbutt"]
  },
  'dragonite': {
    id: 149, name: '快龙', nameEn: 'Dragonite',
    pinyin: 'kuailong', pinyinAbbr: 'kl',
    types: ["dragon","flying"],
    baseStats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    abilities: [{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":false},{"id":"multiscale","name":"多重鳞片","nameEn":"Multiscale","isHidden":true}],
    forms: {"mega":{"name":"Mega Dragonite","nameEn":"Mega Dragonite","types":["dragon","flying"],"baseStats":{"hp":91,"atk":124,"def":115,"spa":145,"spd":125,"spe":100},"ability":{"id":"multiscale","name":"多重鳞片","nameEn":"Multiscale"}}},
    moves: ["aerial-ace","agility","air-cutter","air-slash","aqua-jet","aqua-tail","blizzard","body-press","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","chilling-water","dive","draco-meteor","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-rush","dragon-tail","earthquake","endure","extreme-speed","facade","fire-blast","fire-punch","fire-spin","flamethrower","fling","fly","focus-blast","focus-punch","giga-impact","haze","heat-wave","helping-hand","hurricane","hydro-pump","hyper-beam","ice-beam","ice-punch","ice-spinner","icy-wind","iron-head","iron-tail","light-screen","low-kick","mega-kick","outrage","protect","rain-dance","rest","roar","rock-slide","rock-tomb","roost","round","safeguard","sandstorm","scale-shot","scary-face","sleep-talk","snore","snowscape","steel-wing","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","surf","tailwind","thunder","thunder-punch","thunder-wave","thunderbolt","water-pulse","waterfall","weather-ball","whirlwind","wrap"]
  },
  'meganium': {
    id: 154, name: '大竺葵', nameEn: 'Meganium',
    pinyin: 'dazhukui', pinyinAbbr: 'dzk',
    types: ["grass"],
    baseStats: { hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80 },
    abilities: [{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":false},{"id":"leaf-guard","name":"叶子防守","nameEn":"Leaf Guard","isHidden":true},{"id":"mega-sol","name":"Mega Sol","nameEn":"Mega Sol","isHidden":false}],
    forms: {"mega":{"name":"Mega Meganium","nameEn":"Mega Meganium","types":["grass","fairy"],"baseStats":{"hp":80,"atk":92,"def":115,"spa":143,"spd":115,"spe":80},"ability":{"id":"mega-sol","name":"Mega Sol","nameEn":"Mega Sol"}}},
    moves: ["ancient-power","body-press","body-slam","bulldoze","bullet-seed","charm","counter","curse","dazzling-gleam","double-edge","dragon-tail","earth-power","earthquake","encore","endeavor","endure","energy-ball","facade","fake-tears","flail","frenzy-plant","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","heal-pulse","helping-hand","hyper-beam","ingrain","iron-tail","knock-off","leaf-blade","leaf-storm","leech-seed","light-screen","mud-slap","outrage","petal-blizzard","petal-dance","poison-powder","pollen-puff","protect","reflect","rest","round","safeguard","seed-bomb","sleep-talk","snore","solar-beam","solar-blade","stomping-tantrum","substitute","sunny-day","sweet-scent","swords-dance","synthesis","trailblaze","weather-ball","zen-headbutt"]
  },
  'typhlosion': {
    id: 157, name: '火暴兽', nameEn: 'Typhlosion',
    pinyin: 'huobaoshou', pinyinAbbr: 'hbs',
    types: ["fire"],
    baseStats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":true}],
    moves: ["aerial-ace","blast-burn","body-slam","brick-break","bulldoze","burn-up","burning-jealousy","covet","curse","dig","double-edge","earthquake","endeavor","endure","eruption","extrasensory","facade","fire-blast","fire-fang","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","fling","focus-blast","focus-punch","giga-impact","gyro-ball","heat-wave","helping-hand","howl","hyper-beam","inferno","iron-head","lava-plume","low-kick","mega-kick","overheat","play-rough","protect","quick-attack","rest","reversal","roar","rock-slide","rock-tomb","round","scorching-sands","shadow-ball","shadow-claw","sleep-talk","snore","solar-beam","stomping-tantrum","substitute","sunny-day","temper-flare","throat-chop","thunder-punch","wild-charge","will-o-wisp","zen-headbutt"]
  },
  'hisuian-typhlosion': {
    id: 157, name: '火暴兽-洗翠', nameEn: 'Hisuian Typhlosion',
    pinyin: 'huobaoshou-xicui', pinyinAbbr: 'hbs-xc',
    types: ["fire","ghost"],
    baseStats: { hp: 73, atk: 84, def: 78, spa: 119, spd: 85, spe: 95 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":true}],
    moves: ["aerial-ace","blast-burn","body-slam","brick-break","bulldoze","burn-up","burning-jealousy","calm-mind","confuse-ray","covet","curse","dig","double-edge","earthquake","endeavor","endure","eruption","extrasensory","facade","fire-blast","fire-fang","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","focus-blast","focus-punch","giga-impact","gyro-ball","heat-wave","hex","howl","hyper-beam","infernal-parade","inferno","iron-head","lava-plume","low-kick","mega-kick","mystical-fire","night-shade","overheat","play-rough","poltergeist","protect","quick-attack","rest","reversal","roar","rock-slide","round","shadow-ball","shadow-claw","sleep-talk","snore","solar-beam","spite","stomping-tantrum","substitute","sunny-day","temper-flare","thunder-punch","wild-charge","will-o-wisp","zen-headbutt"]
  },
  'feraligatr': {
    id: 160, name: '大力鳄', nameEn: 'Feraligatr',
    pinyin: 'dalie', pinyinAbbr: 'dle',
    types: ["water"],
    baseStats: { hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78 },
    abilities: [{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":false},{"id":"sheer-force","name":"强行","nameEn":"Sheer Force","isHidden":true},{"id":"dragonize","name":"Dragonize","nameEn":"Dragonize","isHidden":false}],
    forms: {"mega":{"name":"Mega Feraligatr","nameEn":"Mega Feraligatr","types":["water","dragon"],"baseStats":{"hp":85,"atk":160,"def":125,"spa":89,"spd":93,"spe":78},"ability":{"id":"dragonize","name":"Dragonize","nameEn":"Dragonize"}}},
    moves: ["aerial-ace","agility","ancient-power","aqua-jet","aqua-tail","avalanche","bite","blizzard","block","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","chilling-water","counter","crunch","curse","dig","dive","double-edge","dragon-claw","dragon-dance","dragon-pulse","dragon-tail","earthquake","endeavor","endure","facade","fake-tears","flail","flatter","fling","flip-turn","focus-blast","focus-punch","giga-impact","helping-hand","hydro-cannon","hydro-pump","hyper-beam","ice-beam","ice-fang","ice-punch","icy-wind","iron-tail","lash-out","liquidation","low-kick","mega-kick","mud-shot","mud-slap","muddy-water","outrage","protect","psychic-fangs","rain-dance","rest","roar","rock-slide","rock-tomb","round","scale-shot","scary-face","screech","shadow-claw","sleep-talk","snarl","snore","spite","stomping-tantrum","substitute","superpower","surf","swords-dance","thief","thrash","trailblaze","uproar","water-pulse","waterfall","whirlpool"]
  },
  'ampharos': {
    id: 181, name: '电龙', nameEn: 'Ampharos',
    pinyin: 'dianlong', pinyinAbbr: 'dl',
    types: ["electric"],
    baseStats: { hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55 },
    abilities: [{"id":"static","name":"静电","nameEn":"Static","isHidden":false},{"id":"plus","name":"正电","nameEn":"Plus","isHidden":true}],
    forms: {"mega":{"name":"电龙-超级进化","nameEn":"Mega Ampharos","types":["electric","dragon"],"baseStats":{"hp":90,"atk":95,"def":105,"spa":165,"spd":110,"spe":45},"ability":{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker"}}},
    moves: ["after-you","agility","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","charge","charge-beam","confuse-ray","cotton-guard","cotton-spore","dazzling-gleam","dig","discharge","double-edge","dragon-cheer","dragon-pulse","dragon-tail","eerie-impulse","electric-terrain","electro-ball","electroweb","endeavor","endure","facade","fire-punch","flatter","fling","focus-blast","focus-punch","giga-impact","helping-hand","hyper-beam","ice-punch","iron-tail","light-screen","low-kick","magnetic-flux","mega-kick","meteor-beam","outrage","parabolic-charge","power-gem","protect","rain-dance","reflect","rest","rising-voltage","roar","round","safeguard","screech","sleep-talk","snore","stomping-tantrum","substitute","sunny-day","supercell-slam","thunder","thunder-punch","thunder-wave","thunderbolt","trailblaze","volt-switch","wild-charge","zap-cannon"]
  },
  'azumarill': {
    id: 184, name: '玛力露丽', nameEn: 'Azumarill',
    pinyin: 'maliluli', pinyinAbbr: 'mlll',
    types: ["water","fairy"],
    baseStats: { hp: 100, atk: 50, def: 80, spa: 60, spd: 80, spe: 50 },
    abilities: [{"id":"thick-fat","name":"厚脂肪","nameEn":"Thick Fat","isHidden":false},{"id":"huge-power","name":"大力士","nameEn":"Huge Power","isHidden":false},{"id":"sap-sipper","name":"食草","nameEn":"Sap Sipper","isHidden":true}],
    moves: ["alluring-voice","amnesia","aqua-jet","aqua-ring","aqua-tail","belly-drum","blizzard","body-slam","bounce","brick-break","brutal-swing","bulldoze","charm","chilling-water","copycat","dig","dive","double-edge","draining-kiss","encore","endure","facade","fake-tears","fling","focus-blast","focus-punch","future-sight","giga-impact","grass-knot","helping-hand","hydro-pump","hyper-beam","hyper-voice","ice-beam","ice-punch","ice-spinner","icy-wind","iron-tail","knock-off","light-screen","liquidation","misty-explosion","misty-terrain","mud-shot","mud-slap","muddy-water","perish-song","play-rough","protect","rain-dance","rest","round","sing","sleep-talk","snore","snowscape","soak","substitute","superpower","surf","tickle","trailblaze","uproar","water-pulse","waterfall","whirlpool"]
  },
  'politoed': {
    id: 186, name: '蚊香蛙皇', nameEn: 'Politoed',
    pinyin: 'wenxiangwahuang', pinyinAbbr: 'wxwh',
    types: ["water"],
    baseStats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 },
    abilities: [{"id":"water-absorb","name":"储水","nameEn":"Water Absorb","isHidden":false},{"id":"damp","name":"湿气","nameEn":"Damp","isHidden":false},{"id":"drizzle","name":"降雨","nameEn":"Drizzle","isHidden":true}],
    moves: ["amnesia","attract","belly-drum","blizzard","body-slam","bounce","brick-break","bulldoze","chilling-water","dig","dive","double-edge","earth-power","earthquake","encore","endeavor","endure","facade","fling","focus-blast","focus-punch","giga-impact","haze","helping-hand","hydro-pump","hyper-beam","hyper-voice","hypnosis","ice-beam","ice-punch","icy-wind","liquidation","low-kick","low-sweep","mud-shot","mud-slap","muddy-water","perish-song","pound","protect","psych-up","psychic","rain-dance","rest","round","screech","sleep-talk","snore","substitute","surf","swagger","thief","uproar","water-pulse","waterfall","weather-ball","whirlpool"]
  },
  'espeon': {
    id: 196, name: '太阳伊布', nameEn: 'Espeon',
    pinyin: 'taiyangyibu', pinyinAbbr: 'tyyb',
    types: ["psychic"],
    baseStats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110 },
    abilities: [{"id":"synchronize","name":"同步","nameEn":"Synchronize","isHidden":false},{"id":"magic-bounce","name":"魔法镜","nameEn":"Magic Bounce","isHidden":true}],
    moves: ["alluring-voice","baby-doll-eyes","baton-pass","bite","body-slam","calm-mind","charm","confuse-ray","copycat","covet","curse","dazzling-gleam","detect","dig","double-edge","draining-kiss","endure","expanding-force","facade","fake-tears","flail","focus-energy","future-sight","giga-impact","grass-knot","gravity","helping-hand","hyper-beam","hyper-voice","imprison","last-resort","light-screen","magic-room","morning-sun","mud-slap","power-gem","power-swap","protect","psych-up","psychic","psychic-fangs","psychic-noise","psychic-terrain","psyshock","quick-attack","rain-dance","reflect","rest","roar","round","safeguard","shadow-ball","skill-swap","sleep-talk","snore","stored-power","substitute","sunny-day","thunder-wave","tickle","trailblaze","trick","trick-room","weather-ball","wish","yawn","zen-headbutt"]
  },
  'umbreon': {
    id: 197, name: '月亮伊布', nameEn: 'Umbreon',
    pinyin: 'yueliangyibu', pinyinAbbr: 'ylyb',
    types: ["dark"],
    baseStats: { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
    abilities: [{"id":"synchronize","name":"同步","nameEn":"Synchronize","isHidden":false},{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":true}],
    moves: ["alluring-voice","assurance","baby-doll-eyes","baton-pass","bite","body-slam","baby-doll-eyes","baton-pass","bite","body-slam","calm-mind","charm","confuse-ray","copycat","covet","crunch","curse","dark-pulse","detect","dig","double-edge","endure","facade","fake-tears","flail","focus-energy","foul-play","giga-impact","guard-swap","helping-hand","hyper-beam","hyper-voice","lash-out","last-resort","light-screen","mean-look","moonlight","mud-slap","payback","protect","psych-up","psychic","quick-attack","rain-dance","reflect","rest","roar","round","scary-face","screech","shadow-ball","skill-swap","sleep-talk","snarl","snore","spite","stored-power","substitute","sunny-day","swagger","taunt","thief","throat-chop","thunder-wave","tickle","torment","toxic","trailblaze","weather-ball","wish","yawn"]
  },
  'slowking': {
    id: 199, name: '呆呆王', nameEn: 'Slowking',
    pinyin: 'daidaiwang', pinyinAbbr: 'ddw',
    types: ["water","psychic"],
    baseStats: { hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30 },
    abilities: [{"id":"oblivious","name":"迟钝","nameEn":"Oblivious","isHidden":false},{"id":"own-tempo","name":"我行我素","nameEn":"Own Tempo","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":true}],
    moves: ["amnesia","avalanche","belch","belly-drum","blizzard","block","body-slam","brick-break","bulldoze","calm-mind","chilling-water","chilly-reception","curse","dig","disable","dive","drain-punch","earthquake","endure","expanding-force","facade","fire-blast","fire-punch","flamethrower","fling","focus-blast","focus-punch","foul-play","future-sight","giga-impact","grass-knot","heal-pulse","helping-hand","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","imprison","iron-defense","iron-tail","light-screen","liquidation","mud-shot","muddy-water","nasty-plot","power-gem","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","rain-dance","razor-shell","reflect","rest","rock-slide","rock-tomb","round","safeguard","scald","shadow-ball","skill-swap","slack-off","sleep-talk","snore","snowscape","stored-power","substitute","sunny-day","surf","swagger","thunder-punch","thunder-wave","tri-attack","trick","trick-room","water-pulse","waterfall","weather-ball","whirlpool","wonder-room","yawn","zen-headbutt"]
  },
  'galarian-slowking': {
    id: 199, name: '伽勒尔呆呆王', nameEn: 'Galarian Slowking',
    pinyin: 'jialeerdaidaiwang', pinyinAbbr: 'jleddw',
    types: ["poison","psychic"],
    baseStats: { hp: 95, atk: 65, def: 80, spa: 110, spd: 110, spe: 30 },
    abilities: [{"id":"curious-medicine","name":"怪药","nameEn":"Curious Medicine","isHidden":false},{"id":"own-tempo","name":"我行我素","nameEn":"Own Tempo","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":true}],
    moves: ["acid-spray","amnesia","avalanche","belch","belly-drum","blizzard","block","body-slam","brick-break","bulldoze","calm-mind","chilling-water","chilly-reception","curse","dig","disable","dive","drain-punch","earthquake","eerie-spell","endure","expanding-force","facade","fire-blast","fire-punch","flamethrower","fling","focus-blast","foul-play","future-sight","giga-impact","grass-knot","gunk-shot","heal-pulse","helping-hand","hex","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","imprison","iron-defense","iron-tail","light-screen","liquidation","low-sweep","mud-shot","muddy-water","nasty-plot","poison-jab","power-gem","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","rain-dance","razor-shell","rest","round","safeguard","scary-face","shadow-ball","skill-swap","slack-off","sleep-talk","sludge-bomb","sludge-wave","snarl","snore","snowscape","stomping-tantrum","stored-power","substitute","sunny-day","surf","swagger","taunt","thunder-punch","thunder-wave","toxic","toxic-spikes","tri-attack","trick","trick-room","venoshock","water-pulse","waterfall","weather-ball","whirlpool","wonder-room","yawn","zen-headbutt"]
  },
  'steelix': {
    id: 208, name: '大钢蛇', nameEn: 'Steelix',
    pinyin: 'dagangshe', pinyinAbbr: 'dgs',
    types: ["steel","ground"],
    baseStats: { hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30 },
    abilities: [{"id":"rock-head","name":"坚硬脑袋","nameEn":"Rock Head","isHidden":false},{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":false},{"id":"sheer-force","name":"强行","nameEn":"Sheer Force","isHidden":true}],
    forms: {"mega":{"name":"大钢蛇-超级进化","nameEn":"Mega Steelix","types":["steel","ground"],"baseStats":{"hp":75,"atk":125,"def":230,"spa":55,"spd":95,"spe":30},"ability":{"id":"sand-force","name":"沙之力","nameEn":"Sand Force"}}},
    moves: ["ancient-power","attract","bind","block","body-press","body-slam","breaking-swipe","brutal-swing","bulldoze","crunch","curse","dark-pulse","dig","double-edge","dragon-dance","dragon-pulse","dragon-tail","drill-run","earth-power","earthquake","endure","facade","fire-fang","fissure","flail","flash-cannon","giga-impact","gyro-ball","head-smash","heavy-slam","high-horsepower","hyper-beam","ice-fang","iron-defense","iron-head","iron-tail","magnet-rise","meteor-beam","payback","protect","psychic-fangs","rest","rock-blast","rock-polish","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scary-face","scorching-sands","screech","self-destruct","sleep-talk","smack-down","snore","stealth-rock","steel-beam","steel-roller","stomping-tantrum","stone-edge","substitute","sunny-day","taunt","thunder-fang","wide-guard"]
  },
  'scizor': {
    id: 212, name: '巨钳螳螂', nameEn: 'Scizor',
    pinyin: 'juqiantanglang', pinyinAbbr: 'jqtl',
    types: ["bug","steel"],
    baseStats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65 },
    abilities: [{"id":"swarm","name":"虫之预感","nameEn":"Swarm","isHidden":false},{"id":"technician","name":"技术高手","nameEn":"Technician","isHidden":false},{"id":"light-metal","name":"轻金属","nameEn":"Light Metal","isHidden":true}],
    forms: {"mega":{"name":"巨钳螳螂-超级进化","nameEn":"Mega Scizor","types":["bug","steel"],"baseStats":{"hp":70,"atk":150,"def":140,"spa":65,"spd":100,"spe":75},"ability":{"id":"technician","name":"技术高手","nameEn":"Technician"}}},
    moves: ["acrobatics","aerial-ace","agility","air-cutter","air-slash","assurance","baton-pass","brick-break","brutal-swing","bug-bite","bug-buzz","bullet-punch","close-combat","counter","curse","defog","double-hit","double-team","double-edge","dual-wingbeat","endure","facade","feint","flash-cannon","fling","focus-energy","giga-impact","hard-press","helping-hand","hyper-beam","iron-defense","iron-head","knock-off","light-screen","lunge","night-slash","pounce","protect","psycho-cut","quick-attack","quick-guard","rain-dance","rest","reversal","roost","round","sandstorm","scary-face","skitter-smack","sleep-talk","snore","steel-beam","steel-wing","struggle-bug","substitute","sunny-day","superpower","swords-dance","tailwind","thief","trailblaze","u-turn","vacuum-wave","x-scissor"]
  },
  'heracross': {
    id: 214, name: '赫拉克罗斯', nameEn: 'Heracross',
    pinyin: 'helakeluosi', pinyinAbbr: 'hlkls',
    types: ["bug","fighting"],
    baseStats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85 },
    abilities: [{"id":"swarm","name":"虫之预感","nameEn":"Swarm","isHidden":false},{"id":"guts","name":"毅力","nameEn":"Guts","isHidden":false},{"id":"moxie","name":"自信过度","nameEn":"Moxie","isHidden":true}],
    forms: {"mega":{"name":"赫拉克罗斯-超级进化","nameEn":"Mega Heracross","types":["bug","fighting"],"baseStats":{"hp":80,"atk":185,"def":115,"spa":40,"spd":105,"spe":75},"ability":{"id":"skill-link","name":"连续攻击","nameEn":"Skill Link"}}},
    moves: ["aerial-ace","assurance","body-slam","brick-break","brutal-swing","bug-bite","bug-buzz","bulk-up","bulldoze","bullet-seed","circle-throw","close-combat","coaching","counter","curse","detect","dig","double-edge","earthquake","endeavor","endure","facade","feint","flail","fling","focus-blast","focus-punch","giga-impact","helping-hand","high-horsepower","hyper-beam","iron-defense","knock-off","low-kick","lunge","megahorn","night-slash","pin-missile","pounce","protect","rain-dance","rest","reversal","rock-blast","rock-slide","rock-tomb","round","seismic-toss","shadow-claw","skitter-smack","sleep-talk","smack-down","smart-strike","snore","spikes","stone-edge","struggle-bug","substitute","sunny-day","swords-dance","thief","thrash","throat-chop","trailblaze","upper-hand","vacuum-wave"]
  },
  'skarmory': {
    id: 227, name: '盔甲鸟', nameEn: 'Skarmory',
    pinyin: 'kuijianiao', pinyinAbbr: 'kjn',
    types: ["steel","flying"],
    baseStats: { hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":false},{"id":"weak-armor","name":"碎裂铠甲","nameEn":"Weak Armor","isHidden":true}],
    forms: {"mega":{"name":"Mega Skarmory","nameEn":"Mega Skarmory","types":["steel","flying"],"baseStats":{"hp":65,"atk":140,"def":110,"spa":40,"spd":100,"spe":110},"ability":{"id":"stalwart","name":"坚毅","nameEn":"Stalwart"}}},
    moves: ["aerial-ace","agility","air-cutter","air-slash","assurance","body-press","brave-bird","curse","dark-pulse","drill-peck","drill-run","dual-wingbeat","endure","facade","feint","flash-cannon","fly","giga-impact","hurricane","hyper-beam","icy-wind","iron-defense","iron-head","metal-sound","night-slash","payback","protect","rest","reversal","roar","rock-slide","rock-tomb","roost","round","sand-tomb","sandstorm","sky-attack","sleep-talk","snore","spikes","stealth-rock","steel-beam","steel-wing","substitute","sunny-day","swords-dance","tailwind","taunt","thief","whirlwind","x-scissor"]
  },
  'houndoom': {
    id: 229, name: '黑鲁加', nameEn: 'Houndoom',
    pinyin: 'heilujia', pinyinAbbr: 'hlj',
    types: ["dark","fire"],
    baseStats: { hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95 },
    abilities: [{"id":"early-bird","name":"早起","nameEn":"Early Bird","isHidden":false},{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"unnerve","name":"紧张感","nameEn":"Unnerve","isHidden":true}],
    forms: {"mega":{"name":"黑鲁加-超级进化","nameEn":"Mega Houndoom","types":["dark","fire"],"baseStats":{"hp":75,"atk":90,"def":90,"spa":140,"spd":90,"spe":115},"ability":{"id":"solar-power","name":"太阳之力","nameEn":"Solar Power"}}},
    moves: ["beat-up","bite","body-slam","burning-jealousy","comeuppance","counter","crunch","dark-pulse","destiny-bond","double-edge","endeavor","endure","facade","feint","fire-blast","fire-fang","fire-spin","flame-charge","flamethrower","flare-blitz","foul-play","giga-impact","heat-wave","helping-hand","howl","hyper-beam","hyper-voice","inferno","iron-tail","lash-out","mud-shot","mud-slap","nasty-plot","overheat","pain-split","payback","protect","psychic-fangs","rain-dance","rest","reversal","roar","round","scary-face","scorching-sands","shadow-ball","sleep-talk","sludge-bomb","snarl","snore","solar-beam","spite","substitute","sucker-punch","sunny-day","super-fang","swagger","taunt","temper-flare","thief","throat-chop","thunder-fang","torment","toxic","trailblaze","uproar","will-o-wisp"]
  },
  'tyranitar': {
    id: 248, name: '班基拉斯', nameEn: 'Tyranitar',
    pinyin: 'banjilasi', pinyinAbbr: 'bjls',
    types: ["rock","dark"],
    baseStats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    abilities: [{"id":"sand-stream","name":"扬沙","nameEn":"Sand Stream","isHidden":false},{"id":"unnerve","name":"紧张感","nameEn":"Unnerve","isHidden":true}],
    forms: {"mega":{"name":"班基拉斯-超级进化","nameEn":"Mega Tyranitar","types":["rock","dark"],"baseStats":{"hp":100,"atk":164,"def":150,"spa":95,"spd":120,"spe":71},"ability":{"id":"sand-stream","name":"扬沙","nameEn":"Sand Stream"}}},
    moves: ["aerial-ace","ancient-power","assurance","avalanche","bite","blizzard","body-press","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","crunch","curse","dark-pulse","dig","double-edge","dragon-claw","dragon-dance","dragon-pulse","dragon-tail","earth-power","earthquake","endure","facade","fire-blast","fire-fang","fire-punch","flamethrower","fling","focus-blast","focus-energy","focus-punch","foul-play","giga-impact","hard-press","heavy-slam","helping-hand","high-horsepower","hydro-pump","hyper-beam","ice-beam","ice-fang","ice-punch","icy-wind","iron-defense","iron-head","iron-tail","knock-off","lash-out","low-kick","mega-kick","mud-shot","mud-slap","muddy-water","outrage","payback","power-gem","protect","rain-dance","rest","roar","rock-blast","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scary-face","screech","shadow-claw","sleep-talk","smack-down","snarl","snore","spite","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","surf","swagger","taunt","thrash","thunder","thunder-fang","thunder-punch","thunder-wave","thunderbolt","uproar"]
  },
  'pelipper': {
    id: 279, name: '大嘴鸥', nameEn: 'Pelipper',
    pinyin: 'dazuiou', pinyinAbbr: 'dzo',
    types: ["water","flying"],
    baseStats: { hp: 60, atk: 50, def: 100, spa: 95, spd: 70, spe: 65 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"drizzle","name":"降雨","nameEn":"Drizzle","isHidden":false},{"id":"rain-dish","name":"雨盘","nameEn":"Rain Dish","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","air-cutter","air-slash","aqua-ring","blizzard","body-slam","chilling-water","dual-wingbeat","endure","facade","feather-dance","fling","fly","giga-impact","gunk-shot","helping-hand","hurricane","hydro-pump","hyper-beam","ice-beam","icy-wind","knock-off","liquidation","muddy-water","protect","quick-attack","rain-dance","rest","roost","round","seed-bomb","sleep-talk","snore","snowscape","soak","spit-up","steel-wing","stockpile","substitute","surf","swallow","tailwind","thief","u-turn","uproar","water-pulse","waterfall","weather-ball","whirlpool","wide-guard"]
  },
  'gardevoir': {
    id: 282, name: '沙奈朵', nameEn: 'Gardevoir',
    pinyin: 'shanaiduo', pinyinAbbr: 'snd',
    types: ["psychic","fairy"],
    baseStats: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
    abilities: [{"id":"synchronize","name":"同步","nameEn":"Synchronize","isHidden":false},{"id":"trace","name":"复制","nameEn":"Trace","isHidden":false},{"id":"telepathy","name":"心灵感应","nameEn":"Telepathy","isHidden":true}],
    forms: {"mega":{"name":"沙奈朵-超级进化","nameEn":"Mega Gardevoir","types":["psychic","fairy"],"baseStats":{"hp":68,"atk":85,"def":65,"spa":165,"spd":135,"spe":100},"ability":{"id":"pixilate","name":"妖精皮肤","nameEn":"Pixilate"}}},
    moves: ["alluring-voice","aura-sphere","body-slam","calm-mind","charge-beam","charm","confuse-ray","dazzling-gleam","destiny-bond","disable","double-team","draining-kiss","encore","endure","energy-ball","expanding-force","facade","fire-punch","fling","focus-blast","future-sight","giga-impact","grass-knot","gravity","guard-swap","heal-pulse","healing-wish","helping-hand","hyper-beam","hyper-voice","hypnosis","ice-punch","icy-wind","imprison","knock-off","life-dew","light-screen","magic-room","mean-look","memento","misty-explosion","misty-terrain","moonblast","mystical-fire","night-shade","pain-split","power-swap","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","rain-dance","reflect","rest","round","safeguard","shadow-ball","shadow-sneak","skill-swap","sleep-talk","snore","stored-power","substitute","sunny-day","swagger","taunt","thief","thunder-punch","thunder-wave","thunderbolt","trick","trick-room","triple-axel","vacuum-wave","will-o-wisp","wish","wonder-room","zen-headbutt"]
  },
  'sableye': {
    id: 302, name: '勾魂眼', nameEn: 'Sableye',
    pinyin: 'gouhunyan', pinyinAbbr: 'ghy',
    types: ["dark","ghost"],
    baseStats: { hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"stall","name":"慢出","nameEn":"Stall","isHidden":false},{"id":"prankster","name":"恶作剧之心","nameEn":"Prankster","isHidden":true}],
    forms: {"mega":{"name":"勾魂眼-超级进化","nameEn":"Mega Sableye","types":["dark","ghost"],"baseStats":{"hp":50,"atk":85,"def":125,"spa":85,"spd":115,"spe":20},"ability":{"id":"magic-bounce","name":"魔法镜","nameEn":"Magic Bounce"}}},
    moves: ["aerial-ace","body-slam","brick-break","bulk-up","calm-mind","confuse-ray","dark-pulse","dazzling-gleam","detect","dig","disable","drain-punch","encore","endure","energy-ball","facade","fake-out","feint","fire-punch","flatter","fling","focus-punch","foul-play","giga-drain","giga-impact","gravity","gyro-ball","helping-hand","hex","hyper-beam","ice-punch","icy-wind","imprison","knock-off","lash-out","light-screen","low-kick","low-sweep","mean-look","mega-kick","metal-burst","mud-shot","mud-slap","nasty-plot","night-shade","night-slash","pain-split","payback","phantom-force","poison-jab","poltergeist","power-gem","protect","psych-up","psychic","quash","rain-dance","recover","reflect","rest","rock-tomb","round","safeguard","shadow-ball","shadow-claw","shadow-punch","shadow-sneak","skill-swap","skitter-smack","sleep-talk","snarl","snore","spite","substitute","sucker-punch","sunny-day","swagger","taunt","thief","throat-chop","thunder-punch","thunder-wave","torment","trick","will-o-wisp","wonder-room","x-scissor","zen-headbutt"]
  },
  'aggron': {
    id: 306, name: '波士可多拉', nameEn: 'Aggron',
    pinyin: 'boshikeduola', pinyinAbbr: 'bskdl',
    types: ["steel","rock"],
    baseStats: { hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50 },
    abilities: [{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":false},{"id":"rock-head","name":"坚硬脑袋","nameEn":"Rock Head","isHidden":false},{"id":"heavy-metal","name":"重金属","nameEn":"Heavy Metal","isHidden":true}],
    forms: {"mega":{"name":"波士可多拉-超级进化","nameEn":"Mega Aggron","types":["steel"],"baseStats":{"hp":70,"atk":140,"def":230,"spa":60,"spd":80,"spe":50},"ability":{"id":"filter","name":"过滤","nameEn":"Filter"}}},
    moves: ["ancient-power","attract","avalanche","blizzard","body-press","body-slam","brick-break","brutal-swing","bulldoze","crunch","curse","dark-pulse","dig","double-edge","dragon-claw","dragon-pulse","dragon-rush","earth-power","earthquake","endeavor","endure","facade","fire-blast","fire-punch","flamethrower","flash-cannon","fling","focus-blast","giga-impact","head-smash","heavy-slam","high-horsepower","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","iron-defense","iron-head","iron-tail","low-kick","mega-kick","metal-burst","metal-sound","meteor-beam","mud-slap","outrage","payback","protect","rain-dance","rest","reversal","roar","rock-blast","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scary-face","screech","shadow-claw","sleep-talk","smart-strike","snore","solar-beam","stealth-rock","steel-beam","steel-roller","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","surf","swagger","taunt","thunder","thunder-punch","thunder-wave","thunderbolt","uproar","whirlpool"]
  },
  'torkoal': {
    id: 324, name: '煤炭龟', nameEn: 'Torkoal',
    pinyin: 'meitangui', pinyinAbbr: 'mtg',
    types: ["fire"],
    baseStats: { hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20 },
    abilities: [{"id":"white-smoke","name":"白色烟雾","nameEn":"White Smoke","isHidden":false},{"id":"drought","name":"日照","nameEn":"Drought","isHidden":false},{"id":"shell-armor","name":"硬壳盔甲","nameEn":"Shell Armor","isHidden":true}],
    moves: ["amnesia","ancient-power","body-press","body-slam","bulldoze","burning-jealousy","clear-smog","curse","double-edge","earth-power","earthquake","endure","eruption","facade","fire-blast","fire-spin","fissure","flail","flame-charge","flamethrower","flare-blitz","giga-impact","gyro-ball","heat-crash","heat-wave","heavy-slam","helping-hand","hyper-beam","inferno","iron-defense","lava-plume","overheat","protect","rapid-spin","rest","rock-slide","rock-tomb","round","sandstorm","scorching-sands","self-destruct","shell-smash","sleep-talk","sludge-bomb","snore","solar-beam","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","temper-flare","weather-ball","will-o-wisp","yawn","zen-headbutt"]
  },
  'altaria': {
    id: 334, name: '七夕青鸟', nameEn: 'Altaria',
    pinyin: 'qixiqingniao', pinyinAbbr: 'qxqn',
    types: ["dragon","flying"],
    baseStats: { hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80 },
    abilities: [{"id":"natural-cure","name":"自然回复","nameEn":"Natural Cure","isHidden":false},{"id":"cloud-nine","name":"无关天气","nameEn":"Cloud Nine","isHidden":true}],
    forms: {"mega":{"name":"七夕青鸟-超级进化","nameEn":"Mega Altaria","types":["dragon","fairy"],"baseStats":{"hp":75,"atk":110,"def":110,"spa":110,"spd":105,"spe":80},"ability":{"id":"pixilate","name":"妖精皮肤","nameEn":"Pixilate"}}},
    moves: ["acrobatics","aerial-ace","agility","alluring-voice","body-slam","brave-bird","breaking-swipe","bulldoze","cotton-guard","dazzling-gleam","defog","double-edge","draco-meteor","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-rush","dual-wingbeat","earthquake","endeavor","endure","facade","feather-dance","fire-blast","fire-spin","flamethrower","fly","giga-impact","haze","heat-wave","helping-hand","hurricane","hyper-beam","hyper-voice","ice-beam","moonblast","outrage","perish-song","play-rough","pluck","power-swap","protect","rain-dance","rest","roar","roost","round","safeguard","sing","sky-attack","sleep-talk","snore","snowscape","solar-beam","steel-wing","substitute","sunny-day","tailwind","thief","trailblaze","uproar","weather-ball","will-o-wisp","wonder-room"]
  },
  'milotic': {
    id: 350, name: '美纳斯', nameEn: 'Milotic',
    pinyin: 'meinasi', pinyinAbbr: 'mns',
    types: ["water"],
    baseStats: { hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81 },
    abilities: [{"id":"marvel-scale","name":"神奇鳞片","nameEn":"Marvel Scale","isHidden":false},{"id":"competitive","name":"好胜","nameEn":"Competitive","isHidden":false},{"id":"cute-charm","name":"迷人之躯","nameEn":"Cute Charm","isHidden":true}],
    moves: ["alluring-voice","aqua-ring","aqua-tail","attract","avalanche","blizzard","body-slam","breaking-swipe","brutal-swing","bulldoze","chilling-water","coil","confuse-ray","dive","double-edge","dragon-cheer","dragon-dance","dragon-pulse","dragon-tail","draining-kiss","endure","facade","flail","flip-turn","giga-impact","haze","helping-hand","hydro-pump","hyper-beam","hypnosis","ice-beam","icy-wind","imprison","iron-head","iron-tail","life-dew","light-screen","mirror-coat","mud-shot","muddy-water","protect","psych-up","rain-dance","recover","rest","round","safeguard","scald","scale-shot","skitter-smack","sleep-talk","snore","substitute","surf","tickle","triple-axel","water-pulse","waterfall","weather-ball","whirlpool","wrap"]
  },
  'castform': {
    id: 351, name: '飘浮泡泡', nameEn: 'Castform',
    pinyin: 'piaofupaopao', pinyinAbbr: 'pfpp',
    types: ["normal"],
    baseStats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
    abilities: [{"id":"forecast","name":"阴晴不定","nameEn":"Forecast","isHidden":false}],
    moves: ["amnesia","attract","avalanche","blizzard","body-slam","chilling-water","cosmic-power","endure","energy-ball","facade","fire-blast","flamethrower","future-sight","guard-swap","hex","hurricane","hydro-pump","ice-beam","icy-wind","protect","rain-dance","rest","round","sandstorm","scald","shadow-ball","sleep-talk","snore","snowscape","solar-beam","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","weather-ball"]
  },
  'absol': {
    id: 359, name: '阿勃梭鲁', nameEn: 'Absol',
    pinyin: 'abosuolu', pinyinAbbr: 'absl',
    types: ["dark"],
    baseStats: { hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75 },
    abilities: [{"id":"pressure","name":"压迫感","nameEn":"Pressure","isHidden":false},{"id":"super-luck","name":"超幸运","nameEn":"Super Luck","isHidden":false},{"id":"justified","name":"正义之心","nameEn":"Justified","isHidden":true}],
    forms: {"mega":{"name":"阿勃梭鲁-超级进化","nameEn":"Mega Absol","types":["dark"],"baseStats":{"hp":65,"atk":150,"def":60,"spa":115,"spd":60,"spe":115},"ability":{"id":"magic-bounce","name":"魔法镜","nameEn":"Magic Bounce"}}},
    moves: ["aerial-ace","air-slash","assurance","attract","baton-pass","bite","blizzard","body-slam","bounce","brutal-swing","calm-mind","close-combat","confuse-ray","curse","dark-pulse","detect","double-team","double-edge","endure","facade","feint","fire-blast","flamethrower","focus-energy","foul-play","future-sight","giga-impact","hex","hyper-beam","ice-beam","icy-wind","iron-tail","knock-off","mean-look","megahorn","night-slash","payback","perish-song","phantom-force","play-rough","protect","psycho-cut","quick-attack","rain-dance","rest","rock-slide","rock-tomb","round","sandstorm","shadow-ball","shadow-claw","shadow-sneak","sleep-talk","snarl","snore","stone-edge","substitute","sucker-punch","sunny-day","superpower","swords-dance","taunt","thief","throat-chop","thunder","thunder-wave","thunderbolt","trailblaze","will-o-wisp","x-scissor","zen-headbutt"]
  },
  'metagross': {
    id: 376, name: '巨金怪', nameEn: 'Metagross',
    pinyin: 'jujinguai', pinyinAbbr: 'jjg',
    types: ["steel","psychic"],
    baseStats: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
    abilities: [{"id":"clear-body","name":"恒净之躯","nameEn":"Clear Body","isHidden":false},{"id":"light-metal","name":"轻金属","nameEn":"Light Metal","isHidden":true}],
    forms: {"mega":{"name":"巨金怪-超级进化","nameEn":"Mega Metagross","types":["steel","psychic"],"baseStats":{"hp":80,"atk":145,"def":150,"spa":105,"spd":110,"spe":110},"ability":{"id":"tough-claws","name":"硬爪","nameEn":"Tough Claws"}}},
    moves: ["explosion","self-destruct","focus-punch","giga-impact","hyper-beam","steel-beam","steel-roller","double-edge","future-sight","meteor-beam","dynamic-punch","earthquake","hammer-arm","stone-edge","meteor-mash","psychic","sludge-bomb","take-down","body-slam","psychic-fangs","body-press","expanding-force","flash-cannon","iron-head","psyshock","shadow-ball","strength","zen-headbutt","brick-break","ice-punch","psychic-noise","rock-slide","signal-beam","stomping-tantrum","thunder-punch","facade","headbutt","psycho-cut","secret-power","shadow-claw","knock-off","aerial-ace","brutal-swing","bulldoze","hidden-power","rock-tomb","round","swift","icy-wind","confusion","cut","metal-claw","snore","trailblaze","bullet-punch","fury-cutter","power-up-punch","pursuit","rock-smash","tackle","rollout","mud-slap","frustration","grass-knot","gyro-ball","hard-press","heavy-slam","natural-gift","return","agility","ally-switch","block","confide","cosmic-power","defense-curl","double-team","endure","flash","gravity","hone-claws","iron-defense","laser-focus","light-screen","magnet-rise","mimic","miracle-eye","protect","psych-up","rain-dance","reflect","rest","rock-polish","sandstorm","scary-face","sleep-talk","stealth-rock","substitute","sunny-day","swagger","telekinesis","toxic","trick"]
  },
  'torterra': {
    id: 389, name: '土台龟', nameEn: 'Torterra',
    pinyin: 'tutaigui', pinyinAbbr: 'ttg',
    types: ["grass","ground"],
    baseStats: { hp: 95, atk: 109, def: 105, spa: 75, spd: 85, spe: 56 },
    abilities: [{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":false},{"id":"shell-armor","name":"硬壳盔甲","nameEn":"Shell Armor","isHidden":true}],
    moves: ["amnesia","attract","bite","body-press","body-slam","bulldoze","bullet-seed","crunch","curse","double-edge","earth-power","earthquake","endure","energy-ball","facade","frenzy-plant","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","hard-press","headlong-rush","heavy-slam","high-horsepower","hyper-beam","hyper-voice","iron-defense","iron-head","leaf-storm","leech-seed","light-screen","mud-shot","mud-slap","outrage","protect","reflect","rest","roar","rock-blast","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scary-face","scorching-sands","seed-bomb","shell-smash","sleep-talk","smack-down","snore","solar-beam","spit-up","stealth-rock","stockpile","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","swallow","swords-dance","synthesis","thrash","tickle","trailblaze","wide-guard","wood-hammer","worry-seed","zen-headbutt"]
  },
  'infernape': {
    id: 392, name: '烈焰猴', nameEn: 'Infernape',
    pinyin: 'lieyanhou', pinyinAbbr: 'lyh',
    types: ["fire","fighting"],
    baseStats: { hp: 76, atk: 104, def: 71, spa: 104, spd: 71, spe: 108 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"iron-fist","name":"铁拳","nameEn":"Iron Fist","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","attract","aura-sphere","blast-burn","blaze-kick","body-slam","brick-break","bulk-up","bulldoze","burning-jealousy","calm-mind","close-combat","coaching","counter","dig","double-edge","drain-punch","earthquake","encore","endeavor","endure","facade","fake-out","fake-tears","feint","fire-blast","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","fling","focus-blast","focus-energy","focus-punch","giga-impact","grass-knot","gunk-shot","heat-wave","helping-hand","hyper-beam","iron-tail","knock-off","lash-out","low-kick","low-sweep","mach-punch","mud-slap","nasty-plot","overheat","poison-jab","protect","psych-up","raging-fury","rest","reversal","roar","rock-slide","rock-tomb","round","scary-face","scorching-sands","shadow-claw","slack-off","sleep-talk","smack-down","snore","solar-beam","stealth-rock","stone-edge","substitute","sunny-day","switcheroo","swords-dance","taunt","temper-flare","thief","throat-chop","thunder-punch","torment","u-turn","upper-hand","uproar","vacuum-wave","will-o-wisp","zen-headbutt"]
  },
  'empoleon': {
    id: 395, name: '帝王拿波', nameEn: 'Empoleon',
    pinyin: 'diwangnabo', pinyinAbbr: 'dwnb',
    types: ["water","steel"],
    baseStats: { hp: 84, atk: 86, def: 88, spa: 111, spd: 101, spe: 60 },
    abilities: [{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":false},{"id":"competitive","name":"好胜","nameEn":"Competitive","isHidden":true}],
    moves: ["aerial-ace","agility","air-cutter","air-slash","aqua-jet","aqua-ring","attract","avalanche","blizzard","body-slam","brick-break","bulldoze","charm","chilling-water","dig","dive","double-edge","drill-peck","dual-wingbeat","earthquake","endure","facade","feather-dance","flash-cannon","fling","flip-turn","giga-impact","grass-knot","haze","helping-hand","hydro-cannon","hydro-pump","hyper-beam","ice-beam","ice-spinner","icy-wind","iron-defense","knock-off","lash-out","liquidation","metal-sound","mud-slap","power-trip","protect","psych-up","rain-dance","rest","roar","rock-slide","rock-tomb","roost","round","scary-face","shadow-claw","sleep-talk","snore","snowscape","stealth-rock","steel-beam","steel-wing","substitute","surf","swagger","swords-dance","throat-chop","triple-axel","uproar","vacuum-wave","water-pulse","waterfall","wave-crash","weather-ball","whirlpool","yawn"]
  },
  'lopunny': {
    id: 428, name: '长耳兔', nameEn: 'Lopunny',
    pinyin: 'changertu', pinyinAbbr: 'cet',
    types: ["normal"],
    baseStats: { hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105 },
    abilities: [{"id":"cute-charm","name":"迷人之躯","nameEn":"Cute Charm","isHidden":false},{"id":"klutz","name":"笨拙","nameEn":"Klutz","isHidden":false},{"id":"limber","name":"柔软","nameEn":"Limber","isHidden":true}],
    forms: {"mega":{"name":"长耳兔-超级进化","nameEn":"Mega Lopunny","types":["normal","fighting"],"baseStats":{"hp":65,"atk":136,"def":94,"spa":54,"spd":96,"spe":135},"ability":{"id":"scrappy","name":"胆量","nameEn":"Scrappy"}}},
    moves: ["acrobatics","after-you","agility","assurance","attract","aura-sphere","baby-doll-eyes","baton-pass","blizzard","bounce","brutal-swing","charm","circle-throw","close-combat","copycat","cosmic-power","cotton-guard","dig","double-hit","drain-punch","draining-kiss","dynamic-punch","encore","endure","entrainment","facade","fake-out","fake-tears","fire-punch","flail","flatter","fling","focus-blast","focus-punch","giga-impact","grass-knot","healing-wish","helping-hand","high-jump-kick","hyper-beam","hyper-voice","ice-beam","ice-punch","iron-tail","low-kick","low-sweep","mach-punch","mega-kick","mirror-coat","payback","play-rough","pounce","protect","quick-attack","rain-dance","rest","reversal","round","shadow-ball","sleep-talk","snore","solar-beam","substitute","sunny-day","sweet-kiss","switcheroo","swords-dance","teeter-dance","thunder","thunder-punch","thunder-wave","thunderbolt","trailblaze","triple-axel","u-turn","uproar"]
  },
  'spiritomb': {
    id: 442, name: '花岩怪', nameEn: 'Spiritomb',
    pinyin: 'huayanguai', pinyinAbbr: 'hyg',
    types: ["ghost","dark"],
    baseStats: { hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 35 },
    abilities: [{"id":"pressure","name":"压迫感","nameEn":"Pressure","isHidden":false},{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator","isHidden":true}],
    moves: ["ally-switch","body-slam","burning-jealousy","calm-mind","confuse-ray","curse","dark-pulse","destiny-bond","disable","endure","facade","foul-play","giga-impact","helping-hand","hex","hyper-beam","hypnosis","icy-wind","imprison","lash-out","memento","nasty-plot","night-shade","pain-split","payback","phantom-force","poltergeist","protect","psychic","psyshock","rain-dance","rest","rock-tomb","round","scary-face","shadow-ball","shadow-sneak","skill-swap","sleep-talk","snarl","snore","spite","stored-power","substitute","sucker-punch","sunny-day","taunt","thief","toxic","trick","trick-room","uproar","will-o-wisp","wonder-room"]
  },
  'garchomp': {
    id: 445, name: '烈咬陆鲨', nameEn: 'Garchomp',
    pinyin: 'lieyaolusha', pinyinAbbr: 'lyls',
    types: ["dragon","ground"],
    baseStats: { hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102 },
    abilities: [{"id":"sand-veil","name":"沙隐","nameEn":"Sand Veil","isHidden":false},{"id":"rough-skin","name":"粗糙皮肤","nameEn":"Rough Skin","isHidden":true}],
    forms: {"mega":{"name":"烈咬陆鲨-超级进化","nameEn":"Mega Garchomp","types":["dragon","ground"],"baseStats":{"hp":108,"atk":170,"def":115,"spa":120,"spd":95,"spe":92},"ability":{"id":"sand-force","name":"沙之力","nameEn":"Sand Force"}}},
    moves: ["aerial-ace","bite","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","crunch","dig","double-edge","draco-meteor","dragon-cheer","dragon-claw","dragon-pulse","dragon-rush","dragon-tail","earth-power","earthquake","endure","facade","fire-blast","fire-fang","flamethrower","fling","giga-impact","helping-hand","hyper-beam","iron-head","iron-tail","liquidation","mud-shot","outrage","poison-jab","power-gem","protect","rain-dance","rest","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scale-shot","scary-face","scorching-sands","shadow-claw","sleep-talk","snore","spikes","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","surf","swords-dance","thrash","thunder-fang"]
  },
  'lucario': {
    id: 448, name: '路卡利欧', nameEn: 'Lucario',
    pinyin: 'lukaliou', pinyinAbbr: 'lklo',
    types: ["fighting","steel"],
    baseStats: { hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90 },
    abilities: [{"id":"steadfast","name":"不屈之心","nameEn":"Steadfast","isHidden":false},{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":false},{"id":"justified","name":"正义之心","nameEn":"Justified","isHidden":true}],
    forms: {"mega":{"name":"路卡利欧-超级进化","nameEn":"Mega Lucario","types":["fighting","steel"],"baseStats":{"hp":70,"atk":145,"def":88,"spa":140,"spd":70,"spe":112},"ability":{"id":"adaptability","name":"适应力","nameEn":"Adaptability"}}},
    moves: ["aerial-ace","agility","aura-sphere","bite","blaze-kick","body-slam","bone-rush","brick-break","bulk-up","bulldoze","bullet-punch","calm-mind","circle-throw","close-combat","coaching","copycat","counter","cross-chop","crunch","dark-pulse","detect","dig","dragon-pulse","drain-punch","earthquake","endure","extreme-speed","facade","feint","final-gambit","flash-cannon","fling","focus-blast","focus-energy","focus-punch","giga-impact","heal-pulse","helping-hand","high-jump-kick","howl","hyper-beam","ice-punch","iron-defense","iron-tail","life-dew","low-kick","low-sweep","mega-kick","metal-sound","meteor-mash","nasty-plot","payback","poison-jab","protect","psych-up","psychic","quick-attack","quick-guard","rain-dance","rest","reversal","roar","rock-slide","rock-tomb","round","scary-face","screech","shadow-ball","shadow-claw","sleep-talk","snore","steel-beam","stone-edge","substitute","sunny-day","swords-dance","terrain-pulse","thunder-punch","trailblaze","upper-hand","vacuum-wave","water-pulse","zen-headbutt"]
  },
  'hippowdon': {
    id: 450, name: '河马兽', nameEn: 'Hippowdon',
    pinyin: 'hemashou', pinyinAbbr: 'hms',
    types: ["ground"],
    baseStats: { hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47 },
    abilities: [{"id":"sand-stream","name":"扬沙","nameEn":"Sand Stream","isHidden":false},{"id":"sand-force","name":"沙之力","nameEn":"Sand Force","isHidden":true}],
    moves: ["amnesia","bite","body-press","body-slam","bulldoze","crunch","curse","dig","earth-power","earthquake","endure","facade","fire-fang","fissure","giga-impact","hard-press","heavy-slam","helping-hand","high-horsepower","hyper-beam","hyper-voice","ice-fang","iron-head","mud-shot","mud-slap","muddy-water","protect","rest","roar","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scorching-sands","slack-off","sleep-talk","snore","spit-up","stealth-rock","stockpile","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","swallow","thunder-fang","whirlwind","yawn"]
  },
  'abomasnow': {
    id: 460, name: '暴雪王', nameEn: 'Abomasnow',
    pinyin: 'baoxuewang', pinyinAbbr: 'bxw',
    types: ["grass","ice"],
    baseStats: { hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60 },
    abilities: [{"id":"snow-warning","name":"降雪","nameEn":"Snow Warning","isHidden":false},{"id":"soundproof","name":"隔音","nameEn":"Soundproof","isHidden":true}],
    forms: {"mega":{"name":"暴雪王-超级进化","nameEn":"Mega Abomasnow","types":["grass","ice"],"baseStats":{"hp":90,"atk":132,"def":105,"spa":132,"spd":105,"spe":30},"ability":{"id":"snow-warning","name":"降雪","nameEn":"Snow Warning"}}},
    moves: ["aurora-veil","avalanche","blizzard","body-press","body-slam","brick-break","bulldoze","bullet-seed","chilling-water","curse","double-edge","earth-power","earthquake","endure","energy-ball","facade","fling","focus-blast","focus-punch","frost-breath","giga-drain","giga-impact","grass-knot","grassy-glide","growth","hard-press","helping-hand","hyper-beam","ice-beam","ice-hammer","ice-punch","ice-shard","ice-spinner","icicle-spear","icy-wind","ingrain","iron-tail","leaf-storm","leech-seed","low-kick","mega-kick","mud-slap","outrage","protect","rain-dance","rest","rock-slide","rock-tomb","round","scary-face","seed-bomb","shadow-ball","sheer-cold","sleep-talk","snore","snowscape","solar-beam","stomping-tantrum","substitute","swagger","swords-dance","trailblaze","water-pulse","weather-ball","wood-hammer"]
  },
  'weavile': {
    id: 461, name: '玛狃拉', nameEn: 'Weavile',
    pinyin: 'maniula', pinyinAbbr: 'mnl',
    types: ["dark","ice"],
    baseStats: { hp: 70, atk: 120, def: 65, spa: 45, spd: 85, spe: 125 },
    abilities: [{"id":"pressure","name":"压迫感","nameEn":"Pressure","isHidden":false},{"id":"pickpocket","name":"顺手牵羊","nameEn":"Pickpocket","isHidden":true}],
    moves: ["aerial-ace","agility","assurance","avalanche","baton-pass","beat-up","bite","blizzard","brick-break","calm-mind","chilling-water","counter","dark-pulse","dig","double-hit","endure","facade","fake-out","fake-tears","feint","fling","focus-blast","focus-punch","foul-play","giga-impact","helping-hand","hyper-beam","ice-beam","ice-punch","ice-shard","ice-spinner","icicle-crash","icicle-spear","icy-wind","knock-off","lash-out","low-kick","low-sweep","mega-kick","nasty-plot","night-slash","payback","poison-jab","protect","psycho-cut","quick-attack","rain-dance","reflect","rest","reversal","round","scary-face","screech","shadow-ball","shadow-claw","sleep-talk","snarl","snore","snowscape","spite","substitute","sunny-day","surf","swords-dance","taunt","thief","throat-chop","trailblaze","triple-axel","upper-hand","water-pulse","x-scissor"]
  },
  'rhyperior': {
    id: 464, name: '超甲狂犀', nameEn: 'Rhyperior',
    pinyin: 'chaojiakuangxi', pinyinAbbr: 'cjkx',
    types: ["ground","rock"],
    baseStats: { hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40 },
    abilities: [{"id":"lightning-rod","name":"避雷针","nameEn":"Lightning Rod","isHidden":false},{"id":"solid-rock","name":"坚硬岩石","nameEn":"Solid Rock","isHidden":false},{"id":"reckless","name":"舍身","nameEn":"Reckless","isHidden":true}],
    moves: ["avalanche","blizzard","body-press","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","counter","crunch","curse","dig","double-edge","dragon-pulse","dragon-rush","dragon-tail","drill-run","earth-power","earthquake","endeavor","endure","facade","fire-blast","fire-fang","fire-punch","flamethrower","flash-cannon","fling","focus-blast","focus-punch","giga-impact","guard-split","hammer-arm","heat-crash","heavy-slam","helping-hand","high-horsepower","horn-drill","hydro-pump","hyper-beam","ice-beam","ice-fang","ice-punch","icy-wind","iron-defense","iron-head","iron-tail","mega-kick","megahorn","metal-burst","meteor-beam","mud-shot","mud-slap","outrage","payback","poison-jab","protect","rain-dance","rest","reversal","roar","rock-blast","rock-polish","rock-slide","rock-tomb","rock-wrecker","round","sandstorm","scary-face","scorching-sands","shadow-claw","sleep-talk","smack-down","smart-strike","snore","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","supercell-slam","superpower","surf","swords-dance","temper-flare","thief","thunder","thunder-fang","thunder-punch","thunderbolt","uproar"]
  },
  'leafeon': {
    id: 470, name: '叶伊布', nameEn: 'Leafeon',
    pinyin: 'yeyibu', pinyinAbbr: 'yyb',
    types: ["grass"],
    baseStats: { hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95 },
    abilities: [{"id":"leaf-guard","name":"叶子防守","nameEn":"Leaf Guard","isHidden":false},{"id":"chlorophyll","name":"叶绿素","nameEn":"Chlorophyll","isHidden":true}],
    moves: ["aerial-ace","alluring-voice","baby-doll-eyes","baton-pass","bite","body-slam","bullet-seed","calm-mind","charm","copycat","covet","curse","detect","dig","double-edge","endure","energy-ball","facade","fake-tears","flail","focus-energy","giga-drain","giga-impact","grass-knot","grassy-glide","helping-hand","hyper-beam","hyper-voice","knock-off","last-resort","leaf-blade","leaf-storm","leech-seed","mud-shot","mud-slap","protect","quick-attack","rain-dance","rest","roar","round","seed-bomb","shadow-ball","sleep-talk","snore","solar-beam","solar-blade","stored-power","substitute","sunny-day","swords-dance","synthesis","tickle","trailblaze","weather-ball","wish","x-scissor","yawn"]
  },
  'glaceon': {
    id: 471, name: '冰伊布', nameEn: 'Glaceon',
    pinyin: 'bingyibu', pinyinAbbr: 'byb',
    types: ["ice"],
    baseStats: { hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65 },
    abilities: [{"id":"snow-cloak","name":"雪隐","nameEn":"Snow Cloak","isHidden":false},{"id":"ice-body","name":"冰冻之躯","nameEn":"Ice Body","isHidden":true}],
    moves: ["alluring-voice","avalanche","baby-doll-eyes","baton-pass","bite","blizzard","body-slam","calm-mind","chilling-water","copycat","covet","curse","detect","dig","double-edge","endure","facade","fake-tears","flail","focus-energy","freeze-dry","frost-breath","giga-impact","gravity","haze","helping-hand","hyper-beam","hyper-voice","ice-beam","ice-fang","ice-shard","icicle-spear","icy-wind","last-resort","mirror-coat","mud-shot","mud-slap","protect","quick-attack","rain-dance","rest","roar","round","shadow-ball","sleep-talk","snore","snowscape","stored-power","substitute","sunny-day","tickle","trailblaze","triple-axel","water-pulse","weather-ball","wish","yawn"]
  },
  'gliscor': {
    id: 472, name: '天蝎王', nameEn: 'Gliscor',
    pinyin: 'tianxiewang', pinyinAbbr: 'txw',
    types: ["ground","flying"],
    baseStats: { hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95 },
    abilities: [{"id":"hyper-cutter","name":"怪力钳","nameEn":"Hyper Cutter","isHidden":false},{"id":"sand-veil","name":"沙隐","nameEn":"Sand Veil","isHidden":false},{"id":"poison-heal","name":"毒疗","nameEn":"Poison Heal","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","assurance","attract","baton-pass","breaking-swipe","brick-break","brutal-swing","bulldoze","counter","crabhammer","cross-poison","crunch","dark-pulse","dig","double-edge","dual-wingbeat","earth-power","earthquake","endure","facade","feint","fire-fang","fling","giga-impact","gunk-shot","high-horsepower","hyper-beam","ice-fang","iron-tail","knock-off","lunge","mud-shot","mud-slap","night-slash","payback","pin-missile","poison-jab","power-whip","protect","psychic-fangs","quick-attack","rain-dance","rest","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scale-shot","scary-face","screech","skitter-smack","sleep-talk","sludge-bomb","snore","spikes","stealth-rock","steel-wing","stone-edge","struggle-bug","substitute","sunny-day","swords-dance","tailwind","thief","throat-chop","thunder-fang","toxic","toxic-spikes","u-turn","venoshock","x-scissor"]
  },
  'gallade': {
    id: 475, name: '艾路雷朵', nameEn: 'Gallade',
    pinyin: 'ailuleiduo', pinyinAbbr: 'alld',
    types: ["psychic","fighting"],
    baseStats: { hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80 },
    abilities: [{"id":"steadfast","name":"不屈之心","nameEn":"Steadfast","isHidden":false},{"id":"sharpness","name":"锋锐","nameEn":"Sharpness","isHidden":false},{"id":"justified","name":"正义之心","nameEn":"Justified","isHidden":true}],
    forms: {"mega":{"name":"艾路雷朵-超级进化","nameEn":"Mega Gallade","types":["psychic","fighting"],"baseStats":{"hp":68,"atk":165,"def":95,"spa":65,"spd":115,"spe":110},"ability":{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus"}}},
    moves: ["aerial-ace","agility","air-slash","alluring-voice","aqua-cutter","aura-sphere","body-slam","brick-break","bulk-up","bulldoze","calm-mind","charge-beam","charm","close-combat","coaching","confuse-ray","dazzling-gleam","destiny-bond","disable","double-team","drain-punch","draining-kiss","earthquake","encore","endure","energy-ball","expanding-force","facade","feint","fire-punch","fling","focus-blast","focus-punch","future-sight","giga-impact","grass-knot","heal-pulse","helping-hand","hex","hyper-beam","hyper-voice","hypnosis","ice-punch","icy-wind","imprison","knock-off","leaf-blade","life-dew","light-screen","low-kick","low-sweep","magic-room","mean-look","mega-kick","memento","misty-terrain","mystical-fire","night-shade","night-slash","pain-split","poison-jab","protect","psych-up","psychic","psychic-terrain","psycho-cut","psyshock","quick-guard","rain-dance","reflect","rest","reversal","rock-slide","rock-tomb","round","sacred-sword","safeguard","shadow-ball","shadow-claw","shadow-sneak","skill-swap","sleep-talk","snore","solar-blade","stone-edge","stored-power","substitute","sunny-day","swords-dance","taunt","thief","throat-chop","thunder-punch","thunder-wave","thunderbolt","trick","trick-room","triple-axel","upper-hand","vacuum-wave","wide-guard","will-o-wisp","wonder-room","x-scissor","zen-headbutt"]
  },
  'froslass': {
    id: 478, name: '雪妖女', nameEn: 'Froslass',
    pinyin: 'xueyaonü', pinyinAbbr: 'xyn',
    types: ["ice","ghost"],
    baseStats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110 },
    abilities: [{"id":"snow-cloak","name":"雪隐","nameEn":"Snow Cloak","isHidden":false},{"id":"cursed-body","name":"诅咒之躯","nameEn":"Cursed Body","isHidden":true}],
    forms: {"mega":{"name":"Mega Froslass","nameEn":"Mega Froslass","types":["ice","ghost"],"baseStats":{"hp":70,"atk":80,"def":70,"spa":140,"spd":100,"spe":120},"ability":{"id":"snow-warning","name":"降雪","nameEn":"Snow Warning"}}},
    moves: ["aurora-veil","avalanche","bite","blizzard","block","body-slam","charm","chilling-water","confuse-ray","crunch","curse","destiny-bond","disable","double-team","draining-kiss","endure","facade","fake-tears","fling","frost-breath","giga-impact","haze","helping-hand","hex","hyper-beam","ice-beam","ice-fang","ice-punch","ice-shard","ice-spinner","icicle-crash","icicle-spear","icy-wind","imprison","light-screen","nasty-plot","night-shade","pain-split","payback","phantom-force","poltergeist","protect","psych-up","psychic","rain-dance","reflect","rest","round","safeguard","scary-face","shadow-ball","sleep-talk","snore","snowscape","spikes","spite","substitute","switcheroo","taunt","thunder","thunder-wave","thunderbolt","trailblaze","trick","triple-axel","water-pulse","weather-ball","will-o-wisp"]
  },
  'rotom': {
    id: 479, name: '洛托姆', nameEn: 'Rotom',
    pinyin: 'luotuomu', pinyinAbbr: 'ltm',
    types: ["electric","ghost"],
    baseStats: { hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    moves: ["charge","charge-beam","confuse-ray","dark-pulse","discharge","double-team","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","foul-play","helping-hand","hex","hyper-beam","light-screen","nasty-plot","night-shade","pain-split","poltergeist","protect","rain-dance","reflect","rest","rising-voltage","round","shadow-ball","sleep-talk","snore","spite","stored-power","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","trick","uproar","volt-switch","will-o-wisp"]
  },
  'heat-rotom': {
    id: 479, name: '加热洛托姆', nameEn: 'Heat Rotom',
    pinyin: 'jiareluotuomu', pinyinAbbr: 'jrltm',
    types: ["electric","fire"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    moves: ["charge","charge-beam","confuse-ray","dark-pulse","discharge","double-team","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","foul-play","helping-hand","hex","hyper-beam","light-screen","nasty-plot","night-shade","overheat","pain-split","poltergeist","protect","rain-dance","reflect","rest","rising-voltage","round","shadow-ball","sleep-talk","snore","spite","stored-power","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","trick","uproar","volt-switch","will-o-wisp"]
  },
  'wash-rotom': {
    id: 479, name: '清洗洛托姆', nameEn: 'Wash Rotom',
    pinyin: 'qingxiluotuomu', pinyinAbbr: 'qxltm',
    types: ["electric","water"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    moves: ["charge","charge-beam","confuse-ray","dark-pulse","discharge","double-team","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","foul-play","helping-hand","hex","hydro-pump","hyper-beam","light-screen","nasty-plot","night-shade","pain-split","poltergeist","protect","rain-dance","reflect","rest","rising-voltage","round","shadow-ball","sleep-talk","snore","spite","stored-power","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","trick","uproar","volt-switch","will-o-wisp"]
  },
  'frost-rotom': {
    id: 479, name: '结冰洛托姆', nameEn: 'Frost Rotom',
    pinyin: 'jiebingluotuomu', pinyinAbbr: 'jbltm',
    types: ["electric","ice"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    moves: ["blizzard","charge","charge-beam","confuse-ray","dark-pulse","discharge","double-team","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","foul-play","helping-hand","hex","hyper-beam","light-screen","nasty-plot","night-shade","pain-split","poltergeist","protect","rain-dance","reflect","rest","rising-voltage","round","shadow-ball","sleep-talk","snore","spite","stored-power","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","trick","uproar","volt-switch","will-o-wisp"]
  },
  'fan-rotom': {
    id: 479, name: '旋转洛托姆', nameEn: 'Fan Rotom',
    pinyin: 'xuanzhuanluotuomu', pinyinAbbr: 'xzltm',
    types: ["electric","flying"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    moves: ["air-slash","charge","charge-beam","confuse-ray","dark-pulse","discharge","double-team","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","foul-play","helping-hand","hex","hyper-beam","light-screen","nasty-plot","night-shade","pain-split","poltergeist","protect","rain-dance","reflect","rest","rising-voltage","round","shadow-ball","sleep-talk","snore","spite","stored-power","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","trick","uproar","volt-switch","will-o-wisp"]
  },
  'mow-rotom': {
    id: 479, name: '切割洛托姆', nameEn: 'Mow Rotom',
    pinyin: 'qiegeluotuomu', pinyinAbbr: 'qgltm',
    types: ["electric","grass"],
    baseStats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    moves: ["charge","charge-beam","confuse-ray","dark-pulse","discharge","double-team","eerie-impulse","electric-terrain","electro-ball","electroweb","endure","facade","foul-play","helping-hand","hex","hyper-beam","leaf-storm","light-screen","nasty-plot","night-shade","pain-split","poltergeist","protect","rain-dance","reflect","rest","rising-voltage","round","shadow-ball","sleep-talk","snore","spite","stored-power","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","trick","uproar","volt-switch","will-o-wisp"]
  },
  'serperior': {
    id: 497, name: '君主蛇', nameEn: 'Serperior',
    pinyin: 'junzhushe', pinyinAbbr: 'jzs',
    types: ["grass"],
    baseStats: { hp: 75, atk: 75, def: 95, spa: 75, spd: 95, spe: 113 },
    abilities: [{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":false},{"id":"contrary","name":"唱反调","nameEn":"Contrary","isHidden":true}],
    moves: ["aerial-ace","attract","body-slam","breaking-swipe","brutal-swing","bullet-seed","calm-mind","coil","double-edge","dragon-pulse","dragon-tail","endure","energy-ball","facade","frenzy-plant","gastro-acid","giga-drain","giga-impact","glare","grass-knot","grassy-glide","grassy-terrain","growth","helping-hand","hyper-beam","iron-tail","knock-off","leaf-blade","leaf-storm","leech-seed","light-screen","mean-look","mirror-coat","outrage","petal-blizzard","protect","reflect","rest","round","scale-shot","scary-face","seed-bomb","sleep-talk","snore","solar-beam","substitute","sunny-day","sweet-scent","swords-dance","synthesis","taunt","trailblaze","wrap"]
  },
  'emboar': {
    id: 500, name: '炎武王', nameEn: 'Emboar',
    pinyin: 'yanwuwang', pinyinAbbr: 'yww',
    types: ["fire","fighting"],
    baseStats: { hp: 110, atk: 123, def: 65, spa: 100, spd: 65, spe: 65 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"reckless","name":"舍身","nameEn":"Reckless","isHidden":true}],
    forms: {"mega":{"name":"Mega Emboar","nameEn":"Mega Emboar","types":["fire","fighting"],"baseStats":{"hp":110,"atk":148,"def":75,"spa":110,"spd":110,"spe":75},"ability":{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker"}}},
    moves: ["assurance","blast-burn","body-press","body-slam","brick-break","bulk-up","bulldoze","burn-up","close-combat","coaching","curse","dig","double-edge","drain-punch","earthquake","endeavor","endure","facade","fire-blast","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","fling","focus-blast","focus-energy","focus-punch","giga-impact","grass-knot","gyro-ball","hammer-arm","hard-press","head-smash","heat-crash","heat-wave","heavy-slam","helping-hand","high-horsepower","hyper-beam","iron-head","iron-tail","knock-off","low-kick","low-sweep","mud-slap","overheat","poison-jab","protect","rest","reversal","roar","rock-slide","rock-tomb","round","scald","scary-face","scorching-sands","sleep-talk","smack-down","snore","solar-beam","solar-blade","stomping-tantrum","stone-edge","storm-throw","substitute","sucker-punch","sunny-day","superpower","taunt","temper-flare","thrash","thunder-punch","trailblaze","wild-charge","will-o-wisp","yawn","zen-headbutt"]
  },
  'samurott': {
    id: 503, name: '大剑鬼', nameEn: 'Samurott',
    pinyin: 'dajiangui', pinyinAbbr: 'djg',
    types: ["water"],
    baseStats: { hp: 95, atk: 100, def: 85, spa: 108, spd: 70, spe: 70 },
    abilities: [{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":false},{"id":"shell-armor","name":"硬壳盔甲","nameEn":"Shell Armor","isHidden":true}],
    moves: ["aerial-ace","air-slash","aqua-cutter","aqua-jet","aqua-tail","assurance","avalanche","blizzard","body-slam","brick-break","bulldoze","chilling-water","copycat","detect","dig","dive","drill-run","encore","endure","facade","fling","flip-turn","focus-energy","giga-impact","grass-knot","helping-hand","hydro-cannon","hydro-pump","hyper-beam","ice-beam","icy-wind","iron-tail","knock-off","liquidation","megahorn","night-slash","protect","rain-dance","razor-shell","rest","round","sacred-sword","scary-face","screech","sleep-talk","smart-strike","snore","snowscape","soak","substitute","superpower","surf","swords-dance","taunt","thief","upper-hand","vacuum-wave","water-pulse","waterfall","whirlpool","x-scissor"]
  },
  'hisuian-samurott': {
    id: 503, name: '大剑鬼-洗翠', nameEn: 'Hisuian Samurott',
    pinyin: 'dajiangui-xicui', pinyinAbbr: 'djg-xc',
    types: ["water","dark"],
    baseStats: { hp: 90, atk: 108, def: 80, spa: 100, spd: 65, spe: 85 },
    abilities: [{"id":"sharpness","name":"锋锐","nameEn":"Sharpness","isHidden":false},{"id":"shell-armor","name":"硬壳盔甲","nameEn":"Shell Armor","isHidden":true}],
    moves: ["aerial-ace","air-slash","aqua-cutter","aqua-jet","aqua-tail","assurance","avalanche","blizzard","body-slam","brick-break","bulldoze","ceaseless-edge","chilling-water","copycat","dark-pulse","detect","dig","dive","drill-run","encore","endure","facade","fling","flip-turn","focus-energy","giga-impact","grass-knot","helping-hand","hydro-cannon","hydro-pump","hyper-beam","ice-beam","icy-wind","iron-tail","knock-off","lash-out","liquidation","megahorn","night-slash","protect","rain-dance","razor-shell","rest","round","sacred-sword","scary-face","screech","sleep-talk","smart-strike","snarl","snore","snowscape","soak","substitute","sucker-punch","superpower","surf","swords-dance","taunt","thief","throat-chop","upper-hand","vacuum-wave","water-pulse","waterfall","whirlpool","x-scissor"]
  },
  'excadrill': {
    id: 530, name: '龙头地鼠', nameEn: 'Excadrill',
    pinyin: 'longtoudishu', pinyinAbbr: 'ltds',
    types: ["ground","steel"],
    baseStats: { hp: 110, atk: 135, def: 60, spa: 50, spd: 65, spe: 88 },
    abilities: [{"id":"sand-rush","name":"泼沙","nameEn":"Sand Rush","isHidden":false},{"id":"sand-force","name":"沙之力","nameEn":"Sand Force","isHidden":false},{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":true}],
    forms: {"mega":{"name":"Mega Excadrill","nameEn":"Mega Excadrill","types":["ground","steel"],"baseStats":{"hp":110,"atk":165,"def":100,"spa":65,"spd":65,"spe":103},"ability":{"id":"piercing-drill","name":"Piercing Drill","nameEn":"Piercing Drill"}}},
    moves: ["aerial-ace","body-slam","brick-break","brutal-swing","bulldoze","crush-claw","curse","dig","double-edge","drill-run","earth-power","earthquake","endure","facade","fissure","fling","focus-blast","giga-impact","helping-hand","high-horsepower","horn-drill","hyper-beam","iron-defense","iron-head","megahorn","metal-sound","mud-shot","mud-slap","poison-jab","protect","rapid-spin","rest","rock-blast","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scary-face","scorching-sands","shadow-claw","sleep-talk","sludge-bomb","smart-strike","snore","stealth-rock","steel-beam","stomping-tantrum","substitute","sunny-day","swords-dance","throat-chop","x-scissor"]
  },
  'audino': {
    id: 531, name: '差不多娃娃', nameEn: 'Audino',
    pinyin: 'chabuduowawa', pinyinAbbr: 'cbdww',
    types: ["normal"],
    baseStats: { hp: 103, atk: 60, def: 86, spa: 60, spd: 86, spe: 50 },
    abilities: [{"id":"healer","name":"治愈之心","nameEn":"Healer","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":false},{"id":"klutz","name":"笨拙","nameEn":"Klutz","isHidden":true}],
    forms: {"mega":{"name":"差不多娃娃-超级进化","nameEn":"Mega Audino","types":["normal","fairy"],"baseStats":{"hp":103,"atk":60,"def":126,"spa":80,"spd":126,"spe":50},"ability":{"id":"healer","name":"治愈之心","nameEn":"Healer"}}},
    moves: ["after-you","ally-switch","amnesia","attract","baby-doll-eyes","blizzard","body-slam","calm-mind","chilling-water","dazzling-gleam","dig","double-edge","drain-punch","draining-kiss","encore","endure","entrainment","facade","fire-blast","fire-punch","flamethrower","fling","giga-impact","grass-knot","heal-pulse","healing-wish","helping-hand","hyper-beam","hyper-voice","ice-beam","ice-punch","icy-wind","iron-tail","last-resort","life-dew","light-screen","low-kick","mega-kick","misty-terrain","protect","psychic","psyshock","rain-dance","reflect","rest","round","safeguard","shadow-ball","simple-beam","skill-swap","sleep-talk","snore","solar-beam","stomping-tantrum","substitute","sunny-day","surf","sweet-kiss","throat-chop","thunder","thunder-punch","thunder-wave","thunderbolt","trick-room","uproar","wild-charge","wish","yawn","zen-headbutt"]
  },
  'conkeldurr': {
    id: 534, name: '修建老匠', nameEn: 'Conkeldurr',
    pinyin: 'xiujianlaojiang', pinyinAbbr: 'xjlj',
    types: ["fighting"],
    baseStats: { hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45 },
    abilities: [{"id":"guts","name":"毅力","nameEn":"Guts","isHidden":false},{"id":"sheer-force","name":"强行","nameEn":"Sheer Force","isHidden":false},{"id":"iron-fist","name":"铁拳","nameEn":"Iron Fist","isHidden":true}],
    moves: ["attract","body-slam","brick-break","brutal-swing","bulk-up","bulldoze","close-combat","coaching","counter","curse","defog","detect","dig","double-edge","drain-punch","dynamic-punch","earthquake","endure","facade","fire-punch","fling","focus-blast","focus-energy","focus-punch","giga-impact","grass-knot","hammer-arm","hard-press","helping-hand","high-horsepower","hyper-beam","ice-punch","knock-off","low-kick","low-sweep","mach-punch","mega-kick","payback","poison-jab","protect","rain-dance","rest","reversal","rock-blast","rock-slide","rock-tomb","round","scary-face","sleep-talk","smack-down","snore","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","taunt","thief","thunder-punch","upper-hand","wide-guard"]
  },
  'whimsicott': {
    id: 547, name: '风妖精', nameEn: 'Whimsicott',
    pinyin: 'fengyaojing', pinyinAbbr: 'fyj',
    types: ["grass","fairy"],
    baseStats: { hp: 60, atk: 67, def: 85, spa: 77, spd: 75, spe: 116 },
    abilities: [{"id":"prankster","name":"恶作剧之心","nameEn":"Prankster","isHidden":false},{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator","isHidden":false},{"id":"chlorophyll","name":"叶绿素","nameEn":"Chlorophyll","isHidden":true}],
    moves: ["attract","beat-up","charm","cotton-guard","cotton-spore","dazzling-gleam","encore","endeavor","endure","energy-ball","facade","fake-tears","fling","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","helping-hand","hurricane","hyper-beam","leech-seed","light-screen","memento","misty-terrain","moonblast","play-rough","poison-powder","protect","psychic","rest","round","safeguard","seed-bomb","shadow-ball","sleep-talk","snore","solar-beam","stun-spore","substitute","sunny-day","switcheroo","tailwind","taunt","thief","tickle","trick-room","u-turn","worry-seed"]
  },
  'krookodile': {
    id: 553, name: '流氓鳄', nameEn: 'Krookodile',
    pinyin: 'liumange', pinyinAbbr: 'lme',
    types: ["ground","dark"],
    baseStats: { hp: 95, atk: 117, def: 80, spa: 65, spd: 70, spe: 92 },
    abilities: [{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":false},{"id":"moxie","name":"自信过度","nameEn":"Moxie","isHidden":false},{"id":"anger-point","name":"愤怒穴位","nameEn":"Anger Point","isHidden":true}],
    moves: ["aerial-ace","aqua-tail","assurance","beat-up","bite","body-slam","breaking-swipe","brick-break","brutal-swing","bulk-up","bulldoze","close-combat","counter","crunch","curse","dark-pulse","dig","double-edge","dragon-claw","dragon-pulse","dragon-tail","earth-power","earthquake","endeavor","endure","facade","fire-fang","fissure","fling","focus-blast","focus-energy","focus-punch","foul-play","giga-impact","grass-knot","gunk-shot","helping-hand","high-horsepower","hyper-beam","iron-head","iron-tail","knock-off","lash-out","low-kick","low-sweep","mega-kick","mud-shot","mud-slap","outrage","payback","power-trip","protect","rest","roar","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scale-shot","scary-face","scorching-sands","shadow-claw","skitter-smack","sleep-talk","sludge-bomb","smack-down","snarl","snore","spite","stealth-rock","stomping-tantrum","stone-edge","substitute","superpower","swagger","taunt","thief","thrash","throat-chop","thunder-fang","torment","uproar"]
  },
  'garbodor': {
    id: 569, name: '灰尘山', nameEn: 'Garbodor',
    pinyin: 'huichenshan', pinyinAbbr: 'hcs',
    types: ["poison"],
    baseStats: { hp: 80, atk: 95, def: 82, spa: 60, spd: 82, spe: 75 },
    abilities: [{"id":"stench","name":"恶臭","nameEn":"Stench","isHidden":false},{"id":"weak-armor","name":"碎裂铠甲","nameEn":"Weak Armor","isHidden":false},{"id":"aftermath","name":"引爆","nameEn":"Aftermath","isHidden":true}],
    moves: ["acid-spray","amnesia","ancient-power","attract","belch","body-press","body-slam","clear-smog","corrosive-gas","cross-poison","curse","dark-pulse","drain-punch","endure","explosion","facade","fling","focus-blast","giga-drain","giga-impact","gunk-shot","haze","hyper-beam","mud-shot","pain-split","payback","poison-jab","protect","psychic","rain-dance","recycle","rest","rock-blast","round","screech","seed-bomb","self-destruct","sleep-talk","sludge-bomb","sludge-wave","snore","solar-beam","spikes","stockpile","stomping-tantrum","substitute","sunny-day","swallow","thief","thunderbolt","toxic","toxic-spikes","venoshock"]
  },
  'zoroark': {
    id: 571, name: '索罗亚克', nameEn: 'Zoroark',
    pinyin: 'suoluoyake', pinyinAbbr: 'slyk',
    types: ["dark"],
    baseStats: { hp: 60, atk: 105, def: 60, spa: 120, spd: 60, spe: 105 },
    abilities: [{"id":"illusion","name":"幻觉","nameEn":"Illusion","isHidden":false}],
    moves: ["aerial-ace","agility","assurance","body-slam","bounce","brick-break","burning-jealousy","calm-mind","confuse-ray","counter","crunch","dark-pulse","detect","dig","encore","endure","extrasensory","facade","fake-tears","flamethrower","fling","focus-blast","foul-play","giga-impact","grass-knot","helping-hand","hex","hyper-beam","hyper-voice","imprison","knock-off","lash-out","low-kick","low-sweep","mega-kick","memento","nasty-plot","night-daze","night-shade","night-slash","pain-split","payback","protect","psych-up","psychic","rain-dance","rest","roar","round","scary-face","shadow-ball","shadow-claw","skitter-smack","sleep-talk","sludge-bomb","snarl","snore","spite","substitute","sucker-punch","sunny-day","swords-dance","taunt","thief","throat-chop","torment","toxic","trick","u-turn","uproar"]
  },
  'hisuian-zoroark': {
    id: 571, name: '索罗亚克-洗翠', nameEn: 'Hisuian Zoroark',
    pinyin: 'suoluoyake-xicui', pinyinAbbr: 'slyk-xc',
    types: ["normal","ghost"],
    baseStats: { hp: 55, atk: 100, def: 60, spa: 125, spd: 60, spe: 110 },
    abilities: [{"id":"illusion","name":"幻觉","nameEn":"Illusion","isHidden":false}],
    moves: ["aerial-ace","agility","assurance","bitter-malice","body-slam","bounce","brick-break","burning-jealousy","calm-mind","comeuppance","confuse-ray","crunch","curse","dark-pulse","detect","dig","endure","extrasensory","facade","fake-tears","flamethrower","fling","focus-blast","focus-punch","foul-play","giga-impact","grass-knot","helping-hand","hex","hyper-beam","hyper-voice","icy-wind","imprison","knock-off","lash-out","low-kick","low-sweep","mega-kick","memento","nasty-plot","night-shade","pain-split","payback","phantom-force","poltergeist","protect","psych-up","psychic","rain-dance","rest","roar","round","scary-face","shadow-ball","shadow-claw","shadow-sneak","skitter-smack","sleep-talk","sludge-bomb","snarl","snore","snowscape","spite","substitute","swords-dance","taunt","thief","throat-chop","torment","trick","u-turn","uproar","will-o-wisp"]
  },
  'vanilluxe': {
    id: 584, name: '双倍多多冰', nameEn: 'Vanilluxe',
    pinyin: 'shuangbeiduoduobing', pinyinAbbr: 'sbddb',
    types: ["ice"],
    baseStats: { hp: 71, atk: 95, def: 85, spa: 110, spd: 95, spe: 79 },
    abilities: [{"id":"ice-body","name":"冰冻之躯","nameEn":"Ice Body","isHidden":false},{"id":"snow-warning","name":"降雪","nameEn":"Snow Warning","isHidden":false},{"id":"weak-armor","name":"碎裂铠甲","nameEn":"Weak Armor","isHidden":true}],
    moves: ["acid-armor","ally-switch","attract","aurora-veil","avalanche","beat-up","blizzard","chilling-water","endure","explosion","facade","flash-cannon","freeze-dry","frost-breath","giga-impact","hyper-beam","hyper-voice","ice-beam","ice-shard","ice-spinner","icicle-crash","icicle-spear","icy-wind","imprison","iron-defense","light-screen","magnet-rise","mirror-coat","protect","rain-dance","rest","round","self-destruct","sheer-cold","sleep-talk","snore","snowscape","substitute","taunt","uproar","weather-ball"]
  },
  'emolga': {
    id: 587, name: '电飞鼠', nameEn: 'Emolga',
    pinyin: 'dianfeishu', pinyinAbbr: 'dfs',
    types: ["electric","flying"],
    baseStats: { hp: 55, atk: 75, def: 60, spa: 75, spd: 60, spe: 103 },
    abilities: [{"id":"static","name":"静电","nameEn":"Static","isHidden":false},{"id":"motor-drive","name":"电气引擎","nameEn":"Motor Drive","isHidden":true}],
    moves: ["acrobatics","agility","air-slash","attract","baton-pass","charge","charge-beam","charm","covet","defog","discharge","double-team","dual-wingbeat","eerie-impulse","electro-ball","electroweb","encore","endure","energy-ball","facade","fling","helping-hand","iron-tail","light-screen","nuzzle","pounce","protect","quick-attack","rain-dance","rest","rising-voltage","roost","round","sleep-talk","snore","solar-beam","speed-swap","substitute","taunt","thunder","thunder-wave","thunderbolt","tickle","u-turn","volt-switch","wild-charge"]
  },
  'stunfisk': {
    id: 618, name: '泥巴鱼', nameEn: 'Stunfisk',
    pinyin: 'nibayu', pinyinAbbr: 'nby',
    types: ["ground","electric"],
    baseStats: { hp: 109, atk: 66, def: 84, spa: 81, spd: 99, spe: 32 },
    abilities: [{"id":"static","name":"静电","nameEn":"Static","isHidden":false},{"id":"limber","name":"柔软","nameEn":"Limber","isHidden":false},{"id":"sand-veil","name":"沙隐","nameEn":"Sand Veil","isHidden":true}],
    moves: ["attract","bounce","bulldoze","charge","curse","dig","discharge","earth-power","earthquake","eerie-impulse","electric-terrain","electroweb","endure","facade","fissure","flail","foul-play","lash-out","mud-shot","mud-slap","muddy-water","pain-split","payback","protect","rain-dance","reflect-type","rest","rock-slide","rock-tomb","round","sandstorm","scald","sleep-talk","sludge-bomb","sludge-wave","snore","spite","stealth-rock","stomping-tantrum","stone-edge","substitute","sucker-punch","surf","thunder","thunder-wave","thunderbolt","uproar","yawn"]
  },
  'galarian-stunfisk': {
    id: 618, name: '泥巴鱼-伽勒尔', nameEn: 'Galarian Stunfisk',
    pinyin: 'nibayu-jialeer', pinyinAbbr: 'nby-jle',
    types: ["ground","steel"],
    baseStats: { hp: 109, atk: 81, def: 99, spa: 66, spd: 84, spe: 32 },
    abilities: [{"id":"mimicry","name":"拟态","nameEn":"Mimicry","isHidden":false}],
    moves: ["attract","bind","bounce","bulldoze","counter","crunch","curse","dig","earth-power","earthquake","endure","facade","fissure","flail","flash-cannon","foul-play","ice-fang","iron-defense","lash-out","metal-sound","mud-shot","mud-slap","muddy-water","pain-split","payback","protect","rain-dance","reflect-type","rest","rock-slide","rock-tomb","round","sandstorm","scald","screech","sleep-talk","sludge-bomb","sludge-wave","snap-trap","snore","spite","stealth-rock","steel-beam","stomping-tantrum","stone-edge","substitute","sucker-punch","surf","terrain-pulse","thunder-wave","uproar","yawn"]
  },
  'golurk': {
    id: 623, name: '泥偶巨人', nameEn: 'Golurk',
    pinyin: 'nioujuren', pinyinAbbr: 'nojr',
    types: ["ground","ghost"],
    baseStats: { hp: 89, atk: 124, def: 80, spa: 55, spd: 80, spe: 55 },
    abilities: [{"id":"iron-fist","name":"铁拳","nameEn":"Iron Fist","isHidden":false},{"id":"klutz","name":"笨拙","nameEn":"Klutz","isHidden":false},{"id":"no-guard","name":"无防守","nameEn":"No Guard","isHidden":true}],
    forms: {"mega":{"name":"Mega Golurk","nameEn":"Mega Golurk","types":["ground","ghost"],"baseStats":{"hp":89,"atk":159,"def":105,"spa":70,"spd":105,"spe":55},"ability":{"id":"unseen-fist","name":"无形拳","nameEn":"Unseen Fist"}}},
    moves: ["body-press","body-slam","brick-break","bulldoze","charge-beam","close-combat","confuse-ray","curse","dig","double-edge","drain-punch","dynamic-punch","earth-power","earthquake","endure","facade","fire-punch","flash-cannon","fling","fly","focus-blast","focus-punch","giga-impact","grass-knot","gravity","gyro-ball","hammer-arm","hard-press","headlong-rush","heat-crash","heavy-slam","helping-hand","hex","high-horsepower","hyper-beam","ice-beam","ice-punch","icy-wind","imprison","iron-defense","iron-head","knock-off","low-kick","low-sweep","mega-kick","mud-slap","night-shade","phantom-force","poltergeist","protect","psych-up","psychic","rain-dance","reflect","rest","rock-slide","rock-tomb","round","sandstorm","scorching-sands","self-destruct","shadow-ball","shadow-punch","sleep-talk","smack-down","snore","solar-beam","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","thief","thunder-punch","thunderbolt","trick","zen-headbutt"]
  },
  'hydreigon': {
    id: 635, name: '三首恶龙', nameEn: 'Hydreigon',
    pinyin: 'sanshouelong', pinyinAbbr: 'ssel',
    types: ["dark","dragon"],
    baseStats: { hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98 },
    abilities: [{"id":"levitate","name":"飘浮","nameEn":"Levitate","isHidden":false}],
    moves: ["acrobatics","assurance","beat-up","belch","bite","body-slam","breaking-swipe","brutal-swing","bulldoze","crunch","dark-pulse","double-hit","draco-meteor","dragon-cheer","dragon-dance","dragon-pulse","dragon-rush","dragon-tail","dual-wingbeat","earth-power","earthquake","endure","facade","fire-blast","fire-fang","fire-spin","flamethrower","flash-cannon","fly","focus-blast","focus-energy","giga-impact","head-smash","heat-wave","helping-hand","hydro-pump","hyper-beam","hyper-voice","ice-fang","iron-tail","lash-out","nasty-plot","outrage","payback","protect","psych-up","rain-dance","reflect","rest","roar","rock-slide","rock-tomb","round","scale-shot","scary-face","screech","sleep-talk","snarl","snore","spite","stealth-rock","steel-wing","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","surf","tailwind","taunt","thief","throat-chop","thunder-fang","thunder-wave","tri-attack","u-turn","uproar","zen-headbutt"]
  },
  'volcarona': {
    id: 637, name: '火神蛾', nameEn: 'Volcarona',
    pinyin: 'huoshene', pinyinAbbr: 'hse',
    types: ["bug","fire"],
    baseStats: { hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100 },
    abilities: [{"id":"flame-body","name":"火焰之躯","nameEn":"Flame Body","isHidden":false},{"id":"swarm","name":"虫之预感","nameEn":"Swarm","isHidden":true}],
    moves: ["acrobatics","air-cutter","air-slash","amnesia","body-slam","bug-bite","bug-buzz","calm-mind","double-edge","dual-wingbeat","endure","facade","fiery-dance","fire-blast","fire-spin","flame-charge","flamethrower","flare-blitz","fly","giga-drain","giga-impact","heat-wave","hurricane","hyper-beam","leech-life","light-screen","lunge","morning-sun","mystical-fire","overheat","poison-jab","pounce","protect","psychic","quiver-dance","rage-powder","rain-dance","rest","round","safeguard","screech","skitter-smack","sleep-talk","snore","solar-beam","string-shot","struggle-bug","substitute","sunny-day","tailwind","thrash","trailblaze","u-turn","whirlwind","wild-charge","will-o-wisp","zen-headbutt"]
  },
  'chesnaught': {
    id: 652, name: '布里卡隆', nameEn: 'Chesnaught',
    pinyin: 'bulikalong', pinyinAbbr: 'blkl',
    types: ["grass","fighting"],
    baseStats: { hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 64 },
    abilities: [{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":false},{"id":"bulletproof","name":"防弹","nameEn":"Bulletproof","isHidden":true}],
    forms: {"mega":{"name":"Mega Chesnaught","nameEn":"Mega Chesnaught","types":["grass","fighting"],"baseStats":{"hp":88,"atk":137,"def":172,"spa":74,"spd":115,"spe":44},"ability":{"id":"bulletproof","name":"防弹","nameEn":"Bulletproof"}}},
    moves: ["aerial-ace","belly-drum","bite","body-press","body-slam","brick-break","bulk-up","bulldoze","bullet-seed","close-combat","coaching","crunch","curse","dig","double-edge","dragon-claw","drain-punch","earthquake","endeavor","endure","energy-ball","facade","feint","fling","focus-blast","focus-punch","frenzy-plant","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","gyro-ball","hammer-arm","helping-hand","high-horsepower","hyper-beam","iron-defense","iron-head","iron-tail","knock-off","leaf-storm","leech-seed","low-kick","low-sweep","mud-shot","mud-slap","pain-split","payback","pin-missile","poison-jab","protect","quick-guard","rain-dance","reflect","rest","reversal","roar","rock-slide","rock-tomb","round","scary-face","seed-bomb","shadow-claw","sleep-talk","sludge-bomb","smack-down","snore","solar-beam","spikes","spiky-shield","steel-roller","stomping-tantrum","stone-edge","substitute","sunny-day","super-fang","superpower","swords-dance","synthesis","taunt","thunder-punch","trailblaze","wide-guard","wood-hammer","zen-headbutt"]
  },
  'delphox': {
    id: 655, name: '妖火红狐', nameEn: 'Delphox',
    pinyin: 'yaohuohonghu', pinyinAbbr: 'yhhh',
    types: ["fire","psychic"],
    baseStats: { hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"magician","name":"魔术师","nameEn":"Magician","isHidden":true}],
    forms: {"mega":{"name":"Mega Delphox","nameEn":"Mega Delphox","types":["fire","psychic"],"baseStats":{"hp":75,"atk":69,"def":72,"spa":159,"spd":125,"spe":134},"ability":{"id":"levitate","name":"飘浮","nameEn":"Levitate"}}},
    moves: ["agility","blast-burn","burning-jealousy","calm-mind","charm","confuse-ray","copycat","dazzling-gleam","double-team","encore","endure","expanding-force","facade","fire-blast","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","focus-blast","foul-play","future-sight","giga-impact","grass-knot","heat-wave","helping-hand","hex","howl","hyper-beam","hyper-voice","hypnosis","imprison","iron-tail","light-screen","low-kick","magic-room","mud-shot","mud-slap","mystical-fire","nasty-plot","night-shade","overheat","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","rain-dance","reflect","rest","role-play","round","safeguard","scorching-sands","shadow-ball","skill-swap","sleep-talk","snore","solar-beam","stored-power","substitute","sunny-day","switcheroo","thief","thunder-punch","trick","trick-room","will-o-wisp","wish","wonder-room","zen-headbutt"]
  },
  'greninja': {
    id: 658, name: '甲贺忍蛙', nameEn: 'Greninja',
    pinyin: 'jiaherenwa', pinyinAbbr: 'jhrw',
    types: ["water","dark"],
    baseStats: { hp: 72, atk: 95, def: 67, spa: 103, spd: 71, spe: 122 },
    abilities: [{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":false},{"id":"protean","name":"变幻自如","nameEn":"Protean","isHidden":true}],
    forms: {"mega":{"name":"Mega Greninja","nameEn":"Mega Greninja","types":["water","dark"],"baseStats":{"hp":72,"atk":125,"def":77,"spa":133,"spd":81,"spe":142},"ability":{"id":"protean","name":"变幻自如","nameEn":"Protean"}}},
    moves: ["acrobatics","aerial-ace","blizzard","bounce","brick-break","brutal-swing","chilling-water","counter","dark-pulse","dig","dive","double-team","endure","extrasensory","facade","fling","flip-turn","giga-impact","grass-knot","gunk-shot","haze","helping-hand","hydro-cannon","hydro-pump","hyper-beam","ice-beam","ice-punch","icy-wind","liquidation","low-kick","low-sweep","mud-shot","mud-slap","night-slash","protect","quick-attack","rain-dance","rest","rock-slide","rock-tomb","role-play","round","shadow-sneak","skitter-smack","sleep-talk","sludge-wave","smack-down","snore","snowscape","spikes","substitute","surf","switcheroo","swords-dance","taunt","thief","toxic-spikes","trailblaze","u-turn","upper-hand","water-pulse","water-shuriken","waterfall","weather-ball"]
  },
  'diggersby': {
    id: 660, name: '掘地兔', nameEn: 'Diggersby',
    pinyin: 'jueditu', pinyinAbbr: 'jdt',
    types: ["normal","ground"],
    baseStats: { hp: 85, atk: 56, def: 77, spa: 50, spd: 77, spe: 78 },
    abilities: [{"id":"pickup","name":"捡拾","nameEn":"Pickup","isHidden":false},{"id":"cheek-pouch","name":"颊囊","nameEn":"Cheek Pouch","isHidden":false},{"id":"huge-power","name":"大力士","nameEn":"Huge Power","isHidden":true}],
    moves: ["agility","attract","body-slam","bounce","brick-break","brutal-swing","bulk-up","bulldoze","dig","earth-power","earthquake","endure","facade","fire-punch","fissure","flail","fling","foul-play","giga-impact","grass-knot","gunk-shot","hammer-arm","high-horsepower","hyper-beam","ice-punch","iron-head","iron-tail","low-kick","mega-kick","mud-shot","mud-slap","payback","protect","quick-attack","rest","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scorching-sands","sleep-talk","sludge-bomb","snore","spikes","stomping-tantrum","stone-edge","substitute","super-fang","superpower","surf","swords-dance","thief","thunder-punch","trailblaze","u-turn","uproar","wild-charge"]
  },
  'talonflame': {
    id: 663, name: '烈箭鹰', nameEn: 'Talonflame',
    pinyin: 'liejianying', pinyinAbbr: 'ljy',
    types: ["fire","flying"],
    baseStats: { hp: 78, atk: 81, def: 71, spa: 74, spd: 69, spe: 126 },
    abilities: [{"id":"flame-body","name":"火焰之躯","nameEn":"Flame Body","isHidden":false},{"id":"gale-wings","name":"疾风之翼","nameEn":"Gale Wings","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","air-cutter","air-slash","blaze-kick","brave-bird","bulk-up","defog","double-edge","dual-wingbeat","endure","facade","feather-dance","feint","fire-blast","fire-spin","flail","flame-charge","flamethrower","flare-blitz","fly","giga-impact","heat-wave","hurricane","hyper-beam","overheat","protect","quick-attack","quick-guard","rain-dance","rest","roost","round","sky-attack","sleep-talk","snore","solar-beam","steel-wing","substitute","sunny-day","swords-dance","tailwind","taunt","temper-flare","thief","u-turn","upper-hand","whirlwind","will-o-wisp"]
  },
  'vivillon': {
    id: 666, name: '彩粉蝶', nameEn: 'Vivillon',
    pinyin: 'caifendie', pinyinAbbr: 'cfd',
    types: ["bug","flying"],
    baseStats: { hp: 80, atk: 52, def: 50, spa: 90, spd: 50, spe: 89 },
    abilities: [{"id":"shield-dust","name":"鳞粉","nameEn":"Shield Dust","isHidden":false},{"id":"compound-eyes","name":"复眼","nameEn":"Compound Eyes","isHidden":false},{"id":"friend-guard","name":"友情防守","nameEn":"Friend Guard","isHidden":true}],
    moves: ["acrobatics","air-cutter","air-slash","bug-bite","bug-buzz","calm-mind","confuse-ray","draining-kiss","endure","energy-ball","facade","giga-drain","giga-impact","hurricane","hyper-beam","iron-defense","light-screen","poison-powder","pollen-puff","pounce","protect","psychic","quiver-dance","rage-powder","rain-dance","rest","round","safeguard","skitter-smack","sleep-powder","sleep-talk","snore","solar-beam","string-shot","struggle-bug","stun-spore","substitute","sunny-day","tailwind","thief","u-turn","weather-ball","whirlwind"]
  },
  'furfrou': {
    id: 676, name: '多丽米亚', nameEn: 'Furfrou',
    pinyin: 'duolimiya', pinyinAbbr: 'dlmy',
    types: ["normal"],
    baseStats: { hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102 },
    abilities: [{"id":"fur-coat","name":"毛皮大衣","nameEn":"Fur Coat","isHidden":false}],
    moves: ["attract","baby-doll-eyes","bite","charm","cotton-guard","crunch","dark-pulse","dig","double-edge","endeavor","endure","facade","fire-fang","giga-impact","grass-knot","helping-hand","hyper-voice","ice-fang","iron-tail","last-resort","protect","psychic-fangs","rain-dance","rest","roar","round","sleep-talk","snarl","snore","substitute","sucker-punch","sunny-day","surf","thunder-fang","thunder-wave","trailblaze","u-turn","uproar","wild-charge","zen-headbutt"]
  },
  'meowstic-m': {
    id: 678, name: '超能妙喵', nameEn: 'Meowstic-M',
    pinyin: 'chaonengmiaomiao', pinyinAbbr: 'cnmm',
    types: ["psychic"],
    baseStats: { hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator","isHidden":false},{"id":"prankster","name":"恶作剧之心","nameEn":"Prankster","isHidden":true}],
    forms: {"mega-meowstic":{"name":"Mega Meowstic","nameEn":"Mega Meowstic","types":["psychic"],"baseStats":{"hp":74,"atk":48,"def":76,"spa":143,"spd":101,"spe":124},"ability":{"id":"trace","name":"复制","nameEn":"Trace"}}},
    moves: ["alluring-voice","baton-pass","calm-mind","charge-beam","charm","covet","dark-pulse","dig","endure","energy-ball","expanding-force","facade","fake-out","fake-tears","giga-impact","gravity","helping-hand","hyper-beam","imprison","iron-tail","light-screen","magic-room","mean-look","misty-terrain","nasty-plot","payback","play-rough","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","quick-guard","rain-dance","reflect","rest","role-play","round","safeguard","shadow-ball","skill-swap","sleep-talk","snore","stored-power","substitute","sucker-punch","sunny-day","tail-slap","thunder-wave","thunderbolt","tickle","trailblaze","trick","trick-room","wish","wonder-room","yawn","zen-headbutt"]
  },
  'meowstic-f': {
    id: 678, name: '超能妙喵-雌性的样子', nameEn: 'Meowstic-F',
    pinyin: 'chaonengmiaomiao-cixingdeyangzi', pinyinAbbr: 'cnmm-cxdyz',
    types: ["psychic"],
    baseStats: { hp: 74, atk: 48, def: 76, spa: 83, spd: 81, spe: 104 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator","isHidden":false},{"id":"competitive","name":"好胜","nameEn":"Competitive","isHidden":true}],
    forms: {"mega-meowstic":{"name":"Mega Meowstic","nameEn":"Mega Meowstic","types":["psychic"],"baseStats":{"hp":74,"atk":48,"def":76,"spa":143,"spd":101,"spe":124},"ability":{"id":"trace","name":"复制","nameEn":"Trace"}}},
    moves: ["alluring-voice","baton-pass","calm-mind","charge-beam","charm","covet","dark-pulse","dig","endure","energy-ball","expanding-force","extrasensory","facade","fake-out","fake-tears","future-sight","giga-impact","gravity","helping-hand","hyper-beam","iron-tail","light-screen","magic-room","nasty-plot","payback","play-rough","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","rain-dance","reflect","rest","role-play","round","safeguard","shadow-ball","skill-swap","sleep-talk","snore","stored-power","substitute","sucker-punch","sunny-day","tail-slap","thunder-wave","thunderbolt","tickle","trailblaze","trick","trick-room","wonder-room","yawn","zen-headbutt"]
  },
  'aegislash': {
    id: 681, name: '坚盾剑怪', nameEn: 'Aegislash',
    pinyin: 'jiandunjianguai', pinyinAbbr: 'jdjg',
    types: ["steel","ghost"],
    baseStats: { hp: 60, atk: 50, def: 140, spa: 50, spd: 140, spe: 60 },
    abilities: [{"id":"stance-change","name":"战斗切换","nameEn":"Stance Change","isHidden":false}],
    moves: ["aerial-ace","air-slash","attract","block","brick-break","brutal-swing","close-combat","destiny-bond","double-hit","endure","facade","flash-cannon","giga-impact","gyro-ball","head-smash","hyper-beam","iron-defense","iron-head","king-s-shield","metal-sound","night-slash","poltergeist","power-trick","protect","psycho-cut","rain-dance","reflect","rest","reversal","rock-slide","round","sacred-sword","screech","shadow-ball","shadow-claw","shadow-sneak","sleep-talk","snore","solar-blade","steel-beam","substitute","sunny-day","swords-dance","wide-guard","zen-headbutt"]
  },
  'clawitzer': {
    id: 693, name: '钢炮臂虾', nameEn: 'Clawitzer',
    pinyin: 'gangpaobixia', pinyinAbbr: 'gpbx',
    types: ["water"],
    baseStats: { hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 59 },
    abilities: [{"id":"mega-launcher","name":"超级发射器","nameEn":"Mega Launcher","isHidden":false}],
    moves: ["aqua-jet","aqua-tail","aura-sphere","blizzard","body-slam","bounce","chilling-water","crabhammer","dark-pulse","dive","dragon-pulse","endure","entrainment","facade","flail","flash-cannon","flip-turn","focus-blast","giga-impact","heal-pulse","helping-hand","hydro-pump","hyper-beam","ice-beam","icy-wind","liquidation","mud-shot","mud-slap","muddy-water","pounce","protect","rain-dance","rest","rock-slide","round","scary-face","shadow-ball","sleep-talk","sludge-bomb","sludge-wave","smack-down","snore","substitute","surf","swords-dance","terrain-pulse","thief","u-turn","venoshock","water-pulse"]
  },
  'tyrantrum': {
    id: 697, name: '怪颚龙', nameEn: 'Tyrantrum',
    pinyin: 'guaielong', pinyinAbbr: 'gel',
    types: ["rock","dragon"],
    baseStats: { hp: 82, atk: 121, def: 119, spa: 69, spd: 59, spe: 71 },
    abilities: [{"id":"strong-jaw","name":"强壮之颚","nameEn":"Strong Jaw","isHidden":false},{"id":"rock-head","name":"坚硬脑袋","nameEn":"Rock Head","isHidden":true}],
    moves: ["ancient-power","assurance","attract","bite","body-slam","breaking-swipe","brick-break","brutal-swing","bulldoze","charm","close-combat","crunch","curse","dark-pulse","dig","draco-meteor","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-tail","earth-power","earthquake","endure","facade","fire-fang","giga-impact","head-smash","high-horsepower","horn-drill","hyper-beam","hyper-voice","ice-fang","iron-defense","iron-head","iron-tail","lash-out","meteor-beam","outrage","play-rough","poison-fang","protect","psychic-fangs","rest","roar","rock-blast","rock-polish","rock-slide","rock-tomb","round","sandstorm","scale-shot","scary-face","sleep-talk","snore","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","superpower","thrash","thunder-fang","zen-headbutt"]
  },
  'aurorus': {
    id: 699, name: '冰雪巨龙', nameEn: 'Aurorus',
    pinyin: 'bingxuejulong', pinyinAbbr: 'bxjl',
    types: ["rock","ice"],
    baseStats: { hp: 123, atk: 77, def: 72, spa: 99, spd: 92, spe: 58 },
    abilities: [{"id":"refrigerate","name":"冰冻皮肤","nameEn":"Refrigerate","isHidden":false},{"id":"snow-warning","name":"降雪","nameEn":"Snow Warning","isHidden":true}],
    moves: ["ancient-power","attract","aurora-veil","avalanche","blizzard","body-slam","bulldoze","calm-mind","chilling-water","dark-pulse","discharge","earth-power","earthquake","encore","endure","facade","flash-cannon","freeze-dry","giga-impact","haze","hyper-beam","hyper-voice","ice-beam","ice-spinner","icicle-spear","icy-wind","iron-defense","iron-head","iron-tail","light-screen","meteor-beam","mirror-coat","mud-shot","outrage","protect","psychic","rain-dance","reflect","rest","rock-blast","rock-slide","rock-tomb","round","safeguard","sandstorm","sleep-talk","snore","snowscape","stealth-rock","stone-edge","substitute","thunder","thunder-wave","thunderbolt","weather-ball","zen-headbutt"]
  },
  'sylveon': {
    id: 700, name: '仙子伊布', nameEn: 'Sylveon',
    pinyin: 'xianziyibu', pinyinAbbr: 'xzyb',
    types: ["fairy"],
    baseStats: { hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60 },
    abilities: [{"id":"cute-charm","name":"迷人之躯","nameEn":"Cute Charm","isHidden":false},{"id":"pixilate","name":"妖精皮肤","nameEn":"Pixilate","isHidden":true}],
    moves: ["alluring-voice","baby-doll-eyes","baton-pass","bite","body-slam","calm-mind","charm","copycat","covet","curse","dazzling-gleam","detect","dig","double-edge","draining-kiss","endure","facade","fake-tears","flail","focus-energy","giga-impact","helping-hand","hyper-beam","hyper-voice","last-resort","light-screen","misty-explosion","misty-terrain","moonblast","mud-slap","mystical-fire","play-rough","protect","psych-up","psychic","psyshock","quick-attack","rain-dance","reflect","rest","roar","round","safeguard","shadow-ball","skill-swap","sleep-talk","snore","stored-power","substitute","sunny-day","tickle","trailblaze","weather-ball","wish","yawn"]
  },
  'hawlucha': {
    id: 701, name: '摔角鹰人', nameEn: 'Hawlucha',
    pinyin: 'shuaijiaoyingren', pinyinAbbr: 'sjyr',
    types: ["fighting","flying"],
    baseStats: { hp: 78, atk: 92, def: 75, spa: 74, spd: 63, spe: 118 },
    abilities: [{"id":"limber","name":"柔软","nameEn":"Limber","isHidden":false},{"id":"unburden","name":"轻装","nameEn":"Unburden","isHidden":false},{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":true}],
    forms: {"mega":{"name":"Mega Hawlucha","nameEn":"Mega Hawlucha","types":["fighting","flying"],"baseStats":{"hp":78,"atk":137,"def":100,"spa":74,"spd":93,"spe":118},"ability":{"id":"no-guard","name":"无防守","nameEn":"No Guard"}}},
    moves: ["acrobatics","aerial-ace","agility","air-slash","assurance","baton-pass","body-press","body-slam","bounce","brave-bird","brick-break","bulk-up","close-combat","coaching","cross-chop","defog","detect","dig","drain-punch","dual-wingbeat","encore","endeavor","endure","entrainment","facade","feather-dance","feint","fire-punch","fling","fly","flying-press","focus-blast","focus-punch","giga-impact","grass-knot","helping-hand","high-jump-kick","hyper-beam","iron-head","low-kick","low-sweep","lunge","mean-look","mega-kick","payback","poison-jab","protect","quick-guard","rain-dance","rest","reversal","rock-slide","rock-tomb","roost","round","sky-attack","sleep-talk","snore","steel-wing","stone-edge","substitute","sunny-day","superpower","swords-dance","taunt","thief","throat-chop","thunder-punch","trailblaze","u-turn","upper-hand","uproar","x-scissor","zen-headbutt"]
  },
  'klefki': {
    id: 707, name: '钥圈儿', nameEn: 'Klefki',
    pinyin: 'yaoquaner', pinyinAbbr: 'yqe',
    types: ["steel","fairy"],
    baseStats: { hp: 57, atk: 80, def: 91, spa: 80, spd: 87, spe: 75 },
    abilities: [{"id":"prankster","name":"恶作剧之心","nameEn":"Prankster","isHidden":false},{"id":"magician","name":"魔术师","nameEn":"Magician","isHidden":true}],
    moves: ["calm-mind","dazzling-gleam","draining-kiss","endure","facade","fairy-lock","flash-cannon","foul-play","future-sight","giga-impact","hyper-beam","imprison","iron-defense","last-resort","light-screen","magic-room","magnet-rise","metal-sound","misty-terrain","play-rough","protect","psych-up","psychic","psyshock","rain-dance","recycle","reflect","rest","round","safeguard","sandstorm","skitter-smack","sleep-talk","snore","spikes","steel-beam","stored-power","substitute","sunny-day","switcheroo","thief","thunder-wave","torment","trick-room"]
  },
  'gourgeist': {
    id: 711, name: '南瓜怪人', nameEn: 'Gourgeist',
    pinyin: 'nanguaguairen', pinyinAbbr: 'nggr',
    types: ["ghost","grass"],
    baseStats: { hp: 65, atk: 90, def: 122, spa: 58, spd: 75, spe: 84 },
    abilities: [{"id":"pickup","name":"捡拾","nameEn":"Pickup","isHidden":false},{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":false},{"id":"insomnia","name":"不眠","nameEn":"Insomnia","isHidden":true}],
    moves: ["ally-switch","attract","brutal-swing","bullet-seed","confuse-ray","curse","dark-pulse","destiny-bond","disable","endure","energy-ball","explosion","facade","fire-blast","flamethrower","focus-blast","foul-play","giga-drain","giga-impact","grass-knot","grassy-glide","gyro-ball","hex","hyper-beam","hypnosis","imprison","leech-seed","light-screen","moonblast","mystical-fire","nasty-plot","pain-split","phantom-force","poltergeist","power-whip","protect","psychic","rest","rock-slide","round","safeguard","scary-face","seed-bomb","self-destruct","shadow-ball","shadow-sneak","skill-swap","skitter-smack","sleep-talk","sludge-bomb","snore","solar-beam","substitute","sunny-day","thief","trick","trick-room","trick-or-treat","will-o-wisp","worry-seed"]
  },
  'noivern': {
    id: 715, name: '音波龙', nameEn: 'Noivern',
    pinyin: 'yinbolong', pinyinAbbr: 'ybl',
    types: ["flying","dragon"],
    baseStats: { hp: 85, atk: 70, def: 80, spa: 97, spd: 80, spe: 123 },
    abilities: [{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":false},{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator","isHidden":false},{"id":"telepathy","name":"心灵感应","nameEn":"Telepathy","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","air-cutter","air-slash","bite","body-slam","boomburst","breaking-swipe","brick-break","dark-pulse","defog","double-team","double-edge","draco-meteor","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-rush","dual-wingbeat","endure","facade","flamethrower","fly","focus-blast","giga-impact","heat-wave","hurricane","hyper-beam","hyper-voice","iron-tail","leech-life","moonlight","outrage","protect","psychic","psychic-noise","rest","roost","round","scary-face","screech","shadow-ball","shadow-claw","sky-attack","sleep-talk","snore","solar-beam","steel-wing","substitute","sunny-day","super-fang","switcheroo","tailwind","taunt","thief","u-turn","uproar","water-pulse","whirlwind","wild-charge","x-scissor"]
  },
  'decidueye': {
    id: 724, name: '狙射树枭', nameEn: 'Decidueye',
    pinyin: 'jusheshuxiao', pinyinAbbr: 'jssx',
    types: ["grass","ghost"],
    baseStats: { hp: 78, atk: 107, def: 75, spa: 100, spd: 100, spe: 70 },
    abilities: [{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":false},{"id":"long-reach","name":"远隔","nameEn":"Long Reach","isHidden":true}],
    moves: ["acrobatics","aerial-ace","air-cutter","air-slash","baton-pass","brave-bird","bullet-seed","confuse-ray","curse","defog","double-team","dual-wingbeat","endure","energy-ball","facade","feather-dance","frenzy-plant","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","haze","helping-hand","hex","hurricane","hyper-beam","imprison","knock-off","leaf-blade","leaf-storm","light-screen","low-kick","low-sweep","nasty-plot","night-shade","phantom-force","pluck","poltergeist","protect","psycho-cut","rain-dance","rest","roost","round","seed-bomb","shadow-ball","shadow-claw","shadow-sneak","skitter-smack","sleep-talk","smack-down","snore","solar-beam","solar-blade","spirit-shackle","spite","steel-wing","substitute","sucker-punch","sunny-day","swords-dance","synthesis","tailwind","trailblaze","u-turn"]
  },
  'hisuian-decidueye': {
    id: 724, name: '狙射树枭-洗翠', nameEn: 'Hisuian Decidueye',
    pinyin: 'jusheshuxiao-xicui', pinyinAbbr: 'jssx-xc',
    types: ["grass","fighting"],
    baseStats: { hp: 88, atk: 112, def: 80, spa: 95, spd: 95, spe: 60 },
    abilities: [{"id":"scrappy","name":"胆量","nameEn":"Scrappy","isHidden":false},{"id":"long-reach","name":"远隔","nameEn":"Long Reach","isHidden":true}],
    moves: ["aerial-ace","air-cutter","air-slash","aura-sphere","baton-pass","brave-bird","brick-break","bulk-up","bullet-seed","close-combat","coaching","confuse-ray","defog","double-team","dual-wingbeat","endure","energy-ball","facade","feather-dance","focus-blast","focus-punch","frenzy-plant","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","haze","helping-hand","hyper-beam","knock-off","leaf-blade","leaf-storm","light-screen","low-kick","low-sweep","nasty-plot","night-shade","pluck","protect","rain-dance","rest","reversal","rock-tomb","roost","round","scary-face","seed-bomb","shadow-claw","shadow-sneak","sleep-talk","smack-down","snore","solar-beam","steel-wing","substitute","sucker-punch","sunny-day","swords-dance","synthesis","tailwind","taunt","trailblaze","triple-arrows","u-turn","upper-hand"]
  },
  'incineroar': {
    id: 727, name: '炽焰咆哮虎', nameEn: 'Incineroar',
    pinyin: 'chiyanpaoxiaohu', pinyinAbbr: 'cypxh',
    types: ["fire","dark"],
    baseStats: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"intimidate","name":"威吓","nameEn":"Intimidate","isHidden":true}],
    moves: ["acrobatics","aerial-ace","assurance","attract","baton-pass","bite","blast-burn","blaze-kick","body-slam","brick-break","brutal-swing","bulk-up","bulldoze","burning-jealousy","close-combat","cross-chop","crunch","dark-pulse","darkest-lariat","double-edge","drain-punch","earthquake","endeavor","endure","facade","fake-out","fire-blast","fire-fang","fire-punch","fire-spin","flame-charge","flamethrower","flare-blitz","fling","focus-blast","focus-punch","giga-impact","heat-crash","heat-wave","helping-hand","hyper-beam","iron-head","lash-out","leech-life","low-kick","low-sweep","mega-kick","nasty-plot","outrage","overheat","parting-shot","power-trip","protect","rest","reversal","roar","round","scary-face","scorching-sands","shadow-claw","sleep-talk","snarl","snore","stomping-tantrum","substitute","sunny-day","superpower","swagger","swords-dance","taunt","temper-flare","thief","thrash","throat-chop","thunder-punch","trailblaze","will-o-wisp"]
  },
  'primarina': {
    id: 730, name: '西狮海壬', nameEn: 'Primarina',
    pinyin: 'xishihairen', pinyinAbbr: 'xshr',
    types: ["water","fairy"],
    baseStats: { hp: 80, atk: 74, def: 74, spa: 126, spd: 116, spe: 60 },
    abilities: [{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":false},{"id":"liquid-voice","name":"湿润之声","nameEn":"Liquid Voice","isHidden":true}],
    moves: ["acrobatics","alluring-voice","amnesia","aqua-jet","aqua-ring","attract","baby-doll-eyes","blizzard","body-slam","calm-mind","charm","chilling-water","dazzling-gleam","dive","draining-kiss","encore","endure","energy-ball","facade","flip-turn","giga-impact","haze","helping-hand","hydro-cannon","hydro-pump","hyper-beam","hyper-voice","ice-beam","ice-spinner","icy-wind","iron-tail","life-dew","light-screen","liquidation","misty-explosion","misty-terrain","moonblast","perish-song","play-rough","protect","psych-up","psychic","psychic-noise","rain-dance","reflect","rest","round","shadow-ball","sing","sleep-talk","snore","snowscape","sparkling-aria","stored-power","substitute","surf","triple-axel","uproar","water-pulse","waterfall","weather-ball","whirlpool","wonder-room"]
  },
  'toucannon': {
    id: 733, name: '铳嘴大鸟', nameEn: 'Toucannon',
    pinyin: 'chongzuidaniao', pinyinAbbr: 'czdn',
    types: ["normal","flying"],
    baseStats: { hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 60 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"skill-link","name":"连续攻击","nameEn":"Skill Link","isHidden":false},{"id":"sheer-force","name":"强行","nameEn":"Sheer Force","isHidden":true}],
    moves: ["acrobatics","aerial-ace","air-cutter","air-slash","attract","beak-blast","boomburst","brave-bird","brick-break","bullet-seed","drill-peck","dual-wingbeat","encore","endeavor","endure","facade","feather-dance","flame-charge","flash-cannon","fly","giga-impact","gunk-shot","heat-wave","helping-hand","hurricane","hyper-beam","hyper-voice","knock-off","overheat","pluck","protect","psych-up","rest","rock-blast","roost","round","scary-face","screech","seed-bomb","sky-attack","sleep-talk","smack-down","snore","steel-wing","substitute","sunny-day","swords-dance","tailwind","temper-flare","thief","throat-chop","u-turn","uproar"]
  },
  'crabominable': {
    id: 740, name: '好胜毛蟹', nameEn: 'Crabominable',
    pinyin: 'haoshengmaoxie', pinyinAbbr: 'hsmx',
    types: ["fighting","ice"],
    baseStats: { hp: 97, atk: 132, def: 77, spa: 62, spd: 67, spe: 43 },
    abilities: [{"id":"hyper-cutter","name":"怪力钳","nameEn":"Hyper Cutter","isHidden":false},{"id":"iron-fist","name":"铁拳","nameEn":"Iron Fist","isHidden":false},{"id":"anger-point","name":"愤怒穴位","nameEn":"Anger Point","isHidden":true}],
    forms: {"mega":{"name":"Mega Crabominable","nameEn":"Mega Crabominable","types":["fighting","ice"],"baseStats":{"hp":97,"atk":157,"def":122,"spa":62,"spd":107,"spe":33},"ability":{"id":"iron-fist","name":"铁拳","nameEn":"Iron Fist"}}},
    moves: ["amnesia","avalanche","blizzard","body-press","body-slam","brick-break","brutal-swing","bulk-up","bulldoze","chilling-water","close-combat","coaching","crabhammer","dig","drain-punch","dynamic-punch","earthquake","endeavor","endure","facade","fling","focus-blast","focus-punch","giga-impact","gunk-shot","hard-press","helping-hand","hyper-beam","ice-beam","ice-hammer","ice-punch","ice-spinner","icicle-spear","icy-wind","iron-defense","iron-head","knock-off","liquidation","mach-punch","mud-shot","mud-slap","payback","protect","rain-dance","rest","reversal","rock-slide","rock-tomb","round","scary-face","sleep-talk","snore","snowscape","stomping-tantrum","substitute","sunny-day","superpower","swagger","thief","thunder-punch","upper-hand","wide-guard","zen-headbutt"]
  },
  'lycanroc': {
    id: 745, name: '鬃岩狼人', nameEn: 'Lycanroc',
    pinyin: 'zongyanlangren', pinyinAbbr: 'zylr',
    types: ["rock"],
    baseStats: { hp: 75, atk: 115, def: 65, spa: 55, spd: 65, spe: 112 },
    abilities: [{"id":"keen-eye","name":"锐利目光","nameEn":"Keen Eye","isHidden":false},{"id":"sand-rush","name":"泼沙","nameEn":"Sand Rush","isHidden":false},{"id":"steadfast","name":"不屈之心","nameEn":"Steadfast","isHidden":true}],
    moves: ["accelerock","agility","assurance","bite","body-slam","brick-break","bulk-up","bulldoze","charm","close-combat","crunch","dig","double-team","double-edge","drill-run","earth-power","endeavor","endure","facade","fire-fang","giga-impact","helping-hand","howl","hyper-voice","iron-defense","iron-head","iron-tail","last-resort","mud-slap","play-rough","protect","psychic-fangs","quick-attack","quick-guard","rest","roar","rock-blast","rock-slide","rock-tomb","round","sandstorm","scary-face","sleep-talk","snarl","snore","stealth-rock","stomping-tantrum","stone-edge","substitute","sucker-punch","sunny-day","swords-dance","tail-slap","taunt","thrash","thunder-fang","trailblaze","zen-headbutt"]
  },
  'toxapex': {
    id: 748, name: '超坏星', nameEn: 'Toxapex',
    pinyin: 'chaohuaixing', pinyinAbbr: 'chx',
    types: ["poison","water"],
    baseStats: { hp: 50, atk: 63, def: 152, spa: 53, spd: 142, spe: 35 },
    abilities: [{"id":"merciless","name":"不仁不义","nameEn":"Merciless","isHidden":false},{"id":"limber","name":"柔软","nameEn":"Limber","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":true}],
    moves: ["acid-spray","baneful-bunker","bite","blizzard","body-slam","chilling-water","cross-poison","endure","facade","giga-impact","gunk-shot","haze","hex","hydro-pump","hyper-beam","ice-beam","ice-spinner","icy-wind","infestation","iron-defense","light-screen","liquidation","lunge","mud-shot","muddy-water","pain-split","payback","pin-missile","poison-jab","pounce","protect","rain-dance","recover","rest","round","scary-face","sleep-talk","sludge-bomb","sludge-wave","smack-down","snore","spit-up","stockpile","substitute","surf","swallow","toxic","toxic-spikes","venoshock","water-pulse","wide-guard"]
  },
  'mudsdale': {
    id: 750, name: '重泥挽马', nameEn: 'Mudsdale',
    pinyin: 'zhongniwanma', pinyinAbbr: 'znwm',
    types: ["ground"],
    baseStats: { hp: 100, atk: 125, def: 100, spa: 55, spd: 85, spe: 35 },
    abilities: [{"id":"own-tempo","name":"我行我素","nameEn":"Own Tempo","isHidden":false},{"id":"stamina","name":"持久力","nameEn":"Stamina","isHidden":false},{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":true}],
    moves: ["body-press","body-slam","bulldoze","close-combat","counter","curse","double-edge","earth-power","earthquake","endeavor","endure","facade","fissure","focus-blast","giga-impact","heavy-slam","high-horsepower","hyper-beam","iron-defense","iron-head","lash-out","low-kick","low-sweep","mega-kick","mud-shot","mud-slap","payback","protect","rest","roar","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scary-face","sleep-talk","smack-down","snore","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","superpower"]
  },
  'araquanid': {
    id: 752, name: '滴蛛霸', nameEn: 'Araquanid',
    pinyin: 'dizhuba', pinyinAbbr: 'dzb',
    types: ["water","bug"],
    baseStats: { hp: 68, atk: 70, def: 92, spa: 50, spd: 132, spe: 42 },
    abilities: [{"id":"water-bubble","name":"水泡","nameEn":"Water Bubble","isHidden":false},{"id":"water-absorb","name":"储水","nameEn":"Water Absorb","isHidden":true}],
    moves: ["aqua-ring","attract","bite","blizzard","body-slam","bug-bite","bug-buzz","chilling-water","crunch","dive","endeavor","endure","entrainment","facade","giga-drain","giga-impact","hydro-pump","hyper-beam","ice-beam","icy-wind","infestation","iron-defense","leech-life","liquidation","lunge","magic-room","mirror-coat","poison-jab","pounce","power-split","protect","rain-dance","reflect","rest","round","scary-face","skitter-smack","sleep-talk","snore","soak","spit-up","sticky-web","stockpile","substitute","surf","trailblaze","water-pulse","waterfall","wide-guard","wonder-room","x-scissor"]
  },
  'tsareena': {
    id: 763, name: '甜冷美后', nameEn: 'Tsareena',
    pinyin: 'tianlengmeihou', pinyinAbbr: 'tlmh',
    types: ["grass"],
    baseStats: { hp: 72, atk: 120, def: 98, spa: 50, spd: 98, spe: 72 },
    abilities: [{"id":"leaf-guard","name":"叶子防守","nameEn":"Leaf Guard","isHidden":false},{"id":"queenly-majesty","name":"女王的威严","nameEn":"Queenly Majesty","isHidden":false},{"id":"sweet-veil","name":"甜幕","nameEn":"Sweet Veil","isHidden":true}],
    moves: ["giga-impact","hyper-beam","high-jump-kick","leaf-storm","solar-blade","mega-kick","power-whip","solar-beam","energy-ball","petal-blizzard","play-rough","take-down","bounce","dazzling-gleam","seed-bomb","zen-headbutt","giga-drain","facade","trop-kick","u-turn","knock-off","low-sweep","stomp","covet","hidden-power","magical-leaf","round","swift","acrobatics","grassy-glide","razor-leaf","draining-kiss","payback","rapid-spin","snore","trailblaze","bullet-seed","triple-axel","double-slap","endeavor","flail","fling","frustration","grass-knot","low-kick","punishment","return","aromatherapy","aromatic-mist","attract","captivate","charm","confide","double-team","endure","grassy-terrain","helping-hand","laser-focus","light-screen","nature-power","play-nice","protect","reflect","rest","safeguard","sleep-talk","splash","substitute","sunny-day","swagger","sweet-scent","synthesis","taunt","teeter-dance","toxic","worry-seed"]
  },
  'oranguru': {
    id: 765, name: '智挥猩', nameEn: 'Oranguru',
    pinyin: 'zhihuixing', pinyinAbbr: 'zhx',
    types: ["normal","psychic"],
    baseStats: { hp: 90, atk: 60, def: 80, spa: 90, spd: 110, spe: 60 },
    abilities: [{"id":"inner-focus","name":"精神力","nameEn":"Inner Focus","isHidden":false},{"id":"telepathy","name":"心灵感应","nameEn":"Telepathy","isHidden":false},{"id":"symbiosis","name":"共生","nameEn":"Symbiosis","isHidden":true}],
    moves: ["after-you","body-slam","brick-break","bulldoze","calm-mind","charge-beam","chilling-water","earthquake","encore","endeavor","endure","energy-ball","expanding-force","extrasensory","facade","fling","focus-blast","foul-play","future-sight","giga-impact","gravity","hyper-beam","hyper-voice","imprison","instruct","knock-off","last-resort","light-screen","magic-room","mega-kick","nasty-plot","pain-split","payback","protect","psych-up","psychic","psychic-noise","psychic-terrain","psyshock","quash","rain-dance","reflect","rest","rock-slide","round","safeguard","scary-face","shadow-ball","skill-swap","sleep-talk","snore","stored-power","substitute","sunny-day","taunt","terrain-pulse","thunder","thunderbolt","trailblaze","trick","trick-room","wonder-room","yawn","zen-headbutt"]
  },
  'mimikyu': {
    id: 778, name: '谜拟Q', nameEn: 'Mimikyu',
    pinyin: 'miniq', pinyinAbbr: 'mnq',
    types: ["ghost","fairy"],
    baseStats: { hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96 },
    abilities: [{"id":"disguise","name":"画皮","nameEn":"Disguise","isHidden":false}],
    moves: ["baby-doll-eyes","beat-up","bulk-up","burning-jealousy","charm","confuse-ray","copycat","curse","dark-pulse","dazzling-gleam","destiny-bond","double-team","drain-punch","draining-kiss","endure","facade","fling","giga-drain","giga-impact","hex","hyper-beam","leech-life","light-screen","magic-room","misty-terrain","night-shade","night-slash","pain-split","payback","phantom-force","play-rough","pounce","protect","psych-up","psychic","rain-dance","rest","round","safeguard","screech","shadow-ball","shadow-claw","shadow-sneak","sleep-talk","snore","spite","substitute","sunny-day","swords-dance","taunt","thief","thunder","thunder-wave","thunderbolt","trailblaze","trick","trick-room","will-o-wisp","wood-hammer","x-scissor"]
  },
  'drampa': {
    id: 780, name: '老翁龙', nameEn: 'Drampa',
    pinyin: 'laowenglong', pinyinAbbr: 'lwl',
    types: ["normal","dragon"],
    baseStats: { hp: 78, atk: 60, def: 85, spa: 135, spd: 91, spe: 36 },
    abilities: [{"id":"berserk","name":"怒火冲天","nameEn":"Berserk","isHidden":false},{"id":"sap-sipper","name":"食草","nameEn":"Sap Sipper","isHidden":false},{"id":"cloud-nine","name":"无关天气","nameEn":"Cloud Nine","isHidden":true}],
    forms: {"mega":{"name":"Mega Drampa","nameEn":"Mega Drampa","types":["normal","dragon"],"baseStats":{"hp":78,"atk":85,"def":110,"spa":160,"spd":116,"spe":36},"ability":{"id":"berserk","name":"怒火冲天","nameEn":"Berserk"}}},
    moves: ["amnesia","attract","blizzard","body-slam","breaking-swipe","bulldoze","calm-mind","draco-meteor","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-rush","earth-power","earthquake","endure","energy-ball","extrasensory","facade","fire-blast","flamethrower","fling","fly","focus-blast","giga-impact","glare","grass-knot","heat-wave","helping-hand","hurricane","hydro-pump","hyper-beam","hyper-voice","ice-beam","icy-wind","lash-out","light-screen","outrage","play-rough","protect","rain-dance","rest","rock-slide","roost","round","safeguard","scale-shot","shadow-ball","shadow-claw","sleep-talk","snarl","snore","solar-beam","steel-wing","stomping-tantrum","substitute","sunny-day","superpower","surf","thunder","thunder-wave","thunderbolt","tickle","tri-attack","uproar","whirlwind"]
  },
  'kommo-o': {
    id: 784, name: '杖尾鳞甲龙', nameEn: 'Kommo-o',
    pinyin: 'zhangweilinjialong', pinyinAbbr: 'zwljl',
    types: ["dragon","fighting"],
    baseStats: { hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85 },
    abilities: [{"id":"bulletproof","name":"防弹","nameEn":"Bulletproof","isHidden":false},{"id":"soundproof","name":"隔音","nameEn":"Soundproof","isHidden":false},{"id":"overcoat","name":"防尘","nameEn":"Overcoat","isHidden":true}],
    moves: ["aerial-ace","attract","aura-sphere","belly-drum","body-press","body-slam","boomburst","breaking-swipe","brick-break","brutal-swing","bulk-up","bulldoze","clanging-scales","clangorous-soul","close-combat","coaching","counter","double-edge","draco-meteor","dragon-cheer","dragon-claw","dragon-dance","dragon-pulse","dragon-tail","drain-punch","earthquake","endeavor","endure","facade","fire-punch","flamethrower","flash-cannon","fling","focus-blast","focus-punch","giga-impact","helping-hand","hyper-beam","hyper-voice","ice-punch","iron-defense","iron-head","iron-tail","low-kick","mega-kick","metal-sound","noble-roar","outrage","payback","poison-jab","protect","rain-dance","rest","reversal","roar","rock-slide","rock-tomb","round","sandstorm","scale-shot","scary-face","screech","shadow-claw","sleep-talk","snore","stealth-rock","stomping-tantrum","substitute","sunny-day","superpower","swords-dance","taunt","throat-chop","thunder-punch","upper-hand","uproar","vacuum-wave","x-scissor"]
  },
  'corviknight': {
    id: 823, name: '钢铠鸦', nameEn: 'Corviknight',
    pinyin: 'gangkaiya', pinyinAbbr: 'gky',
    types: ["flying","steel"],
    baseStats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
    abilities: [{"id":"pressure","name":"压迫感","nameEn":"Pressure","isHidden":false},{"id":"unnerve","name":"紧张感","nameEn":"Unnerve","isHidden":false},{"id":"mirror-armor","name":"镜甲","nameEn":"Mirror Armor","isHidden":true}],
    moves: ["aerial-ace","agility","air-cutter","air-slash","assurance","body-press","body-slam","brave-bird","bulk-up","curse","defog","double-edge","drill-peck","dual-wingbeat","endure","facade","fake-tears","feather-dance","flash-cannon","fly","focus-energy","giga-impact","heavy-slam","hurricane","hyper-beam","iron-defense","iron-head","light-screen","metal-sound","nasty-plot","payback","pluck","power-trip","protect","rain-dance","reflect","rest","reversal","roost","round","scary-face","screech","sky-attack","sleep-talk","snore","spite","steel-beam","steel-wing","substitute","sunny-day","swagger","tailwind","taunt","thief","u-turn"]
  },
  'sandaconda': {
    id: 844, name: '沙螺蟒', nameEn: 'Sandaconda',
    pinyin: 'shaluomang', pinyinAbbr: 'slm',
    types: ["ground"],
    baseStats: { hp: 72, atk: 107, def: 125, spa: 65, spd: 70, spe: 71 },
    abilities: [{"id":"sand-spit","name":"吐沙","nameEn":"Sand Spit","isHidden":false},{"id":"shed-skin","name":"蜕皮","nameEn":"Shed Skin","isHidden":false},{"id":"sand-veil","name":"沙隐","nameEn":"Sand Veil","isHidden":true}],
    moves: ["belch","body-press","body-slam","brutal-swing","bulldoze","coil","dig","dragon-rush","drill-run","earth-power","earthquake","endeavor","endure","facade","fire-fang","giga-impact","glare","high-horsepower","hurricane","hyper-beam","iron-defense","iron-head","last-resort","minimize","mud-shot","mud-slap","outrage","protect","rest","rock-blast","rock-slide","rock-tomb","round","sand-tomb","sandstorm","scale-shot","scary-face","scorching-sands","screech","skitter-smack","sleep-talk","snore","stealth-rock","stone-edge","substitute","thunder-fang","wrap","zen-headbutt"]
  },
  'polteageist': {
    id: 855, name: '怖思壶', nameEn: 'Polteageist',
    pinyin: 'busihu', pinyinAbbr: 'bsh',
    types: ["ghost"],
    baseStats: { hp: 60, atk: 65, def: 65, spa: 134, spd: 114, spe: 70 },
    abilities: [{"id":"weak-armor","name":"碎裂铠甲","nameEn":"Weak Armor","isHidden":false},{"id":"cursed-body","name":"诅咒之躯","nameEn":"Cursed Body","isHidden":true}],
    moves: ["ally-switch","aromatic-mist","baton-pass","calm-mind","confuse-ray","curse","dark-pulse","endure","facade","foul-play","giga-drain","giga-impact","hex","hyper-beam","imprison","light-screen","memento","nasty-plot","night-shade","pain-split","payback","phantom-force","poltergeist","protect","psychic","psyshock","reflect","rest","round","self-destruct","shadow-ball","shell-smash","skill-swap","sleep-talk","snore","spite","stored-power","strength-sap","substitute","sucker-punch","sweet-scent","teatime","trick","trick-room","will-o-wisp","wonder-room"]
  },
  'hatterene': {
    id: 858, name: '布莉姆温', nameEn: 'Hatterene',
    pinyin: 'bulimuwen', pinyinAbbr: 'blmw',
    types: ["psychic","fairy"],
    baseStats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
    abilities: [{"id":"healer","name":"治愈之心","nameEn":"Healer","isHidden":false},{"id":"anticipation","name":"危险预知","nameEn":"Anticipation","isHidden":false},{"id":"magic-bounce","name":"魔法镜","nameEn":"Magic Bounce","isHidden":true}],
    moves: ["after-you","agility","aromatic-mist","baton-pass","brutal-swing","calm-mind","charm","dark-pulse","dazzling-gleam","draining-kiss","endure","expanding-force","facade","future-sight","giga-drain","giga-impact","gravity","guard-swap","heal-pulse","healing-wish","helping-hand","hyper-beam","imprison","life-dew","light-screen","magic-powder","magic-room","misty-explosion","misty-terrain","mystical-fire","nuzzle","pain-split","play-rough","power-swap","power-whip","protect","psych-up","psychic","psychic-noise","psychic-terrain","psycho-cut","psyshock","quash","reflect","rest","round","safeguard","shadow-ball","shadow-claw","skill-swap","sleep-talk","snore","stored-power","substitute","swords-dance","thunder-wave","trick-room","wonder-room"]
  },
  'mr-rime': {
    id: 866, name: '踏冰人偶', nameEn: 'Mr. Rime',
    pinyin: 'tabingrenou', pinyinAbbr: 'tbro',
    types: ["ice","psychic"],
    baseStats: { hp: 80, atk: 85, def: 75, spa: 110, spd: 100, spe: 70 },
    abilities: [{"id":"tangled-feet","name":"蹒跚","nameEn":"Tangled Feet","isHidden":false},{"id":"screen-cleaner","name":"除障","nameEn":"Screen Cleaner","isHidden":false},{"id":"ice-body","name":"冰冻之躯","nameEn":"Ice Body","isHidden":true}],
    moves: ["after-you","ally-switch","attract","avalanche","baton-pass","blizzard","block","body-slam","brick-break","calm-mind","charm","chilling-water","confuse-ray","copycat","dazzling-gleam","drain-punch","encore","endure","energy-ball","expanding-force","facade","fake-out","fake-tears","fling","focus-blast","foul-play","freeze-dry","frost-breath","future-sight","giga-impact","grass-knot","guard-swap","haze","helping-hand","hyper-beam","hypnosis","ice-beam","ice-punch","ice-shard","ice-spinner","icicle-spear","icy-wind","iron-defense","light-screen","magic-room","mega-kick","mirror-coat","misty-terrain","nasty-plot","payback","power-split","power-swap","protect","psychic","psychic-terrain","psyshock","rain-dance","rapid-spin","recycle","reflect","rest","role-play","round","safeguard","screech","shadow-ball","sheer-cold","skill-swap","slack-off","sleep-talk","snore","snowscape","solar-beam","stomping-tantrum","stored-power","substitute","sucker-punch","sunny-day","swagger","taunt","teeter-dance","thief","thunder","thunder-wave","thunderbolt","tickle","torment","trick","trick-room","triple-axel","uproar","wonder-room","zen-headbutt"]
  },
  'runerigus': {
    id: 867, name: '死神板', nameEn: 'Runerigus',
    pinyin: 'sishenban', pinyinAbbr: 'ssb',
    types: ["ground","ghost"],
    baseStats: { hp: 58, atk: 95, def: 145, spa: 50, spd: 105, spe: 30 },
    abilities: [{"id":"wandering-spirit","name":"游魂","nameEn":"Wandering Spirit","isHidden":false}],
    moves: ["ally-switch","amnesia","attract","body-press","brutal-swing","bulldoze","calm-mind","confuse-ray","curse","dark-pulse","destiny-bond","disable","dragon-pulse","earth-power","earthquake","endure","energy-ball","facade","fake-tears","giga-drain","giga-impact","grass-knot","guard-split","guard-swap","haze","hex","hyper-beam","imprison","iron-defense","mean-look","memento","nasty-plot","night-shade","payback","phantom-force","poltergeist","power-split","power-swap","protect","psychic","psyshock","rain-dance","rest","rock-blast","rock-slide","rock-tomb","round","safeguard","sand-tomb","sandstorm","scary-face","self-destruct","shadow-ball","shadow-claw","shadow-punch","skill-swap","sleep-talk","snore","stealth-rock","stone-edge","substitute","taunt","thief","toxic-spikes","trick","trick-room","will-o-wisp","wonder-room","zen-headbutt"]
  },
  'alcremie': {
    id: 869, name: '霜奶仙', nameEn: 'Alcremie',
    pinyin: 'shuangnaixian', pinyinAbbr: 'snx',
    types: ["fairy"],
    baseStats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
    abilities: [{"id":"sweet-veil","name":"甜幕","nameEn":"Sweet Veil","isHidden":false},{"id":"aroma-veil","name":"芳香幕","nameEn":"Aroma Veil","isHidden":true}],
    moves: ["acid-armor","alluring-voice","aromatic-mist","attract","baby-doll-eyes","calm-mind","charm","dazzling-gleam","decorate","drain-punch","draining-kiss","encore","endeavor","endure","energy-ball","entrainment","facade","fake-tears","fling","giga-drain","giga-impact","helping-hand","hyper-beam","imprison","last-resort","light-screen","magic-room","misty-explosion","misty-terrain","mystical-fire","pain-split","play-rough","protect","psych-up","psychic","psyshock","recover","rest","round","safeguard","sleep-talk","snore","solar-beam","stored-power","substitute","sweet-kiss","sweet-scent","tri-attack","wonder-room"]
  },
  'morpeko': {
    id: 877, name: '莫鲁贝可', nameEn: 'Morpeko',
    pinyin: 'molubeike', pinyinAbbr: 'mlbk',
    types: ["electric","dark"],
    baseStats: { hp: 58, atk: 95, def: 58, spa: 70, spd: 58, spe: 97 },
    abilities: [{"id":"hunger-switch","name":"饱了又饿","nameEn":"Hunger Switch","isHidden":false}],
    moves: ["agility","assurance","aura-wheel","baton-pass","bite","brick-break","bullet-seed","charge","charge-beam","crunch","dark-pulse","double-edge","eerie-impulse","electric-terrain","electro-ball","endeavor","endure","facade","fake-out","fake-tears","fire-fang","flatter","fling","foul-play","ice-fang","knock-off","lash-out","nasty-plot","outrage","parting-shot","payback","power-trip","protect","psychic-fangs","quash","quick-attack","rapid-spin","rest","reversal","rising-voltage","round","scary-face","seed-bomb","sleep-talk","snarl","snore","spite","stomping-tantrum","substitute","super-fang","swagger","taunt","thief","thrash","thunder","thunder-fang","thunder-punch","thunder-wave","thunderbolt","tickle","torment","uproar","volt-switch","wild-charge"]
  },
  'dragapult': {
    id: 887, name: '多龙巴鲁托', nameEn: 'Dragapult',
    pinyin: 'duolongbalutuo', pinyinAbbr: 'dlblt',
    types: ["dragon","ghost"],
    baseStats: { hp: 88, atk: 120, def: 75, spa: 100, spd: 75, spe: 142 },
    abilities: [{"id":"clear-body","name":"恒净之躯","nameEn":"Clear Body","isHidden":false},{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator","isHidden":false},{"id":"cursed-body","name":"诅咒之躯","nameEn":"Cursed Body","isHidden":true}],
    moves: ["acrobatics","agility","assurance","baton-pass","beat-up","bite","body-slam","breaking-swipe","confuse-ray","curse","disable","dive","double-hit","double-team","double-edge","draco-meteor","dragon-cheer","dragon-claw","dragon-dance","dragon-darts","dragon-pulse","dragon-rush","dragon-tail","endure","facade","fire-blast","flamethrower","fly","giga-impact","helping-hand","hex","hydro-pump","hyper-beam","infestation","last-resort","light-screen","lock-on","night-shade","outrage","phantom-force","pounce","protect","psychic-fangs","quick-attack","reflect","rest","round","shadow-ball","sleep-talk","snore","solar-beam","steel-wing","substitute","sucker-punch","sunny-day","surf","thief","thunder","thunder-wave","thunderbolt","tri-attack","u-turn","will-o-wisp"]
  },
  'kleavor': {
    id: 900, name: '劈斧螳螂', nameEn: 'Kleavor',
    pinyin: 'pifutanglang', pinyinAbbr: 'pftl',
    types: ["bug","rock"],
    baseStats: { hp: 70, atk: 135, def: 95, spa: 45, spd: 70, spe: 85 },
    abilities: [{"id":"swarm","name":"虫之预感","nameEn":"Swarm","isHidden":false},{"id":"sheer-force","name":"强行","nameEn":"Sheer Force","isHidden":false},{"id":"sharpness","name":"锋锐","nameEn":"Sharpness","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","air-cutter","air-slash","ancient-power","baton-pass","brick-break","brutal-swing","bug-bite","bug-buzz","close-combat","counter","defog","double-hit","double-team","double-edge","dual-wingbeat","endure","facade","feint","focus-energy","giga-impact","helping-hand","hyper-beam","light-screen","lunge","night-slash","pounce","protect","quick-attack","quick-guard","rain-dance","rest","reversal","rock-blast","rock-slide","rock-tomb","sandstorm","scary-face","skitter-smack","sleep-talk","smack-down","stealth-rock","stone-axe","stone-edge","struggle-bug","substitute","sunny-day","swords-dance","tailwind","thief","trailblaze","u-turn","vacuum-wave","x-scissor"]
  },
  'ursaluna': {
    id: 901, name: '月月熊', nameEn: 'Ursaluna',
    pinyin: 'yueyuexiong', pinyinAbbr: 'yyx',
    types: ["ground","normal"],
    baseStats: { hp: 130, atk: 140, def: 105, spa: 45, spd: 80, spe: 50 },
    abilities: [{"id":"guts","name":"毅力","nameEn":"Guts","isHidden":false},{"id":"bulletproof","name":"防弹","nameEn":"Bulletproof","isHidden":false},{"id":"unnerve","name":"紧张感","nameEn":"Unnerve","isHidden":true}],
    moves: ["focus-punch","giga-impact","hyper-beam","close-combat","double-edge","gunk-shot","headlong-rush","thrash","earthquake","hammer-arm","stone-edge","supercell-slam","high-horsepower","earth-power","hyper-voice","play-rough","take-down","uproar","body-slam","body-press","crunch","dig","seed-bomb","throat-chop","brick-break","drain-punch","fire-punch","ice-punch","rock-slide","stomping-tantrum","thunder-punch","facade","shadow-claw","slash","aerial-ace","avalanche","bulldoze","covet","rock-tomb","swift","thief","metal-claw","payback","smack-down","snore","trailblaze","scratch","tackle","vacuum-wave","lick","fury-swipes","fling","hard-press","heavy-slam","low-kick","baby-doll-eyes","bulk-up","charm","curse","endure","fake-tears","helping-hand","leer","metronome","play-nice","protect","rain-dance","rest","roar","scary-face","sleep-talk","substitute","sunny-day","sweet-scent","swords-dance","taunt"]
  },
  'basculegion-m': {
    id: 902, name: '幽尾玄鱼', nameEn: 'Basculegion-M',
    pinyin: 'youweixuanyu', pinyinAbbr: 'ywxy',
    types: ["water","ghost"],
    baseStats: { hp: 120, atk: 112, def: 65, spa: 80, spd: 75, spe: 78 },
    abilities: [{"id":"swift-swim","name":"悠游自如","nameEn":"Swift Swim","isHidden":false},{"id":"adaptability","name":"适应力","nameEn":"Adaptability","isHidden":false},{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":true}],
    moves: ["agility","aqua-jet","bite","blizzard","chilling-water","confuse-ray","crunch","double-edge","endeavor","endure","facade","flail","flip-turn","giga-impact","head-smash","hex","hydro-pump","hyper-beam","ice-beam","ice-fang","icy-wind","last-respects","liquidation","mud-shot","muddy-water","night-shade","outrage","pain-split","phantom-force","protect","psychic-fangs","rain-dance","rest","scale-shot","scary-face","shadow-ball","sleep-talk","snowscape","soak","spite","substitute","surf","thrash","uproar","water-pulse","waterfall","wave-crash","whirlpool","zen-headbutt"]
  },
  'basculegion-f': {
    id: 902, name: '幽尾玄鱼-雌性的样子', nameEn: 'Basculegion-F',
    pinyin: 'youweixuanyu-cixingdeyangzi', pinyinAbbr: 'ywxy-cxdyz',
    types: ["water","ghost"],
    baseStats: { hp: 120, atk: 92, def: 65, spa: 100, spd: 75, spe: 78 },
    abilities: [{"id":"swift-swim","name":"悠游自如","nameEn":"Swift Swim","isHidden":false},{"id":"adaptability","name":"适应力","nameEn":"Adaptability","isHidden":false},{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":true}],
    moves: ["agility","aqua-jet","bite","blizzard","chilling-water","confuse-ray","crunch","double-edge","endeavor","endure","facade","flail","flip-turn","giga-impact","head-smash","hex","hydro-pump","hyper-beam","ice-beam","ice-fang","icy-wind","last-respects","liquidation","mud-shot","muddy-water","night-shade","outrage","pain-split","phantom-force","protect","psychic-fangs","rain-dance","rest","scale-shot","scary-face","shadow-ball","sleep-talk","snowscape","soak","spite","substitute","surf","thrash","uproar","water-pulse","waterfall","wave-crash","whirlpool","zen-headbutt"]
  },
  'sneasler': {
    id: 903, name: '大狃拉', nameEn: 'Sneasler',
    pinyin: 'daniula', pinyinAbbr: 'dnl',
    types: ["fighting","poison"],
    baseStats: { hp: 80, atk: 130, def: 60, spa: 40, spd: 80, spe: 120 },
    abilities: [{"id":"pressure","name":"压迫感","nameEn":"Pressure","isHidden":false},{"id":"unburden","name":"轻装","nameEn":"Unburden","isHidden":false},{"id":"poison-touch","name":"毒手","nameEn":"Poison Touch","isHidden":true}],
    moves: ["acid-spray","acrobatics","aerial-ace","agility","brick-break","bulk-up","calm-mind","close-combat","coaching","counter","dig","dire-claw","double-hit","endure","facade","fake-out","feint","fire-punch","fling","focus-blast","focus-punch","giga-impact","grass-knot","gunk-shot","hyper-beam","lash-out","low-kick","low-sweep","nasty-plot","night-slash","poison-jab","protect","quick-attack","quick-guard","rain-dance","rest","reversal","rock-slide","rock-tomb","screech","shadow-ball","shadow-claw","sleep-talk","sludge-bomb","sludge-wave","spite","substitute","sunny-day","switcheroo","swords-dance","taunt","thief","throat-chop","toxic","toxic-spikes","trailblaze","u-turn","upper-hand","vacuum-wave","venoshock","x-scissor"]
  },
  'meowscarada': {
    id: 908, name: '魔幻假面喵', nameEn: 'Meowscarada',
    pinyin: 'mohuanjiamianmiao', pinyinAbbr: 'mhjmm',
    types: ["grass","dark"],
    baseStats: { hp: 76, atk: 110, def: 70, spa: 81, spd: 70, spe: 123 },
    abilities: [{"id":"overgrow","name":"茂盛","nameEn":"Overgrow","isHidden":false},{"id":"protean","name":"变幻自如","nameEn":"Protean","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","ally-switch","aura-sphere","bite","brick-break","bullet-seed","charm","chilling-water","copycat","dark-pulse","double-team","endure","energy-ball","facade","fake-tears","fling","flower-trick","foul-play","frenzy-plant","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","helping-hand","hyper-beam","knock-off","lash-out","leaf-storm","leech-seed","low-kick","low-sweep","mud-slap","nasty-plot","night-slash","petal-blizzard","play-rough","pollen-puff","power-gem","protect","psych-up","quick-attack","rest","seed-bomb","shadow-ball","shadow-claw","skill-swap","sleep-talk","solar-beam","spikes","substitute","sucker-punch","taunt","thief","throat-chop","thunder-punch","toxic-spikes","trailblaze","trick","trick-room","triple-axel","u-turn","worry-seed"]
  },
  'quaquaval': {
    id: 914, name: '狂欢浪舞鸭', nameEn: 'Quaquaval',
    pinyin: 'kuanghuanlangwuya', pinyinAbbr: 'khlwy',
    types: ["water","fighting"],
    baseStats: { hp: 85, atk: 120, def: 80, spa: 85, spd: 75, spe: 85 },
    abilities: [{"id":"torrent","name":"激流","nameEn":"Torrent","isHidden":false},{"id":"moxie","name":"自信过度","nameEn":"Moxie","isHidden":true}],
    moves: ["acrobatics","aerial-ace","agility","air-cutter","air-slash","aqua-cutter","aqua-jet","aqua-step","baton-pass","brave-bird","brick-break","bulk-up","chilling-water","close-combat","coaching","counter","detect","double-hit","encore","endeavor","endure","facade","feather-dance","fling","flip-turn","focus-energy","giga-impact","helping-hand","hurricane","hydro-cannon","hydro-pump","hyper-beam","ice-spinner","icy-wind","knock-off","last-resort","liquidation","low-kick","low-sweep","mega-kick","misty-terrain","protect","psych-up","rain-dance","rapid-spin","rest","reversal","roost","sleep-talk","substitute","surf","swords-dance","taunt","triple-axel","u-turn","upper-hand","water-pulse","wave-crash","whirlpool"]
  },
  'pawmot': {
    id: 923, name: '巴布土拨', nameEn: 'Pawmot',
    pinyin: 'babutubo', pinyinAbbr: 'bbtb',
    types: ["electric","fighting"],
    baseStats: { hp: 70, atk: 115, def: 70, spa: 70, spd: 60, spe: 105 },
    abilities: [{"id":"volt-absorb","name":"蓄电","nameEn":"Volt Absorb","isHidden":false},{"id":"natural-cure","name":"自然回复","nameEn":"Natural Cure","isHidden":false},{"id":"iron-fist","name":"铁拳","nameEn":"Iron Fist","isHidden":true}],
    moves: ["focus-punch","giga-impact","hyper-beam","close-combat","double-shock","double-edge","focus-blast","thunder","supercell-slam","play-rough","take-down","thunderbolt","wild-charge","body-press","crunch","dig","discharge","seed-bomb","slam","throat-chop","brick-break","fire-punch","ice-punch","thunder-punch","facade","volt-switch","knock-off","low-sweep","spark","thunder-fang","upper-hand","bite","rock-tomb","swift","thief","electroweb","charge-beam","metal-claw","quick-attack","scratch","thunder-shock","nuzzle","arm-thrust","electro-ball","fling","grass-knot","low-kick","super-fang","agility","baton-pass","bulk-up","charge","charm","coaching","eerie-impulse","electric-terrain","encore","endure","entrainment","growl","helping-hand","metronome","protect","rain-dance","rest","revival-blessing","sleep-talk","substitute","sunny-day","thunder-wave","fake-out"]
  },
  'maushold': {
    id: 925, name: '一家鼠', nameEn: 'Maushold',
    pinyin: 'yijiashu', pinyinAbbr: 'yjs',
    types: ["normal"],
    baseStats: { hp: 74, atk: 75, def: 70, spa: 65, spd: 75, spe: 111 },
    abilities: [{"id":"friend-guard","name":"友情防守","nameEn":"Friend Guard","isHidden":false},{"id":"cheek-pouch","name":"颊囊","nameEn":"Cheek Pouch","isHidden":false},{"id":"technician","name":"技术高手","nameEn":"Technician","isHidden":true}],
    moves: ["aerial-ace","after-you","agility","baby-doll-eyes","baton-pass","beat-up","bite","bullet-seed","charm","chilling-water","copycat","crunch","dig","double-hit","double-edge","encore","endure","facade","fake-tears","feint","follow-me","giga-impact","grass-knot","helping-hand","hyper-beam","hyper-voice","low-kick","low-sweep","mud-shot","mud-slap","play-rough","population-bomb","protect","rain-dance","rest","seed-bomb","shadow-claw","sleep-talk","substitute","sunny-day","super-fang","switcheroo","taunt","thief","thunder-wave","tickle","tidy-up","trailblaze","u-turn","water-pulse"]
  },
  'garganacl': {
    id: 934, name: '盐石巨灵', nameEn: 'Garganacl',
    pinyin: 'yanshijuling', pinyinAbbr: 'ysjl',
    types: ["rock"],
    baseStats: { hp: 100, atk: 100, def: 130, spa: 45, spd: 90, spe: 35 },
    abilities: [{"id":"purifying-salt","name":"洁净之盐","nameEn":"Purifying Salt","isHidden":false},{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":false},{"id":"clear-body","name":"恒净之躯","nameEn":"Clear Body","isHidden":true}],
    moves: ["block","body-press","body-slam","brick-break","bulldoze","curse","dig","double-edge","dynamic-punch","earth-power","earthquake","endure","explosion","facade","fire-punch","fissure","flash-cannon","fling","focus-punch","giga-impact","gravity","hammer-arm","hard-press","heavy-slam","helping-hand","hyper-beam","ice-punch","iron-defense","iron-head","meteor-beam","mud-shot","power-gem","protect","rain-dance","recover","rest","rock-blast","rock-polish","rock-slide","rock-tomb","salt-cure","sandstorm","sleep-talk","smack-down","stealth-rock","stomping-tantrum","stone-edge","substitute","sunny-day","thunder-punch","wide-guard","zen-headbutt"]
  },
  'armarouge': {
    id: 936, name: '红莲铠骑', nameEn: 'Armarouge',
    pinyin: 'hongliankaiqi', pinyinAbbr: 'hlkq',
    types: ["fire","psychic"],
    baseStats: { hp: 85, atk: 60, def: 100, spa: 125, spd: 80, spe: 75 },
    abilities: [{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"weak-armor","name":"碎裂铠甲","nameEn":"Weak Armor","isHidden":true}],
    moves: ["acid-spray","ally-switch","armor-cannon","aura-sphere","burn-up","calm-mind","clear-smog","confuse-ray","dark-pulse","destiny-bond","disable","dragon-pulse","endure","energy-ball","expanding-force","facade","fire-blast","fire-spin","flame-charge","flamethrower","flare-blitz","flash-cannon","fling","focus-blast","heat-wave","helping-hand","hyper-beam","iron-defense","lava-plume","light-screen","meteor-beam","mystical-fire","night-shade","overheat","protect","psych-up","psychic","psychic-terrain","psyshock","reflect","rest","scorching-sands","shadow-ball","sleep-talk","solar-beam","spite","stored-power","substitute","sunny-day","taunt","trick","trick-room","weather-ball","wide-guard","will-o-wisp"]
  },
  'ceruledge': {
    id: 937, name: '苍炎刃鬼', nameEn: 'Ceruledge',
    pinyin: 'cangyanrengui', pinyinAbbr: 'cyrg',
    types: ["fire","ghost"],
    baseStats: { hp: 75, atk: 125, def: 80, spa: 60, spd: 100, spe: 85 },
    abilities: [{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"weak-armor","name":"碎裂铠甲","nameEn":"Weak Armor","isHidden":true}],
    moves: ["ally-switch","bitter-blade","brick-break","bulk-up","burn-up","clear-smog","close-combat","confuse-ray","curse","destiny-bond","disable","dragon-claw","endure","facade","fire-blast","fire-spin","flame-charge","flamethrower","flare-blitz","fling","giga-impact","heat-wave","helping-hand","hex","iron-defense","iron-head","lava-plume","light-screen","night-shade","night-slash","overheat","phantom-force","poison-jab","poltergeist","protect","psych-up","psycho-cut","quick-guard","reflect","rest","shadow-ball","shadow-claw","shadow-sneak","sleep-talk","solar-blade","spite","stored-power","substitute","sunny-day","swords-dance","taunt","throat-chop","vacuum-wave","will-o-wisp","x-scissor"]
  },
  'scovillain': {
    id: 952, name: '狠辣椒', nameEn: 'Scovillain',
    pinyin: 'henlajiao', pinyinAbbr: 'hlj',
    types: ["grass","fire"],
    baseStats: { hp: 65, atk: 108, def: 65, spa: 108, spd: 65, spe: 75 },
    abilities: [{"id":"chlorophyll","name":"叶绿素","nameEn":"Chlorophyll","isHidden":false},{"id":"insomnia","name":"不眠","nameEn":"Insomnia","isHidden":false},{"id":"moody","name":"心情不定","nameEn":"Moody","isHidden":true}],
    forms: {"mega":{"name":"Mega Scovillain","nameEn":"Mega Scovillain","types":["grass","fire"],"baseStats":{"hp":65,"atk":138,"def":85,"spa":138,"spd":85,"spe":75},"ability":{"id":"spicy-spray","name":"Spicy Spray","nameEn":"Spicy Spray"}}},
    moves: ["bite","bullet-seed","burning-jealousy","crunch","double-hit","endeavor","endure","energy-ball","facade","fire-blast","fire-fang","fire-spin","flamethrower","flare-blitz","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","helping-hand","hyper-beam","ingrain","lash-out","leaf-storm","leech-seed","overheat","protect","rage-powder","rest","sandstorm","scary-face","seed-bomb","sleep-talk","solar-beam","spicy-extract","stomping-tantrum","substitute","sunny-day","super-fang","swagger","temper-flare","thief","thunder-fang","trailblaze","will-o-wisp","worry-seed","zen-headbutt"]
  },
  'tinkaton': {
    id: 959, name: '巨锻将', nameEn: 'Tinkaton',
    pinyin: 'juduanjiang', pinyinAbbr: 'jdj',
    types: ["fairy","steel"],
    baseStats: { hp: 85, atk: 75, def: 77, spa: 70, spd: 105, spe: 94 },
    abilities: [{"id":"mold-breaker","name":"破格","nameEn":"Mold Breaker","isHidden":false},{"id":"own-tempo","name":"我行我素","nameEn":"Own Tempo","isHidden":false},{"id":"pickpocket","name":"顺手牵羊","nameEn":"Pickpocket","isHidden":true}],
    moves: ["baby-doll-eyes","brick-break","brutal-swing","bulldoze","covet","draining-kiss","encore","endeavor","endure","facade","fake-out","fake-tears","feint","flash-cannon","flatter","fling","foul-play","gigaton-hammer","hard-press","heavy-slam","helping-hand","ice-hammer","knock-off","light-screen","metal-sound","play-rough","pounce","protect","quash","reflect","rest","rock-slide","rock-tomb","screech","skill-swap","skitter-smack","sleep-talk","smack-down","stealth-rock","steel-beam","stone-edge","substitute","sweet-kiss","swords-dance","thief","thunder-wave","wood-hammer"]
  },
  'palafin': {
    id: 964, name: '海豚侠', nameEn: 'Palafin',
    pinyin: 'haitunxia', pinyinAbbr: 'htx',
    types: ["water"],
    baseStats: { hp: 100, atk: 70, def: 72, spa: 53, spd: 62, spe: 100 },
    abilities: [{"id":"zero-to-hero","name":"Zero To Hero","nameEn":"Zero To Hero","isHidden":false}],
    moves: ["acrobatics","agility","aqua-jet","aqua-tail","aura-sphere","blizzard","body-slam","boomburst","bounce","bulk-up","charm","chilling-water","close-combat","counter","dive","double-hit","drain-punch","draining-kiss","encore","endeavor","endure","facade","fling","flip-turn","focus-blast","focus-energy","focus-punch","giga-impact","grass-knot","hard-press","haze","helping-hand","hydro-pump","hyper-beam","hyper-voice","ice-beam","ice-punch","icy-wind","iron-head","jet-punch","liquidation","outrage","protect","psych-up","rain-dance","rest","reversal","sleep-talk","substitute","surf","taunt","throat-chop","tickle","water-pulse","waterfall","wave-crash","whirlpool","zen-headbutt"]
  },
  'orthworm': {
    id: 968, name: '拖拖蚓', nameEn: 'Orthworm',
    pinyin: 'tuotuoyin', pinyinAbbr: 'tty',
    types: ["steel"],
    baseStats: { hp: 70, atk: 85, def: 145, spa: 60, spd: 55, spe: 65 },
    abilities: [{"id":"earth-eater","name":"食土","nameEn":"Earth Eater","isHidden":false},{"id":"sand-veil","name":"沙隐","nameEn":"Sand Veil","isHidden":true}],
    moves: ["body-press","body-slam","bulldoze","coil","curse","dig","double-edge","earth-power","earthquake","endure","facade","flash-cannon","giga-impact","heavy-slam","helping-hand","high-horsepower","hyper-beam","iron-defense","iron-head","iron-tail","metal-burst","metal-sound","mud-shot","mud-slap","protect","rest","rock-blast","rock-slide","rock-tomb","sand-tomb","sandstorm","shed-tail","sleep-talk","smack-down","spikes","stealth-rock","steel-beam","stomping-tantrum","substitute","wrap"]
  },
  'glimmora': {
    id: 970, name: '晶光花', nameEn: 'Glimmora',
    pinyin: 'jingguanghua', pinyinAbbr: 'jgh',
    types: ["rock","poison"],
    baseStats: { hp: 83, atk: 55, def: 90, spa: 130, spd: 81, spe: 86 },
    abilities: [{"id":"toxic-debris","name":"毒满地","nameEn":"Toxic Debris","isHidden":false},{"id":"corrosion","name":"腐蚀","nameEn":"Corrosion","isHidden":true}],
    forms: {"mega":{"name":"Mega Glimmora","nameEn":"Mega Glimmora","types":["rock","poison"],"baseStats":{"hp":83,"atk":90,"def":105,"spa":150,"spd":96,"spe":101},"ability":{"id":"adaptability","name":"适应力","nameEn":"Adaptability"}}},
    moves: ["acid-armor","acid-spray","ancient-power","confuse-ray","dazzling-gleam","earth-power","endure","energy-ball","explosion","facade","flash-cannon","giga-impact","gunk-shot","hyper-beam","iron-defense","light-screen","memento","meteor-beam","mortal-spin","mud-shot","power-gem","protect","rain-dance","reflect","rest","rock-blast","rock-polish","rock-slide","rock-tomb","sand-tomb","sandstorm","self-destruct","sleep-talk","sludge-bomb","sludge-wave","smack-down","solar-beam","spikes","spiky-shield","stealth-rock","stone-edge","substitute","sunny-day","toxic","toxic-spikes","venoshock"]
  },
  'dondozo': {
    id: 977, name: '吃吼霸', nameEn: 'Dondozo',
    pinyin: 'chihouba', pinyinAbbr: 'chb',
    types: ["water"],
    baseStats: { hp: 150, atk: 100, def: 115, spa: 65, spd: 65, spe: 35 },
    abilities: [{"id":"unaware","name":"纯朴","nameEn":"Unaware","isHidden":false},{"id":"oblivious","name":"迟钝","nameEn":"Oblivious","isHidden":false},{"id":"water-veil","name":"水幕","nameEn":"Water Veil","isHidden":true}],
    moves: ["giga-impact","hyper-beam","double-edge","outrage","thrash","wave-crash","hydro-pump","earthquake","aqua-tail","surf","take-down","body-slam","liquidation","body-press","crunch","dive","order-up","waterfall","zen-headbutt","rock-slide","stomping-tantrum","facade","ice-fang","avalanche","bulldoze","water-pulse","chilling-water","tackle","water-gun","fissure","flail","heavy-slam","curse","endure","noble-roar","protect","rain-dance","rest","scary-face","sleep-talk","soak","substitute","supersonic","tickle","yawn"]
  },
  'tatsugiri': {
    id: 978, name: '米立龙', nameEn: 'Tatsugiri',
    pinyin: 'mililong', pinyinAbbr: 'mll',
    types: ["dragon","water"],
    baseStats: { hp: 68, atk: 50, def: 60, spa: 120, spd: 95, spe: 82 },
    abilities: [{"id":"commander","name":"发号施令","nameEn":"Commander","isHidden":false},{"id":"storm-drain","name":"引水","nameEn":"Storm Drain","isHidden":true}],
    forms: {"mega":{"name":"Mega Tatsugiri","nameEn":"Mega Tatsugiri","types":["dragon","water"],"baseStats":{"hp":68,"atk":65,"def":90,"spa":135,"spd":125,"spe":92},"ability":{"id":"commander-surge","name":"Commander Surge","nameEn":"Commander Surge"}}},
    moves: ["giga-impact","hyper-beam","draco-meteor","outrage","hydro-pump","muddy-water","surf","take-down","dragon-pulse","lunge","facade","water-pulse","icy-wind","chilling-water","rapid-spin","water-gun","whirlpool","counter","mirror-coat","baton-pass","dragon-cheer","dragon-dance","endure","harden","helping-hand","memento","nasty-plot","protect","rain-dance","rest","sleep-talk","soak","splash","substitute","taunt","ice-beam"]
  },
  'farigiraf': {
    id: 981, name: '奇麒麟', nameEn: 'Farigiraf',
    pinyin: 'qiqilin', pinyinAbbr: 'qql',
    types: ["normal","psychic"],
    baseStats: { hp: 120, atk: 90, def: 70, spa: 110, spd: 70, spe: 60 },
    abilities: [{"id":"cud-chew","name":"反刍","nameEn":"Cud Chew","isHidden":false},{"id":"armor-tail","name":"尾甲","nameEn":"Armor Tail","isHidden":false},{"id":"sap-sipper","name":"食草","nameEn":"Sap Sipper","isHidden":true}],
    moves: ["agility","ally-switch","amnesia","assurance","baton-pass","beat-up","body-slam","bulldoze","calm-mind","charge-beam","confuse-ray","crunch","curse","dazzling-gleam","double-hit","double-edge","earthquake","endeavor","endure","energy-ball","expanding-force","facade","foul-play","future-sight","giga-impact","grass-knot","gravity","guard-swap","helping-hand","high-horsepower","hyper-beam","hyper-voice","imprison","iron-head","light-screen","low-kick","mean-look","mirror-coat","nasty-plot","night-shade","power-swap","protect","psych-up","psychic","psychic-fangs","psychic-noise","psychic-terrain","psyshock","rain-dance","reflect","rest","roar","shadow-ball","skill-swap","sleep-talk","stomping-tantrum","stored-power","substitute","sunny-day","thief","thunder","thunder-wave","thunderbolt","trailblaze","trick","trick-room","twin-beam","uproar","wish","zen-headbutt"]
  },
  'kingambit': {
    id: 983, name: '仆刀将军', nameEn: 'Kingambit',
    pinyin: 'pudaojiangjun', pinyinAbbr: 'pdjj',
    types: ["dark","steel"],
    baseStats: { hp: 100, atk: 135, def: 120, spa: 60, spd: 85, spe: 50 },
    abilities: [{"id":"defiant","name":"不服输","nameEn":"Defiant","isHidden":false},{"id":"supreme-overlord","name":"大将","nameEn":"Supreme Overlord","isHidden":false},{"id":"pressure","name":"压迫感","nameEn":"Pressure","isHidden":true}],
    moves: ["aerial-ace","air-slash","assurance","brick-break","dark-pulse","dig","endure","facade","flash-cannon","fling","focus-blast","foul-play","giga-impact","grass-knot","guillotine","hyper-beam","iron-defense","iron-head","kowtow-cleave","lash-out","low-kick","low-sweep","mean-look","metal-burst","metal-sound","night-slash","poison-jab","protect","quick-guard","rain-dance","rest","reversal","rock-tomb","sandstorm","scary-face","shadow-claw","sleep-talk","snarl","spite","stealth-rock","steel-beam","stone-edge","substitute","sucker-punch","swords-dance","taunt","thief","throat-chop","thunder-wave","torment","x-scissor","zen-headbutt"]
  },
  'sinistcha': {
    id: 1013, name: '来悲粗茶', nameEn: 'Sinistcha',
    pinyin: 'laibeicucha', pinyinAbbr: 'lbcc',
    types: ["grass","ghost"],
    baseStats: { hp: 71, atk: 60, def: 106, spa: 121, spd: 80, spe: 70 },
    abilities: [{"id":"hospitality","name":"款待","nameEn":"Hospitality","isHidden":false},{"id":"heatproof","name":"耐热","nameEn":"Heatproof","isHidden":true}],
    moves: ["calm-mind","curse","endure","energy-ball","foul-play","giga-drain","grassy-terrain","hex","hyper-beam","imprison","iron-defense","leaf-storm","life-dew","matcha-gotcha","memento","nasty-plot","night-shade","pain-split","phantom-force","poltergeist","protect","psych-up","rage-powder","reflect","rest","scald","shadow-ball","sleep-talk","solar-beam","spite","strength-sap","stun-spore","substitute","trick-room","uproar"]
  },
  'archaludon': {
    id: 1018, name: '铝钢桥龙', nameEn: 'Archaludon',
    pinyin: 'lügangqiaolong', pinyinAbbr: 'lgql',
    types: ["steel","dragon"],
    baseStats: { hp: 90, atk: 105, def: 130, spa: 125, spd: 65, spe: 85 },
    abilities: [{"id":"stamina","name":"持久力","nameEn":"Stamina","isHidden":false},{"id":"sturdy","name":"结实","nameEn":"Sturdy","isHidden":false},{"id":"stalwart","name":"坚毅","nameEn":"Stalwart","isHidden":true}],
    moves: ["aura-sphere","body-slam","breaking-swipe","brick-break","dark-pulse","double-edge","draco-meteor","dragon-cheer","dragon-pulse","dragon-tail","earthquake","electro-shot","endure","facade","flash-cannon","focus-energy","foul-play","giga-impact","gyro-ball","hard-press","heavy-slam","hyper-beam","iron-defense","iron-head","light-screen","metal-burst","metal-sound","meteor-beam","mirror-coat","night-slash","outrage","protect","reflect","rest","roar","rock-slide","rock-tomb","scary-face","sleep-talk","smack-down","snarl","solar-beam","stealth-rock","steel-beam","stone-edge","substitute","swords-dance","thunder","thunder-wave","thunderbolt"]
  },
  'hydrapple': {
    id: 1019, name: '蜜集大蛇', nameEn: 'Hydrapple',
    pinyin: 'mijidashe', pinyinAbbr: 'mjds',
    types: ["grass","dragon"],
    baseStats: { hp: 106, atk: 80, def: 110, spa: 120, spd: 80, spe: 44 },
    abilities: [{"id":"supersweet-syrup","name":"甘露之蜜","nameEn":"Supersweet Syrup","isHidden":false},{"id":"regenerator","name":"再生力","nameEn":"Regenerator","isHidden":false},{"id":"sticky-hold","name":"黏着","nameEn":"Sticky Hold","isHidden":true}],
    moves: ["body-press","body-slam","breaking-swipe","bug-bite","bullet-seed","curse","double-hit","double-edge","draco-meteor","dragon-cheer","dragon-pulse","dragon-tail","earth-power","earthquake","endure","energy-ball","facade","fickle-beam","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","gyro-ball","heavy-slam","hydro-pump","hyper-beam","infestation","leaf-storm","nasty-plot","outrage","pollen-puff","power-whip","protect","rain-dance","recover","recycle","reflect","rest","seed-bomb","sleep-talk","solar-beam","substitute","sucker-punch","sunny-day","sweet-scent","syrup-bomb","uproar","yawn"]
  },
  'mamoswine': {
    id: 473, name: '象牙猪', nameEn: 'Mamoswine',
    pinyin: 'xiangyazhu', pinyinAbbr: 'xyz',
    types: ["ice","ground"],
    baseStats: { hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80 },
    abilities: [{"id":"oblivious","name":"迟钝","nameEn":"Oblivious","isHidden":false},{"id":"snow-cloak","name":"雪隐","nameEn":"Snow Cloak","isHidden":false},{"id":"thick-fat","name":"厚脂肪","nameEn":"Thick Fat","isHidden":true}],
    moves: ["amnesia","ancient-power","attract","avalanche","bite","blizzard","body-press","body-slam","bulldoze","charm","curse","dig","double-hit","double-edge","earth-power","earthquake","endeavor","endure","facade","fissure","flail","freeze-dry","giga-impact","hard-press","haze","heavy-slam","high-horsepower","hyper-beam","ice-beam","ice-fang","ice-shard","icicle-crash","icicle-spear","icy-wind","iron-head","knock-off","mud-shot","mud-slap","protect","rain-dance","reflect","rest","reversal","roar","rock-blast","rock-slide","rock-tomb","sand-tomb","sandstorm","scary-face","sleep-talk","smack-down","snore","snowscape","stealth-rock","stomping-tantrum","stone-edge","substitute","superpower","thrash","throat-chop","trailblaze"]
  },
  'chandelure': {
    id: 609, name: '水晶灯火灵', nameEn: 'Chandelure',
    pinyin: 'shuijingdenghuoling', pinyinAbbr: 'sjdhl',
    types: ["ghost","fire"],
    baseStats: { hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80 },
    abilities: [{"id":"flash-fire","name":"引火","nameEn":"Flash Fire","isHidden":false},{"id":"flame-body","name":"火焰之躯","nameEn":"Flame Body","isHidden":false},{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator","isHidden":true}],
    forms: {"mega":{"name":"Mega Chandelure","nameEn":"Mega Chandelure","types":["ghost","fire"],"baseStats":{"hp":60,"atk":75,"def":110,"spa":175,"spd":110,"spe":90},"ability":{"id":"infiltrator","name":"穿透","nameEn":"Infiltrator"}}},
    moves: ["acid-armor","burning-jealousy","calm-mind","clear-smog","confuse-ray","curse","dark-pulse","double-team","endure","energy-ball","facade","fire-blast","fire-spin","flame-charge","flamethrower","flare-blitz","giga-impact","haze","heat-wave","hex","hyper-beam","imprison","inferno","lash-out","memento","minimize","mystical-fire","night-shade","overheat","pain-split","payback","poltergeist","power-split","protect","psych-up","psychic","rest","round","safeguard","shadow-ball","skitter-smack","sleep-talk","snore","solar-beam","spite","substitute","sunny-day","taunt","temper-flare","thief","trailblaze","trick","trick-room","will-o-wisp"]
  },
  'floette': {
    id: 670, name: '花叶蒂-蓝花', nameEn: 'Floette',
    pinyin: 'huayedi-lanhua', pinyinAbbr: 'hyd-lh',
    types: ["fairy"],
    baseStats: { hp: 54, atk: 45, def: 47, spa: 75, spd: 98, spe: 52 },
    abilities: [{"id":"flower-veil","name":"花幕","nameEn":"Flower Veil","isHidden":false},{"id":"symbiosis","name":"共生","nameEn":"Symbiosis","isHidden":true}],
    forms: {"mega":{"name":"Mega Floette","nameEn":"Mega Floette","types":["fairy"],"baseStats":{"hp":74,"atk":85,"def":87,"spa":155,"spd":148,"spe":102},"ability":{"id":"fairy-aura","name":"妖精气场","nameEn":"Fairy Aura"}}},
    moves: ["alluring-voice","baton-pass","calm-mind","charm","chilling-water","copycat","dazzling-gleam","draining-kiss","endeavor","endure","energy-ball","facade","giga-drain","grass-knot","grassy-terrain","helping-hand","hyper-beam","light-of-ruin","light-screen","misty-terrain","moonblast","petal-blizzard","petal-dance","pollen-puff","protect","psychic","rain-dance","rest","safeguard","seed-bomb","skill-swap","sleep-talk","solar-beam","stored-power","substitute","sunny-day","synthesis","tearful-look","trailblaze","trick","wish"]
  },
  'goodra': {
    id: 706, name: '黏美龙', nameEn: 'Goodra',
    pinyin: 'nianmeilong', pinyinAbbr: 'nml',
    types: ["dragon"],
    baseStats: { hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80 },
    abilities: [{"id":"sap-sipper","name":"食草","nameEn":"Sap Sipper","isHidden":false},{"id":"hydration","name":"湿润之躯","nameEn":"Hydration","isHidden":false},{"id":"gooey","name":"黏滑","nameEn":"Gooey","isHidden":true}],
    moves: ["acid-armor","acid-spray","aqua-tail","assurance","blizzard","body-press","body-slam","breaking-swipe","brutal-swing","bulldoze","charm","chilling-water","counter","curse","draco-meteor","dragon-cheer","dragon-claw","dragon-pulse","dragon-tail","earthquake","endure","facade","feint","fire-blast","fire-punch","flail","flamethrower","focus-blast","focus-punch","giga-drain","giga-impact","hydro-pump","hyper-beam","ice-beam","iron-tail","knock-off","life-dew","mega-kick","mud-shot","muddy-water","outrage","power-whip","protect","rain-dance","rest","rock-slide","round","scald","skitter-smack","sleep-talk","sludge-bomb","sludge-wave","snore","stomping-tantrum","substitute","sunny-day","superpower","surf","tearful-look","thunder","thunder-punch","thunderbolt","toxic","water-pulse","weather-ball"]
  },
  'hisuian-goodra': {
    id: 706, name: '黏美龙-洗翠', nameEn: 'Hisuian Goodra',
    pinyin: 'nianmeilong-xicui', pinyinAbbr: 'nml-xc',
    types: ["steel","dragon"],
    baseStats: { hp: 80, atk: 100, def: 100, spa: 110, spd: 150, spe: 60 },
    abilities: [{"id":"sap-sipper","name":"食草","nameEn":"Sap Sipper","isHidden":false},{"id":"shell-armor","name":"硬壳盔甲","nameEn":"Shell Armor","isHidden":false},{"id":"gooey","name":"黏滑","nameEn":"Gooey","isHidden":true}],
    moves: ["absorb","acid-armor","acid-spray","ancient-power","blizzard","body-slam","breaking-swipe","bulldoze","charm","chilling-water","curse","draco-meteor","dragon-breath","dragon-claw","dragon-pulse","earthquake","endure","facade","fire-blast","fire-punch","flamethrower","flash-cannon","giga-impact","heavy-slam","hydro-pump","hyper-beam","ice-beam","iron-defense","iron-head","iron-tail","knock-off","magnet-bomb","mud-shot","muddy-water","outrage","protect","rock-slide","rock-tomb","sludge-bomb","sludge-wave","steel-beam","substitute","surf","tackle","take-down","thunder","thunder-punch","thunderbolt","toxic","water-gun","water-pulse"]
  },
  'trevenant': {
    id: 709, name: '朽木妖', nameEn: 'Trevenant',
    pinyin: 'xiumuyao', pinyinAbbr: 'xmy',
    types: ["ghost","grass"],
    baseStats: { hp: 85, atk: 110, def: 76, spa: 65, spd: 82, spe: 56 },
    abilities: [{"id":"natural-cure","name":"自然回复","nameEn":"Natural Cure","isHidden":false},{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":false},{"id":"harvest","name":"收获","nameEn":"Harvest","isHidden":true}],
    moves: ["ally-switch","brutal-swing","bulldoze","burning-jealousy","calm-mind","confuse-ray","curse","dark-pulse","destiny-bond","dig","disable","drain-punch","earthquake","endure","energy-ball","facade","focus-blast","forest-s-curse","foul-play","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","haze","hex","horn-leech","hyper-beam","imprison","ingrain","knock-off","lash-out","leaf-storm","leech-seed","night-shade","pain-split","phantom-force","poison-jab","poltergeist","protect","psych-up","psychic","psychic-noise","rain-dance","reflect","rest","rock-slide","round","safeguard","scary-face","seed-bomb","shadow-ball","shadow-claw","shadow-punch","skill-swap","skitter-smack","sleep-talk","snore","solar-beam","spite","substitute","sucker-punch","sunny-day","swagger","thief","toxic","trailblaze","trick","trick-room","will-o-wisp","wood-hammer","x-scissor"]
  },
  'appletun': {
    id: 842, name: '丰蜜龙', nameEn: 'Appletun',
    pinyin: 'fengmilong', pinyinAbbr: 'fml',
    types: ["grass","dragon"],
    baseStats: { hp: 110, atk: 85, def: 80, spa: 100, spd: 80, spe: 30 },
    abilities: [{"id":"ripen","name":"熟成","nameEn":"Ripen","isHidden":false},{"id":"gluttony","name":"贪吃鬼","nameEn":"Gluttony","isHidden":false},{"id":"thick-fat","name":"厚脂肪","nameEn":"Thick Fat","isHidden":true}],
    moves: ["amnesia","apple-acid","body-press","body-slam","bulldoze","bullet-seed","curse","draco-meteor","dragon-pulse","dragon-tail","earthquake","endure","energy-ball","facade","giga-drain","giga-impact","grass-knot","grassy-glide","grassy-terrain","growth","gyro-ball","heavy-slam","helping-hand","high-horsepower","hyper-beam","iron-defense","iron-head","leaf-storm","leech-seed","light-screen","outrage","pounce","protect","rain-dance","recover","recycle","reflect","rest","round","seed-bomb","sleep-talk","snore","solar-beam","stomping-tantrum","substitute","sucker-punch","sunny-day","superpower","sweet-scent","trailblaze","zen-headbutt"]
  },
  'grimmsnarl': {
    id: 861, name: '长毛巨魔', nameEn: 'Grimmsnarl',
    pinyin: 'changmaojumo', pinyinAbbr: 'cmjm',
    types: ["dark","fairy"],
    baseStats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
    abilities: [{"id":"prankster","name":"恶作剧之心","nameEn":"Prankster","isHidden":false},{"id":"frisk","name":"察觉","nameEn":"Frisk","isHidden":false},{"id":"pickpocket","name":"顺手牵羊","nameEn":"Pickpocket","isHidden":true}],
    moves: ["play-rough","hammer-arm","foul-play","body-slam","crunch","dark-pulse","dazzling-gleam","body-press","throat-chop","false-surrender","spirit-break","stomping-tantrum","lash-out","brick-break","drain-punch","fire-punch","thunder-punch","ice-punch","shadow-claw","sucker-punch","burning-jealousy","facade","low-sweep","bite","assurance","draining-kiss","fake-out","protect","reflect","light-screen","thunder-wave","taunt","nasty-plot","bulk-up","trick","imprison","swagger","torment","fake-tears","parting-shot","scary-face","misty-terrain","substitute","endure","rest","sleep-talk"]
  },
  'skeledirge': {
    id: 911, name: '骨纹巨声鳄', nameEn: 'Skeledirge',
    pinyin: 'guwenjushenge', pinyinAbbr: 'gwjse',
    types: ["fire","ghost"],
    baseStats: { hp: 104, atk: 75, def: 100, spa: 110, spd: 75, spe: 66 },
    abilities: [{"id":"blaze","name":"猛火","nameEn":"Blaze","isHidden":false},{"id":"unaware","name":"纯朴","nameEn":"Unaware","isHidden":true}],
    moves: ["alluring-voice","belch","bite","blast-burn","body-slam","burn-up","crunch","curse","dig","earth-power","earthquake","encore","endure","facade","fire-blast","fire-fang","fire-spin","flame-charge","flamethrower","flare-blitz","giga-impact","heat-crash","heat-wave","helping-hand","hex","hyper-beam","hyper-voice","imprison","mud-slap","night-shade","outrage","overheat","poltergeist","protect","rest","roar","round","scary-face","scorching-sands","seed-bomb","shadow-ball","shadow-claw","sing","slack-off","sleep-talk","snarl","solar-beam","stomping-tantrum","substitute","sunny-day","temper-flare","thunder-fang","torch-song","will-o-wisp","yawn","zen-headbutt"]
  },
};

// 按名称搜索宝可梦（支持中文、英文、全拼、拼音首字母）
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
