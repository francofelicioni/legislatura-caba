// ── App principal — Legislatura CABA ──────────────────────────────────────
// Lógica de UI: grilla, filtros, búsqueda, panel lateral

const BLOQUES_CFG = {
  "Fuerza por Buenos Aires": { color:"#5BB4E8", bg:"#EFF9FF", bancas:20, jefe:"Claudia Neira",         abrev:"FxBSAS" },
  "La Libertad Avanza":      { color:"#7C3AED", bg:"#F5F0FF", bancas:14, jefe:"Pilar Ramírez",          abrev:"LLA"    },
  "Vamos por Más":           { color:"#F59E0B", bg:"#FFFBEB", bancas:12, jefe:"Silvia Lospennato",      abrev:"VxM"    },
  "Confianza y Desarrollo":  { color:"#10B981", bg:"#F0FFF8", bancas:6,  jefe:"Emmanuel Ferrario",      abrev:"CyD"    },
  "UCR":                     { color:"#EF4444", bg:"#FFF5F5", bancas:5,  jefe:"Manuela Thourte",        abrev:"UCR"    },
  "FIT":                     { color:"#9B9B9B", bg:"#F7F7F7", bancas:2,  jefe:"Vanina Biasi / D'Atri",  abrev:"FIT"    },
  "Transformación":          { color:"#9B9B9B", bg:"#F7F7F7", bancas:1,  jefe:"Eugenio Casielles",      abrev:"Rep."   },
};

function getBloqueStyle(b) {
  for (const [k,v] of Object.entries(BLOQUES_CFG)) { if (b.includes(k)) return v; }
  return { color:"#64748b", bg:"#EFF6FF", abrev:b.slice(0,6) };
}
function getBloqueBucket(b) {
  for (const k of Object.keys(BLOQUES_CFG)) { if (b.includes(k)) return k; }
  return b;
}
function initials(n) {
  return n.split(' ').filter(w=>w.length>2).slice(0,2).map(w=>w[0]).join('');
}

// ── RECINTO interactivo ───────────────────────────────────
const tooltip = document.getElementById('seat-tooltip');
let activeBloque = null;

document.querySelectorAll('.seat').forEach(seat => {
  seat.addEventListener('mouseenter', e => {
    tooltip.textContent = seat.dataset.bloque;
    tooltip.style.opacity = '1';
  });
  seat.addEventListener('mousemove', e => {
    tooltip.style.left = (e.clientX + 12) + 'px';
    tooltip.style.top  = (e.clientY - 30) + 'px';
  });
  seat.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
  seat.addEventListener('click', () => {
    const b = seat.dataset.bloque;
    if (activeBloque === b) {
      clearHighlight();
    } else {
      highlightBloque(b);
    }
  });
});

document.querySelectorAll('#leyenda .legend-item').forEach(item => {
  item.addEventListener('click', () => {
    const b = item.dataset.bloque;
    if (activeBloque === b) clearHighlight();
    else highlightBloque(b);
  });
});

function highlightBloque(b) {
  activeBloque = b;
  document.querySelectorAll('.seat').forEach(s => {
    s.classList.toggle('dimmed', s.dataset.bloque !== b);
  });
  document.querySelectorAll('#leyenda .legend-item').forEach(item => {
    item.style.opacity = item.dataset.bloque === b ? '1' : '.35';
  });
}
function clearHighlight() {
  activeBloque = null;
  document.querySelectorAll('.seat').forEach(s => s.classList.remove('dimmed'));
  document.querySelectorAll('#leyenda .legend-item').forEach(item => item.style.opacity = '1');
}

// ── HOME: Bloques cards ───────────────────────────────────
const TOTAL = 60;
const bg = document.getElementById('bloquesGrid');
Object.entries(BLOQUES_CFG).forEach(([nombre, cfg]) => {
  const pct = Math.round(cfg.bancas / TOTAL * 100);
  const card = document.createElement('div');
  card.className = 'bloque-card';
  card.innerHTML = `
    <div class="bloque-header">
      <div class="bloque-dot" style="background:${cfg.color}"></div>
      <div class="bloque-name">${nombre}</div>
      <div class="bloque-bancas">${cfg.bancas}<small>bancas</small></div>
    </div>
    <div class="bloque-body">
      <div class="bloque-meta"><b>Jefe/a de bloque:</b> ${cfg.jefe}</div>
      <div class="bloque-meta" style="margin-bottom:10px"><b>Representación:</b> ${pct}% del cuerpo</div>
      <div class="bloque-bar-wrap"><div class="bloque-bar" style="width:${pct}%;background:${cfg.color}"></div></div>
    </div>`;
  card.addEventListener('click', () => {
    switchPage('directorio');
    activeFilter = nombre;
    document.querySelectorAll('.fbtn').forEach(b => {
      b.classList.toggle('on', b.dataset.bloque === nombre);
    });
    renderGrid();
  });
  bg.appendChild(card);
});

