const SUPABASE_URL = 'https://xhvxwjlmvzcssibthlpp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhodnh3amxtdnpjc3NpYnRobHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTQxMDIsImV4cCI6MjA4OTUzMDEwMn0.6GNiVTwCKnvmPa1H_WcGroQIyvCAhbPuMKf9QU7ww4Q';

let supabaseClient = null;

function getSupabaseClient() {
  if (typeof window.supabase === 'undefined') {
    console.warn('Supabase SDK no cargado');
    return null;
  }
  if (!supabaseClient) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return supabaseClient;
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