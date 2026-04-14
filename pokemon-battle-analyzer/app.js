/**
 * 宝可梦冠军对战分析工具 - 主逻辑
 * app.js
 */

// =============================================
// 应用状态
// =============================================
const AppState = {
  // 队伍数据
  teams: {},
  activeTeamId: null,

  // 当前队伍（6只宝可梦配置）
  currentTeam: {
    name: '默认队伍',
    pokemon: Array(6).fill(null).map(() => createEmptySlot())
  },

  // 对战分析状态
  battle: {
    mySlotIndex: null,     // 当前出战的我方宝可梦槽位
    myStatus: null,        // 我方异常状态
    myRanks: { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    myTailwind: false,

    oppPokemonId: null,    // 对方宝可梦ID
    oppNature: '',         // 已知对方性格（空=未知）
    oppItem: '',           // 已知对方道具（空=未知）
    oppStatus: null,
    oppRanks: { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    oppTailwind: false,

    // 场地
    weather: 'none',
    terrain: 'none',
    trickRoom: false
  }
};

function createEmptySlot() {
  return {
    speciesId: null,
    form: null,
    ability: null,
    nature: 'hardy',
    item: 'none',
    sp: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    moves: [null, null, null, null]
  };
}

// =============================================
// 初始化
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  initTeamSelector();
  renderTeamPage();
  initBattlePage();
});

// =============================================
// LocalStorage 持久化
// =============================================
const STORAGE_KEY = 'pkm_battle_analyzer_v1';

function saveToStorage() {
  const data = {
    teams: AppState.teams,
    activeTeamId: AppState.activeTeamId,
    currentTeam: AppState.currentTeam
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    AppState.teams = data.teams || {};
    AppState.activeTeamId = data.activeTeamId || null;
    if (data.currentTeam) {
      AppState.currentTeam = data.currentTeam;
      // 确保每个槽位格式正确
      while (AppState.currentTeam.pokemon.length < 6) {
        AppState.currentTeam.pokemon.push(createEmptySlot());
      }
    }
  } catch (e) {
    console.warn('加载存储数据失败:', e);
  }
}

// =============================================
// 页面切换
// =============================================
function switchPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');

  if (page === 'battle') {
    populateMyPokemonSelect();
  }
}

// =============================================
// 队伍管理
// =============================================
function initTeamSelector() {
  const sel = document.getElementById('team-selector');
  sel.innerHTML = '';
  const names = Object.keys(AppState.teams);

  if (names.length === 0) {
    const opt = document.createElement('option');
    opt.value = '__default';
    opt.textContent = AppState.currentTeam.name || '默认队伍';
    sel.appendChild(opt);
  } else {
    names.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      if (name === AppState.activeTeamId) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  document.getElementById('team-name-display').textContent =
    `「${AppState.currentTeam.name}」`;
}

function loadTeam(name) {
  if (!name || name === '__default') return;
  const team = AppState.teams[name];
  if (!team) return;
  AppState.currentTeam = JSON.parse(JSON.stringify(team));
  AppState.activeTeamId = name;
  document.getElementById('team-name-display').textContent = `「${name}」`;
  renderTeamPage();
  saveToStorage();
}

function showSaveTeamDialog() {
  const dlg = document.getElementById('save-dialog');
  document.getElementById('save-team-name').value = AppState.currentTeam.name || '';
  dlg.style.display = 'flex';
}

function showNewTeamDialog() {
  AppState.currentTeam = {
    name: '新队伍',
    pokemon: Array(6).fill(null).map(() => createEmptySlot())
  };
  renderTeamPage();
  showSaveTeamDialog();
}

function saveTeam() {
  const name = document.getElementById('save-team-name').value.trim();
  if (!name) { showToast('请输入队伍名称', 'error'); return; }

  AppState.currentTeam.name = name;
  AppState.teams[name] = JSON.parse(JSON.stringify(AppState.currentTeam));
  AppState.activeTeamId = name;
  saveToStorage();
  initTeamSelector();
  hideDialog('save-dialog');
  showToast(`队伍「${name}」已保存`);
}

function hideDialog(id) {
  document.getElementById(id).style.display = 'none';
}

// =============================================
// 队伍配置页渲染
// =============================================
function renderTeamPage() {
  const container = document.getElementById('pokemon-slots-container');
  container.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const slot = AppState.currentTeam.pokemon[i];
    container.appendChild(renderPokemonSlot(i, slot));
  }
}