// ── NAV ──────────────────────────────────────────────────
function switchPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('on'));
  document.getElementById('page-'+id).classList.add('on');
  document.querySelector(`[data-page="${id}"]`).classList.add('on');
}
document.querySelectorAll('.nav-tab').forEach(btn => {
  btn.addEventListener('click', () => switchPage(btn.dataset.page));
});

// ── DIRECTORIO ────────────────────────────────────────────
let activeFilter = 'Todos';
let query = '';
let activeIdx = -1;
// Notas gestionadas en localStorage (ver js/notes.js)

const filterBar = document.getElementById('filterBar');
['Todos', ...Object.keys(BLOQUES_CFG)].forEach(f => {
  const btn = document.createElement('button');
  btn.className = 'fbtn' + (f==='Todos'?' on':'');
  btn.textContent = f;
  btn.dataset.bloque = f;
  btn.addEventListener('click', function() {
    activeFilter = f;
    document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('on'));
    this.classList.add('on');
    renderGrid();
  });
  filterBar.appendChild(btn);
});

document.getElementById('searchInput').addEventListener('input', function() {
  query = this.value.toLowerCase(); renderGrid();
});

function renderGrid() {
  const grid = document.getElementById('grid');
  const visible = DATA.filter(d => {
    const bucket = getBloqueBucket(d.bloque);
    const okF = activeFilter==='Todos' || bucket===activeFilter;
    const hay = [d.nombre,d.bloque,d.referente,...d.tematicas,...d.resumen,...d.acuerdos,...d.extra].join(' ').toLowerCase();
    return okF && (!query || hay.includes(query));
  });
  document.getElementById('resultCount').textContent =
    visible.length < DATA.length ? `Mostrando ${visible.length} de ${DATA.length}` : '';
  grid.innerHTML = '';
  if (!visible.length) { grid.innerHTML='<div class="empty-grid">Sin resultados.</div>'; return; }
  visible.forEach((leg, i) => {
    const idx = DATA.indexOf(leg);
    const st = getBloqueStyle(leg.bloque);
    const card = document.createElement('div');
    card.className = 'card'+(idx===activeIdx?' active':'');
    card.style.animationDelay = Math.min(i*.02,.4)+'s';
    card.dataset.idx = idx;
    const since = (leg.resumen.find(r=>r.toLowerCase().includes('legisla'))||'').replace('Legisla ','');
    const temas = leg.tematicas.slice(0,2).map(t=>`<span class="tag">${t.split(':')[0].split('/')[0].trim().slice(0,22)}</span>`).join('');
    const avatarHtml = leg.foto
      ? `<img class="card-photo" src="${leg.foto}" alt="${leg.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="card-avatar" style="display:none">${initials(leg.nombre)}</div>`
      : `<div class="card-avatar">${initials(leg.nombre)}</div>`;
    card.innerHTML = `
      <div class="card-avatar-wrap">${avatarHtml}</div>
      <div class="card-body">
        <div class="card-name">${leg.nombre}</div>
        <span class="chip" style="background:${st.bg};color:${st.color}">${getBloqueBucket(leg.bloque)}</span>
        ${since?`<div class="card-since">${since}</div>`:''}
        ${temas?`<div class="tags">${temas}</div>`:''}
      </div>`;
    card.addEventListener('click',()=>openPanel(idx));
    grid.appendChild(card);
  });
}

