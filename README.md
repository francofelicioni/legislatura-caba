# Legislatura CABA — Directorio interno

App web para el equipo asesor de la Legislatura de la Ciudad de Buenos Aires.

## Estructura

```
legislatura-caba/
├── index.html          ← página principal
├── css/
│   └── styles.css      ← estilos
├── js/
│   ├── data.js         ← datos de los 60 legisladores
│   ├── supabase.js     ← conexión con base de datos
│   └── app.js          ← lógica de la app
└── README.md
```

## Configurar Supabase

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Ir a **Settings → API** y copiar:
   - Project URL
   - anon public key
3. Abrir `js/supabase.js` y reemplazar:
   ```js
   const SUPABASE_URL = 'TU_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY';
   ```
4. En Supabase → **SQL Editor** ejecutar:
   ```sql
   create table notas (
     id uuid default gen_random_uuid() primary key,
     legislador text not null,
     texto text not null,
     autor text,
     fecha timestamp default now()
   );
   alter table notas enable row level security;
   create policy "Lectura pública" on notas for select using (true);
   create policy "Escritura pública" on notas for insert with check (true);
   ```

## Flujo de trabajo

```bash
# Hacer cambios en VS Code, luego:
git add .
git commit -m "descripción del cambio"
git push
# → Netlify detecta el push y despliega automáticamente en ~15 segundos
```

## Actualizar datos de un legislador

Abrir `js/data.js` y editar el objeto correspondiente. Cada legislador tiene esta estructura:

```js
{
  "nombre": "Nombre Apellido",
  "bloque": "Nombre del bloque",
  "referente": "Nombre del referente",
  "mandato": "hasta 2027",
  "resumen": ["línea 1", "línea 2"],
  "tematicas": ["Tema 1", "Tema 2"],
  "redes": ["X: @usuario / 10K"],
  "acuerdos": ["Punto de acuerdo"],
  "extra": ["Dato extra"],
  "foto": "https://url-de-la-foto.jpg"
}
```