function renderPokemonSlot(index, slot) {
  const div = document.createElement('div');
  div.className = 'pokemon-slot';
  div.id = `slot-${index}`;

  if (!slot.speciesId) {
    div.classList.add('empty');
    div.innerHTML = `<span style="color:var(--text-muted)">＋ 添加宝可梦 (${index + 1})</span>`;
    div.onclick = () => openSlotEditor(index);
    return div;
  }

  const pokemon = POKEMON[slot.speciesId];
  if (!pokemon) {
    div.classList.add('empty');
    div.innerHTML = `<span style="color:var(--accent-red)">数据缺失</span>`;
    div.onclick = () => openSlotEditor(index);
    return div;
  }

  // 解析当前活跃形态
  const activeForm = (slot.form && pokemon.forms) ? pokemon.forms[slot.form] : null;
  const activeTypes = activeForm ? activeForm.types : pokemon.types;
  const activeBaseStats = activeForm ? activeForm.baseStats : pokemon.baseStats;
  const displayName = activeForm ? activeForm.name : pokemon.name;
  const displayNameEn = activeForm ? activeForm.nameEn : pokemon.nameEn;

  // 解析当前特性
  const abilities = pokemon.abilities || [];
  const activeAbilityId = slot.ability || (abilities[0] ? abilities[0].id : null);
  const megaAbility = activeForm ? activeForm.ability : null;

  // 计算实际属性（使用形态的种族值）
  const stats = calcAllStats({ baseStats: activeBaseStats }, { nature: slot.nature, sp: slot.sp });

  const spUsed = Object.values(slot.sp).reduce((a, b) => a + b, 0);
  const spRemain = 66 - spUsed;

  // 形态选择器
  const hasForms = pokemon.forms && Object.keys(pokemon.forms).length > 0;
  const formSelector = hasForms ? `
    <div>
      <label class="form-label">形态</label>
      <select class="form-select" onchange="updateSlotForm(${index}, this.value)">
        <option value="" ${!slot.form ? 'selected' : ''}>普通形态</option>
        ${Object.entries(pokemon.forms).map(([fid, f]) =>
          `<option value="${fid}" ${slot.form === fid ? 'selected' : ''}>${f.name}</option>`
        ).join('')}
      </select>
    </div>` : '';

  // 特性显示：Mega 形态固定特性用文字，普通形态用下拉
  const abilitySection = megaAbility
    ? `<div>
        <label class="form-label">特性（固定）</label>
        <div class="form-select" style="cursor:default;color:var(--text-secondary)">
          ${megaAbility.name}
          <span style="font-size:0.75rem;margin-left:4px;color:var(--text-muted)">${megaAbility.nameEn}</span>
        </div>
      </div>`
    : abilities.length > 0
      ? `<div>
          <label class="form-label">特性</label>
          <select class="form-select" onchange="updateSlotAbility(${index}, this.value)">
            ${abilities.map(a =>
              `<option value="${a.id}" ${activeAbilityId === a.id ? 'selected' : ''}>
                ${a.name}${a.isHidden ? ' ★' : ''}
              </option>`
            ).join('')}
          </select>
        </div>`
      : '';

  div.innerHTML = `
    <div class="slot-header">
      <div class="slot-num">${index + 1}</div>
      <div class="slot-pokemon-name">
        ${displayName}
        <span style="font-size:0.8rem;font-weight:400;color:var(--text-secondary);margin-left:4px">${displayNameEn}</span>
      </div>
      <button class="slot-remove" onclick="removeSlot(${index})" title="移除">✕</button>
    </div>

    <!-- 属性类型 -->
    <div style="margin-bottom:var(--spacing-sm);display:flex;gap:4px;flex-wrap:wrap">
      ${activeTypes.map(t => `<span class="type-badge type-${t}-bg">${TYPE_NAMES[t] || t}</span>`).join('')}
    </div>

    <!-- 种族值 + 实际值 -->
    <div style="margin-bottom:var(--spacing-md)">
      ${renderStatBars(activeBaseStats, stats, slot.sp, slot.nature)}
    </div>

    <!-- 形态 + 特性 -->
    ${(hasForms || abilitySection) ? `
    <div style="display:grid;grid-template-columns:${hasForms && abilitySection ? '1fr 1fr' : '1fr'};gap:var(--spacing-sm);margin-bottom:var(--spacing-md)">
      ${formSelector}
      ${abilitySection}
    </div>` : ''}

    <!-- 性格和道具 -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--spacing-sm);margin-bottom:var(--spacing-md)">
      <div>
        <label class="form-label">性格</label>
        <select class="form-select" onchange="updateSlotNature(${index}, this.value)">
          ${Object.entries(NATURES).map(([id, n]) =>
            `<option value="${id}" ${slot.nature === id ? 'selected' : ''}>
              ${n.name}${n.boost ? ` (↑${statName(n.boost)}${n.reduce ? '/↓'+statName(n.reduce) : ''})` : ''}
            </option>`
          ).join('')}
        </select>
      </div>
      <div>
        <label class="form-label">道具</label>
        <select class="form-select" onchange="updateSlotItem(${index}, this.value)">
          ${Object.entries(ITEMS).map(([id, it]) =>
            `<option value="${id}" ${slot.item === id ? 'selected' : ''}>${it.name}</option>`
          ).join('')}
        </select>
      </div>
    </div>

    <!-- SP分配 -->
    <div class="sp-allocator">
      <div class="sp-header">
        <span>属性点分配 (SP)</span>
        <span class="sp-remaining ${spRemain < 0 ? 'over' : 'ok'}" id="sp-remain-${index}">
          剩余 <strong>${spRemain}</strong> / 66
        </span>
      </div>
      ${renderSPRows(index, pokemon, slot)}
    </div>

    <!-- 招式配置 -->
    <div>
      <label class="form-label">配招</label>
      <div class="moves-grid">
        ${slot.moves.map((moveId, mi) => renderMoveSlot(index, mi, moveId, pokemon)).join('')}
      </div>
    </div>
  `;

  return div;
}

