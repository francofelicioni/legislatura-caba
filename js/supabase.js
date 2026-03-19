// ── Configuración Supabase ──────────────────────────────────────────────────
// Reemplazá estos valores con los de tu proyecto en supabase.com
// Settings → API → Project URL y anon public key
const SUPABASE_URL = 'TU_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY';

function getSupabaseClient() {
  if (typeof window.supabase === 'undefined') {
    console.warn('Supabase SDK no cargado');
    return null;
  }
  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function cargarNotas(nombreLegislador) {
  const client = getSupabaseClient();
  if (!client) return [];
  const { data, error } = await client
    .from('notas')
    .select('*')
    .eq('legislador', nombreLegislador)
    .order('fecha', { ascending: false });
  if (error) { console.error('Error cargando notas:', error); return []; }
  return data || [];
}

async function guardarNota(nombreLegislador, texto, autor) {
  const client = getSupabaseClient();
  if (!client) return null;
  const { data, error } = await client
    .from('notas')
    .insert([{ legislador: nombreLegislador, texto, autor: autor || null }])
    .select()
    .single();
  if (error) { console.error('Error guardando nota:', error); return null; }
  return data;
}

async function eliminarNota(id) {
  const client = getSupabaseClient();
  if (!client) return false;
  const { error } = await client.from('notas').delete().eq('id', id);
  if (error) { console.error('Error eliminando nota:', error); return false; }
  return true;
}
