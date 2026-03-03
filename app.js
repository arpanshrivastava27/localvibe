/**
 * LocalVibe V2 — Core Application
 * Smart proximity detection, area briefings, heritage panels
 */

// ─── State ──────────────────────────────────
let map, userLat = 28.5495, userLng = 77.2001;
let userMarker, placeMarkers = [], activeMarkerEl = null;
let activeCat = 'all', activeSort = 'nearest', searchQ = '';
let currentPlaces = [], sheetCollapsed = false;
let watchId = null, lastArea = null;
let pingedPlaces = new Set(); // cooldown tracker
let proxNotifTimeout = null;
let currentDetailPlace = null;

// ─── Init ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  detectLanguage();
  initMap();
  initUI();
  locateUser();
});

// ─── Map ────────────────────────────────────
function initMap() {
  map = L.map('map', {
    center: [userLat, userLng],
    zoom: 16,
    zoomControl: false,
    attributionControl: false
  });

  // CartoDB Dark Matter — ultra-clean tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  map.on('click', () => {
    closeDetail();
    clearActive();
    if (!sheetCollapsed) {
      sheetCollapsed = true;
      document.getElementById('bottomSheet')?.classList.add('collapsed');
    }
  });
}

// ─── UI Init ────────────────────────────────
function initUI() {
  renderCats();
  renderSorts();
  renderLangPicker();
  updateStrings();
  setupSearch();
  setupSheet();

  document.addEventListener('click', e => {
    if (!e.target.closest('.lang-picker')) {
      document.getElementById('langDrop')?.classList.remove('show');
    }
  });

  document.getElementById('locBtn')?.addEventListener('click', () => {
    map.flyTo([userLat, userLng], 16, { duration: 0.8 });
  });
}

// ─── Geolocation + Proximity Tracking ───────
function locateUser() {
  showToast(t('ui.locating'));

  if (!('geolocation' in navigator)) {
    showToast(t('ui.locationFallback'));
    onLocationReady();
    return;
  }

  // Get initial position
  navigator.geolocation.getCurrentPosition(
    pos => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      onLocationReady();
      startTracking();
    },
    () => {
      showToast(t('ui.locationFallback'));
      onLocationReady();
      // Start simulated walking for demo
      startDemoWalk();
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function startTracking() {
  watchId = navigator.geolocation.watchPosition(
    pos => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      updateUserMarker();
      checkProximity();
      checkAreaChange();
    },
    null,
    { enableHighAccuracy: true, maximumAge: 5000 }
  );
}

// Demo walking simulation when geolocation denied
function startDemoWalk() {
  let step = 0;
  const interval = setInterval(() => {
    step++;
    // Simulate walking through Hauz Khas
    userLat += (Math.random() - 0.45) * 0.0003;
    userLng += (Math.random() - 0.45) * 0.0003;
    updateUserMarker();
    checkProximity();
    checkAreaChange();
    if (step > 200) clearInterval(interval);
  }, 3000);
}

function onLocationReady() {
  placeUserMarker();
  map.flyTo([userLat, userLng], 16, { duration: 1.2 });
  loadPlaces();
  checkAreaChange();

  setTimeout(() => {
    document.getElementById('loadScreen')?.classList.add('hide');
  }, 600);
}

function placeUserMarker() {
  if (userMarker) map.removeLayer(userMarker);
  const icon = L.divIcon({ className: 'user-dot', iconSize: [14, 14], iconAnchor: [7, 7] });
  userMarker = L.marker([userLat, userLng], { icon, zIndexOffset: 1000 }).addTo(map);
}

function updateUserMarker() {
  if (userMarker) userMarker.setLatLng([userLat, userLng]);
}

// ─── Smart Proximity Detection ──────────────
function checkProximity() {
  const nearbyPlaces = currentPlaces
    .map(p => ({ ...p, dist: haversineDistance(userLat, userLng, p.lat, p.lng) }))
    .filter(p => p.dist <= 0.15) // Within 150m
    .filter(p => !pingedPlaces.has(p.id)) // Not already pinged
    .sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount); // Best first

  if (nearbyPlaces.length > 0) {
    triggerProximityPing(nearbyPlaces[0]);
  }
}

