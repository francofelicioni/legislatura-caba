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
  if (p.includes('ALTO'))  return { label: 'Alta relevancia', color: '#dc2626', bg: '#fef2f2' };
  if (p.includes('ROSCA')) return { label: 'Rosca política', color: '#7c3aed', bg: '#f5f3ff' };
  if (p.includes('MEDIO')) return { label: 'Media relevancia', color: '#d97706', bg: '#fffbeb' };
  return { label: 'Baja relevancia', color: '#64748b', bg: '#f8fafc' };
}

function calcQuorum(miembros) {
  return Math.floor(miembros / 2) + 1;
}

function initials(n) {
  return n.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('');
}

// ── Hemiciclo mini para comisión ──────────────────────────────────────────────
function buildHemiciclo(integrantes) {
  const n = integrantes.length;
  const cx = 200, cy = 190;
  const rows = distribuirFilas(n);
  let seats = [];
  let idx = 0;
  const radii = [60, 95, 130, 165];
  rows.forEach((count, ri) => {
    const r = radii[ri] || radii[radii.length - 1] + ri * 35;
    for (let i = 0; i < count; i++) {
      const angle = Math.PI - (i / (count - 1 || 1)) * Math.PI;
      seats.push({
        x: cx + r * Math.cos(angle),
        y: cy - r * Math.sin(angle),
        leg: integrantes[idx] || null
      });
      idx++;
    }
  });

  let circles = seats.map(s => {
    const color = s.leg ? getBloqueColor(s.leg.bloque) : '#e2e8f0';
    const nombre = s.leg ? s.leg.nombre : '';
    return `<circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="9" fill="${color}" stroke="#fff" stroke-width="1.5" class="hemi-seat" data-nombre="${nombre}" style="cursor:pointer"/>`;
  }).join('\n');

  return `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px;display:block;margin:0 auto">
    <ellipse cx="200" cy="195" rx="185" ry="16" fill="#DBEAFE" opacity=".4"/>
    <path d="M 15 195 A 185 185 0 0 1 385 195" fill="none" stroke="#BFDBFE" stroke-width="1" stroke-dasharray="4 3"/>
    ${circles}
  </svg>`;
}

function distribuirFilas(n) {
  if (n <= 7)  return [n];
  if (n <= 13) return [Math.ceil(n/2), Math.floor(n/2)];
  if (n <= 20) return [Math.ceil(n/3), Math.ceil(n/3), Math.floor(n/3)];
  return [Math.ceil(n/4), Math.ceil(n/4), Math.ceil(n/4), n - Math.ceil(n/4)*3];
}

// ── Leyenda de bloques ────────────────────────────────────────────────────────
function buildLeyenda(integrantes) {
  const counts = {};
  integrantes.forEach(i => {
    const b = Object.keys(BLOQUE_COLORS).find(k => i.bloque && i.bloque.includes(k)) || i.bloque || 'Otro';
    const shortB = b === 'Fuerza por Buenos Aires' ? 'FxBSAS'
      : b === 'La Libertad Avanza' ? 'LLA'
      : b === 'Vamos por Más' ? 'VxM'
      : b === 'Confianza y Desarrollo' ? 'CyD'
      : b;
    if (!counts[shortB]) counts[shortB] = { color: getBloqueColor(i.bloque), count: 0 };
    counts[shortB].count++;
  });
  return Object.entries(counts).sort((a,b) => b[1].count - a[1].count).map(([name, v]) =>
    `<span style="display:inline-flex;align-items:center;gap:5px;font-size:.72rem;color:#475569;margin-right:12px">
      <span style="width:10px;height:10px;border-radius:50%;background:${v.color};flex-shrink:0"></span>${name} <strong>${v.count}</strong>
    </span>`
  ).join('');
}

// ── Render grilla de comisiones ───────────────────────────────────────────────
function renderComisiones() {
  const container = document.getElementById('comisiones-grid');
  if (!container) return;

  container.innerHTML = COMISIONES.map((com, idx) => {
    const badge = getPerfilBadge(com.perfil);
    const quorum = calcQuorum(com.miembros);
    const mochi = com.integrantes.some(i => i.nombre === 'Federico Mochi');

    return `<div class="com-card" onclick="abrirComision(${idx})" style="animation-delay:${Math.min(idx*.03,.5)}s">
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
        <span class="com-quorum">Quórum: ${quorum}</span>
        ${com.fecha ? `<span class="com-fecha">📅 ${com.fecha}</span>` : ''}
      </div>
    </div>`;
  }).join('');
}

