const SUPABASE_URL = 'https://xhvxwjlmvzcssibthlpp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhodnh3amxtdnpjc3NpYnRobHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTQxMDIsImV4cCI6MjA4OTUzMDEwMn0.6GNiVTwCKnvmPa1H_WcGroQIyvCAhbPuMKf9QU7ww4Q';

let _sbClient = null;
function getClient() {
  if (typeof window.supabase === 'undefined') return null;
  if (!_sbClient) _sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return _sbClient;
}

async function cargarNotas(tabla, campo, valor) {
  const c = getClient(); if (!c) return [];
  const { data, error } = await c.from(tabla).select('*').eq(campo, valor).order('fecha', { ascending: false });
  if (error) { console.error(error); return []; }
  return data || [];
}

async function guardarNota(tabla, campos) {
  const c = getClient(); if (!c) return null;
  const { data, error } = await c.from(tabla).insert([campos]).select().single();
  if (error) { console.error(error); return null; }
  return data;
}

async function eliminarNota(tabla, id) {
  const c = getClient(); if (!c) return false;
  const { error } = await c.from(tabla).delete().eq('id', id);
  if (error) { console.error(error); return false; }
  return true;
}