function triggerProximityPing(place) {
  pingedPlaces.add(place.id);

  // Haptic feedback
  if (navigator.vibrate) navigator.vibrate([50, 30, 50]);

  const notif = document.getElementById('proxNotif');
  if (!notif) return;

  const catColor = CATEGORIES[place.category]?.color || '#818cf8';
  const dist = Math.round(haversineDistance(userLat, userLng, place.lat, place.lng) * 1000);

  notif.innerHTML = `
    <button class="prox-dismiss" onclick="dismissProx(event)">✕</button>
    <div class="prox-notif-inner" onclick="openDetail('${place.id}')">
      <div class="prox-icon" style="background: ${catColor}20;">
        ${place.image || CATEGORIES[place.category]?.icon || '📍'}
      </div>
      <div class="prox-body">
        <div class="prox-label" style="color: ${catColor};">
          <span class="pulse-dot" style="background: ${catColor};"></span>
          ${t('ui.passing')} · ${dist}m
        </div>
        <div class="prox-msg">${place.pingMessage || place.name}</div>
        <div class="prox-meta">
          <span>⭐ ${place.rating}</span>
          <span>·</span>
          <span>${place.reviewCount.toLocaleString()} ${t('ui.reviews')}</span>
          <span>·</span>
          <span style="color: ${catColor};">${t('ui.tapToExplore')}</span>
        </div>
      </div>
    </div>
  `;

  notif.classList.add('show');

  // Auto-dismiss after 8 seconds
  clearTimeout(proxNotifTimeout);
  proxNotifTimeout = setTimeout(() => {
    notif.classList.remove('show');
  }, 8000);

  // Highlight marker on map
  highlightMarker(place.id);

  // Set cooldown — don't re-ping for 30 min
  setTimeout(() => pingedPlaces.delete(place.id), 30 * 60 * 1000);
}

function dismissProx(e) {
  e.stopPropagation();
  document.getElementById('proxNotif')?.classList.remove('show');
}

// ─── Area Change Detection ──────────────────
function checkAreaChange() {
  const area = detectArea(userLat, userLng);
  if (area && (!lastArea || lastArea.name !== area.name)) {
    lastArea = area;
    showAreaBriefing(area);
  }
}

function showAreaBriefing(area) {
  const el = document.getElementById('areaBriefing');
  if (!el) return;

  const card = el.querySelector('.area-card');
  if (!card) return;

  card.innerHTML = `
    <div class="area-handle"></div>
    <div class="area-welcome">${t('ui.welcome')}</div>
    <div class="area-name">${area.name}</div>
    <div class="area-tagline">"${area.tagline}"</div>
    <div class="area-desc">${area.description}</div>
    
    <div class="area-mustdo-title">✨ MUST DO HERE</div>
    ${area.mustDo.map(item => `
      <div class="area-mustdo-item">
        <span class="item-emoji">${item.emoji}</span>
        <span>${item.text}</span>
      </div>
    `).join('')}

    <div class="area-footer">
      <span class="area-meta-pill">🕐 ${t('ui.bestTime')}: ${area.bestTime}</span>
    </div>
    <div class="area-footer" style="margin-top: 4px;">
      <span class="area-meta-pill">💡 ${t('ui.safety')}: ${area.safetyTip}</span>
    </div>

    <button class="area-close-btn" onclick="closeAreaBriefing()">
      ${t('ui.explore')} →
    </button>
  `;

  el.classList.add('show');

  // Haptic
  if (navigator.vibrate) navigator.vibrate([30, 20, 30]);
}

function closeAreaBriefing() {
  document.getElementById('areaBriefing')?.classList.remove('show');
}

// ─── Places ─────────────────────────────────
function loadPlaces() {
  currentPlaces = getAllCuratedPlaces(userLat, userLng, 15);
  applyFilters();
}

function applyFilters() {
  let places = [...currentPlaces];
  places = filterByCategory(places, activeCat);

  if (searchQ) {
    const q = searchQ.toLowerCase();
    places = places.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.cuisine?.toLowerCase().includes(q)) ||
      (p.signatureDish?.name.toLowerCase().includes(q)) ||
      (p.vibe?.toLowerCase().includes(q)) ||
      (p.tags?.some(t => t.includes(q)))
    );
  }

  places = sortPlaces(places, activeSort);
  renderMarkers(places);
  renderCards(places);
  updateCount(places.length);
}

