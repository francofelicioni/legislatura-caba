// ── Comisiones UI ─────────────────────────────────────────────────────────────

const BLOQUE_COLORS = {
  "Fuerza por Buenos Aires": "#5BB4E8",
  "La Libertad Avanza":      "#7C3AED",
  "Vamos por Más":           "#F59E0B",
  "Confianza y Desarrollo":  "#10B981",
  "UCR":                     "#EF4444",
  "FIT":                     "#9B9B9B",
  "Transformación":          "#9B9B9B",
};

function getBloqueColor(bloque) {
  for (const [k, v] of Object.entries(BLOQUE_COLORS)) {
    if (bloque && bloque.includes(k)) return v;
  }
  return '#94a3b8';
}

function getPerfilBadge(perfil) {
  const p = (perfil || '').toUpperCase();
  if (p.includes('ALTO'))  return { label: 'Alta relevancia',  color: '#dc2626', bg: '#fef2f2' };
  if (p.includes('ROSCA')) return { label: 'Rosca política',   color: '#7c3aed', bg: '#f5f3ff' };
  if (p.includes('MEDIO')) return { label: 'Media relevancia', color: '#d97706', bg: '#fffbeb' };
  return                           { label: 'Baja relevancia', color: '#64748b', bg: '#f8fafc' };
}

function calcQuorum(miembros) {
  return Math.floor(miembros / 2) + 1;
}

function initials(n) {
  return (n || '').split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('');
}