function renderStatBars(baseStats, calcedStats, _sp, natureId) {
  const statOrder = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
  const maxBase = 255;
  let html = '';

  for (const s of statOrder) {
    const base = baseStats[s];
    const val = s === 'hp' ? calcedStats.hp : calcedStats.base[s];
    const fillPct = Math.min(100, base / maxBase * 100);

    // 性格颜色
    let nameColor = '';
    const nat = NATURES[natureId];
    if (nat && nat.boost === s) nameColor = 'color:var(--accent-red)';
    else if (nat && nat.reduce === s) nameColor = 'color:var(--accent-blue)';

    html += `
      <div class="stat-bar-row">
        <span class="stat-bar-name" style="${nameColor}">${statDisplayName(s)}</span>
        <span class="stat-bar-base">${base}</span>
        <div class="stat-bar-bg">
          <div class="stat-bar-fill" style="width:${fillPct}%;background:${statBarColor(base)}"></div>
        </div>
        <span class="stat-bar-final">${val}</span>
      </div>`;
  }
  return html;
}

function renderSPRows(slotIndex, pokemon, slot) {
  const statOrder = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
  return statOrder.map(s => {
    const spVal = slot.sp[s] || 0;
    // 计算带SP后的属性值
    const val = s === 'hp'
      ? calcHP(pokemon.baseStats.hp, spVal)
      : calcStat(pokemon.baseStats[s], spVal, getNatureMultiplier(slot.nature, s));

    return `
      <div class="sp-row">
        <span class="sp-label">${statDisplayName(s)}</span>
        <input type="range" class="sp-slider" min="0" max="32"
          id="sp-slider-${slotIndex}-${s}"
          value="${spVal}"
          oninput="updateSP(${slotIndex}, '${s}', +this.value, true)">
        <input type="number" class="sp-value-input" min="0" max="32"
          id="sp-num-${slotIndex}-${s}"
          value="${spVal}"
          oninput="updateSP(${slotIndex}, '${s}', Math.min(32,Math.max(0,+this.value)), false)">
        <span class="sp-stat-value" id="sp-val-${slotIndex}-${s}">${val}</span>
      </div>`;
  }).join('');
}

function renderMoveSlot(slotIndex, moveIndex, moveId, pokemon) {
  const moveData = moveId ? MOVES[moveId] : null;
  const moveOptions = (pokemon.moves || [])
    .filter(id => MOVES[id])
    .map(id => {
      const m = MOVES[id];
      return `<option value="${id}" ${moveId === id ? 'selected' : ''}>
        ${m.name}${m.category !== 'status' ? ` [${m.power}]` : ' [变化]'}
      </option>`;
    });

  return `
    <div class="move-slot">
      <select class="form-select" style="font-size:0.82rem"
        onchange="updateMove(${slotIndex}, ${moveIndex}, this.value)">
        <option value="">— 选择招式 —</option>
        ${moveOptions.join('')}
      </select>
      ${moveData ? `
        <div style="margin-top:4px;display:flex;gap:4px;align-items:center;">
          <span class="type-badge type-${moveData.type}-bg" style="font-size:0.68rem">${TYPE_NAMES[moveData.type]||moveData.type}</span>
          <span class="move-badge ${moveData.category === 'physical' ? 'cat-physical' : moveData.category === 'special' ? 'cat-special' : 'cat-status'}" style="font-size:0.68rem">
            ${moveData.category === 'physical' ? '物理' : moveData.category === 'special' ? '特殊' : '变化'}
          </span>
          ${moveData.power ? `<span style="font-size:0.72rem;color:var(--text-secondary)">威力${moveData.power}</span>` : ''}
        </div>` : ''}
    </div>`;
}

// =============================================
// 队伍配置操作
// =============================================
let _modalSlotIndex = null;

function openSlotEditor(index) {
  _modalSlotIndex = index;
  document.getElementById('pokemon-modal-input').value = '';
  onPokemonModalSearch();
  document.getElementById('pokemon-search-modal').style.display = 'flex';
  setTimeout(() => document.getElementById('pokemon-modal-input').focus(), 50);
}

function closePokemonModal(e) {
  if (e && e.type === 'click' && e.currentTarget !== e.target) return;
  document.getElementById('pokemon-search-modal').style.display = 'none';
}