function renderMarkers(places) {
  placeMarkers.forEach(m => map.removeLayer(m));
  placeMarkers = [];

  places.forEach(place => {
    const icon = L.divIcon({
      className: `map-marker ${place.category}`,
      html: `<span class="me">${CATEGORIES[place.category]?.icon || '📍'}</span>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    const marker = L.marker([place.lat, place.lng], { icon }).addTo(map);

    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      openDetail(place.id);
    });

    marker.placeId = place.id;
    placeMarkers.push(marker);
  });
}

function renderCards(places) {
  const list = document.getElementById('placesList');
  if (!list) return;

  if (!places.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-text">${t('ui.noResults')}</div></div>`;
    return;
  }

  list.innerHTML = places.map((p, i) => `
    <div class="place-card" data-id="${p.id}" onclick="openDetail('${p.id}')" style="animation-delay:${i * 40}ms">
      <div class="place-avi" data-cat="${p.category}">
        ${p.image || CATEGORIES[p.category]?.icon || '📍'}
      </div>
      <div class="place-body">
        <div class="place-name">${p.name}</div>
        ${p.cuisine ? `<div class="place-cuisine">${p.cuisine}</div>` : ''}
        <div class="place-rating-row">
          <span class="rating-num">${p.rating}</span>
          <span>${generateStars(p.rating)}</span>
          <span class="place-meta">${p.reviewCount.toLocaleString()} · ${formatVisitors(p.visitorCount)}</span>
        </div>
        <div class="sig-badge">
          ${p.signatureDish.emoji} 🔥 ${p.signatureDish.name}
        </div>
      </div>
      <div class="place-right">
        <span class="place-dist">${formatDistance(p.distance)}</span>
        <button class="nav-dot" onclick="event.stopPropagation(); openNav(${p.lat},${p.lng},'${p.name.replace(/'/g, "\\'")}')">🧭</button>
        <span class="price-tag">${getPriceLevel(p.priceLevel)}</span>
      </div>
    </div>
  `).join('');
}

// ─── Detail Panel ───────────────────────────
function openDetail(id) {
  const place = currentPlaces.find(p => p.id === id);
  if (!place) return;
  currentDetailPlace = place;

  map.flyTo([place.lat, place.lng], 17, { duration: 0.6 });
  highlightMarker(id);

  const panel = document.getElementById('detailPanel');
  const bg = document.getElementById('detailBg');
  if (!panel || !bg) return;

  const catColor = CATEGORIES[place.category]?.color || '#818cf8';

  let content = `
    <div class="detail-handle"></div>
    <button class="detail-close" onclick="closeDetail()">✕</button>

    <div class="detail-header">
      <div class="detail-avi" data-cat="${place.category}" style="background: ${catColor}15;">
        ${place.image || CATEGORIES[place.category]?.icon || '📍'}
      </div>
      <div>
        <div class="detail-name">${place.name}</div>
        ${place.cuisine ? `<div class="detail-cuisine">${place.cuisine}</div>` : ''}
      </div>
    </div>

    <div class="stats-row">
      <div class="stat">
        <div class="stat-val">⭐ ${place.rating}</div>
        <div class="stat-lbl">Rating</div>
      </div>
      <div class="stat">
        <div class="stat-val">${formatVisitors(place.visitorCount)}</div>
        <div class="stat-lbl">${t('ui.visitors')}</div>
      </div>
      <div class="stat">
        <div class="stat-val">${place.reviewCount.toLocaleString()}</div>
        <div class="stat-lbl">${t('ui.reviews')}</div>
      </div>
    </div>
  `;

  // Heritage section for monuments
  if (place.heritage) {
    const h = place.heritage;
    content += `
      <div class="heritage-section">
        <div class="heritage-title">📜 ${t('ui.history')}</div>
        <div class="heritage-built">
          <span class="heritage-pill">🏛️ Built: ${h.builtIn}</span>
          <span class="heritage-pill">👑 By: ${h.builtBy}</span>
          <span class="heritage-pill">📅 ${h.era}</span>
        </div>
        <div class="heritage-text">${h.significance}</div>
        <div class="heritage-title" style="margin-top: 12px;">📅 ${t('ui.timeline')}</div>
        <div class="timeline">
          ${h.timeline.map(t => `
            <div class="tl-item">
              <div class="tl-dot"></div>
              <div class="tl-year">${t.year}</div>
              <div class="tl-event">${t.event}</div>
            </div>
          `).join('')}
        </div>
        <div class="heritage-footer">
          <span class="heritage-meta">⏱️ ${h.timeToSpend}</span>
          ${h.photoSpots ? h.photoSpots.map(s => `<span class="heritage-meta">📸 ${s}</span>`).join('') : ''}
        </div>
      </div>
    `;
  }

  // Menu highlights / Things to try
  if (place.menuHighlights?.length) {
    content += `
      <div class="menu-section">
        <div class="menu-title">🔥 ${t('ui.thingsToTry')}</div>
        ${place.menuHighlights.map((item, i) => `
          <div class="menu-item">
            <span class="menu-rank r${i + 1}">#${item.rank}</span>
            <span class="menu-emoji">${item.emoji}</span>
            <div class="menu-info">
              <div class="menu-name">${item.name}</div>
              <div class="menu-tag">${item.tag}</div>
            </div>
            <div class="menu-right">
              ${item.orders ? `<div class="menu-orders">${item.orders}</div>` : ''}
              ${item.price ? `<div class="menu-price">${item.price}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Vibe quote
  content += `<div class="vibe-quote">"${place.vibe}"</div>`;

  // Tags
  if (place.tags?.length) {
    content += `<div class="detail-tags">${place.tags.map(t => `<span class="dtag">#${t}</span>`).join('')}</div>`;
  }

  // Hours
  content += `<div class="detail-hours"><span>🕐</span> ${t('ui.hours')}: ${place.hours}</div>`;

  // CTA
  const dist = formatDistance(place.distance);
  content += `
    <button class="detail-cta" onclick="openNav(${place.lat},${place.lng},'${place.name.replace(/'/g, "\\'")}')">
      🧭 ${t('ui.directions')} — ${dist} ${t('ui.nearYou')}
    </button>
  `;

  panel.innerHTML = content;

  bg.classList.add('show');
  requestAnimationFrame(() => panel.classList.add('show'));
}

function closeDetail() {
  document.getElementById('detailPanel')?.classList.remove('show');
  setTimeout(() => document.getElementById('detailBg')?.classList.remove('show'), 300);
  clearActive();
}

function highlightMarker(id) {
  clearActive();
  const marker = placeMarkers.find(m => m.placeId === id);
  if (marker) {
    const el = marker.getElement()?.querySelector('.map-marker');
    if (el) { el.classList.add('active'); activeMarkerEl = el; }
  }
}

function clearActive() {
  if (activeMarkerEl) activeMarkerEl.classList.remove('active');
  activeMarkerEl = null;
}

// ─── Categories ─────────────────────────────
function renderCats() {
  const bar = document.getElementById('catBar');
  if (!bar) return;
  const cats = [{ key: 'all', icon: '✨', label: t('cat.all') },
  ...Object.entries(CATEGORIES).map(([k, v]) => ({ key: k, icon: v.icon, label: t(`cat.${k}`) }))];
  bar.innerHTML = cats.map(c => `
    <button class="chip ${c.key === activeCat ? 'active' : ''}" data-cat="${c.key}" onclick="setCat('${c.key}')">
      <span class="ci">${c.icon}</span><span>${c.label}</span>
    </button>
  `).join('');
}

function setCat(cat) {
  activeCat = cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.cat === cat));
  applyFilters();
}

// ─── Sorts ──────────────────────────────────
function renderSorts() {
  const bar = document.getElementById('sortBar');
  if (!bar) return;
  bar.innerHTML = Object.entries(SORT_MODES).map(([k, v]) => `
    <button class="sort-chip ${k === activeSort ? 'active' : ''}" data-sort="${k}" onclick="setSort('${k}')">
      ${v.icon} ${t(`sort.${k}`)}
    </button>
  `).join('');
}

function setSort(mode) {
  activeSort = mode;
  document.querySelectorAll('.sort-chip').forEach(c => c.classList.toggle('active', c.dataset.sort === mode));
  applyFilters();
}

// ─── Language ───────────────────────────────
function renderLangPicker() {
  const d = document.getElementById('langDrop');
  if (!d) return;
  d.innerHTML = getAvailableLanguages().map(l => `
    <div class="lang-opt ${l.code === currentLang ? 'active' : ''}" onclick="switchLang('${l.code}')">
      <span class="flag">${l.flag}</span><span>${l.name}</span><span class="native">${l.native}</span>
    </div>
  `).join('');
}

function toggleLang(e) {
  e.stopPropagation();
  document.getElementById('langDrop')?.classList.toggle('show');
}

function switchLang(lang) {
  setLanguage(lang);
  updateStrings();
  renderCats();
  renderSorts();
  renderLangPicker();
  applyFilters();
  document.getElementById('langDrop')?.classList.remove('show');
}

function updateStrings() {
  const s = document.getElementById('searchInput');
  if (s) s.placeholder = t('search');
  const st = document.getElementById('sheetTitle');
  if (st) st.textContent = `✨ ${t('ui.discover')}`;
}

// ─── Search ─────────────────────────────────
function setupSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  let timer;
  input.addEventListener('input', e => {
    clearTimeout(timer);
    timer = setTimeout(() => { searchQ = e.target.value.trim(); applyFilters(); }, 200);
  });
}

// ─── Sheet ──────────────────────────────────
function setupSheet() {
  document.getElementById('sheetHandle')?.addEventListener('click', () => {
    sheetCollapsed = !sheetCollapsed;
    document.getElementById('bottomSheet')?.classList.toggle('collapsed', sheetCollapsed);
  });
}

function updateCount(n) {
  const el = document.getElementById('sheetCount');
  if (el) el.textContent = `${n} ${t('ui.places')}`;
}

// ─── Navigation ─────────────────────────────
function openNav(lat, lng, name) {
  window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`, '_blank');
}

// ─── Toast ──────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
