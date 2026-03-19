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
│   ├── notes.js        ← notas guardadas en localStorage
│   └── app.js          ← lógica de la app
└── README.md
```

## Notas del equipo

Las notas se guardan de forma local en el navegador usando `localStorage`.
Esto significa que:

- no requiere backend ni configuración adicional;
- cada navegador/dispositivo conserva sus propias notas;
- si se limpian los datos del navegador, las notas se pierden.

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