function onPokemonModalSearch() {
  const q = document.getElementById('pokemon-modal-input').value;
  const results = searchPokemon(q).slice(0, 30);
  const list = document.getElementById('pokemon-modal-list');
  if (results.length === 0) {
    list.innerHTML = '<div style="padding:12px;color:var(--text-secondary);text-align:center">未找到宝可梦</div>';
    return;
  }
  list.innerHTML = results.map(p => `
    <div class="search-dropdown-item" onclick="selectPokemonFromModal('${p.id}')">
      <div>
        <strong>${p.name}</strong>
        <span style="color:var(--text-secondary);font-size:0.8rem;margin-left:6px">${p.nameEn}</span>
      </div>
      <div style="margin-left:auto;display:flex;gap:4px">
        ${p.types.map(t => `<span class="type-badge type-${t}-bg" style="font-size:0.68rem">${TYPE_NAMES[t]||t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function selectPokemonFromModal(id) {
  document.getElementById('pokemon-search-modal').style.display = 'none';
  const pokemon = POKEMON[id];
  const defaultAbility = pokemon && pokemon.abilities && pokemon.abilities.length > 0
    ? pokemon.abilities.find(a => !a.isHidden)?.id || pokemon.abilities[0].id
    : null;
  AppState.currentTeam.pokemon[_modalSlotIndex] = {
    speciesId: id,
    form: null,
    ability: defaultAbility,
    nature: 'hardy',
    item: 'none',
    sp: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    moves: [null, null, null, null]
  };
  refreshSlot(_modalSlotIndex);
  saveToStorage();
}

function removeSlot(index) {
  AppState.currentTeam.pokemon[index] = createEmptySlot();
  refreshSlot(index);
  saveToStorage();
}

function updateSlotNature(index, value) {
  AppState.currentTeam.pokemon[index].nature = value;
  refreshSlot(index);
  saveToStorage();
}

function updateSlotItem(index, value) {
  AppState.currentTeam.pokemon[index].item = value;
  saveToStorage();
}

function updateSlotForm(index, formId) {
  const slot = AppState.currentTeam.pokemon[index];
  slot.form = formId || null;
  refreshSlot(index);
  saveToStorage();
}

function updateSlotAbility(index, abilityId) {
  AppState.currentTeam.pokemon[index].ability = abilityId;
  saveToStorage();
}

function updateSP(index, stat, value, fromSlider) {
  const slot = AppState.currentTeam.pokemon[index];
  const oldVal = slot.sp[stat] || 0;
  const newVal = Math.min(32, Math.max(0, value));

  // 检查总SP不超过66
  const otherTotal = Object.values(slot.sp).reduce((a, b) => a + b, 0) - oldVal;
  const maxAllowed = Math.min(32, 66 - otherTotal);
  const clampedVal = Math.min(newVal, maxAllowed);

  if (clampedVal < newVal) {
    if (fromSlider) {
      // 拖动时静默截断，不弹窗
      const sliderEl = document.getElementById(`sp-slider-${index}-${stat}`);
      if (sliderEl) sliderEl.value = clampedVal;
    } else {
      showToast('属性点总计不能超过66', 'error');
      const numEl = document.getElementById(`sp-num-${index}-${stat}`);
      if (numEl) numEl.value = clampedVal;
    }
  }

  slot.sp[stat] = clampedVal;

  // 同步另一个输入控件
  const slider = document.getElementById(`sp-slider-${index}-${stat}`);
  const numInput = document.getElementById(`sp-num-${index}-${stat}`);
  if (fromSlider) { if (numInput) numInput.value = clampedVal; }
  else            { if (slider)   slider.value   = clampedVal; }

  // 更新属性值显示
  const pokemon = POKEMON[slot.speciesId];
  if (pokemon) {
    const val = stat === 'hp'
      ? calcHP(pokemon.baseStats.hp, clampedVal)
      : calcStat(pokemon.baseStats[stat], clampedVal, getNatureMultiplier(slot.nature, stat));
    const valEl = document.getElementById(`sp-val-${index}-${stat}`);
    if (valEl) valEl.textContent = val;
  }

  // 更新剩余SP显示
  const newTotal = Object.values(slot.sp).reduce((a, b) => a + b, 0);
  const remainEl = document.getElementById(`sp-remain-${index}`);
  if (remainEl) {
    const remain = 66 - newTotal;
    remainEl.className = `sp-remaining ${remain < 0 ? 'over' : 'ok'}`;
    remainEl.innerHTML = `剩余 <strong>${remain}</strong> / 66`;
  }

  saveToStorage();
}

function updateMove(index, moveIndex, value) {
  AppState.currentTeam.pokemon[index].moves[moveIndex] = value || null;
  refreshSlot(index);
  saveToStorage();
}

function refreshSlot(index) {
  const container = document.getElementById('pokemon-slots-container');
  const oldSlot = document.getElementById(`slot-${index}`);
  const slot = AppState.currentTeam.pokemon[index];
  const newSlot = renderPokemonSlot(index, slot);
  newSlot.id = `slot-${index}`;
  container.replaceChild(newSlot, oldSlot);
}

// =============================================
// 对战分析页初始化
// =============================================
function initBattlePage() {
  // 填充对方性格下拉
  const natSel = document.getElementById('opp-nature-select');
  Object.entries(NATURES).forEach(([id, n]) => {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = `${n.name}${n.boost ? ` (↑${statName(n.boost)}${n.reduce ? '/↓'+statName(n.reduce) : ''})` : ''}`;
    natSel.appendChild(opt);
  });

  // 填充对方道具下拉
  const itemSel = document.getElementById('opp-item-select');
  Object.entries(ITEMS).forEach(([id, it]) => {
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = it.name;
    itemSel.appendChild(opt);
  });

  // 初始化Rank控制
  initRankControls('my-rank-controls', 'my');
  initRankControls('opp-rank-controls', 'opp');
}

function initRankControls(containerId, side) {
  const container = document.getElementById(containerId);
  const stats = ['atk', 'def', 'spa', 'spd', 'spe'];
  const labels = { atk: '攻击', def: '防御', spa: '特攻', spd: '特防', spe: '速度' };

  container.innerHTML = stats.map(s => `
    <div class="rank-item">
      <span class="rank-label">${labels[s]}</span>
      <div class="rank-btns">
        <button class="rank-btn" onclick="changeRank('${side}', '${s}', -1)">▼</button>
        <span class="rank-display zero" id="${side}-rank-${s}">0</span>
        <button class="rank-btn" onclick="changeRank('${side}', '${s}', +1)">▲</button>
      </div>
    </div>
  `).join('');
}

function changeRank(side, stat, delta) {
  const stateKey = side === 'my' ? 'myRanks' : 'oppRanks';
  const ranks = AppState.battle[stateKey];
  ranks[stat] = Math.max(-6, Math.min(6, (ranks[stat] || 0) + delta));

  const el = document.getElementById(`${side}-rank-${stat}`);
  el.textContent = ranks[stat] > 0 ? `+${ranks[stat]}` : `${ranks[stat]}`;
  el.className = 'rank-display ' + (ranks[stat] > 0 ? 'positive' : ranks[stat] < 0 ? 'negative' : 'zero');

  runAnalysis();
}

function populateMyPokemonSelect() {
  const sel = document.getElementById('my-pokemon-select');
  sel.innerHTML = '<option value="">— 选择我方宝可梦 —</option>';

  AppState.currentTeam.pokemon.forEach((slot, i) => {
    if (slot && slot.speciesId && POKEMON[slot.speciesId]) {
      const p = POKEMON[slot.speciesId];
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${i + 1}. ${p.name} (${p.nameEn})`;
      if (AppState.battle.mySlotIndex === i) opt.selected = true;
      sel.appendChild(opt);
    }
  });
}

function onMyPokemonChange() {
  const val = document.getElementById('my-pokemon-select').value;
  if (val === '') {
    AppState.battle.mySlotIndex = null;
    document.getElementById('my-pokemon-info').style.display = 'none';
    return;
  }

  AppState.battle.mySlotIndex = parseInt(val);
  document.getElementById('my-pokemon-info').style.display = 'block';
  renderMyStats();
  runAnalysis();
}

function renderMyStats() {
  const idx = AppState.battle.mySlotIndex;
  if (idx === null) return;

  const slot = AppState.currentTeam.pokemon[idx];
  const pokemon = POKEMON[slot.speciesId];
  if (!pokemon) return;

  const stats = calcAllStats(pokemon, {
    nature: slot.nature,
    sp: slot.sp,
    rankBoosts: AppState.battle.myRanks,
    item: slot.item,
    status: AppState.battle.myStatus
  });

  document.getElementById('my-stats-display').innerHTML = `
    <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:4px">
      ${pokemon.name} · ${NATURES[slot.nature]?.name || '勤奋'} · ${ITEMS[slot.item]?.name || '无道具'}
    </div>
    <div style="display:flex;gap:var(--spacing-md);flex-wrap:wrap">
      <div><span style="color:var(--text-secondary);font-size:0.8rem">HP </span><strong>${stats.hp}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">攻 </span><strong>${stats.effective.atk}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">防 </span><strong>${stats.effective.def}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">特攻 </span><strong>${stats.effective.spa}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">特防 </span><strong>${stats.effective.spd}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">速度 </span><strong style="color:var(--accent-blue)">${stats.effective.spe}</strong></div>
    </div>`;
}

// =============================================
// 对方宝可梦搜索
// =============================================
let oppSearchTimeout = null;

function onOppSearch() {
  clearTimeout(oppSearchTimeout);
  oppSearchTimeout = setTimeout(() => {
    const q = document.getElementById('opp-search').value;
    if (!q.trim()) {
      document.getElementById('opp-dropdown').style.display = 'none';
      return;
    }

    const results = searchPokemon(q).slice(0, 12);
    const dropdown = document.getElementById('opp-dropdown');

    if (results.length === 0) {
      dropdown.style.display = 'none';
      return;
    }

    dropdown.innerHTML = results.map(p => `
      <div class="search-dropdown-item" onmousedown="selectOppPokemon('${p.id}', '${p.name}')">
        <div>
          <strong>${p.name}</strong>
          <span style="color:var(--text-secondary);font-size:0.8rem;margin-left:6px">${p.nameEn}</span>
        </div>
        <div style="margin-left:auto;display:flex;gap:4px">
          ${p.types.map(t => `<span class="type-badge type-${t}-bg" style="font-size:0.68rem">${TYPE_NAMES[t]||t}</span>`).join('')}
        </div>
      </div>
    `).join('');

    dropdown.style.display = 'block';
  }, 150);
}

function hideOppDropdown() {
  setTimeout(() => {
    document.getElementById('opp-dropdown').style.display = 'none';
  }, 200);
}

function selectOppPokemon(id, name) {
  AppState.battle.oppPokemonId = id;
  document.getElementById('opp-search').value = name;
  document.getElementById('opp-dropdown').style.display = 'none';
  document.getElementById('opp-pokemon-info').style.display = 'block';

  const pokemon = POKEMON[id];
  if (!pokemon) return;

  // 填充特性下拉
  const abilSel = document.getElementById('opp-ability-select');
  abilSel.innerHTML = '<option value="">未知</option>';
  (pokemon.abilities || []).forEach(a => {
    const opt = document.createElement('option');
    opt.value = a.id;
    opt.textContent = a.name + (a.isHidden ? '（隐藏特性）' : '');
    abilSel.appendChild(opt);
  });

  // 显示对方属性
  document.getElementById('opp-stats-display').innerHTML = `
    <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:4px">
      ${pokemon.name} · 速度种族值 <strong style="color:var(--accent-blue)">${pokemon.baseStats.spe}</strong>
    </div>
    <div style="display:flex;gap:var(--spacing-md);flex-wrap:wrap">
      <div><span style="color:var(--text-secondary);font-size:0.8rem">HP </span><strong>${pokemon.baseStats.hp}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">攻 </span><strong>${pokemon.baseStats.atk}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">防 </span><strong>${pokemon.baseStats.def}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">特攻 </span><strong>${pokemon.baseStats.spa}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">特防 </span><strong>${pokemon.baseStats.spd}</strong></div>
      <div><span style="color:var(--text-secondary);font-size:0.8rem">速度 </span><strong style="color:var(--accent-blue)">${pokemon.baseStats.spe}</strong></div>
    </div>
    <div style="margin-top:var(--spacing-xs);display:flex;gap:4px">
      ${pokemon.types.map(t => `<span class="type-badge type-${t}-bg">${TYPE_NAMES[t]||t}</span>`).join('')}
    </div>`;

  runAnalysis();
}

// =============================================
// 状态切换
// =============================================
function toggleMyStatus(status) {
  AppState.battle.myStatus = AppState.battle.myStatus === status ? null : status;
  updateStatusBadges('my-status-row', AppState.battle.myStatus);
  renderMyStats();
  runAnalysis();
}

function toggleOppStatus(status) {
  AppState.battle.oppStatus = AppState.battle.oppStatus === status ? null : status;
  updateStatusBadges('opp-status-row', AppState.battle.oppStatus);
  runAnalysis();
}

function updateStatusBadges(containerId, activeStatus) {
  document.querySelectorAll(`#${containerId} .status-badge`).forEach(badge => {
    badge.classList.toggle('active', badge.dataset.status === activeStatus);
  });
}

function onFieldChange() {
  AppState.battle.weather = document.getElementById('weather-select').value;
  AppState.battle.terrain = document.getElementById('terrain-select').value;
  AppState.battle.trickRoom = document.getElementById('trick-room-check').checked;
  runAnalysis();
}

// =============================================
// 核心分析逻辑
// =============================================
function runAnalysis() {
  const { mySlotIndex, oppPokemonId } = AppState.battle;

  if (mySlotIndex === null || !oppPokemonId) {
    document.getElementById('analysis-results').innerHTML = `
      <div class="empty-state">
        <div class="icon">⚔️</div>
        <p>请选择我方宝可梦和对方宝可梦，分析结果将在此显示</p>
      </div>`;
    return;
  }

  const mySlot = AppState.currentTeam.pokemon[mySlotIndex];
  const myPokemon = POKEMON[mySlot.speciesId];
  const oppPokemon = POKEMON[oppPokemonId];

  if (!myPokemon || !oppPokemon) return;

  // 获取场地状态
  const field = {
    weather: AppState.battle.weather,
    terrain: AppState.battle.terrain,
    trickRoom: AppState.battle.trickRoom
  };

  // 计算我方属性
  const myStats = calcAllStats(myPokemon, {
    nature: mySlot.nature,
    sp: mySlot.sp,
    rankBoosts: AppState.battle.myRanks,
    item: mySlot.item,
    status: AppState.battle.myStatus
  });

  // 我方有效速度（含道具/状态/rank）
  let myEffSpe = myStats.effective.spe;
  if (AppState.battle.myTailwind || document.getElementById('my-tailwind')?.checked) {
    myEffSpe = myEffSpe * 2;
  }

  // ---- 1. 速度分析 ----
  const oppSpeRank = AppState.battle.oppRanks.spe || 0;
  const oppKnownInfo = {
    nature: document.getElementById('opp-nature-select')?.value || '',
    item: document.getElementById('opp-item-select')?.value || '',
    ability: document.getElementById('opp-ability-select')?.value || '',
    pokemonAbilities: oppPokemon.abilities || [],
    tailwind: !!(document.getElementById('opp-tailwind')?.checked || AppState.battle.oppTailwind),
    rank: oppSpeRank,
    weather: field.weather
  };

  const speedAnalysis = analyzeSpeed(myEffSpe, oppPokemon, oppKnownInfo, {}, field.trickRoom);

  // ---- 2. 我方输出伤害 ----
  const myMoves = mySlot.moves.filter(Boolean);
  const myAtkStatus = { burned: AppState.battle.myStatus === 'burn' };

  const myAttacker = {
    pokemon: myPokemon,
    stats: myStats,
    item: mySlot.item
  };

  const myDamages = calcMyMoveDamages(myAttacker, oppPokemon, myMoves, field, myAtkStatus);

  // ---- 3. 对方威胁技能 ----
  const myStats_forDef = calcAllStats(myPokemon, {
    nature: mySlot.nature,
    sp: mySlot.sp,
    rankBoosts: AppState.battle.myRanks,
    item: mySlot.item,
    status: AppState.battle.myStatus
  });

  const myDefender = {
    pokemon: myPokemon,
    stats: myStats_forDef
  };

  const threats = calcOpponentThreats(myDefender, oppPokemon, oppPokemon.moves || [], field, 60);

  // ---- 渲染结果 ----
  document.getElementById('analysis-results').innerHTML = `
    ${renderSpeedSection(speedAnalysis, myPokemon, oppPokemon, myEffSpe)}
    ${renderMyDamageSection(myDamages, myPokemon, oppPokemon)}
    ${renderThreatSection(threats, oppPokemon, myPokemon, myStats_forDef.hp)}
  `;
}

// =============================================
// 结果渲染函数
// =============================================

function renderSpeedSection(analysis, myPkm, oppPkm, myEffSpe) {
  const { faster, slower, equal, trickRoom } = analysis;

  let fasterHtml = '';
  if (faster.length > 0) {
    fasterHtml = `
      <div style="margin-bottom:var(--spacing-sm)">
        <div style="color:var(--accent-red);font-weight:600;font-size:0.85rem;margin-bottom:var(--spacing-sm)">
          ⚠️ 以下情况对方速度高于我方 (${faster.length}种)
        </div>
        <div class="speed-cases">
          ${faster.map(c => `
            <div class="speed-case faster">
              <div class="speed-case-value" style="color:var(--accent-red)">${c.speed}</div>
              <div class="speed-case-label">${c.label}</div>
            </div>`).join('')}
        </div>
      </div>`;
  } else {
    fasterHtml = `<div style="color:var(--accent-green);font-size:0.9rem;padding:var(--spacing-sm) 0">
      ✅ 在所有枚举情况下，对方速度均未超过我方（速度${myEffSpe}）
    </div>`;
  }

  let slowerHtml = '';
  if (slower.length > 0 && slower.length <= 12) {
    slowerHtml = `
      <div>
        <div style="color:var(--accent-green);font-weight:600;font-size:0.85rem;margin-bottom:var(--spacing-sm)">
          ✅ 以下情况我方速度更快
        </div>
        <div class="speed-cases">
          ${slower.slice(0, 8).map(c => `
            <div class="speed-case slower">
              <div class="speed-case-value" style="color:var(--accent-green)">${c.speed}</div>
              <div class="speed-case-label">${c.label}</div>
            </div>`).join('')}
          ${slower.length > 8 ? `<div style="color:var(--text-muted);font-size:0.8rem;padding:var(--spacing-sm)">…及更多 ${slower.length - 8} 种</div>` : ''}
        </div>
      </div>`;
  }

  const equalHtml = equal.length > 0 ? `
    <div style="margin-top:var(--spacing-sm)">
      <div style="color:var(--accent-yellow);font-size:0.85rem">
        ⚖️ 同速情况（随机决定先后）：${equal.map(c => `${c.speed}（${c.label}）`).join('，')}
      </div>
    </div>` : '';

  return `
    <div class="analysis-section">
      <div class="section-title">
        <span class="section-icon">⚡</span>
        速度分析
      </div>
      <div class="speed-summary">
        <div class="speed-stat">
          <span class="speed-stat-label">我方速度（${myPkm.name}）</span>
          <span class="speed-stat-value">${myEffSpe}</span>
        </div>
        <div class="speed-stat">
          <span class="speed-stat-label">对方速度种族值（${oppPkm.name}）</span>
          <span class="speed-stat-value" style="color:var(--accent-red)">${oppPkm.baseStats.spe}</span>
        </div>
        ${trickRoom ? `<div class="field-badge terrain-psychic active">奇异空间（慢者先手）</div>` : ''}
      </div>
      ${fasterHtml}
      ${equalHtml}
      ${slowerHtml}
    </div>`;
}

function renderMyDamageSection(damages, _myPkm, oppPkm) {
  if (damages.length === 0) {
    return `
      <div class="analysis-section">
        <div class="section-title"><span class="section-icon">🗡️</span>我方输出分析</div>
        <div class="empty-state"><p>当前宝可梦没有配置攻击招式</p></div>
      </div>`;
  }

  const rows = damages.map(d => {
    return `
      <tr>
        <td>
          <div style="font-weight:600">${d.moveName}</div>
          <div style="display:flex;gap:4px;margin-top:3px;align-items:center">
            <span class="type-badge type-${d.moveType}-bg" style="font-size:0.7rem">${TYPE_NAMES[d.moveType]||d.moveType}</span>
            <span class="move-badge ${d.category === 'physical' ? 'cat-physical' : 'cat-special'}" style="font-size:0.7rem">
              ${d.category === 'physical' ? '物理' : '特殊'}
            </span>
            <span style="font-size:0.75rem;color:var(--text-secondary)">威力${d.power}</span>
          </div>
        </td>
        ${d.results.map(r => renderDamageCell(r)).join('')}
      </tr>`;
  }).join('');

  return `
    <div class="analysis-section">
      <div class="section-title"><span class="section-icon">🗡️</span>我方输出 → ${oppPkm.name}</div>
      <div style="overflow-x:auto">
        <table class="damage-table">
          <thead>
            <tr>
              <th style="min-width:140px">招式</th>
              <th style="min-width:180px">无投资（最低防御）</th>
              <th style="min-width:180px">满HP+满防御</th>
              <th style="min-width:180px">满HP+满防御+性格加成</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

function renderDamageCell(r) {
  const avgPct = ((r.minPct + r.maxPct) / 2);
  let pctClass = 'low';
  if (avgPct >= 100) pctClass = 'ko';
  else if (avgPct >= 70) pctClass = 'high';
  else if (avgPct >= 40) pctClass = 'mid';

  const koTag = r.min >= (r.hp || Infinity) ? `<span class="ko-tag guaranteed">必KO</span>` :
                r.max >= (r.hp || Infinity) ? `<span class="ko-tag possible">可能KO</span>` : '';

  const typeEffNote = r.typeEff !== 1 ? `<span class="${getEffClass(r.typeEff)}" style="font-size:0.75rem">${getEffectivenessLabel(r.typeEff).text}</span>` : '';

  if (r.typeEff === 0) {
    return `<td><span style="color:var(--text-muted)">无效（免疫）</span></td>`;
  }

  return `<td>
    <div class="dmg-pct ${pctClass}">${r.minPct}% ~ ${r.maxPct}%${koTag}</div>
    <div style="font-size:0.78rem;color:var(--text-secondary)">${r.min} ~ ${r.max} HP</div>
    ${typeEffNote ? `<div style="margin-top:2px">${typeEffNote}</div>` : ''}
    ${r.note ? `<div style="font-size:0.72rem;color:var(--text-muted)">${r.note}</div>` : ''}
  </td>`;
}

function renderThreatSection(threats, oppPkm, myPkm, myHP) {
  if (threats.length === 0) {
    return `
      <div class="analysis-section">
        <div class="section-title"><span class="section-icon">⚠️</span>对方威胁技能</div>
        <div class="empty-state"><p>未发现高威力威胁技能</p></div>
      </div>`;
  }

  const topThreats = threats.slice(0, 12);

  const items = topThreats.map(t => {
    const maxResult = t.results[t.results.length - 1];
    const isKO = maxResult.max >= myHP;

    let threatClass = 'threat-low';
    if (isKO) threatClass = 'threat-ko';
    else if (maxResult.maxPct >= 70) threatClass = 'threat-high';
    else if (maxResult.maxPct >= 40) threatClass = 'threat-mid';

    return `
      <div class="threat-item ${threatClass}">
        <div class="threat-header">
          <span class="threat-move-name">${t.moveName}</span>
          <span class="type-badge type-${t.moveType}-bg">${TYPE_NAMES[t.moveType]||t.moveType}</span>
          <span class="move-badge ${t.category === 'physical' ? 'cat-physical' : 'cat-special'}">
            ${t.category === 'physical' ? '物理' : '特殊'}
          </span>
          <span class="threat-power">威力${t.power}</span>
          ${t.typeEff >= 2 ? `<span class="${getEffClass(t.typeEff)}">${getEffectivenessLabel(t.typeEff).text}</span>` : ''}
          ${isKO ? '<span class="ko-tag guaranteed">可能一击KO</span>' : ''}
        </div>
        <div class="threat-dmg-grid">
          ${t.results.map(r => `
            <div class="threat-dmg-item">
              <div class="threat-dmg-label">${r.label}</div>
              <div class="threat-dmg-value ${r.maxPct >= 100 ? 'dmg-pct ko' : r.maxPct >= 70 ? 'dmg-pct high' : r.maxPct >= 40 ? 'dmg-pct mid' : 'dmg-pct low'}">
                ${r.minPct}%~${r.maxPct}%
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }).join('');

  return `
    <div class="analysis-section">
      <div class="section-title">
        <span class="section-icon">⚠️</span>
        对方威胁技能（${oppPkm.name} → ${myPkm.name}，Top ${topThreats.length}）
      </div>
      <div class="threat-list">${items}</div>
    </div>`;
}

// =============================================
// 工具函数
// =============================================
function statName(s) {
  const map = { atk: '攻', def: '防', spa: '特攻', spd: '特防', spe: '速' };
  return map[s] || s;
}

function statDisplayName(s) {
  const map = { hp: 'HP', atk: '攻击', def: '防御', spa: '特攻', spd: '特防', spe: '速度' };
  return map[s] || s;
}

function statBarColor(base) {
  if (base >= 150) return '#e8744a';
  if (base >= 110) return '#f0c040';
  if (base >= 80) return '#78c850';
  if (base >= 50) return '#6890f0';
  return '#9099a1';
}

function getEffClass(mult) {
  if (mult >= 4) return 'eff-4x';
  if (mult >= 2) return 'eff-2x';
  if (mult <= 0) return 'eff-0x';
  if (mult <= 0.25) return 'eff-025x';
  if (mult <= 0.5) return 'eff-05x';
  return 'eff-1x';
}

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
