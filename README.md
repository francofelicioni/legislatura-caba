# Legislatura CABA — Directorio interno

App web para el equipo asesor. Incluye Inicio, Directorio de legisladores y Comisiones.

## Estructura de archivos

```
legislatura-caba/
├── index.html              ← página principal (nav + 3 páginas)
├── css/
│   └── styles.css          ← todos los estilos
├── js/
│   ├── data.js             ← datos de los 60 legisladores
│   ├── comisiones.js       ← datos de las 29 comisiones
│   ├── notes.js            ← conexión Supabase (notas compartidas)
│   ├── app.js              ← lógica directorio + panel legisladores
│   └── comisiones_ui.js    ← lógica página comisiones
└── README.md
```

## Cómo actualizar datos

### Modificar un legislador
Abrís `js/data.js` en VS Code, buscás el nombre y editás los campos.

### Modificar una comisión
Abrís `js/comisiones.js` en VS Code, buscás el nombre de la comisión y editás.

### Publicar los cambios
```bash
git add .
git commit -m "descripción del cambio"
git push
```
Netlify detecta el push y actualiza el sitio en ~15 segundos.

## Base de datos Supabase (notas compartidas)

Las notas de legisladores y observaciones de comisiones se guardan en Supabase.
Para agregar la tabla de comisiones ejecutá en Supabase → SQL Editor:

```sql
create table notas_comisiones (
  id uuid default gen_random_uuid() primary key,
  comision text not null,
  texto text not null,
  autor text,
  fecha timestamp default now()
);
alter table notas_comisiones enable row level security;
create policy "Lectura pública" on notas_comisiones for select using (true);
create policy "Escritura pública" on notas_comisiones for insert with check (true);
create policy "Borrado público" on notas_comisiones for delete using (true);
```
