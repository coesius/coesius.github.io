/**
 * 速度比较模块
 * 枚举对方所有可能的速度配置，找出哪些情况能超过我方速度
 */

/** 天气加速特性：特性ID → 所需天气 */
const ABILITY_SPEED_WEATHER = {
  'swift-swim':  'rain',
  'chlorophyll': 'sun',
  'sand-rush':   'sandstorm',
  'slush-rush':  'hail'
};

/**
 * 根据特性和当前天气返回速度倍率
 */
function getAbilitySpeedMultiplier(abilityId, weather) {
  const required = ABILITY_SPEED_WEATHER[abilityId];
  return (required && required === weather) ? 2 : 1;
}

/**
 * 分析对方速度与我方速度的关系
 *
 * @param {number} mySpe          我方实际速度（含道具/状态/rank）
 * @param {Object} oppPokemon     对方宝可梦数据
 * @param {Object} oppKnownInfo   已知信息 { item, nature, rank, tailwind, trickRoom }
 * @param {Object} myField        我方场地 { tailwind }
 * @param {boolean} trickRoom     是否奇异空间
 * @returns {Object} { faster: Array, slower: Array, equal: Array }
 */
function analyzeSpeed(mySpe, oppPokemon, oppKnownInfo = {}, myField = {}, trickRoom = false) {
  const baseSpe = oppPokemon.baseStats.spe;

  // 我方实际速度（考虑顺风）
  const myEffectiveSpe = myField.tailwind ? mySpe * 2 : mySpe;

  // 枚举对方所有关键速度配置
  const configs = generateSpeedConfigs(baseSpe, oppKnownInfo);

  const faster = [];   // 对方比我快
  const equal = [];    // 对方与我相同速度
  const slower = [];   // 对方比我慢

  for (const cfg of configs) {
    const oppFinalSpe = cfg.speed;

    // 奇异空间下比较翻转（更慢的先手）
    let comparison;
    if (trickRoom) {
      if (oppFinalSpe < myEffectiveSpe) comparison = 'faster'; // 奇异空间更慢的先手
      else if (oppFinalSpe > myEffectiveSpe) comparison = 'slower';
      else comparison = 'equal';
    } else {
      if (oppFinalSpe > myEffectiveSpe) comparison = 'faster';
      else if (oppFinalSpe < myEffectiveSpe) comparison = 'slower';
      else comparison = 'equal';
    }

    const entry = { ...cfg, myEffectiveSpe, comparison };
    if (comparison === 'faster') faster.push(entry);
    else if (comparison === 'equal') equal.push(entry);
    else slower.push(entry);
  }

  const deduped = {
    faster: pruneDominated(deduplicateByNatureItem(faster, 'min')),
    equal: deduplicateBySpeed(equal),
    slower: pruneDominated(deduplicateByNatureItem(slower, 'max'), 'slower')
  };

  return {
    mySpeed: myEffectiveSpe,
    trickRoom,
    ...deduped
  };
}

/**
 * 生成对方速度的关键枚举配置
 * 根据已知信息进行约束，未知则枚举所有可能
 */