// ── Hemiciclo mini específico por comisión ────────────────────────────────────
// integrantes ya vienen ordenados por bloque desde comisiones.js
function buildHemiciclo(integrantes) {
  const n = integrantes.length;
  if (n === 0) return '';
  const cx = 200, cy = 175;
  const rows = distribuirFilas(n);
  const radii = [55, 85, 115, 145];
  let seats = [], idx = 0;

  rows.forEach((count, ri) => {
    const r = radii[ri] || radii[radii.length - 1] + (ri - radii.length + 1) * 32;
    for (let i = 0; i < count; i++) {
      const angle = Math.PI - (count === 1 ? Math.PI / 2 : (i / (count - 1)) * Math.PI);
      seats.push({
        x: cx + r * Math.cos(angle),
        y: cy - r * Math.sin(angle),
        leg: integrantes[idx] || null
      });
      idx++;
    }
  });

  const circles = seats.map(s => {
    const color = s.leg ? getBloqueColor(s.leg.bloque) : '#e2e8f0';
    const nombre = s.leg ? s.leg.nombre.replace(/"/g, '&quot;') : '';
    return `<circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="9" fill="${color}" stroke="#fff" stroke-width="2" class="hemi-seat" data-nombre="${nombre}" style="cursor:pointer"/>`;
  }).join('\n');

  return `<svg viewBox="0 0 400 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto">
    <ellipse cx="200" cy="182" rx="175" ry="13" fill="#DBEAFE" opacity=".4"/>
    <path d="M 25 182 A 175 175 0 0 1 375 182" fill="none" stroke="#BFDBFE" stroke-width="1" stroke-dasharray="4 3" opacity=".6"/>
    ${circles}
  </svg>`;
}

function distribuirFilas(n) {
  if (n <= 5)  return [n];
  if (n <= 10) return [Math.ceil(n/2), Math.floor(n/2)];
  if (n <= 17) return [Math.ceil(n/3), Math.ceil(n/3), Math.floor(n/3)];
  return [Math.ceil(n/4), Math.ceil(n/4), Math.ceil(n/4), n - Math.ceil(n/4)*3];
}

// ── Leyenda de bloques ─────────────────────────────────────────────────────────
function buildLeyenda(integrantes) {
  const counts = {};
  integrantes.forEach(i => {
    const b = Object.keys(BLOQUE_COLORS).find(k => i.bloque && i.bloque.includes(k)) || 'Otro';
    const short = b === 'Fuerza por Buenos Aires' ? 'FxBSAS'
      : b === 'La Libertad Avanza' ? 'LLA'
      : b === 'Vamos por Más' ? 'VxM'
      : b === 'Confianza y Desarrollo' ? 'CyD'
      : b;
    if (!counts[short]) counts[short] = { color: getBloqueColor(i.bloque), count: 0 };
    counts[short].count++;
  });
  return Object.entries(counts).sort((a, b) => b[1].count - a[1].count).map(([name, v]) =>
    `<span style="display:inline-flex;align-items:center;gap:5px;font-size:.72rem;color:#475569;margin-right:12px;margin-bottom:4px">
      <span style="width:10px;height:10px;border-radius:50%;background:${v.color};flex-shrink:0;border:1px solid rgba(0,0,0,.1)"></span>
      ${name} <strong>${v.count}</strong>
    </span>`
  ).join('');
}

// ── Render grilla principal ────────────────────────────────────────────────────
function renderComisiones() {
  const container = document.getElementById('comisiones-grid');
  if (!container || typeof COMISIONES === 'undefined') return;

  container.innerHTML = COMISIONES.map((com, idx) => {
    const badge = getPerfilBadge(com.perfil);
    const mochi = com.integrantes.some(i => i.nombre === 'Federico Mochi');

    return `<div class="com-card" onclick="abrirComision(${idx})" style="animation-delay:${Math.min(idx * .025, .5)}s">
      ${mochi ? '<div class="com-mochi-badge">★ Federico Mochi</div>' : ''}
      <div class="com-card-top">
        <div class="com-num">${com.numero}</div>
        <div style="flex:1">
          <div class="com-nombre">${com.nombre}</div>
          <div class="com-presidente">Pres: <strong>${com.presidente || '—'}</strong></div>
        </div>
        <div class="com-miembros-badge">${com.miembros}<span>mbrs</span></div>
      </div>
      <div class="com-card-footer">
        <span class="com-perfil-badge" style="background:${badge.bg};color:${badge.color}">${badge.label}</span>
        ${com.fecha ? `<span class="com-fecha">📅 ${com.fecha}</span>` : ''}
      </div>
    </div>`;
  }).join('');
}

// ── Modal de comisión ──────────────────────────────────────────────────────────
async function abrirComision(idx) {
  const com = COMISIONES[idx];
  const modal = document.getElementById('com-modal');
  const body = document.getElementById('com-modal-body');
  const quorum = calcQuorum(com.miembros);
  const badge = getPerfilBadge(com.perfil);

  // ── Artículo (sin doble "Art.")
  const artDisplay = com.articulo
    ? (com.articulo.toLowerCase().startsWith('art') ? com.articulo : `Art. ${com.articulo}`)
    : '';

  // ── Autoridades con foto y borde de color de bloque
  const autoridadesData = [
    { cargo: 'Presidente/a', nombre: com.presidente },
    { cargo: 'Vicepresidente/a 1°', nombre: com.vice1 },
    { cargo: 'Vicepresidente/a 2°', nombre: com.vice2 },
  ].filter(a => a.nombre && a.nombre.trim());

  const autoHTML = autoridadesData.map(a => {
    const leg = com.integrantes.find(i => {
      const n1 = norm2(i.nombre), n2 = norm2(a.nombre);
      return n1 === n2 || n1.includes(n2.split(' ')[0]) || n2.includes(n1.split(' ')[0]);
    });
    const color = leg ? getBloqueColor(leg.bloque) : '#94a3b8';
    const fotoHtml = (leg && leg.foto)
      ? `<img src="${leg.foto}" alt="${leg.nombre}" style="width:100%;height:100%;object-fit:cover;object-position:top;border-radius:50%;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      + `<div style="display:none;width:80px;height:80px;border-radius:50%;background:${color}22;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:1.6rem;color:${color}">${initials(a.nombre)}</div>`
      : `<div style="width:80px;height:80px;border-radius:50%;background:${color}22;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:1.6rem;color:${color}">${initials(a.nombre)}</div>`;

    return `<div class="com-auto-card" onclick="verLegisladorDesdeComision('${(leg?.nombre || a.nombre).replace(/'/g, "\\'")}')">
      <div style="width:80px;height:80px;border-radius:50%;border:3px solid ${color};overflow:hidden;margin:0 auto 8px;flex-shrink:0">${fotoHtml}</div>
      <div class="com-auto-cargo">${a.cargo}</div>
      <div class="com-auto-nombre">${a.nombre}</div>
    </div>`;
  }).join('');

  // ── Integrantes con foto y borde de color de bloque
  const integrantesHTML = com.integrantes.map(i => {
    const color = getBloqueColor(i.bloque);
    const fotoHtml = i.foto
      ? `<img src="${i.foto}" alt="${i.nombre}" style="width:52px;height:52px;border-radius:50%;object-fit:cover;object-position:top;display:block" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      + `<div style="display:none;width:52px;height:52px;border-radius:50%;background:${color}22;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;color:${color}">${initials(i.nombre)}</div>`
      : `<div style="width:52px;height:52px;border-radius:50%;background:${color}22;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;color:${color}">${initials(i.nombre)}</div>`;

    return `<div class="com-integ" onclick="verLegisladorDesdeComision('${i.nombre.replace(/'/g, "\\'")}')">
      <div style="width:52px;height:52px;border-radius:50%;border:2.5px solid ${color};overflow:hidden;margin:0 auto 4px">${fotoHtml}</div>
      <div class="com-integ-nombre">${i.nombre.split(' ').slice(-1)[0]}</div>
    </div>`;
  }).join('');

  // ── Notas Supabase
  const notas = await cargarNotas('notas_comisiones', 'comision', com.nombre);
  const notasHTML = notas.length
    ? `<ul class="com-notas-list">${notas.map(n => `<li>
        ${n.autor ? `<b>${n.autor}:</b> ` : ''}${n.texto}
        <span style="color:#94a3b8;font-size:.7rem;margin-left:6px">${new Date(n.fecha).toLocaleDateString('es-AR', {day:'2-digit',month:'2-digit',year:'2-digit'})}</span>
        <button onclick="borrarNotaComision('${n.id}',${idx})" style="float:right;background:none;border:none;color:#f87171;cursor:pointer;font-size:.72rem">✕</button>
      </li>`).join('')}</ul>`
    : '<p class="com-empty">No hay observaciones aún.</p>';

  // ── Drive link
  const driveHTML = com.drive
    ? `<div style="margin-top:4px">
        <a href="${com.drive.url}" target="_blank" rel="noopener"
           style="display:inline-flex;align-items:center;gap:7px;background:#EFF6FF;border:1.5px solid #BFDBFE;border-radius:8px;padding:8px 14px;font-size:.82rem;font-weight:600;color:#1D4ED8;text-decoration:none;transition:background .15s"
           onmouseover="this.style.background='#DBEAFE'" onmouseout="this.style.background='#EFF6FF'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          Carpeta Drive — ${com.nombre}
        </a>
      </div>`
    : '';

  body.innerHTML = `
    <!-- HEADER -->
    <div class="com-detail-header">
      <div class="com-detail-num">${com.numero}</div>
      <div style="flex:1">
        <div class="com-detail-nombre">${com.nombre}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;align-items:center">
          <span class="com-perfil-badge" style="background:${badge.bg};color:${badge.color}">${badge.label}</span>
          ${artDisplay ? `<span class="com-art-badge">${artDisplay}</span>` : ''}
          <span class="com-quorum-badge">Quórum: <strong>${quorum}</strong> / ${com.miembros}</span>
          ${com.fecha ? `<span class="com-fecha-badge">📅 ${com.fecha}</span>` : ''}
          ${com.director ? `<span class="com-dir-badge">Dir: ${com.director}</span>` : ''}
          ${com.reunion_asesores ? `<span class="com-dir-badge">Asesores: ${com.reunion_asesores}</span>` : ''}
        </div>
      </div>
    </div>

    <!-- 1. AUTORIDADES -->
    <div class="com-section-title">Autoridades</div>
    <div class="com-autos-grid">${autoHTML}</div>

    <!-- 2. INTEGRANTES -->
    <div class="com-section-title">${com.miembros} Integrantes</div>
    <div class="com-integs-grid">${integrantesHTML}</div>

    <!-- 3. HEMICICLO -->
    <div class="com-section-title">Composición del bloque</div>
    <div style="background:#f8fafc;border-radius:12px;padding:16px 8px 10px">
      ${buildHemiciclo(com.integrantes)}
      <div style="display:flex;flex-wrap:wrap;padding:8px 12px 4px">${buildLeyenda(com.integrantes)}</div>
    </div>

    <!-- 4. INFO DESPLEGABLE -->
    <div class="com-info-toggle" onclick="toggleComInfo(this)">
      <span>ℹ️ Información de la comisión</span>
      <span class="com-toggle-icon">＋</span>
    </div>
    <div class="com-info-body" style="display:none">
      ${com.perfil ? `<p><strong>Relevancia:</strong> ${com.perfil}</p>` : ''}
      ${com.observaciones_csv ? `<p><strong>Competencia principal:</strong> ${com.observaciones_csv}</p>` : ''}
      ${com.seguimiento ? `<p><strong>Seguimiento:</strong> ${com.seguimiento}</p>` : ''}
    </div>

    <!-- 5. OBSERVACIONES -->
    <div class="com-section-title">Observaciones del equipo</div>
    <div id="com-notas-wrap">${notasHTML}</div>
    <div class="com-nota-form">
      <textarea id="com-nota-texto" placeholder="Agregar observación sobre esta comisión…"></textarea>
      <div style="display:flex;gap:8px;margin-top:8px">
        <input id="com-nota-autor" type="text" placeholder="Tu nombre (opcional)" style="flex:1;padding:7px 10px;border:1.5px solid #BFDBFE;border-radius:7px;font-family:inherit;font-size:.82rem;outline:none;color:#1e293b">
        <button onclick="guardarObservacionComision(${idx})" class="com-nota-btn">Guardar</button>
      </div>
    </div>

    <!-- 6. DRIVE LINK -->
    ${driveHTML}
  `;

  document.getElementById('com-modal-title').textContent = com.nombre;
  modal.classList.add('open');
  document.getElementById('overlay').classList.add('show');
  body.scrollTop = 0;
}

