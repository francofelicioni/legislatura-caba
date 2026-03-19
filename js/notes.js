// ── Persistencia local de notas (sin backend) ──────────────────────────────
const NOTES_STORAGE_KEY = 'legislatura_caba_notas';

function readNotesStore() {
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error leyendo notas locales:', error);
    return [];
  }
}

function writeNotesStore(notes) {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
    return true;
  } catch (error) {
    console.error('Error guardando notas locales:', error);
    return false;
  }
}

function createNoteId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `note_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

async function cargarNotas(nombreLegislador) {
  const notes = readNotesStore()
    .filter((note) => note.legislador === nombreLegislador)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  return notes;
}

async function guardarNota(nombreLegislador, texto, autor) {
  const notes = readNotesStore();
  const newNote = {
    id: createNoteId(),
    legislador: nombreLegislador,
    texto,
    autor: autor || null,
    fecha: new Date().toISOString(),
  };

  notes.push(newNote);
  const ok = writeNotesStore(notes);
  return ok ? newNote : null;
}

async function eliminarNota(id) {
  const notes = readNotesStore();
  const updated = notes.filter((note) => note.id !== id);

  if (updated.length === notes.length) return false;
  return writeNotesStore(updated);
}