function generateSpeedConfigs(baseSpe, knownInfo = {}) {
  const results = [];

  // SP分配：0~32逐点枚举
  const spValues = Array.from({ length: 33 }, (_, i) => i);

  // 性格：如果已知则只用已知的，否则枚举三种
  let natureOptions;
  if (knownInfo.nature) {
    const nat = NATURES[knownInfo.nature];
    const mult = nat ? (nat.boost === 'spe' ? 1.1 : (nat.reduce === 'spe' ? 0.9 : 1.0)) : 1.0;
    natureOptions = [{ mult, label: NATURES[knownInfo.nature]?.name || knownInfo.nature, key: mult === 1.1 ? 'boost' : mult === 0.9 ? 'reduce' : 'neutral' }];
  } else {
    natureOptions = [
      { mult: 0.9, label: '减速性格', key: 'reduce' },
      { mult: 1.0, label: '中性性格', key: 'neutral' },
      { mult: 1.1, label: '加速性格', key: 'boost' }
    ];
  }

  // 道具：如果已知则只用已知的，否则枚举无道具和讲究围巾
  let itemOptions;
  if (knownInfo.item) {
    const itemMult = getItemSpeedMultiplier(knownInfo.item);
    const itemName = (typeof ITEMS !== 'undefined' && ITEMS[knownInfo.item])
      ? ITEMS[knownInfo.item].name
      : knownInfo.item;
    itemOptions = [{ mult: itemMult, label: itemName, id: knownInfo.item }];
  } else {
    itemOptions = [
      { mult: 1, label: '无道具', id: 'none' },
      { mult: 1.5, label: '讲究围巾', id: 'choice-scarf' }
    ];
  }

  // 顺风状态：当前场面已知，直接使用
  const tailwindActive = !!knownInfo.tailwind;
  const tailwindOptions = [{ mult: tailwindActive ? 2 : 1, label: tailwindActive ? '顺风' : '', active: tailwindActive }];

  // Rank 变化：当前场面已知，直接使用（默认 0）
  const rankOptions = [knownInfo.rank ?? 0];

  // 特性速度枚举
  const knownAbilityId = knownInfo.ability || '';
  const weather = knownInfo.weather || 'none';
  let abilityOptions;
  if (knownAbilityId) {
    // 特性已知：直接使用
    const mult = getAbilitySpeedMultiplier(knownAbilityId, weather);
    const abilityData = (knownInfo.pokemonAbilities || []).find(a => a.id === knownAbilityId);
    const label = mult > 1 ? `${abilityData?.name || knownAbilityId}×2` : '';
    abilityOptions = [{ mult, label, key: knownAbilityId }];
  } else {
    // 特性未知：基础无加成；若当前天气能触发对方可能的加速特性，额外枚举该情况
    abilityOptions = [{ mult: 1, label: '', key: 'none' }];
    for (const [abId, requiredWeather] of Object.entries(ABILITY_SPEED_WEATHER)) {
      if (requiredWeather === weather) {
        const abilityData = (knownInfo.pokemonAbilities || []).find(a => a.id === abId);
        if (abilityData) {
          abilityOptions.push({ mult: 2, label: `${abilityData.name}×2`, key: abId });
        }
      }
    }
  }

  for (const ability of abilityOptions) {
    for (const sp of spValues) {
      for (const nat of natureOptions) {
        const baseStat = calcStat(baseSpe, sp, nat.mult);

        for (const item of itemOptions) {
          // 减速性格不携带讲究围巾
          if (nat.key === 'reduce' && item.id === 'choice-scarf') continue;

          for (const tailwind of tailwindOptions) {
            for (const rank of rankOptions) {
              const withRank = applyRankMult(baseStat, rank);
              const withItem = Math.floor(withRank * item.mult);
              const withTailwind = tailwind.active ? withItem * 2 : withItem;
              const finalSpe = Math.floor(withTailwind * ability.mult);

              // 构建标签
              const parts = [];
              parts.push(`速度${sp}SP`);
              parts.push(nat.label);
              if (item.label) parts.push(item.label);
              if (tailwind.active) parts.push('顺风×2');
              if (ability.label) parts.push(ability.label);
              if (rank > 0) parts.push(`+${rank}级`);
              else if (rank < 0) parts.push(`${rank}级`);

              results.push({
                sp,
                nature: nat.label,
                natureKey: nat.key,
                item: item.label,
                itemId: item.id,
                abilityKey: ability.key,
                tailwind: tailwind.active,
                rank,
                baseStat,
                speed: finalSpe,
                label: parts.filter(Boolean).join(' · ')
              });
            }
          }
        }
      }
    }
  }

  return results;
}

/**
 * 按速度值去重，只保留每个速度值最简单的配置描述
 * 简单度：SP越少、rank越小、无道具 > 有道具
 */
function deduplicateBySpeed(configs) {
  const speedMap = new Map();

  for (const cfg of configs) {
    const key = cfg.speed;
    if (!speedMap.has(key)) {
      speedMap.set(key, cfg);
    } else {
      const existing = speedMap.get(key);
      // 优先保留：无顺风 > 顺风，低rank，少SP，无道具
      if (isSimpler(cfg, existing)) {
        speedMap.set(key, cfg);
      }
    }
  }

  // 返回并再次按速度值排序
  return Array.from(speedMap.values()).sort((a, b) => a.speed - b.speed);
}

/**
 * 按 (natureKey × itemId) 分组，保留最小/最大 SP 的配置，并在标签上附加"以上"/"以下"
 * @param {Array} configs
 * @param {'min'|'max'} mode  'min' → 更快情况保留最小SP；'max' → 更慢情况保留最大SP
 */