// ── Modal/detalle de comisión ────────────────────────────────────────────────
async function abrirComision(idx) {
  const com = COMISIONES[idx];
  const modal = document.getElementById('com-modal');
  const body = document.getElementById('com-modal-body');
  const badge = getPerfilBadge(com.perfil);
  const quorum = calcQuorum(com.miembros);

  // Autoridades
  const autoridades = [
    { cargo: 'Presidente/a', nombre: com.presidente },
    { cargo: 'Vicepresidente/a 1°', nombre: com.vice1 },
    { cargo: 'Vicepresidente/a 2°', nombre: com.vice2 },
  ].filter(a => a.nombre);

  // Fotos de autoridades
  const autoHTML = autoridades.map(a => {
    const leg = com.integrantes.find(i => {
      const n1 = (i.nombre || '').toLowerCase();
      const n2 = (a.nombre || '').toLowerCase();
      return n1.includes(n2.split(' ')[0].toLowerCase()) || n2.includes(n1.split(' ')[0].toLowerCase());
    });
    return `<div class="com-auto-card" onclick="verLegisladorDesdeComision('${(leg?.nombre || '').replace(/'/g,"\\'")}')">
      ${leg?.foto ? `<img src="${leg.foto}" alt="${leg.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="com-auto-initials" style="display:none">${initials(a.nombre)}</div>` 
      : `<div class="com-auto-initials">${initials(a.nombre)}</div>`}
      <div class="com-auto-cargo">${a.cargo}</div>
      <div class="com-auto-nombre">${a.nombre}</div>
    </div>`;
  }).join('');

  // Integrantes con foto
  const integrantesHTML = com.integrantes.map(i => {
    const color = getBloqueColor(i.bloque);
    return `<div class="com-integ" onclick="verLegisladorDesdeComision('${i.nombre.replace(/'/g,"\\'")}')">
      ${i.foto ? `<img src="${i.foto}" alt="${i.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="com-integ-initials" style="display:none;background:${color}22;color:${color}">${initials(i.nombre)}</div>`
      : `<div class="com-integ-initials" style="background:${color}22;color:${color}">${initials(i.nombre)}</div>`}
      <div class="com-integ-nombre">${i.nombre.split(' ').slice(-1)[0]}</div>
    </div>`;
  }).join('');

  // Load notas from Supabase
  const notas = await cargarNotas('notas_comisiones', 'comision', com.nombre);
  const notasHTML = notas.length ? `
    <ul class="com-notas-list">
      ${notas.map(n => `<li>
        ${n.autor ? `<b>${n.autor}:</b> ` : ''}${n.texto}
        <span style="color:#94a3b8;font-size:.7rem;margin-left:6px">${new Date(n.fecha).toLocaleDateString('es-AR',{day:'2-digit',month:'2-digit',year:'2-digit'})}</span>
        <button onclick="borrarNotaComision('${n.id}',${idx})" style="float:right;background:none;border:none;color:#f87171;cursor:pointer;font-size:.72rem">✕</button>
      </li>`).join('')}
    </ul>` : '<p class="com-empty">No hay observaciones aún.</p>';

  body.innerHTML = `
    <div class="com-detail-header">
      <div class="com-detail-num">${com.numero}</div>
      <div style="flex:1">
        <div class="com-detail-nombre">${com.nombre}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;align-items:center">
          <span class="com-perfil-badge" style="background:${badge.bg};color:${badge.color}">${badge.label}</span>
          <span class="com-art-badge">Art. ${com.articulo}</span>
          <span class="com-quorum-badge">Quórum: <strong>${quorum}</strong> de ${com.miembros}</span>
          ${com.fecha ? `<span class="com-fecha-badge">📅 ${com.fecha}</span>` : ''}
          ${com.director ? `<span class="com-dir-badge">Dir: ${com.director}</span>` : ''}
          ${com.reunion_asesores ? `<span class="com-dir-badge">Asesores: ${com.reunion_asesores}</span>` : ''}
        </div>
      </div>
    </div>

    <!-- Autoridades -->
    <div class="com-section-title">Autoridades</div>
    <div class="com-autos-grid">${autoHTML}</div>

    <!-- Hemiciclo -->
    <div class="com-section-title">Composición del bloque</div>
    <div style="background:#f8fafc;border-radius:12px;padding:16px 8px 8px">
      ${buildHemiciclo(com.integrantes)}
      <div style="display:flex;flex-wrap:wrap;padding:8px 12px 4px;gap:4px">${buildLeyenda(com.integrantes)}</div>
    </div>

    <!-- Info comisión desplegable -->
    <div class="com-info-toggle" onclick="toggleComInfo(this)">
      <span>ℹ️ Información de la comisión</span>
      <span class="com-toggle-icon">＋</span>
    </div>
    <div class="com-info-body" style="display:none">
      ${com.perfil ? `<p><strong>Relevancia:</strong> ${com.perfil}</p>` : ''}
      ${com.observaciones_csv ? `<p><strong>Competencia principal:</strong> ${com.observaciones_csv}</p>` : ''}
      ${com.seguimiento ? `<p><strong>Seguimiento:</strong> ${com.seguimiento}</p>` : ''}
    </div>

    <!-- Integrantes -->
    <div class="com-section-title">${com.miembros} Integrantes</div>
    <div class="com-integs-grid">${integrantesHTML}</div>

    <!-- Observaciones Supabase -->
    <div class="com-section-title">Observaciones del equipo</div>
    <div id="com-notas-wrap">${notasHTML}</div>
    <div class="com-nota-form">
      <textarea id="com-nota-texto" placeholder="Agregar observación sobre esta comisión…"></textarea>
      <div style="display:flex;gap:8px;margin-top:8px">
        <input id="com-nota-autor" type="text" placeholder="Tu nombre (opcional)" style="flex:1;padding:7px 10px;border:1.5px solid #BFDBFE;border-radius:7px;font-family:inherit;font-size:.82rem;outline:none">
        <button onclick="guardarObservacionComision(${idx})" class="com-nota-btn">Guardar</button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.getElementById('overlay').classList.add('show');
}

