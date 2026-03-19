// Datos de los 60 legisladores de la Legislatura CABA
const DATA = [
  {
    "nombre": "Leandro Santoro",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Leandro Santoro",
    "mandato": "hasta 2027",
    "resumen": [
      "Referente de la oposición porteña",
      "Ex Diputado Nacional (2021-2025)",
      "Legislador porteño"
    ],
    "tematicas": [
      "Oposición al oficialismo porteño",
      "Políticas sociales",
      "Urbanismo"
    ],
    "redes": [
      "Alta presencia en medios",
      "Twitter/X: alta actividad"
    ],
    "acuerdos": [],
    "extra": [
      "Figura central del peronismo porteño"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_ed99a587-f759-4a8b-90c8-979d64257150.JPG"
  },
  {
    "nombre": "Federico Mochi",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Juan Manuel Olmos",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025"
    ],
    "tematicas": [
      "Jóvenes",
      "Políticas sociales"
    ],
    "redes": [],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_daa47c56-1c76-416d-a1f2-f187aab469a8.jpg"
  },
  {
    "nombre": "Pablo Donati",
    "bloque": "Vamos por Más",
    "referente": "Ricardo Lopez Murphy",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Contador Público UBA"
    ],
    "tematicas": [
      "Alivio fiscal y reestructuración tributaria"
    ],
    "redes": [
      "X: / 1.1K",
      "Instagram: / 1.2k / 50 likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_6ded8772-7eb4-4f66-acc2-f33d7f74953e.jpg"
  },
  {
    "nombre": "Darío Nieto",
    "bloque": "Vamos por Más",
    "referente": "Mauricio Macri",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021",
      "Licenciado en Ciencia Política (UBA)",
      "Comunicación política y gestión partidaria (PRO)"
    ],
    "tematicas": [
      "Innovación, tecnología y modernización estatal",
      "Reducción de impuestos y menor gasto público",
      "Simplificación regulatoria",
      "Cultura emergente / e-sports"
    ],
    "redes": [
      "Buen manejo de redes, espontáneo, IA",
      "X: Darío Nieto / 14K",
      "Instagram: / 51,9K / 10k likes"
    ],
    "acuerdos": [
      "Innovación y tecnología"
    ],
    "extra": [
      "De los más críticos del gobierno de Milei dentro del PRO",
      "Se define como 'militante del futuro'",
      "Muy buen manejo comunicacional"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_d7ad633e-881b-4e20-a543-a01020642d8d.jpg"
  },
  {
    "nombre": "Mariana Gonzalez",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Juan Grabois",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Relevamiento Nacional de Personas en Situación de Calle",
      "Brigadas Solidarias",
      "Argentina Humana y Patria Grande"
    ],
    "tematicas": [
      "Personas en situación de calle",
      "Consumo problemático y adicciones"
    ],
    "redes": [
      "X: / 1k",
      "Instagram: / 4k / 200 likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_4d940573-659d-4d00-b458-f1da8ce731fe.jpg"
  },
  {
    "nombre": "Graciana Peñafort",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Juan Manuel Olmos / CFK",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Abogada",
      "Directora General de Asuntos Jurídicos del Senado de la Nación"
    ],
    "tematicas": [
      "Derechos sociales e inclusión",
      "Justicia"
    ],
    "redes": [
      "X: / 288K",
      "Instagram: / 45.8k / 1k likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_97eff8ca-4dd2-4a64-8f10-5359ccaab9c2.jpg"
  },
  {
    "nombre": "Francisco Caporiccio",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Sergio Massa",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Politólogo UBA",
      "Secretario general de la juventud / periodista de Independiente de Avellaneda",
      "Docente UBA / Frente Renovador"
    ],
    "tematicas": [
      "Deporte",
      "Educación",
      "Empleo jóvenes"
    ],
    "redes": [
      "X: / 2K",
      "Instagram: / 20k / 2k likes"
    ],
    "acuerdos": [],
    "extra": [
      "Legislador sub 30",
      "Apuesta de Massa",
      "Participaba del stream LACA / KM0"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_1b3324a4-78c0-4732-adf1-fd27d8682491.jpg"
  },
  {
    "nombre": "Juan Modarelli",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "CFK",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021",
      "Profesor de historia",
      "Militancia en La Cámpora",
      "Vice 2 de la legislatura"
    ],
    "tematicas": [
      "Deporte y Cultura",
      "Transporte"
    ],
    "redes": [
      "X: / 2.7k",
      "Instagram: / 4.2k"
    ],
    "acuerdos": [],
    "extra": [
      "Denuncia a Jorge Macri por negociados con el autódromo y el Moto GP"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_a82f4407-f1aa-4767-ad9b-faf3189ef7d5.jpg"
  },
  {
    "nombre": "Claudia Negri",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Carlos Rojo / Juan Manuel Olmos",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Vicedecana de la facultad de medicina UBA",
      "Doctora en Medicina UBA",
      "Licenciada en obstetricia"
    ],
    "tematicas": [
      "Salud: horario en hospitales / turnos / salud mental",
      "Educación",
      "Ciencia e Investigación"
    ],
    "redes": [
      "X: 700",
      "Instagram: / 5.7k / 100 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Se presenta como una outsider que viene de la medicina"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_7ce45bb6-b2cb-49a9-9180-94fccc579c1d.jpg"
  },
  {
    "nombre": "Sergio Siciliano",
    "bloque": "Vamos por Más",
    "referente": "Maria Eugenia Vidal",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Maestro, profesor y licenciado en Ciencias de la Educación",
      "Coordinador de Políticas Educativas CABA",
      "Subsecretario de Educación PBA"
    ],
    "tematicas": [
      "Educación",
      "Derechos Humanos, Justicia, Niñez y Juventud",
      "Proyectos de desarrollo comunitario"
    ],
    "redes": [
      "X: / 13,1K",
      "Instagram: / 4,2k / 100 likes"
    ],
    "acuerdos": [
      "Educación integral y calidad educativa",
      "Protección de derechos de niños, adolescentes y jóvenes",
      "Innovación y tecnología educativa"
    ],
    "extra": [
      "Proyecto para ceder predio público a asociación vinculada a Víctor Santa María (Barrancas FC / UMET)"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_1b4edb76-9713-40d0-8393-e736c95a92eb.jpg"
  },
  {
    "nombre": "Diego Vartabedian",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei / Manuel Adorni",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Director Nacional de Relaciones Institucionales y Asuntos Políticos"
    ],
    "tematicas": [
      "Achicamiento del Estado"
    ],
    "redes": [
      "Instagram: perfil cerrado / 175 seguidores"
    ],
    "acuerdos": [],
    "extra": [
      "Implicado en la corrupción del PAMI",
      "Se encargaba de colocar militantes en puestos estatales"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_efb158e1-363d-46e9-84c5-d408513c2d73.jpg"
  },
  {
    "nombre": "Noemí Geminiani",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Victor Santa Maria",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Referente del SUTERH"
    ],
    "tematicas": [
      "Derechos laborales y sindicales"
    ],
    "redes": [
      "X: / 300",
      "Instagram: / 600 / 50 likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_c72c0e75-7bd5-44f0-90a7-94646a99888b.jpg"
  },
  {
    "nombre": "Lucía Montenegro",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021"
    ],
    "tematicas": [
      "Eventos y reconocimientos culturales"
    ],
    "redes": [
      "X: / 35,5K",
      "Instagram: / 42K"
    ],
    "acuerdos": [],
    "extra": [
      "Hija de un ex carapintada / Unite por la Libertad y la Dignidad",
      "Se viralizó por evento de artes marciales en la legislatura",
      "Retuvo 3.500 litros de leche de La Serenísima en local de LLA"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_d0cd6400-f9de-4e81-aa6c-c05b45774a11.jpg"
  },
  {
    "nombre": "María Bielli",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "CFK",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019",
      "Socióloga",
      "Docente"
    ],
    "tematicas": [
      "Educación",
      "Cultura",
      "Género"
    ],
    "redes": [
      "X: / 14.1K",
      "Instagram: / 25.3K / 200 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Columnista en Cenital",
      "Critica plataformas de apuestas deportivas",
      "Militancia territorial en la Villa 31"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_7f185a6d-4074-43af-9733-28031bb9e2ea.JPG"
  },
  {
    "nombre": "Rocio Figueroa",
    "bloque": "Vamos por Más",
    "referente": "Cristian Ritondo",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Politóloga (UADE)",
      "Licenciada en Gobierno y Relaciones Internacionales (UADE)",
      "Militante territorial (Comuna 9)"
    ],
    "tematicas": [
      "Cercanía con la ciudadanía",
      "Seguridad y calidad urbana",
      "Crédito hipotecario para jóvenes / primera vivienda"
    ],
    "redes": [
      "X: @rochifigueroa / 3,2K",
      "Instagram: / 5,5K / 1.000 likes"
    ],
    "acuerdos": [
      "Jóvenes y acceso a la vivienda",
      "Ciudad segura y servicios públicos eficientes",
      "Inclusión social"
    ],
    "extra": [
      "Viene del ala de Ritondo (Mataderos)",
      "La más joven del bloque PRO (29 años)"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_07c922a6-0b62-4a9d-8866-03d4f7408cf1.jpg"
  },
  {
    "nombre": "Emmanuel Ferrario",
    "bloque": "Confianza y Desarrollo",
    "referente": "Horacio Rodríguez Larreta",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021",
      "Licenciado en Estudios Internacionales Di Tella",
      "Techint"
    ],
    "tematicas": [
      "Discapacidad",
      "Animales",
      "Urbanismo: servicios, tránsito, limpieza"
    ],
    "redes": [
      "Instagram: / 43,2K / 1K likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_6dc0d2bd-f2fc-439c-a72c-60eb875a4b26.jpg"
  },
  {
    "nombre": "Claudia Neira",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Juan Manuel Olmos",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019",
      "Legisladora por Proyecto Sur (2011-2015)",
      "Abogada",
      "Jefa de bloque FxBSAS"
    ],
    "tematicas": [
      "Planeamiento Urbano",
      "Seguridad",
      "Justicia"
    ],
    "redes": [
      "X: / 12.7K",
      "Instagram: / 5.4K / 200 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Sus participaciones en medios suelen ser críticas al oficialismo porteño"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_34a87348-9835-4d7d-a23a-7acbdd34aa59.jpg"
  },
  {
    "nombre": "Aldana Crucitta",
    "bloque": "UCR",
    "referente": "Daniel Angellici",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Abogada orientada a lo civil",
      "Delegada Nacional de la Juventud Radical Nacional"
    ],
    "tematicas": [
      "Derechos de niñas, niños y adolescentes",
      "Memoria, DDHH e institucionalidad democrática",
      "Cultura"
    ],
    "redes": [
      "X: / 700",
      "Instagram: / 8,2K / 200 likes"
    ],
    "acuerdos": [
      "DDHH",
      "Infancias y adolescencias"
    ],
    "extra": [
      "Una de las legisladoras más jóvenes"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_99642e88-f5bd-4bf6-a173-d40c1ee2414e.jpg"
  },
  {
    "nombre": "Rebeca Fleitas",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021",
      "Comunicadora Social (UNER)",
      "Comunicación estratégica y gestión de campañas"
    ],
    "tematicas": [
      "Autismo y discapacidad",
      "Cultura: conmemoración de víctimas de organizaciones armadas",
      "Seguridad: servicio penitenciario"
    ],
    "redes": [
      "X: / 28,6K",
      "Instagram: / 18,6K"
    ],
    "acuerdos": [],
    "extra": [
      "Entregó reconocimientos a caras pintadas",
      "Negacionista y crítica de los DDHH",
      "En LLA desde sus inicios"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_c497d76e-202d-4ad1-8d4a-2c3eab8b273c.jpg"
  },
  {
    "nombre": "Horacio Rodríguez Larreta",
    "bloque": "Confianza y Desarrollo",
    "referente": "Él mismo",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Economista UBA",
      "Interventor del PAMI",
      "Jefe de Gobierno CABA (2015-2023)"
    ],
    "tematicas": [
      "Gestión urbana",
      "Obra pública"
    ],
    "redes": [
      "Instagram: / 500K / 1.5K likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_7e50b85b-bf8c-4ab4-8f79-ec3b1b00e88d.JPG"
  },
  {
    "nombre": "Graciela Ocaña",
    "bloque": "Confianza y Desarrollo",
    "referente": "Ella misma",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023 (y 2013-2017)",
      "Politóloga",
      "Directora Ejecutiva del PAMI (2004-2007)",
      "Ministra de Salud de la Nación (2007-2009)"
    ],
    "tematicas": [
      "Salud",
      "Gestión urbana: barrios, seguridad, servicios, movilidad"
    ],
    "redes": [
      "Instagram: / 101K / 300 likes"
    ],
    "acuerdos": [
      "Salud"
    ],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_7b92f1b3-e5a3-4d82-985a-2c9657ed48e7.jpg"
  },
  {
    "nombre": "Waldo Wolf",
    "bloque": "Vamos por Más",
    "referente": "Jorge Macri",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Licenciado en Administración de Empresas (UB)",
      "Ex Diputado nacional (2015-2022)",
      "Ex Ministro de Seguridad CABA"
    ],
    "tematicas": [
      "Seguridad pública y gestión policial",
      "Defensa del orden",
      "Judaísmo / Israel"
    ],
    "redes": [
      "X: Waldo Wolff / 360,8K",
      "Instagram: / 124k / 1.000 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Removido como Ministro de Seguridad por fugas en comisarías",
      "Puede ser cooptado por Milei"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_d89104d2-65cb-4155-86b6-316f0fca799c.jpg"
  },
  {
    "nombre": "Sandra Rey",
    "bloque": "La Libertad Avanza",
    "referente": "Oscar Zago",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Secretaria de Producción y Desarrollo Industrial (Ituzaingó)"
    ],
    "tematicas": [
      "Cultura",
      "Discapacidad"
    ],
    "redes": [
      "X: / 150",
      "Instagram: / 11K / 100 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Proviene del MID",
      "Milita en la comuna 10"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_c37657f0-1d2d-4523-9e08-2792e717e296.jpg"
  },
  {
    "nombre": "Eugenio Casielles",
    "bloque": "Transformación",
    "referente": "Él mismo",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019 (Consenso Federal / Lavagna); reelecto 2023 con LLA",
      "Socio y director de una sociedad de bolsa (Títulos y Valores S.A.)"
    ],
    "tematicas": [
      "Seguridad",
      "Transporte",
      "Cultura"
    ],
    "redes": [
      "X: / 1K",
      "Instagram: / 25.2k / critica a Milei"
    ],
    "acuerdos": [],
    "extra": [
      "Vinculación con el predicador y conductor Dante Gebel"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_c1903702-35e3-4037-b00f-34ccda9487c9.JPG"
  },
  {
    "nombre": "Sebastián Nagata",
    "bloque": "Confianza y Desarrollo",
    "referente": "Graciela Ocaña",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Contador público UBA",
      "Docente en la escuela Cangallo"
    ],
    "tematicas": [
      "Transporte",
      "Distinciones culturales"
    ],
    "redes": [
      "Instagram: / 1K / 200 likes"
    ],
    "acuerdos": [
      "Desarrollo social",
      "Transporte"
    ],
    "extra": [
      "De familia japonesa / comunidad nikkei en Argentina"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_bfa67cab-1ec5-4aa5-88b4-f93f561dbb84.jpg"
  },
  {
    "nombre": "Bárbara Rossen",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Juan Manuel Olmos",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Arquitecta UBA",
      "Directora General de Derechos de Acceso a la Ciudad",
      "Directora General de Infraestructura del Min. de Educación"
    ],
    "tematicas": [
      "Urbanismo, vivienda y planificación estratégica",
      "Ambiente"
    ],
    "redes": [
      "X: / 3.6K",
      "Instagram: / 4.4K / 300 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Hija de Alicia Pierini, histórica dirigente peronista / ex titular de la Defensoría del Pueblo de CABA"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_2c3bf8ef-07da-4c71-8612-3bc5ac47f83b.jpg"
  },
  {
    "nombre": "Claudio Ferreño",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Alberto Fernandez",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019",
      "Legislador 2003-2005 (Partido de la Revolución Democrática)",
      "Fue jefe de bloque durante la presidencia de Alberto Fernández"
    ],
    "tematicas": [
      "Declaraciones de interés cultural",
      "Seguridad: ex agentes penitenciarios en Policía de la Ciudad"
    ],
    "redes": [
      "X: / 5K",
      "Instagram: / 3K / 50 likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_36f434ac-5342-4850-826f-edc56a56b45e.jpg"
  },
  {
    "nombre": "Guadalupe Tagliaferri",
    "bloque": "Confianza y Desarrollo",
    "referente": "Horacio Rodríguez Larreta",
    "mandato": "hasta 2029",
    "resumen": [
      "Ciencias Políticas UBA",
      "Directora General de la Mujer CABA",
      "Ministra de Desarrollo Humano y Hábitat CABA",
      "Senadora Nacional (2019-2023)"
    ],
    "tematicas": [
      "Gestión urbana",
      "Mujeres, Género y Diversidad",
      "Políticas sociales integrales"
    ],
    "redes": [],
    "acuerdos": [],
    "extra": [
      "Presidenta del MAD",
      "Demolición del elefante blanco de Lugano"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_ad4b546a-bb56-40db-a832-18c6e7aa4316.jpg"
  },
  {
    "nombre": "Alejandro Grillo",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Leandro Santoro",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Periodismo",
      "Secretario General de la Juventud Radical (90s)"
    ],
    "tematicas": [
      "Ambiente",
      "Transporte",
      "Planeamiento Urbano",
      "Deporte"
    ],
    "redes": [
      "X: / 1.8k",
      "Instagram: / 3,2k / 300 likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_accc1524-15aa-4c3b-9230-c66bf4bccbaf.jpg"
  },
  {
    "nombre": "Leonardo Saifert",
    "bloque": "La Libertad Avanza",
    "referente": "Javier Milei",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021"
    ],
    "tematicas": [
      "Seguridad"
    ],
    "redes": [
      "X: / 2,8K",
      "Instagram: / 17.3K"
    ],
    "acuerdos": [],
    "extra": [
      "Insultó a Ofelia y tuvo que pedir perdón al llegar a la legislatura",
      "Proyecto para autorizar uso de gas pimienta por fuerzas de seguridad"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_b19f65d4-9219-446b-83f1-b366ebe44a20.jpg"
  },
  {
    "nombre": "Manuela Thourte",
    "bloque": "UCR",
    "referente": "Coti Nosiglia / Lousteau",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019",
      "Presidenta del bloque UCR",
      "Licenciada en Ciencia Política (UBA)",
      "Magíster en Adm. y Políticas Públicas (UDESA)",
      "UNICEF"
    ],
    "tematicas": [
      "Educación: obligatoriedad escolar desde los 3 años / tutorías",
      "Niñez y adolescencia: acoso escolar / violencia",
      "Medio ambiente: Día sin auto"
    ],
    "redes": [
      "X: / 3,7K",
      "Instagram: / 4,6K / 100 likes"
    ],
    "acuerdos": [
      "Educación integral y políticas de infancia",
      "Protección y derechos sociales de niñez y adolescencia"
    ],
    "extra": [
      "Crítica de la IA en educación",
      "Marcó distancia con LLA como un límite político"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_0cba420a-d5e6-4074-9e16-f2292bf0839c.JPG"
  },
  {
    "nombre": "Andrea Freguia",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei / Wasserman",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Coordinadora comunal de LLA en CABA",
      "Secretaria administrativa del bloque legisladores libertarios en CABA"
    ],
    "tematicas": [
      "Gestión Comunal"
    ],
    "redes": [
      "X: 780",
      "Instagram: / 5K / nacionalista, provida"
    ],
    "acuerdos": [],
    "extra": [
      "En LLA desde sus inicios",
      "Es provida",
      "Ex Juntos por el Cambio"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_dc444c95-14cb-4634-be8b-8a9f69214532.jpg"
  },
  {
    "nombre": "Juan Pablo Arenaza",
    "bloque": "La Libertad Avanza",
    "referente": "Patricia Bullrich",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Politólogo (USAL)",
      "Legislador porteño por el PRO 2009-2017",
      "Vicepresidente tercero de la Legislatura"
    ],
    "tematicas": [
      "Seguridad: fue parte de la creación de la policía de la ciudad"
    ],
    "redes": [
      "X: / 24.050 / reposteos de Bullrich y Milei",
      "Instagram: / 4K"
    ],
    "acuerdos": [],
    "extra": [
      "Pasó del PRO a LLA por pedido de Bullrich"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_70e977fe-8bf8-433a-afcc-712868fd2e17.jpg"
  },
  {
    "nombre": "Fernanda Mollard",
    "bloque": "UCR",
    "referente": "Daniel Angellici",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023"
    ],
    "tematicas": [
      "Cultura: numerosos reconocimientos",
      "Cambio climático"
    ],
    "redes": [
      "Instagram: / 650 / 50 likes"
    ],
    "acuerdos": [
      "Cambio climático"
    ],
    "extra": [
      "Se abstuvo en el proyecto que excluía a enfermeros como trabajadores de salud; el oficialismo ganó por 1 voto"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_38a0fcf5-b821-4be7-b42a-a12c33c4a9af.jpg"
  },
  {
    "nombre": "Laura Alonso",
    "bloque": "Vamos por Más",
    "referente": "Mauricio Macri",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Licenciada en Ciencia Política (UBA)",
      "Maestría en Adm. Pública y Políticas Públicas (Londres)",
      "Jefa de la Oficina Anticorrupción de la Nación (2015-2019)"
    ],
    "tematicas": [
      "Institucionalidad, ética pública y gestión del Estado en la Ciudad"
    ],
    "redes": [
      "X: / 340k",
      "Instagram: / 10,3K / 100 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Suele desempeñarse más como vocera que con una temática específica",
      "Interventora del PRO Córdoba (2024-2025)"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_81ed113e-714f-40c0-a411-b8b98ecbe81d.jpg"
  },
  {
    "nombre": "Marcelo Ernst",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Trayectoria en servicios financieros, inmobiliarios y asesoramiento empresarial",
      "Garantizar S.G.R.: créditos a PYMES"
    ],
    "tematicas": [],
    "redes": [
      "Instagram: / 800"
    ],
    "acuerdos": [],
    "extra": [
      "Outsider de la política, sin perfil mediático ni trayectoria pública ampliamente documentada"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_a80c4456-bde0-4032-9aa1-d2215b047418.jpg"
  },
  {
    "nombre": "Silvia Imas",
    "bloque": "La Libertad Avanza",
    "referente": "Patricia Bullrich",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Abogada UBA",
      "Delegada al Colegio Público de Abogados de la Capital Federal (2022/2024)",
      "Directora General de Concesiones CABA (2011/2013)"
    ],
    "tematicas": [
      "Seguridad",
      "Reducción del gasto público"
    ],
    "redes": [
      "X: / 1.100",
      "Instagram: / 1.500"
    ],
    "acuerdos": [],
    "extra": [
      "Proviene del PRO, a principios de 2025 junto al ala Bullrich se pasó a LLA"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_ae214cb9-8880-4834-8218-591fecf4ed5d.jpg"
  },
  {
    "nombre": "Silvia Gabriela Lospennato",
    "bloque": "Vamos por Más",
    "referente": "Macri — observar posible reposicionamiento",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Licenciada en Ciencias Políticas (UBA)",
      "Diplomatura en Tecnología y Derecho Ambiental (ITBA)",
      "Asesora parlamentaria, Subsecretaria de CABA, titular CUMAR",
      "Jefa de bloque VxM"
    ],
    "tematicas": [
      "Transparencia y calidad institucional",
      "Pro Aborto",
      "Perspectiva ambiental"
    ],
    "redes": [
      "X: @slospennato / 71K",
      "Instagram: / 36,5K / 500 likes"
    ],
    "acuerdos": [
      "Derechos ciudadanos y políticas de salud pública",
      "Interés en procesos ambientales y tecnología aplicada"
    ],
    "extra": [
      "No pudo votarse a sí misma en las elecciones de CABA porque figura en el padrón de la Provincia de Buenos Aires"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_f0f7f55b-8ec9-4904-ba58-cdb27fa7918e.jpg"
  },
  {
    "nombre": "Juan Ignacio Fernández",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Economista (UBA)",
      "Columnista en Carajo Stream"
    ],
    "tematicas": [
      "Economía y finanzas públicas",
      "Inteligencia Artificial: reemplazar puestos laborales por IA",
      "Transporte: modelo de Moscú de subtes"
    ],
    "redes": [
      "Se enfoca únicamente en X",
      "X: / 77.5K",
      "Instagram: / 240"
    ],
    "acuerdos": [],
    "extra": [
      "Ingresó porque Adorni se bajó",
      "Insiste con la educación financiera",
      "Escribió 'Libertad para inteligentes'"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_ce94cd6b-5faf-448a-aad3-e0fa976e5c15.jpg"
  },
  {
    "nombre": "Delfina Velazquez",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "CFK",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Militancia en la Cámpora desde muy joven"
    ],
    "tematicas": [
      "Género",
      "Declaraciones de interés cultural",
      "Ambiente"
    ],
    "redes": [
      "X: / 2k",
      "Instagram: / 3.6k / 100 likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_981056d9-4c0b-4c56-8663-85f66693b9d4.jpg"
  },
  {
    "nombre": "Berenice Iañez",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Axel Kicillof",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021",
      "Comunera (2012-2015)"
    ],
    "tematicas": [
      "Integración Social",
      "Vivienda",
      "Transporte"
    ],
    "redes": [
      "X: / 2.3K",
      "Instagram: / 5.6K / 300 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Pasó de La Cámpora al 'Kicillofismo' proponiendo crear esa identidad en CABA"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_b443700f-a1c7-45c8-9334-2eb380594cf7.jpg"
  },
  {
    "nombre": "Francisco Loupias",
    "bloque": "UCR",
    "referente": "Daniel Angellici",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Director del Instituto de la Vivienda de la Ciudad de Buenos Aires"
    ],
    "tematicas": [
      "Derechos y libertades civiles: rechazo al DNU que limita el derecho a huelga",
      "Planeamiento Urbano y vivienda"
    ],
    "redes": [
      "X: / 1k",
      "Instagram: / 3,2K / 150 likes"
    ],
    "acuerdos": [
      "Planeamiento Urbano y vivienda"
    ],
    "extra": [
      "No detalla títulos académicos en redes ni en perfil institucional"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_6fefefdf-1491-477e-9968-1e0b6d6a16d0.jpg"
  },
  {
    "nombre": "Matías Barroetaveña",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019",
      "Ciencias políticas UBA",
      "Secretario de Empleo de la Nación (2014-2015)",
      "Director de AUSA (2017-2019)"
    ],
    "tematicas": [
      "Vivienda",
      "Empleo",
      "Cambio climático",
      "Reconocimientos y distinciones"
    ],
    "redes": [
      "X: / 6K",
      "Instagram: / 5.2k / 50 likes"
    ],
    "acuerdos": [],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_7b292abb-a8c8-4935-9c34-317baec5c08c.jpg"
  },
  {
    "nombre": "Solana Pelayo",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei / Wasserman / Pilar Ramírez",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Abogada Di Tella",
      "Head de legales en Brubank",
      "Directora del Banco Nación (2024-2025)"
    ],
    "tematicas": [
      "Fintech (finanzas y tecnología)"
    ],
    "redes": [
      "X: / 500",
      "Instagram: / 970 / fotos con Milei y Adorni"
    ],
    "acuerdos": [],
    "extra": [
      "Vínculo con Wasserman quien la propuso en el armado de listas"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_3832d997-a003-4014-89bf-e552f706765c.jpeg"
  },
  {
    "nombre": "Matías Lammens",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Él mismo / Juan Manuel Olmos",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Abogado UBA",
      "Presidente de San Lorenzo",
      "Ministro de Turismo y Deporte nación (2019-2023)"
    ],
    "tematicas": [
      "Turismo y Deportes: impulsor del Previaje",
      "PYMES",
      "Planificación Urbana"
    ],
    "redes": [
      "X: / 177K",
      "Instagram: / 122K / 1k likes"
    ],
    "acuerdos": [],
    "extra": [
      "Proyecto para eximir del pago de Ingresos Brutos a empresas del sector turístico de CABA"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_a5b54d57-2d81-42c8-8439-5ed6f76e4289.jpg"
  },
  {
    "nombre": "Patricia Glize",
    "bloque": "Vamos por Más",
    "referente": "Jorge Macri",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Abogada"
    ],
    "tematicas": [
      "Cultura y reconocimiento comunitario"
    ],
    "redes": [
      "X: / 2k",
      "Instagram: / 21K / 100-150 likes"
    ],
    "acuerdos": [
      "Cultura y patrimonio urbano",
      "Apoyo a emprendedores y desarrollo productivo"
    ],
    "extra": [
      "Reconoció la trayectoria de Eduardo Kovalivker, denunciado por Coimas en ANDIS"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_2f8c7f0f-1687-4367-9a78-9d29b2901ab5.jpeg"
  },
  {
    "nombre": "Alejandro Pitu Salvatierra",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "CFK",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Panelista en radio Futurock"
    ],
    "tematicas": [
      "Cultura",
      "Pobreza / barrios vulnerables"
    ],
    "redes": [
      "X: Pitu Salvatierra / 32.3K",
      "Instagram: / 85.9K / 5K likes"
    ],
    "acuerdos": [],
    "extra": [
      "Pasó siete años de su vida en prisión, en donde terminó el secundario",
      "Sentido de pertenencia con la comuna 9 y 8"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_0145dcd2-0bc1-4816-b5f0-39fa224ca0c8.jpg"
  },
  {
    "nombre": "Matías López",
    "bloque": "Vamos por Más",
    "referente": "Jorge Macri",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019; reelecto 2023-2027",
      "Secretario de Desarrollo Ciudadano GCBA (2015-2019)",
      "Abogado (UBA) y docente universitario",
      "Vicepresidente primero de la Legislatura"
    ],
    "tematicas": [
      "Gestión Urbana: participación ciudadana, calidad de vida, residuos, JJOO Juveniles",
      "Temas Ambientales: Turismo Sostenible y Cambio Climático"
    ],
    "redes": [
      "X: / 5K",
      "Instagram: / 5K / 50 likes"
    ],
    "acuerdos": [
      "Planificación urbana",
      "Participación ciudadana, desarrollo local y calidad de vida",
      "Temas ambientales"
    ],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_5e27c9dc-2d3e-48c4-9988-24197a83fbf8.jpg"
  },
  {
    "nombre": "Victoria Freire",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "Juan Grabois",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Socióloga UBA",
      "Directora del Observatorio de Géneros y Políticas Públicas",
      "Mala Junta (Patria Grande)"
    ],
    "tematicas": [
      "Políticas sociales: integración urbana de barrios populares",
      "Vivienda: acceso, desalojos, Plan Alquilar",
      "Derechos humanos",
      "Género"
    ],
    "redes": [
      "X: / 15.9k",
      "Instagram: / 26.4k / 1k likes"
    ],
    "acuerdos": [],
    "extra": [
      "Tiene un rol muy comprometido con lo territorial"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_99a07b92-a4e5-4cdd-97bb-85e228c091cc.jpg"
  },
  {
    "nombre": "Guillermo Suárez",
    "bloque": "UCR",
    "referente": "Facundo Manes",
    "mandato": "hasta 2027",
    "resumen": [
      "Legislador desde 2017",
      "Fue Secretario General de la UCR porteña"
    ],
    "tematicas": [
      "Inclusión y discapacidad / neurodiversidad",
      "Educación",
      "Cultura y patrimonio urbano"
    ],
    "redes": [
      "X: / 1k / solo retuitea a Manes",
      "Instagram: no utiliza"
    ],
    "acuerdos": [
      "Inclusión y discapacidad",
      "Cultura y patrimonio urbano"
    ],
    "extra": [
      "Organizó jornadas sobre prácticas inclusivas para personas neurodivergentes"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_c95126ab-eca3-464a-8f76-fadd6ed17f35.jpg"
  },
  {
    "nombre": "Andrea D'Atri",
    "bloque": "FIT",
    "referente": "Ella misma / Myriam Bregman",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2024",
      "Socióloga UBA",
      "Fundadora del movimiento feminista Pan y Rosas"
    ],
    "tematicas": [
      "Políticas de género",
      "Educación",
      "Trabajo"
    ],
    "redes": [
      "X: / 18.1k",
      "Instagram: / 20.7k / 1.000 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Llegó por el sistema de rotación de bancas del FIT (antecesora: Celeste Fierro)"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_dc8ecdf3-0abe-469f-a5a0-24e0a4063ef1.jpg"
  },
  {
    "nombre": "Vanina Biasi",
    "bloque": "FIT",
    "referente": "Ella misma",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Licenciada en Ciencias de la Comunicación UBA",
      "Diputada Nacional (2007-2011)"
    ],
    "tematicas": [
      "Educación",
      "Trabajo",
      "Derechos humanos"
    ],
    "redes": [
      "X: / 25.5K",
      "Instagram: / 38.1K / 2k likes"
    ],
    "acuerdos": [],
    "extra": [
      "Fue denunciada por la DAIA por apoyar el reclamo de Palestina"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_b9baac06-19be-42c7-9445-34aa3c1012da.JPG"
  },
  {
    "nombre": "Andrés La Blunda",
    "bloque": "Fuerza por Buenos Aires",
    "referente": "CFK",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Contador público",
      "Licenciado en Administración",
      "Presidente de Kolina CABA"
    ],
    "tematicas": [
      "Empleo, producción y PYMEs",
      "Tecnología: control de acceso de menores a apps de apuestas online",
      "Homenajes y reconocimientos"
    ],
    "redes": [
      "X: / 8k",
      "Instagram: / 4.4k"
    ],
    "acuerdos": [],
    "extra": [
      "Nieto restituido por Abuelas de Plaza de Mayo, hijo de padres desaparecidos durante la dictadura"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_7f37f6a0-f665-4e43-bdaf-ab2f85daa92a.jpg"
  },
  {
    "nombre": "Nicolas Pakgojz",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei / Wasserman / Pilar Ramírez",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2025",
      "Licenciado en economía empresarial Di Tella",
      "AABE (Administración de Bienes del Estado)"
    ],
    "tematicas": [
      "Urbanismo (maestría — Inst. de Arquitectura Cataluña)"
    ],
    "redes": [
      "X: 1.6K",
      "Instagram: / 3K"
    ],
    "acuerdos": [],
    "extra": [
      "Respaldo del empresario Eduardo Elsztain",
      "Subastó un predio en Palermo por 15M USD muy por debajo de su valor beneficiando a Wasserman",
      "Secretario general de LLA CABA"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_c5874610-8b5b-4ce9-9895-ea936dac9170.jpg"
  },
  {
    "nombre": "Edgardo Alifraco",
    "bloque": "Confianza y Desarrollo",
    "referente": "Oscar Zago / Él mismo",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Ex dirigente de Boca"
    ],
    "tematicas": [
      "Planeamiento Urbano: código urbanístico / patrimonio urbano / alrededores de la Bombonera"
    ],
    "redes": [
      "X: / 2.8K / Boca y MID",
      "Instagram: / 850 / 40 likes"
    ],
    "acuerdos": [],
    "extra": [
      "Su hija Macarena Alifraco es influencer que trabaja para Santiago Caputo",
      "Proviene del MID",
      "Candidato en la lista de Ibarra en las últimas elecciones de Boca Juniors"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_28b971a4-e264-4ca5-b5b7-16d0b60dfe04.jpg"
  },
  {
    "nombre": "Maria del Pilar Ramirez",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Abogada (USAL)",
      "Banco Provincia en la gestión de Daniel Scioli",
      "Aerolíneas Argentinas (2008-2015)",
      "Jefa de bloque LLA"
    ],
    "tematicas": [
      "Protección y uso del espacio público"
    ],
    "redes": [
      "X: Pilar Ramirez / 12.100",
      "Instagram: / 9.500"
    ],
    "acuerdos": [],
    "extra": [
      "Proviene del peronismo",
      "Casada con Wasserman, empresario que financió la campaña de Milei",
      "Impugnó a Marra como presidente de bloque rompiendo el bloque de LLA",
      "Criticada desde la militancia libertaria por pasado peronista"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_08d1e508-2ce8-4038-8249-4ccf7c342187.jpg"
  },
  {
    "nombre": "Facundo Del Gaiso",
    "bloque": "Vamos por Más",
    "referente": "Elisa Carrió",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019",
      "Ingeniero en Construcciones (UTN)",
      "Auditor General de la Ciudad de Buenos Aires (2013-2019)"
    ],
    "tematicas": [
      "Regulación económica y fiscal: impuesto al juego online (de 6% a 12%)",
      "Conflictos laborales: ley anti moyano"
    ],
    "redes": [
      "X: / 4K",
      "Instagram: / 10,5K / 500 likes"
    ],
    "acuerdos": [
      "Regulación de apuestas deportivas",
      "Prevención de ludopatía o regulación de mercados digitales"
    ],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_5b2b678f-39ba-4234-bce6-b60dc39d20f3.jpg"
  },
  {
    "nombre": "Gimena Villafruela",
    "bloque": "Vamos por Más",
    "referente": "Jorge Macri",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2019",
      "Psicóloga (UBA) especializada en RRHH"
    ],
    "tematicas": [
      "Desarrollo económico, Mercosur y generación de empleo",
      "Seguridad ciudadana y prevención",
      "Modernización del sistema judicial y administrativo",
      "Perspectiva de género y políticas de inclusión",
      "Planificación urbana con enfoque territorial y barrial"
    ],
    "redes": [
      "X: / 1K",
      "Instagram: / 3K / 50 likes"
    ],
    "acuerdos": [
      "Desarrollo económico y empleo",
      "Perspectivas de género"
    ],
    "extra": [],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_238aecb9-bee0-4dee-b887-4a3bdb84b2f9.JPG"
  },
  {
    "nombre": "Marina Kienast",
    "bloque": "La Libertad Avanza",
    "referente": "Karina Milei",
    "mandato": "hasta 2029",
    "resumen": [
      "Legisla desde 2021",
      "Traductora pública de inglés",
      "Abogada (UADE)",
      "Coordinadora de la Secretaría Legal y Técnica de la Municipalidad de Quilmes"
    ],
    "tematicas": [
      "Educación: reforma educativa"
    ],
    "redes": [
      "X: / 6,1K",
      "Instagram: / 4,9K / focalizada en tema educativo"
    ],
    "acuerdos": [],
    "extra": [
      "Antes de pasar a LLA integró la bancada de Republicanos Unidos / Juntos por el Cambio (sello de Ricardo López Murphy)",
      "En octubre de 2024 anunció su pase al bloque La Libertad Avanza"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_aada4c11-db5e-48b6-bd1f-9da6a242caf5.jpg"
  },
  {
    "nombre": "Ignacio Parera",
    "bloque": "Vamos por Más",
    "referente": "Cristian Ritondo",
    "mandato": "hasta 2027",
    "resumen": [
      "Legisla desde 2023",
      "Director General de Higiene y Seguridad Alimentaria de la AGC"
    ],
    "tematicas": [
      "Desarrollo Económico, Mercosur y Políticas de Empleo",
      "Organización del Poder Judicial / procedimientos legales",
      "Código Urbanístico y protección de inmuebles de valor"
    ],
    "redes": [
      "X: Ignacio Parera",
      "Instagram: / 500"
    ],
    "acuerdos": [],
    "extra": [
      "No se caracteriza por presentar proyectos",
      "Sin título académico visible en plataforma pública",
      "Territorial: Comunas 8 y 9"
    ],
    "foto": "https://parlamentaria.legislatura.gob.ar/uploads/imagenes/legislador/M_ac1a4be9-9775-46e0-948f-00d4f43af228.jpg"
  }
];