function deduplicateByNatureItem(configs, mode) {
  const groupMap = new Map();

  for (const cfg of configs) {
    const key = `${cfg.natureKey}|${cfg.itemId}|${cfg.abilityKey || 'none'}`;
    if (!groupMap.has(key)) {
      groupMap.set(key, cfg);
    } else {
      const existing = groupMap.get(key);
      const keep = mode === 'min' ? cfg.sp < existing.sp : cfg.sp > existing.sp;
      if (keep) groupMap.set(key, cfg);
    }
  }

  return Array.from(groupMap.values())
    .map(cfg => {
      const suffix = mode === 'min' ? '以上' : '以下';
      // Replace "速度XSP" with "速度XSP以上/以下"
      const label = cfg.label.replace(/速度(\d+)SP/, `速度$1SP${suffix}`);
      return { ...cfg, label };
    })
    .sort((a, b) => a.speed - b.speed);
}

/**
 * 从 faster/slower 列表中移除被其他条目完全覆盖的冗余条目
 * 规则（针对 faster）：若存在条目 A 满足：
 *   性格强度(A) ≤ 性格强度(B)，道具强度(A) ≤ 道具强度(B)，SP(A) ≤ SP(B)，且特性组相同
 * 则 B 被 A 支配（A 以更低条件就能超速，B 无需单独展示）
 */
/**
 * mode='faster': 若存在条件更弱的 A 仍能超速（A ≤ B 各维度），则 B 冗余
 * mode='slower': 若存在条件更强的 A 仍被超速（A ≥ B 各维度），则 B 冗余
 *   → slower 保留"即使对方满投资仍然更慢"的最有力说明
 */
function pruneDominated(configs, mode = 'faster') {
  const natRank = { reduce: 0, neutral: 1, boost: 2 };
  const itemRank = id => (id === 'choice-scarf' ? 1 : 0);

  return configs.filter(b =>
    !configs.some(a => {
      if (a === b) return false;
      if ((a.abilityKey || 'none') !== (b.abilityKey || 'none')) return false;
      const aNat  = natRank[a.natureKey],  bNat  = natRank[b.natureKey];
      const aItem = itemRank(a.itemId),    bItem = itemRank(b.itemId);
      const aSp   = a.sp,                  bSp   = b.sp;

      let domNat, domItem, domSp;
      if (mode === 'faster') {
        // A 条件更弱或相等 → B 冗余
        domNat  = aNat  <= bNat;
        domItem = aItem <= bItem;
        domSp   = aSp   <= bSp;
      } else {
        // A 条件更强或相等 → B 冗余
        domNat  = aNat  >= bNat;
        domItem = aItem >= bItem;
        domSp   = aSp   >= bSp;
      }
      const anyStrict = aNat !== bNat || aItem !== bItem || aSp !== bSp;
      return domNat && domItem && domSp && anyStrict;
    })
  );
}

/**
 * 判断 a 是否比 b 更"简单"（条件更少）
 */
function isSimpler(a, b) {
  // 顺风条件更复杂
  if (a.tailwind && !b.tailwind) return false;
  if (!a.tailwind && b.tailwind) return true;
  // rank越低越简单
  if (a.rank !== b.rank) return a.rank < b.rank;
  // 无道具优先
  if (a.itemId === 'none' && b.itemId !== 'none') return true;
  if (a.itemId !== 'none' && b.itemId === 'none') return false;
  // SP越少越简单
  return a.sp < b.sp;
}

/**
 * 生成速度分析的显示文本
 * @param {Object} analysis analyzeSpeed 的返回值
 * @param {string} oppName  对方宝可梦名称
 * @returns {Object} { fasterCases, slowerCases, equalCases }
 */
function formatSpeedAnalysis(analysis) {
  const { mySpeed, faster, slower, equal, trickRoom } = analysis;

  return {
    mySpeed,
    trickRoom,
    fasterCases: faster.map(cfg => ({
      speed: cfg.speed,
      label: cfg.label,
      isCrit: false,
      remark: cfg.speed > mySpeed * 1.3 ? '远超我方速度' : ''
    })),
    slowerCases: slower.map(cfg => ({
      speed: cfg.speed,
      label: cfg.label
    })),
    equalCases: equal.map(cfg => ({
      speed: cfg.speed,
      label: cfg.label,
      remark: '同速（速度相同时随机先手）'
    }))
  };
}