function norm2(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function toggleComInfo(el) {
  const bodyEl = el.nextElementSibling;
  const icon = el.querySelector('.com-toggle-icon');
  const open = bodyEl.style.display === 'none';
  bodyEl.style.display = open ? 'block' : 'none';
  icon.textContent = open ? '－' : '＋';
}

function cerrarComision() {
  document.getElementById('com-modal').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

function verLegisladorDesdeComision(nombre) {
  const idx = DATA.findIndex(l => l.nombre === nombre);
  if (idx < 0) return;
  cerrarComision();
  switchPage('directorio');
  setTimeout(() => openPanel(idx), 150);
}

function verComisionDesdeLegislador(nombreComision) {
  const idx = COMISIONES.findIndex(c => c.nombre === nombreComision);
  if (idx < 0) return;
  closePanel();
  switchPage('comisiones');
  setTimeout(() => abrirComision(idx), 150);
}

// ── Notas comisiones ───────────────────────────────────────────────────────────
async function guardarObservacionComision(idx) {
  const texto = document.getElementById('com-nota-texto').value.trim();
  if (!texto) return;
  const autor = document.getElementById('com-nota-autor').value.trim();
  const btn = document.querySelector('.com-nota-btn');
  btn.textContent = 'Guardando…'; btn.disabled = true;
  const result = await guardarNota('notas_comisiones', { comision: COMISIONES[idx].nombre, texto, autor: autor || null });
  btn.textContent = 'Guardar'; btn.disabled = false;
  if (result) {
    document.getElementById('com-nota-texto').value = '';
    await recargarNotasComision(idx);
  } else {
    alert('Error al guardar. Revisá la conexión.');
  }
}

async function borrarNotaComision(id, idx) {
  if (!confirm('¿Eliminar esta observación?')) return;
  const ok = await eliminarNota('notas_comisiones', id);
  if (ok) await recargarNotasComision(idx);
}

async function recargarNotasComision(idx) {
  const com = COMISIONES[idx];
  const notas = await cargarNotas('notas_comisiones', 'comision', com.nombre);
  const wrap = document.getElementById('com-notas-wrap');
  if (!wrap) return;
  wrap.innerHTML = notas.length
    ? `<ul class="com-notas-list">${notas.map(n => `<li>
        ${n.autor ? `<b>${n.autor}:</b> ` : ''}${n.texto}
        <span style="color:#94a3b8;font-size:.7rem;margin-left:6px">${new Date(n.fecha).toLocaleDateString('es-AR',{day:'2-digit',month:'2-digit',year:'2-digit'})}</span>
        <button onclick="borrarNotaComision('${n.id}',${idx})" style="float:right;background:none;border:none;color:#f87171;cursor:pointer;font-size:.72rem">✕</button>
      </li>`).join('')}</ul>`
    : '<p class="com-empty">No hay observaciones aún.</p>';
}

// renderComisiones se llama desde switchPage() en app.js cuando se activa la pestaña