function toggleComInfo(el) {
  const body = el.nextElementSibling;
  const icon = el.querySelector('.com-toggle-icon');
  const open = body.style.display === 'none';
  body.style.display = open ? 'block' : 'none';
  icon.textContent = open ? '－' : '＋';
}

function cerrarComision() {
  document.getElementById('com-modal').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

// ── Desde comisión → perfil de legislador ────────────────────────────────────
function verLegisladorDesdeComision(nombre) {
  const idx = DATA.findIndex(l => l.nombre === nombre);
  if (idx < 0) return;
  cerrarComision();
  switchPage('directorio');
  setTimeout(() => openPanel(idx), 100);
}

// ── Desde legislador → comisión ───────────────────────────────────────────────
function verComisionDesdeLegislador(nombreComision) {
  const idx = COMISIONES.findIndex(c => c.nombre === nombreComision);
  if (idx < 0) return;
  closePanel();
  switchPage('comisiones');
  setTimeout(() => abrirComision(idx), 100);
}

// ── Notas de comisiones ───────────────────────────────────────────────────────
async function guardarObservacionComision(idx) {
  const texto = document.getElementById('com-nota-texto').value.trim();
  if (!texto) return;
  const autor = document.getElementById('com-nota-autor').value.trim();
  const btn = document.querySelector('.com-nota-btn');
  btn.textContent = 'Guardando…'; btn.disabled = true;

  const result = await guardarNota('notas_comisiones', {
    comision: COMISIONES[idx].nombre,
    texto,
    autor: autor || null
  });

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
  wrap.innerHTML = notas.length ? `
    <ul class="com-notas-list">
      ${notas.map(n => `<li>
        ${n.autor ? `<b>${n.autor}:</b> ` : ''}${n.texto}
        <span style="color:#94a3b8;font-size:.7rem;margin-left:6px">${new Date(n.fecha).toLocaleDateString('es-AR',{day:'2-digit',month:'2-digit',year:'2-digit'})}</span>
        <button onclick="borrarNotaComision('${n.id}',${idx})" style="float:right;background:none;border:none;color:#f87171;cursor:pointer;font-size:.72rem">✕</button>
      </li>`).join('')}
    </ul>` : '<p class="com-empty">No hay observaciones aún.</p>';
}