async function openPanel(idx) {
  activeIdx = idx;
  const leg = DATA[idx];
  const st = getBloqueStyle(leg.bloque);
  document.getElementById('panelTitle').textContent = leg.nombre;
  const hero = document.getElementById('panelHero');
  if (leg.foto) {
    // Use object-fit:contain and center the image to avoid cutting heads; also, increase the area slightly with padding
    // Set background to political color
    hero.innerHTML = `<img src="${leg.foto}" alt="${leg.nombre}" style="width:100%;height:100%;object-fit:contain;object-position:center;background:${st.bg};padding:8px;" onerror="this.parentElement.textContent='${initials(leg.nombre)}'">`;
  } else {
    hero.textContent = initials(leg.nombre);
    hero.style.background = st.bg; // Set background to political color when no photo
  }
  document.getElementById('panelMeta').innerHTML = `
    <span class="chip" style="background:${st.bg};color:${st.color};font-size:.72rem;padding:4px 10px">${leg.bloque}</span>
    ${leg.referente?`<span class="meta-item"><b>Referente:</b> ${leg.referente}</span>`:''}
    ${leg.mandato?`<span class="meta-item"><b>Mandato:</b> ${leg.mandato}</span>`:''}
  `;
  let html='';
  function sec(title, items, cls, lCls) {
    if (!items||!items.length) { if(cls==='green') html+=`<div class="sec"><div class="sec-label green">${title}</div><p class="empty">No identificados</p></div>`; return; }
    html+=`<div class="sec"><div class="sec-label ${cls||''}">${title}</div><ul class="items ${lCls||''}">${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
  }
  sec('Perfil profesional', leg.resumen);
  sec('Temáticas', leg.tematicas);
  sec('Redes y comunicación', leg.redes);
  sec('Posibles puntos de acuerdo', leg.acuerdos.filter(a=>a&&a!=='No encontré'), 'green','green');
  sec('Dato extra', leg.extra, 'amber','amber');
  const myNotes = await cargarNotas(leg.nombre);
  if (myNotes.length) {
    html += `<div class="sec"><div class="sec-label blue2">Notas del equipo</div><ul class="items blue2">`;
    myNotes.forEach(n => {
      const fecha = new Date(n.fecha).toLocaleDateString('es-AR', {day:'2-digit',month:'2-digit',year:'2-digit'});
      html += `<li data-nota-id="${n.id}">
        ${n.autor ? `<b>${n.autor}:</b> ` : ''}${n.texto}
        <span style="color:#94a3b8;font-size:.7rem;margin-left:6px">${fecha}</span>
        <button onclick="borrarNota('${n.id}', '${leg.nombre.replace(/'/g,"\'")}')" style="float:right;background:none;border:none;color:#f87171;cursor:pointer;font-size:.72rem;padding:0 4px" title="Eliminar">✕</button>
      </li>`;
    });
    html += `</ul></div>`;
  }
  document.getElementById('panelBody').innerHTML = html;
  document.getElementById('noteText').value='';
  document.getElementById('noteAuthor').value='';
  document.getElementById('notesForm').classList.remove('open');
  document.getElementById('panel').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.getElementById('gridWrap').classList.add('pushed');
  document.querySelector('.panel-scroll').scrollTop=0;
  document.querySelectorAll('.card').forEach(c=>c.classList.toggle('active',+c.dataset.idx===idx));
}

function closePanel() {
  activeIdx=-1;
  document.getElementById('panel').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('gridWrap').classList.remove('pushed');
  document.querySelectorAll('.card').forEach(c=>c.classList.remove('active'));
}

document.getElementById('closeBtn').addEventListener('click', closePanel);
document.getElementById('overlay').addEventListener('click', closePanel);
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closePanel(); });
document.getElementById('notesToggle').addEventListener('click',()=>document.getElementById('notesForm').classList.toggle('open'));
document.getElementById('saveNote').addEventListener('click', async () => {
  if (activeIdx < 0) return;
  const texto = document.getElementById('noteText').value.trim();
  if (!texto) return;
  const leg = DATA[activeIdx];
  const autor = document.getElementById('noteAuthor').value.trim();
  const btn = document.getElementById('saveNote');
  btn.textContent = 'Guardando...';
  btn.disabled = true;
  const result = await guardarNota(leg.nombre, texto, autor);
  btn.textContent = 'Guardar nota';
  btn.disabled = false;
  if (result) {
    document.getElementById('noteText').value = '';
    document.getElementById('noteAuthor').value = '';
    await openPanel(activeIdx);
  } else {
    alert('Error al guardar la nota. Revisá la conexión.');
  }
});

renderGrid();

// ── Borrar nota desde el panel ────────────────────────────────────────────────
async function borrarNota(id, nombreLeg) {
  if (!confirm('¿Eliminar esta nota?')) return;
  const ok = await eliminarNota(id);
  if (ok) {
    const idx = DATA.findIndex(l => l.nombre === nombreLeg);
    if (idx >= 0) await openPanel(idx);
  }
}
