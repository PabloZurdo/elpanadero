window.EP = {
 "meta": {
  "actualizado": "2026-11-27",
  "ventana_dias": 30,
  "nota": "Archivo de datos de El Panadero. Lo actualiza la tarea diaria a partir del Radar informativo (solo Alcalá de Guadaíra), redactando cada pieza con la skill redaccion-el-panadero. Cada noticia: id único, sec (alcala|sucesos|politica|economia|cultura|hermandades|deportes|opinion), iso AAAA-MM-DD, src (medio o fuente), fuente_url, foto (archivo en fotos/), claves (2-4 frases), body (párrafos de 300 a 750 palabras en total; un párrafo que empiece por '## ' es un ladillo; uno que empiece por <span class='howto'> se muestra como recuadro práctico; enlaces internos con <a href='#id'>), seo [slug, titulo<=60, descripcion 140-155, etiquetas]. Las piezas de opinión llevan autor y autor_cargo. Campos de hora (desde el 30/10/2026): hora = hora de publicación en Madrid, «HH:MM» (se pone al crear la pieza, con la hora real de publicación); actualizada = «AAAA-MM-DDTHH:MM», solo si una pieza ya publicada se actualiza con información nueva (no por correcciones de erratas): la firma muestra entonces «Actualización: fecha · hora». No cambies iso ni hora al actualizar. Campo meta.apertura (2, 3 o 4): peso de la apertura de portada, según el sistema de diseño El Panadero. 2 = día normal (por defecto si no se pone); 3 = la noticia principal destaca; 4 = solo para noticias de impacto, con foto original horizontal. La noticia que abre es la primera del array con la fecha más reciente y debe llevar foto propia, no genérica. La sección «Pan de Alcalá» se eliminó el 30 de octubre de 2026: las noticias de pan, panaderías y molinos van a economia, cultura o alcala según su contenido. Campo opcional destacado: true marca la noticia que ocupa la banda «Destacado» de portada (una historia de Alcalá con tinte social, cultural o patrimonial); si ninguna lo lleva, la portada elige la más reciente de alcala, cultura o hermandades con foto propia. El destacado se renueva cada día en el turno de mañana (decisión de Pablo, 25/11/2026): solo una pieza lo lleva y meta.destacado_historial guarda los últimos para no repetirlos en 7 días.",
  "apertura": 2,
  "destacado_historial": [
   {
    "id": "centenaria-libro-historias-contadas-50-anos",
    "fecha": "2026-11-20"
   },
   {
    "id": "documental-entre-el-pan-y-el-olvido-jornadas-memoria-democratica",
    "fecha": "2026-11-25"
   },
   {
    "id": "cabalgata-reyes-2027-construccion-carrozas-taller-grinch",
    "fecha": "2026-11-26"
   },
   {
    "id": "cautivo-vestidor-david-del-toro-nombramientos-capataces",
    "fecha": "2026-11-27"
   }
  ]
 },
 "agenda": [
  {
   "cuando": "Hasta 27 nov",
   "que": "Plazo de candidaturas para la concesión del Hotel Oromana",
   "donde": "Plataforma de Contratación del Sector Público",
   "hasta": "2026-11-27"
  },
  {
   "cuando": "Vie 27 nov, 17.30",
   "que": "Marcha sufragista de Transformando Entre Mujeres",
   "donde": "Salida desde la avenida de la Constitución",
   "noticia": "transformando-entre-mujeres-charla-violencia-vicaria-25n",
   "hasta": "2026-11-27"
  },
  {
   "cuando": "Vie 27 nov, 18.00",
   "que": "Teatro infantil «El Grinch»",
   "donde": "Plaza de los Molinos",
   "noticia": "cabalgata-reyes-2027-construccion-carrozas-taller-grinch",
   "hasta": "2026-11-27"
  },
  {
   "cuando": "Vie 27 nov, 20.30",
   "que": "«Hamlet», de Guayominí Producciones",
   "donde": "Teatro Gutiérrez de Alba",
   "noticia": "hamlet-guayomini-teatro-gutierrez-de-alba-27-noviembre",
   "hasta": "2026-11-27"
  },
  {
   "cuando": "7–28 nov",
   "que": "Flamenco, poesía, comedia y teatro en el Centro San Miguel",
   "donde": "Centro San Miguel",
   "noticia": "agenda-cultural-noviembre-2026",
   "hasta": "2026-11-28"
  },
  {
   "cuando": "Sáb 28 nov, 11.00",
   "que": "Reparto de papeletas de beduino de ReyeSilos",
   "donde": "Sede de la Cabalgata ReyeSilos",
   "noticia": "cabalgata-campo-beatas-coronacion-zambra-reyesilos-papeletas-beduinos",
   "hasta": "2026-11-28"
  },
  {
   "cuando": "Sáb 28 nov, 16.30",
   "que": "IV Zambomba del Rosario",
   "donde": "Colegio Salesianos",
   "noticia": "agenda-cofrade-triduo-angeles-zambomba-rosario-foro-consejo",
   "hasta": "2026-11-28"
  },
  {
   "cuando": "Sáb 28 nov, 20.00",
   "que": "Rancapino Chico, «El cante por Navidad»",
   "donde": "Auditorio Riberas del Guadaíra",
   "noticia": "agenda-cultural-noviembre-2026",
   "hasta": "2026-11-28"
  },
  {
   "cuando": "Sáb 28 nov, 21.00",
   "que": "Gala del 33.º Concurso Nacional de Cante Flamenco",
   "donde": "Peña Cultural Flamenca Soleá",
   "noticia": "pena-solea-gala-33-concurso-nacional-cante-diego-benitez",
   "hasta": "2026-11-28"
  },
  {
   "cuando": "29 nov",
   "que": "Elecciones generales",
   "donde": "Colegios electorales de Alcalá",
   "noticia": "mesas-electorales-sorteo-pleno-29-noviembre",
   "hasta": "2026-11-29"
  },
  {
   "cuando": "Dom 29 nov, 11.00",
   "que": "Función y besamanos a la Madre de Dios de los Ángeles",
   "donde": "Hermandad de la Tercera Palabra",
   "noticia": "agenda-cofrade-triduo-angeles-zambomba-rosario-foro-consejo",
   "hasta": "2026-11-29"
  },
  {
   "cuando": "Dom 29 nov, 12.00",
   "que": "Concierto de Santa Cecilia de la Asociación Musical Nuestra Señora del Águila (entrada, 5 euros)",
   "donde": "Auditorio Riberas del Guadaíra",
   "noticia": "concierto-santa-cecilia-auditorio-riberas-29-noviembre",
   "hasta": "2026-11-29"
  },
  {
   "cuando": "Dom 29 nov, 12.00",
   "que": "Teatro «Voces invisibles», a beneficio de Bulanda",
   "donde": "Teatro Gutiérrez de Alba",
   "noticia": "voces-invisibles-bulanda-teatro-divertido-gutierrez-de-alba-29-noviembre",
   "hasta": "2026-11-29"
  },
  {
   "cuando": "Dom 29 nov, 13.00",
   "que": "Coronación de la Cabalgata del Campo de las Beatas",
   "donde": "Restaurante Zambra",
   "noticia": "cabalgata-campo-beatas-coronacion-zambra-reyesilos-papeletas-beduinos",
   "hasta": "2026-11-29"
  },
  {
   "cuando": "Vie 27 a dom 29 nov",
   "que": "XVII Concurso-Exposición Local de Palomas de Raza",
   "donde": "CD Colombicultura Hienipa, avenida de Portugal",
   "noticia": "concurso-exposicion-palomas-raza-hienipa-25-29-noviembre",
   "hasta": "2026-11-29"
  },
  {
   "cuando": "1 dic",
   "que": "Charla del arcipreste José Antonio Martínez en el Foro de Formación del Consejo de Hermandades",
   "donde": "Por confirmar",
   "noticia": "jesus-paso-san-juan-cartel-semana-santa-foro-formacion",
   "hasta": "2026-12-01"
  },
  {
   "cuando": "Mar 1 dic",
   "que": "Arranca el Foro de Formación del Consejo de Hermandades",
   "donde": "Consejo de Hermandades",
   "noticia": "agenda-cofrade-triduo-angeles-zambomba-rosario-foro-consejo",
   "hasta": "2026-12-01"
  },
  {
   "cuando": "Vie 4 dic, 20.30",
   "que": "Día de la Bandera: reconocimientos y concierto de Alba Molina (5 €)",
   "donde": "Auditorio Riberas del Guadaíra",
   "noticia": "paseo-matematico-al-andalus-dia-bandera-alba-molina",
   "hasta": "2026-12-04"
  },
  {
   "cuando": "Sáb 5 dic, 11.00",
   "que": "Ruta de Blas Infante (reserva en el portal municipal)",
   "donde": "Alcalá de Guadaíra",
   "noticia": "paseo-matematico-al-andalus-dia-bandera-alba-molina",
   "hasta": "2026-12-05"
  },
  {
   "cuando": "8 dic, 17.30",
   "que": "Inauguración del Belén del Dulce Nombre, con exaltación de la Navidad",
   "donde": "Casa de hermandad del Dulce Nombre",
   "noticia": "dulce-nombre-zambomba-antonio-canales-20-diciembre-belen",
   "hasta": "2026-12-08"
  },
  {
   "cuando": "9 dic",
   "que": "Obra del grupo de teatro de la Asociación Alcalareña de Educación Especial",
   "donde": "Teatro Gutiérrez de Alba",
   "hasta": "2026-12-09"
  },
  {
   "cuando": "16 dic, 19.00",
   "que": "Conversaciones de Vida: conferencia de Isabel Rojas Estapé (aplazada)",
   "donde": "Teatro Auditorio Riberas del Guadaíra",
   "noticia": "panarrafest-suspendido-luto-oficial",
   "hasta": "2026-12-16"
  },
  {
   "cuando": "17 dic",
   "que": "Estreno de los cortos de los Talleres de Cine para Jóvenes",
   "donde": "Teatro Gutiérrez de Alba",
   "noticia": null,
   "hasta": "2026-12-17"
  },
  {
   "cuando": "20 dic",
   "que": "Zambomba de la Hermandad del Dulce Nombre",
   "donde": "Hermandad del Dulce Nombre",
   "noticia": null,
   "hasta": "2026-12-20"
  },
  {
   "cuando": "20 dic",
   "que": "Primera zambomba del Dulce Nombre, con Antonio Canales (donativo 5 €)",
   "donde": "Lugar por confirmar",
   "noticia": "dulce-nombre-zambomba-antonio-canales-20-diciembre-belen",
   "hasta": "2026-12-20"
  },
  {
   "cuando": "Hasta 24 dic",
   "que": "Plazo de la plaza de oficial de primera de mantenimiento",
   "donde": "Web municipal",
   "noticia": "convocatoria-plaza-oficial-primera-mantenimiento-24-diciembre",
   "hasta": "2026-12-24"
  },
  {
   "cuando": "27 dic, 10.00",
   "que": "I San Silvestre Solidaria de Alcalá (5 km)",
   "donde": "Club de Tenis Oromana",
   "noticia": "san-silvestre-solidaria-alcala-27-diciembre-oromana",
   "hasta": "2026-12-27"
  },
  {
   "cuando": "30 dic",
   "que": "Comienza el LXXV aniversario del Dulce Nombre con la presentación del cartel",
   "donde": "Parroquia de San Sebastián",
   "noticia": "dulce-nombre-75-aniversario-programa-2027",
   "hasta": "2026-12-30"
  },
  {
   "cuando": "Hasta 31 dic",
   "que": "Plazo para entregar la documentación y optar a las 84 viviendas de alquiler del Zacatín",
   "donde": "VIVE Alcalá y sede electrónica",
   "noticia": "zacatin-84-viviendas-alquiler-adjudicacion-31-diciembre",
   "hasta": "2026-12-31"
  },
  {
   "cuando": "Lun 28 dic, 9.00",
   "que": "Actividades Multideportivas de Navidad (también 29 y 30 dic y 4, 7 y 8 ene)",
   "donde": "Complejos deportivos Malasmañanas y Distrito Sur",
   "noticia": "campus-navidad-multideportivas-malasmananas-distrito-sur",
   "hasta": "2027-01-08"
  },
  {
   "cuando": "Dom 17 ene, 13.00",
   "que": "Igualá del Santísimo Cristo del Perdón",
   "donde": "Salones de la parroquia de la Inmaculada Concepción",
   "noticia": "perdon-iguala-cristo-angustias-enero-2027",
   "hasta": "2027-01-17"
  },
  {
   "cuando": "Dom 24 ene, 13.00",
   "que": "Igualá de Nuestra Señora de las Angustias (Hermandad del Perdón)",
   "donde": "Salones de la parroquia de la Inmaculada Concepción",
   "noticia": "perdon-iguala-cristo-angustias-enero-2027",
   "hasta": "2027-01-24"
  },
  {
   "cuando": "5-7 mar 2027",
   "que": "II Concurso de Doma Vaquera y Enganches Ciudad de Alcalá",
   "donde": "Recinto ferial",
   "noticia": "rocio-cartel-evento-ecuestre-2027-sicab",
   "hasta": "2027-03-07"
  },
  {
   "cuando": "Hasta 30 sep 2027",
   "que": "Plazo de las ayudas de la Junta para eficiencia energética en viviendas",
   "donde": "Agencia Andaluza de la Energía, por vía telemática",
   "hasta": "2027-09-30"
  }
 ],
 "noticias": [
  {
   "id": "junta-gobierno-tranvia-linea-alta-tension-procesadora-carnaval",
   "sec": "alcala",
   "kicker": "Junta de Gobierno",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=PLwjQl8HJbk&t=300s",
   "title": "La Junta de Gobierno autoriza a la Junta a llevar por terrenos de Alcalá la línea de alta tensión del tranvía",
   "sub": "El órgano municipal aprueba también el mantenimiento de La Procesadora, sanciones de la Policía Local y una ayuda a los talleres del Carnaval",
   "caption": "Una sesión de la Junta de Gobierno Local en el Ayuntamiento de Alcalá de Guadaíra.",
   "foto": "junta-gobierno-tranvia-alta-tension-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra ha autorizado a la Junta de Andalucía a instalar en terrenos municipales la línea de alta tensión que necesita el tranvía.",
    "La misma sesión aprobó los servicios de mantenimiento general y control de accesos del Complejo Ideal-La Procesadora.",
    "También dio luz verde a sanciones de la Policía Local por ocupar la vía pública y por incumplir la ordenanza de limpieza viaria, y a una subvención a la Asociación Alcalareña de Carnaval para sus talleres."
   ],
   "body": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra ha autorizado a la Junta de Andalucía a instalar en terrenos municipales la línea de alta tensión que necesita el tranvía. Es una de las obras pendientes para completar las instalaciones eléctricas del futuro servicio, que la Junta construye en la ciudad.",
    "El acuerdo forma parte de los aprobados en la última sesión del órgano de gobierno municipal, que la alcaldesa, Ana Isabel Jiménez, ha resumido en su perfil de Facebook y ha fechado el 20 de noviembre. Ni ese resumen ni la información municipal difundida hasta ahora detallan el trazado de la línea, los terrenos afectados ni el plazo de los trabajos.",
    "## Tranvía, mantenimiento y sanciones",
    "El tranvía de Alcalá es una infraestructura de la Junta de Andalucía. Su calendario ha estado presente en la campaña de las generales del 29 de noviembre: el presidente andaluz, Juanma Moreno, <a href='#moreno-mitin-pp-alcala-tranvia-2027-29n'>situó en 2027 su puesta en servicio en un mitin en la ciudad</a>, y el proyecto de presupuesto autonómico para 2027 <a href='#tranvia-presupuesto-junta-2027-25-millones'>le reserva 25,9 millones de euros</a>.",
    "La Junta de Gobierno aprobó además los servicios de mantenimiento general y de control de accesos del Complejo Ideal-La Procesadora, con el objetivo de atender el funcionamiento y la conservación de estas instalaciones municipales. El acuerdo publicado no recoge el importe ni la duración de esos servicios.",
    "En materia de convivencia y espacio público, el órgano dio luz verde a sanciones propuestas por la Policía Local por la ocupación indebida de la vía pública y por incumplimientos de la Ordenanza de Limpieza Viaria. No se ha informado del número de expedientes ni de la cuantía de las multas.",
    "## Ayuda a los talleres del Carnaval",
    "El último de los acuerdos destacados es una subvención a la Asociación Alcalareña de Carnaval para el desarrollo de sus talleres, una actividad ligada a la formación y a la continuidad de esta fiesta en la ciudad. El Ayuntamiento no ha detallado la cantidad concedida.",
    "La Junta de Gobierno Local es el órgano que reúne a la alcaldesa y a los tenientes de alcaldesa para aprobar asuntos de gestión ordinaria, como contratos, licencias, sanciones y subvenciones, que no tienen que pasar por el Pleno.",
    "<span class='howto'><b>Acuerdos de la Junta de Gobierno Local.</b> Autorización a la Junta de Andalucía para instalar en terrenos municipales la línea de alta tensión del tranvía; servicios de mantenimiento y control de accesos del Complejo Ideal-La Procesadora; sanciones por ocupación de la vía pública y por la ordenanza de limpieza viaria; subvención a la Asociación Alcalareña de Carnaval para sus talleres.</span>"
   ],
   "seo": [
    "junta-gobierno-tranvia-linea-alta-tension-alcala",
    "Tranvía de Alcalá: luz verde a la línea de alta tensión",
    "La Junta de Gobierno de Alcalá de Guadaíra autoriza a la Junta a instalar la línea de alta tensión del tranvía y aprueba sanciones y ayudas al Carnaval.",
    [
     "tranvía de Alcalá",
     "Junta de Gobierno Local",
     "Junta de Andalucía",
     "La Procesadora",
     "Policía Local",
     "Asociación Alcalareña de Carnaval"
    ]
   ],
   "iso": "2026-11-27",
   "hora": "22:35",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "cajas-nido-aves-insectivoras-refugios-murcielagos-diputacion",
   "sec": "alcala",
   "kicker": "Medio ambiente",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1617877087051298",
   "title": "Alcalá instala 95 cajas nido para aves insectívoras y 13 refugios para murciélagos en sus zonas verdes",
   "sub": "La actuación la han hecho la Diputación de Sevilla y Tragsatec para dar a estas especies lugares de refugio y cría",
   "caption": "Una técnica con casco y chaleco muestra una de las cajas nido durante la instalación en una zona verde de Alcalá de Guadaíra.",
   "foto": "cajas-nido-murcielagos-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "En distintos espacios verdes de Alcalá de Guadaíra se han colocado 95 cajas nido para aves insectívoras y 13 refugios para murciélagos.",
    "La actuación la han realizado la Diputación de Sevilla y el equipo de Tragsatec, según el Ayuntamiento.",
    "El objetivo es ofrecer a estas especies nuevos lugares de refugio y reproducción; el Ayuntamiento destaca su papel en el control natural de insectos."
   ],
   "body": [
    "Alcalá de Guadaíra cuenta con 95 cajas nido para aves insectívoras y 13 refugios para murciélagos repartidos por distintos espacios verdes de la ciudad, según ha informado el Ayuntamiento en su perfil de Facebook. La instalación la han hecho la Diputación de Sevilla y el equipo de Tragsatec.",
    "El objetivo, según la información municipal, es dar a estas especies nuevos lugares donde refugiarse y criar. Las cajas nido son pequeñas casetas de madera que se cuelgan de árboles o postes y sustituyen a los huecos naturales que muchas aves necesitan para anidar; los refugios para murciélagos cumplen la misma función para estos mamíferos.",
    "## Control natural de insectos",
    "El Ayuntamiento subraya que aves y murciélagos cumplen un papel en el equilibrio de los ecosistemas y en el control natural de los insectos, y presenta la actuación como parte del cuidado del entorno y de una ciudad más sostenible.",
    "Las aves insectívoras, como carboneros y herrerillos, se alimentan sobre todo de insectos durante la cría, y los murciélagos cazan de noche insectos voladores. Por eso este tipo de instalaciones se usa en parques y zonas arboladas como complemento de otros métodos de control de plagas.",
    "La publicación municipal no detalla en qué parques o zonas concretas se han colocado las cajas, cuánto ha costado la actuación ni si habrá un seguimiento de su ocupación. Tragsatec es una empresa pública del Grupo Tragsa que trabaja para las administraciones en proyectos de medio ambiente.",
    "<span class='howto'><b>Cajas nido y refugios en Alcalá.</b> 95 cajas para aves insectívoras y 13 refugios para murciélagos en distintos espacios verdes. Ejecución: Diputación de Sevilla y Tragsatec.</span>"
   ],
   "seo": [
    "cajas-nido-aves-refugios-murcielagos-alcala",
    "Alcalá coloca 95 cajas nido y 13 refugios de murciélagos",
    "La Diputación de Sevilla y Tragsatec han instalado 95 cajas nido para aves y 13 refugios para murciélagos en zonas verdes de Alcalá de Guadaíra.",
    [
     "cajas nido",
     "murciélagos",
     "Diputación de Sevilla",
     "Tragsatec",
     "zonas verdes",
     "biodiversidad"
    ]
   ],
   "iso": "2026-11-27",
   "hora": "22:35",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "jornadas-cuando-atender-tambien-es-proteger-centro-igualdad",
   "sec": "alcala",
   "kicker": "Igualdad",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10041/profesionales-del-ambito-de-atencion-a-las-mujeres-victimas-de-violencia-de-genero-reflexionan-en-alcala-sobre-la-atencion-adecuada-y-coordinada-para-evitar-la-revictimizacion",
   "title": "Policías, sanitarios y juristas se forman en Alcalá para no revictimizar a las víctimas de violencia de género",
   "sub": "El Centro de la Igualdad acoge las jornadas «Cuando atender también es proteger», con ponentes de tres universidades y del Instituto de Emergencias",
   "caption": "Participantes en las Jornadas Técnicas Interprofesionales «Cuando atender también es proteger», en el Centro de la Igualdad de Alcalá de Guadaíra.",
   "foto": "jornadas-violencia-genero-centro-igualdad-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Centro de la Igualdad de Alcalá de Guadaíra ha acogido las Jornadas Técnicas Interprofesionales «Cuando atender también es proteger», dentro de la programación municipal del 25N.",
    "Han participado profesionales de la justicia, la abogacía, las fuerzas de seguridad, la sanidad, la salud mental, los servicios sociales y la educación.",
    "Las ponencias corrieron a cargo de especialistas de las universidades de Sevilla, Granada y Loyola y del Instituto de Emergencias y Seguridad Pública de Andalucía."
   ],
   "body": [
    "El Centro de la Igualdad de Alcalá de Guadaíra ha reunido a profesionales que atienden a mujeres víctimas de violencia de género en las Jornadas Técnicas Interprofesionales «Cuando atender también es proteger», según ha informado este viernes 27 de noviembre el Ayuntamiento. El objetivo es mejorar la primera atención para evitar la revictimización.",
    "Las jornadas forman parte de la programación municipal por el 25 de noviembre, Día Internacional de la Eliminación de la Violencia contra la Mujer. En ellas han participado la delegada municipal de Igualdad, Abril Castillo Sarmiento, y el teniente de alcaldesa Jesús Mora.",
    "## Quién ha participado",
    "Según el Ayuntamiento, han asistido profesionales de la justicia y la abogacía, de las fuerzas y cuerpos de seguridad, de la atención sanitaria y la salud mental, de los servicios sociales, de la coeducación y la orientación educativa, y de los servicios que acompañan y protegen a las víctimas.",
    "Las ponencias las han impartido especialistas en derecho, psicología, neurociencia e intervención social de las universidades de Sevilla, Granada y Loyola y del Instituto de Emergencias y Seguridad Pública de Andalucía.",
    "La delegada de Igualdad explicó, según la nota municipal, que la jornada busca crear «un espacio interprofesional de sensibilización, formación y reflexión práctica» sobre el impacto de la violencia de género. Castillo defendió que una primera respuesta «adecuada, coordinada y libre de revictimización» es clave para proteger a las mujeres, y que hay que entender sus reacciones en situaciones de crisis e identificar las necesidades de cada una.",
    "## Programa financiado por el Pacto de Estado",
    "Las jornadas se enmarcan en el programa municipal «Alcalá Actúa contra la Violencia de Género», financiado con fondos que transfiere el Ministerio de Igualdad a través del Pacto de Estado contra la Violencia de Género. Incluye talleres, conferencias y encuentros para centros educativos, jóvenes, asociaciones y familias.",
    "La programación del 25N incluyó el miércoles el <a href='#25n-acto-institucional-centro-igualdad-marchas-escolares'>acto institucional en el Centro de la Igualdad, con marchas de escolares</a>, en el que se reclamó un juzgado especializado para Alcalá.",
    "<span class='howto'><b>Ayuda a víctimas de violencia de género.</b> Teléfono 016, gratuito y que no deja rastro en la factura; también por WhatsApp en el 600 000 016. Emergencias: 112. En Alcalá, el Centro de la Igualdad atiende a mujeres durante todo el año.</span>"
   ],
   "seo": [
    "jornadas-violencia-genero-revictimizacion-centro-igualdad-alcala",
    "Jornadas contra la revictimización en Alcalá",
    "Profesionales de justicia, sanidad, policía y educación se forman en el Centro de la Igualdad de Alcalá para atender sin revictimizar a las mujeres.",
    [
     "violencia de género",
     "Centro de la Igualdad",
     "revictimización",
     "Abril Castillo",
     "Pacto de Estado",
     "25N"
    ]
   ],
   "iso": "2026-11-27",
   "hora": "22:35",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "cautivo-david-cobos-proyectos-cristo-virgen-dolores-obra-social",
   "sec": "hermandades",
   "kicker": "Hermandades",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=k5pekHWeob0",
   "title": "El nuevo hermano mayor del Cautivo quiere encargar un Cristo para el regazo de la Virgen de los Dolores",
   "sub": "David Cobos prioriza poner en marcha una obra social con Cáritas y, tras la Semana Santa, buscar escultor para recuperar la iconografía original",
   "caption": "José David Cobos, hermano mayor de la Hermandad Servita de Jesús Cautivo, durante una entrevista en Alcalá de Guadaíra.",
   "foto": "cautivo-david-cobos-proyectos-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La nueva junta de la Hermandad Servita de Jesús Cautivo, presidida por José David Cobos, quiere encargar una talla de Cristo para el regazo de la Virgen de los Dolores.",
    "Su primera prioridad es poner en marcha una obra social para hermanos necesitados en colaboración con Cáritas Parroquial.",
    "La hermandad estrenará el techo de palio de la Esperanza el próximo Miércoles Santo y celebrará en 2028 los 50 años de la fusión Servita-Cautivo y en 2030 los 75 de la hechura del Cautivo."
   ],
   "body": [
    "La Hermandad Servita de Jesús Cautivo de Alcalá de Guadaíra quiere encargar una talla de Cristo para el regazo de María Santísima de los Dolores y recuperar así la iconografía original de la imagen. Lo ha explicado a El Panadero su nuevo hermano mayor, José David Cobos, que ganó las elecciones de octubre por 83 votos.",
    "Cobos aseguró que el proyecto es «un sueño añorado» por los hermanos. Todavía no hay escultor: la junta, que tomó posesión hace pocas semanas, dará los pasos para elegirlo próximamente. La talla, dijo, sería propia y hecha para la Virgen. Después de la Semana Santa, la hermandad se sentará a dar forma a ese proyecto.",
    "## Primero, la obra social",
    "La primera tarea, según el hermano mayor, es poner en marcha una obra social dirigida a los hermanos necesitados, en colaboración con Cáritas Parroquial. «Vamos a trabajar muchísimo por cumplir todos los proyectos», afirmó Cobos, que describió su equipo como una mezcla de hermanos de toda la vida y gente joven.",
    "Sobre la Virgen de los Dolores, que protagonizó una salida extraordinaria en octubre del año pasado, Cobos dijo que la hermandad trabajará para darle «su sitio», aunque no concretó si el objetivo incluye una salida procesional propia en la Semana Santa de Alcalá.",
    "## Palio, cultos y aniversarios",
    "Para Nuestra Señora de la Esperanza, la nueva junta estrenará el próximo Miércoles Santo el techo de palio presentado recientemente, un proyecto de la junta anterior. También mantiene el proyecto de un manto y una saya bordados, que se harán con un traje de luces donado por un hermano.",
    "Los priostes ya preparan el altar de los cultos de la Esperanza, cuyo día es el 18 de diciembre, con su función y su besamanos. El mandato coincidirá con dos aniversarios: en 2028 se cumplen 50 años de la fusión de la Hermandad Servita con la del Cautivo, y en 2030, 75 años de la hechura y bendición del Cautivo.",
    "Cobos, con 25 años como hermano, fue diputado de cultos y de formación. La entrevista se grabó antes del cabildo de oficiales que nombró <a href='#cautivo-vestidor-david-del-toro-nombramientos-capataces'>al nuevo vestidor y a los capataces</a>. Su candidatura se impuso en <a href='#cautivo-elecciones-jose-david-cobos'>las elecciones de octubre</a>.",
    "<span class='howto'><b>Próximos cultos del Cautivo.</b> Misa de hermandad el último viernes de cada mes, a las 20.00, en la parroquia de San Sebastián. Cultos de Nuestra Señora de la Esperanza: en torno al 18 de diciembre, con función y besamanos; la hermandad publicará el horario.</span>"
   ],
   "seo": [
    "cautivo-david-cobos-cristo-virgen-dolores-alcala",
    "Cautivo de Alcalá: un Cristo para la Virgen de los Dolores",
    "José David Cobos, nuevo hermano mayor del Cautivo de Alcalá, prioriza una obra social con Cáritas y encargar un Cristo para la Virgen de los Dolores.",
    [
     "Hermandad del Cautivo",
     "José David Cobos",
     "Virgen de los Dolores",
     "Esperanza",
     "Cáritas",
     "Semana Santa de Alcalá"
    ]
   ],
   "iso": "2026-11-27",
   "hora": "22:35",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "voces-invisibles-bulanda-teatro-divertido-gutierrez-de-alba-29-noviembre",
   "sec": "cultura",
   "kicker": "Teatro",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=PLwjQl8HJbk&t=1020s",
   "title": "«Voces invisibles» lleva el domingo 29 al Gutiérrez de Alba una obra contra el racismo a beneficio de Bulanda",
   "sub": "La ONG Bulanda y Teatro Divertido destinan los 7 euros de cada entrada a sus proyectos; habrá coloquio con el público al terminar",
   "caption": "Cartel de la obra «Voces invisibles», de la ONG Bulanda y la Asociación Cultural Teatro Divertido.",
   "foto": "voces-invisibles-bulanda-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Teatro Gutiérrez de Alba de Alcalá de Guadaíra acoge el domingo 29 de noviembre, a las 12.00, la obra «Voces invisibles», de la ONG Bulanda y la Asociación Cultural Teatro Divertido.",
    "La obra trata de los prejuicios, la discriminación y el racismo a través de cinco personajes con nombre africano.",
    "La entrada cuesta 7 euros y lo recaudado irá a proyectos de Bulanda, entre ellos un pozo para un colegio de 800 alumnos."
   ],
   "body": [
    "El Teatro Gutiérrez de Alba de Alcalá de Guadaíra acoge el domingo 29 de noviembre, a las 12.00, «Voces invisibles», una obra sobre la discriminación y el racismo que presentan la ONG Bulanda y la Asociación Cultural Teatro Divertido. Lo recaudado con las entradas, a 7 euros, irá a los proyectos de cooperación de la ONG.",
    "La historia parte de cinco personas convocadas a una sesión sin saber muy bien para qué. Tienen en común que todas llevan un nombre africano. A lo largo de la obra cuentan su trayectoria, los problemas que han vivido y algunas anécdotas.",
    "## Una obra para pensar",
    "Un responsable de Bulanda explicó a El Panadero que la obra pretende «hacer pensar» y que el público se pregunte cuál es su posición ante temas como el racismo. Aborda también las desigualdades de trato y los prejuicios sociales. Al terminar, se abrirá un espacio de diálogo para que los asistentes compartan sus impresiones.",
    "El montaje está producido y dirigido por Teatro Divertido, con la participación de Bulanda, y cuenta con financiación de la Diputación de Sevilla, según los créditos del propio cartel.",
    "## Un pozo para un colegio",
    "La recaudación se destinará a los proyectos pendientes de la ONG. El que tienen más avanzado, posiblemente en Guinea Ecuatorial, es la construcción de un pozo para un colegio de 800 alumnos que no tiene agua suficiente y que daría servicio también a una barriada cercana.",
    "Bulanda trabaja desde 2019 en la República Democrática del Congo, donde ha construido pozos en comunidades rurales y ha rehabilitado centros de salud y orfanatos, además de apoyar proyectos de agricultura y ganadería, según la organización.",
    "El Gutiérrez de Alba tiene este fin de semana doble cita: el viernes 27 acogió <a href='#hamlet-guayomini-teatro-gutierrez-de-alba-27-noviembre'>un «Hamlet» con humor y música en directo</a>, y el domingo la música se traslada al <a href='#concierto-santa-cecilia-auditorio-riberas-29-noviembre'>Auditorio Riberas del Guadaíra con el concierto de Santa Cecilia</a>.",
    "<span class='howto'><b>«Voces invisibles».</b> Domingo 29 de noviembre de 2026, a las 12.00. Teatro Gutiérrez de Alba. Entrada: 7 euros, a beneficio de los proyectos de la ONG Bulanda. Venta anticipada en línea, a través de las redes de la ONG, y en taquilla desde media hora antes. Coloquio con el público al final.</span>"
   ],
   "seo": [
    "voces-invisibles-bulanda-teatro-gutierrez-de-alba",
    "«Voces invisibles», teatro contra el racismo en Alcalá",
    "El Teatro Gutiérrez de Alba de Alcalá acoge el domingo 29 la obra «Voces invisibles», de Bulanda y Teatro Divertido, a beneficio de un pozo en África.",
    [
     "Voces invisibles",
     "Bulanda",
     "Teatro Divertido",
     "Teatro Gutiérrez de Alba",
     "racismo",
     "cooperación"
    ]
   ],
   "iso": "2026-11-27",
   "hora": "22:35",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "cabalgata-campo-beatas-coronacion-zambra-reyesilos-papeletas-beduinos",
   "sec": "cultura",
   "kicker": "Cabalgatas",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=PLwjQl8HJbk&t=1196s",
   "title": "El Campo de las Beatas corona el domingo 29 a su Estrella y ReyeSilos reparte las papeletas de beduino",
   "sub": "Claudia Ruiz será la Estrella de la Ilusión del barrio; ReyeSilos atiende el sábado 28 de 11.00 a 13.00 en su sede",
   "caption": "Una carroza de la Cabalgata de Reyes del Campo de las Beatas recorre el barrio en una edición anterior.",
   "foto": "cabalgatas-beatas-reyesilos-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Cabalgata de Reyes Magos del Campo de las Beatas celebra el domingo 29 de noviembre, a partir del mediodía, su acto de coronación en el restaurante Zambra.",
    "Claudia Ruiz será la Estrella de la Ilusión; entre los Reyes Magos de esta edición figuran Francisco Aguilera y Francisco José Chamorro.",
    "La Cabalgata ReyeSilos reparte papeletas de sitio para beduinos el viernes 27, de 17.00 a 20.00, y el sábado 28, de 11.00 a 13.00, en su sede; la edad mínima es 11 años."
   ],
   "body": [
    "La Cabalgata de Reyes Magos del Campo de las Beatas, en Alcalá de Guadaíra, celebra el domingo 29 de noviembre su acto de coronación, en el que presenta a quienes protagonizarán el cortejo del próximo 5 de enero. Será a partir del mediodía en el restaurante Zambra, con los miembros de la organización y las personas vinculadas a la cabalgata.",
    "La Estrella de la Ilusión de esta edición será Claudia Ruiz. Entre los Reyes Magos que recorrerán el barrio figuran Francisco Aguilera y Francisco José Chamorro.",
    "La asociación del Campo de las Beatas ya repartió la semana pasada las <a href='#cabalgatas-beduinos-campo-beatas-almuerzo-coronacion-reyesilos'>papeletas de sitio para sus beduinos</a>, con un precio de 30 euros más otros 30 de fianza.",
    "## Papeletas de ReyeSilos",
    "La Cabalgata ReyeSilos, la del barrio de Silos, reparte este fin de semana las papeletas de sitio para los beduinos que quieran acompañar a sus Reyes en 2027, según ha anunciado en sus redes sociales. La primera convocatoria fue el viernes 27, de 17.00 a 20.00, y la segunda es el sábado 28, de 11.00 a 13.00. Las dos se atienden en la sede de la cabalgata.",
    "La organización fija una edad mínima de 11 años, cumplidos, y no pone límite de edad máxima. En el caso de los menores, la papeleta tiene que tramitarla su padre o su madre. ReyeSilos no ha detallado el precio de la papeleta en la información difundida.",
    "ReyeSilos coronó el 21 de noviembre a sus Reyes y su Estrella y ya tiene <a href='#cartel-reyesilos-2027-eliseo-leon-rodriguez'>cartel para 2027</a>. La cabalgata colabora además con Cáritas Parroquial de la Inmaculada junto a las hermandades del Perdón y San Mateo.",
    "Las cabalgatas de barrio completan en Alcalá el desfile principal de la tarde del 5 de enero, que organiza la Asociación de la Cabalgata de Reyes, cuyo taller <a href='#cabalgata-reyes-2027-construccion-carrozas-taller-grinch'>construye más de una docena de carrozas nuevas</a>.",
    "<span class='howto'><b>Coronación del Campo de las Beatas.</b> Domingo 29 de noviembre, desde el mediodía, restaurante Zambra. <b>Papeletas de beduino de ReyeSilos.</b> Sábado 28 de noviembre, de 11.00 a 13.00, en la sede de la cabalgata. Edad mínima: 11 años; los menores, con su padre o su madre.</span>"
   ],
   "seo": [
    "cabalgata-campo-beatas-coronacion-reyesilos-papeletas",
    "Cabalgatas de Alcalá: coronación y papeletas de beduino",
    "La Cabalgata del Campo de las Beatas corona el domingo 29 a su Estrella de la Ilusión y ReyeSilos reparte el sábado 28 las papeletas de beduino.",
    [
     "Cabalgata del Campo de las Beatas",
     "ReyeSilos",
     "Reyes Magos 2027",
     "beduinos",
     "Silos",
     "cabalgatas de barrio"
    ]
   ],
   "iso": "2026-11-27",
   "hora": "22:35",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "comercios-emblematicos-ferreteria-mora-pedro-rusillo",
   "sec": "economia",
   "kicker": "Comercio",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=PLwjQl8HJbk&t=422s",
   "title": "Ferretería Mora y Pedro Rusillo, distinguidos como comercios emblemáticos de la provincia de Sevilla",
   "sub": "La Cámara de Comercio de Sevilla reconoce a los dos establecimientos de Alcalá por llevar más de 40 años abiertos",
   "caption": "Representantes de Ferretería Mora y de Pedro Rusillo, con sus distintivos, junto a la alcaldesa, Ana Isabel Jiménez, y la delegada de Comercio, Paula Fuster, en la Cámara de Comercio de Sevilla.",
   "foto": "comercios-emblematicos-mora-rusillo-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "La Cámara de Comercio de Sevilla ha reconocido a Ferretería Mora y a Pedro Rusillo, de Alcalá de Guadaíra, como Comercios Emblemáticos de la Provincia, un distintivo que este año reciben 15 negocios de 10 municipios.",
    "El distintivo se concede a comercios con más de 40 años de trayectoria y forma parte del programa de apoyo al comercio minorista de la Cámara.",
    "Ferretería Mora abrió en 1928 como ferretería de barrio y hoy tiene una nave de exposición de más de 650 metros cuadrados y un almacén de 900.",
    "La alcaldesa, Ana Isabel Jiménez, y la delegada de Comercio, Paula Fuster, asistieron a la entrega el jueves 26 de noviembre."
   ],
   "body": [
    "Dos negocios de Alcalá de Guadaíra, Ferretería Mora y Pedro Rusillo, han recibido este jueves 26 de noviembre el distintivo de Comercios Emblemáticos de la Provincia que concede la Cámara de Comercio de Sevilla a los establecimientos con más de 40 años de actividad, según el Ayuntamiento y la información recogida por El Panadero.",
    "A la entrega asistieron la alcaldesa, Ana Isabel Jiménez, y la delegada municipal de Comercio, Paula Fuster. La foto difundida por el Ayuntamiento muestra a representantes de los dos negocios con sus diplomas en la escalera de la sede de la Cámara, en Sevilla.",
    "## Qué reconoce el distintivo",
    "La Cámara otorga este reconocimiento junto a los ayuntamientos y las asociaciones empresariales de la provincia. Está reservado a comercios con más de cuatro décadas de trayectoria y se enmarca en su programa de apoyo al comercio minorista, que incluye acciones de promoción, digitalización y campañas para impulsar el consumo responsable, según la nota municipal.",
    "Según el Ayuntamiento, el distintivo busca también apoyar la consolidación de estos negocios y su continuidad entre generaciones, además de su promoción y modernización.",
    "La alcaldesa presentó a los dos negocios como un ejemplo del carácter emprendedor de Alcalá y de la perseverancia de los comerciantes frente a las crisis, y destacó, según la nota, su «cercanía y calidad de servicio a la ciudadanía». En su perfil de Facebook, Jiménez añadió que ambos están «muy presentes en la memoria de los alcalareños».",
    "La Federación de Industriales y Comerciantes de Alcalá (FICA) también ha felicitado a las dos empresas en sus redes sociales por el reconocimiento a «su trayectoria, esfuerzo y compromiso con el comercio local». La federación lleva esta semana una campaña para animar a comprar en las tiendas de la ciudad, como contó El Panadero en <a href='#fica-black-friday-campana-comercio-local'>su llamamiento por el Black Friday</a>.",
    "La Cámara ha concedido este año el distintivo a 15 negocios de 10 municipios de la provincia, entre ellos los dos de Alcalá, dentro del Plan de Comercio Minorista 2026. La historia de Ferretería Mora arranca en 1928 como una pequeña ferretería de barrio en el centro de Alcalá; hoy está especializada en suministro industrial y cuenta con una nave de exposición de más de 650 metros cuadrados y un almacén de 900. Pedro Rusillo es otro nombre ligado durante décadas al comercio tradicional de la ciudad.",
    "<span class='howto'><b>Comercios Emblemáticos de la Provincia.</b> Lo concede la Cámara de Comercio de Sevilla con ayuntamientos y asociaciones empresariales. Requisito: más de 40 años de trayectoria. Distinguidos este año: 15 negocios de 10 municipios; en Alcalá, Ferretería Mora y Pedro Rusillo (26 de noviembre de 2026).</span>"
   ],
   "seo": [
    "comercios-emblematicos-ferreteria-mora-pedro-rusillo-alcala",
    "Ferretería Mora y Pedro Rusillo, comercios emblemáticos",
    "La Cámara de Comercio de Sevilla distingue a Ferretería Mora y Pedro Rusillo, de Alcalá de Guadaíra, como comercios emblemáticos con más de 40 años.",
    [
     "Ferretería Mora",
     "Pedro Rusillo",
     "Cámara de Comercio de Sevilla",
     "comercio local",
     "FICA",
     "Paula Fuster"
    ]
   ],
   "iso": "2026-11-26",
   "hora": "22:20",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "actualizada": "2026-11-27T22:35"
  },
  {
   "id": "ayuda-17-millones-economia-circular-film-plastico-alcala",
   "sec": "economia",
   "kicker": "Industria",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=4wuOMIPhO1I&t=535s",
   "title": "Transición Ecológica propone 1,7 millones para un proyecto de Alcalá que reducirá el plástico virgen",
   "sub": "La inversión total es de 4,5 millones y busca reducir un 40 % el consumo de plástico virgen",
   "caption": "Bolsas de plástico en una línea de envasado. Imagen de recurso.",
   "foto": "ayuda-plastico-economia-circular-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Ministerio para la Transición Ecológica ha incluido un proyecto ubicado en Alcalá de Guadaíra entre los beneficiarios de sus ayudas a la economía circular del plástico, con una propuesta de 1,7 millones de euros.",
    "El proyecto, de 4,5 millones de inversión total, incorpora equipos para reducir un 40 % el consumo de materia prima virgen en la fabricación de film plástico.",
    "Con esta segunda resolución, la convocatoria suma 117 proyectos en 14 comunidades autónomas y 153 millones de euros en ayudas."
   ],
   "body": [
    "Un proyecto industrial ubicado en Alcalá de Guadaíra figura entre los nuevos beneficiarios de las ayudas del Ministerio para la Transición Ecológica y el Reto Demográfico (MITECO) para impulsar la economía circular en el sector del plástico, con una propuesta de ayuda de 1,7 millones de euros para mejorar la sostenibilidad en la fabricación de film plástico.",
    "La iniciativa supone una inversión total de 4,5 millones de euros. Prevé incorporar nuevos equipos con los que reducir un 40 % el consumo de materia prima virgen, manteniendo las propiedades mecánicas y la calidad del producto final.",
    "## Dos proyectos nuevos",
    "La ayuda llega en una segunda resolución de la convocatoria, que incorpora dos proyectos: el de Alcalá y otro en Sant Boi de Llobregat (Barcelona). Entre los dos recibirán 3,3 millones de euros.",
    "Con estas incorporaciones, el programa alcanza los 117 proyectos beneficiarios en 14 comunidades autónomas, con 153 millones de euros en ayudas públicas y una inversión pública y privada que puede llegar a los 482 millones.",
    "En marzo, el Ministerio había anunciado la primera resolución de esta línea, con unos 150 millones para 115 proyectos, según <a href='https://www.miteco.gob.es/es/prensa/ultimas-noticias/2026/marzo/el-miteco-impulsa-la-circularidad-en-el-sector-del-plastico-con-.html'>su nota de prensa</a>.",
    "## Fondos europeos",
    "Las ayudas forman parte del Proyecto Estratégico para la Recuperación y Transformación Económica (PERTE) de Economía Circular, financiado con fondos europeos Next Generation EU. Su objetivo es reducir residuos y avanzar hacia procesos industriales más sostenibles, en este caso con menos plástico nuevo en los envases y embalajes.",
    "La información difundida sobre esta segunda resolución no identifica a la empresa que desarrollará el proyecto de Alcalá ni el polígono en el que se ubica.",
    "<span class='howto'><b>Ayudas a la economía circular del plástico.</b> Convoca: Ministerio para la Transición Ecológica (PERTE de Economía Circular, fondos Next Generation EU). Proyecto de Alcalá: 1,7 millones de ayuda propuesta sobre una inversión de 4,5 millones. Total de la convocatoria: 117 proyectos y 153 millones en ayudas.</span>"
   ],
   "seo": [
    "ayuda-economia-circular-plastico-alcala-film",
    "Alcalá: 1,7 millones para un proyecto de film plástico",
    "Transición Ecológica propone 1,7 millones de ayuda a un proyecto de Alcalá de Guadaíra que reducirá un 40 % el plástico virgen en la fabricación de film.",
    [
     "economía circular",
     "plástico",
     "Ministerio para la Transición Ecológica",
     "PERTE",
     "Next Generation EU",
     "industria"
    ]
   ],
   "iso": "2026-11-26",
   "hora": "22:20",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "hamlet-guayomini-teatro-gutierrez-de-alba-27-noviembre",
   "sec": "cultura",
   "kicker": "Teatro",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10037/la-obra-hamlet-de-shakespeare-llega-este-viernes-al-teatro-gutierrez-de-alba",
   "title": "El Gutiérrez de Alba acoge el viernes 27 un «Hamlet» con humor, música en directo y participación del público",
   "sub": "La compañía Guayominí, premiada en el Certamen Barroco Infantil del Festival de Almagro, actúa a las 20.30",
   "caption": "Público en el patio de butacas del Teatro Gutiérrez de Alba, en una imagen de archivo.",
   "foto": "hamlet-gutierrez-de-alba-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Teatro Gutiérrez de Alba de Alcalá de Guadaíra representa el viernes 27 de noviembre, a las 20.30, una versión de «Hamlet» de Guayominí Producciones.",
    "El montaje cuenta la historia de tres actores que discuten cómo interpretar la tragedia de Shakespeare, con canciones en directo y participación del público.",
    "Las entradas están a la venta en la web municipal entradas.alcaladeguadaira.es."
   ],
   "body": [
    "El Teatro Gutiérrez de Alba de Alcalá de Guadaíra programa el viernes 27 de noviembre, a las 20.30, «Hamlet», un montaje de la compañía Guayominí Producciones que revisa la tragedia de William Shakespeare con humor, canciones en directo y participación del público, según ha informado el Ayuntamiento.",
    "La obra, estrenada en 2024, parte de un juego teatral: tres actores con ideas muy distintas sobre cómo debe representarse «Hamlet» se proponen dar al público exactamente lo que quiere y se interrumpen una y otra vez. El cartel de la producción firma la dirección de Patricia Rodríguez y lleva en el reparto a Arantxa Ramos, Hugo Manso y la propia Patricia Rodríguez.",
    "La pregunta de fondo, según la presentación del montaje, es si los tres intérpretes lograrán terminar la función sin perderse en monólogos interminables y si averiguarán qué espera de un clásico el público del siglo XXI. La compañía lo plantea como una comedia de ritmo rápido sobre el propio oficio teatral.",
    "## Premiada en Almagro",
    "Según la nota municipal, la propuesta mezcla locura, tragedia y comedia con momentos de improvisación. El cartel la presenta como ganadora del 14.º Certamen Barroco Infantil del Festival Internacional de Teatro Clásico de Almagro.",
    "El delegado de Cultura, Christopher Rivas, ha animado a los vecinos a acudir a esta versión «renovada y trepidante» de un clásico, en la que los tres intérpretes defienden maneras opuestas de abordar el texto, según recoge la nota del Ayuntamiento.",
    "La función se suma a la <a href='#agenda-cultural-noviembre-2026'>agenda cultural de noviembre</a> en Alcalá. La nota municipal no detalla el precio de las entradas, que se consulta en la web de venta.",
    "<span class='howto'><b>«Hamlet», de Guayominí Producciones.</b> Cuándo: viernes 27 de noviembre de 2026, 20.30. Dónde: Teatro Gutiérrez de Alba, Alcalá de Guadaíra. Entradas: entradas.alcaladeguadaira.es.</span>"
   ],
   "seo": [
    "hamlet-teatro-gutierrez-de-alba-alcala-guayomini",
    "«Hamlet» en el Teatro Gutiérrez de Alba de Alcalá",
    "El Teatro Gutiérrez de Alba de Alcalá de Guadaíra acoge el viernes 27 a las 20.30 un «Hamlet» de Guayominí con humor, música en directo y público activo.",
    [
     "Teatro Gutiérrez de Alba",
     "Hamlet",
     "Guayominí Producciones",
     "Christopher Rivas",
     "teatro",
     "Festival de Almagro"
    ]
   ],
   "iso": "2026-11-26",
   "hora": "22:20",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "cautivo-vestidor-david-del-toro-nombramientos-capataces",
   "sec": "hermandades",
   "kicker": "Hermandades",
   "src": "Hermandad Servita de Jesús Cautivo (Facebook)",
   "fuente_url": "https://www.facebook.com/1160162549992960/posts/1170997605576121",
   "title": "La Hermandad del Cautivo nombra a David del Toro vestidor de sus dolorosas tras renovar sus cargos",
   "sub": "Las hermandades de Alcalá anuncian también nuevos capataces y el pregonero de la meditación ante el Cristo del Amor",
   "caption": "David del Toro Ríos, nuevo vestidor de María Santísima de los Dolores y Nuestra Señora de la Esperanza.",
   "foto": "cautivo-vestidor-david-del-toro-of.jpg",
   "fotocredito": "Facebook de la Hermandad Servita de Jesús Cautivo",
   "claves": [
    "La Hermandad Servita de Jesús Cautivo de Alcalá de Guadaíra ha designado a David del Toro Ríos vestidor de María Santísima de los Dolores y Nuestra Señora de la Esperanza.",
    "Su Junta de Gobierno acordó nuevos nombramientos en el Cabildo de Oficiales del miércoles 25 de noviembre.",
    "José Luis Jiménez Díaz ha sido nombrado capataz del paso de Nuestro Padre Jesús Cautivo y Rescatado."
   ],
   "body": [
    "La Hermandad Servita de Jesús Cautivo de Alcalá de Guadaíra ha designado a David del Toro Ríos vestidor de sus dos titulares marianas, María Santísima de los Dolores y Nuestra Señora de la Esperanza, según ha publicado la propia hermandad en su perfil de Facebook este jueves 26 de noviembre.",
    "Del Toro es natural de Morón de la Frontera y tiene trayectoria en el mundo cofrade y en la decoración floral para Semana Santa y eventos. Ha sido prioste segundo de la Hermandad de la Redención de Sevilla. Según la hermandad, viste ya a 12 imágenes, entre ellas María Santísima del Rocío Coronada, de Sevilla, y el Dulce Nombre de Bellavista, además de varias dolorosas de Morón, Bollullos Par del Condado, Ronda, Tocina y La Rinconada.",
    "## Nuevos cargos",
    "El nombramiento llega un día después de que la Junta de Gobierno, reunida en Cabildo de Oficiales el miércoles 25, acordara los nuevos cargos para esta etapa, según ha comunicado la hermandad. La hermandad eligió en octubre como hermano mayor a José David Cobos, como contó El Panadero en <a href='#cautivo-elecciones-jose-david-cobos'>la información sobre sus elecciones</a>.",
    "Uno de esos relevos se ha conocido por otra hermandad: la Asociación Parroquial de la Divina Pastora ha felicitado en Facebook a su hermano José Luis Jiménez Díaz, miembro de la cuadrilla de capataces de la Virgen, por su nombramiento como capataz del paso de Nuestro Padre Jesús Cautivo y Rescatado.",
    "La Hermandad de Jesús, por su parte, ha felicitado en sus redes a su hermano Enrique Pavón Arroyo por su designación como capataz de la Virgen de la Esperanza.",
    "## Meditación y Adviento",
    "La Hermandad de la Amargura ha anunciado que la Meditación ante el Santísimo Cristo del Amor del sábado 20 de febrero correrá a cargo de su hermano Roberto Portillo Hartillo, auxiliar de la Junta de Gobierno y miembro del equipo de capataces.",
    "La Hermandad del Soberano Poder ha presentado a María Santísima de la Caridad ataviada para el Adviento, con saya de brocado azul y manto malva. La dolorosa estrena una mantilla de tul bordado donada por un hermano.",
    "<span class='howto'><b>Hermandad Servita de Jesús Cautivo.</b> Casa hermandad: calle San Sebastián, 25. Atención a los hermanos: miércoles, de 19.30 a 21.00. Meditación ante el Cristo del Amor (Amargura): sábado 20 de febrero de 2027.</span>"
   ],
   "seo": [
    "cautivo-vestidor-david-del-toro-capataces-alcala",
    "El Cautivo nombra vestidor a David del Toro en Alcalá",
    "La Hermandad del Cautivo de Alcalá de Guadaíra nombra a David del Toro Ríos vestidor de sus dolorosas y José Luis Jiménez, capataz del paso del Señor.",
    [
     "Hermandad del Cautivo",
     "David del Toro Ríos",
     "vestidor",
     "capataces",
     "Hermandad de la Amargura",
     "Soberano Poder"
    ]
   ],
   "iso": "2026-11-26",
   "hora": "22:20",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "destacado": true
  },
  {
   "id": "coste-crianza-andalucia-828-euros-save-the-children",
   "sec": "economia",
   "kicker": "Familias",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=4wuOMIPhO1I&t=432s",
   "title": "Criar a un hijo en Andalucía cuesta de media 828 euros al mes, un 3 % más que hace dos años",
   "sub": "El gasto llega a 930 euros en la adolescencia; más de 194.000 hogares andaluces con hijos no llegan a cubrirlo",
   "caption": "Un niño juega en casa. Imagen de recurso.",
   "foto": "coste-crianza-andalucia-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Criar a un hijo en Andalucía cuesta una media de 828 euros al mes, un 3 % más que hace dos años, según el último informe de Save the Children.",
    "La alimentación es el principal gasto, con 249 euros al mes, y la vivienda ha pasado de 98 a 119 euros por hijo en dos años.",
    "Más de 194.000 hogares andaluces con hijos no tienen ingresos suficientes para cubrir el coste de la crianza."
   ],
   "body": [
    "Criar a un hijo en Andalucía, y por tanto también en Alcalá de Guadaíra, cuesta una media de 828 euros al mes, un 3 % más que hace dos años, según el último informe de Save the Children sobre el coste de la crianza. La organización advierte de que miles de familias andaluzas no llegan a cubrir esos gastos básicos.",
    "El informe calcula lo necesario para garantizar el bienestar de niños y adolescentes. La alimentación es la partida principal, con unos 249 euros al mes por hijo.",
    "## La vivienda pesa más",
    "La vivienda gana peso: el gasto atribuible a cada hijo ha pasado de 98 a 119 euros mensuales en dos años y puede llegar a 146 euros si se suman los suministros y otros gastos del hogar.",
    "El coste crece con la edad. En los tres primeros años de vida ronda los 600 euros al mes y en la adolescencia alcanza los 930 euros.",
    "Según Save the Children, más de 194.000 hogares andaluces con hijos no tienen ingresos suficientes para cubrir el coste de la crianza aunque dedicaran a ello toda su renta disponible, y cerca de la mitad de las familias destina al menos la mitad de sus ingresos a estos gastos.",
    "La organización pide reforzar las políticas públicas de apoyo a las familias, adaptar las ayudas al coste real de criar a un hijo y facilitar el acceso a una vivienda adecuada. El informe ofrece datos para el conjunto de Andalucía, sin desglose por municipios.",
    "<span class='howto'><b>Coste de la crianza en Andalucía (Save the Children).</b> Media: 828 euros al mes por hijo. De 0 a 3 años: unos 600 euros. Adolescencia: 930 euros. Alimentación: 249 euros. Vivienda: 119 euros (146 con suministros).</span>"
   ],
   "seo": [
    "coste-criar-hijo-andalucia-save-the-children",
    "Criar a un hijo en Andalucía cuesta 828 euros al mes",
    "Criar a un hijo en Andalucía cuesta 828 euros al mes de media, un 3 % más en dos años, y 930 en la adolescencia, según el informe de Save the Children.",
    [
     "Save the Children",
     "crianza",
     "familias",
     "pobreza infantil",
     "vivienda",
     "Andalucía"
    ]
   ],
   "iso": "2026-11-26",
   "hora": "22:20",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "pp-tribuna-tranvia-vive-bomberos-apagones-san-rafael",
   "sec": "politica",
   "kicker": "La Tribuna",
   "iso": "2026-11-26",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=7I9r5MzRdAE&t=0s",
   "title": "El PP de Alcalá propone generadores para los cortes de luz y atribuye el retraso del tranvía a su complejidad",
   "sub": "Su portavoz, Esaú Pérez, reclama más medios para los bomberos y critica que VIVE Alcalá dependa de los préstamos del Ayuntamiento",
   "caption": "Esaú Pérez, portavoz del grupo municipal del PP, en el plató del programa La Tribuna.",
   "foto": "pp-la-tribuna-25-noviembre-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El portavoz del PP en Alcalá de Guadaíra, Esaú Pérez, defendió el miércoles 25 de noviembre que el retraso del tranvía hasta 2027 se debe a la complejidad técnica de la puesta en servicio.",
    "Pérez propuso que el Ayuntamiento disponga de entre 25 y 30 generadores para atender a vecinos que dependen de aparatos eléctricos durante los cortes de luz, con un coste que cifró en menos de 20.000 euros.",
    "El PP reclamó más personal y medios para los bomberos y sostuvo que la sociedad municipal VIVE Alcalá incumple su objetivo de limitar la responsabilidad económica del Ayuntamiento.",
    "Sobre las 84 viviendas de alquiler del Zacatín, cuyas obras ya han empezado, el portavoz dijo que el PP no celebrará nada hasta que estén entregadas y habitadas."
   ],
   "body": [
    "El portavoz del grupo municipal del PP en Alcalá de Guadaíra, Esaú Pérez, propuso el miércoles 25 de noviembre que el Ayuntamiento compre generadores para atender a los vecinos que dependen de aparatos eléctricos durante los cortes de luz, reclamó más medios para los bomberos y defendió el nuevo retraso del tranvía. Lo hizo en el programa La Tribuna.",
    "Sobre el tranvía, Pérez se refirió al <a href='#moreno-mitin-pp-alcala-tranvia-2027-29n'>mitin de Juanma Moreno en Alcalá</a>, en el que el presidente de la Junta situó en 2027 la puesta en servicio. Hasta ahora la fecha anunciada era el último trimestre de 2026. El portavoz atribuyó el cambio a la complejidad de la segunda fase, la de sistemas, comunicaciones y seguridad, y sostuvo que es preferible esperar unos meses a poner en marcha una instalación que luego dé problemas. Recordó que los seis trenes ya están en las cocheras.",
    "## Generadores y bomberos",
    "Pérez aseguró que en las últimas semanas se repiten los cortes de luz en distintos barrios, según las quejas de los vecinos en redes sociales. Admitió que el suministro no depende del Ayuntamiento, pero propuso que el municipio disponga de entre 25 y 30 generadores para atender a personas conectadas a respiradores o que usan sillas de ruedas eléctricas. Según sus cálculos, costarían menos de 20.000 euros. El PP ya lo planteó, dijo, tras el apagón general.",
    "En cuanto a los bomberos, el portavoz consideró prioritario atender la petición de más personal y medios que <a href='#bomberos-alcala-denuncian-falta-plantilla-vehiculo-altura'>hicieron públicas los representantes del colectivo</a>. Según esa denuncia, el servicio llega en unos cinco minutos a cualquier emergencia de la ciudad, pero si hace falta el camión de altura la respuesta sube a 15. Pérez recordó que los propietarios de viviendas pagan una tasa municipal para sostener el servicio de extinción de incendios.",
    "## Vivienda y VIVE Alcalá",
    "Sobre las <a href='#zacatin-84-viviendas-alquiler-adjudicacion-31-diciembre'>84 viviendas de alquiler del Zacatín</a>, cuyas obras ya han empezado, el portavoz dijo que el PP no celebrará nada hasta que estén entregadas y habitadas, y atribuyó el calendario a la cercanía de las elecciones municipales de 2027. Criticó además los nuevos préstamos a la sociedad municipal VIVE Alcalá <a href='#pleno-noviembre-led-vive-piscina-cabeza-hermosa'>aprobados en el Pleno de noviembre</a>: a su juicio, la empresa se creó para limitar la responsabilidad económica del Ayuntamiento y ese objetivo no se cumple si el Consistorio la financia. El gobierno municipal ha defendido en el Pleno que el préstamo de las 107 viviendas de VIVE se trasladará a los compradores.",
    "Pérez se refirió también al <a href='#pleno-noviembre-mociones-tomillar-protocolo-obras'>protocolo para reparar el entorno de las grandes obras</a>, aprobado por unanimidad a propuesta del PP, y puso como ejemplo el deterioro del acerado y los alcorques de la calle San Francisco tras las obras de la plaza del Duque. Pidió además que los delegados del gobierno expliquen sus propuestas en el primer turno de los debates del Pleno.",
    "## San Rafael y preguntas",
    "El portavoz reclamó para la barriada de San Rafael los mismos servicios que el resto de la ciudad, en limpieza, recogida de basura y atención a las quejas vecinales. A la pregunta de la portavoz del PSOE, Mª Ángeles Ballesteros, sobre la división interna de su partido, respondió que el trabajo de los seis concejales populares no se ve afectado.",
    "El PP dejó sus preguntas para los demás grupos, que responderán en las próximas semanas. Al PSOE le pregunta qué hará para buscar consenso en los presupuestos de 2027, que aún no se han presentado.",
    "<span class='howto'><b>La Tribuna.</b> Programa semanal de debate con los grupos municipales de Alcalá de Guadaíra, los miércoles por la noche. La próxima semana participa el PSOE.</span>"
   ],
   "seo": [
    "pp-alcala-generadores-apagones-bomberos-tranvia",
    "PP de Alcalá: generadores para apagones y tranvía en 2027",
    "El portavoz del PP de Alcalá, Esaú Pérez, propone generadores para los cortes de luz, pide más medios para bomberos y defiende el retraso del tranvía.",
    [
     "PP de Alcalá",
     "Esaú Pérez",
     "La Tribuna",
     "tranvía de Alcalá",
     "VIVE Alcalá",
     "bomberos",
     "cortes de luz",
     "San Rafael"
    ]
   ],
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "hora": "07:54"
  },
  {
   "id": "participacion-alcala-generales-secciones-guia-29n",
   "sec": "politica",
   "kicker": "Elecciones 29N",
   "iso": "2026-11-26",
   "hora": "07:55",
   "src": "Ministerio del Interior",
   "fuente_url": "https://infoelectoral.interior.gob.es/es/elecciones-celebradas/area-de-descargas/",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Alcalá votó menos que la provincia en las cuatro últimas generales y 11 secciones bajaron del 60 % en 2023",
   "sub": "En julio de 2023 participó el 66,0 % del censo, frente al 70,2 % provincial; el domingo 29 se vota de 9.00 a 20.00 y sirve el DNI digital",
   "caption": "Participación en Alcalá de Guadaíra y en la provincia de Sevilla en las elecciones generales de 2016, abril de 2019, noviembre de 2019 y julio de 2023.",
   "foto": "participacion-alcala-generales-secciones-guia-29n-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "Alcalá de Guadaíra tuvo una participación inferior a la de la provincia de Sevilla en las generales de 2016, abril de 2019, noviembre de 2019 y julio de 2023, según el Ministerio del Interior.",
    "En julio de 2023 votó en Alcalá el 66,0 % del censo de residentes, frente al 70,2 % del conjunto de la provincia.",
    "Once de las 49 secciones censales de Alcalá quedaron por debajo del 60 % de participación en 2023, con 12.849 electores; en abril de 2019 fueron cuatro.",
    "Las elecciones generales se celebran el domingo 29 de noviembre de 2026, de 9.00 a 20.00, y la Junta Electoral Central ha autorizado identificarse con el DNI digital."
   ],
   "body": [
    "Alcalá de Guadaíra votó menos que el conjunto de la provincia de Sevilla en las cuatro elecciones generales celebradas entre 2016 y 2023. En julio de 2023 participó el 66,0 % de su censo, frente al 70,2 % provincial, y 11 de sus 49 secciones censales quedaron por debajo del 60 %, según los datos del Ministerio del Interior.",
    "El análisis de El Panadero llega a tres días de las generales del domingo 29 de noviembre y completa <a href='#alcala-generales-secciones-2016-2023'>el mapa del voto por secciones publicado el 23 de noviembre</a>. Una sección censal agrupa a los electores de unas calles concretas, que votan en una o varias mesas.",
    "## Unos cuatro puntos por debajo de la provincia",
    "La distancia con la provincia apenas ha variado. En junio de 2016 votó en Alcalá el 65,5 % del censo, frente al 69,4 % provincial. En abril de 2019 fue el 71,4 %, frente al 75,2 %. En noviembre de 2019, el 66,9 %, frente al 70,6 %. En julio de 2023, el 66,0 %, frente al 70,2 %.",
    "Entre los municipios cercanos de tamaño similar, Dos Hermanas superó a Alcalá en 2023, con el 68,7 %, y Utrera se quedó en el 65,9 %. De los 59.569 electores residentes de Alcalá, 20.246 no votaron en las últimas generales.",
    "## Del 45 % al 82 % según la sección",
    "En 2023, las 11 secciones de Alcalá con una participación inferior al 60 % sumaban 12.849 electores, el 21,6 % del censo municipal. En abril de 2019, la cita con más participación de las cuatro, solo cuatro secciones bajaron de ese umbral.",
    "Las diferencias se repiten de una elección a otra. La sección de las calles Pino Blanco, Pino Real y Pino Piñonero fue la de mayor participación en las tres últimas generales, siempre por encima del 77 %, y en 2023 llegó al 81,9 %. La de la avenida de Salud Gutiérrez y las calles Pintor Luna Rubio y Maestro José Gandulfo no pasó del 52 % en ninguna y en 2023 se quedó en el 45,4 %.",
    "De las 40 secciones que han conservado un tamaño parecido en las cuatro citas, 39 votaron menos en 2023 que en abril de 2019 y 24 votaron menos que en 2016.",
    "El domingo, el Ministerio del Interior ofrecerá dos avances de participación, a las 14.00 y a las 18.00. En julio de 2023 había votado en Alcalá el 42,3 % del censo a las 14.00 y el 51,6 % a las 18.00.",
    "Las cifras se calculan sobre el censo de residentes en España y no incluyen el voto de los alcalareños que viven en el extranjero. El dato municipal de 2016 (65,5 %) procede del fichero de resultados por municipio de Interior; la suma de las secciones de la pieza del 23 de noviembre, que no recoge una parte del censo de aquel año, daba un 66,2 %.",
    "<span class='howto'><b>Para votar el domingo 29 de noviembre.</b> Horario: de 9.00 a 20.00; quien esté a esa hora en el colegio o en su acceso todavía puede votar. Identificación: DNI físico o digital (aplicación MiDNI), pasaporte o permiso de conducir, originales y con fotografía; el pasaporte y el permiso de conducir valen aunque estén caducados. No sirven las fotocopias ni el resguardo del DNI en trámite. Dónde votar: lo indica la tarjeta censal, que se envía desde el 2 de noviembre; también se consulta en la sede electrónica del INE con Cl@ve y en el teléfono de la Oficina del Censo Electoral, 900 343 232. Quien trabaje el domingo tiene derecho a hasta cuatro horas retribuidas para votar. Quien pidió el voto por correo debe entregarlo en Correos dentro del plazo fijado por la Junta Electoral Central (<a href='#voto-correo-plazo-ampliado-jueves-26-noviembre-29n'>plazo de entrega en Alcalá</a>). Fuentes: Ministerio del Interior y Junta Electoral Central. Datos de participación: Infoelectoral, resultados por municipio y por mesa de 2016 a 2023. Próxima actualización: el lunes 30 de noviembre, con los resultados del 29N en Alcalá.</span>"
   ],
   "seo": [
    "participacion-alcala-generales-secciones-29n",
    "Participación en Alcalá: generales de 2016 a 2023 y guía 29N",
    "Alcalá de Guadaíra votó menos que la provincia en las generales de 2016 a 2023 y 11 secciones bajaron del 60 % en 2023. Cómo votar el domingo 29N.",
    [
     "participación electoral",
     "elecciones generales 29N",
     "secciones censales",
     "Ministerio del Interior",
     "DNI digital",
     "cómo votar"
    ]
   ]
  },
  {
   "id": "campus-navidad-multideportivas-malasmananas-distrito-sur",
   "sec": "deportes",
   "kicker": "Deporte base",
   "iso": "2026-11-26",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/agenda/2026/december/2163/actividades-multideportivas-de-navidad",
   "title": "Alcalá abre la inscripción del campus deportivo de Navidad para 100 niños de 4 a 14 años",
   "sub": "Las Actividades Multideportivas se celebran seis días entre el 28 de diciembre y el 8 de enero en los complejos de Malasmañanas y Distrito Sur",
   "caption": "Cartel del Campus de Navidad de la Delegación de Deportes de Alcalá de Guadaíra.",
   "foto": "campus-navidad-multideportivas-cartel-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra tiene abierta la inscripción de las Actividades Multideportivas de Navidad, para niños y niñas de entre 4 y 14 años.",
    "El campus se celebra los días 28, 29 y 30 de diciembre y 4, 7 y 8 de enero en los complejos deportivos Malasmañanas y Distrito Sur, con 50 plazas en cada uno.",
    "El horario es de 9.00 a 14.00, con aula matinal de 8.00 a 9.00 y aula de recogida de 14.00 a 15.00."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha abierto la inscripción de las Actividades Multideportivas de Navidad, un campus para niños y niñas de entre 4 y 14 años que se celebrará seis días de las vacaciones escolares en los complejos deportivos Malasmañanas y Distrito Sur, con 50 plazas en cada instalación.",
    "El programa lo organiza la Delegación de Deportes, que dirige Pedro Gracia, y ocupa los días 28, 29 y 30 de diciembre y 4, 7 y 8 de enero. Son días laborables de las vacaciones escolares de Navidad. En total, el Ayuntamiento ofrece 100 plazas entre las dos sedes.",
    "## Qué incluye",
    "Según la información municipal, la programación combina talleres, manualidades, juegos tradicionales y distintas disciplinas deportivas. El Ayuntamiento la presenta como una alternativa educativa y de ocio para el periodo navideño.",
    "Cada jornada va de 9.00 a 14.00. Las familias pueden usar además un aula matinal de 8.00 a 9.00 y un aula lúdica o de recogida de 14.00 a 15.00, de modo que la actividad puede cubrir de 8.00 a 15.00.",
    "La información municipal no detalla el precio de la inscripción, si las aulas matinal y de recogida tienen un coste aparte ni la fecha en que se cierra el plazo. Todo ello debe consultarse en el formulario de inscripción en línea.",
    "## Las dos sedes",
    "El complejo de Malasmañanas acoge también la piscina cubierta Los Alcores, que el Ayuntamiento reabrió tras una puesta a punto en agosto. El Distrito Sur reunió el 20 de noviembre a cientos de escolares en la <a href='#jornada-infancia-xii-paz-y-bien-20-noviembre'>XII Jornada por la Infancia</a>.",
    "El campus se suma a las Escuelas Deportivas Alcalareñas, que este curso ofrecen 19 disciplinas para unos 4.000 menores con la colaboración de 21 clubes y entidades de la ciudad, según el Ayuntamiento.",
    "<span class='howto'><b>Actividades Multideportivas de Navidad.</b> Para niños y niñas de 4 a 14 años. Días: 28, 29 y 30 de diciembre y 4, 7 y 8 de enero. Sedes: complejos deportivos Malasmañanas y Distrito Sur (50 plazas en cada uno). Horario: 9.00 a 14.00; aula matinal de 8.00 a 9.00 y aula de recogida de 14.00 a 15.00. Inscripción en línea: alcalaguadaira.procesasistemas.com/cgi-bin/inFini. Organiza: Delegación de Deportes del Ayuntamiento de Alcalá de Guadaíra.</span>"
   ],
   "seo": [
    "campus-navidad-actividades-multideportivas-alcala",
    "Campus de Navidad en Alcalá: inscripción para 4 a 14 años",
    "Alcalá de Guadaíra abre la inscripción de sus Actividades Multideportivas de Navidad: 100 plazas para niños de 4 a 14 años en Malasmañanas y Distrito Sur.",
    [
     "Actividades Multideportivas de Navidad",
     "campus de Navidad",
     "Delegación de Deportes",
     "Malasmañanas",
     "Distrito Sur",
     "deporte base"
    ]
   ],
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "hora": "07:54"
  },
  {
   "id": "25n-acto-institucional-centro-igualdad-marchas-escolares",
   "sec": "alcala",
   "kicker": "25N",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=kWkauvpYWE8&t=155s",
   "title": "Alcalá pide implicación social contra la violencia machista en el 25N y reclama un juzgado específico",
   "sub": "El acto institucional en el Centro de la Igualdad dio voz a alumnado de Secundaria y a la Asociación Alcalareña de Educación Especial, mientras los colegios marchaban hasta el Parque Centro",
   "caption": "Alumnas del IES Cristóbal de Monroy, durante el acto institucional del 25N en el Centro de la Igualdad de Alcalá de Guadaíra.",
   "foto": "25n-acto-institucional-centro-igualdad-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra celebró el miércoles 25 de noviembre el acto institucional del Día Internacional de la Eliminación de la Violencia contra las Mujeres en el Centro de la Igualdad.",
    "La creadora de contenido Alba Guisado Olivares leyó el manifiesto; intervinieron alumnas del IES Cristóbal de Monroy y usuarios de la Asociación Alcalareña de Educación Especial.",
    "La alcaldesa, Ana Isabel Jiménez, dijo que el Ayuntamiento está solicitando un juzgado específico de violencia de género en Alcalá.",
    "Los centros educativos recorrieron la ciudad hasta el Parque Centro en la marcha escolar del 25N."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra conmemoró el miércoles 25 de noviembre el Día Internacional de la Eliminación de la Violencia contra las Mujeres con un acto institucional en el Centro de la Igualdad, en el que reclamó la implicación de toda la sociedad. Los colegios marcharon esa mañana hasta el Parque Centro.",
    "El acto reunió a miembros de la corporación municipal y a vecinos. La lectura del manifiesto institucional corrió a cargo de Alba Guisado Olivares, creadora de contenido alcalareña que trabaja temas de concienciación social. El texto pide a toda la sociedad, «especialmente a los hombres y a los jóvenes», su máxima implicación contra la desigualdad y la violencia de género.",
    "Alumnas del IES Cristóbal de Monroy hablaron de los celos y del control en las relaciones de pareja jóvenes, y usuarios de la Asociación Alcalareña de Educación Especial (AAEE) pusieron el foco en las mujeres con discapacidad. «Pedimos que ninguna mujer con o sin discapacidad tenga que vivir la violencia en silencio», dijeron en su intervención.",
    "## Un juzgado específico",
    "La alcaldesa, Ana Isabel Jiménez (PSOE), explicó a El Panadero que el Ayuntamiento trabaja con los juzgados, la Fiscalía y la Policía Nacional y que está solicitando «un juzgado específico de violencia de género en Alcalá». Según el Ayuntamiento, la alcaldesa insistió además en la prevención en el entorno digital, el más usado por los jóvenes. La delegada de Igualdad, Abril Castillo Sarmiento (PSOE), recordó la programación <a href='#alcala-actua-violencia-genero-25n-2026'>«Alcalá Actúa contra la Violencia de Género»</a>, financiada con fondos del Pacto de Estado.",
    "Andalucía por Sí, por su parte, ha pedido con motivo del 25N reforzar las plantillas y los medios del Partido Judicial de Alcalá, de la Fiscalía especializada y de las unidades policiales del sistema VioGén, aplicar el Plan Municipal de Igualdad y dar una dotación estable al Centro Municipal de Información a la Mujer.",
    "## La marcha de los colegios",
    "En la marcha educativa, escolares de distintos centros confluyeron en el Parque Centro, donde interpretaron en lengua de signos el estribillo de la canción «Ni una más». El Ayuntamiento colabora con la cesión de camisetas.",
    "Según la Delegación del Gobierno contra la Violencia de Género, con datos a 23 de noviembre, 47 mujeres han sido asesinadas en España por sus parejas o exparejas en 2026, 12 de ellas en Andalucía. Desde 2003 la cifra asciende a 1.388 en España y a 282 en Andalucía.",
    "<span class='howto'>Ayuda: el teléfono 016 atiende a víctimas de violencia de género las 24 horas, es gratuito y no deja rastro en la factura. En Alcalá, el Centro Municipal de Información a la Mujer ofrece atención y asesoramiento. En una emergencia, 112.</span>"
   ],
   "seo": [
    "25n-alcala-acto-institucional-centro-igualdad",
    "25N en Alcalá: acto institucional y marcha escolar",
    "Alcalá de Guadaíra conmemora el 25N en el Centro de la Igualdad, pide implicación social y reclama un juzgado de violencia de género para la ciudad.",
    [
     "25N",
     "violencia de género",
     "Centro de la Igualdad",
     "Ana Isabel Jiménez",
     "IES Cristóbal de Monroy",
     "Asociación Alcalareña de Educación Especial"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "voto-correo-plazo-ampliado-jueves-26-noviembre-29n",
   "sec": "politica",
   "kicker": "Elecciones 29N",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=kWkauvpYWE8&t=1301s",
   "title": "Los votantes por correo de Alcalá tienen hasta el jueves 26 a las 14.00 para entregar su voto",
   "sub": "La Junta Electoral Central ha ampliado un día el plazo, que acababa este miércoles; solo afecta a quienes ya pidieron votar por correo",
   "caption": "Oficina de Correos en Alcalá de Guadaíra.",
   "foto": "voto-correo-plazo-jueves-26-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Junta Electoral Central ha ampliado hasta el jueves 26 de noviembre el plazo para depositar el voto por correo de las generales del 29 de noviembre.",
    "El sobre se entrega en persona en cualquier oficina de Correos, en su horario habitual y en todo caso antes de las 14.00.",
    "La ampliación solo afecta a quienes solicitaron el voto por correo, cuyo plazo de solicitud terminó el 19 de noviembre."
   ],
   "body": [
    "Los electores de Alcalá de Guadaíra que pidieron votar por correo en las elecciones generales del domingo 29 de noviembre tienen hasta el jueves 26, como máximo a las 14.00, para entregar su voto en una oficina de Correos. La Junta Electoral Central ha ampliado un día el plazo, que inicialmente terminaba el miércoles 25.",
    "La medida solo afecta a quienes ya solicitaron esta modalidad y han recibido la documentación electoral en casa. El plazo para pedir el voto por correo terminó el 19 de noviembre, así que no es posible solicitarlo ahora.",
    "## Cómo se entrega",
    "El elector debe llevar personalmente a cualquier oficina postal el sobre con la documentación y acreditar su identidad con el DNI, el pasaporte o el permiso de conducir. La entrega se hace dentro del horario habitual de cada oficina y, en cualquier caso, antes de las dos de la tarde del jueves.",
    "Si no puede acudir, puede autorizar a otra persona para que lo entregue en su nombre. Para ello hace falta una autorización firmada por el elector y copia de los documentos de identidad de los dos.",
    "Correos trasladará después los sobres a las mesas electorales que correspondan, para que se cuenten el domingo junto al resto de papeletas.",
    "En las generales de 2023, el voto por correo registró en toda España una demanda muy superior a la habitual por coincidir con el verano. En esta convocatoria de noviembre no se ha dado a conocer el número de solicitudes en Alcalá.",
    "Para quien quiera contexto antes de votar, El Panadero publicó el 23 de noviembre <a href='#alcala-generales-secciones-2016-2023'>cómo votó la ciudad por secciones entre 2016 y 2023</a>.",
    "<span class='howto'><b>Voto por correo, elecciones generales del 29N.</b> Último día para entregarlo: jueves 26 de noviembre, hasta las 14.00 como máximo. Dónde: cualquier oficina de Correos. Qué llevar: el sobre con la documentación y el DNI, pasaporte o permiso de conducir. Por otra persona: autorización firmada y copias de los documentos de ambos.</span>"
   ],
   "seo": [
    "voto-correo-plazo-ampliado-jueves-26-noviembre",
    "Voto por correo: plazo hasta el jueves 26 a las 14.00",
    "La Junta Electoral Central amplía hasta el jueves 26 de noviembre, a las 14.00, el plazo para entregar en Correos el voto de las generales del 29N.",
    [
     "voto por correo",
     "elecciones generales 29N",
     "Junta Electoral Central",
     "Correos",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "clinicas-vivanta-oralis-cierre-pacientes-reclamar",
   "sec": "alcala",
   "kicker": "Consumo",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=kWkauvpYWE8&t=1142s",
   "title": "Los pacientes de Vivanta en Alcalá pueden reclamar el dinero de los tratamientos que quedaron sin hacer",
   "sub": "El grupo Aestes Dental, dueño de Vivanta y Oralis, está en liquidación; Consumo de la Junta explica cómo pedir la devolución y el historial clínico",
   "caption": "Fachada de una clínica de Vivanta Dental.",
   "foto": "clinicas-vivanta-oralis-cierre-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El cierre de clínicas del grupo Aestes Dental, que opera con las marcas Vivanta y Oralis, afecta también a pacientes de Alcalá de Guadaíra, donde la cadena tiene un centro.",
    "La compañía está en concurso de acreedores y en fase de liquidación.",
    "Los afectados pueden reclamar a la administración concursal, FTI & Partners, la parte pagada de los tratamientos no realizados.",
    "Quien financió el tratamiento con un crédito vinculado puede pedir a la financiera que suspenda los pagos, pero antes debe reclamar por escrito."
   ],
   "body": [
    "Los pacientes de las clínicas dentales Vivanta y Oralis con tratamientos pagados o financiados a medias pueden reclamar la devolución proporcional de lo que no recibieron. El cierre de centros del grupo Aestes Dental, en concurso de acreedores y en fase de liquidación, afecta también a vecinos de Alcalá de Guadaíra, donde la cadena tiene una clínica.",
    "La Dirección General de Consumo de la Junta de Andalucía ha detallado los pasos. El primero es reunir toda la documentación: contratos, presupuestos, facturas, justificantes de pago y cualquier papel que permita acreditar qué parte del tratamiento se hizo y cuál quedó pendiente.",
    "## A quién reclamar",
    "Las cantidades se comunican a la administración concursal, que gestiona FTI & Partners. El plazo ordinario para comunicar créditos ya ha terminado, pero Consumo aconseja enviar la documentación cuanto antes y preguntar si se admiten solicitudes fuera de plazo.",
    "Los pacientes tienen derecho a pedir copia de su historia clínica: historial odontológico, radiografías, fotografías, pruebas diagnósticas e informes, además de información sobre lo hecho y lo pendiente. Se solicita en los formularios de las webs de Vivanta y Oralis.",
    "## Si hay un crédito",
    "Quien pagó con un crédito vinculado puede pedir a la entidad financiera que suspenda los pagos y devuelva lo correspondiente a los servicios no prestados. La Junta advierte de que, antes de dejar de pagar cuotas, hay que presentar una reclamación formal por escrito a la financiera, para evitar consecuencias por impago.",
    "Ni el grupo ni la administración concursal han informado públicamente de cuántos pacientes de la clínica de Alcalá están afectados.",
    "<span class='howto'><b>Afectados por Vivanta y Oralis.</b> 1) Reúna contratos, facturas y justificantes. 2) Comunique lo pagado y no recibido a la administración concursal (FTI & Partners). 3) Pida su historia clínica en los formularios de las webs de Vivanta y Oralis. 4) Si hay crédito vinculado, reclame por escrito a la financiera antes de dejar de pagar. Dudas: Oficina Municipal de Información al Consumidor (OMIC) del Ayuntamiento o el servicio gratuito Consumo Responde de la Junta.</span>"
   ],
   "seo": [
    "vivanta-oralis-cierre-pacientes-reclamar-alcala",
    "Vivanta y Oralis: cómo reclamar en Alcalá",
    "Los pacientes de Vivanta y Oralis en Alcalá pueden reclamar lo pagado y no recibido tras la liquidación de Aestes Dental. Pasos que indica Consumo.",
    [
     "Vivanta",
     "Oralis",
     "Aestes Dental",
     "consumo",
     "OMIC",
     "Consumo Responde"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "precio-vivienda-alcala-sube-18-5-por-ciento-tercer-trimestre",
   "sec": "economia",
   "kicker": "Vivienda",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=63vzr2jOBaw&t=141s",
   "title": "El valor de la vivienda en Alcalá sube un 18,5 % en un año, la mayor subida del área metropolitana",
   "sub": "El barómetro de Global Analytics del tercer trimestre sitúa a Alcalá por delante de Camas, Tomares, Castilleja de la Cuesta y Dos Hermanas",
   "caption": "Viviendas en una calle de Alcalá de Guadaíra.",
   "foto": "vivienda-precio-alcala-18-por-ciento-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El valor residencial de Alcalá de Guadaíra subió un 18,5 % interanual en el tercer trimestre de 2026, según el barómetro de Global Analytics.",
    "Es el mayor incremento del área metropolitana de Sevilla, donde el valor medio es de 1.872 euros por metro cuadrado, un 12,6 % más.",
    "Idealista situaba en septiembre el precio anunciado en Alcalá en 1.704 euros por metro cuadrado, un 13,4 % más que un año antes.",
    "El Ministerio de Vivienda daba un valor tasado de la vivienda libre de unos 1.701 euros por metro cuadrado en el segundo trimestre, un 17,6 % más."
   ],
   "body": [
    "El valor de la vivienda en Alcalá de Guadaíra subió un 18,5 % entre el tercer trimestre de 2025 y el de 2026, el mayor incremento del área metropolitana de Sevilla. Así lo recoge el último barómetro del mercado residencial de Andalucía, elaborado por la consultora Global Analytics.",
    "La subida de Alcalá supera a la de Camas, del 16,2 %, y a las de Tomares, Castilleja de la Cuesta y Dos Hermanas, todas por encima del 15 %. En el conjunto del área metropolitana el valor medio alcanza los 1.872 euros por metro cuadrado, con un crecimiento anual del 12,6 %. En Sevilla capital se sitúa en 2.740 euros, un 11,2 % más que hace un año.",
    "## Otros indicadores",
    "Otras fuentes apuntan en la misma dirección. El portal Idealista situaba en septiembre el precio de la vivienda anunciada en Alcalá en 1.704 euros por metro cuadrado, un 13,4 % más que un año antes. Por zonas, el centro registraba la mayor subida, del 24,9 %, y Pinar de Oromana la más moderada, del 3,7 %.",
    "Los datos del Ministerio de Vivienda del segundo trimestre situaban el valor tasado de la vivienda libre en Alcalá en torno a 1.701 euros por metro cuadrado, con un aumento anual del 17,6 %.",
    "Las tres fuentes miden cosas distintas: el barómetro estima el valor residencial, Idealista recoge lo que piden los vendedores en sus anuncios y el Ministerio, el valor de tasación. Por eso las cifras no coinciden, aunque todas reflejan una subida de dos dígitos.",
    "## Debate en campaña",
    "El dato ha entrado en la campaña. El PP de Alcalá ha publicado en su perfil de Facebook que la subida se debe a que no se ha construido vivienda pública en una década, una crítica al gobierno de Ana Isabel Jiménez (PSOE). El Ayuntamiento sostiene que proyectos como el de Los Cercadillos, con 600 viviendas protegidas, buscan facilitar el acceso a la vivienda.",
    "El Panadero ya informó en octubre de la <a href='#vivienda-compraventas-precio-2026'>evolución de las compraventas y los precios en la ciudad</a>.",
    "<span class='howto'>Datos: barómetro del mercado residencial de Andalucía de Global Analytics (tercer trimestre de 2026), Idealista (septiembre de 2026) y Ministerio de Vivienda (valor tasado, segundo trimestre de 2026).</span>"
   ],
   "seo": [
    "precio-vivienda-alcala-sube-18-por-ciento",
    "La vivienda en Alcalá sube un 18,5 % en un año",
    "El valor de la vivienda en Alcalá de Guadaíra sube un 18,5 % interanual, la mayor subida del área metropolitana de Sevilla según Global Analytics.",
    [
     "precio de la vivienda",
     "Global Analytics",
     "Idealista",
     "Ministerio de Vivienda",
     "área metropolitana de Sevilla",
     "Pinar de Oromana"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "contrato-comidas-domicilio-2-millones-58944-comidas",
   "sec": "alcala",
   "kicker": "Servicios sociales",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=63vzr2jOBaw&t=397s",
   "title": "Alcalá adjudica por más de dos millones el servicio de comidas a domicilio para mayores y dependientes",
   "sub": "El contrato, para cuatro años, prevé 58.944 comidas al año para usuarios de la ayuda a domicilio y menores de familias con pocos recursos",
   "caption": "Preparación de menús en bandejas para el reparto a domicilio.",
   "foto": "comidas-domicilio-contrato-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra ha adjudicado el servicio de comidas a domicilio por más de dos millones de euros para cuatro años.",
    "El contrato prevé 58.944 comidas al año, con primer y segundo plato, pan y postre.",
    "Va dirigido a mayores y dependientes del Servicio de Ayuda a Domicilio con esta prestación prescrita y a menores en riesgo de exclusión social.",
    "El personal de reparto podrá avisar a los servicios sociales de incidencias que detecte en los domicilios."
   ],
   "body": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra ha adjudicado el servicio de comidas a domicilio vinculado a la ayuda a domicilio por un importe de más de dos millones de euros para los próximos cuatro años. El contrato prevé 58.944 comidas al año.",
    "El servicio se dirige sobre todo a personas mayores y dependientes que son usuarias del Servicio de Ayuda a Domicilio y que tienen prescrita esta prestación. Incluye también a menores en riesgo de exclusión social de familias con escasos recursos económicos.",
    "## Qué incluye",
    "La empresa adjudicataria se encarga de elaborar, conservar, envasar, transportar y entregar las comidas en casa, con un sistema de línea refrigerada. Cada menú tendrá primer plato, segundo, pan y postre, preferentemente fruta fresca de temporada.",
    "Según la teniente de alcaldesa de Cohesión Social y delegada de Servicios Sociales, Rocío Bastida (PSOE), los menús se adaptan a las necesidades y a las prescripciones médicas de cada usuario. La delegada explicó a El Panadero que la prestación facilita la vida a personas que no tienen movilidad o suficiente apoyo familiar.",
    "El contrato incluye un seguimiento de los usuarios: el personal que reparte las comidas podrá comunicar a los servicios sociales las incidencias o situaciones de vulnerabilidad que detecte en los domicilios.",
    "## Junto a la ayuda a domicilio",
    "La adjudicación llega después de que la Junta de Gobierno diera luz verde al nuevo contrato del Servicio de Ayuda a Domicilio, de más de 15 millones de euros para dos años y que atiende a más de un millar de personas, según la misma delegación.",
    "El Ayuntamiento no ha detallado en esta información qué empresa ha resultado adjudicataria ni cuándo empezará a prestar el servicio.",
    "<span class='howto'><b>Comidas a domicilio.</b> Para quién: usuarios del Servicio de Ayuda a Domicilio con la prestación prescrita y menores en riesgo de exclusión. Cómo acceder: a través de los Servicios Sociales municipales. Contrato: más de 2 millones de euros, cuatro años, 58.944 comidas al año.</span>"
   ],
   "seo": [
    "contrato-comidas-domicilio-alcala-mayores-dependientes",
    "Comidas a domicilio en Alcalá: contrato de 2 millones",
    "Alcalá adjudica por más de dos millones y cuatro años el servicio de comidas a domicilio: 58.944 comidas al año para mayores, dependientes y menores.",
    [
     "comidas a domicilio",
     "Servicio de Ayuda a Domicilio",
     "Servicios Sociales",
     "Junta de Gobierno Local",
     "mayores",
     "dependencia"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "cercadillos-centro-deportivo-obras-50-por-ciento",
   "sec": "deportes",
   "kicker": "Instalaciones",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10034/las-obras-del-centro-deportivo-de-los-cercadillos-se-encuentran-al-50-de-su-ejecucion",
   "title": "Las obras del Centro Deportivo Los Cercadillos llegan al 50 % con la pista de atletismo de ocho calles",
   "sub": "El Ayuntamiento cifra la inversión en más de 7 millones; ahora se trabaja en el edificio principal y en un graderío de 531 asientos",
   "caption": "La alcaldesa, Ana Isabel Jiménez, recorre las obras del Centro Deportivo Los Cercadillos junto a técnicos.",
   "foto": "cercadillos-obras-50-por-ciento-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "Las obras del Centro Deportivo Los Cercadillos, en Alcalá de Guadaíra, están al 50 % de ejecución, según el Ayuntamiento.",
    "La instalación tendrá una pista de atletismo de ocho calles y 400 metros de cuerda apta para competiciones oficiales.",
    "El graderío tendrá 531 asientos, 18 adaptados, y el recinto 80 plazas de aparcamiento.",
    "La inversión supera los 7 millones de euros, según la alcaldesa, Ana Isabel Jiménez."
   ],
   "body": [
    "Las obras del Centro Deportivo Los Cercadillos, en Alcalá de Guadaíra, han alcanzado el 50 % de su ejecución, según ha informado el Ayuntamiento tras la visita de la alcaldesa, Ana Isabel Jiménez (PSOE), el miércoles 25 de noviembre. Los trabajos se centran ahora en el edificio principal y en el graderío.",
    "La pieza central será una pista de atletismo de ocho calles y 400 metros de cuerda, con la que la ciudad podrá acoger competiciones oficiales. El proyecto incluye zonas para salto de longitud y triple, altura, pértiga y lanzamientos de peso y jabalina, además de una pista polifuncional en el espacio central para otros deportes.",
    "## Graderío y edificio",
    "El graderío tendrá 531 asientos, 18 de ellos adaptados a personas con movilidad reducida. La edificación, de 1.593 metros cuadrados, albergará vestuarios, gimnasio, zonas administrativas, consulta médica y espacio para los clubes. El recinto tendrá 80 plazas de aparcamiento, arbolado perimetral y una plaza pública nueva en la calle Hogaza, que se reurbaniza.",
    "La alcaldesa cifró la inversión en más de 7 millones de euros y calificó el centro como «uno de los proyectos clave de este mandato». Según el Ayuntamiento, la instalación servirá al deporte federado y al deporte base, y también para actividades educativas.",
    "## 600 viviendas protegidas",
    "El centro deportivo será el eje de un nuevo ámbito urbano de 56.000 metros cuadrados de suelo municipal, fruto de un acuerdo entre el Ayuntamiento y la Fundación San Francisco de Paula. Allí se levantarán 600 viviendas, todas protegidas, según la información municipal.",
    "El Ayuntamiento no ha precisado en esta información la fecha prevista de finalización de las obras ni la empresa que las ejecuta. Los Cercadillos ya apareció en el debate de las <a href='#presupuestos-2027-aportaciones-grupos'>aportaciones de los grupos al presupuesto de 2027</a>.",
    "<span class='howto'><b>Centro Deportivo Los Cercadillos.</b> Estado: 50 % de ejecución (25 de noviembre de 2026). Inversión: más de 7 millones de euros. Equipamiento: pista de atletismo de ocho calles, pista polifuncional, graderío de 531 asientos, 80 plazas de aparcamiento.</span>"
   ],
   "seo": [
    "centro-deportivo-cercadillos-obras-50-por-ciento",
    "Los Cercadillos, al 50 %: pista de atletismo en Alcalá",
    "Las obras del Centro Deportivo Los Cercadillos de Alcalá llegan al 50 %: pista de atletismo de ocho calles, graderío de 531 asientos y más de 7 millones.",
    [
     "Los Cercadillos",
     "pista de atletismo",
     "instalaciones deportivas",
     "Ana Isabel Jiménez",
     "Fundación San Francisco de Paula",
     "vivienda protegida"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "permiso-nacimiento-20-semanas-boe-1-marzo-2027",
   "sec": "economia",
   "kicker": "Conciliación",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=kWkauvpYWE8&t=924s",
   "title": "El permiso por nacimiento sube a 20 semanas por progenitor; la semana extra se podrá pedir desde marzo",
   "sub": "Las familias monoparentales tendrán 34 semanas; la norma, publicada en el BOE, entra en vigor el jueves 26 de noviembre",
   "caption": "Una mujer embarazada en su casa. Imagen de recurso.",
   "foto": "permiso-nacimiento-20-semanas-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El permiso por nacimiento y cuidado del menor pasa de 19 a 20 semanas por progenitor, retribuidas al 100 %.",
    "Las familias monoparentales tendrán 34 semanas.",
    "El real decreto-ley se publicó en el BOE el miércoles 25 de noviembre y entra en vigor el 26, pero la semana adicional solo podrá disfrutarse desde el 1 de marzo de 2027.",
    "Seis semanas son obligatorias tras el parto, 11 se reparten en el primer año y tres pueden usarse hasta que el menor cumpla ocho años."
   ],
   "body": [
    "El permiso por nacimiento y cuidado del menor pasa de 19 a 20 semanas para cada progenitor, retribuidas al 100 %, y alcanza las 34 semanas en las familias monoparentales. El real decreto-ley que lo regula se publicó el miércoles 25 de noviembre en el Boletín Oficial del Estado (BOE) y se aplica también en Alcalá de Guadaíra.",
    "La norma entra en vigor el jueves 26 de noviembre, pero la semana adicional solo podrá solicitarse y disfrutarse a partir del 1 de marzo de 2027. Se aplicará a los nacimientos y demás situaciones que se produzcan desde la entrada en vigor.",
    "## Cómo se reparte",
    "De las 20 semanas, seis deben disfrutarse de forma obligatoria inmediatamente después del nacimiento. Otras 11 pueden distribuirse de manera flexible durante el primer año de vida del bebé. Las tres restantes se pueden usar de forma acumulada o por semanas hasta que el menor cumpla ocho años.",
    "En las familias monoparentales, las 34 semanas se dividen en seis de descanso obligatorio, 22 durante el primer año y otras seis que pueden disfrutarse hasta los ocho años del menor.",
    "## Adopción y acogimiento",
    "La ampliación se aplica también a la adopción, la guarda con fines de adopción y el acogimiento. Los permisos son individuales e intransferibles: un progenitor no puede ceder sus semanas al otro.",
    "El cambio supone una semana más respecto al permiso que estaba en vigor hasta ahora, de 19 semanas por progenitor.",
    "<span class='howto'><b>Permiso por nacimiento y cuidado del menor.</b> Duración: 20 semanas por progenitor (34 en familias monoparentales), al 100 % del salario. Entrada en vigor: 26 de noviembre de 2026. Semana adicional: disfrutable desde el 1 de marzo de 2027. Reparto: 6 obligatorias tras el nacimiento, 11 en el primer año y 3 hasta los ocho años. La prestación se solicita a la Seguridad Social.</span>"
   ],
   "seo": [
    "permiso-nacimiento-20-semanas-progenitor",
    "Permiso por nacimiento: 20 semanas por progenitor",
    "El permiso por nacimiento sube a 20 semanas por progenitor y 34 en familias monoparentales; la semana extra se podrá disfrutar desde el 1 de marzo de 2027.",
    [
     "permiso por nacimiento",
     "BOE",
     "conciliación",
     "familias monoparentales",
     "Seguridad Social",
     "maternidad y paternidad"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "pena-solea-gala-33-concurso-nacional-cante-diego-benitez",
   "sec": "cultura",
   "kicker": "Flamenco",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=63vzr2jOBaw&t=672s",
   "title": "La Peña Soleá entrega el sábado 28 los premios de su 33.º Concurso Nacional de Cante con el alcalareño Diego Benítez en la final",
   "sub": "La jaenera Julia Moreno «La Debla» y el gaditano Pedro Cortés Cortés, ganadores; actúan también los cinco finalistas desde las 21.00",
   "caption": "Un cantaor y un guitarrista en el escenario de la Peña Cultural Flamenca Soleá de Alcalá, en una imagen de archivo.",
   "foto": "pena-solea-gala-concurso-cante-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Peña Cultural Flamenca Soleá de Alcalá de Guadaíra celebra el sábado 28 de noviembre, a las 21.00, la gala de ganadores y finalistas de su 33.º Concurso Nacional de Cante Flamenco.",
    "Julia Moreno «La Debla», de Jaén, recibe el premio Manolito el de María, y Pedro Cortés Cortés, de San Roque (Cádiz), el premio Soleá de Alcalá.",
    "Entre los cinco finalistas está el cantaor alcalareño Diego Benítez."
   ],
   "body": [
    "La Peña Cultural Flamenca Soleá de Alcalá de Guadaíra celebra el sábado 28 de noviembre, a las 21.00, la gala de ganadores y finalistas de su Concurso Nacional de Cante Flamenco, que llega a su 33.ª edición. En la final actuará el cantaor alcalareño Diego Benítez.",
    "Los dos ganadores de este año son Julia Moreno, conocida como «La Debla», procedente de la provincia de Jaén, que recibirá el premio Manolito el de María, y Pedro Cortés Cortés, de San Roque (Cádiz), que se lleva el premio Soleá de Alcalá.",
    "## Cinco finalistas",
    "El premio Manolito el de María lleva el nombre de un cantaor alcalareño de referencia en la soleá de Alcalá, el estilo que también da nombre a la peña. El otro galardón, el premio Soleá de Alcalá, remite a ese mismo cante, uno de los más ligados a la historia flamenca de la ciudad y al que la peña dedica buena parte de su actividad.",
    "Junto a ellos subirán al escenario los cinco finalistas: Iván Segura «El Chasquío», de Alicante; Susana Romero, de Vejer de la Frontera (Cádiz); Juan Ruiz «El Juana», de Sevilla; Stefano Molín «El Nani», de Huelva, y el alcalareño Diego Benítez.",
    "El concurso reúne cada año a cantaores de distintas provincias y comunidades autónomas. Es una de las citas centrales del calendario de la peña, que mantiene una programación estable de cante y actividades de difusión.",
    "## Una peña con escuela",
    "La Soleá abrió sus puertas la semana pasada a <a href='#pena-solea-125-alumnos-institutos-dia-flamenco'>125 alumnos de tres institutos de Alcalá con motivo del Día del Flamenco</a>, una de sus actividades con centros educativos.",
    "El fin de semana musical de la ciudad se completa el domingo 29 con el <a href='#concierto-santa-cecilia-auditorio-riberas-29-noviembre'>concierto de Santa Cecilia en el Auditorio Riberas del Guadaíra</a>.",
    "<span class='howto'><b>Gala del 33.º Concurso Nacional de Cante Flamenco.</b> Sábado 28 de noviembre de 2026, a las 21.00. Organiza: Peña Cultural Flamenca Soleá de Alcalá. Ganadores: Julia Moreno «La Debla» (premio Manolito el de María) y Pedro Cortés Cortés (premio Soleá de Alcalá). La peña no ha detallado el precio de la entrada.</span>"
   ],
   "seo": [
    "pena-solea-gala-concurso-nacional-cante-flamenco",
    "Peña Soleá: gala del 33.º Concurso de Cante, el sábado 28",
    "La Peña Soleá de Alcalá celebra el sábado 28 la gala de su 33.º Concurso Nacional de Cante Flamenco, con el alcalareño Diego Benítez entre los finalistas.",
    [
     "Peña Soleá",
     "cante flamenco",
     "Diego Benítez",
     "concurso nacional de cante",
     "La Debla",
     "flamenco en Alcalá"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "cabalgata-reyes-2027-construccion-carrozas-taller-grinch",
   "sec": "cultura",
   "kicker": "Navidad",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=63vzr2jOBaw&t=815s",
   "title": "La Cabalgata de Reyes de Alcalá construye más de una docena de carrozas nuevas para el 5 de enero",
   "sub": "Diseñadores y carpinteros trabajan desde hace meses en el taller; habrá una carroza dedicada al Castillo y el viernes 27 sigue el ciclo de teatro infantil con «El Grinch»",
   "caption": "Una carroza de la Cabalgata de Reyes en construcción en su taller.",
   "foto": "cabalgata-carrozas-2027-taller-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Cabalgata de Reyes Magos de Alcalá de Guadaíra estrena cada 5 de enero prácticamente todas sus carrozas: más de una docena de creaciones nuevas al año.",
    "Solo se conservan los tronos de los Reyes Magos, que se actualizan.",
    "Una de las carrozas de 2027 estará dedicada al Castillo de Alcalá.",
    "El IX Ciclo de Teatro Infantil de la Cabalgata sigue el viernes 27 de noviembre con «El Grinch» en la plaza de los Molinos, con entrada gratuita."
   ],
   "body": [
    "La Cabalgata de Reyes Magos de Alcalá de Guadaíra trabaja desde hace meses en la construcción de las carrozas que saldrán a la calle el 5 de enero de 2027. Como cada año, el cortejo estrenará prácticamente todas: son más de una docena de creaciones nuevas, que diseñadores y carpinteros levantan en su taller.",
    "La única excepción son los tronos de los Reyes Magos, que se conservan de un año a otro y se someten a trabajos de actualización para mantenerlos en buen estado.",
    "## Del boceto a la estructura",
    "El proceso empieza mucho antes de la Navidad. Primero llega el diseño; después, la estructura, y por último los elementos decorativos y los acabados. «Esto es poner la obra en tres dimensiones», explicó a El Panadero uno de los diseñadores, que destacó el momento en que los niños suben a las carrozas y «le dan vida» al tema.",
    "El mismo diseñador contó que le gusta cuidar la temática local y recordó que en ediciones anteriores el cortejo ha llevado versiones del tren de Alcalá, de los molinos y del Hotel Oromana. Para 2027 prepara una carroza dedicada al Castillo.",
    "Los responsables del taller subrayan que la seguridad de las estructuras es una de sus prioridades, para que el cortejo salga a la calle con garantías.",
    "## Teatro infantil",
    "Mientras tanto, la Cabalgata mantiene su IX Ciclo de Teatro Infantil, según ha publicado en su perfil de Facebook. El viernes 27 de noviembre, a las 18.00, la compañía Pequeños Duendes representa «El Grinch» en la plaza de los Molinos. El sábado 12 de diciembre, a las 12.00, Teatro Divertido pondrá en escena «Cazadores de tesoros» en la calle Antonio Guerra Ojeda.",
    "El cartel de la próxima salida ya se conoce: lo firma <a href='#cartel-cabalgata-reyes-2027-mariano-fernandez-goncer'>Mariano Fernández Goncer</a>.",
    "<span class='howto'><b>Teatro infantil de la Cabalgata.</b> «El Grinch»: viernes 27 de noviembre, 18.00, plaza de los Molinos. «Cazadores de tesoros»: sábado 12 de diciembre, 12.00, calle Antonio Guerra Ojeda. Entrada gratuita, para todos los públicos. Cabalgata de Reyes: 5 de enero de 2027.</span>"
   ],
   "seo": [
    "cabalgata-reyes-alcala-2027-carrozas-taller",
    "Cabalgata de Alcalá: carrozas nuevas para 2027",
    "La Cabalgata de Reyes de Alcalá construye más de una docena de carrozas nuevas para el 5 de enero, una dedicada al Castillo, y sigue su teatro infantil.",
    [
     "Cabalgata de Reyes Magos",
     "carrozas",
     "Navidad en Alcalá",
     "teatro infantil",
     "El Grinch",
     "Castillo de Alcalá"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "agenda-cofrade-triduo-angeles-zambomba-rosario-foro-consejo",
   "sec": "hermandades",
   "kicker": "Agenda cofrade",
   "src": "Hermandad de la Tercera Palabra (Facebook)",
   "fuente_url": "https://www.facebook.com/reel/1653900296179934/",
   "title": "La Madre de Dios de los Ángeles abre su triduo y el Consejo inicia el 1 de diciembre su Foro de Formación",
   "sub": "La Tercera Palabra celebra la función y el besamanos el domingo 29; el Rosario organiza el sábado su IV Zambomba en los Salesianos",
   "caption": "La Madre de Dios de los Ángeles, ataviada para los cultos en su honor.",
   "foto": "tercera-palabra-madre-de-dios-angeles-triduo-of.jpg",
   "fotocredito": "Facebook de la Hermandad de la Tercera Palabra",
   "claves": [
    "La Hermandad de la Tercera Palabra celebra el triduo a la Madre de Dios de los Ángeles los días 25, 26 y 27 de noviembre a las 20.30, y la función principal y el besamanos el domingo 29 a las 11.00.",
    "La Hermandad del Rosario celebra el sábado 28 su IV Zambomba en el patio del Colegio Salesianos desde las 16.30, con Juan Tejero, el grupo Tiritrán y DJ; la entrada cuesta 5 euros con consumición.",
    "El Consejo General de Hermandades y Cofradías abre el 1 de diciembre su Foro de Formación con una ponencia del arcipreste, José Antonio Martínez Jiménez."
   ],
   "body": [
    "La Hermandad de la Tercera Palabra de Alcalá de Guadaíra celebra del miércoles 25 al viernes 27 de noviembre, a las 20.30, el triduo a la Madre de Dios de los Ángeles. La función principal será el domingo 29 a las 11.00 y terminará con devoto besamanos, según ha publicado la hermandad en su perfil de Facebook.",
    "La cofradía ha abierto además un horario para fotógrafos y devotos que quieran fotografiar a la dolorosa: de 19.00 a 20.00 los días del triduo.",
    "## Zambomba del Rosario",
    "La Hermandad del Rosario, que ya <a href='#zambomba-rosario-salesianos-28-noviembre'>anunció a primeros de mes</a> su IV Zambomba en el patio del Colegio Salesianos el sábado 28 de noviembre, ha publicado en Facebook el orden de actuaciones. El programa empieza a las 16.30 con la zambomba de Juan Tejero; a las 18.30 actúa el grupo flamenco Tiritrán y a las 20.00, DJ Alejandroff. La hermandad vende también adornos navideños con sus titulares a beneficio de su bolsa de caridad, a 3 euros la unidad y 5 la pareja.",
    "La entrada cuesta 5 euros e incluye una consumición, un plato de garbanzos, según explicó la hermandad a El Panadero. Se vende en la casa hermandad, a través de los miembros de la junta y en línea. La jornada lleva por lema «Que suenen los villancicos y se encienda la Navidad», tendrá ambigú a precios populares y lo recaudado ayuda a financiar la bolsa de caridad, la restauración de enseres y los estrenos de la cofradía.",
    "Ese mismo sábado, a las 17.30, la Hermandad de la Borriquita celebra su retiro de Adviento en la parroquia de San Agustín, dirigido por el párroco, José Antonio Martínez Jiménez.",
    "## Foro de Formación",
    "El Consejo General de Hermandades y Cofradías de Alcalá abre el martes 1 de diciembre su Foro de Formación con la ponencia «El desafío de evangelizar hoy desde nuestras Hermandades a la luz de la visita del Papa a España». La imparte José Antonio Martínez Jiménez, arcipreste de la ciudad y director espiritual del Consejo, según ha publicado este en Facebook. La inscripción se hace a través de un formulario en línea.",
    "El jueves 26, el Consejo y el Ayuntamiento cierran en el Museo el ciclo de conservación del patrimonio con <a href='#jesus-nazareno-ponencia-restauracion-paso-san-juan-museo'>la presentación del retablo de la Inmaculada y del paso de San Juan</a>.",
    "<span class='howto'><b>Agenda.</b> Triduo a la Madre de Dios de los Ángeles: 25, 26 y 27 de noviembre, 20.30; función y besamanos: domingo 29, 11.00. IV Zambomba del Rosario: sábado 28, desde las 16.30, Colegio Salesianos; entrada, 5 euros con consumición. Retiro de Adviento de la Borriquita: sábado 28, 17.30, San Agustín. Foro de Formación del Consejo: martes 1 de diciembre, inscripción en forms.gle/FMRBp1FkAi8b4gne8.</span>"
   ],
   "seo": [
    "triduo-madre-de-dios-angeles-zambomba-rosario-foro-consejo",
    "Agenda cofrade: triduo de los Ángeles y zambomba",
    "La Tercera Palabra celebra el triduo a la Madre de Dios de los Ángeles, el Rosario su IV Zambomba y el Consejo abre el 1 de diciembre su Foro de Formación.",
    [
     "Hermandad de la Tercera Palabra",
     "Madre de Dios de los Ángeles",
     "Hermandad del Rosario",
     "zambomba",
     "Consejo de Hermandades",
     "Foro de Formación"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "actualizada": "2026-11-26T22:20"
  },
  {
   "id": "fica-black-friday-campana-comercio-local",
   "sec": "economia",
   "kicker": "Comercio",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=kWkauvpYWE8&t=1017s",
   "title": "FICA llama a comprar en las tiendas de Alcalá durante el Black Friday",
   "sub": "La federación de comerciantes lanza la campaña «Compra cerca, ahorra y apoya a nuestros comercios»",
   "caption": "Una calle comercial del centro de Alcalá de Guadaíra.",
   "foto": "fica-black-friday-comercio-calle-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Federación de Industriales y Comerciantes de Alcalá (FICA) ha lanzado una campaña por el Black Friday para animar a comprar en los comercios de la ciudad.",
    "El lema es «Compra cerca, ahorra y apoya a nuestros comercios».",
    "FICA sostiene que el gasto en el comercio local mantiene negocios abiertos y empleo en Alcalá."
   ],
   "body": [
    "La Federación de Industriales y Comerciantes de Alcalá (FICA) ha lanzado una campaña con motivo del Black Friday para animar a los vecinos de Alcalá de Guadaíra a aprovechar las ofertas y promociones de los negocios de la ciudad. El lema resume su mensaje: «Compra cerca, ahorra y apoya a nuestros comercios».",
    "El Black Friday, que este año cae el viernes 28 de noviembre, se ha convertido en una de las semanas comerciales más importantes del año, con descuentos que muchos consumidores usan para adelantar las compras de Navidad. FICA, que lo ha difundido también en su perfil de Facebook, quiere que parte de ese gasto se quede en Alcalá.",
    "## El argumento de los comerciantes",
    "Según la federación, comprar en los establecimientos locales contribuye a mantener los negocios abiertos, sostener puestos de trabajo y la actividad de autónomos y pequeños empresarios que trabajan en la ciudad. FICA sostiene que ese dinero dinamiza la economía local, genera oportunidades para otros negocios y mantiene la vida en las calles y en los barrios.",
    "La federación añade a esos argumentos las ventajas que atribuye al comercio de proximidad: el trato directo, la atención personalizada y el conocimiento que los comerciantes tienen de sus clientes.",
    "FICA no ha detallado cuántos establecimientos participan con ofertas propias en la campaña ni si existe un distintivo para identificarlos.",
    "## Antes de la campaña de Navidad",
    "La campaña llega a las puertas de la temporada navideña, la de más ventas para el comercio. En los próximos días suelen sumarse las iniciativas de dinamización del centro y de los barrios que organizan el Ayuntamiento y las asociaciones de comerciantes.",
    "<span class='howto'><b>Black Friday en Alcalá.</b> Viernes 28 de noviembre de 2026 (muchas tiendas amplían las ofertas a toda la semana). Campaña de FICA: «Compra cerca, ahorra y apoya a nuestros comercios». Consejo de consumo: compare el precio anterior del producto y guarde el tique para cambios y garantías.</span>"
   ],
   "seo": [
    "fica-black-friday-comercio-local-alcala",
    "FICA anima a comprar en Alcalá en el Black Friday",
    "La Federación de Industriales y Comerciantes de Alcalá (FICA) lanza una campaña por el Black Friday para que los vecinos compren en el comercio local.",
    [
     "FICA",
     "Black Friday",
     "comercio local",
     "comercio de proximidad",
     "Federación de Industriales y Comerciantes de Alcalá"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "convocatoria-plaza-oficial-primera-mantenimiento-24-diciembre",
   "sec": "economia",
   "kicker": "Empleo público",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1615814840590856",
   "title": "El Ayuntamiento de Alcalá convoca una plaza fija de oficial de primera de mantenimiento hasta el 24 de diciembre",
   "sub": "Es una plaza de personal laboral fijo por turno libre; la convocatoria salió en el BOE el 24 de noviembre y las bases están en la web municipal",
   "caption": "Cartel municipal de la oferta de empleo público.",
   "foto": "oficial-primera-mantenimiento-convocatoria-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra convoca una plaza de personal laboral fijo, por turno libre, de oficial de primera de mantenimiento.",
    "El plazo de solicitudes va del 25 de noviembre al 24 de diciembre de 2026.",
    "El anuncio de la convocatoria se publicó en el BOE el 24 de noviembre; las bases y el formulario están en la plataforma municipal de convocatorias."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha abierto la convocatoria de una plaza en propiedad de personal laboral fijo, por turno libre, de oficial de primera de mantenimiento. Las solicitudes pueden presentarse entre el 25 de noviembre y el 24 de diciembre de 2026, según ha informado el Ayuntamiento en su perfil de Facebook.",
    "El Boletín Oficial del Estado (BOE) publicó el martes 24 de noviembre el <a href='https://www.boe.es/boe/dias/2026/11/24/pdfs/BOE-A-2026-24668.pdf' target='_blank'>anuncio de la resolución de 18 de noviembre</a> por la que se convoca la plaza. Esa publicación es la que abre el plazo de presentación.",
    "## Bases y solicitud",
    "La convocatoria y las bases generales y específicas pueden consultarse en la web municipal, donde también está el formulario de inscripción, dentro de la plataforma de convocatorias del Ayuntamiento. Allí figuran los requisitos de titulación, el sistema de selección, las pruebas y la tasa de examen, que el Ayuntamiento no ha detallado en su anuncio.",
    "Al ser turno libre, puede presentarse cualquier persona que cumpla los requisitos de las bases, no solo personal que ya trabaje en el Ayuntamiento.",
    "## Otros procesos abiertos",
    "La plaza se suma a otros procesos de empleo público en marcha en la ciudad: la oposición a cinco plazas de bombero <a href='#bomberos-oposicion-cinco-plazas-primera-prueba-2-diciembre'>arranca con su primera prueba el 2 de diciembre</a>.",
    "<span class='howto'><b>Oficial de primera de mantenimiento (una plaza).</b> Tipo: personal laboral fijo, turno libre. Plazo: del 25 de noviembre al 24 de diciembre de 2026. Bases y formulario: web municipal, en alcalaguadaira.convoca.online. Anuncio: BOE de 24 de noviembre de 2026 (BOE-A-2026-24668).</span>"
   ],
   "seo": [
    "plaza-oficial-primera-mantenimiento-ayuntamiento-alcala",
    "Plaza de oficial de mantenimiento en Alcalá",
    "El Ayuntamiento de Alcalá de Guadaíra convoca una plaza fija de oficial de primera de mantenimiento por turno libre; plazo hasta el 24 de diciembre.",
    [
     "empleo público",
     "oferta de empleo",
     "Ayuntamiento de Alcalá de Guadaíra",
     "oposiciones",
     "BOE"
    ]
   ],
   "iso": "2026-11-25",
   "hora": "22:09",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "nacimientos-defunciones-alcala-2025-ine",
   "sec": "alcala",
   "kicker": "Datos",
   "iso": "2026-11-25",
   "hora": "07:53",
   "src": "Instituto Nacional de Estadística",
   "fuente_url": "https://www.ine.es/dyngs/Prensa/es/MNP2025.htm",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Alcalá registra 503 nacimientos y 580 defunciones en 2025 y suma cinco años con más muertes que nacimientos",
   "sub": "Los nacimientos han caído un 55,8 % desde 2009, más que en Dos Hermanas, Utrera y el conjunto de la provincia de Sevilla, según los datos definitivos del INE",
   "caption": "Gráfico con los nacimientos y las defunciones de vecinos de Alcalá de Guadaíra entre 2009 y 2025, según el INE.",
   "foto": "nacimientos-defunciones-alcala-2025-ine-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "Alcalá de Guadaíra registró 503 nacimientos y 580 defunciones de vecinos en 2025, con un saldo vegetativo de 77 personas negativo, según el INE.",
    "Es el quinto año seguido con más defunciones que nacimientos: el saldo es negativo desde 2021.",
    "Los nacimientos han bajado un 55,8 % desde 2009, cuando hubo 1.139, frente al 33,7 % de Dos Hermanas, el 29,6 % de Utrera y el 40,3 % de la provincia.",
    "Alcalá tuvo en 2025 una tasa de 6,5 nacimientos por cada 1.000 habitantes, por debajo de Dos Hermanas (8,0) y Utrera (8,2)."
   ],
   "body": [
    "Alcalá de Guadaíra registró en 2025 un total de 503 nacimientos y 580 defunciones de vecinos empadronados en el municipio, según los datos definitivos del Movimiento Natural de la Población que el Instituto Nacional de Estadística (INE) publicó el 18 de noviembre de 2026. El saldo vegetativo, la diferencia entre ambos, fue negativo en 77 personas.",
    "Es el quinto año seguido en que en Alcalá mueren más vecinos de los que nacen. El saldo pasó a negativo en 2021, con 84 personas, y siguió así en 2022 (88), 2023 (135), 2024 (53) y 2025 (77). En 2009, el primer año de la serie municipal del INE, nacieron 647 vecinos más de los que fallecieron.",
    "Los 503 nacimientos de 2025 son seis menos que en 2024, un 1,2 % menos, y la segunda cifra más baja de la serie, solo por encima de los 472 de 2023. En 2009 nacieron 1.139 niños de madres residentes en Alcalá: la caída desde entonces es del 55,8 %. Desde 2015, cuando hubo 797, el descenso es del 36,9 %.",
    "Las defunciones fueron 580, 18 más que en 2024. Son un 17,9 % más que las 492 de 2009. El año con más fallecimientos de la serie fue 2021, con 625.",
    "## Nacimientos en Alcalá, Dos Hermanas y Utrera",
    "La caída de la natalidad en Alcalá es mayor que en los municipios de su entorno. Dos Hermanas registró 1.133 nacimientos en 2025, un 33,7 % menos que en 2009, y 924 defunciones, con lo que mantiene un saldo positivo de 209 personas. Utrera tuvo 433 nacimientos, un 29,6 % menos que en 2009, y 422 defunciones: un saldo positivo de 11.",
    "En el conjunto de la provincia de Sevilla nacieron 14.204 niños en 2025, un 40,3 % menos que en 2009, y murieron 16.895 personas. El saldo provincial fue negativo en 2.691 personas y lleva así desde 2020: es el sexto año consecutivo.",
    "Para comparar municipios de distinto tamaño, El Panadero ha calculado las tasas con la población del padrón a 1 de enero de 2025 que recoge el Instituto de Estadística y Cartografía de Andalucía (IECA): 77.718 habitantes en Alcalá, 142.463 en Dos Hermanas y 52.489 en Utrera. Alcalá tuvo 6,5 nacimientos por cada 1.000 habitantes, por debajo de Dos Hermanas (8,0) y Utrera (8,2). Su tasa de mortalidad fue de 7,5 por 1.000, frente a 6,5 en Dos Hermanas y 8,0 en Utrera.",
    "## Qué mide el saldo vegetativo",
    "La estadística cuenta los nacimientos según el municipio de residencia de la madre y las defunciones según el de residencia del fallecido, aunque el parto o la muerte ocurran en otra localidad, como un hospital de Sevilla. El saldo vegetativo no mide la evolución de la población, porque deja fuera las mudanzas: en 2024, según el IECA, llegaron a vivir a Alcalá 2.519 personas y se marcharon 1.892.",
    "<span class='howto'><b>De dónde salen los datos.</b> Instituto Nacional de Estadística, Movimiento Natural de la Población, datos definitivos de 2025 publicados el 18 de noviembre de 2026 (tablas de nacimientos y defunciones de capitales y principales municipios). La serie municipal empieza en 2009. La población de 2025 y las migraciones de 2024 proceden del IECA. El INE publica cada año los datos definitivos del año anterior.</span>"
   ],
   "seo": [
    "nacimientos-defunciones-alcala-2025-saldo-vegetativo",
    "Nacimientos en Alcalá: 503 en 2025 y 580 defunciones",
    "Alcalá de Guadaíra sumó en 2025 su quinto año con más defunciones que nacimientos: 503 bebés y 580 fallecidos, según el INE. Caída del 55,8 % desde 2009.",
    [
     "natalidad",
     "saldo vegetativo",
     "INE",
     "Movimiento Natural de la Población",
     "Dos Hermanas",
     "Utrera",
     "demografía"
    ]
   ]
  },
  {
   "iso": "2026-11-24",
   "hora": "21:54",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "temporada-plantaciones-1200-arboles-plaza-lima",
   "sec": "alcala",
   "kicker": "Medio ambiente",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10033/alcala-inicia-una-nueva-temporada-de-plantaciones-con-mas-de-1200-nuevos-arboles",
   "title": "Alcalá arranca una temporada de plantaciones con más de 1.200 árboles nuevos",
   "sub": "La campaña empezó con un abeto en la Plaza de Lima, pedido por los vecinos, y llegará a colegios, alcorques vacíos, el Monumento Natural y el futuro parque del Cerro de la Era",
   "caption": "Comienzo de la nueva temporada de plantaciones de árboles en Alcalá de Guadaíra.",
   "foto": "temporada-plantaciones-plaza-lima-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra prevé plantar más de 1.200 árboles en la temporada que acaba de empezar.",
    "La campaña arrancó con la plantación de un abeto en la zona central de la Plaza de Lima, una petición de los vecinos.",
    "Incluye 115 árboles en 16 colegios públicos, reposición en alcorques vacíos y nuevas plantaciones en el Monumento Natural Riberas del Guadaíra.",
    "Las actuaciones forman parte del Plan de Reforestación 2024-2027 «Alcalá Más Verde», que se fijó como meta 5.000 árboles y 10.000 arbustos."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha comenzado una nueva temporada de plantaciones en la que prevé incorporar más de 1.200 árboles en barrios, centros educativos, parques y espacios naturales del municipio. La campaña arrancó el martes 24 de noviembre con la plantación de un abeto en la Plaza de Lima.",
    "El abeto se ha colocado en la zona central de la plaza. Según el Ayuntamiento, era una demanda que los vecinos de la zona trasladaban desde hacía tiempo, y la idea es que el árbol se convierta en un símbolo de ese espacio y pueda adornarse en las fiestas de Navidad.",
    "La delegada de Monumento Natural, Medioambiente y Sostenibilidad, Luisa Campos, ha explicado que el objetivo de la campaña es «recuperar el arbolado que se ha perdido y llevar nuevos ejemplares a aquellos lugares donde hacen falta». Campos ha defendido que el aumento de la masa arbórea ayudará a reducir la temperatura en el entorno de cada ejemplar durante los veranos.",
    "## Dónde se plantará",
    "El programa reúne varias actuaciones. Una de ellas es la plantación de 115 árboles en 16 colegios públicos para crear sombra en los patios, un proyecto que El Panadero ya contó cuando el Ayuntamiento <a href='#arbolado-colegios-115-arboles-16-centros'>lo sacó a licitación</a> el 17 de noviembre.",
    "También seguirá la reposición de árboles en alcorques vacíos de calles y espacios públicos y habrá nuevas plantaciones en el Monumento Natural Riberas del Guadaíra. La nota municipal cita además otras ubicaciones urbanas: la entrada al túnel, el carril bici, la calle Malasmañanas y el futuro <a href='#parque-cerro-de-la-era'>parque del Cerro de la Era</a>. El Ayuntamiento no ha detallado cuántos ejemplares irán a cada punto ni el presupuesto total de la temporada.",
    "## El plan Alcalá Más Verde",
    "Todas estas plantaciones se enmarcan en el Plan de Reforestación 2024-2027 «Alcalá Más Verde», que se marcó como objetivo plantar 5.000 árboles y 10.000 arbustos entre espacios urbanos, parques, colegios y enclaves naturales. Según los datos que el propio Ayuntamiento dio al cerrar la campaña 2025-2026, el plan sumaba entonces más de 4.200 árboles plantados desde 2024.",
    "El Ayuntamiento trabaja además en el primer Plan Director del Arbolado de Alcalá, un documento técnico para conocer el estado de los árboles municipales, elegir las especies adecuadas para cada sitio y fijar criterios de conservación y mantenimiento. No hay fecha pública para su aprobación.",
    "<span class='howto'>Qué es: nueva temporada de plantaciones de arbolado municipal. Cuántos: más de 1.200 árboles, según la previsión del Ayuntamiento. Dónde: 16 colegios públicos, alcorques vacíos, Monumento Natural Riberas del Guadaíra, entrada al túnel, carril bici, calle Malasmañanas y parque del Cerro de la Era, entre otros. Información: Delegación de Monumento Natural, Medioambiente y Sostenibilidad.</span>"
   ],
   "seo": [
    "plantaciones-1200-arboles-alcala-mas-verde",
    "Alcalá plantará más de 1.200 árboles esta temporada",
    "El Ayuntamiento de Alcalá de Guadaíra inicia la temporada de plantaciones con más de 1.200 árboles en colegios, barrios y el Monumento Natural.",
    [
     "Alcalá Más Verde",
     "arbolado",
     "Luisa Campos",
     "Plaza de Lima",
     "Monumento Natural Riberas del Guadaíra",
     "Cerro de la Era"
    ]
   ]
  },
  {
   "iso": "2026-11-24",
   "hora": "21:54",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "parques-empresariales-euc-un-millon-venta-liebre-cabeza-hermosa",
   "sec": "economia",
   "kicker": "Industria",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10028/alcala-destina-a-la-conservacion-de-parques-empresariales-mas-de-un-millon-de-euros-a-traves-de-las-subvenciones-a-las-entidades-de-conservacion",
   "title": "El Ayuntamiento destina más de un millón de euros a la conservación de los parques empresariales",
   "sub": "Las ayudas financian obras como la mejora de viales y alumbrado en Venta la Liebre, de 220.000 euros, y las zonas verdes de Cabeza Hermosa",
   "caption": "Visita municipal a uno de los parques empresariales de Alcalá de Guadaíra.",
   "foto": "parques-empresariales-euc-visita-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra destina más de un millón de euros a la conservación de parques empresariales mediante subvenciones a las Entidades Urbanísticas de Conservación.",
    "En Venta la Liebre se ejecuta una mejora de 220.000 euros, de los que el Ayuntamiento aporta más de 160.000.",
    "En Cabeza Hermosa, la primera fase de mejoras cuesta 110.000 euros y la aportación municipal es de 90.000.",
    "Las dos actuaciones están acogidas a la primera convocatoria de estas ayudas."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra destina más de un millón de euros a la conservación de sus parques empresariales a través de las convocatorias de subvenciones a las Entidades Urbanísticas de Conservación (EUC), que gestionan el mantenimiento de los polígonos. Lo ha informado este martes 24 de noviembre.",
    "La alcaldesa, Ana Isabel Jiménez, recorrió las intervenciones con el delegado de Urbanismo y Planificación Estratégica, Jesús Mora, y el delegado de Desarrollo e Industria, Pablo Chain. Las EUC agrupan a los propietarios de cada polígono. Jiménez enmarcó estas ayudas en el Plan Estratégico Industrial «Alcalá, Corazón Industrial de Andalucía» y defendió la cooperación público-privada para mejorar los polígonos.",
    "## Venta la Liebre y Cabeza Hermosa",
    "La actuación de más importe es la del Parque Empresarial Venta la Liebre: 220.000 euros, de los que el Ayuntamiento aporta más de 160.000. Incluye limpieza y asfaltado de viales, pavimentos, bordillos, recogida de aguas y reparación de arquetas, además de un proyecto de alumbrado que sustituye luminarias y renueva acometidas, cuadros eléctricos y cableado. También se mejora la señalización vertical para ordenar la circulación.",
    "En el Parque Cabeza Hermosa se desarrolla la primera fase de mejoras, con un coste de 110.000 euros, de los que el Ayuntamiento paga 90.000. Se centra en rehabilitar y rediseñar las zonas verdes para dar más sombra y abaratar su mantenimiento, e incluye infraestructuras de recogida y tratamiento de residuos.",
    "Las dos obras están acogidas a la primera convocatoria de estas subvenciones. El Ayuntamiento no ha detallado a qué otras entidades y proyectos se reparte el resto del millón de euros.",
    "## El modelo de las entidades de conservación",
    "Pablo Chain explicó que la ordenanza municipal de las EUC busca que todas las zonas industriales de Alcalá se constituyan en entidades de conservación, porque, según el Ayuntamiento, dan más agilidad que las comunidades de propietarios en servicios como el alumbrado o los puntos limpios. Entre los proyectos que cita el gobierno municipal figuran también la videovigilancia, la gestión de emergencias y la regulación del tráfico en los polígonos.",
    "Jesús Mora sostuvo que Alcalá es «un referente industrial» y que el objetivo es que los parques empresariales sean «espacios innovadores, competitivos y atractivos para nuevos inversores».",
    "<span class='howto'>Qué son las EUC: entidades de los propietarios de un polígono que se ocupan de su conservación en colaboración con el Ayuntamiento. Ayuda municipal: más de un millón de euros en total, según el Ayuntamiento. Obras en marcha: Venta la Liebre (220.000 euros) y Cabeza Hermosa (110.000 euros, primera fase). Información: Delegación de Desarrollo e Industria.</span>"
   ],
   "seo": [
    "parques-empresariales-entidades-conservacion-ayudas",
    "Un millón para conservar los parques empresariales",
    "Alcalá de Guadaíra destina más de un millón de euros a las entidades de conservación de polígonos, con obras en Venta la Liebre y Cabeza Hermosa.",
    [
     "Venta la Liebre",
     "Cabeza Hermosa",
     "Entidades Urbanísticas de Conservación",
     "polígonos industriales",
     "Ana Isabel Jiménez",
     "Pablo Chain"
    ]
   ]
  },
  {
   "iso": "2026-11-24",
   "hora": "21:54",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "estrella-san-agustin-utrera-b-rabesa-denuncia-incidentes",
   "sec": "deportes",
   "kicker": "Fútbol",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=63vzr2jOBaw&t=1004s",
   "title": "El CD Utrera denuncia agresiones e insultos racistas en Rabesa y la Estrella San Agustín lo niega",
   "sub": "Los hechos ocurrieron al acabar el partido del domingo 22, que ganó el Utrera B por 1-2; los dos clubes llevarán su versión al Comité de Competición",
   "caption": "Campo de fútbol de Rabesa, en Alcalá de Guadaíra, en una imagen de archivo.",
   "foto": "estrella-san-agustin-campo-rabesa-of.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "El CD Utrera denuncia que jugadores de su equipo sénior B sufrieron agresiones e insultos racistas al acabar el partido del domingo 22 de noviembre en Rabesa.",
    "La Estrella San Agustín reconoce un enfrentamiento entre jugadores de los dos equipos, pero niega que desde el club se profirieran insultos racistas.",
    "Según el CD Utrera, intervinieron siete agentes de la Policía Local.",
    "Ambos clubes llevarán la información de la que disponen al Comité de Competición."
   ],
   "body": [
    "El CD Utrera ha denunciado que varios jugadores de su equipo sénior B sufrieron agresiones físicas e insultos racistas al terminar el partido que jugaron el domingo 22 de noviembre en el campo de Rabesa, en Alcalá de Guadaíra, ante la Estrella San Agustín, que rechaza las acusaciones. El partido, del grupo primero de Segunda Andaluza sénior, lo ganó el Utrera B por 1-2.",
    "## La versión del CD Utrera",
    "En un comunicado, el CD Utrera sostiene que tras el pitido final se produjeron agresiones y vejaciones racistas contra algunos de sus futbolistas, hechos que califica de «intolerables». El club afirma que siete agentes de la Policía Local tuvieron que intervenir para frenar la situación y garantizar la seguridad de jugadores y cuerpo técnico, y agradece su actuación. Añade que sus servicios jurídicos reúnen el acta arbitral, partes médicos y otras pruebas para llevarlas a la Real Federación Andaluza de Fútbol y a las autoridades competentes.",
    "## La versión de la Estrella San Agustín",
    "La Estrella San Agustín ha respondido con otro comunicado. Reconoce que, como recoge el acta arbitral, al acabar el partido hubo un enfrentamiento entre jugadores de los dos equipos, pero asegura que nadie de su club profirió insultos racistas. Según su relato, varios miembros de la directiva entraron en el terreno de juego solo para separar a los implicados y evitar que el incidente fuera a más, y cuando llegaron los agentes el enfrentamiento ya había terminado. Ha anunciado además que estudiará acciones para defender su imagen ante lo que considera acusaciones falsas.",
    "El club alcalareño expresa su rechazo a cualquier tipo de violencia y a todo comportamiento racista o discriminatorio, y subraya que esos valores deben estar presentes en el deporte, en especial en el fútbol base.",
    "## Al Comité de Competición",
    "Las dos entidades han anunciado que emprenderán acciones por la vía que corresponda y que entregarán al Comité de Competición toda la información de que disponen. Será ese órgano federativo el que valore el acta arbitral y los informes de las partes.",
    "La Policía Local no ha informado públicamente sobre su intervención en el campo de Rabesa.",
    "<span class='howto'>Qué pasó: incidentes al final del partido Estrella San Agustín - Utrera B (1-2), el domingo 22 de noviembre en el campo de Rabesa. Versiones: el CD Utrera denuncia agresiones e insultos racistas; la Estrella San Agustín reconoce un enfrentamiento y niega los insultos racistas. Próximo paso: Comité de Competición.</span>"
   ],
   "seo": [
    "estrella-san-agustin-utrera-rabesa-incidentes",
    "Utrera denuncia racismo en Rabesa; la Estrella lo niega",
    "El CD Utrera denuncia agresiones e insultos racistas tras su partido en Rabesa ante la Estrella San Agustín, que lo niega. Irá al Comité de Competición.",
    [
     "Estrella San Agustín",
     "CD Utrera",
     "Rabesa",
     "Comité de Competición",
     "racismo en el fútbol",
     "fútbol base"
    ]
   ]
  },
  {
   "iso": "2026-11-24",
   "hora": "21:54",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "alvaro-dominguez-mingorance-campeon-andalucia-motocross-85",
   "sec": "deportes",
   "kicker": "Motocross",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8449/alvaro-dominguez-mingorance-se-proclama-campeon-de-andalucia-de-motocross-2026",
   "title": "Álvaro Domínguez Mingorance, campeón de Andalucía de Motocross en 85 cc con nueve victorias en diez carreras",
   "sub": "El piloto alcalareño, de 13 años, se aseguró el título el domingo 22 de noviembre a falta de la última prueba, el 6 de diciembre en Sanlúcar de Barrameda",
   "caption": "Cartel de Álvaro Domínguez Mingorance como campeón de Andalucía de Motocross 2026 en 85 cc.",
   "foto": "alvaro-dominguez-campeon-motocross-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "El alcalareño Álvaro Domínguez Mingorance se ha proclamado campeón de Andalucía de Motocross 2026 en la categoría de 85 cc.",
    "Ganó la penúltima prueba el domingo 22 de noviembre y sumó los 50 puntos que le aseguraban el título.",
    "Lleva nueve victorias en las diez carreras disputadas esta temporada.",
    "El campeonato termina el 6 de diciembre en Sanlúcar de Barrameda (Cádiz)."
   ],
   "body": [
    "El piloto alcalareño Álvaro Domínguez Mingorance, de 13 años, se proclamó el domingo 22 de noviembre campeón de Andalucía de Motocross 2026 en la categoría de 85 cc. Ganó la penúltima prueba del campeonato y se aseguró matemáticamente el título a falta de una carrera, según ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento de Alcalá de Guadaíra.",
    "Domínguez Mingorance, que corre con la escudería Eduardo Castro, terminó primero en esa prueba y sumó los 50 puntos que necesitaba para que ningún rival pudiera alcanzarle en la clasificación general.",
    "## Nueve de diez",
    "El balance de su temporada es de nueve victorias en las diez carreras disputadas.",
    "El campeonato autonómico se cerrará el domingo 6 de diciembre en Sanlúcar de Barrameda (Cádiz), donde el alcalareño correrá ya con el título asegurado.",
    "## Un otoño de títulos",
    "El de Domínguez Mingorance se suma a otros éxitos de deportistas de Alcalá en las últimas semanas. Diogo Miguel Silva <a href='#diogo-miguel-silva-campeon-mundo-k1-fabio-loisi'>se proclamó campeón del mundo de K1</a> y la joven boxeadora María Pavón <a href='#maria-pavon-oro-mejor-boxeadora-antequera'>ganó un nuevo oro y el trofeo a la mejor boxeadora</a> en Antequera.",
    "Alcalá+Deporte no ha detallado en qué circuito se disputó la penúltima prueba ni la ventaja de puntos con la que el piloto llega a la última cita.",
    "<span class='howto'>Campeonato de Andalucía de Motocross 2026, categoría 85 cc. Campeón: Álvaro Domínguez Mingorance (escudería Eduardo Castro). Balance: nueve victorias en diez carreras. Última prueba: domingo 6 de diciembre, en Sanlúcar de Barrameda (Cádiz).</span>"
   ],
   "seo": [
    "alvaro-dominguez-mingorance-campeon-andalucia-motocross",
    "Álvaro Domínguez, campeón andaluz de motocross 85 cc",
    "El alcalareño Álvaro Domínguez Mingorance, de 13 años, gana el Campeonato de Andalucía de Motocross 2026 en 85 cc con nueve victorias en diez carreras.",
    [
     "Álvaro Domínguez Mingorance",
     "motocross",
     "Campeonato de Andalucía de Motocross",
     "85 cc",
     "escudería Eduardo Castro",
     "deporte alcalareño"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "iso": "2026-11-24",
   "hora": "21:54",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "concierto-santa-cecilia-auditorio-riberas-29-noviembre",
   "sec": "cultura",
   "kicker": "Música",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10032/alcala-de-guadaira-celebra-este-domingo-el-concierto-de-santa-cecilia-una-espectacular-oportunidad-para-disfrutar-de-la-musica",
   "title": "La Asociación Musical del Águila celebra Santa Cecilia el domingo 29 en el Auditorio Riberas del Guadaíra",
   "sub": "Actuarán la Coral Polifónica, la Orquesta de Cámara Ciudad de Alcalá, la Banda Académica, la Banda de Música y el coro infantil de su escuela; la entrada cuesta 5 euros",
   "caption": "Concierto de la Asociación Musical Nuestra Señora del Águila en el Auditorio Riberas del Guadaíra, en una imagen difundida por el Ayuntamiento.",
   "foto": "concierto-santa-cecilia-banda-aguila-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El concierto de Santa Cecilia será el domingo 29 de noviembre, a las 12.00, en el Auditorio Riberas del Guadaíra.",
    "Lo organiza la Asociación Musical Nuestra Señora del Águila con la Delegación de Cultura del Ayuntamiento.",
    "Participan cuatro formaciones de la asociación y el coro infantil de su escuela de música.",
    "Las entradas cuestan 5 euros y se venden en entradas.alcaladeguadaira.es."
   ],
   "body": [
    "La Asociación Musical Nuestra Señora del Águila celebrará el domingo 29 de noviembre, a las 12.00, su tradicional concierto de Santa Cecilia, patrona de los músicos, en el Auditorio Riberas del Guadaíra de Alcalá de Guadaíra. Lo organiza junto a la Delegación de Cultura del Ayuntamiento y las entradas cuestan 5 euros.",
    "Sobre el escenario estarán las formaciones de la asociación: la Coral Polifónica de Alcalá de Guadaíra, la Orquesta de Cámara Ciudad de Alcalá, la Banda Académica Nuestra Señora del Águila y la Banda de Música de Alcalá de Guadaíra. A ellas se sumará el coro infantil de la escuela de música.",
    "Según la nota municipal, la banda tiene más de 160 años de trayectoria. El programa combinará piezas de las distintas agrupaciones; el Ayuntamiento no ha publicado el repertorio.",
    "## Una semana de conciertos",
    "El delegado de Cultura, Christopher Rivas, animó a los vecinos a acudir y destacó el trabajo musical y educativo de la asociación. El concierto llega en una semana con otras citas musicales en la ciudad: la final del XXXIII Concurso Nacional de Cante Flamenco «Soleá de Alcalá», prevista para el sábado 28 a las 21.00, según ha publicado el Ayuntamiento en sus redes sociales.",
    "La Banda de Música de Alcalá ha sido noticia este mes por otros motivos: la hermandad de Los Estudiantes <a href='#estudiantes-banda-musica-alcala-fin-25-anos'>decidió prescindir de ella</a> tras 25 años acompañando su paso de palio.",
    "<span class='howto'>Concierto de Santa Cecilia. Cuándo: domingo 29 de noviembre de 2026, a las 12.00. Dónde: Auditorio Riberas del Guadaíra. Precio: 5 euros. Entradas: entradas.alcaladeguadaira.es. Organiza: Asociación Musical Nuestra Señora del Águila, con la Delegación de Cultura.</span>"
   ],
   "seo": [
    "concierto-santa-cecilia-auditorio-riberas",
    "Concierto de Santa Cecilia en Alcalá: domingo 29",
    "La Asociación Musical del Águila celebra Santa Cecilia el domingo 29 de noviembre a las 12.00 en el Auditorio Riberas del Guadaíra. Entradas, 5 euros.",
    [
     "Santa Cecilia",
     "Asociación Musical Nuestra Señora del Águila",
     "Banda de Música de Alcalá",
     "Auditorio Riberas del Guadaíra",
     "Coral Polifónica",
     "Christopher Rivas"
    ]
   ]
  },
  {
   "iso": "2026-11-24",
   "hora": "06:53",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "jesus-mora-suplente-senado-psoe-sevilla-29n",
   "sec": "politica",
   "kicker": "Elecciones 29N",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=RO4Wfs0CSN4&t=0s",
   "title": "Jesús Mora concurre al Senado como suplente de Rosario Andújar en la lista del PSOE por Sevilla",
   "sub": "El primer teniente de alcaldesa explica que el cambio respecto a Antonio Gutiérrez Limones responde a la regla de listas cremallera del partido",
   "caption": "Jesús Mora, primer teniente de alcaldesa de Alcalá de Guadaíra (PSOE).",
   "foto": "jesus-mora-entrevista-plato-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Jesús Mora, primer teniente de alcaldesa de Alcalá de Guadaíra y delegado de Urbanismo, es suplente en la candidatura del PSOE al Senado por la provincia de Sevilla en las generales del 29 de noviembre.",
    "Será suplente de Rosario Andújar, número uno de la lista socialista al Senado por Sevilla, y no de Antonio Gutiérrez Limones, como se había apuntado al principio.",
    "Mora atribuye el ajuste a los estatutos del PSOE, que obligan a alternar hombre y mujer en las listas.",
    "Defendió en una entrevista a El Panadero las propuestas de vivienda de su partido y citó las 84 viviendas en alquiler y las 107 en venta de la empresa municipal Vive Alcalá."
   ],
   "body": [
    "Jesús Mora, primer teniente de alcaldesa de Alcalá de Guadaíra y delegado de Urbanismo, concurre a las generales del domingo 29 de noviembre como suplente de Rosario Andújar, que encabeza la lista del PSOE al Senado por la provincia de Sevilla. Lo explicó el lunes 23 en una entrevista a El Panadero.",
    "En un primer momento se había apuntado que Mora sería suplente de Antonio Gutiérrez Limones, senador hasta ahora y también alcalareño, que vuelve a presentarse. Mora explicó que los estatutos del partido obligan a que las listas sean «cremallera», alternando hombre y mujer, y que la candidatura de Sevilla se ajustó para cumplir esa norma interna. Mora es además miembro de la ejecutiva provincial del PSOE.",
    "Preguntado por qué supone para Alcalá tener uno o dos vecinos en el Senado, sostuvo que la ciudad, tercer municipio de la provincia, necesita representación en los centros de decisión «para traer inversiones» y mantener el diálogo con los ministerios. Citó también que la alcaldesa, Ana Isabel Jiménez, es vicepresidenta de la Diputación de Sevilla.",
    "## Vivienda, el eje de su intervención",
    "Como delegado de Urbanismo, Mora dedicó buena parte de la entrevista a la vivienda. Defendió los reales decretos que, según dijo, aprobó el jueves pasado la Diputación Permanente del Congreso y que prorrogan dos años los contratos de alquiler y limitan las subidas, y la propuesta de su partido de destinar el 1 % del PIB a vivienda pública. Puso como ejemplo local la empresa municipal Vive Alcalá, que según dijo tiene en marcha dos promociones: 84 viviendas en alquiler, ya en construcción, y 107 en régimen de compraventa.",
    "Sobre la campaña, afirmó que su partido afronta la última semana «con optimismo» y que, si la participación ronda el 75 % en el conjunto de España, el PSOE volverá a gobernar. Como autocrítica, señaló que la política territorial del Gobierno «no se ha sabido comunicar», y, sobre las causas que afectan a antiguos miembros de su partido, sostuvo que el PSOE ha expulsado a todos los implicados.",
    "La entrevista llega un día después de que el presidente de la Junta y del PP andaluz, Juanma Moreno, <a href='#moreno-mitin-pp-alcala-tranvia-2027-29n'>visitara Alcalá en un mitin de campaña</a> en el que situó en 2027 la puesta en servicio del tranvía. El PSOE ha ganado en Alcalá las cuatro últimas elecciones generales, como recoge el <a href='#alcala-generales-secciones-2016-2023'>análisis por secciones censales</a> que publicó El Panadero.",
    "<span class='howto'><b>Elecciones generales.</b> Domingo 29 de noviembre de 2026. Se eligen diputados al Congreso y senadores. La provincia de Sevilla elige cuatro senadores; cada elector puede marcar hasta tres candidatos en la papeleta del Senado. Entrevista completa: informativo del lunes 23 de noviembre, en el vídeo enlazado como fuente.</span>"
   ],
   "seo": [
    "jesus-mora-suplente-senado-psoe-sevilla",
    "Jesús Mora, suplente al Senado por el PSOE de Sevilla",
    "El primer teniente de alcaldesa de Alcalá, Jesús Mora, es suplente de Rosario Andújar en la lista del PSOE al Senado por Sevilla para el 29 de noviembre.",
    [
     "Jesús Mora",
     "PSOE de Sevilla",
     "Senado",
     "Elecciones generales 2026",
     "Rosario Andújar",
     "Antonio Gutiérrez Limones",
     "Vive Alcalá"
    ]
   ]
  },
  {
   "iso": "2026-11-24",
   "hora": "06:53",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "jesus-nazareno-ponencia-restauracion-paso-san-juan-museo",
   "sec": "hermandades",
   "kicker": "Patrimonio cofrade",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10035/la-restauracion-del-retablo-de-la-inmaculada-concepcion-de-la-parroquia-de-santiago-cierra-manana-el-%E2%80%9Cii-ciclo-de-conservacion-preventiva%E2%80%9D",
   "title": "El paso de San Juan y el retablo de la Inmaculada de Santiago cierran el jueves el ciclo de conservación",
   "sub": "Sus restauradores explicarán los trabajos en el Museo de Alcalá en la última sesión del II Ciclo de Conservación Preventiva del patrimonio de las hermandades",
   "caption": "Cartel de la ponencia sobre la restauración del paso de San Juan Evangelista.",
   "foto": "jesus-nazareno-ponencia-paso-san-juan-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad de Jesús Nazareno",
   "claves": [
    "El II Ciclo de Conservación Preventiva del patrimonio de las hermandades se cierra el jueves 26 de noviembre en el Museo de Alcalá de Guadaíra.",
    "Carmen Palacios y María José Cordero presentarán la restauración de elementos del retablo de la Inmaculada Concepción de la parroquia de Santiago.",
    "Manuel Lozano, María de la Cruz Gabarro y Pablo Tejero explicarán la intervención en el paso de San Juan Evangelista de la Hermandad de Jesús Nazareno.",
    "El Ayuntamiento sitúa el inicio a las 20.00 y el Consejo de Hermandades, a las 19.30."
   ],
   "body": [
    "El II Ciclo de Conservación Preventiva del patrimonio de las hermandades de Alcalá de Guadaíra se cierra el jueves 26 de noviembre en el Museo de Alcalá con dos presentaciones: la restauración de elementos del retablo de la Inmaculada Concepción de la parroquia de Santiago y la del paso de San Juan Evangelista de la Hermandad de Jesús Nazareno.",
    "El ciclo lo organizan la Delegación de Cultura del Ayuntamiento y el Consejo General de Hermandades y Cofradías. Las restauradoras Carmen Palacios y María José Cordero explicarán su trabajo en el retablo, y Manuel Lozano, María de la Cruz Gabarro y Pablo Tejero, el del paso. La hora no coincide en las dos fuentes: el Ayuntamiento la fija a las 20.00 y el Consejo de Hermandades, a las 19.30. El ciclo es de participación libre y gratuita.",
    "El delegado de Cultura, Patrimonio y Museos, Christopher Rivas (Andalucía Por Sí), defendió la importancia de «dar a conocer todas las intervenciones realizadas sobre bienes patrimoniales». La Delegación de Cultura ha publicado además un vídeo que resume las restauraciones presentadas en esta segunda edición, que empezó en septiembre en la capilla de los Salesianos con el retablo de San Juan Bosco.",
    "La ponencia llega cinco días después de que la hermandad <a href='#jesus-paso-san-juan-cartel-semana-santa-foro-formacion'>abriera su casa de hermandad para mostrar el paso restaurado</a>, el sábado 21 de noviembre, con visitas guiadas por los propios restauradores.",
    "## Seis meses de trabajo",
    "La intervención se hizo entre enero y julio de 2026 y la firmaron Jesús Manuel Lozano Muñoz, María de la Cruz Gabarro Bando y Pablo Tejero Cárdenas. El Ayuntamiento de Alcalá ha financiado una parte del coste, cuya cuantía no se ha detallado. La hermandad se acogió para ello al II Ciclo de Conservación Preventiva que organizan la Delegación de Patrimonio y el Consejo General de Hermandades y Cofradías.",
    "La canastilla nació en las primeras décadas del siglo XX como paso de la Virgen, está ligada a San Juan desde 1943 y recibió en 1980 la reforma neobarroca de Manuel Guzmán Bejarano. Según la hermandad, presentaba ataques de insectos xilófagos, grietas, pérdidas de dorado y barnices oxidados. Los restauradores consolidaron la estructura, limpiaron y fijaron el dorado y recuperaron la policromía de los cuatro ángeles de las esquinas.",
    "El mismo ciclo llevó al Museo en octubre la conferencia del restaurador <a href='#pedro-manzano-conservacion-preventiva'>Pedro Manzano sobre la manipulación de las imágenes</a>, y el 18 de noviembre la presentación de dos pinturas restauradas de la parroquia de San Sebastián.",
    "<span class='howto'><b>Cierre del II Ciclo de Conservación Preventiva.</b> Jueves 26 de noviembre de 2026. Museo de Alcalá de Guadaíra. Hora: 20.00 según el Ayuntamiento; 19.30 según el Consejo de Hermandades. Presentaciones: retablo de la Inmaculada de Santiago y paso de San Juan Evangelista de la Hermandad de Jesús Nazareno. Entrada libre y gratuita.</span>"
   ],
   "seo": [
    "cierre-ciclo-conservacion-preventiva-retablo-inmaculada-paso-san-juan",
    "Retablo de Santiago y paso de San Juan, en el Museo",
    "El ciclo de conservación de las hermandades de Alcalá se cierra el jueves 26 en el Museo con el retablo de la Inmaculada de Santiago y el paso de San Juan.",
    [
     "Conservación Preventiva",
     "retablo de la Inmaculada",
     "parroquia de Santiago",
     "Hermandad de Jesús Nazareno",
     "San Juan Evangelista",
     "Museo de Alcalá"
    ]
   ],
   "encuadre": "contain",
   "actualizada": "2026-11-25T22:09"
  },
  {
   "id": "moreno-mitin-pp-alcala-tranvia-2027-29n",
   "sec": "politica",
   "kicker": "Elecciones 29N",
   "iso": "2026-11-23",
   "src": "El Panadero",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Juanma Moreno sitúa en 2027 la puesta en servicio del tranvía en un mitin del PP en Alcalá",
   "sub": "El presidente de la Junta cifró la obra en más de 300 millones y respaldó a Sandra González, candidata del PP a la Alcaldía",
   "caption": "Acto de campaña del PP con Juanma Moreno, el domingo 22 de noviembre en Alcalá de Guadaíra.",
   "foto": "moreno-mitin-pp-alcala-29n-apaisada-of.jpg",
   "fotocredito": "Facebook del PP de Alcalá de Guadaíra",
   "claves": [
    "Juanma Moreno, presidente de la Junta y del PP andaluz, afirmó el domingo 22 de noviembre en Alcalá de Guadaíra que el tranvía entrará en servicio en 2027.",
    "Según Moreno, el proyecto supera los 300 millones de euros; responsabilizó de su paralización a los anteriores gobiernos socialistas de la Junta.",
    "El acto, de cara a las elecciones generales del 29 de noviembre, contó con la candidata del PP a la Alcaldía, Sandra González, y los cabezas de lista Juan Bravo y Juan Ávila."
   ],
   "body": [
    "El presidente de la Junta de Andalucía y del PP andaluz, Juanma Moreno, afirmó el domingo 22 de noviembre de 2026 en Alcalá de Guadaíra que el tranvía de la ciudad entrará en servicio en 2027. Lo dijo en un acto de campaña del PP para las elecciones generales del domingo 29 de noviembre, en Celebraciones Zambra.",
    "El tranvía unirá Alcalá con el Metro de Sevilla en Montequinto. Moreno responsabilizó de la paralización del proyecto a los anteriores gobiernos socialistas de la Junta y aseguró que tuvo que negociar en Bruselas para recuperar los fondos europeos de la obra. Según sus cifras, la inversión total supera los 300 millones de euros.",
    "La fecha llega en plena discusión sobre los retrasos de la obra. El <a href='#tranvia-presupuesto-junta-2027-25-millones'>proyecto de presupuestos de la Junta para 2027</a> reserva una partida para terminarla y ponerla en marcha, y Adelante Andalucía <a href='#campana-29n-adelante-tranvia-pp-moreno-vox-plazuela'>criticó el viernes en Alcalá</a> que se hable de inauguraciones de un tranvía que los vecinos todavía no pueden usar.",
    "## Críticas al urbanismo municipal",
    "Moreno defendió el potencial económico de Alcalá, que según dijo cuenta con más de 30 polígonos industriales y podría duplicar esa cifra. También criticó lo que considera desorden urbanístico en la ciudad, gobernada por el PSOE, y pidió apoyo para la candidata del PP a la Alcaldía y presidenta del partido en Alcalá, Sandra González.",
    "En el acto participaron además los cabezas de lista del PP por la provincia de Sevilla al Congreso y al Senado, Juan Bravo y Juan Ávila, según ha publicado el PP de Alcalá en su perfil de Facebook. Moreno pidió a los asistentes que se movilicen para que Alberto Núñez Feijóo llegue a la Presidencia del Gobierno.",
    "El mitin cierra la agenda del PP en Alcalá en el fin de semana, después de que el sábado la candidata local y varias candidatas al Congreso visitaran empresas y barrios. Vox y Adelante Andalucía también han hecho campaña esta semana en la ciudad.",
    "<span class='howto'><b>Elecciones generales.</b> Domingo 29 de noviembre de 2026. La campaña electoral termina a las 00.00 del viernes 27 al sábado 28 de noviembre; el sábado 28 es jornada de reflexión.</span>"
   ],
   "seo": [
    "juanma-moreno-tranvia-alcala-2027-mitin-pp",
    "Moreno sitúa en 2027 el tranvía de Alcalá en un mitin",
    "Juanma Moreno afirma en un acto del PP en Alcalá de Guadaíra que el tranvía entrará en servicio en 2027 y cifra en más de 300 millones la inversión.",
    [
     "Juanma Moreno",
     "tranvía de Alcalá",
     "PP de Alcalá",
     "Sandra González",
     "elecciones generales 29N",
     "Junta de Andalucía"
    ]
   ],
   "hora": "21:55"
  },
  {
   "id": "documental-entre-el-pan-y-el-olvido-jornadas-memoria-democratica",
   "sec": "cultura",
   "kicker": "Memoria democrática",
   "iso": "2026-11-23",
   "hora": "21:53",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10030/el-documental-entre-el-pan-y-el-olvido-recupera-testimonios-reales-en-las-iii-jornadas-de-memoria-democratica-de-alcala",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El documental «Entre el pan y el olvido» cierra en Alcalá las III Jornadas de Memoria Democrática",
   "sub": "La película de Pablo Coca reúne testimonios de familias alcalareñas marcadas por la represión que siguió al golpe de julio de 1936",
   "caption": "Público en una de las sesiones de las III Jornadas de Memoria Democrática de Alcalá de Guadaíra.",
   "foto": "jornadas-memoria-democratica-publico-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El documental «Entre el pan y el olvido», del productor y director gaditano Pablo Coca, se proyectó en el Auditorio Riberas del Guadaíra en la última sesión de las III Jornadas de Memoria Democrática de Alcalá de Guadaíra.",
    "La película reconstruye la historia de Alcalá desde la Segunda República hasta la represión posterior al golpe de 1936 con testimonios de vecinos y familias, imágenes de archivo y referencias a las exhumaciones de fosas.",
    "Tras la proyección, el historiador José María García Márquez dio la conferencia «La represión franquista en Sevilla. El caso de Alcalá de Guadaíra».",
    "Las jornadas, con el lema «Memoria, Democracia e Identidad», las organizan el Ayuntamiento y la Asociación de Memoria Histórica y Democrática Siglo XXI."
   ],
   "body": [
    "El documental «Entre el pan y el olvido», del productor y director gaditano Pablo Coca, cerró las III Jornadas de Memoria Democrática de Alcalá de Guadaíra con una proyección en el Auditorio Riberas del Guadaíra, según ha informado el Ayuntamiento este lunes 23 de noviembre. La película recoge testimonios de vecinos y familias que vivieron el golpe de Estado de julio de 1936 en la ciudad.",
    "Las jornadas, que este año llevan el lema «Memoria, Democracia e Identidad», las organizan el Ayuntamiento y la Asociación de Memoria Histórica y Democrática Siglo XXI. Según la nota municipal, su objetivo es preservar la memoria colectiva y fortalecer los valores democráticos. La edición de 2026 se abrió con la presentación del <a href='#memorial-circulo-memoria-cementerio-san-mateo'>«Círculo de la Memoria», el futuro memorial a las víctimas de la represión en el cementerio de San Mateo</a>.",
    "## De las panaderías a las fosas",
    "El relato del documental parte de la Alcalá de las panaderías, los hornos y los molinos y de los cambios sociales durante la Segunda República. A partir de ahí muestra cómo la violencia política, las detenciones y los asesinatos que siguieron al golpe alteraron la vida de la ciudad. Las voces de las familias se combinan con explicaciones históricas, imágenes de archivo y referencias a las investigaciones y a las exhumaciones de fosas.",
    "Tras la proyección, el historiador José María García Márquez impartió la conferencia «La represión franquista en Sevilla. El caso de Alcalá de Guadaíra», con la colaboración de Vicente Pérez. La sesión terminó con un coloquio en el que participaron el propio cineasta y algunas de las personas que aparecen en el documental, entre ellas Francisco Falcón, Ana Jiménez y Manuela Genicio.",
    "## Lo que dice la delegación",
    "El responsable del Área de Identidad y delegado de Memoria Democrática, Christopher Rivas, sostiene que estas terceras jornadas mantienen el objetivo de recuperar y difundir la memoria histórica local, profundizar en el conocimiento de la represión franquista y abrir espacios de reflexión sobre los derechos humanos y las libertades. Según la nota municipal, su delegación seguirá impulsando actividades de divulgación e investigación.",
    "El Ayuntamiento señala que, aunque las jornadas de 2026 han terminado, la colaboración con la Asociación de Memoria Histórica y Democrática Siglo XXI continúa. La nota no detalla qué actividades concretas se programarán a partir de ahora ni sus fechas.",
    "<span class='howto'>Qué fue: proyección del documental «Entre el pan y el olvido» (dirección de Pablo Coca), conferencia de José María García Márquez y coloquio. Dónde: Auditorio Riberas del Guadaíra. Organizan: Ayuntamiento de Alcalá de Guadaíra (delegación de Memoria Democrática) y Asociación de Memoria Histórica y Democrática Siglo XXI. Fue la última sesión de las III Jornadas de Memoria Democrática.</span>"
   ],
   "seo": [
    "documental-entre-pan-olvido-memoria-democratica-alcala",
    "«Entre el pan y el olvido» cierra la memoria en Alcalá",
    "El documental de Pablo Coca sobre la represión tras el golpe de 1936 en Alcalá de Guadaíra cerró las III Jornadas de Memoria Democrática en el Riberas.",
    [
     "Entre el pan y el olvido",
     "Pablo Coca",
     "memoria democrática",
     "Christopher Rivas",
     "José María García Márquez",
     "Auditorio Riberas del Guadaíra"
    ]
   ]
  },
  {
   "id": "ofrenda-inmaculada-2026-capilla-santo-entierro",
   "sec": "hermandades",
   "kicker": "Inmaculada",
   "iso": "2026-11-23",
   "hora": "21:53",
   "src": "Consejo de Hermandades de Alcalá",
   "fuente_url": "https://www.consejohermandadesalcala.es/2026/11/23/la-capilla-del-santo-entierro-acogera-la-ofrenda-a-la-inmaculada/",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La capilla del Santo Entierro acogerá este año la ofrenda floral de las hermandades a la Inmaculada",
   "sub": "El Consejo de Hermandades lo propuso y la hermandad del Viernes Santo, que tendrá un papel especial en el acto, aceptó",
   "caption": "Fachada de la capilla del Santo Entierro de Alcalá de Guadaíra.",
   "foto": "capilla-santo-entierro-ofrenda-inmaculada-of.jpg",
   "fotocredito": "Consejo de Hermandades de Alcalá",
   "claves": [
    "La ofrenda de flores de las hermandades de Alcalá de Guadaíra a la Inmaculada se celebrará este año en la capilla del Santo Entierro, en la víspera de la festividad.",
    "La sede la propuso la Junta Superior del Consejo de Hermandades y la Hermandad del Santo Entierro aceptó.",
    "El altar estará presidido por la pintura de la Inmaculada de la capilla, obra del pintor alcalareño Manuel Márquez."
   ],
   "body": [
    "La capilla del Santo Entierro será este año el templo de la ofrenda de flores que las hermandades de Alcalá de Guadaíra dedican a la Inmaculada en la víspera de su festividad, según ha anunciado el Consejo General de Hermandades y Cofradías este lunes 23 de noviembre en su web y en sus redes sociales.",
    "La elección partió de una propuesta de la Junta Superior del Consejo, que la Hermandad del Santo Entierro aceptó, según la nota. En el acto participarán todas las hermandades alcalareñas, que ofrecerán flores y oraciones,, con una participación especial de la Hermandad del Santo Entierro.",
    "## La Inmaculada de Manuel Márquez",
    "El altar de la ofrenda estará presidido por la pintura de la Inmaculada que se conserva en la capilla, obra del pintor alcalareño Manuel Márquez, según el Consejo.",
    "La festividad de la Inmaculada Concepción se celebra el 8 de diciembre, por lo que la ofrenda corresponde al lunes 7 de diciembre. El Consejo no ha detallado todavía la hora del acto ni el orden de participación de las hermandades.",
    "La ofrenda llega en plena actividad de cultos de las hermandades de la ciudad en el final del año litúrgico, que este domingo 22 de noviembre incluyó la solemnidad de Cristo Rey, con la <a href='#cristo-rey-2026-borriquita-procesion-eucaristica-san-agustin'>procesión eucarística de la Borriquita por San Agustín</a>.",
    "<span class='howto'>Qué: ofrenda de flores de las hermandades a la Inmaculada. Dónde: capilla del Santo Entierro. Cuándo: víspera de la Inmaculada (lunes 7 de diciembre); la hora no se ha anunciado. Participan: todas las hermandades de Alcalá, con especial participación de la Hermandad del Santo Entierro. Organiza: Consejo General de Hermandades y Cofradías de Alcalá de Guadaíra.</span>"
   ],
   "seo": [
    "ofrenda-floral-inmaculada-capilla-santo-entierro-alcala",
    "Ofrenda a la Inmaculada en el Santo Entierro de Alcalá",
    "Las hermandades de Alcalá de Guadaíra harán su ofrenda floral a la Inmaculada en la capilla del Santo Entierro, ante la pintura de Manuel Márquez.",
    [
     "Inmaculada",
     "Hermandad del Santo Entierro",
     "Consejo de Hermandades",
     "ofrenda floral",
     "Manuel Márquez"
    ]
   ]
  },
  {
   "id": "rescate-conductor-furgoneta-a92-km12-bomberos",
   "sec": "sucesos",
   "kicker": "Tráfico",
   "iso": "2026-11-23",
   "hora": "17:47",
   "src": "El Panadero",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Los bomberos rescatan al conductor de una furgoneta que se salió de la A-92 en Alcalá",
   "sub": "El hombre, único ocupante del vehículo, estaba semiinconsciente y en una posición que dificultaba sacarlo; el accidente no causó retenciones",
   "caption": "Imagen de archivo de la sección de sucesos.",
   "foto": "generica-sucesos.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "Una furgoneta se salió de la A-92 en el kilómetro 12, sentido Sevilla, en el término de Alcalá de Guadaíra, la mañana del lunes 23 de noviembre.",
    "El aviso llegó a las 9.13 a través del 112 Andalucía e informaba de una persona atrapada en el vehículo.",
    "Bomberos de los parques de Alcalá y Mairena del Alcor liberaron al conductor, que viajaba solo y estaba semiinconsciente.",
    "No se ha informado del estado del herido ni de las causas de la salida de vía."
   ],
   "body": [
    "Los bomberos rescataron la mañana del lunes 23 de noviembre al conductor de una furgoneta que se salió de la autovía A-92 en el kilómetro 12, sentido Sevilla, dentro del término de Alcalá de Guadaíra. El hombre viajaba solo y estaba semiinconsciente cuando llegaron los equipos de emergencia.",
    "El aviso entró a las 9.13 en el centro de coordinación del Consorcio de Prevención, Extinción de Incendios y Salvamento de la Provincia de Sevilla, a través del 112 Andalucía. La primera información alertaba de una furgoneta que había sufrido una salida de vía y de una persona atrapada en su interior.",
    "Al lugar acudieron dotaciones de los parques de bomberos de Alcalá de Guadaíra y de Mairena del Alcor. El conductor estaba en una posición que complicaba sacarlo del vehículo. Los bomberos lo liberaron y facilitaron su evacuación. En el dispositivo participaron también la Policía Nacional y la Guardia Civil, y se avisó a los servicios de mantenimiento de carreteras.",
    "## Sin cortes en la autovía",
    "El accidente no provocó retenciones ni cortes de circulación en la A-92. Una vez terminado el rescate, las dotaciones regresaron a sus parques.",
    "No se ha informado de la evolución del conductor, de si fue trasladado a un hospital ni de las circunstancias en que la furgoneta abandonó la calzada.",
    "## La vía con más accidentes del término",
    "La A-92 es la carretera que más accidentes con víctimas acumula en el término municipal. Según los microdatos de la Dirección General de Tráfico, <a href='#accidentes-trafico-alcala-2025-dgt'>Alcalá registró 204 accidentes con víctimas en 2025</a>, y 33 de ellos se produjeron en esta autovía, frente a 18 el año anterior. Los dos fallecidos en accidentes de tráfico de 2025 en el municipio murieron en la A-92, en sendas salidas de vía en febrero y mayo.",
    "<span class='howto'><b>Si presencias un accidente.</b> Llama al 112, indica la carretera, el kilómetro y el sentido, y señaliza el vehículo con la baliza V-16 sin ponerte en peligro. No muevas a los heridos salvo riesgo inmediato.</span>"
   ],
   "seo": [
    "rescate-conductor-furgoneta-a-92-alcala-bomberos",
    "Rescate en la A-92: bomberos liberan a un conductor",
    "Bomberos de Alcalá y Mairena del Alcor rescatan al conductor semiinconsciente de una furgoneta que se salió de la A-92 en el kilómetro 12, sentido Sevilla.",
    [
     "A-92",
     "bomberos",
     "accidente de tráfico",
     "Mairena del Alcor",
     "112 Andalucía",
     "rescate"
    ]
   ]
  },
  {
   "id": "plan-vertidos-ilegales-camaras-moviles-vigilancia",
   "sec": "alcala",
   "kicker": "Medio ambiente",
   "iso": "2026-11-23",
   "hora": "17:47",
   "src": "El Panadero",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Alcalá comprará cámaras móviles para vigilar los puntos de vertidos ilegales",
   "sub": "El plan municipal refuerza la vigilancia en polígonos, caminos, zonas rurales y espacios urbanos e incluye carteles sobre sanciones y campañas por los excrementos de perros",
   "caption": "Reunión de coordinación en la que se acordaron las líneas del plan contra los vertidos ilegales.",
   "foto": "plan-vertidos-reunion-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha puesto en marcha un plan contra los vertidos ilegales que incluye la compra de cámaras móviles.",
    "Participan las delegaciones de Urbanismo, Hábitat Urbano y Medio Ambiente, la Policía Local y la empresa municipal AIRA Gestión Ambiental.",
    "La vigilancia se reforzará en polígonos industriales, caminos, zonas rurales y espacios urbanos, con atención a los puntos negros.",
    "El Ayuntamiento no ha detallado cuántas cámaras comprará, su coste ni los plazos."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha puesto en marcha un plan de actuación contra los vertidos ilegales que incluye la compra de cámaras móviles para vigilar los lugares donde se producen vertidos. Las líneas del plan salieron de una reunión de coordinación encabezada por la alcaldesa, Ana Isabel Jiménez, cuyo contenido se conoció el lunes 23 de noviembre.",
    "En el plan trabajan las delegaciones de Urbanismo, Hábitat Urbano y Medio Ambiente, la Policía Local y la empresa municipal AIRA Gestión Ambiental. Según el Ayuntamiento, el objetivo es detectar a quienes tiran residuos fuera de los lugares autorizados y sancionarlos.",
    "## Dónde se vigilará",
    "La vigilancia se reforzará en los polígonos industriales, en los caminos, en las zonas rurales y en los espacios urbanos, con un seguimiento específico de los puntos negros, los lugares donde los vertidos se repiten.",
    "El plan prevé también la instalación de carteles que informen de las sanciones administrativas y de las posibles consecuencias penales de los vertidos, y campañas dirigidas a los dueños de perros para que recojan los excrementos de sus animales en la vía pública.",
    "El Ayuntamiento no ha detallado cuántas cámaras comprará, cuánto costarán ni cuándo empezarán a funcionar.",
    "## Casos recientes",
    "En octubre, la Policía Local identificó y denunció al autor de los vertidos de aceites y sustancias tóxicas en La Pirotecnia, junto a una casa abandonada, tras la queja de un vecino. El responsable admitió los hechos y el Ayuntamiento le abrió un expediente sancionador. A finales de septiembre, la Policía Local tenía a doce personas y empresas investigadas por vertidos en polígonos y caminos del término.",
    "<span class='howto'><b>Dónde dejar los residuos.</b> El punto limpio de San Juan, gestionado por AIRA, recibe aceites y otros residuos que no pueden ir al contenedor, y abre también los sábados y los domingos. AIRA retira además muebles y enseres a domicilio de forma gratuita.</span>"
   ],
   "seo": [
    "plan-vertidos-ilegales-camaras-moviles-alcala",
    "Vertidos ilegales: Alcalá tendrá cámaras móviles",
    "El Ayuntamiento de Alcalá de Guadaíra comprará cámaras móviles y reforzará la vigilancia en polígonos, caminos y zonas rurales contra vertidos ilegales.",
    [
     "vertidos ilegales",
     "Policía Local",
     "AIRA Gestión Ambiental",
     "Ana Isabel Jiménez",
     "medio ambiente",
     "puntos negros"
    ]
   ]
  },
  {
   "id": "maria-pavon-oro-mejor-boxeadora-antequera",
   "sec": "deportes",
   "kicker": "Boxeo",
   "iso": "2026-11-23",
   "hora": "17:47",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8446/la-alcalarena-maria-pavon-conquista-un-nuevo-oro-y-el-trofeo-a-la-mejor-boxeadora-en-antequera",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La alcalareña María Pavón gana el oro y el trofeo a la mejor boxeadora en Antequera",
   "sub": "La deportista, de 11 años, se impuso en la categoría infantil femenina de un campeonato con unos 90 participantes de toda Andalucía y suma ya nueve oros",
   "caption": "María Pavón, con la medalla de oro y el trofeo a la mejor boxeadora en Antequera.",
   "foto": "maria-pavon-oro-antequera-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "La boxeadora alcalareña María Pavón Salguero, de 11 años, ganó la medalla de oro en la categoría infantil femenina del Campeonato de Boxeo Formas de Antequera.",
    "También recibió el trofeo a la mejor boxeadora del campeonato, que reunió a unos 90 participantes de 5 a 14 años de varias provincias andaluzas.",
    "Con este resultado acumula nueve medallas de oro y seis trofeos a la mejor boxeadora, según el portal deportivo municipal."
   ],
   "body": [
    "La boxeadora alcalareña María Pavón Salguero, de 11 años, ha ganado la medalla de oro en la categoría infantil femenina del Campeonato de Boxeo Formas celebrado en Antequera (Málaga). Además, la organización le entregó el trofeo a la mejor boxeadora de la competición, según ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento de Alcalá de Guadaíra.",
    "El campeonato reunió a unos 90 deportistas de entre 5 y 14 años llegados de distintas provincias andaluzas. María Pavón compite con el Carmonense Club Toro Boxing.",
    "## Nueve oros",
    "Con el de Antequera, la joven deportista suma nueve medallas de oro y seis trofeos a la mejor boxeadora en las competiciones en las que ha participado, según el mismo portal municipal, que no detalla en qué campeonatos los ha conseguido.",
    "El resultado se suma a otros éxitos recientes de deportistas alcalareños en los deportes de contacto. Otro deportista alcalareño, el luchador Diogo Miguel Silva, <a href='#diogo-miguel-silva-campeon-mundo-k1-fabio-loisi'>se proclamó campeón del mundo de K1</a> en una velada celebrada en El Puerto de Santa María."
   ],
   "seo": [
    "maria-pavon-oro-mejor-boxeadora-antequera",
    "María Pavón, oro y mejor boxeadora en Antequera",
    "La alcalareña María Pavón, de 11 años, gana el oro infantil femenino y el trofeo a la mejor boxeadora en el Campeonato de Boxeo Formas de Antequera.",
    [
     "María Pavón",
     "boxeo",
     "Antequera",
     "Carmonense Club Toro Boxing",
     "deporte base",
     "Alcalá+Deporte"
    ]
   ]
  },
  {
   "id": "copa-andalucia-escalada-bloque-wiseclimb-celebrada",
   "sec": "deportes",
   "kicker": "Escalada",
   "iso": "2026-11-23",
   "hora": "17:47",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8447/alcala-de-guadaira-reune-a-la-escalada-andaluza-en-la-ii-prueba-de-la-copa-de-andalucia-de-bloque",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Wiseclimb reúne a la escalada andaluza en la segunda prueba de la Copa de Andalucía de Bloque",
   "sub": "La competición se disputó el sábado 21 y el domingo 22 de noviembre en Alcalá, con categorías desde sub-9 hasta absoluta",
   "caption": "Montaje de presas en el rocódromo de Wiseclimb antes de la Copa de Andalucía de Bloque.",
   "foto": "wiseclimb-rocodromo-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Alcalá de Guadaíra acogió el 21 y el 22 de noviembre la II Prueba de la Copa de Andalucía de Escalada de Bloque, en las instalaciones de Wiseclimb.",
    "La organizó el CD Climbing Canyon, bajo la supervisión de Emilio Acosta Granados, con la Federación Andaluza de Deportes de Montaña, Escalada y Senderismo (FADMES).",
    "Compitieron escaladores de todas las categorías, de sub-9 a absoluta; no se han publicado los resultados ni el número de participantes."
   ],
   "body": [
    "Las instalaciones de Wiseclimb, en Alcalá de Guadaíra, acogieron el sábado 21 y el domingo 22 de noviembre la segunda prueba de la Copa de Andalucía de Escalada de Bloque, con escaladores de todas las categorías, desde sub-9 hasta absoluta, según ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento.",
    "La prueba la organizó el Club Deportivo Climbing Canyon, bajo la supervisión de Emilio Acosta Granados, junto con la Federación Andaluza de Deportes de Montaña, Escalada y Senderismo (FADMES).",
    "## Una prueba puntuable",
    "La escalada de bloque se practica en paredes de poca altura, sin cuerda y con colchonetas en el suelo. La Copa de Andalucía se compone de varias pruebas que suman puntos en una clasificación acumulada. Como se explicó al <a href='#copa-andalucia-escalada-bloque-wiseclimb-21-22-noviembre'>anunciar la cita de Alcalá</a>, solo los deportistas con licencia federativa anual de la FADMES o de la Federación Española de Deportes de Montaña y Escalada (FEDME) podían optar al podio y puntuar en la general. Quienes tenían una licencia de medio año o de un día pudieron competir, pero sin opción a podio ni a puntos.",
    "Alcalá+Deporte no ha publicado el número de participantes ni las clasificaciones de la prueba. Tampoco ha detallado si hubo escaladores de clubes alcalareños entre los premiados."
   ],
   "seo": [
    "copa-andalucia-escalada-bloque-alcala-wiseclimb",
    "Copa de Andalucía de Escalada de Bloque en Alcalá",
    "Wiseclimb, en Alcalá de Guadaíra, acogió el 21 y 22 de noviembre la II Prueba de la Copa de Andalucía de Escalada de Bloque, de sub-9 a absoluta.",
    [
     "escalada",
     "Copa de Andalucía de Bloque",
     "Wiseclimb",
     "CD Climbing Canyon",
     "FADMES",
     "Emilio Acosta Granados"
    ]
   ]
  },
  {
   "id": "alcala-generales-secciones-2016-2023",
   "sec": "politica",
   "kicker": "Elecciones",
   "iso": "2026-11-23",
   "hora": "07:40",
   "src": "Ministerio del Interior",
   "fuente_url": "https://infoelectoral.interior.gob.es/es/elecciones-celebradas/area-de-descargas/",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El PSOE ganó en Alcalá las cuatro últimas generales y el PP fue primero en 12 de sus 49 secciones en 2023",
   "sub": "La participación de 2023 osciló entre el 81,9 % de la sección más votante y el 45,4 % de la que menos, según los resultados por mesa del Ministerio del Interior",
   "caption": "Voto válido del PSOE, el PP y Vox en Alcalá de Guadaíra en las generales de 2016, abril de 2019, noviembre de 2019 y 2023. El PSOE fue primero en las cuatro.",
   "foto": "alcala-generales-secciones-2016-2023-gfx2.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "El PSOE fue el partido más votado en Alcalá de Guadaíra en las generales de 2016, abril de 2019, noviembre de 2019 y 2023.",
    "En 2023 el PP fue primero en 12 de las 49 secciones censales del municipio, frente a 4 en las dos elecciones de 2019 y 13 en 2016.",
    "La participación en Alcalá fue del 66,0 % en 2023, con un máximo del 81,9 % y un mínimo del 45,4 % según la sección.",
    "Los datos salen de los resultados por mesa del Ministerio del Interior y no incluyen el voto de los residentes en el extranjero."
   ],
   "body": [
    "El PSOE fue el partido más votado en Alcalá de Guadaíra en las cuatro elecciones generales celebradas entre 2016 y 2023, pero el mapa por secciones cambió. En julio de 2023 el PP fue primero en 12 de las 49 secciones censales, según los resultados por mesa del Ministerio del Interior analizados por El Panadero.",
    "El análisis llega a seis días de las <a href='#mesas-electorales-sorteo-pleno-29-noviembre'>generales del domingo 29 de noviembre</a>. Una sección censal es la unidad mínima del censo electoral: agrupa a unos pocos miles de electores de unas calles concretas y vota en una o varias mesas. Alcalá tenía 47 secciones en 2016, 48 en las dos elecciones de 2019 y 49 en 2023.",
    "## Cuatro generales en el conjunto de Alcalá",
    "En 2016 el PSOE obtuvo el 32,5 % del voto válido en Alcalá, por delante del PP (25,1 %), la candidatura de Podemos e IU (22,3 %) y Ciudadanos (15,6 %). En abril de 2019 subió al 35,0 %, con Ciudadanos (18,1 %) como segunda fuerza. En noviembre de 2019 logró el 33,5 % y Vox fue segundo con el 19,6 %.",
    "En 2023 el PSOE alcanzó el 36,1 %, su mejor resultado de las cuatro citas, y el PP pasó al 30,5 %, frente al 15,0 % de noviembre de 2019. Vox se quedó en el 15,5 % y Sumar, en el 14,4 %. Ciudadanos no se presentó.",
    "## Dónde ganó cada partido",
    "El PSOE fue primero en 32 secciones en 2016, en 43 en abril de 2019, en 42 en noviembre de 2019 y en 37 en 2023. El PP ganó en 13 en 2016, en cuatro en cada elección de 2019 y en 12 en 2023. Vox fue primero en una sección en abril de 2019 y en dos en noviembre de ese año.",
    "El mejor porcentaje del PP en 2023 fue el 58,6 % de la sección del centro histórico que incluye la plaza de Cervantes, la plaza del Cabildo y la calle Alcalá y Orti. Casi igualó esa cifra, con el 58,4 %, la sección de las urbanizaciones Sevilla-Golf, Torrequinto y El Regidor, donde Vox obtuvo su mejor dato (28,0 %) y el PSOE, el peor (7,9 %). El mejor resultado del PSOE, el 57,3 %, fue en la sección de las calles Écija, Paradas y Morón de la Frontera.",
    "## Diferencias de participación",
    "En 2023 votaron 39.323 de los 59.569 electores residentes en Alcalá, el 66,0 %. La participación fue del 66,2 % en 2016, del 71,4 % en abril de 2019 y del 66,9 % en noviembre de 2019. Por secciones, en 2023 fue del 81,9 % en la de las calles Pino Blanco, Pino Real y Pino Piñonero, y del 45,4 % en la de la avenida de Salud Gutiérrez y las calles Pintor Luna Rubio y Maestro José Gandulfo.",
    "Las cifras de participación se calculan sobre el censo de residentes en España y no incluyen el voto de los alcalareños que viven en el extranjero, que se cuenta aparte. Los límites de algunas secciones cambian entre elecciones, por lo que las comparaciones sección a sección entre años son aproximadas.",
    "<span class='howto'>Datos: resultados por mesa de las elecciones generales de junio de 2016, abril de 2019, noviembre de 2019 y julio de 2023 (Ministerio del Interior, área de descargas de Infoelectoral). Las calles de cada sección salen del callejero del censo electoral del INE de julio de 2023. Porcentajes de voto sobre voto válido. Los colegios abren el domingo 29 de noviembre de 9.00 a 20.00. El Panadero publicará el lunes 30 los resultados del 29N en Alcalá.</span>"
   ],
   "seo": [
    "voto-secciones-alcala-generales-psoe-pp",
    "Voto por secciones en Alcalá: generales de 2016 a 2023",
    "El PSOE ganó en Alcalá de Guadaíra las generales de 2016 a 2023 y el PP fue primero en 12 de sus 49 secciones censales en 2023, según Interior.",
    [
     "elecciones generales",
     "secciones censales",
     "participación electoral",
     "PSOE",
     "PP",
     "Vox",
     "Ministerio del Interior"
    ]
   ]
  },
  {
   "id": "accidentes-trafico-alcala-2025-dgt",
   "sec": "sucesos",
   "kicker": "Tráfico",
   "iso": "2026-11-23",
   "hora": "07:40",
   "src": "DGT",
   "fuente_url": "https://www.dgt.es/menusecundario/dgt-en-cifras/dgt-en-cifras-resultados/dgt-en-cifras-detalle/Ficheros-de-microdatos-de-accidentes-con-victimas-2025/",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Alcalá registró 204 accidentes con víctimas en 2025, la cifra más alta desde 2016",
   "sub": "Los siniestros subieron un 25,2 % en un año, frente al 4,2 % de la provincia, y la A-92 concentró 33, según los microdatos de la DGT",
   "caption": "Accidentes de tráfico con víctimas en Alcalá de Guadaíra entre 2016 y 2025, según los microdatos de la DGT.",
   "foto": "accidentes-trafico-alcala-2025-dgt-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "Alcalá de Guadaíra registró 204 accidentes de tráfico con víctimas en 2025, frente a 163 en 2024.",
    "Es la cifra más alta de la serie de la DGT desde 2016; el máximo anterior eran los 169 accidentes de 2022.",
    "Los accidentes de 2025 dejaron 296 víctimas: dos fallecidos, 22 heridos hospitalizados y 272 heridos no hospitalizados.",
    "La A-92 sumó 33 accidentes con víctimas en el término municipal en 2025, frente a 18 en 2024."
   ],
   "body": [
    "Alcalá de Guadaíra registró 204 accidentes de tráfico con víctimas en 2025, un 25,2 % más que los 163 de 2024 y la cifra más alta desde 2016, según los microdatos de la Dirección General de Tráfico (DGT) publicados en octubre de 2026. En la provincia de Sevilla la subida fue del 4,2 %.",
    "Esos 204 accidentes dejaron 296 víctimas en el término municipal: dos personas fallecidas en los 30 días siguientes, 22 heridos que necesitaron hospitalización y 272 heridos leves. En 2024 hubo 221 víctimas, con dos fallecidos y 20 heridos hospitalizados.",
    "## Más accidentes en ciudad y en carretera",
    "De los 204 accidentes, 118 ocurrieron en vías urbanas y 86 en vías interurbanas. Los 86 interurbanos son el dato más alto de la serie: en 2016 fueron 59. La A-92 concentró 33 de ellos en 2025, frente a 18 el año anterior. Le siguieron la A-376 (ocho), la SE-40 (siete), la A-392 (seis) y la A-360 (seis).",
    "Los dos fallecidos de 2025 murieron en accidentes en la A-92, en febrero y en mayo, en salidas de la vía. Entre 2016 y 2025 los accidentes en el término de Alcalá causaron 31 muertes, según la misma estadística.",
    "Por tipo, los más frecuentes fueron las colisiones fronto-laterales (43), los alcances (35) y los atropellos a personas (25). Hubo además 19 caídas, una categoría que la DGT reserva sobre todo a motocicletas y bicicletas.",
    "## Alcalá frente a sus vecinos",
    "Dos Hermanas pasó de 172 accidentes con víctimas en 2024 a 263 en 2025. Utrera bajó de 103 a 85. La serie de Alcalá tuvo su mínimo en 2020, con 116 accidentes, el año de las restricciones de movilidad por la pandemia, y bajó de nuevo a 121 en 2023 antes de subir en los dos años siguientes.",
    "La estadística de la DGT recoge los accidentes con al menos un herido o fallecido de los que informan la Guardia Civil y las policías locales. No incluye los choques con daños materiales. La cifra de un municipio depende de la vía donde ocurre el accidente, no del domicilio de los conductores, por lo que en Alcalá pesa el tráfico de paso por la A-92 y la SE-40. En 2025, 126 accidentes de la provincia figuran sin municipio asignado.",
    "Los datos de 2026 no están aún publicados. En lo que va de año, El Panadero ha informado de sucesos como el <a href='#atropello-mortal-autobus-cabeza-hermosa'>atropello mortal en la urbanización Cabeza Hermosa</a>.",
    "<span class='howto'>Datos: microdatos de accidentes con víctimas de la DGT, años 2016 a 2025 (el de 2025 se publicó el 20 de octubre de 2026). Fallecidos y heridos computados a 30 días. Accidente urbano o interurbano según la vía. La DGT publica cada otoño los microdatos del año anterior: los de 2026 saldrán previsiblemente en el otoño de 2027.</span>"
   ],
   "seo": [
    "accidentes-trafico-alcala-2025-dgt-a92",
    "Accidentes de tráfico en Alcalá: 204 con víctimas en 2025",
    "Alcalá de Guadaíra tuvo 204 accidentes de tráfico con víctimas en 2025, un 25,2 % más que en 2024, con 33 en la A-92, según los microdatos de la DGT.",
    [
     "accidentes de tráfico",
     "DGT",
     "A-92",
     "seguridad vial",
     "SE-40",
     "víctimas de tráfico"
    ]
   ]
  },
  {
   "id": "sociedades-creadas-alcala-2026-borme",
   "sec": "economia",
   "kicker": "Empresas",
   "iso": "2026-11-23",
   "hora": "07:40",
   "src": "BORME",
   "fuente_url": "https://www.boe.es/diario_borme/",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Alcalá suma 168 sociedades nuevas en 2026, dos más que hace un año, y es el tercer municipio de Sevilla",
   "sub": "La provincia crece un 10,8 % en constituciones de empresas hasta el 20 de noviembre; dos de cada tres sociedades alcalareñas nacen con 3.000 euros de capital o menos",
   "caption": "Sociedades mercantiles constituidas por cada 10.000 habitantes en Alcalá de Guadaíra, Dos Hermanas, Utrera y la provincia de Sevilla en 2026.",
   "foto": "sociedades-creadas-alcala-2026-borme-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "El BORME publicó entre el 1 de enero y el 20 de noviembre de 2026 la constitución de 168 sociedades con domicilio en Alcalá de Guadaíra, frente a 166 en el mismo periodo de 2025.",
    "Alcalá es el tercer municipio de la provincia de Sevilla por número de sociedades creadas, tras Sevilla (2.047) y Dos Hermanas (329).",
    "En toda la provincia se constituyeron 4.669 sociedades, un 10,8 % más que en 2025.",
    "Alcalá registra 21,7 sociedades nuevas por cada 10.000 habitantes, por debajo de la media provincial de 23,6."
   ],
   "body": [
    "El Boletín Oficial del Registro Mercantil (BORME) publicó entre el 1 de enero y el 20 de noviembre de 2026 la constitución de 168 sociedades con domicilio social en Alcalá de Guadaíra, dos más que en el mismo periodo de 2025, según el recuento de El Panadero. La provincia de Sevilla creció un 10,8 %.",
    "Con esas 168 sociedades, Alcalá es el tercer municipio de la provincia por número de empresas creadas, después de Sevilla (2.047) y Dos Hermanas (329), y por delante de Mairena del Aljarafe (163) y Utrera (135). En todo el territorio del Registro Mercantil de Sevilla se constituyeron 4.669 sociedades, frente a 4.215 en el mismo periodo del año anterior.",
    "## Crecen menos que la provincia",
    "El aumento de Alcalá, del 1,2 %, queda lejos del de sus vecinos. Dos Hermanas pasó de 299 a 329 sociedades nuevas (un 10,0 % más) y Utrera, de 106 a 135 (un 27,4 % más).",
    "En relación con su población, Alcalá suma 21,7 sociedades nuevas por cada 10.000 habitantes, con el padrón del INE a 1 de enero de 2025. La media de la provincia es de 23,6. Dos Hermanas registra 23,1 y Utrera, 25,8.",
    "## Pequeñas y sin un sector dominante",
    "La mayoría de las sociedades alcalareñas nace con poco capital. De las 168, 111 declararon 3.000 euros o menos, dos de cada tres. Solo 16 superaron los 60.000 euros, y la mayor se constituyó con cinco millones. Desde la Ley 18/2022, de creación y crecimiento de empresas, una sociedad limitada puede constituirse con un euro, pero ninguna de las de Alcalá declaró menos de 3.000.",
    "La construcción y la actividad inmobiliaria aparecen en el objeto social de 32 de las nuevas sociedades, frente a 51 en el mismo periodo de 2025. La hostelería figura en 18. Muchas empresas declaran varias actividades a la vez, por lo que estas cifras no suman el total.",
    "El recuento no mide toda la actividad emprendedora: no incluye a los trabajadores autónomos, que no se inscriben en el Registro Mercantil, ni descuenta las sociedades que se disuelven. El domicilio social es el que figura en la escritura de constitución y no siempre coincide con el lugar donde la empresa trabaja. El Panadero informó este mes de las <a href='#bop-bases-ayudas-comercios-pai-edil'>bases de las ayudas europeas para que pymes y autónomos modernicen sus comercios</a>.",
    "<span class='howto'>Datos: anuncios de constitución publicados en la sección primera del BORME (Registro Mercantil de Sevilla) del 1 de enero al 20 de noviembre de 2025 y de 2026, contados por el municipio del domicilio social. Población: padrón continuo del INE a 1 de enero de 2025. El BORME se publica cada día laborable; El Panadero actualizará el recuento con el año completo en enero.</span>"
   ],
   "seo": [
    "sociedades-creadas-alcala-2026-borme",
    "Sociedades creadas en Alcalá en 2026: 168 según el BORME",
    "El BORME publicó hasta el 20 de noviembre 168 sociedades nuevas con domicilio en Alcalá de Guadaíra, dos más que en 2025; la provincia creció un 10,8 %.",
    [
     "creación de empresas",
     "BORME",
     "Registro Mercantil de Sevilla",
     "sociedades limitadas",
     "emprendimiento",
     "Dos Hermanas"
    ]
   ]
  },
  {
   "id": "bomberos-oposicion-cinco-plazas-primera-prueba-2-diciembre",
   "sec": "economia",
   "kicker": "Empleo público",
   "iso": "2026-11-23",
   "hora": "06:55",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Lista-definitiva-de-personas-admitidas-y-excluidas-y-fecha-de-comienzo-de-las-pruebas-de-la-convocatoria-para-la-provision-en-turno-libre-de-cinco-plazas-de-Bombero-vacantes-en-la-plantilla-de-pers/",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La oposición a cinco plazas de bombero de Alcalá arranca el 2 de diciembre con 409 aspirantes admitidos",
   "sub": "El BOP publica la lista definitiva del proceso, con 11 excluidos, y cita a los opositores a la primera prueba a las 16.00 en el IES Albero",
   "caption": "Datos de la convocatoria de cinco plazas de bombero del Ayuntamiento de Alcalá de Guadaíra.",
   "foto": "bomberos-oposicion-cinco-plazas-primera-prueba-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha aprobado la lista definitiva de su oposición a cinco plazas de bombero, de turno libre y de la oferta de empleo público de 2026.",
    "Hay 409 aspirantes admitidos y 11 excluidos, diez de ellos por no acreditar seis meses como demandantes de empleo.",
    "La primera prueba será el miércoles 2 de diciembre a las 16.00 en el IES Albero, en la avenida del Tren de los Panaderos.",
    "La plantilla de bomberos reclama al menos nueve efectivos más para el parque de la ciudad."
   ],
   "body": [
    "La oposición del Ayuntamiento de Alcalá de Guadaíra para cubrir cinco plazas de bombero empezará el miércoles 2 de diciembre, a las 16.00, con 409 aspirantes admitidos. El Boletín Oficial de la Provincia (BOP) de Sevilla publica este lunes 23 de noviembre la lista definitiva del proceso y la fecha, el lugar y la hora de la primera prueba.",
    "Las plazas son de bombero o bombera, del subgrupo C1, para personal funcionario, y se cubren por turno libre dentro de la oferta de empleo público de 2026. La lista se aprobó por la resolución 5903/2026, del 12 de noviembre, según el <a href='https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Lista-definitiva-de-personas-admitidas-y-excluidas-y-fecha-de-comienzo-de-las-pruebas-de-la-convocatoria-para-la-provision-en-turno-libre-de-cinco-plazas-de-Bombero-vacantes-en-la-plantilla-de-pers/'>anuncio del BOP</a>.",
    "La primera prueba se celebrará en el Instituto de Educación Secundaria Albero, en el número 13 de la avenida del Tren de los Panaderos. El anuncio autoriza además a la presidencia del tribunal a convocar sus sesiones fuera de la jornada de trabajo.",
    "## Once aspirantes excluidos",
    "La lista definitiva deja fuera a 11 aspirantes. Diez no acreditaron seis meses de antigüedad como demandantes de empleo a la fecha en que la convocatoria se publicó en el Boletín Oficial del Estado, y uno no aportó el justificante de pago de la tasa. Las bases recogen también la exclusión por presentar la solicitud fuera de plazo, aunque en la lista definitiva nadie queda fuera por ese motivo.",
    "El Ayuntamiento publica la misma relación en su tablón de anuncios y en el portal de transparencia, a través de la sede electrónica municipal.",
    "## Una plantilla que pide refuerzos",
    "La convocatoria llega en plena reclamación de los bomberos de la ciudad. La plantilla explicó el jueves 19 de noviembre a El Panadero que el parque cuenta con 31 bomberos operativos, tres de ellos interinos, y que <a href='#bomberos-alcala-denuncian-falta-plantilla-vehiculo-altura'>pide al menos nueve efectivos más</a>, además del pago de los servicios de refuerzo que asegura que se le adeudan. Según su versión, los procesos selectivos en marcha tardarán al menos año y medio en dar bomberos operativos.",
    "El Sindicato Andaluz de Bomberos había pedido a principios de mes que <a href='#bomberos-alcala-sindicato-pide-mas-plantilla-oep-2027'>la oferta de empleo de 2027 aumente la plantilla</a>. Por parte del gobierno municipal, la delegada de Hacienda, Mª de los Ángeles Ballesteros, sostuvo a finales de octubre que el parque ha incorporado cinco bomberos en 2026 y que habrá <a href='#policia-local-bomberos-plazas-tribuna'>nuevas plazas de bombero en 2027</a>, sin concretar cuántas.",
    "<span class='howto'><b>Oposición a bombero (cinco plazas, turno libre).</b> Primera prueba: miércoles 2 de diciembre de 2026, a las 16.00. Lugar: IES Albero, avenida del Tren de los Panaderos, 13, Alcalá de Guadaíra. Lista definitiva de admitidos y excluidos: BOP de Sevilla núm. 226, del 23 de noviembre, y sede electrónica del Ayuntamiento (ciudadalcala.sedelectronica.es).</span>"
   ],
   "seo": [
    "oposicion-bombero-alcala-cinco-plazas-primera-prueba",
    "Oposición a bombero en Alcalá: 1.ª prueba el 2 de diciembre",
    "Alcalá de Guadaíra publica la lista definitiva de la oposición a cinco plazas de bombero: 409 admitidos y 1.ª prueba el 2 de diciembre en el IES Albero.",
    [
     "oposiciones",
     "bomberos de Alcalá",
     "empleo público",
     "BOP de Sevilla",
     "IES Albero",
     "oferta de empleo público 2026"
    ]
   ]
  },
  {
   "id": "cartel-reyesilos-2027-eliseo-leon-rodriguez",
   "sec": "cultura",
   "kicker": "Cabalgatas de Reyes",
   "iso": "2026-11-23",
   "hora": "06:55",
   "src": "Cabalgata ReyeSilos (Facebook)",
   "fuente_url": "https://www.facebook.com/1517510493848468/posts/1523577439908440",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Eliseo León Rodríguez firma el cartel de la Cabalgata ReyeSilos de 2027, un día después de la coronación",
   "sub": "La obra, con el lema «Donde nace la ilusión, comienza la magia», presenta a los tres Reyes Magos sobre una estrella dorada",
   "caption": "Cartel de la Cabalgata ReyeSilos de Alcalá de Guadaíra para 2027, obra de Eliseo León Rodríguez.",
   "foto": "cartel-reyesilos-2027-eliseo-leon-of.jpg",
   "fotocredito": "Facebook de la Cabalgata ReyeSilos",
   "encuadre": "contain",
   "claves": [
    "La Cabalgata ReyeSilos, del barrio de Silos, ha presentado su cartel de 2027, obra de Eliseo León Rodríguez.",
    "El cartel muestra a los tres Reyes Magos, cada uno en un color, alrededor de una estrella dorada, con el lema «Donde nace la ilusión, comienza la magia».",
    "La asociación coronó el sábado 21 de noviembre en la Hacienda La Caridad a sus Reyes Magos y a su Estrella de 2027."
   ],
   "body": [
    "La Cabalgata ReyeSilos, la del barrio de Silos de Alcalá de Guadaíra, ha presentado el cartel de su desfile de 2027, obra de Eliseo León Rodríguez. La asociación lo dio a conocer el domingo 22 de noviembre en su perfil de Facebook, un día después de coronar a los Reyes Magos y a la Estrella que saldrán en la cabalgata.",
    "El cartel presenta a los tres Reyes Magos dibujados cada uno en un color, rojo, azul y verde, alrededor de una gran estrella dorada. El rey del centro, con turbante, abraza a un niño, y el de la derecha le tiende un pequeño regalo. En la parte superior se lee «Reyes Silos 2027» y, abajo, el lema «Donde nace la ilusión, comienza la magia». La asociación ha puesto la obra también como imagen de portada de su perfil.",
    "## Coronación en la Hacienda La Caridad",
    "La asociación coronó el sábado 21 de noviembre, en un almuerzo en la Hacienda La Caridad, a sus Reyes de 2027, que recibieron las coronas de los monarcas salientes, como <a href='#cabalgatas-beduinos-campo-beatas-almuerzo-coronacion-reyesilos'>adelantó El Panadero</a>. David Martínez Naranjo será Melchor; Álvaro Gómez García, Gaspar, y Diego Fuentes Cruz, Baltasar. Ángela Harana Sánchez será la Estrella de la Ilusión. Al acto asistieron miembros de la Corporación municipal, encabezados por la alcaldesa, Ana Isabel Jiménez, que agradeció el trabajo de la Asociación Reyes Magos Silos, según la nota del <a href='https://www.alcaladeguadaira.es/noticias/10025/la-coronacion-de-ssmm-los-reyes-magos-de-la-cabalgata-silos-adelanta-la-ilusion-navidena-en-alcala'>Ayuntamiento</a>.",
    "Según el Ayuntamiento, Martínez Naranjo es licenciado en Historia del Arte y ha ocupado cargos directivos y de entrenador en clubes de fútbol base de Alcalá. Gómez García es empresario y pertenece a las hermandades del Perdón y del Rocío. Fuentes Cruz regenta un pequeño negocio en la calle Silos. La Estrella está vinculada a la cabalgata desde niña y es conocida en la Hermandad del Rosario.",
    "La Hermandad de San Mateo ha informado en sus redes de que una representación suya acompañó a Gómez García, hermano de la corporación, en su coronación como Gaspar para el próximo 6 de enero.",
    "La cabalgata del barrio se suma a la que organiza la Asociación de la Cabalgata de Reyes la tarde del 5 de enero, cuyo cartel, obra de Mariano Fernández Goncer, <a href='#cartel-cabalgata-reyes-2027-mariano-fernandez-goncer'>se presentó el viernes 20 de noviembre</a>."
   ],
   "seo": [
    "cartel-cabalgata-reyesilos-2027-eliseo-leon",
    "Cartel de la Cabalgata ReyeSilos 2027 en Alcalá",
    "La Cabalgata ReyeSilos de Alcalá de Guadaíra presenta su cartel de 2027, obra de Eliseo León Rodríguez, tras coronar a sus Reyes Magos y a su Estrella.",
    [
     "Cabalgata ReyeSilos",
     "barrio de Silos",
     "Reyes Magos 2027",
     "Eliseo León Rodríguez",
     "cartel",
     "Hacienda La Caridad"
    ]
   ]
  },
  {
   "id": "diogo-miguel-silva-campeon-mundo-k1-fabio-loisi",
   "sec": "deportes",
   "kicker": "Deportes de contacto",
   "iso": "2026-11-22",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8445/diogo-miguel-silva-se-proclama-campeon-del-mundo-de-k1",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El alcalareño Diogo Miguel Silva se proclama campeón del mundo de K1 tras vencer a Fabio Loisi",
   "sub": "El deportista del CD Qalat, de 25 años, ganó el título el domingo en la velada CFNT de El Puerto de Santa María",
   "caption": "Diogo Miguel Silva, con el cinturón de campeón, sobre el ring de la velada CFNT en El Puerto de Santa María.",
   "foto": "diogo-silva-campeon-mundo-k1-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "Diogo Miguel Silva, deportista de Alcalá de Guadaíra, se proclamó campeón del mundo de K1 el domingo 22 de noviembre de 2026.",
    "Ganó al francés Fabio Loisi, que defendía el título, en la velada CFNT de El Puerto de Santa María (Cádiz).",
    "Silva, de 25 años y del CD Qalat, preparó el combate durante tres meses en Tailandia con su entrenador, Rafa Martínez."
   ],
   "body": [
    "El alcalareño Diogo Miguel Silva se ha proclamado campeón del mundo de K1 al vencer al francés Fabio Loisi en la velada CFNT celebrada el domingo 22 de noviembre de 2026 en El Puerto de Santa María (Cádiz), según ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento de Alcalá de Guadaíra.",
    "Loisi llegaba al combate como campeón vigente, y Silva aspiraba a quitarle el título en <a href='#diogo-miguel-silva-titulo-mundial-k1-puerto-santa-maria'>la pelea que el portal municipal anunció la semana pasada</a>. El K1 es una modalidad del kickboxing que permite golpear con los puños, las piernas y las rodillas.",
    "## Tres meses en Tailandia",
    "Silva, de 25 años, compite con el CD Qalat, de Alcalá, y lo entrena Rafa Martínez, a quien el portal municipal atribuye un papel fundamental en su carrera. Para este combate se preparó durante tres meses en Tailandia.",
    "El título mundial se suma a un palmarés que ya incluía cuatro campeonatos de España y seis de Andalucía en categoría amateur. Como profesional, Silva había sido campeón de Europa de la WAKO, una de las principales federaciones internacionales de deportes de contacto, y había peleado en ONE Championship, una de las grandes ligas internacionales del sector. Antes del combate, el deportista había pedido el apoyo de empresas, entidades y patrocinadores para seguir con su preparación y su carrera internacional, según recogió el portal municipal.",
    "El triunfo llega en un buen momento para el deporte alcalareño de competición. Esta misma semana, la Peña Ajedrecística Oromana disputa en Marbella <a href='#pena-ajedrecistica-oromana-division-honor-marbella-2026'>el Campeonato de España de División de Honor</a>, la máxima categoría del ajedrez nacional por equipos, que termina el jueves 26 de noviembre.",
    "<span class='howto'><b>Diogo Miguel Silva.</b> 25 años. Club: CD Qalat (Alcalá de Guadaíra). Entrenador: Rafa Martínez. Título: campeón del mundo de K1, ganado el 22 de noviembre de 2026 ante Fabio Loisi en la velada CFNT de El Puerto de Santa María (Cádiz). Las empresas interesadas en patrocinar al deportista pueden escribir a Alcalá+Deporte (info@alcalamasdeporte.com).</span>"
   ],
   "seo": [
    "diogo-miguel-silva-campeon-mundo-k1",
    "Diogo Miguel Silva, campeón del mundo de K1",
    "El alcalareño Diogo Miguel Silva gana el título mundial de K1 al vencer a Fabio Loisi en la velada CFNT de El Puerto de Santa María el 22 de noviembre.",
    [
     "Diogo Miguel Silva",
     "K1",
     "kickboxing",
     "CD Qalat",
     "Fabio Loisi",
     "deportes de contacto"
    ]
   ],
   "hora": "21:55"
  },
  {
   "id": "homenaje-manuel-delgado-lianez-pena-betica-miguel-espina",
   "sec": "alcala",
   "kicker": "Asociaciones",
   "iso": "2026-11-22",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1612466754258998",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Peña Bética Miguel Espina homenajea a Manuel Delgado Liánez tras más de 20 años al frente de la entidad",
   "sub": "El acto, en La Harinera del Guadaíra, reunió a la alcaldesa, entidades deportivas y culturales y vecinos del Distrito Este",
   "caption": "Manuel Delgado Liánez, en el centro, junto a la alcaldesa, Ana Isabel Jiménez, y representantes de la Peña Bética Miguel Espina y de la Corporación.",
   "foto": "homenaje-manuel-delgado-lianez-pena-betica-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "La Peña Bética Miguel Espina de Alcalá de Guadaíra homenajeó el domingo 22 de noviembre a Manuel Delgado Liánez, su presidente durante más de dos décadas.",
    "El acto se celebró en La Harinera del Guadaíra con la alcaldesa, Ana Isabel Jiménez, y el delegado de Deportes, Pedro Gracia.",
    "Varias entidades, entre ellas la Federación de Peñas Béticas, entregaron recuerdos al homenajeado."
   ],
   "body": [
    "La Peña Bética Miguel Espina de Alcalá de Guadaíra rindió homenaje el domingo 22 de noviembre de 2026 a Manuel Delgado Liánez, que la presidió durante más de 20 años. El acto se celebró en La Harinera del Guadaíra y el Ayuntamiento se sumó a él, según ha informado en su perfil de Facebook.",
    "Asistieron la alcaldesa, Ana Isabel Jiménez, el delegado de Deportes, Pedro Gracia, y otros miembros de la Corporación municipal. Jiménez destacó, según la nota municipal, «su dedicación por más de dos décadas a una entidad que ha engrandecido» y su labor de cohesión social con los vecinos.",
    "## Recuerdos de varias entidades",
    "Junto a la junta directiva de la peña, varias entidades deportivas y culturales de la ciudad entregaron recuerdos al homenajeado. Entre ellas estaban la Federación de Peñas Béticas, el Club de Fútbol Estrella San Agustín, del que Delgado es socio, y la Hermandad de la Divina Pastora. También participó Juan Espina, hijo de Miguel Espina, el nombre que lleva la peña, además de vecinos y comerciantes del Distrito Este, donde el homenajeado ha desarrollado su actividad social.",
    "Según el Ayuntamiento, Delgado ha llevado su afición al deporte, y sobre todo al fútbol, más allá de la peña: ha narrado partidos del CD Alcalá en la radio local, ha presentado informativos deportivos y ha colaborado con diarios deportivos y programas de televisión.",
    "La alcaldesa aprovechó el acto para reivindicar el papel de las asociaciones en Alcalá. Según la nota municipal, pidió reflexionar sobre cómo sería la ciudad sin el trabajo, muchas veces discreto, de sus entidades, y agradeció a la peña su labor. Jiménez también dedicó el homenaje en sus redes sociales al conjunto del movimiento asociativo de la ciudad.",
    "El homenaje llega en un fin de semana con otros actos de entidades locales, como la <a href='#cabalgatas-beduinos-campo-beatas-almuerzo-coronacion-reyesilos'>coronación de los Reyes Magos de la Cabalgata ReyeSilos</a> el sábado 21 de noviembre."
   ],
   "seo": [
    "homenaje-manuel-delgado-lianez-pena-betica-miguel-espina",
    "Homenaje a Manuel Delgado Liánez en la Peña Bética",
    "La Peña Bética Miguel Espina de Alcalá de Guadaíra homenajea en La Harinera a Manuel Delgado Liánez, su presidente durante más de dos décadas.",
    [
     "Peña Bética Miguel Espina",
     "Manuel Delgado Liánez",
     "La Harinera del Guadaíra",
     "asociaciones",
     "Distrito Este",
     "Ana Isabel Jiménez"
    ]
   ],
   "hora": "21:55"
  },
  {
   "id": "paseando-por-alcala-xxv-edicion-alcazaba-torre-mocha",
   "sec": "cultura",
   "kicker": "Patrimonio",
   "iso": "2026-11-22",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9996/el-ciclo-paseando-por-alcala-culmina-su-xxv-edicion-con-un-recorrido-por-la-alcazaba-de-la-torre-mocha",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "«Paseando por Alcalá» cierra su 25.ª edición con una visita a las obras de la alcazaba de la Torre Mocha",
   "sub": "El arqueólogo Enrique L. Domínguez explicó la restauración de la torre y sus murallas, incluida en el Plan Almena II",
   "caption": "El arqueólogo Enrique L. Domínguez, a la izquierda, durante la visita del ciclo «Paseando por Alcalá» a la zona del Castillo.",
   "foto": "paseando-por-alcala-torre-mocha-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El ciclo municipal «Paseando por Alcalá» cerró su 25.ª edición con una visita guiada a la alcazaba de la Torre Mocha, en la zona del Castillo.",
    "La guio el arqueólogo Enrique L. Domínguez, que explicó las obras de conservación y restauración de la torre y su entorno.",
    "Los trabajos forman parte del Plan Almena II (2019-2030) e incluyen la consolidación de la torre y la restauración de las murallas y el antemuro."
   ],
   "body": [
    "El ciclo municipal de rutas guiadas «Paseando por Alcalá» ha cerrado su 25.ª edición con un recorrido por la alcazaba de la Torre Mocha, en la zona del Castillo de Alcalá de Guadaíra, según ha informado el Ayuntamiento. La visita, titulada «Recuperando la alcazaba de la Torre Mocha», la guio el arqueólogo Enrique L. Domínguez.",
    "Los participantes conocieron el valor arqueológico de la alcazaba y las obras de conservación y restauración que se hacen en la torre y en su entorno dentro del Plan Almena II, que abarca de 2019 a 2030.",
    "## Qué incluyen las obras",
    "Según la explicación del arqueólogo que recoge la nota municipal, los trabajos consisten en la consolidación estructural de la Torre Mocha y su alcazaba, la restauración de los lienzos de muralla, la torre y el antemuro, y la adecuación de los espacios interiores del recinto. La actuación permitirá además recuperar la lectura histórica del entorno de la antigua Puerta de Santa María, uno de los principales accesos al recinto fortificado en la Edad Media.",
    "El Ayuntamiento no ha detallado en la nota el presupuesto de estas obras ni la fecha prevista para terminarlas.",
    "El delegado municipal de Cultura, Christopher Rivas, defendió que el patrimonio histórico es «una parte fundamental de nuestra identidad como ciudad» y que conocer los trabajos de recuperación ayuda a valorarlo. Rivas, cuya delegación organiza también el ciclo de conciertos <a href='#concierto-bondad-candlelight-san-agustin-medio-millar'>Alcalá EnClave de Música</a>, destacó la trayectoria de «Paseando por Alcalá».",
    "El programa lleva más de dos décadas ofreciendo rutas guiadas por la historia, el patrimonio, la arquitectura, los personajes, los paisajes y las tradiciones de la ciudad, abiertas a vecinos y visitantes. Con esta visita termina la edición de este año.",
    "<span class='howto'><b>Paseando por Alcalá.</b> Ciclo municipal de rutas guiadas de la Delegación de Cultura del Ayuntamiento de Alcalá de Guadaíra. La 25.ª edición terminó en noviembre de 2026 con la visita a la alcazaba de la Torre Mocha. Información en www.alcaladeguadaira.es.</span>"
   ],
   "seo": [
    "paseando-por-alcala-alcazaba-torre-mocha",
    "Paseando por Alcalá cierra en la Torre Mocha",
    "El ciclo Paseando por Alcalá termina su 25.ª edición con una visita guiada a las obras de restauración de la alcazaba de la Torre Mocha, en el Castillo.",
    [
     "Paseando por Alcalá",
     "Torre Mocha",
     "Castillo de Alcalá",
     "Plan Almena",
     "patrimonio",
     "Christopher Rivas"
    ]
   ],
   "hora": "21:55"
  },
  {
   "iso": "2026-11-22",
   "hora": "06:52",
   "id": "cristo-rey-2026-borriquita-procesion-eucaristica-san-agustin",
   "sec": "hermandades",
   "kicker": "Cristo Rey",
   "src": "Hermandad de la Borriquita (Facebook)",
   "fuente_url": "https://www.facebook.com/1767714672070448/posts/1775578311284084",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Borriquita celebra su procesión eucarística por San Agustín tras su función de Cristo Rey",
   "sub": "El grupo de metales de la Agrupación Musical del Cristo de la Bondad acompañó el cortejo; Jesús Nazareno luce la túnica de «los cristalitos», de 1856",
   "caption": "Altar de cultos de la Hermandad de la Borriquita por la festividad de Cristo Rey.",
   "foto": "cristo-rey-2026-borriquita-procesion-eucaristica-of.jpg",
   "fotocredito": "Facebook de la Hermandad de la Borriquita",
   "encuadre": "contain",
   "claves": [
    "La Hermandad de la Borriquita celebró el domingo 22 de noviembre su función solemne por la festividad de Jesucristo, Rey del Universo, en San Agustín.",
    "Al terminar salió una procesión eucarística por los alrededores de la parroquia, con el grupo de metales de la Agrupación Musical Santísimo Cristo de la Bondad.",
    "La Hermandad de Jesús viste a Nuestro Padre Jesús Nazareno con la túnica conocida como «la de los cristalitos», bordada en 1856 por Josefa Cano y María Dolores Moreno.",
    "El pintor Ricardo Gil trabaja ya en el cartel de las Glorias, dedicado a la Inmaculada Concepción, según el Consejo de Hermandades."
   ],
   "body": [
    "La Hermandad de la Borriquita de Alcalá de Guadaíra celebró el domingo 22 de noviembre en la parroquia de San Agustín su función solemne por la festividad de Jesucristo, Rey del Universo, y al terminar la misa sacó una procesión eucarística por los alrededores del templo, según ha publicado la hermandad en su perfil de Facebook.",
    "El cortejo lo acompañó el grupo de metales de la Agrupación Musical Santísimo Cristo de la Bondad, que lleva el nombre de uno de los titulares de la cofradía. La hermandad destaca que los cultos reunieron a una numerosa asistencia de hermanos y devotos. El domingo fue además el último día del <a href='#borriquita-besamano-cristo-bondad-mantolin-cristo-rey'>besamano del Cristo de la Bondad</a>, que la hermandad abrió el viernes 20 y en el que la imagen estrenó un mantolín bordado en oro.",
    "## Las hermandades, de gala por Cristo Rey",
    "La Hermandad de Jesús ha vestido para esta solemnidad a Nuestro Padre Jesús Nazareno con la túnica conocida como «la de los cristalitos», según ha informado en sus redes sociales. Es una pieza bordada en 1856 por Josefa Cano y María Dolores Moreno, que restauró en 2013 el taller de José Antonio Grande de León, el mismo que se ha encargado ahora de vestir la imagen. El Nazareno lleva también las antiguas potencias doradas de salida.",
    "La misma hermandad mostró el sábado 21 en el patio de su casa de hermandad, en la calle Alcalá y Orti, <a href='#jesus-paso-san-juan-cartel-semana-santa-foro-formacion'>el paso de San Juan Evangelista ya restaurado</a>, con visitas guiadas de los restauradores.",
    "La Hermandad Servita de Jesús Cautivo cierra también este domingo sus cultos a Cristo Rey en la parroquia de San Sebastián, donde terminó el sábado su triduo. La <a href='#cautivo-triduo-cristo-rey-19-22-noviembre'>función solemne estaba anunciada para las 11.00</a>.",
    "## Cartel de las Glorias y lienzos restaurados",
    "El Consejo General de Hermandades y Cofradías de Alcalá ha informado en su perfil de Facebook de que el pintor Ricardo Gil trabaja ya en el cartel de las Glorias, que estará dedicado a la Inmaculada Concepción, y de que el artista ha mostrado a la institución el avance de la obra.",
    "Este domingo es también la última jornada para ver el lienzo restaurado del Cristo de los Desamparados, de la Hermandad de la Amargura. La hermandad asistió a la presentación de la intervención, dentro del II Ciclo de Conservación Preventiva del Patrimonio, en la que el conservador-restaurador Alejandro Redondo, vicepresidente del Consejo, explicó los trabajos, según ha publicado la Amargura en Facebook.",
    "<span class='howto'><b>Cultos de Cristo Rey.</b> La Borriquita celebró su función y su procesión eucarística el domingo 22 de noviembre en la parroquia de San Agustín. Ese día terminaron también el besamano del Cristo de la Bondad y la exposición del lienzo restaurado del Cristo de los Desamparados.</span>"
   ],
   "seo": [
    "borriquita-procesion-eucaristica-cristo-rey-san-agustin",
    "Cristo Rey en Alcalá: procesión eucarística de la Borriquita",
    "La Borriquita celebró el 22 de noviembre su función de Cristo Rey y una procesión eucarística por San Agustín, en Alcalá, con numerosos devotos.",
    [
     "Hermandad de la Borriquita",
     "Cristo Rey",
     "procesión eucarística",
     "parroquia de San Agustín",
     "Hermandad de Jesús",
     "Consejo de Hermandades",
     "cartel de las Glorias"
    ]
   ],
   "actualizada": "2026-11-23T06:55"
  },
  {
   "iso": "2026-11-21",
   "hora": "21:52",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "concierto-bondad-candlelight-san-agustin-medio-millar",
   "sec": "cultura",
   "kicker": "Alcalá EnClave de Música",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/10024/mas-de-medio-millar-de-espectadores-se-emocionan-con-la-musica-de-la-bondad-en-el-concierto-de-san-agustin",
   "title": "Más de 500 personas llenan San Agustín en el concierto a la luz de las velas de la Bondad",
   "sub": "El ciclo municipal Alcalá EnClave de Música sigue el 12 de diciembre en el Parque Centro y termina el 6 de marzo con un concierto conjunto de las dos bandas",
   "caption": "Un momento del concierto «Bondad: Candlelight» en la parroquia de San Agustín, con miembros de la Agrupación Musical Cristo de la Bondad.",
   "foto": "concierto-bondad-candlelight-san-agustin-of.jpg",
   "fotocredito": "Facebook del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "Más de 500 espectadores asistieron en la parroquia de San Agustín de Alcalá de Guadaíra al concierto «Bondad: Candlelight» de la Agrupación Musical Santísimo Cristo de la Bondad, según el Ayuntamiento.",
    "El concierto forma parte del ciclo municipal Alcalá EnClave de Música, que lleva a las dos formaciones musicales de la ciudad a distintos espacios.",
    "Las próximas citas son el 12 de diciembre en el Parque Centro, con la Guadaíra Big Band; el 20 de febrero en el Centro San Miguel, y el 6 de marzo de 2027 en el Auditorio Riberas del Guadaíra."
   ],
   "body": [
    "Más de medio millar de personas asistieron en la parroquia de San Agustín de Alcalá de Guadaíra al concierto «Bondad: Candlelight», que la Agrupación Musical Santísimo Cristo de la Bondad ofreció a la luz de las velas en la noche del viernes 20 de noviembre, según ha informado el Ayuntamiento. La cita forma parte del ciclo municipal Alcalá EnClave de Música.",
    "El delegado de Turismo, Cultura, Patrimonio y Museos, Christopher Rivas, describió el concierto como un espectáculo «multisensorial» que unió la música, la acústica del templo y la iluminación de las velas. Rivas atribuyó la asistencia a la calidad del programa y agradeció la colaboración de la parroquia y de la Hermandad de la Borriquita, a la que pertenece la agrupación y que celebra estos días <a href='#borriquita-besamano-cristo-bondad-mantolin-cristo-rey'>el besamano del Cristo de la Bondad</a>.",
    "## Un ciclo con las dos bandas de la ciudad",
    "Alcalá EnClave de Música es una propuesta de la Delegación de Cultura para llevar la música a distintos lugares de la ciudad con las dos formaciones musicales alcalareñas: la Agrupación Musical Cristo de la Bondad y la Banda de Música de Alcalá, de la Asociación Musical Nuestra Señora del Águila. Según el Ayuntamiento, el ciclo ha permitido por primera vez conciertos conjuntos de las dos.",
    "El programa ya había llevado al Castillo dos conciertos, uno de música andaluza y otro de bandas sonoras, y al Parque de Oromana un concierto nocturno de cámara con un cuarteto de saxofones de la Banda de Música.",
    "## Próximas citas",
    "El ciclo continuará el sábado 12 de diciembre en el Parque Centro con la actuación de la Guadaíra Big Band, de la Asociación Musical Nuestra Señora del Águila. El 20 de febrero se trasladará al Centro San Miguel, que acogerá el concierto «Bondad al piano» de la agrupación del Cristo de la Bondad.",
    "La última cita será conjunta: el 6 de marzo de 2027, a las puertas de la Cuaresma, las dos formaciones ofrecerán un concierto de música procesional en el Auditorio Riberas del Guadaíra. El Ayuntamiento no ha detallado todavía los horarios ni si las próximas citas necesitarán entrada.",
    "<span class='howto'><b>Alcalá EnClave de Música.</b> 12 de diciembre: Guadaíra Big Band en el Parque Centro. 20 de febrero: «Bondad al piano» en el Centro San Miguel. 6 de marzo de 2027: concierto conjunto de música procesional en el Auditorio Riberas del Guadaíra. Información en alcaladeguadaira.es.</span>"
   ],
   "seo": [
    "concierto-bondad-candlelight-san-agustin-alcala",
    "Concierto de la Bondad a la luz de las velas en Alcalá",
    "Más de 500 personas asistieron en San Agustín al concierto a la luz de las velas de la Bondad, dentro del ciclo Alcalá EnClave de Música de Alcalá.",
    [
     "Agrupación Musical Cristo de la Bondad",
     "Alcalá EnClave de Música",
     "parroquia de San Agustín",
     "Christopher Rivas",
     "Banda de Música de Alcalá",
     "Guadaíra Big Band"
    ]
   ]
  },
  {
   "iso": "2026-11-21",
   "hora": "21:52",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "retirada-costillar-chicharron-carne-mechada-horneados-lora",
   "sec": "alcala",
   "kicker": "Seguridad alimentaria",
   "src": "El Panadero",
   "title": "Sanidad retira costillar, chicharrón y carne mechada de Horneados Lora vendidos en Alcalá",
   "sub": "Los tres productos, envasados al vacío, se elaboraban en un obrador de Sevilla sin autorización sanitaria y llegaron también a comercios de la capital y de Dos Hermanas",
   "caption": "Una pieza de carne envasada al vacío. Imagen de recurso.",
   "foto": "retirada-productos-carnicos-horneados-lora-stock.jpg",
   "fotocredito": "Unsplash",
   "claves": [
    "La Consejería de Presidencia, Sanidad y Emergencias de la Junta de Andalucía y el Ayuntamiento de Sevilla han retirado del mercado el costillar de cerdo, el chicharrón de Cádiz y la carne mechada de la marca Horneados Lora.",
    "Los productos, listos para el consumo y envasados al vacío, se distribuyeron en establecimientos de Alcalá de Guadaíra, Dos Hermanas y Sevilla capital.",
    "Sanidad recomienda no consumirlos y devolverlos al establecimiento donde se compraron."
   ],
   "body": [
    "La Consejería de Presidencia, Sanidad y Emergencias de la Junta de Andalucía y el Ayuntamiento de Sevilla han retirado del mercado tres productos cárnicos de la marca Horneados Lora que se han vendido en comercios de Alcalá de Guadaíra: costillar de cerdo, chicharrón de Cádiz y carne mechada. Los tres se comercializaban envasados al vacío y listos para el consumo.",
    "Según la información disponible, los productos se distribuyeron en establecimientos de Sevilla capital y de los municipios de Alcalá de Guadaíra y Dos Hermanas. Las autoridades sanitarias no han hecho pública la lista de comercios que los recibieron ni los lotes afectados.",
    "## Un obrador sin autorización",
    "La retirada se ha decidido después de comprobar que un comercio minorista de Sevilla capital elaboraba estos productos en un obrador que no tenía la autorización sanitaria obligatoria. De acuerdo con el informe de la inspección municipal de Sevilla, el local tampoco cumplía los requisitos exigidos para sus equipos e instalaciones y no tenía un sistema de autocontrol adecuado, el procedimiento con el que una empresa alimentaria vigila por sí misma los riesgos de lo que produce.",
    "La actividad del obrador ha quedado suspendida. Las actuaciones sobre el establecimiento siguen abiertas a la espera de los resultados de los análisis de laboratorio.",
    "Inspectores del Ayuntamiento de Sevilla y de la Consejería están comprobando que los establecimientos que recibieron los productos los han retirado de la venta.",
    "## Qué hacer si se ha comprado",
    "Sanidad recomienda a quienes tengan en casa alguno de estos tres productos de Horneados Lora que no los consuman y que los devuelvan en el establecimiento donde los compraron.",
    "<span class='howto'><b>Productos retirados.</b> Marca Horneados Lora: costillar de cerdo, chicharrón de Cádiz y carne mechada, envasados al vacío y listos para el consumo. Qué hacer: no consumirlos y devolverlos en el comercio donde se compraron. Zonas de distribución: Alcalá de Guadaíra, Dos Hermanas y Sevilla capital.</span>"
   ],
   "seo": [
    "retirada-costillar-chicharron-carne-mechada-horneados-lora-alcala",
    "Retiran costillar, chicharrón y carne mechada en Alcalá",
    "Sanidad retira costillar de cerdo, chicharrón de Cádiz y carne mechada de Horneados Lora, vendidos en Alcalá y elaborados en un obrador sin autorización.",
    [
     "Horneados Lora",
     "alerta sanitaria",
     "seguridad alimentaria",
     "Junta de Andalucía",
     "carne mechada",
     "chicharrón de Cádiz",
     "Dos Hermanas"
    ]
   ]
  },
  {
   "iso": "2026-11-21",
   "hora": "21:52",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "pena-ajedrecistica-oromana-division-honor-marbella-2026",
   "sec": "deportes",
   "kicker": "Ajedrez",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8444/la-pena-ajedrecistica-oromana-compite-en-el-campeonato-de-espana-de-division-de-honor",
   "title": "La Peña Ajedrecística Oromana juega en Marbella el Campeonato de España de División de Honor",
   "sub": "El club alcalareño compite hasta el 26 de noviembre como Oromana CEN Solutions, con cinco grandes maestros en su plantilla",
   "caption": "Cartel de la Peña Ajedrecística Oromana con la plantilla del equipo Oromana CEN Solutions para el Campeonato de España de División de Honor.",
   "foto": "pena-ajedrecistica-oromana-division-honor-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "contain",
   "claves": [
    "La Peña Ajedrecística Oromana, de Alcalá de Guadaíra, disputa del 20 al 26 de noviembre en Marbella el Campeonato de España por Equipos de Clubes de División de Honor.",
    "El equipo compite con el nombre de Oromana CEN Solutions y cuenta con cinco grandes maestros: Nodirbek Yakubboev, Parham Maghsoodloo, David Antón Guijarro, Benjamin Gledura y Alan Pichot.",
    "El presidente del club, José Manuel Gómez Solís, es el delegado del equipo durante el campeonato."
   ],
   "body": [
    "La Peña Ajedrecística Oromana, de Alcalá de Guadaíra, disputa desde el viernes 20 y hasta el jueves 26 de noviembre en Marbella (Málaga) el Campeonato de España por Equipos de Clubes de División de Honor, la máxima categoría del ajedrez español, según ha informado Alcalá+Deporte, el portal deportivo municipal.",
    "El club compite con el nombre de Oromana CEN Solutions, por su patrocinador, y se enfrenta en esta fase a los mejores clubes del país. Para esta edición ha reforzado su plantilla con jugadores de nivel nacional e internacional.",
    "## Cinco grandes maestros",
    "El equipo alcalareño lo forman los grandes maestros Nodirbek Yakubboev, Parham Maghsoodloo, David Antón Guijarro, Benjamin Gledura y Alan Pichot; los maestros internacionales Sara Khadem e Ismael Alshameary Puente; el maestro FIDE Carlos J. Bernabéu López, y Juan Chacón Pérez.",
    "El presidente de la Peña, José Manuel Gómez Solís, ejerce de delegado del equipo durante el campeonato. El club ha agradecido el apoyo de sus patrocinadores, en especial de CEN Solutions, al que atribuye que pueda competir con una plantilla de este nivel.",
    "La de este año es una nueva participación de la Peña en la División de Honor, en la que, según Alcalá+Deporte, el club sigue consolidando su trayectoria deportiva.",
    "El torneo coincide con otra cita de un deportista de la ciudad: el alcalareño Diogo Miguel Silva <a href='#diogo-miguel-silva-titulo-mundial-k1-puerto-santa-maria'>disputa el domingo 22 de noviembre el título mundial de K1</a> en El Puerto de Santa María.",
    "<span class='howto'><b>Campeonato de España por Equipos de Clubes de División de Honor.</b> Del 20 al 26 de noviembre de 2026, en Marbella (Málaga). Equipo: Oromana CEN Solutions (Peña Ajedrecística Oromana, Alcalá de Guadaíra).</span>"
   ],
   "seo": [
    "pena-ajedrecistica-oromana-division-honor-marbella",
    "Peña Ajedrecística Oromana, en la División de Honor",
    "La Peña Ajedrecística Oromana de Alcalá juega en Marbella hasta el 26 de noviembre el Campeonato de España de División de Honor con cinco grandes maestros.",
    [
     "Peña Ajedrecística Oromana",
     "ajedrez",
     "División de Honor",
     "Campeonato de España por Equipos",
     "Marbella",
     "CEN Solutions"
    ]
   ]
  },
  {
   "id": "cartel-cabalgata-reyes-2027-mariano-fernandez-goncer",
   "sec": "cultura",
   "kicker": "Cabalgata de Reyes",
   "iso": "2026-11-21",
   "hora": "07:24",
   "src": "Cabalgata de Reyes Magos de Alcalá (Facebook)",
   "fuente_url": "https://www.facebook.com/1852796172875241/posts/1858451555643036",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Mariano Fernández Goncer firma el cartel de la Cabalgata de Reyes de Alcalá de 2027",
   "sub": "La obra muestra a niños recogiendo caramelos al paso de los Reyes Magos, con sus siluetas al fondo y una estrella sobre el camino",
   "caption": "Cartel de la Cabalgata de Reyes Magos de Alcalá de Guadaíra 2027.",
   "foto": "cartel-cabalgata-reyes-2027-cartel-of.jpg",
   "fotocredito": "Facebook de la Cabalgata de Reyes Magos de Alcalá",
   "encuadre": "contain",
   "claves": [
    "El cartel de la Cabalgata de Reyes Magos de Alcalá de Guadaíra de 2027 es obra de Mariano Fernández Goncer.",
    "La asociación lo dio a conocer el viernes 20 de noviembre en su perfil de Facebook.",
    "La imagen muestra a niños recogiendo caramelos, con las siluetas de los tres Reyes, una estrella y una farola al fondo.",
    "La cabalgata recorrerá Alcalá la tarde del martes 5 de enero de 2027."
   ],
   "body": [
    "La Asociación de la Cabalgata de Reyes Magos de Alcalá de Guadaíra ha dado a conocer el cartel de su desfile de 2027, obra de Mariano Fernández Goncer. La entidad lo publicó en la noche del viernes 20 de noviembre en su perfil de Facebook, a mes y medio de la cabalgata, que recorrerá la ciudad la tarde del martes 5 de enero.",
    "Según la descripción de la propia asociación, la imagen recoge una escena que reconoce cualquier vecino: niños pequeños recogiendo los caramelos que han dejado a su paso los Reyes Magos. Al fondo aparecen las siluetas de Melchor, Gaspar y Baltasar, una estrella que ilumina el camino y la luz cálida de una farola. La asociación la define como «una estampa llena de nostalgia y ternura» que transmite la Navidad «sin necesidad de mostrar demasiado».",
    "En su publicación, la entidad agradece también a Bodega Góngora su colaboración con la cabalgata, que mantiene un año más. La Hermandad de San Mateo, de la que el autor es hermano, lo ha felicitado en sus redes junto a la asociación por una obra que, a juicio de la hermandad, «representa la ilusión de los niños».",
    "## Las próximas citas de la cabalgata",
    "El cartel llega después de que la asociación <a href='#cabalgata-reyes-2027-designacion-sorpresa-reyes-magos'>comunicara a principios de noviembre, con visitas por sorpresa a sus casas, quiénes serán Melchor, Gaspar y Baltasar</a>. Su siguiente cita es el domingo 22 de noviembre, cuando representa en el Auditorio Riberas del Guadaíra <a href='#cenicienta-musical-solidario-cabalgata-22-noviembre'>un musical solidario de «La Cenicienta»</a> para recaudar fondos para su obra social. Las entradas cuestan 15 euros y se venden en la plataforma Giglon y en la taquilla del auditorio el mismo día.",
    "Las cabalgatas de barrio también avanzan en sus preparativos. La de Silos, ReyeSilos, celebra este sábado 21 de noviembre su almuerzo de coronación en la Hacienda La Caridad, y la del Campo de las Beatas <a href='#cabalgatas-beduinos-campo-beatas-almuerzo-coronacion-reyesilos'>repartió esta semana las papeletas de sitio para sus beduinos</a>. La asociación no ha detallado si el original del cartel se expondrá al público.",
    "<span class='howto'><b>Cabalgata de Reyes Magos de Alcalá de Guadaíra 2027.</b> Desfile: tarde del martes 5 de enero de 2027. Cartel: obra de Mariano Fernández Goncer. Próxima cita: musical solidario «La Cenicienta», domingo 22 de noviembre, Auditorio Riberas del Guadaíra; entradas a 15 euros en Giglon y en taquilla.</span>"
   ],
   "seo": [
    "cartel-cabalgata-reyes-alcala-2027-mariano-fernandez-goncer",
    "Cartel de la Cabalgata de Reyes de Alcalá 2027",
    "Mariano Fernández Goncer firma el cartel de la Cabalgata de Reyes Magos de Alcalá de Guadaíra de 2027: niños, caramelos y las siluetas de los Reyes.",
    [
     "Cabalgata de Reyes de Alcalá",
     "Mariano Fernández Goncer",
     "Reyes Magos 2027",
     "Hermandad de San Mateo",
     "Navidad en Alcalá",
     "cartel"
    ]
   ]
  },
  {
   "id": "dulce-nombre-zambomba-antonio-canales-20-diciembre-belen",
   "sec": "hermandades",
   "kicker": "Dulce Nombre",
   "iso": "2026-11-21",
   "hora": "07:24",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=bD3RUmxfiaE&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Dulce Nombre celebrará el 20 de diciembre su primera zambomba con el artista flamenco Antonio Canales",
   "sub": "La hermandad pide un donativo de 5 euros por entrada para un aforo de 600 personas e inaugurará su Belén el 8 de diciembre",
   "caption": "Representantes de la Hermandad del Dulce Nombre, durante la entrevista.",
   "foto": "dulce-nombre-zambomba-entrevista-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Hermandad del Dulce Nombre celebrará su primera zambomba el domingo 20 de diciembre con Antonio Canales y su cuadro flamenco.",
    "La entrada será un donativo de 5 euros y el aforo, de 600 personas.",
    "El Belén de la hermandad se inaugurará el martes 8 de diciembre a las 17.30, con una exaltación de la Navidad de Santiago Cano González.",
    "Los ingresos del merchandising, incluido el catálogo «Esencias de caridad», van a la bolsa de caridad."
   ],
   "body": [
    "La Hermandad del Dulce Nombre de Alcalá de Guadaíra celebrará el domingo 20 de diciembre su primera zambomba, con la actuación del artista flamenco Antonio Canales y su cuadro flamenco. La entrada será un donativo de 5 euros y el aforo, de 600 personas, según explicaron a El Panadero miembros de su Junta de Gobierno en el programa Alcalá Cofrade.",
    "La fecha, posterior a la de otras zambombas de la ciudad, la marcó la agenda del artista. Según el hermano mayor, Canales lleva años queriendo colaborar con la hermandad y el 20 de diciembre, el domingo anterior al sorteo de la Lotería de Navidad, era el único día que tenía libre. La hermandad asegura que la cita se celebrará aunque llueva, porque el espacio cuenta con dependencias cubiertas, aunque no detalló el lugar.",
    "La zambomba servirá también para estrenar la nueva línea de ropa de la hermandad, con un logotipo diseñado por Antonio Jaén que acompañará todo 2027, año de su 75 aniversario fundacional. Los miembros de la junta acudirán uniformados con esa línea. La hermandad publicará en breve el cartel del evento con las empresas que colaboran.",
    "## Un catálogo para la bolsa de caridad",
    "Los ingresos del merchandising se destinan a la bolsa de caridad de la hermandad. El diputado de comunicación explicó que se ha añadido un catálogo solidario, «Esencias de caridad», con velas de Adviento, aromas para armarios y cajoneras y adornos para el árbol y la casa. Según la hermandad, las velas de Adviento fueron lo más vendido el año pasado y este año se ha triplicado el pedido. El catálogo está en sus redes sociales.",
    "La hermandad inaugurará además su Belén el martes 8 de diciembre a las 17.30, con una exaltación de la Navidad a cargo del hermano Santiago Cano González y la actuación de su coro. Según el hermano mayor, el Belén tendrá este año «una peculiaridad muy especial» que no quiso adelantar.",
    "Estas citas preceden al <a href='#dulce-nombre-75-aniversario-programa-2027'>programa del 75 aniversario</a>, que arrancará el 30 de diciembre con la presentación del cartel de José Cabrera Lasso de la Vega. Los miembros de la junta precisaron que la única salida extraordinaria de la Virgen será la del domingo 11 de abril: la de septiembre es la procesión de tercia que su regla 16 prevé cuando el 12 de septiembre, festividad del Dulce Nombre de María, cae en domingo, como ocurrirá en 2027.",
    "<span class='howto'><b>Dulce Nombre, próximas citas.</b> Martes 8 de diciembre, 17.30: inauguración del Belén, con exaltación de la Navidad de Santiago Cano González. Domingo 20 de diciembre: primera zambomba, con Antonio Canales y su cuadro flamenco; donativo de 5 euros y aforo de 600 personas. Catálogo «Esencias de caridad»: en las redes sociales de la hermandad.</span>"
   ],
   "seo": [
    "dulce-nombre-zambomba-antonio-canales-belen-alcala",
    "Zambomba del Dulce Nombre con Antonio Canales en Alcalá",
    "El Dulce Nombre de Alcalá de Guadaíra celebrará el 20 de diciembre su primera zambomba con Antonio Canales, con donativo de 5 euros y aforo de 600.",
    [
     "Hermandad del Dulce Nombre",
     "Antonio Canales",
     "zambomba",
     "Belén",
     "Navidad en Alcalá",
     "75 aniversario"
    ]
   ]
  },
  {
   "iso": "2026-11-20",
   "hora": "22:25",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "jornada-infancia-220-escolares-red-apoyos",
   "sec": "alcala",
   "kicker": "Infancia",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=P4Pent5fpSc&t=0s",
   "title": "Más de 220 escolares de cinco colegios de Alcalá participan en la XII Jornada por la Infancia",
   "sub": "Alumnos de quinto de Primaria rotaron por diez talleres sobre familia, entidades y administraciones bajo el lema «Ninguna historia crece sola»",
   "caption": "Escolares en la XII Jornada por la Infancia de Paz y Bien.",
   "foto": "jornada-infancia-paz-y-bien-escolares-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Más de 220 escolares de Alcalá de Guadaíra participaron el viernes 20 de noviembre en la XII Jornada por la Infancia.",
    "Tomaron parte diez clases de quinto de Primaria de cinco colegios del municipio, que rotaron por diez talleres.",
    "La organizan la Asociación Paz y Bien y el Ayuntamiento, con la Fundación Azvi, bajo el lema «Ninguna historia crece sola, necesita una red de apoyos».",
    "La jornada terminó con una red simbólica hecha con cuerdas y la lectura de un manifiesto."
   ],
   "body": [
    "Más de 220 escolares de Alcalá de Guadaíra participaron el viernes 20 de noviembre en la XII Jornada por la Infancia, organizada por la Asociación Paz y Bien y el Ayuntamiento con la Fundación Azvi. La cita, que coincide con el Día Mundial de los Derechos de la Infancia, giró este año en torno a las redes de apoyo que necesitan niños y niñas para crecer.",
    "Participaron diez clases de quinto de Primaria de cinco centros educativos del municipio: los colegios Antonio Rodríguez Almodóvar, José Ramón, San Mateo, Manuel Alonso y Silos. Durante la mañana, los alumnos fueron rotando por diez talleres en los que trabajaron los distintos tipos de familia y de entorno doméstico y el papel que tienen las entidades sociales y las administraciones en la protección de la infancia.",
    "La cifra final queda por debajo de las previsiones que se dieron en la presentación de la jornada, cuando el Ayuntamiento habló de más de 350 menores y la organización, de más de 250, como recogió El Panadero al <a href='#jornada-infancia-xii-paz-y-bien-20-noviembre'>anunciar la cita</a>. El Ayuntamiento cifra ahora la participación en «más de 220 menores», según ha informado en sus redes sociales.",
    "## Una red con cuerdas",
    "El lema de esta edición fue «Ninguna historia crece sola, necesita una red de apoyos». Los organizadores explicaron a El Panadero que el objetivo es visibilizar los derechos de la infancia y subrayar que el crecimiento de los menores no depende de una sola persona, sino de la familia, la escuela, las entidades y las administraciones.",
    "La jornada terminó con la creación de una red simbólica que unió a todos los participantes mediante cuerdas elaboradas en los talleres, y con la lectura de un manifiesto. El texto recordó que todas las personas forman parte de la historia de los demás y que nadie crece solo.",
    "Los organizadores señalaron que el interés de los centros educativos crece cada año y expresaron su deseo de contar en próximas ediciones con espacios más amplios para poder sumar más colegios.",
    "## Quién colabora",
    "Además de Paz y Bien, el Ayuntamiento y la Fundación Azvi, la jornada contó con la colaboración de la Peña Sevillista La Previa y de la empresa Eutronics, y con la participación de la Unidad de Atención a la Familia y a la Mujer (UFAM) de la Policía Nacional, según el Ayuntamiento.",
    "Paz y Bien trabaja desde 1998 con menores en situación de protección a través de una red de recursos en las provincias de Sevilla y Huelva. La asociación forma parte también de <a href='#mesa-capacidades-diez-anos-gala'>la Mesa de las Capacidades</a> de Alcalá."
   ],
   "seo": [
    "jornada-infancia-paz-y-bien-220-escolares-alcala",
    "Jornada por la Infancia: 220 escolares en Alcalá",
    "Más de 220 escolares de cinco colegios de Alcalá de Guadaíra participan el viernes en la XII Jornada por la Infancia de Paz y Bien y el Ayuntamiento.",
    [
     "Asociación Paz y Bien",
     "Jornada por la Infancia",
     "derechos de la infancia",
     "Fundación Azvi",
     "colegios de Alcalá",
     "quinto de Primaria"
    ]
   ]
  },
  {
   "iso": "2026-11-20",
   "hora": "22:25",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "dulce-nombre-75-aniversario-programa-2027",
   "sec": "hermandades",
   "kicker": "LXXV aniversario",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=8k0HRVsvKgg&t=0s",
   "title": "El Dulce Nombre celebrará su 75 aniversario con cuatro salidas de la Virgen y una Semana de la Caridad",
   "sub": "La efeméride arranca el 30 de diciembre con la presentación del cartel e incluye una salida extraordinaria el 11 de abril y la procesión de tercia de septiembre",
   "caption": "Representantes del Dulce Nombre, junto al logotipo del 75 aniversario fundacional.",
   "foto": "dulce-nombre-75-aniversario-logo-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Hermandad del Dulce Nombre de Alcalá de Guadaíra celebrará su 75 aniversario fundacional entre el 30 de diciembre de 2026 y el 30 de diciembre de 2027.",
    "La Virgen saldrá cuatro veces; la única salida extraordinaria será la del domingo 11 de abril de 2027, y en septiembre hará la procesión de tercia que prevén sus reglas.",
    "Del 5 al 11 de abril la hermandad organizará una Semana de la Caridad en cinco parroquias de la ciudad.",
    "Ángel Gutiérrez Oliveros pronunciará el pregón del aniversario el domingo 5 de septiembre en el Teatro Gutiérrez de Alba."
   ],
   "body": [
    "La Hermandad del Dulce Nombre de Alcalá de Guadaíra celebrará su 75 aniversario fundacional con un año de actos que empezará el 30 de diciembre de 2026 y terminará el 30 de diciembre de 2027. El programa incluye cuatro salidas de la Virgen, una Semana de la Caridad y una procesión extraordinaria en abril, según explicaron a El Panadero miembros de su Junta de Gobierno.",
    "La hermandad nació en 1952. El aniversario arrancará el 30 de diciembre con la misa que su regla dedica a Manuel Pineda Calderón, figura clave en su historia, y con la presentación del cartel, obra de José Cabrera Lasso de la Vega, <a href='#dulce-nombre-cartel-75-aniversario-jose-cabrera'>designado esta semana</a>.",
    "## De enero a mayo",
    "El domingo 3 de enero, antes de la función del Dulce Nombre de Jesús, de las 20.00, habrá a las 18.30 una procesión infantil con el Niño Jesús, que portarán los grupos de catequesis en un pequeño paso. El domingo 7 de febrero, festividad de la Candelaria, la Virgen irá por un recorrido extraordinario hasta la plaza de la Almazara, donde se celebrará una misa a las 12.00.",
    "Del lunes 5 al domingo 11 de abril tendrá lugar la Semana de la Caridad, que la hermandad presenta como la obra social del aniversario. Cada día estará dedicado a un tema, con un ponente, en una parroquia distinta. El sábado 10 habrá un festival de la juventud en la caseta municipal y el domingo 11, una misa con la Virgen en la Plazuela, a la que llegará en andas y de la que volverá en procesión con banda.",
    "En mayo, el quinario contará cada día con un predicador distinto y la función principal la presidirá el obispo auxiliar, Teodoro León. La procesión ordinaria será el sábado 15 de mayo.",
    "## Pregón y procesión extraordinaria",
    "La Junta de Gobierno ha designado a Ángel Gutiérrez Oliveros pregonero del aniversario, según ha publicado la hermandad en su perfil de Facebook. El pregón será el domingo 5 de septiembre a las 12.30 en el Teatro Gutiérrez de Alba, con una banda que estrenará al menos una marcha nueva.",
    "El triduo de septiembre lo predicarán los últimos párrocos de San Sebastián. Como el 12 de septiembre de 2027, festividad del Dulce Nombre de María, cae en domingo, la regla 16 de la hermandad prevé ese año una procesión de tercia, que no es técnicamente una salida extraordinaria, precisaron miembros de la junta. La hermandad ha pedido dispensa para adelantarla: la Virgen saldrá el sábado 11, con un recorrido distinto del habitual que llegará al Ayuntamiento, y se recogerá ya el domingo 12, cuya función presidirá el arzobispo de Sevilla, José Ángel Saiz Meneses. La única salida extraordinaria será la del domingo 11 de abril.",
    "Octubre y noviembre se dedicarán a exposiciones, con una muestra en el Museo de las Hermandades, conferencias y conciertos. Según la hermandad, todos los actos extraordinarios se han acordado con el párroco y director espiritual, Álvaro Montilla.",
    "La hermandad celebrará antes, el domingo 20 de diciembre, <a href='#dulce-nombre-zambomba-antonio-canales-20-diciembre-belen'>su primera zambomba, con Antonio Canales</a>.",
    "<span class='howto'><b>LXXV aniversario del Dulce Nombre.</b> 30 de diciembre: inicio y cartel. 3 de enero, 18.30: procesión infantil. 7 de febrero, 12.00: misa en la plaza de la Almazara. 5-11 de abril: Semana de la Caridad. 15 de mayo: procesión. 5 de septiembre, 12.30: pregón en el Teatro Gutiérrez de Alba. 11 de septiembre: procesión de tercia.</span>"
   ],
   "seo": [
    "dulce-nombre-75-aniversario-programa-alcala",
    "Dulce Nombre: programa del 75 aniversario en Alcalá",
    "La Hermandad del Dulce Nombre de Alcalá celebrará su 75 aniversario con cuatro salidas de la Virgen, una Semana de la Caridad y pregón en septiembre.",
    [
     "Hermandad del Dulce Nombre",
     "75 aniversario",
     "Ángel Gutiérrez Oliveros",
     "San Sebastián",
     "procesión extraordinaria",
     "Semana de la Caridad"
    ]
   ],
   "actualizada": "2026-11-21T07:24"
  },
  {
   "iso": "2026-11-20",
   "hora": "22:25",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "jesus-paso-san-juan-cartel-semana-santa-foro-formacion",
   "sec": "hermandades",
   "kicker": "Consejo de Hermandades",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=vaD8S9WO0R8&t=0s",
   "title": "Jesús Nazareno abre el sábado su casa para mostrar el paso de San Juan restaurado",
   "sub": "La intervención, financiada en parte por el Ayuntamiento, la hicieron tres conservadores entre enero y julio; el cartel de la Semana Santa de Rafael Muñoz estará dedicado a la cofradía",
   "caption": "La imagen de San Juan en su paso, en una imagen de archivo.",
   "foto": "jesus-paso-san-juan-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Hermandad de Jesús Nazareno de Alcalá de Guadaíra muestra el sábado 21 de noviembre el paso de San Juan restaurado, de 10.30 a 13.30 y de 19.00 a 20.30.",
    "La restauración, hecha entre enero y julio de 2026 por Jesús Manuel Lozano Muñoz, María de la Cruz Gabarro Bando y Pablo Tejero Cárdenas, la ha financiado en parte el Ayuntamiento.",
    "El cartel de la Semana Santa que pinta Rafael Muñoz estará dedicado a la Hermandad de Jesús Nazareno.",
    "El Foro de Formación del Consejo tendrá su primera charla el martes 1 de diciembre, a cargo del arcipreste José Antonio Martínez."
   ],
   "body": [
    "La Hermandad de Jesús Nazareno de Alcalá de Guadaíra abrirá el sábado 21 de noviembre su casa de hermandad para mostrar el paso de San Juan tras su restauración. Las visitas serán de 10.30 a 13.30 y de 19.00 a 20.30, según ha publicado el Consejo General de Hermandades y Cofradías en su perfil de Facebook.",
    "La intervención integral de las andas de San Juan Evangelista se hizo entre enero y julio de 2026 y la ejecutaron los conservadores-restauradores Jesús Manuel Lozano Muñoz, María de la Cruz Gabarro Bando y Pablo Tejero Cárdenas, según ha detallado la propia hermandad en su perfil de Facebook. El Ayuntamiento de Alcalá de Guadaíra ha financiado parte del coste; la hermandad no ha precisado la cuantía. El paso se expone en el patio delantero de la casa de hermandad, en la calle Alcalá y Orti, 41.",
    "La canastilla nació en las primeras décadas del siglo XX como paso de la Virgen, está vinculada a San Juan desde 1943 y en 1980 recibió la reforma neobarroca de Manuel Guzmán Bejarano, con su talla, cresterías, respiraderos y los cuatro ángeles de las esquinas. Según la hermandad, presentaba ataques de insectos xilófagos, grietas, pérdidas de dorado, cera, barnices oxidados y repintes. Los restauradores consolidaron la estructura, revisaron los anclajes, limpiaron, fijaron el dorado y reintegraron el color con oro, y recuperaron la policromía de los ángeles.",
    "Habrá además visitas guiadas por el equipo de restauradores a las 12.30 y a las 19.30. La presentación forma parte del II Ciclo de Conservación Preventiva que organizan la Delegación de Patrimonio y el Consejo, y al que la hermandad se acogió para intervenir en este paso, como avanzó en octubre.",
    "El mismo ciclo presentó el miércoles 18 en el Museo de la Ciudad la restauración de las pinturas del Santo Cristo de Burgos y del <a href='#amargura-exposicion-cristo-desamparados-18-noviembre'>Cristo de los Desamparados</a>, ambas de la parroquia de San Sebastián. Durante la limpieza del Cristo de Burgos apareció una firma, hoy ilegible, y una fecha de comienzos del siglo XVIII, 1706 o 1709, según explicó a El Panadero el conservador Alejandro Redondo, vicepresidente del Consejo.",
    "## El cartel, dedicado a Jesús",
    "El Consejo ha conocido el avance de los trabajos del cartel de la próxima Semana Santa, que pinta Rafael Muñoz y que en esta edición estará dedicado a la Hermandad de Jesús Nazareno. El Consejo no ha dado todavía la fecha de presentación.",
    "La hermandad celebró además el jueves 19 en su Salón de Cabildos una mesa redonda sobre la donación y el trasplante de órganos con el médico José Pérez Bernal, y ya tiene a la venta sus almanaques de pared y de sobremesa.",
    "## Foro de Formación",
    "El Consejo ha presentado también su Foro de Formación 2026-2027, con dos líneas: una de formación cristiana y otra cultural y cofrade. La primera charla será el martes 1 de diciembre, a cargo del arcipreste de la ciudad, José Antonio Martínez, sobre «el desafío de evangelizar hoy desde nuestras hermandades» a la luz de la visita del Papa a España. La segunda, el 26 de abril, la impartirá Álvaro Román Villalón. La línea cultural incluirá un ciclo de encuentros cofrades en enero, aún sin fechas.",
    "<span class='howto'><b>Paso de San Juan restaurado.</b> Sábado 21 de noviembre. Casa de hermandad de Jesús Nazareno. Visitas de 10.30 a 13.30 y de 19.00 a 20.30. Visitas guiadas a las 12.30 y a las 19.30. Inscripción en el Foro de Formación: código QR en la web del Consejo de Hermandades.</span>"
   ],
   "seo": [
    "jesus-nazareno-paso-san-juan-restaurado-alcala",
    "Jesús Nazareno muestra el paso de San Juan restaurado",
    "La Hermandad de Jesús Nazareno de Alcalá abre el sábado 21 su casa para ver el paso de San Juan restaurado; el cartel de Semana Santa le estará dedicado.",
    [
     "Hermandad de Jesús Nazareno",
     "paso de San Juan",
     "Consejo de Hermandades",
     "Rafael Muñoz",
     "cartel Semana Santa",
     "conservación preventiva"
    ]
   ],
   "actualizada": "2026-11-21T21:52"
  },
  {
   "iso": "2026-11-20",
   "hora": "22:25",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "centenaria-libro-historias-contadas-50-anos",
   "sec": "cultura",
   "kicker": "Patrimonio",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=P4Pent5fpSc&t=0s",
   "title": "La Centenaria, confitería de Alcalá fundada en 1860, ya tiene su libro en la colección Historias contadas",
   "sub": "Antonio García Calderón presentó la obra en el Museo el mismo año en que la familia que la regenta cumple 50 años al frente",
   "caption": "Entrevista sobre el libro de La Centenaria en la colección Historias contadas.",
   "foto": "centenaria-historias-contadas-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Antonio García Calderón presentó el jueves 19 de noviembre en el Museo de Alcalá de Guadaíra un libro sobre la confitería La Centenaria.",
    "La confitería se fundó en 1860 y el libro es el tercer volumen de la colección municipal Historias contadas.",
    "En 2026 se cumplen 50 años desde que la familia que la regenta tomó las riendas del establecimiento, en 1976."
   ],
   "body": [
    "La confitería La Centenaria, fundada en Alcalá de Guadaíra en 1860, ya tiene su propio libro. Antonio García Calderón presentó el jueves 19 de noviembre en el Museo de la ciudad esta publicación, que repasa la historia del establecimiento y es el tercer volumen de la colección municipal Historias contadas.",
    "La colección, impulsada desde el Museo, busca recuperar episodios, personajes, negocios y tradiciones que ayudan a entender la historia de Alcalá, según ha informado el Ayuntamiento en sus redes sociales, que la define como una serie centrada en el patrimonio local inmaterial. A la misma colección se acaba de incorporar <a href='#amalia-borrero-libro-aceituneras-historias-contadas'>el libro de Amalia Borrero sobre las mujeres de los almacenes de aceitunas</a>.",
    "## Medio siglo de la misma familia",
    "La presentación coincide con un aniversario para la familia que regenta La Centenaria: en 2026 se cumplen 50 años desde que el padre tomó las riendas del negocio, en 1976. Bajo el lema «50 años custodiando un legado», la familia ha preparado un proyecto audiovisual que reúne fotografías y testimonios de familiares, trabajadores y clientes.",
    "Uno de los hijos contó a El Panadero que llegó a la confitería siendo estudiante de instituto para echar un verano, tras un mal curso, y que medio siglo después sigue en el obrador. Otra integrante de la familia se incorporó más tarde, cuando la familia abrió un segundo punto de venta en Nueva Alcalá, hace unos 15 años.",
    "La confitería tiene su sede en la calle Nuestra Señora del Águila. Entre sus productos más conocidos están las tortas de Alcalá y el tocino de cielo. Sus responsables explican que han incorporado rellenos y cremas al gusto actual, pero mantienen la base tradicional, como el bizcocho y el petisú, y lamentan que algunos pasteles antiguos ya no se elaboren porque no atraen al público joven.",
    "Preguntados por el futuro, aseguran que La Centenaria seguirá abierta con el personal que trabaja hoy en el obrador.",
    "El libro llega en pleno otoño de actividades sobre la tradición repostera y panadera de la ciudad, después de que <a href='#mes-del-pan-2026-record-3000-participantes'>el Mes del Pan superara por primera vez los 3.000 participantes</a>."
   ],
   "seo": [
    "centenaria-confiteria-libro-historias-contadas",
    "La Centenaria de Alcalá, en la colección Historias contadas",
    "Antonio García Calderón presenta en el Museo de Alcalá el libro de La Centenaria, confitería de 1860, en el 50 aniversario de la familia que la regenta.",
    [
     "La Centenaria",
     "confitería",
     "Historias contadas",
     "Museo de Alcalá",
     "Antonio García Calderón",
     "tortas de Alcalá"
    ]
   ]
  },
  {
   "iso": "2026-11-20",
   "hora": "22:25",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "relanza-t-segunda-jornada-marca-personal",
   "sec": "economia",
   "kicker": "Empleo",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=P4Pent5fpSc&t=0s",
   "title": "RELANZA-T reúne a más de un centenar de desempleados en su segunda jornada sobre marca personal",
   "sub": "La empresa municipal de limpieza examina el sábado en el IES Cristóbal de Monroy a los aspirantes a 14 plazas fijas discontinuas",
   "caption": "La alcaldesa, Ana Isabel Jiménez, en la jornada del programa RELANZA-T.",
   "foto": "relanza-t-jornada-talento-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "encuadre": "center 30%",
   "claves": [
    "El Auditorio Riberas del Guadaíra acogió el viernes 20 de noviembre la segunda Jornada de Activación para el Empleo de RELANZA-T, con más de un centenar de participantes.",
    "El proyecto beneficia a 800 personas con más de 60 itinerarios y una financiación aproximada de 5,7 millones de euros, según el Ayuntamiento.",
    "Las próximas jornadas serán el 10 de febrero y el 12 de marzo.",
    "El sábado 21 se examinan en el IES Cristóbal de Monroy los aspirantes a ocho plazas de oficial conductor y seis de operario especialista de la empresa municipal de limpieza."
   ],
   "body": [
    "Más de un centenar de personas desempleadas participaron el viernes 20 de noviembre en el Auditorio Riberas del Guadaíra en la segunda Jornada de Activación para el Empleo del proyecto RELANZA-T, que impulsa el Ayuntamiento de Alcalá de Guadaíra. Bajo el título «Marca personal, talento y oportunidades», la sesión trabajó las habilidades personales que pueden ayudar a encontrar trabajo.",
    "A través de conferencias y talleres prácticos, los participantes abordaron el autoconocimiento, la identificación de las propias capacidades, la confianza y la forma de presentar el perfil profesional ante las empresas. El objetivo, según la organización, es que cuenten con más recursos para afrontar entrevistas y procesos de selección.",
    "La alcaldesa, Ana Isabel Jiménez, se dirigió a los asistentes para reconocer su esfuerzo. «Quiero reconocerlo como alcaldesa porque no solo es positivo para vosotros, sino que es positivo para vuestra ciudad», dijo. En sus redes sociales, Jiménez sostiene que los datos de empleo en Alcalá han mejorado.",
    "## 800 participantes",
    "RELANZA-T beneficia a 800 personas con más de 60 itinerarios en profesiones de alta demanda laboral en sus distintas convocatorias y cuenta con una financiación aproximada de 5,7 millones de euros, según ha informado el Ayuntamiento en sus redes sociales. La primera de las cuatro jornadas <a href='#relanza-t-primera-jornada-activacion-empleo'>reunió a más de 120 personas a primeros de mes</a>.",
    "El ciclo continuará el 10 de febrero con una jornada sobre gestión emocional, resiliencia y autocuidado, y terminará el 12 de marzo con otra centrada en el empleo, el networking y el contacto directo con las empresas.",
    "## Examen para 14 plazas",
    "En paralelo, la empresa municipal encargada de la limpieza de las calles y la recogida de residuos examina el sábado 21 de noviembre, en el IES Cristóbal de Monroy, a los aspirantes a 14 puestos de trabajo: ocho plazas de oficial conductor y seis de operario especialista. Todas tienen carácter fijo discontinuo y se cubren por oposición libre, con un examen teórico y, después, una prueba práctica.",
    "<span class='howto'><b>Próximas jornadas de RELANZA-T.</b> 10 de febrero: gestión emocional, resiliencia y autocuidado. 12 de marzo: empleo, networking y contacto con empresas. <b>Examen de la empresa municipal de limpieza:</b> sábado 21 de noviembre, IES Cristóbal de Monroy.</span>"
   ],
   "seo": [
    "relanza-t-jornada-activacion-empleo-marca-personal",
    "RELANZA-T: segunda jornada de empleo en Alcalá",
    "Más de un centenar de desempleados participan en Alcalá en la segunda jornada de RELANZA-T, un proyecto de 800 plazas y unos 5,7 millones de euros.",
    [
     "RELANZA-T",
     "empleo",
     "Auditorio Riberas del Guadaíra",
     "Ana Isabel Jiménez",
     "oposiciones",
     "IES Cristóbal de Monroy"
    ]
   ]
  },
  {
   "iso": "2026-11-20",
   "hora": "22:25",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "campana-29n-adelante-tranvia-pp-moreno-vox-plazuela",
   "sec": "politica",
   "kicker": "Elecciones 29N",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=P4Pent5fpSc&t=0s",
   "title": "Adelante Andalucía critica en Alcalá los retrasos del tranvía y el PP trae a Juanma Moreno el domingo",
   "sub": "Vox acusó el viernes en La Plazuela al PSOE de no hacer viviendas protegidas en nueve años y el PP recorrió el sábado empresas y barrios antes del acto del domingo",
   "caption": "Carpa de Adelante Andalucía en Alcalá de Guadaíra durante la campaña del 29N.",
   "foto": "campana-29n-adelante-andalucia-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Adelante Andalucía instaló el viernes 20 de noviembre una mesa informativa en Alcalá de Guadaíra y criticó los retrasos del tranvía.",
    "La formación llevará al Parlamento andaluz el jueves 26 una propuesta para que Andalucía asuma competencias sobre los trenes de cercanías.",
    "El PP celebra el domingo 22 a las 12.00 un acto con Juanma Moreno en Celebraciones Zambra.",
    "Vox reunió el viernes 20 en La Plazuela a Reyes Romero, que acusó a los gobiernos socialistas de «nueve años y cero viviendas protegidas»."
   ],
   "body": [
    "Adelante Andalucía instaló el viernes 20 de noviembre una mesa informativa en Alcalá de Guadaíra para presentar sus propuestas para las elecciones generales del domingo 29 de noviembre. Su candidato al Congreso, José Ignacio García, centró sus declaraciones en los retrasos del tranvía y en las competencias ferroviarias.",
    "Desde la asamblea local de Adelante Andalucía se quejaron de que, casi 20 años después de que comenzara el proyecto, la ciudad sigue sin poder usar el tranvía, y cuestionaron que se hable de inauguraciones cuando todavía no funciona para los usuarios. La formación sostiene que el presidente de la Junta de Andalucía, Juanma Moreno, lo ha inaugurado «muchísimas veces» y que «nos están tomando el pelo».",
    "La formación amplió la crítica al conjunto del transporte público. Considera insuficientes las conexiones de una ciudad del tamaño de Alcalá, dentro del municipio y con Sevilla y su área metropolitana, y citó también la falta de estación de autobuses y la carencia de vivienda. El partido ya <a href='#adelante-andalucia-tranvia-retraso-explicaciones'>pidió a la Junta una fecha definitiva para el tranvía</a> a principios de mes.",
    "## Una propuesta en el Parlamento",
    "Adelante Andalucía anunció que el jueves 26 de noviembre llevará al Parlamento de Andalucía una propuesta para que la comunidad asuma competencias sobre los trenes de cercanías y tenga más capacidad de decisión en su planificación y gestión. La formación recordó que el PP apoyó esa idea hace tres años y dijo que quiere ver si mantiene ese apoyo.",
    "## Agenda del PP y de Vox",
    "El PP celebrará el domingo 22 de noviembre a las 12.00 un acto de campaña con Juanma Moreno en Celebraciones Zambra, bajo el lema «El cambio necesario», según ha anunciado el PP de Alcalá en su perfil de Facebook.",
    "El sábado 21, la candidata del PP a la Alcaldía, Sandra González García, visitó a las monjas clarisas y la empresa Aluminios Galisur con las números dos y seis de la lista popular al Congreso por Sevilla, Sol Cruz-Guzmán y Alicia Martínez, según ha publicado el PP de Alcalá en su perfil de Facebook. El partido hizo campaña también en la zona de Silos con Lourdes Fuster, número cuatro de la candidatura.",
    "Vox reunió el viernes 20 en La Plazuela a sus candidatos Reyes Romero, cabeza de lista al Congreso por Sevilla, y Fernando Rodríguez Galisteo, número dos. Romero acusó a los gobiernos socialistas de mantener Alcalá en una «parálisis urbanística y residencial», resumió su balance en «nueve años y cero viviendas protegidas» y sostuvo que el acceso a la vivienda depende de la voluntad política del gobierno municipal. «En materia de vivienda, Alcalá tiene mucho que aprender de la gestión de Vox en Bormujos», afirmó.",
    "El Ayuntamiento tiene abierto el proceso para adjudicar <a href='#zacatin-84-viviendas-alquiler-adjudicacion-31-diciembre'>84 viviendas protegidas de alquiler</a> que la empresa pública VIVE Alcalá construye en la Cornisa del Zacatín, y el Pleno aprobó el 17 de noviembre <a href='#pleno-noviembre-led-vive-piscina-cabeza-hermosa'>un préstamo de 11 millones de euros</a> para que la sociedad levante otras 107.",
    "El PSOE celebró esta semana su propio acto con candidatos y con la alcaldesa, Ana Isabel Jiménez, como recogió El Panadero en la información sobre <a href='#junta-electoral-pp-carteles-calle-arahal-campana-29n'>los carteles retirados por orden de la Junta Electoral</a>."
   ],
   "seo": [
    "campana-29n-alcala-tranvia-adelante-pp-vox",
    "Campaña del 29N en Alcalá: tranvía, PP y Vox",
    "Adelante Andalucía critica en Alcalá de Guadaíra los retrasos del tranvía; el PP trae a Juanma Moreno el domingo 22 y Vox reúne a sus candidatos.",
    [
     "elecciones generales 29N",
     "Adelante Andalucía",
     "tranvía de Alcalá",
     "PP de Alcalá",
     "Vox Alcalá",
     "Juanma Moreno",
     "vivienda protegida"
    ]
   ],
   "actualizada": "2026-11-22T06:52"
  },
  {
   "iso": "2026-11-20",
   "hora": "22:25",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "id": "junta-gobierno-plan-estrategico-turismo-cipaem",
   "sec": "politica",
   "kicker": "Junta de Gobierno",
   "src": "Ana Isabel Jiménez (Facebook)",
   "fuente_url": "https://www.facebook.com/1595493005932940/posts/1599800155502225",
   "title": "La Junta de Gobierno de Alcalá aprueba el Plan Estratégico de Turismo y el convenio del CIPAEM",
   "sub": "También avanza la contratación del mantenimiento, la reparación y la limpieza de los vehículos municipales",
   "caption": "Resumen de los acuerdos de la Junta de Gobierno Local difundido por la alcaldesa.",
   "foto": "junta-gobierno-plan-turismo-of.jpg",
   "fotocredito": "Facebook de Ana Isabel Jiménez",
   "encuadre": "contain",
   "claves": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra aprobó el viernes 20 de noviembre el Plan Estratégico de Turismo de la ciudad.",
    "Aprobó también el convenio con la Diputación de Sevilla para las actuaciones del CIPAEM en el Teatro Gutiérrez de Alba y el Auditorio Riberas del Guadaíra.",
    "La Junta avanzó además en la contratación del mantenimiento, la reparación y la limpieza de los vehículos municipales."
   ],
   "body": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra aprobó el viernes 20 de noviembre el Plan Estratégico de Turismo de la ciudad y el convenio con la Diputación de Sevilla para las actuaciones artísticas del CIPAEM, según ha publicado la alcaldesa, Ana Isabel Jiménez, en su perfil de Facebook.",
    "Según la alcaldesa, el plan de turismo es una herramienta para impulsar una oferta turística integrada, dar más visibilidad a la ciudad y generar nuevas oportunidades de actividad económica. La publicación no detalla el contenido del plan, su presupuesto ni el periodo que abarca.",
    "El documento llega en un otoño con varias citas ligadas a la promoción de la ciudad. La empresa alcalareña Decoalbero <a href='#decoalbero-premio-turismo-industrial-industria-viva-2026'>ganó esta semana el Premio Turismo Industrial de la Diputación</a> en la categoría «Industria Viva», y <a href='#mes-del-pan-2026-record-3000-participantes'>el Mes del Pan superó por primera vez los 3.000 participantes</a>.",
    "## Artes escénicas y vehículos",
    "El convenio con la Diputación permitirá programar en el Teatro Gutiérrez de Alba y en el Auditorio Riberas del Guadaíra actuaciones del CIPAEM, el circuito con el que la institución provincial lleva espectáculos de artes escénicas y música a los municipios de la provincia.",
    "La Junta de Gobierno avanzó además en la contratación del servicio de mantenimiento, reparación, mecánica y limpieza de los vehículos municipales, que la alcaldesa considera fundamental para el funcionamiento de los servicios públicos. Jiménez no ha precisado el importe ni el plazo de ese contrato.",
    "La Junta de Gobierno Local es el órgano que reúne cada semana a la alcaldesa y a los concejales del equipo de gobierno para aprobar expedientes de gestión ordinaria, como contratos, convenios y planes, que no tienen que pasar por el Pleno."
   ],
   "seo": [
    "junta-gobierno-plan-estrategico-turismo-alcala",
    "Alcalá aprueba su Plan Estratégico de Turismo",
    "La Junta de Gobierno de Alcalá de Guadaíra aprueba el Plan Estratégico de Turismo, el convenio del CIPAEM y avanza el contrato de vehículos municipales.",
    [
     "Junta de Gobierno Local",
     "Plan Estratégico de Turismo",
     "CIPAEM",
     "Diputación de Sevilla",
     "Teatro Gutiérrez de Alba",
     "Ana Isabel Jiménez"
    ]
   ]
  },
  {
   "iso": "2026-11-20",
   "hora": "07:25",
   "id": "salario-minimo-2027-1286-euros-boe",
   "sec": "economia",
   "kicker": "Empleo",
   "src": "BOE",
   "fuente_url": "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-24189",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El salario mínimo subirá un 5,3 % en 2027 y quedará en 1.286 euros al mes",
   "sub": "El BOE fija también un mínimo anual de 18.004 euros y 10,06 euros la hora para el empleo de hogar por horas",
   "caption": "Gráfico con las nuevas cuantías del salario mínimo interprofesional para 2027.",
   "foto": "salario-minimo-2027-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "El salario mínimo interprofesional será de 1.286 euros al mes o 42,87 euros al día desde el 1 de enero de 2027, un 5,3 % más que en 2026.",
    "Ningún trabajador a jornada completa podrá cobrar menos de 18.004 euros al año, el equivalente a 14 pagas de 1.286 euros.",
    "Los eventuales de hasta 120 días cobrarán al menos 60,88 euros por jornada y el empleo de hogar por horas, 10,06 euros la hora.",
    "Las ayudas autonómicas y municipales que usan el salario mínimo como referencia mantienen en 2027 la cuantía anterior, salvo que se decida lo contrario."
   ],
   "body": [
    "El salario mínimo interprofesional (SMI) será de 1.286 euros al mes en 2027, un 5,3 % más que en 2026, según el Real Decreto 1013/2026, publicado el jueves 19 de noviembre en el Boletín Oficial del Estado (BOE). Desde el 1 de enero, la subida afecta a los trabajadores de Alcalá de Guadaíra que cobran el mínimo legal.",
    "El Consejo de Ministros aprobó la norma el martes 17 de noviembre, a propuesta del Ministerio de Trabajo y Economía Social. Para los sueldos que se pagan por días, el mínimo queda en 42,87 euros por jornada. En cómputo anual, ningún trabajador a jornada completa podrá cobrar menos de 18.004 euros, el equivalente a 14 pagas de 1.286 euros.",
    "## Eventuales y empleo de hogar",
    "Los trabajadores con contratos temporales que no pasen de 120 días en la misma empresa cobrarán al menos 60,88 euros por jornada, una cantidad que ya incluye la parte proporcional de domingos, festivos y las dos pagas extraordinarias. Las empleadas y empleados de hogar que trabajan por horas en régimen externo tendrán un mínimo de 10,06 euros por hora efectivamente trabajada.",
    "El salario mínimo se cuenta solo en dinero: el pago en especie no puede rebajarlo. Los sueldos que en su conjunto y en cómputo anual ya superan esa cantidad no cambian, porque el decreto permite compensar la subida con los complementos que el trabajador ya cobra.",
    "## Ayudas que usan el SMI como referencia",
    "El decreto no actualiza las normas autonómicas y municipales que usan el salario mínimo para fijar el nivel de renta de una ayuda o el acceso a un servicio público. En ellas seguirá valiendo durante 2027 la cuantía anterior, salvo que la Junta de Andalucía o el propio Ayuntamiento decidan aplicar la nueva. Lo mismo ocurre con los contratos privados que toman el SMI como referencia, salvo que las partes acuerden otra cosa.",
    "Según el preámbulo de la norma, la subida tiene en cuenta el informe que presentó el 3 de noviembre la Comisión Asesora para el Análisis del Salario Mínimo Interprofesional y busca que el SMI alcance el 60 % del salario medio. En Alcalá, <a href='#paro-octubre-2026-alcala-5941'>el paro registrado bajó en octubre a 5.941 personas</a>.",
    "<span class='howto'><b>Salario mínimo 2027.</b> 1.286 euros al mes o 42,87 euros al día. Mínimo anual: 18.004 euros. Eventuales de hasta 120 días: 60,88 euros por jornada. Empleo de hogar por horas: 10,06 euros la hora. En vigor del 1 de enero al 31 de diciembre de 2027. Texto completo en el <a href='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-24189'>BOE</a>.</span>"
   ],
   "seo": [
    "salario-minimo-2027-1286-euros",
    "Salario mínimo 2027: 1.286 euros al mes, un 5,3 % más",
    "El BOE fija el salario mínimo de 2027 en 1.286 euros al mes y 18.004 al año. Qué cambia para trabajadores y empleo de hogar en Alcalá de Guadaíra.",
    [
     "salario mínimo interprofesional",
     "SMI 2027",
     "BOE",
     "empleo de hogar",
     "Ministerio de Trabajo",
     "empleo Alcalá de Guadaíra"
    ]
   ]
  },
  {
   "iso": "2026-11-20",
   "hora": "07:25",
   "id": "amalia-borrero-libro-aceituneras-historias-contadas",
   "sec": "cultura",
   "kicker": "Libros",
   "src": "Ana Isabel Jiménez (Facebook)",
   "fuente_url": "https://www.facebook.com/1595493005932940/posts/1598745202274387",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Un libro de Amalia Borrero recoge los recuerdos de las mujeres de los almacenes de aceitunas de Alcalá",
   "sub": "«Al hilo de los recuerdos» se incorpora a la colección municipal Historias contadas, según ha informado la alcaldesa en sus redes",
   "caption": "Amalia Borrero, con la alcaldesa, Ana Isabel Jiménez.",
   "foto": "amalia-borrero-libro-aceituneras-of.jpg",
   "fotocredito": "Facebook de Ana Isabel Jiménez",
   "claves": [
    "«Al hilo de los recuerdos», de Amalia Borrero, reúne historias de las mujeres que trabajaron en los almacenes de aceitunas de Alcalá de Guadaíra.",
    "El libro se incorpora a la colección municipal Historias contadas, según ha publicado la alcaldesa, Ana Isabel Jiménez."
   ],
   "body": [
    "«Al hilo de los recuerdos», un libro de Amalia Borrero, reúne las historias de las mujeres que trabajaron en los almacenes de aceitunas de Alcalá de Guadaíra. La obra se incorpora a la colección municipal Historias contadas, según ha publicado la alcaldesa, Ana Isabel Jiménez, en sus perfiles de Facebook e Instagram el jueves 19 de noviembre.",
    "Según la alcaldesa, el libro recoge historias personales de mujeres que trabajaron en esos almacenes para sacar adelante a sus familias y que forman parte de la historia de la ciudad. Jiménez lo presenta como el retrato de una época que ayuda a entender la evolución de Alcalá y agradece a la autora su contribución a la memoria colectiva.",
    "## Las aceituneras, en el centro",
    "El trabajo de las aceituneras ha protagonizado otras actividades municipales este otoño. El ciclo «Paseando por Alcalá» abrió su edición el sábado 17 de octubre con una ruta dedicada a estas trabajadoras, en la que antiguas aceituneras contaron cómo lavaban, deshuesaban y rellenaban la aceituna en los almacenes.",
    "La publicación de la alcaldesa no detalla dónde se puede conseguir el libro ni si habrá una presentación pública."
   ],
   "seo": [
    "libro-amalia-borrero-aceituneras-alcala",
    "Libro de Amalia Borrero sobre las aceituneras de Alcalá",
    "«Al hilo de los recuerdos», de Amalia Borrero, recoge historias de las mujeres de los almacenes de aceitunas y entra en la colección Historias contadas.",
    [
     "Amalia Borrero",
     "aceituneras",
     "Historias contadas",
     "memoria local",
     "almacenes de aceitunas",
     "libros"
    ]
   ]
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "bomberos-alcala-denuncian-falta-plantilla-vehiculo-altura",
   "sec": "alcala",
   "kicker": "Bomberos",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=Yi3h2edvSD0&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Los bomberos de Alcalá piden nueve efectivos más y denuncian ocho meses de retraso en el pago de los refuerzos",
   "sub": "La plantilla, con 31 bomberos operativos, reclama también un vehículo de altura, la segunda actividad para los mayores de 55 años y la reclasificación al grupo C1",
   "caption": "Dos bomberos de Alcalá, ante el parque de bomberos.",
   "foto": "bomberos-alcala-parque-plantilla-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Servicio de Bomberos de Alcalá de Guadaíra cuenta con 31 bomberos operativos, tres de ellos interinos, y la plantilla pide llegar al menos a 40.",
    "Los bomberos aseguran que el Ayuntamiento les debe ocho meses de servicios de refuerzo y que el plan de pago acordado no se ha aplicado.",
    "Según la plantilla, el parque lleva cerca de un año prácticamente sin vehículo de altura operativo.",
    "Reclaman además la segunda actividad para los cinco compañeros mayores de 55 años y la reclasificación al grupo C1, prevista para marzo de 2027."
   ],
   "body": [
    "Los bomberos de Alcalá de Guadaíra reclaman al Ayuntamiento al menos nueve efectivos más, el pago de ocho meses de servicios de refuerzo que, según aseguran, se les adeudan, y un vehículo de altura operativo. La plantilla expuso el jueves 19 de noviembre a El Panadero lo que considera un problema estructural del servicio.",
    "El parque cuenta hoy con 31 bomberos operativos, de los cuales tres son interinos. «Nosotros mínimo estamos pidiendo 40 bomberos», explicó uno de sus integrantes. La plantilla presentó en 2024 un plan de empleo plurianual que tuviera en cuenta las jubilaciones y los pases a segunda actividad.",
    "## Seis plazas en proceso",
    "Según los bomberos, el Ayuntamiento ha habilitado seis plazas, que llevan un año en proceso y necesitarán otro año para resolverse. «Estamos hablando de mínimo año y medio para que esos bomberos estén operativos», señalan, y para entonces se habrán producido nuevas jubilaciones. El gobierno municipal cifró a finales de octubre en <a href='#policia-local-bomberos-plazas-tribuna'>cinco los bomberos que han entrado en 2026</a>.",
    "El servicio funciona con un mínimo de siete bomberos por turno. Con la plantilla actual, afirman, es difícil cubrir vacaciones, permisos y fechas como la Navidad o el verano sin recurrir a horas extraordinarias.",
    "Esas horas son el segundo frente. Los bomberos sostienen que acumulan ocho meses de deuda por los servicios de refuerzo y que el principio de acuerdo para un plan de pago no se ha llevado a efecto. El Pleno de octubre aprobó más de 1,2 millones de euros para pagar horas extraordinarias del personal municipal.",
    "## Vehículo de altura y segunda actividad",
    "En cuanto a los medios, la plantilla explica que en noviembre de 2025 llegó al parque un vehículo de altura de 17 o 18 años que solo duró dos meses en servicio, y que desde entonces están prácticamente sin él. Hoy tardan unos cinco minutos en llegar a un incendio en el término municipal; si tiene que acudir un vehículo de Sanlúcar la Mayor o de Dos Hermanas, el tiempo sube a unos 15 minutos, advierten.",
    "Piden también la segunda actividad, que permite a los bomberos mayores de 55 años pasar a funciones no operativas. En el parque hay cinco en esa situación. Y reclaman la reclasificación profesional al grupo C1, recogida en la modificación de la normativa andaluza de emergencias, que según la plantilla debe aplicarse antes de marzo de 2027 y sigue sin fecha.",
    "Las reclamaciones coinciden con las que el <a href='#bomberos-alcala-sindicato-pide-mas-plantilla-oep-2027'>Sindicato Andaluz de Bomberos trasladó al Ayuntamiento a principios de noviembre</a> y con las que <a href='#vox-tribuna-bomberos-san-rafael-autobus-hotel-oromana'>Vox planteó el miércoles en el programa La Tribuna</a>. El Ayuntamiento no ha detallado cuántas plazas de bombero incluirá la oferta de empleo de 2027."
   ],
   "seo": [
    "bomberos-alcala-plantilla-vehiculo-altura-horas-extra",
    "Bomberos de Alcalá piden 9 efectivos y un vehículo de altura",
    "Los bomberos de Alcalá de Guadaíra, con 31 efectivos, piden llegar a 40, cobrar ocho meses de refuerzos y recuperar un vehículo de altura operativo.",
    [
     "Bomberos de Alcalá",
     "Ayuntamiento de Alcalá de Guadaíra",
     "plantilla municipal",
     "horas extraordinarias",
     "vehículo de altura",
     "segunda actividad"
    ]
   ]
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "decoalbero-premio-turismo-industrial-industria-viva-2026",
   "sec": "economia",
   "kicker": "Empresas",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=Yi3h2edvSD0&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Decoalbero, empresa de Alcalá, gana el Premio Turismo Industrial de la Diputación en «Industria Viva»",
   "sub": "El galardón reconoce las visitas a sus instalaciones y a su cantera de albero e incluye su presencia en Fitur 2027 con la provincia de Sevilla",
   "caption": "Premiados en la gala «Industria Viva» de la Diputación de Sevilla.",
   "foto": "decoalbero-premio-turismo-industrial-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Decoalbero, empresa de Alcalá de Guadaíra de los hermanos Salguero, ha recibido el XII Premio Turismo Industrial de la Provincia de Sevilla en la modalidad «Industria Viva».",
    "El premio lo concede la Diputación de Sevilla y reconoce las visitas a sus instalaciones y a la cantera de albero.",
    "Incluye la participación de la empresa en Fitur 2027 con la representación turística de la provincia, un vídeo promocional y una campaña en redes.",
    "La otra distinción de esta edición, en patrimonio industrial, ha sido para la Torre del Agua de Los Palacios y Villafranca."
   ],
   "body": [
    "Decoalbero, la empresa de Alcalá de Guadaíra de los hermanos Salguero, ha recibido esta semana el XII Premio Turismo Industrial de la Provincia de Sevilla en la modalidad «Industria Viva». Lo concede la Diputación de Sevilla, que en esta edición ha distinguido también, en patrimonio industrial, a la Torre del Agua de Los Palacios y Villafranca.",
    "La modalidad «Industria Viva» reconoce, según el Ayuntamiento de Alcalá, la recuperación y puesta en valor de instalaciones, espacios y elementos vinculados a actividades económicas. En el caso de Decoalbero, el jurado ha tenido en cuenta las visitas que organiza a sus instalaciones y a la cantera de albero, donde el público puede conocer cómo se extrae y se trabaja este material.",
    "## Fitur y promoción",
    "El premio incluye promoción: la empresa participará en Fitur 2027, la feria internacional de turismo de Madrid, dentro de la representación turística de la provincia de Sevilla, y contará con un vídeo promocional y una campaña de difusión en redes sociales.",
    "La alcaldesa, Ana Isabel Jiménez, acompañó a la empresa en la entrega. En su perfil de Facebook escribió que Decoalbero «lleva un pedacito de Alcalá allá donde va» y que ha creado un producto «que une nuestro albero con el espíritu emprendedor» de la ciudad. El albero, la tierra amarilla con la que se cubren paseos, jardines y plazas de toros, es una de las señas de identidad de Alcalá, que da nombre también a uno de sus institutos.",
    "Los Premios Turismo Industrial forman parte de la estrategia de la Diputación, a través de su sociedad Prodetur, para promocionar las empresas de la provincia que abren sus puertas al público. La semana pasada, el programa «Al Día» ya mostró una de las visitas que Decoalbero organiza a la cantera para explicar el origen del albero.",
    "Otras empresas instaladas en Alcalá han estado estos días en el escaparate de la Diputación: <a href='#press-trip-diputacion-naturgy-pilatus-alcala'>periodistas latinoamericanos visitaron Naturgy y Pilatus</a> dentro de un viaje de prensa organizado por Prodetur."
   ],
   "seo": [
    "decoalbero-premio-turismo-industrial-industria-viva",
    "Decoalbero gana el Premio Turismo Industrial de Diputación",
    "Decoalbero, empresa de albero de Alcalá de Guadaíra, gana el XII Premio Turismo Industrial de la Diputación de Sevilla e irá a Fitur 2027 con la provincia.",
    [
     "Decoalbero",
     "Diputación de Sevilla",
     "Prodetur",
     "turismo industrial",
     "albero",
     "Fitur 2027"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "memorial-circulo-memoria-cementerio-san-mateo",
   "sec": "alcala",
   "kicker": "Memoria democrática",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=Yi3h2edvSD0&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Alcalá presenta el «Círculo de la Memoria», futuro memorial a las víctimas de la represión en San Mateo",
   "sub": "El proyecto, presentado en las III Jornadas de Memoria Democrática, levanta círculos de hormigón, piedra y acero alrededor de un olivo",
   "caption": "Presentación del proyecto «Círculo de la Memoria».",
   "foto": "memorial-circulo-memoria-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra presentó el miércoles 18 de noviembre el proyecto «Círculo de la Memoria», un memorial en el cementerio de San Mateo.",
    "El espacio tendrá círculos concéntricos de hormigón, piedra y acero alrededor de un olivo de gran porte, en una zona del cementerio sin uso.",
    "Estará dedicado a las víctimas de la represión cuyos restos se han localizado en las fosas de Alcalá en los últimos años.",
    "La presentación abrió las III Jornadas de Memoria Democrática en el Auditorio Riberas del Guadaíra."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra presentó el miércoles 18 de noviembre el «Círculo de la Memoria», el proyecto del futuro memorial en el cementerio de San Mateo para recordar a las víctimas de la represión franquista. La presentación abrió las III Jornadas de Memoria Democrática en el Auditorio Riberas del Guadaíra.",
    "El delegado de Identidad y Memoria Democrática, Christopher Rivas, explicó a El Panadero que Alcalá no tiene hasta hoy «un lugar físico» donde los familiares de las víctimas y de los represaliados puedan recordarlos. Era, dijo, una petición de la Asociación de Memoria de Alcalá desde hace años y uno de los objetivos de su delegación.",
    "## Círculos alrededor de un olivo",
    "El diseño plantea una estructura de círculos concéntricos de hormigón, piedra y acero cortén alrededor de un olivo de gran porte, como símbolo de paz. Se levantará en una zona del cementerio que ahora no tiene uso. Según Rivas, el proyecto está «prácticamente culminado» y se ha preparado con los técnicos de la delegación de Monumento Natural, Medio Ambiente y Sostenibilidad.",
    "El memorial estará dedicado a las víctimas cuyos restos se han localizado en las fosas de Alcalá durante los trabajos de los últimos años. «Siempre hemos tenido presente que debería ser un espacio que inspirase tranquilidad, respeto y dignidad», afirmó el delegado. El Ayuntamiento no ha detallado el presupuesto ni el plazo de ejecución de la obra.",
    "## El programa de las jornadas",
    "La primera sesión siguió con un coloquio sobre las mujeres represaliadas durante el franquismo y la proyección del documental «Descarriadas, otro enfoque», centrado en el Patronato de Protección a la Mujer. Las jornadas continuaron el jueves 19 con el documental «Entre el pan y el olvido», impulsado por la delegación municipal de Memoria Democrática y presentado por su director, Pablo Coca, y un nuevo coloquio. El programa incluye también una conferencia sobre la represión en Sevilla a cargo del experto José María Márquez.",
    "La Diputación de Sevilla abrió en octubre un millón de euros en ayudas de memoria democrática para los ayuntamientos, a las que Alcalá puede optar."
   ],
   "seo": [
    "memorial-circulo-memoria-cementerio-san-mateo-alcala",
    "Memorial «Círculo de la Memoria» en el cementerio de Alcalá",
    "Alcalá de Guadaíra presenta el Círculo de la Memoria, un memorial en el cementerio de San Mateo para las víctimas de la represión halladas en sus fosas.",
    [
     "memoria democrática",
     "cementerio de San Mateo",
     "Christopher Rivas",
     "Ayuntamiento de Alcalá de Guadaíra",
     "represión franquista",
     "fosas"
    ]
   ]
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "pena-solea-125-alumnos-institutos-dia-flamenco",
   "sec": "cultura",
   "kicker": "Flamenco",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=Yi3h2edvSD0&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Peña Flamenca Soleá abre sus puertas a 125 alumnos de tres institutos de Alcalá por el Día del Flamenco",
   "sub": "Los estudiantes escucharon una ponencia de Manolo Moreno y una muestra con el cante de Paco Morillo y la guitarra de Juan Manuel Flores",
   "caption": "Cante y guitarra ante el alumnado de los institutos en la Peña Flamenca Soleá.",
   "foto": "pena-solea-dia-flamenco-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Peña Flamenca Soleá de Alcalá de Guadaíra recibió el jueves 19 de noviembre a 125 alumnos de tres institutos de la ciudad.",
    "La jornada se organizó con motivo del Día Internacional del Flamenco, que se celebró el 16 de noviembre.",
    "Incluyó una ponencia de Manolo Moreno y una muestra con el cante de Paco Morillo y la guitarra de Juan Manuel Flores."
   ],
   "body": [
    "La Peña Flamenca Soleá de Alcalá de Guadaíra recibió la mañana del jueves 19 de noviembre a 125 alumnos de tres institutos de la ciudad, entre ellos el Al-Guadaíra y el Albero, en una jornada de puertas abiertas con motivo del Día Internacional del Flamenco, que se celebró el lunes 16.",
    "Los estudiantes escucharon una ponencia de Manolo Moreno sobre el Día Internacional del Flamenco y asistieron después a una muestra en directo con el cante de Paco Morillo y la guitarra de Juan Manuel Flores.",
    "La peña organiza esta actividad desde hace varios años para acercar el flamenco a los jóvenes. «Para nosotros es una alegría muy grande ver que la juventud viene aquí, a nuestra casa», explicó a El Panadero uno de sus responsables, que defendió el trabajo de las peñas «para que el flamenco no se olvide» y recordó el carácter andaluz de este arte y las aportaciones que ha recibido, en especial la del pueblo gitano.",
    "## Flamenco en las aulas",
    "Uno de los docentes que acompañó a los alumnos valoró la iniciativa porque, señaló, trabajar el flamenco en los centros educativos «es un poco complicado» y no siempre hay profesionales formados para impartirlo. Por eso considera útil llevar a los estudiantes a los lugares «donde el flamenco se vive».",
    "La jornada combinó divulgación y música en directo para mostrar a los jóvenes los distintos estilos del flamenco, declarado Patrimonio Cultural Inmaterial de la Humanidad por la Unesco el 16 de noviembre de 2010, la fecha que da origen a su día internacional.",
    "Alcalá celebró esa efeméride el domingo 15 con <a href='#dia-flamenco-auditorio-lleno-encuentro-penas-2026'>el Auditorio Riberas del Guadaíra lleno para ver a María Terremoto, Caracafé y El Petete</a>. Esta semana el flamenco sigue también en el Centro San Miguel, que <a href='#centro-san-miguel-flamenco-poesia-comedia-arte-18-22-noviembre'>programa talleres y un recital de Elvira Ponce</a> el sábado 21 a las 13.00."
   ],
   "seo": [
    "pena-flamenca-solea-alumnos-institutos-dia-flamenco",
    "Peña Soleá de Alcalá recibe a 125 alumnos por el flamenco",
    "La Peña Flamenca Soleá de Alcalá de Guadaíra recibe a 125 alumnos de tres institutos con una ponencia y cante en directo por el Día del Flamenco.",
    [
     "Peña Flamenca Soleá",
     "Día Internacional del Flamenco",
     "institutos de Alcalá",
     "Paco Morillo",
     "Juan Manuel Flores",
     "Manolo Moreno"
    ]
   ]
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "transformando-entre-mujeres-charla-violencia-vicaria-25n",
   "sec": "alcala",
   "kicker": "25N",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=Yi3h2edvSD0&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Transformando Entre Mujeres explica cómo detectar la violencia vicaria y convoca una marcha sufragista",
   "sub": "La asociación alcalareña aconseja pedir asesoramiento en el 016 ante un caso y participará en la manifestación del 25N en Sevilla",
   "caption": "Una representante de Transformando Entre Mujeres, durante la entrevista.",
   "foto": "transformando-entre-mujeres-25n-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La asociación Transformando Entre Mujeres celebró el miércoles 18 de noviembre en Alcalá de Guadaíra una charla para dar a conocer la violencia vicaria.",
    "La ponente recomendó pedir asesoramiento en el 016 o en los teléfonos de atención a la mujer y a la infancia antes de actuar.",
    "La asociación participará el 25 de noviembre en la manifestación del Movimiento Feminista en Sevilla y el viernes 27 organizará una marcha sufragista por Alcalá."
   ],
   "body": [
    "La asociación Transformando Entre Mujeres celebró el miércoles 18 de noviembre en Alcalá de Guadaíra una charla para dar visibilidad a la violencia vicaria, la que utiliza a los hijos y las hijas para causar daño a sus madres. La actividad forma parte de su programación en torno al 25 de noviembre, Día Internacional de la Eliminación de la Violencia contra las Mujeres.",
    "El objetivo, explicó la ponente a El Panadero, era sensibilizar sobre esta violencia y enseñar a detectarla y a actuar «de una forma que no sea dañina ni para la madre ni para el hijo». Según sus datos, en España se contabilizan unos 68 menores asesinados por violencia vicaria desde 2013, aunque subrayó que existen otras formas más sutiles, más difíciles de denunciar e igual de dañinas a largo plazo.",
    "## Qué hacer ante un caso",
    "Ante una sospecha, lo primero es asesorarse para no revictimizar al menor y proteger su seguridad y la de la madre. Ese asesoramiento se puede pedir en el 016 o en los teléfonos de atención a la mujer y a la infancia y la adolescencia. La ponente explicó que esta violencia genera en la mujer «incertidumbre, miedo, malestar y sobre todo control», y que es una forma de mantener la relación tras una ruptura.",
    "La asociación ofrece además juegos coeducativos gratuitos a los centros escolares que los soliciten.",
    "El programa municipal <a href='#alcala-actua-violencia-genero-25n-2026'>«Alcalá Actúa contra la Violencia de Género»</a> reúne estos días talleres, encuentros y teatro en torno a la misma fecha.",
    "<span class='howto'><b>Próximas citas de Transformando Entre Mujeres.</b> Miércoles 25 de noviembre, 19.30: manifestación del Movimiento Feminista en Sevilla, desde la plaza de San Francisco; la asociación es una de las entidades organizadoras. Viernes 27 de noviembre, 17.30: marcha sufragista por Alcalá, con salida desde la avenida de la Constitución. Ayuda y asesoramiento: 016, gratuito y disponible las 24 horas.</span>"
   ],
   "seo": [
    "violencia-vicaria-charla-transformando-entre-mujeres",
    "Charla sobre violencia vicaria en Alcalá por el 25N",
    "Transformando Entre Mujeres explica en Alcalá de Guadaíra cómo detectar la violencia vicaria y convoca una marcha sufragista para el 27 de noviembre.",
    [
     "Transformando Entre Mujeres",
     "violencia vicaria",
     "25N",
     "violencia de género",
     "016",
     "marcha sufragista"
    ]
   ],
   "encuadre": "center 30%"
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "junta-electoral-pp-carteles-calle-arahal-campana-29n",
   "sec": "politica",
   "kicker": "Elecciones 29N",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=Yi3h2edvSD0&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Junta Electoral obliga al PP de Alcalá a retirar carteles de las farolas de la calle Arahal, según el PSOE",
   "sub": "Los socialistas sostienen que ese espacio no está entre los autorizados para la propaganda electoral de las generales del 29 de noviembre",
   "caption": "La calle Arahal de Alcalá de Guadaíra.",
   "foto": "calle-arahal-carteles-29n-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Según el PSOE de Alcalá de Guadaíra, la Junta Electoral de Zona de Sevilla ha obligado al PP local a retirar los carteles que colocó en las farolas de la calle Arahal.",
    "Los socialistas afirman que esa calle no figura entre los lugares autorizados, que el Ayuntamiento publicó en el BOP el 20 de octubre.",
    "El Ayuntamiento informó el 20 de noviembre de que ha cumplido la orden de la Junta Electoral y ha retirado la propaganda colocada en lugares no habilitados.",
    "PSOE y PP intensifican esta semana sus actos en Alcalá ante las elecciones generales del domingo 29 de noviembre."
   ],
   "body": [
    "La Junta Electoral de Zona de Sevilla ha obligado al PP de Alcalá de Guadaíra a retirar los carteles electorales que había colocado en las farolas de la calle Arahal, según informó el jueves 19 de noviembre el PSOE local en un comunicado. Los socialistas sostienen que ese espacio no está entre los autorizados para la propaganda de las elecciones generales del domingo 29 de noviembre.",
    "En su nota, el PSOE recuerda que los lugares habilitados para colocar carteles los determinó el Ayuntamiento y se publicaron en el Boletín Oficial de la Provincia el 20 de octubre. Según los socialistas, cada formación tiene asignados espacios concretos, repartidos en función de los resultados de las anteriores elecciones y acordados en una reunión entre los partidos. El PSOE asegura que estará «vigilante» para que se respeten esas ubicaciones durante la campaña.",
    "El Ayuntamiento de Alcalá informó el viernes 20 de noviembre de que ha cumplido la orden de la Junta Electoral de Zona de Sevilla y ha retirado la propaganda electoral colocada en lugares no habilitados para ello, según <a href='https://www.alcaladeguadaira.es/noticias/10019/la-junta-electoral-de-zona-obliga-al-ayuntamiento-a-retirar-propaganda-electoral-colocada-en-lugares-que-no-estan-habilitados' target='_blank' rel='noopener'>su nota</a>. La nota municipal no detalla qué carteles ni de qué formaciones se han retirado.",
    "## Actos de campaña",
    "La campaña ha llevado esta semana a Alcalá a candidatos del PSOE y del PP. El PSOE reunió el miércoles 18 en su sede a militantes y simpatizantes con la presencia de Francisco Toscano, candidato socialista al Congreso por Sevilla, de Carmen Castilla y de la alcaldesa y secretaria general del partido en la ciudad, Ana Isabel Jiménez.",
    "Toscano pidió el voto a jóvenes, pensionistas, inquilinos y pequeños propietarios y acusó a la oposición de querer desmovilizar al electorado: «No es casual que pongan en cuestión el voto por correo», dijo. Jiménez defendió el modelo de su partido frente al que llamó «el retroceso» de los recortes y advirtió de un gobierno de la derecha con la ultraderecha. Los socialistas anunciaron presencia en plazas, barrios y domicilios hasta el día de la votación.",
    "El PP, por su parte, recorrió el mismo miércoles la ciudad con Rafael Belmonte, su candidato al Congreso por Sevilla, según ha publicado en su perfil de Facebook. Los populares explican que siguen visitando Alcalá «barrio a barrio, calle a calle, negocio a negocio» para pedir el voto a Alberto Núñez Feijóo bajo el lema «El cambio necesario».",
    "Las mesas electorales de la ciudad <a href='#mesas-electorales-sorteo-pleno-29-noviembre'>se sortearon en un pleno extraordinario el 30 de octubre</a>."
   ],
   "seo": [
    "junta-electoral-pp-carteles-calle-arahal-alcala",
    "Junta Electoral obliga al PP a quitar carteles en Alcalá",
    "El PSOE de Alcalá de Guadaíra afirma que la Junta Electoral obliga al PP a retirar carteles de la calle Arahal, en plena campaña de las elecciones del 29N.",
    [
     "Junta Electoral de Zona de Sevilla",
     "PP de Alcalá",
     "PSOE de Alcalá",
     "elecciones generales 29N",
     "propaganda electoral",
     "calle Arahal"
    ]
   ],
   "actualizada": "2026-11-20T22:25"
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "cabalgatas-beduinos-campo-beatas-almuerzo-coronacion-reyesilos",
   "sec": "cultura",
   "kicker": "Cabalgatas",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=Yi3h2edvSD0&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Cabalgata del Campo de las Beatas reparte papeletas de beduino y ReyeSilos celebra su coronación",
   "sub": "Salir de beduino en el cortejo cuesta 30 euros más una fianza; la Cabalgata ReyeSilos corona ya a sus Reyes Magos de 2027",
   "caption": "La Cabalgata de Reyes Magos del Campo de las Beatas, en una imagen de archivo.",
   "foto": "cabalgata-campo-beatas-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Cabalgata de Reyes Magos del Campo de las Beatas entrega el jueves 19 y el viernes 20 de noviembre las papeletas de sitio para salir como beduino.",
    "La papeleta cuesta 30 euros, más una fianza de 30 euros que se devuelve al entregar el traje.",
    "La Cabalgata ReyeSilos coronó el sábado 21 de noviembre, con la asistencia de la alcaldesa, a David Martínez Naranjo, Álvaro Gómez García y Diego Fuentes Cruz como Reyes Magos de 2027, y a Ángela Harana Sánchez como Estrella de Oriente."
   ],
   "body": [
    "La Cabalgata de Reyes Magos del Campo de las Beatas, en Alcalá de Guadaíra, ha abierto el reparto de papeletas de sitio para quienes quieran formar parte de su cortejo como beduinos. La entrega se hace el jueves 19 y el viernes 20 de noviembre, de 17.00 a 19.30, en su local del número 33 de la calle Rápida.",
    "La papeleta cuesta 30 euros, a los que se suma una fianza de otros 30 euros que la asociación devuelve cuando se entrega el traje después del desfile.",
    "## ReyeSilos corona a sus Reyes",
    "La Cabalgata ReyeSilos, la del barrio de Silos, coronó el sábado 21 de noviembre a sus Reyes Magos y a su Estrella para 2027, en un acto en el que los monarcas salientes les entregaron las coronas, según ha informado el Ayuntamiento en sus redes sociales. Al acto asistieron representantes de la Corporación municipal, encabezados por la alcaldesa, Ana Isabel Jiménez. David Martínez Naranjo será el rey Melchor; Álvaro Gómez García, Gaspar, y Diego Fuentes Cruz, Baltasar. La Estrella de Oriente será Ángela Harana Sánchez. La asociación había anunciado que el almuerzo de coronación sería en la Hacienda Caridad, y atiende a sus socios todos los miércoles, de 18.00 a 20.00, en su sede de la calle Cabalgata ReyeSilos.",
    "Las cabalgatas de barrio completan en Alcalá el desfile principal de la tarde del 5 de enero, el que organiza la Asociación de la Cabalgata de Reyes, que <a href='#cabalgata-reyes-2027-designacion-sorpresa-reyes-magos'>comunicó a principios de noviembre quiénes serán Melchor, Gaspar y Baltasar</a>. Esa asociación representa además el domingo 22 de noviembre <a href='#cenicienta-musical-solidario-cabalgata-22-noviembre'>un musical solidario de «La Cenicienta»</a> para recaudar fondos.",
    "Otras entidades preparan también la noche de Reyes: el Grupo Joven de la Hermandad del Perdón <a href='#perdon-reyes-magos-visitan-casas-5-enero-2027'>organiza visitas de los Reyes Magos a domicilio</a> el 5 de enero.",
    "<span class='howto'><b>Papeletas de beduino de la Cabalgata del Campo de las Beatas.</b> Jueves 19 y viernes 20 de noviembre, de 17.00 a 19.30. Local de la calle Rápida, 33. Precio: 30 euros más 30 euros de fianza, que se devuelven al entregar el traje.</span>"
   ],
   "seo": [
    "cabalgata-campo-beatas-papeletas-beduino-reyesilos",
    "Cabalgata del Campo de las Beatas: papeletas de beduino",
    "La Cabalgata del Campo de las Beatas de Alcalá reparte papeletas de beduino por 30 euros y ReyeSilos celebra el sábado 21 su almuerzo de coronación.",
    [
     "Cabalgata del Campo de las Beatas",
     "Cabalgata ReyeSilos",
     "Reyes Magos 2027",
     "beduinos",
     "Silos",
     "cabalgatas de Alcalá"
    ]
   ],
   "actualizada": "2026-11-21T21:52"
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "diogo-miguel-silva-titulo-mundial-k1-puerto-santa-maria",
   "sec": "deportes",
   "kicker": "Kickboxing",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8442/diogo-miguel-silva-luchara-por-el-titulo-mundial-de-k1",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El alcalareño Diogo Miguel Silva disputa el domingo el título mundial de K1 ante el campeón, Fabio Loisi",
   "sub": "El excampeón de Europa WAKO Pro, de 25 años, pelea en la velada CFNT de El Puerto de Santa María tras tres meses de preparación en Tailandia",
   "caption": "Diogo Miguel Silva, en una imagen de archivo.",
   "foto": "diogo-silva-k1-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "center 25%",
   "claves": [
    "Diogo Miguel Silva, deportista de Alcalá de Guadaíra de 25 años, disputa el domingo 22 de noviembre el título mundial de K1.",
    "Su rival es el francés Fabio Loisi, actual campeón, en la velada CFNT de El Puerto de Santa María (Cádiz).",
    "Silva suma cuatro campeonatos de España y seis de Andalucía amateur y el título europeo WAKO Pro."
   ],
   "body": [
    "El alcalareño Diogo Miguel Silva disputará el domingo 22 de noviembre el título mundial de K1 frente al francés Fabio Loisi, actual campeón, en la velada CFNT que se celebra en El Puerto de Santa María (Cádiz). Lo ha anunciado Alcalá+Deporte, el portal deportivo del Ayuntamiento de Alcalá de Guadaíra.",
    "El K1 es una modalidad del kickboxing que permite golpes de puño, pierna y rodilla. Silva, de 25 años, llega al combate con un palmarés que incluye cuatro campeonatos de España y seis de Andalucía en categoría amateur, el título europeo profesional de la WAKO, una de las principales federaciones internacionales de deportes de contacto, y combates en ONE Championship, una de las grandes ligas internacionales del sector.",
    "## Preparación en Tailandia",
    "El deportista ha pasado los últimos tres meses preparándose en Tailandia para este combate, que Alcalá+Deporte describe como uno de los mayores retos de su carrera.",
    "Más allá del resultado del domingo, Silva busca el apoyo de empresas, entidades y patrocinadores que le permitan seguir con su preparación y su trayectoria internacional, según recoge el portal municipal.",
    "Los deportes de combate alcalareños cierran un buen otoño: el <a href='#milu-luchas-olimpicas-subcampeon-liga-iberdrola-2026'>Club de Luchas Olímpicas Milu acabó la temporada como subcampeón de la Liga Iberdrola</a>.",
    "<span class='howto'><b>Combate por el título mundial de K1.</b> Diogo Miguel Silva contra Fabio Loisi. Domingo 22 de noviembre, velada CFNT, El Puerto de Santa María (Cádiz). Las empresas interesadas en patrocinar al deportista pueden contactar a través de Alcalá+Deporte (info@alcalamasdeporte.com).</span>"
   ],
   "seo": [
    "diogo-miguel-silva-titulo-mundial-k1",
    "Diogo Miguel Silva, de Alcalá, pelea por el mundial de K1",
    "El alcalareño Diogo Miguel Silva, excampeón de Europa WAKO Pro, disputa el 22 de noviembre el título mundial de K1 ante Fabio Loisi en El Puerto.",
    [
     "Diogo Miguel Silva",
     "K1",
     "kickboxing",
     "Fabio Loisi",
     "WAKO",
     "deportistas de Alcalá"
    ]
   ]
  },
  {
   "iso": "2026-11-19",
   "hora": "22:34",
   "id": "borriquita-besamano-cristo-bondad-mantolin-cristo-rey",
   "sec": "hermandades",
   "kicker": "Cultos",
   "src": "Hermandad de la Borriquita (Facebook)",
   "fuente_url": "https://www.facebook.com/1767714672070448/posts/1772263474948901",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Cristo de la Bondad estrena mantolín bordado en oro en su besamano de Cristo Rey, del 20 al 22 de noviembre",
   "sub": "La pieza, bordada por Pepi Maya y diseñada por Rafael de Rueda, es una donación de hermanos y devotos de la Borriquita",
   "caption": "El Cristo de la Bondad, en una imagen difundida por la Hermandad de la Borriquita.",
   "foto": "borriquita-cristo-bondad-of.jpg",
   "fotocredito": "Facebook de la Hermandad de la Borriquita",
   "claves": [
    "El Santísimo Cristo de la Bondad de la Hermandad de la Borriquita de Alcalá de Guadaíra estará en besamano del viernes 20 al domingo 22 de noviembre.",
    "La imagen estrena un mantolín bordado en oro por Pepi Maya y diseñado por Rafael de Rueda, donado por hermanos y devotos.",
    "La Agrupación Musical Santísimo Cristo de la Bondad ofrece el viernes 20 a las 21.00 un concierto en la parroquia de San Agustín.",
    "El fin de semana incluye además la presentación de la restauración del paso de San Juan de la Hermandad de Jesús, el sábado 21."
   ],
   "body": [
    "La Hermandad de la Borriquita de Alcalá de Guadaíra expone en besamano al Santísimo Cristo de la Bondad del viernes 20 al domingo 22 de noviembre con motivo de la solemnidad de Jesucristo, Rey del Universo. La imagen estrena para la ocasión un mantolín bordado en oro, según ha publicado la hermandad en su perfil de Facebook.",
    "El mantolín lo ha bordado Pepi Maya sobre un diseño de Rafael de Rueda y es una donación de hermanos y devotos de la cofradía. La Borriquita trabaja además en el patrimonio de su titular: en octubre estudiaba restaurar al Cristo de la Bondad.",
    "## Concierto de la Bondad",
    "El mismo viernes 20, la Agrupación Musical Santísimo Cristo de la Bondad ofrece el concierto «Bondad: Candlelight» en la parroquia de San Agustín, dentro del ciclo municipal Alcalá EnClave de Música. El Ayuntamiento ha retrasado una hora su comienzo, que será a las 21.00 y no a las 20.00 como estaba previsto.",
    "## Un fin de semana cofrade",
    "No es la única cita del fin de semana. La Hermandad de Jesús presenta el sábado 21 la restauración del paso procesional de San Juan Evangelista, que quedará expuesto en su casa de hermandad. Ha recuperado también para el Adviento y la Navidad una antigua capa y una túnica de terciopelo con agremán de oro para la imagen del evangelista, según ha publicado en sus redes.",
    "El Cautivo celebra hasta el sábado 21 <a href='#cautivo-triduo-cristo-rey-19-22-noviembre'>su triduo de Cristo Rey en San Sebastián</a>, a las 20.00. La Amargura convoca ese mismo sábado, a las 12.00, en su casa de hermandad una reunión informativa para los hermanos que quieran incorporarse como acólitos o monaguillos. Y la Divina Pastora celebra el viernes 20 su misa mensual, como cada tercer viernes de mes.",
    "Fuera de Alcalá, la Hermandad del Águila mantiene hasta el miércoles 25 el manto de los devotos y la peana dorada, recién restaurados, en la muestra «Sevilla Fecit 2026» de la Casa Consistorial del Ayuntamiento de Sevilla. El Consejo General de Hermandades y Cofradías ha presentado, por su parte, su Foro de Formación 2026-2027, con una línea de formación cristiana y otra cultural y cofradiera.",
    "<span class='howto'><b>Besamano del Cristo de la Bondad.</b> Del viernes 20 al domingo 22 de noviembre. <b>Concierto «Bondad: Candlelight».</b> Viernes 20, 21.00, parroquia de San Agustín. <b>Restauración del paso de San Juan.</b> Sábado 21, casa de hermandad de Jesús. <b>«Sevilla Fecit 2026».</b> Hasta el 25 de noviembre: de lunes a viernes, de 10.00 a 13.30 y de 17.00 a 20.00; sábados, de 10.00 a 13.30.</span>"
   ],
   "seo": [
    "cristo-bondad-besamano-mantolin-borriquita-alcala",
    "Besamano del Cristo de la Bondad con mantolín nuevo",
    "El Cristo de la Bondad de la Borriquita de Alcalá estrena mantolín bordado en oro en su besamano de Cristo Rey, del 20 al 22 de noviembre de 2026.",
    [
     "Hermandad de la Borriquita",
     "Cristo de la Bondad",
     "besamano",
     "Cristo Rey",
     "Hermandad de Jesús",
     "hermandades de Alcalá"
    ]
   ],
   "encuadre": "center 20%"
  },
  {
   "iso": "2026-11-19",
   "hora": "07:25",
   "id": "emasesa-agua-regenerada-edar-ranilla-775000-m3",
   "sec": "alcala",
   "kicker": "Agua",
   "src": "BOE",
   "fuente_url": "https://www.boe.es/diario_boe/txt.php?id=BOE-B-2026-37954",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Emasesa pide permiso para producir 775.000 metros cúbicos de agua regenerada al año en la depuradora de Ranilla",
   "sub": "La Confederación Hidrográfica del Guadalquivir abre 30 días de información pública en el expediente, que el BOE sitúa en Alcalá de Guadaíra",
   "caption": "Gráfico con el volumen anual de agua regenerada que solicita Emasesa para la depuradora de Ranilla.",
   "foto": "emasesa-agua-regenerada-ranilla-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "Emasesa ha solicitado a la Confederación Hidrográfica del Guadalquivir autorización para producir y suministrar agua regenerada en la depuradora de Ranilla.",
    "El volumen anual solicitado es de 775.000 metros cúbicos, según el anuncio publicado en el BOE el 18 de noviembre de 2026.",
    "El agua se trataría con un proceso fisicoquímico, filtración por arena y cloración residual.",
    "Las alegaciones se pueden presentar durante 30 días desde la publicación del anuncio."
   ],
   "body": [
    "Emasesa, la Empresa Metropolitana de Abastecimiento y Saneamiento de Aguas de Sevilla, ha pedido a la Confederación Hidrográfica del Guadalquivir (CHG) autorización para producir y suministrar 775.000 metros cúbicos al año de agua regenerada en la depuradora de Ranilla, que el anuncio publicado en el BOE el 18 de noviembre sitúa en Alcalá de Guadaíra.",
    "El agua regenerada es agua residual depurada que recibe un tratamiento adicional para poder reutilizarse en lugar de verterse al cauce. El anuncio del Boletín Oficial del Estado, firmado en Sevilla el 16 de octubre por la Comisaría de Aguas de la CHG, abre un periodo de información pública de 30 días contados desde su publicación en el <a href='https://www.boe.es/diario_boe/txt.php?id=BOE-B-2026-37954'>BOE</a>.",
    "## Cómo se trataría el agua",
    "Según el anuncio, el agua saldría de la depuradora y pasaría por un tratamiento fisicoquímico, una filtración por arena y una cloración residual en laberinto antes de entregarse. El expediente, con la referencia ERA0015/SE-278/2025, incluye además un Plan de Gestión del Riesgo de Aguas Regeneradas, el documento que exige la normativa para controlar la calidad del agua según el uso al que se destine.",
    "El volumen solicitado equivale a unos 2.100 metros cúbicos diarios de media. El anuncio fija el punto de cumplimiento, donde se comprobará la calidad del agua, en unas coordenadas concretas, pero no detalla para qué usos se suministrará ni quiénes serán los usuarios del agua regenerada.",
    "La reutilización de aguas depuradas es una de las vías que contemplan las administraciones para reducir la presión sobre los embalses en periodos de sequía, porque permite destinar a riego, limpieza o usos industriales un agua que no procede de la red de abastecimiento.",
    "## Quién puede alegar",
    "Solo pueden presentar alegaciones quienes tengan la condición de interesados en el procedimiento. Para consultar la documentación, deben pedirlo expresamente a la Confederación antes de que termine el plazo, a través del Registro Electrónico Común, con el asunto «Solicitud acceso a documentación en fase de información pública», la referencia del expediente y sus datos de contacto.",
    "<span class='howto'><b>Alegaciones al expediente ERA0015/SE-278/2025.</b> Plazo: 30 días desde el 18 de noviembre de 2026, fecha de publicación en el BOE. Dónde: Registro Electrónico Común, dirigido a la Comisaría de Aguas de la Confederación Hidrográfica del Guadalquivir; las personas físicas también pueden presentarlas en persona. Solo para quienes tengan la condición de interesados.</span>"
   ],
   "seo": [
    "agua-regenerada-emasesa-edar-ranilla-alcala",
    "Agua regenerada en Ranilla: Emasesa pide 775.000 m³",
    "Emasesa solicita a la Confederación del Guadalquivir producir 775.000 m³ al año de agua regenerada en la EDAR de Ranilla, en Alcalá de Guadaíra.",
    [
     "Emasesa",
     "EDAR de Ranilla",
     "agua regenerada",
     "Confederación Hidrográfica del Guadalquivir",
     "BOE",
     "reutilización de agua"
    ]
   ]
  },
  {
   "iso": "2026-11-19",
   "hora": "07:25",
   "id": "vox-tribuna-bomberos-san-rafael-autobus-hotel-oromana",
   "sec": "politica",
   "kicker": "La Tribuna",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=cx-PvKkOf5c&t=0s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Vox pide más medios para los bomberos y un autobús urbano para San Rafael tras un Pleno marcado por la deuda",
   "sub": "Pedro Navarro y Carmen Loscertales cuestionan también la nueva licitación del Hotel Oromana y reclaman reactivar la comisión sobre el accidente de la Casa Ibarra",
   "caption": "Un momento del programa La Tribuna con el grupo municipal de Vox.",
   "foto": "vox-la-tribuna-18-noviembre-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Vox reclamó el 18 de noviembre, en el programa La Tribuna, más personal y medios materiales para el Servicio de Bomberos de Alcalá de Guadaíra.",
    "El portavoz, Pedro Navarro, pidió un autobús urbano que conecte la barriada de San Rafael con el centro, aunque sea deficitario.",
    "La concejala Carmen Loscertales criticó que VIVE Alcalá acumule cerca de 20 millones de deuda sin haber empezado ninguna vivienda.",
    "El grupo pidió reactivar la comisión municipal sobre el accidente laboral de la Casa Ibarra."
   ],
   "body": [
    "El grupo municipal de Vox en Alcalá de Guadaíra reclamó el miércoles 18 de noviembre más personal y medios para el Servicio de Bomberos y un autobús urbano para la barriada de San Rafael. Su portavoz, Pedro Navarro, y la concejala Carmen Loscertales repasaron en el programa La Tribuna el Pleno del día anterior y otros asuntos de la ciudad.",
    "Loscertales volvió sobre el endeudamiento, el asunto que centró <a href='#pleno-noviembre-led-vive-piscina-cabeza-hermosa'>el Pleno de noviembre</a>. Vox no cuestiona el cambio del alumbrado a LED, dijo, pero sí que se financie con más deuda cuando el Ayuntamiento ya tuvo que aprobar un plan económico-financiero por incumplir la regla de gasto. Sobre VIVE Alcalá, sostuvo que la sociedad municipal se acerca a los 20 millones de euros de deuda sin haber empezado ninguna vivienda y aludió a un sobrecoste de casi 500.000 euros en la cimentación de una de sus promociones. En el Pleno, el gobierno defendió que el préstamo de las 107 viviendas se subrogará a los compradores.",
    "## Bomberos y San Rafael",
    "Sobre los bomberos, Loscertales afirmó que el colectivo lleva años pidiendo más efectivos y que la falta de plantilla obliga a pagar horas extra, que a su juicio se abonan con retraso, y provoca cansancio en el servicio. Es la misma reclamación que el <a href='#bomberos-alcala-sindicato-pide-mas-plantilla-oep-2027'>Sindicato Andaluz de Bomberos dirigió al Ayuntamiento a principios de noviembre</a>. El gobierno municipal ha anunciado nuevas plazas para 2027, sin concretar cuántas.",
    "Navarro describió San Rafael como un barrio con carencias de alumbrado, limpieza y mobiliario urbano, con árboles caídos y una sede vecinal en mal estado. Trasladó además la petición de los vecinos de un autobús urbano diario que los conecte con el centro y con los servicios municipales. Según el portavoz, el gobierno argumenta que esa línea sería deficitaria; Vox sostiene que es un servicio público que debe prestarse igualmente.",
    "## Obras, hotel y Casa Ibarra",
    "El portavoz criticó los retrasos de las obras del centro y de Malas Mañanas, que atribuyó al calendario electoral, y se refirió de nuevo a la <a href='#vox-tala-arboles-castillo-ayuntamiento-88-ejemplares'>tala de árboles en el entorno del Castillo</a>. Loscertales dudó de que haya empresas interesadas en la nueva licitación del Hotel Oromana por el coste de las reformas exigidas; el delegado de Turismo, Christopher Rivas, ha defendido que los cambios en los pliegos fueron técnicos. El plazo para presentar candidaturas termina el 27 de noviembre.",
    "Sobre el accidente laboral de la Casa Ibarra, en el que murieron dos personas, Loscertales pidió respetar las decisiones judiciales y reclamó que se reactive la comisión municipal creada para informar a los grupos, que según Vox lleva tiempo paralizada.",
    "El programa incluyó preguntas de los demás grupos. La próxima semana participará el Partido Popular."
   ],
   "seo": [
    "vox-alcala-bomberos-san-rafael-autobus-tribuna",
    "Vox pide más bomberos y un autobús para San Rafael",
    "Vox reclama en Alcalá de Guadaíra más medios para los bomberos, un autobús urbano para San Rafael y critica la deuda de VIVE tras el Pleno de noviembre.",
    [
     "Vox Alcalá",
     "Pedro Navarro",
     "Carmen Loscertales",
     "bomberos",
     "San Rafael",
     "VIVE Alcalá",
     "Hotel Oromana"
    ]
   ],
   "encuadre": "center 25%"
  },
  {
   "iso": "2026-11-19",
   "hora": "07:25",
   "id": "dulce-nombre-cartel-75-aniversario-jose-cabrera",
   "sec": "hermandades",
   "kicker": "Glorias",
   "src": "Hermandad del Dulce Nombre (Facebook)",
   "fuente_url": "https://www.facebook.com/1441239044763233/posts/1443133774573760",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "José Cabrera Lasso de la Vega pintará el cartel del 75 aniversario fundacional del Dulce Nombre",
   "sub": "La Junta de Gobierno de la Hermandad de Caridad de Nuestra Señora del Dulce Nombre de María ha designado al cartelista de la efeméride",
   "caption": "José Cabrera Lasso de la Vega, autor del cartel del 75 aniversario fundacional del Dulce Nombre.",
   "foto": "dulce-nombre-cartelista-75-aniversario-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Dulce Nombre",
   "claves": [
    "La Hermandad del Dulce Nombre de Alcalá de Guadaíra ha elegido a José Cabrera Lasso de la Vega como autor del cartel de su LXXV aniversario fundacional.",
    "La designación la ha decidido la Junta de Gobierno y la ha comunicado la hermandad en Facebook el 18 de noviembre.",
    "La hermandad no ha dado todavía la fecha de presentación del cartel ni el programa de la efeméride."
   ],
   "body": [
    "La Hermandad de Caridad de Nuestra Señora del Dulce Nombre de María de Alcalá de Guadaíra ha designado a José Cabrera Lasso de la Vega como autor del cartel que anunciará su 75 aniversario fundacional. Lo ha comunicado la propia hermandad en su perfil de Facebook el miércoles 18 de noviembre.",
    "Según la publicación, la decisión la ha tomado la Junta de Gobierno, que desea al cartelista acierto en el encargo y pide a su titular, Nuestra Señora del Dulce Nombre de María, que guíe su trabajo para anunciar la efeméride.",
    "## Una efeméride por delante",
    "La corporación no ha detallado aún cuándo se presentará el cartel ni qué actos prepara para conmemorar sus 75 años de historia.",
    "La hermandad mantiene estas semanas su actividad habitual. Su coro, el de Nuestra Señora del Dulce Nombre de María, pondrá la música en los <a href='#cautivo-triduo-cristo-rey-19-22-noviembre'>cultos de Cristo Rey que la Hermandad del Cautivo celebra en San Sebastián</a> del 19 al 22 de noviembre. Además, la hermandad tiene prevista su zambomba para el 20 de diciembre, según recogió El Panadero en la información sobre <a href='#zambomba-rosario-salesianos-28-noviembre'>las zambombas de estas fechas</a>.",
    "<span class='howto'><b>Hermandad del Dulce Nombre.</b> Cartelista del LXXV aniversario fundacional: José Cabrera Lasso de la Vega. Fecha de presentación del cartel: pendiente de anunciar por la hermandad.</span>"
   ],
   "seo": [
    "dulce-nombre-cartel-75-aniversario-alcala",
    "Dulce Nombre: cartelista del 75 aniversario en Alcalá",
    "La Hermandad del Dulce Nombre de Alcalá de Guadaíra elige a José Cabrera Lasso de la Vega como autor del cartel de su 75 aniversario fundacional.",
    [
     "Hermandad del Dulce Nombre",
     "José Cabrera Lasso de la Vega",
     "75 aniversario",
     "cartel",
     "glorias de Alcalá"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "iso": "2026-11-19",
   "hora": "07:25",
   "id": "perdon-iguala-cristo-angustias-enero-2027",
   "sec": "hermandades",
   "kicker": "Semana Santa",
   "src": "Hermandad del Perdón (Facebook)",
   "fuente_url": "https://www.facebook.com/1653440960158738/posts/1655725393263628",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Perdón fija las igualás del Cristo y de la Virgen de las Angustias para el 17 y el 24 de enero",
   "sub": "Las dos citas para los aspirantes a costaleros del Martes Santo serán a las 13.00 en los salones de la parroquia de la Inmaculada Concepción",
   "caption": "Cartel de la igualá de costaleros del Santísimo Cristo del Perdón, el 17 de enero.",
   "foto": "perdon-iguala-cristo-2027-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Perdón",
   "claves": [
    "La igualá del Santísimo Cristo del Perdón será el domingo 17 de enero de 2027 a las 13.00.",
    "La de Nuestra Señora de las Angustias será el domingo 24 de enero de 2027, también a las 13.00.",
    "Ambas se celebran en los salones de la parroquia de la Inmaculada Concepción, de cara al Martes Santo.",
    "La hermandad pide a los aspirantes que acudan con el mismo calzado que usarán el día de la salida."
   ],
   "body": [
    "La Hermandad del Perdón de Alcalá de Guadaíra celebrará el domingo 17 de enero de 2027 la igualá de los costaleros del Santísimo Cristo del Perdón y el domingo 24 la de Nuestra Señora de las Angustias, ambas a las 13.00 en los salones de la parroquia de la Inmaculada Concepción, según ha anunciado en Facebook.",
    "La igualá es la reunión en la que el capataz mide a los costaleros y los coloca bajo el paso según su altura, para que el peso se reparta de forma pareja. Es el primer paso para formar las cuadrillas que llevarán los dos pasos de la hermandad el Martes Santo.",
    "La hermandad ha publicado las dos convocatorias por separado este miércoles 18 de noviembre y pide a los aspirantes que acudan con el mismo calzado que vayan a llevar el día de la salida, porque la altura de cada costalero cambia según el zapato.",
    "## Otras citas de la hermandad",
    "Antes de las igualás, el Perdón tiene otras citas en el calendario. Su Grupo Joven ha abierto la inscripción para que <a href='#perdon-reyes-magos-visitan-casas-5-enero-2027'>los Reyes Magos visiten casas la noche del 5 de enero</a>.",
    "<span class='howto'><b>Igualás de la Hermandad del Perdón.</b> Santísimo Cristo del Perdón: domingo 17 de enero de 2027, 13.00. Nuestra Señora de las Angustias: domingo 24 de enero de 2027, 13.00. Lugar: salones de la parroquia de la Inmaculada Concepción, Alcalá de Guadaíra. Los aspirantes deben llevar el calzado que usarán el Martes Santo.</span>"
   ],
   "seo": [
    "perdon-iguala-costaleros-cristo-angustias-alcala",
    "Igualás del Perdón en Alcalá: 17 y 24 de enero",
    "La Hermandad del Perdón de Alcalá de Guadaíra convoca las igualás del Cristo del Perdón y de la Virgen de las Angustias el 17 y el 24 de enero de 2027.",
    [
     "Hermandad del Perdón",
     "igualá",
     "costaleros",
     "Martes Santo",
     "Nuestra Señora de las Angustias",
     "Inmaculada Concepción"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "pleno-noviembre-led-vive-piscina-cabeza-hermosa",
   "sec": "politica",
   "kicker": "Pleno",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=vfa9QI5-D1o&t=0s",
   "title": "El Pleno aprueba los préstamos para cambiar 7.800 farolas a LED y para las 107 viviendas de VIVE en Mar Mediterráneo",
   "sub": "Salen adelante también el dinero para la piscina de verano de Cabeza Hermosa, con el voto en contra del PP y las críticas de Vox y Alcalá Nos Importa por la deuda",
   "caption": "Concejales durante una sesión plenaria del Ayuntamiento de Alcalá de Guadaíra, en una imagen de archivo.",
   "foto": "pleno-octubre-votaciones.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Pleno de Alcalá de Guadaíra aprobó el 17 de noviembre una operación de financiación con el IDAE para sustituir más de 7.800 luminarias del alumbrado público por tecnología LED.",
    "También autorizó un préstamo de 11 millones de euros con una entidad bancaria para que VIVE Alcalá construya 107 viviendas protegidas en venta en la avenida Mar Mediterráneo.",
    "El gobierno municipal aprobó un suplemento de crédito para la futura piscina de verano de Cabeza Hermosa.",
    "PP, Vox y Alcalá Nos Importa criticaron el aumento de la deuda municipal; Andalucía Por Sí, socio de gobierno, respaldó los tres acuerdos."
   ],
   "body": [
    "El Pleno del Ayuntamiento de Alcalá de Guadaíra aprobó el martes 17 de noviembre, en su sesión ordinaria, la financiación para sustituir más de 7.800 puntos de luz del alumbrado público por tecnología LED y un préstamo de 11 millones de euros para que la sociedad municipal VIVE Alcalá construya 107 viviendas protegidas en la avenida Mar Mediterráneo.",
    "La sesión dio luz verde además a un suplemento de crédito para la futura piscina de verano de Cabeza Hermosa. La segunda teniente de alcaldesa y delegada de Hacienda, Mª Ángeles Ballesteros (PSOE), lo cifró en 1,2 millones de euros en declaraciones a El Panadero; Andalucía Por Sí se refirió a una modificación presupuestaria de un millón.",
    "## Alumbrado LED con un crédito del IDAE",
    "La renovación del alumbrado se pagará con un préstamo del Instituto para la Diversificación y Ahorro de la Energía (IDAE), dependiente del Ministerio. Según Ballesteros, el crédito es a interés cero, la sustitución estará terminada en nueve meses y el cambio ahorrará al Ayuntamiento un millón de euros al año en la factura eléctrica, con lo que el préstamo quedará amortizado a medio plazo. Andalucía Por Sí situó la operación en más de seis millones de euros.",
    "La delegada explicó que las nuevas luminarias consumen menos y llevan sistemas que permiten localizar antes las averías de cada farola.",
    "## Once millones para las viviendas de VIVE",
    "El préstamo de 11 millones financiará las 107 viviendas protegidas en régimen de compraventa que VIVE Alcalá prevé en Mar Mediterráneo, las mismas que la sociedad anunció que sorteará a principios de diciembre. Según Ballesteros, el crédito hipotecario se subrogará a los compradores cuando asuman sus hipotecas. El gobierno sostiene que las viviendas irán destinadas sobre todo a jóvenes.",
    "Sobre la piscina, la delegada recordó que la de verano de San Juan se ha quedado pequeña para una ciudad que ha crecido y que la zona norte reclamaba una instalación propia desde hace años.",
    "## La oposición, contra el endeudamiento",
    "El PP votó en contra de los dos préstamos. El concejal popular Esaú Pérez dijo no cuestionar las actuaciones sino el modelo de financiación. «¿Cómo es posible que el Ayuntamiento sea quien pida el préstamo, quien lo avala y quien se haga responsable de ese mismo préstamo en caso de impago?», planteó. Pérez defiende que sea el propio Ayuntamiento, y no una sociedad mercantil, el que promueva las viviendas.",
    "La portavoz adjunta de Vox, Carmen Loscertales, afirmó que la deuda municipal supera ya los 50 millones de euros, el 64,60 % de los ingresos, y que con este préstamo la de VIVE llega a 20 millones «sin que haya de momento ni una vivienda construida». «Tenemos deuda, pero no tenemos vivienda», resumió. Vox criticó también que el suplemento para la piscina se haya reunido con partidas sin usar, algunas de hace más de 20 años.",
    "El concejal de Alcalá Nos Importa, José Luis Roldán, calculó que los acuerdos elevarán la deuda hasta 58 millones de euros y reprochó que la piscina no figurase en el presupuesto. Andalucía Por Sí, socio del PSOE en el gobierno, respaldó los tres expedientes y sostuvo que la ciudad necesita más instalaciones como la piscina."
   ],
   "seo": [
    "pleno-alcala-prestamos-led-vive-piscina",
    "Pleno de Alcalá: préstamos para LED, VIVE y piscina",
    "El Pleno de Alcalá de Guadaíra aprueba financiar 7.800 farolas LED, 11 millones para 107 viviendas de VIVE Alcalá y la nueva piscina de Cabeza Hermosa.",
    [
     "Pleno de Alcalá",
     "VIVE Alcalá",
     "alumbrado LED",
     "IDAE",
     "piscina Cabeza Hermosa",
     "deuda municipal",
     "Mar Mediterráneo"
    ]
   ],
   "iso": "2026-11-18",
   "hora": "22:28",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "pleno-noviembre-mociones-tomillar-protocolo-obras",
   "sec": "politica",
   "kicker": "Pleno",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=vfa9QI5-D1o&t=0s",
   "title": "El Pleno rechaza convertir El Tomillar en hospital general y aprueba por unanimidad el protocolo del PP para reparar el entorno de las obras",
   "sub": "El gobierno prefiere pedir a la Junta un hospital nuevo en suelo municipal; también salen adelante la moción ferroviaria de Alcalá Nos Importa y la propuesta de Manuel Araujo sobre la plantilla",
   "caption": "Fachada del Hospital El Tomillar, en Alcalá de Guadaíra, en una imagen de archivo.",
   "foto": "alcala-nos-importa-tomillar.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Pleno de Alcalá de Guadaíra rechazó el 17 de noviembre la moción de Alcalá Nos Importa para transformar el Hospital El Tomillar en un hospital general.",
    "Se aprobó por unanimidad la propuesta del PP de un protocolo municipal para proteger y reparar el espacio público en las grandes obras.",
    "También por unanimidad se declaró de interés público local a la Asociación Molinos del Guadaíra.",
    "Las dos mociones de Vox, sobre actividades con menores y sobre una ruta fernandina, fueron rechazadas."
   ],
   "body": [
    "El Pleno del Ayuntamiento de Alcalá de Guadaíra rechazó el martes 17 de noviembre la moción de Alcalá Nos Importa para transformar el Hospital El Tomillar en un hospital público general, y aprobó por unanimidad la propuesta del PP para crear un protocolo de protección y reparación del espacio público en las grandes obras.",
    "La moción sobre El Tomillar, que el grupo anunció en octubre, pedía estudiar urgencias hospitalarias las 24 horas, una unidad de cuidados intensivos, maternidad, hospitalización general y nuevas especialidades. Su concejal, José Luis Roldán, explicó a El Panadero que no se trataba de evitar un cierre sino de ampliar el centro, que según sus datos ocupa 16.000 de los 46.000 metros cuadrados de una parcela de la Tesorería de la Seguridad Social.",
    "## Dos modelos para la sanidad",
    "La delegada de Hacienda y portavoz del gobierno, Mª Ángeles Ballesteros (PSOE), dijo que el gobierno quiere que la Junta de Andalucía siga invirtiendo en El Tomillar, pero que su objetivo es pedir la construcción de un nuevo hospital general para Alcalá y Los Alcores. Para ello, recordó, el Ayuntamiento ha ofrecido a la Junta un terreno municipal en el núcleo urbano.",
    "El PP se abstuvo. El concejal popular Esaú Pérez sostuvo que cualquier decisión sobre una infraestructura sanitaria debe estudiarse en el sector sanitario y recordó que El Tomillar forma parte del Área de Gestión Sanitaria Sur. Roldán calificó esa postura de excusa para un asunto que considera «estrictamente político», y el PP replicó este miércoles en Facebook que el futuro del hospital deben decidirlo los profesionales sanitarios.",
    "## Obras, molinos y plantilla",
    "La propuesta del PP plantea conocer el estado del entorno antes de cada gran obra, fijar las obligaciones de la constructora y crear un órgano que vigile su cumplimiento. El partido puso como ejemplo la calle San Francisco tras las obras del aparcamiento de Nicolás Alpériz. Por unanimidad se declaró además de interés público local a la Asociación Molinos del Guadaíra.",
    "Salió adelante la segunda moción de Alcalá Nos Importa, que pide garantías en la modernización de la línea Madrid-Sevilla y el esclarecimiento del accidente de Urda, en el que murió una vecina de Alcalá. Roldán lamentó que nadie interviniera en el debate. También se aprobó, con la abstención del gobierno, la propuesta del concejal no adscrito Manuel Araujo sobre la plantilla, en la que preguntó por la valoración de puestos pendiente desde 2022 y por unas 226 plazas de funcionario vacantes, según sus datos, en la relación de puestos de 2023.",
    "## Las mociones de Vox",
    "Vox pidió que el Ayuntamiento y los grupos no organicen actividades con menores en las que se difundan cuestiones políticas, tras criticar su portavoz, Pedro Navarro, que un ponente aludiera a su partido en las Jornadas de Memoria Democrática con escolares. El delegado de Memoria Democrática, Christopher Rivas (Andalucía Por Sí), defendió la actividad y sostuvo que la represión franquista «hay que contarla». La segunda moción, una ruta turística dedicada a Fernando III, también fue rechazada: Rivas argumentó que esa figura ya se trata en la ruta del Castillo, mientras el concejal de Vox Evaristo Téllez acusó al gobierno de rechazar sus propuestas por motivos ideológicos."
   ],
   "seo": [
    "pleno-alcala-tomillar-hospital-general-mociones",
    "Pleno de Alcalá rechaza el hospital general en El Tomillar",
    "El Pleno de Alcalá de Guadaíra rechaza convertir El Tomillar en hospital general y aprueba el protocolo del PP para reparar el entorno de las obras.",
    [
     "Hospital El Tomillar",
     "Pleno de Alcalá",
     "Alcalá Nos Importa",
     "PP Alcalá",
     "Vox Alcalá",
     "Asociación Molinos del Guadaíra",
     "Manuel Araujo"
    ]
   ],
   "iso": "2026-11-18",
   "hora": "22:28",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "ross-conciertos-escolares-sheherazade-auditorio-riberas",
   "sec": "cultura",
   "kicker": "Música",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=vfa9QI5-D1o&t=0s",
   "title": "La Sinfónica de Sevilla interpreta «Sheherazade» para escolares en el auditorio Riberas del Guadaíra hasta el viernes",
   "sub": "Son tres conciertos didácticos del ciclo educativo de la ROSS, con narración de Ana Hernández Sanchiz y dirección de Alejandro Muñoz",
   "caption": "La Sinfónica de Sevilla, en el concierto escolar del auditorio Riberas del Guadaíra.",
   "foto": "ross-conciertos-escolares-riberas-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Real Orquesta Sinfónica de Sevilla ofrece entre el 18 y el 20 de noviembre tres conciertos escolares en el auditorio Riberas del Guadaíra de Alcalá.",
    "El programa es «Sheherazade», de Nikolái Rimski-Kórsakov, con narración de Ana Hernández Sanchiz y dirección de Alejandro Muñoz.",
    "Según el Ayuntamiento, unos 4.000 alumnos han pasado por estos conciertos educativos en las dos últimas temporadas."
   ],
   "body": [
    "La Real Orquesta Sinfónica de Sevilla (ROSS) ofrece desde este miércoles 18 de noviembre y hasta el viernes 20 tres conciertos para escolares en el auditorio Riberas del Guadaíra, en Alcalá de Guadaíra, con «Sheherazade», la suite sinfónica de Nikolái Rimski-Kórsakov inspirada en los relatos de «Las mil y una noches».",
    "Las sesiones forman parte del ciclo educativo con el que la orquesta acerca la música sinfónica a los alumnos. La narración corre a cargo de Ana Hernández Sanchiz y la dirección musical, de Alejandro Muñoz. La primera función se celebró este miércoles y las otras dos son el jueves 19 y el viernes 20.",
    "## Una historia contada con la orquesta",
    "El espectáculo combina la música con la narración y con ilustraciones proyectadas que funcionan como un musicograma: guían a los niños para que sigan la partitura y reconozcan a personajes como Simbad. Responsables del programa explicaron a El Panadero que la obra se presta a este formato porque Rimski-Kórsakov asigna a cada familia de instrumentos un personaje de la historia, lo que ayuda a los escolares a entender lo que escuchan.",
    "Según el equipo de la orquesta, la idea es que la palabra y la imagen refuercen la audición, en lugar de ofrecer una animación como las que los niños ven a diario en casa. Los alumnos escuchan la música en directo y ven de cerca a los músicos y sus instrumentos.",
    "## Cuatro mil alumnos en dos temporadas",
    "El Ayuntamiento sostiene, en una nota publicada este miércoles, que la colaboración continuada con la ROSS ha convertido al auditorio en sede habitual de estos conciertos educativos, por los que han pasado unos 4.000 alumnos en las dos últimas temporadas. La alcaldesa, Ana Isabel Jiménez, destacó en sus redes que las funciones reúnen a escolares de toda la provincia y que el ciclo incluye también conciertos familiares.",
    "<span class='howto'><b>Conciertos escolares de la ROSS.</b> «Sheherazade», de Rimski-Kórsakov. Auditorio Riberas del Guadaíra. Miércoles 18, jueves 19 y viernes 20 de noviembre. Funciones para grupos escolares.</span>"
   ],
   "seo": [
    "ross-sheherazade-conciertos-escolares-auditorio-riberas",
    "La ROSS lleva «Sheherazade» a escolares en Alcalá",
    "La Real Orquesta Sinfónica de Sevilla ofrece del 18 al 20 de noviembre tres conciertos escolares de «Sheherazade» en el auditorio Riberas de Alcalá.",
    [
     "Real Orquesta Sinfónica de Sevilla",
     "ROSS",
     "auditorio Riberas del Guadaíra",
     "conciertos escolares",
     "Sheherazade",
     "música clásica"
    ]
   ],
   "iso": "2026-11-18",
   "hora": "22:28",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "press-trip-diputacion-naturgy-pilatus-alcala",
   "sec": "economia",
   "kicker": "Industria",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1607970251375315",
   "title": "Periodistas latinoamericanos visitan Naturgy y Pilatus en Alcalá dentro de un viaje de prensa de la Diputación",
   "sub": "El programa de Prodetur y SevillaCityOne reunió a una docena de informadores especializados de seis países para conocer la industria de la provincia",
   "caption": "Los periodistas latinoamericanos, ante la sede de Pilatus en Alcalá.",
   "foto": "press-trip-pilatus-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "Una docena de periodistas especializados de seis países latinoamericanos ha visitado las empresas Naturgy y Pilatus en Alcalá de Guadaíra.",
    "La visita forma parte de un programa de la Diputación de Sevilla organizado a través de Prodetur con la colaboración de SevillaCityOne.",
    "El delegado de Desarrollo Económico, Pablo Chain, defiende que estos viajes de prensa ayudan a atraer inversión internacional."
   ],
   "body": [
    "Una docena de periodistas especializados de Panamá, Argentina, Colombia, Perú, México y Venezuela ha visitado estos días las empresas Naturgy y Pilatus, instaladas en Alcalá de Guadaíra, dentro de un viaje de prensa de la Diputación de Sevilla para dar a conocer la industria de la provincia, según ha informado el Ayuntamiento en su perfil de Facebook.",
    "El programa, titulado «Sevilla, polos de innovación industrial, transición energética y desarrollo urbano y otros sectores del sur de Europa», lo organiza la Diputación a través de Prodetur, su sociedad de promoción, con la colaboración de SevillaCityOne.",
    "En Alcalá, la expedición conoció el centro de energías renovables de Naturgy y la planta de Pilatus, que el Ayuntamiento describe como una implantación reciente en la localidad. La nota municipal presenta a las dos empresas como ejemplos de innovación en los sectores energético y aeronáutico.",
    "## La visión del Ayuntamiento",
    "El delegado de Desarrollo Económico e Industria, Pablo Chain (PSOE), participó en las visitas a la ciudad. Según Chain, el viaje da visibilidad a «las oportunidades de negocio y desarrollo en Alcalá» en esos dos sectores. El delegado sostiene que estos viajes «son una herramienta útil para el sector» porque mostrar en medios especializados el potencial económico de la provincia «contribuye a atraer la inversión internacional».",
    "El Ayuntamiento sitúa a Alcalá entre los principales polos industriales del área metropolitana de Sevilla por la combinación de industria, energía y suelo disponible para nuevos proyectos empresariales. La nota no detalla qué medios han participado en el viaje, cuántos días ha durado ni cuándo se publicarán los reportajes de los periodistas.",
    "Los viajes de prensa de este tipo, conocidos como press trips, son una herramienta habitual de promoción turística y empresarial: las instituciones invitan a periodistas a conocer un territorio para que lo den a conocer en sus países."
   ],
   "seo": [
    "press-trip-diputacion-naturgy-pilatus-alcala",
    "Periodistas extranjeros visitan Naturgy y Pilatus en Alcalá",
    "Una docena de periodistas de seis países latinoamericanos visita Naturgy y Pilatus en Alcalá de Guadaíra en un viaje de prensa de la Diputación.",
    [
     "Diputación de Sevilla",
     "Prodetur",
     "Naturgy",
     "Pilatus",
     "Pablo Chain",
     "industria Alcalá"
    ]
   ],
   "iso": "2026-11-18",
   "hora": "22:28",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "tenis-oromana-irene-torres-finalista-babolat-senior-international",
   "sec": "deportes",
   "kicker": "Tenis",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=vfa9QI5-D1o",
   "title": "Irene Torres, del Club de Tenis Oromana, finalista del Torneo Nacional Babolat mientras el club acoge el Senior International",
   "sub": "El campeonato internacional para mayores de 30 años se disputa en las pistas de Oromana hasta el sábado 21 de noviembre",
   "caption": "Cartel del XVI Senior International Champion MT200 del Club de Tenis Oromana.",
   "foto": "tenis-senior-mt200-oromana-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "contain",
   "claves": [
    "La tenista Irene Torres Gómez, del Club de Tenis Oromana, ha sido finalista de su categoría en el Torneo Nacional Babolat, con 22 jugadoras inscritas.",
    "Es su segundo resultado destacado de la semana, tras el subcampeonato de Andalucía de dobles Sub-13 con Claudia Gavira.",
    "El Club de Tenis Oromana acoge hasta el sábado 21 de noviembre el XVI Senior International Champion MT200, prueba del circuito de veteranos de la ITF."
   ],
   "body": [
    "La tenista Irene Torres Gómez, del Club de Tenis Oromana de Alcalá de Guadaíra, ha sido finalista de su categoría en el Torneo Nacional Babolat, según ha informado este miércoles 18 de noviembre Alcalá+Deporte, el portal deportivo del Ayuntamiento. El cuadro reunió a 22 jugadoras inscritas, entre ellas tenistas de España, Rusia y China.",
    "Torres se abrió paso hasta la final y terminó entre las dos mejores de su categoría. El portal municipal no ha detallado dónde se disputó el torneo ni el resultado del partido decisivo.",
    "Es el segundo resultado destacado de la jugadora en pocos días: con su compañera de club Claudia Gavira fue <a href='#tenis-oromana-subcampeonas-andalucia-dobles-sub13'>subcampeona de Andalucía de dobles Sub-13</a> en el campeonato autonómico celebrado en Córdoba.",
    "## Tenis internacional en Oromana",
    "Mientras, el propio Club de Tenis Oromana es estos días escenario del XVI Senior International Champion MT200, que <a href='#tenis-senior-mt200-oromana-noviembre'>arrancó el lunes 16 de noviembre</a> y se prolonga hasta el sábado 21. Es una prueba del circuito internacional de veteranos de la Federación Internacional de Tenis (ITF), organizada por Senior Tennis Events, y reúne a jugadores de distintas nacionalidades en categorías que van de los 30 a los 85 años.",
    "El campeonato incluye pruebas individuales y de dobles masculinos, femeninos y mixtos. Los partidos se juegan preferentemente por la mañana, para que los participantes puedan conocer por la tarde el Castillo, el centro histórico o el parque de Oromana. En ediciones anteriores participaron jugadores de Canadá, Suiza, Alemania, Portugal e Inglaterra. La organización invita a los aficionados y al público en general a acercarse al club para seguir los partidos.",
    "<span class='howto'><b>XVI Senior International Champion MT200.</b> Club de Tenis Oromana, Alcalá de Guadaíra. Hasta el sábado 21 de noviembre, con partidos sobre todo por la mañana. Categorías de 30 a 85 años, individuales y dobles. La organización invita al público a asistir.</span>"
   ],
   "seo": [
    "irene-torres-babolat-tenis-oromana-senior",
    "Irene Torres, finalista del Babolat; Oromana acoge el Senior",
    "Irene Torres, del Club de Tenis Oromana de Alcalá, finalista del Torneo Nacional Babolat; el club acoge el Senior International hasta el 21 de noviembre.",
    [
     "Club de Tenis Oromana",
     "Irene Torres",
     "Torneo Nacional Babolat",
     "Senior International Champion MT200",
     "tenis Alcalá",
     "Alcalá+Deporte"
    ]
   ],
   "iso": "2026-11-18",
   "hora": "22:28",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia"
  },
  {
   "id": "centro-san-miguel-flamenco-poesia-comedia-arte-18-22-noviembre",
   "sec": "cultura",
   "kicker": "Agenda",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1607795788059428",
   "title": "El Centro San Miguel programa flamenco, poesía y un festival de comedia del arte del 18 al 22 de noviembre",
   "sub": "Incluye puertas abiertas con la Peña El Arrabal, un recital de Elvira Ponce y la obra «Quieto Parao»; el concierto de la Bondad en San Agustín se retrasa a las 21.00",
   "caption": "Cartel de las jornadas de puertas abiertas del Centro San Miguel por el Día Mundial del Flamenco.",
   "foto": "centro-san-miguel-flamenco-cartel-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Centro San Miguel de Alcalá de Guadaíra acoge del 18 al 22 de noviembre talleres de flamenco, un recital de poesía, un recital de cante y un festival de comedia del arte.",
    "Las actividades son de entrada libre hasta completar aforo; los talleres del festival de La Sala requieren inscripción gratuita.",
    "El concierto «Bondad: Candlelight» del viernes 20 en la parroquia de San Agustín empezará a las 21.00 y no a las 20.00."
   ],
   "body": [
    "El Centro San Miguel de Alcalá de Guadaíra programa del miércoles 18 al domingo 22 de noviembre jornadas de puertas abiertas de flamenco, un recital de poesía, otro de cante y un festival de comedia del arte, todo con entrada libre hasta completar aforo, según ha anunciado el Ayuntamiento en su perfil de Facebook.",
    "La semana arranca con dos jornadas de puertas abiertas por el Día Mundial del Flamenco, de la mano de la Peña Flamenca El Arrabal, de 18.30 a 20.30. El miércoles 18 hay talleres de cante y baile, y el jueves 19, de guitarra y baile.",
    "El viernes 20, a las 19.30, Luis Brenes presenta «Odisea a Poética», un recital de poesía en homenaje a Alcalá de Guadaíra. El sábado 21, a las 13.00, la cantaora Elvira Ponce ofrece un recital dentro del ciclo Otoño Flamenco en Sevilla, con la colaboración de la Peña El Arrabal.",
    "## Comedia del arte con La Sala",
    "La Asociación Cultural La Sala celebra el sábado 21 y el domingo 22 su Festival Internacional de Comedia del Arte. El sábado, de 17.00 a 20.30, habrá presentación, una entrevista abierta con los directores teatrales Michelle Salvatori y Luis Miguel Rodríguez, un taller de esta técnica teatral y una proyección. El domingo, a las 18.00, se representa «Quieto Parao». La inscripción es gratuita escribiendo a infolasalasevilla@gmail.com.",
    "La comedia del arte es un género teatral nacido en Italia en el siglo XVI, basado en la improvisación y en personajes fijos con máscara.",
    "## Cambio de hora en San Agustín",
    "El Ayuntamiento ha avisado también de un cambio en el ciclo Alcalá EnClave de Música: el concierto «Bondad: Candlelight», de la Agrupación Musical Santísimo Cristo de la Bondad, en la parroquia de San Agustín, empezará el viernes 20 de noviembre a las 21.00, una hora más tarde de lo previsto.",
    "<span class='howto'><b>Centro San Miguel.</b> Puertas abiertas de flamenco: 18 y 19 de noviembre, 18.30-20.30. «Odisea a Poética»: 20 de noviembre, 19.30. Elvira Ponce: 21 de noviembre, 13.00. Comedia del arte: 21 de noviembre, 17.00-20.30, y «Quieto Parao», 22 de noviembre, 18.00. Entrada libre hasta completar aforo. <b>Concierto de la Bondad:</b> viernes 20, 21.00, parroquia de San Agustín.</span>"
   ],
   "seo": [
    "centro-san-miguel-flamenco-poesia-comedia-arte",
    "Flamenco, poesía y comedia del arte en el Centro San Miguel",
    "El Centro San Miguel de Alcalá de Guadaíra programa del 18 al 22 de noviembre flamenco, poesía y un festival de comedia del arte con entrada libre.",
    [
     "Centro San Miguel",
     "Peña Flamenca El Arrabal",
     "Elvira Ponce",
     "comedia del arte",
     "Asociación Cultural La Sala",
     "Alcalá EnClave de Música"
    ]
   ],
   "iso": "2026-11-18",
   "hora": "22:28",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "encuadre": "contain"
  },
  {
   "id": "paz-vega-rueda-ana-no-alcala-angela-molina",
   "sec": "cultura",
   "kicker": "Cine",
   "iso": "2026-11-18",
   "hora": "07:24",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=vfa9QI5-D1o",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Paz Vega rueda en Alcalá de Guadaíra «Ana no», su segunda película como directora, con Ángela Molina",
   "sub": "El largometraje, una coproducción hispano-italiana con estreno previsto en 2027, adapta una novela de Agustín Gómez Arcos y graba en la ribera del Guadaíra",
   "caption": "La ribera del Guadaíra en el entorno de Oromana, durante otro rodaje celebrado en octubre, en una imagen de archivo.",
   "foto": "rodaje-pelicula-oromana-of.jpg",
   "fotocredito": "Instagram del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "Alcalá de Guadaíra es uno de los escenarios del rodaje de «Ana no», el segundo largometraje de Paz Vega como directora.",
    "La película adapta una novela del escritor almeriense Agustín Gómez Arcos sobre una generación que sufrió la represión de la dictadura.",
    "Ángela Molina protagoniza el filme, con Álvaro Morte, Rossy de Palma y Alessio Boni en el reparto.",
    "La película es una coproducción entre España e Italia y tiene previsto su estreno en salas en 2027."
   ],
   "body": [
    "La actriz y directora sevillana Paz Vega rueda en Alcalá de Guadaíra parte de «Ana no», su segundo largometraje detrás de las cámaras, una coproducción entre España e Italia basada en una novela de Agustín Gómez Arcos y protagonizada por Ángela Molina, con estreno previsto en 2027.",
    "La alcaldesa, Ana Isabel Jiménez, que ha visitado al equipo de producción, lo dio a conocer en sus perfiles de Facebook e Instagram. Según Jiménez, la película «recupera la memoria de toda una generación que sufrió la represión de la dictadura y que supo responder a ella con dignidad». El reparto lo completan Álvaro Morte, Rossy de Palma y el actor italiano Alessio Boni.",
    "Jiménez sostiene que la producción es «una magnífica oportunidad para proyectar la imagen de Alcalá», porque muestra «algunos de los rincones más especiales» de la ribera del Guadaíra. La alcaldesa destacó también el trabajo de la Film Office municipal y su colaboración con Andalucía Film Commission para atraer rodajes. No se han detallado los puntos concretos de grabación ni cuántos días dura el rodaje en el término municipal.",
    "## Una novela del exilio",
    "Agustín Gómez Arcos, nacido en Enix (Almería) en 1933 y fallecido en París en 1998, desarrolló buena parte de su obra en Francia y en francés, después de exiliarse durante el franquismo. «Ana no» es el título con el que se conoce en español su novela «Ana non», publicada en 1977, la historia de una mujer mayor que emprende un viaje a pie a través de España en busca de su hijo, preso.",
    "Para Paz Vega, «Ana no» llega después de «Rita», el largometraje con el que debutó como directora. En la nueva película dirige a Ángela Molina, que encarna el papel principal.",
    "## Alcalá, escenario de rodajes",
    "No es la primera grabación de cine en la ciudad este otoño. A finales de octubre, otro equipo de cine trabajó junto a los molinos de la Aceña y del Algarrobo, en el parque de Oromana, con cortes intermitentes del paso en los senderos, como ya <a href='#rodaje-pelicula-oromana-molinos'>informó El Panadero</a>. El Ayuntamiento no ha precisado si se trataba de la misma producción.",
    "La alcaldesa cerraba su publicación con la idea de que la ciudad sigue «sumando historias, cultura y cine». La historia aborda la posguerra a través del viaje de una mujer y trata la represión, la memoria y la dignidad de los vencidos."
   ],
   "seo": [
    "paz-vega-ana-no-rodaje-alcala-guadaira",
    "Paz Vega rueda «Ana no» en Alcalá con Ángela Molina",
    "Paz Vega graba en Alcalá de Guadaíra «Ana no», su segunda película como directora, basada en una novela de Gómez Arcos y protagonizada por Ángela Molina.",
    [
     "Paz Vega",
     "Ángela Molina",
     "Agustín Gómez Arcos",
     "rodaje de cine",
     "Ana no",
     "Ribera del Guadaíra"
    ]
   ],
   "actualizada": "2026-11-18T22:28"
  },
  {
   "id": "rocio-cartel-evento-ecuestre-2027-sicab",
   "sec": "hermandades",
   "kicker": "Rocío",
   "iso": "2026-11-18",
   "hora": "07:24",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8441/alcala-presenta-en-sicab-el-ii-concurso-de-doma-vaquera-y-enganches-ciudad-de-alcala",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Hermandad del Rocío presenta en SICAB el II Concurso de Doma Vaquera y Enganches, del 5 al 7 de marzo de 2027",
   "sub": "La cita, con pruebas puntuables para la Copa de Andalucía, se celebrará en el recinto ferial con la colaboración del Ayuntamiento; el cartel es obra de Bruno Halcón",
   "caption": "Cartel de la primera edición del concurso de doma vaquera de la Hermandad del Rocío, celebrada en marzo de 2026, en una imagen de archivo.",
   "foto": "rocio-cartel-evento-ecuestre-2027-sicab-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Rocío de Alcalá de Guadaíra",
   "claves": [
    "La Hermandad del Rocío de Alcalá de Guadaíra presentó el 18 de noviembre en SICAB el cartel del II Concurso de Doma Vaquera y Enganches Ciudad de Alcalá.",
    "El concurso se celebrará del 5 al 7 de marzo de 2027 en el recinto ferial, con pruebas de doma vaquera y de enganches puntuables para la Copa de Andalucía.",
    "La hermandad celebra el sábado 21 de noviembre su XLIII aniversario con misa y cena."
   ],
   "body": [
    "La Hermandad de Nuestra Señora del Rocío de Alcalá de Guadaíra presentó el miércoles 18 de noviembre en el Salón Internacional del Caballo (SICAB), en Sevilla, el cartel del II Concurso de Doma Vaquera y Enganches Ciudad de Alcalá, que se celebrará del 5 al 7 de marzo de 2027 en el recinto ferial, según Alcalá+Deporte.",
    "La hermandad organiza el evento con la colaboración municipal. El programa incluye el Concurso de Doma Vaquera y el Concurso de Enganches de Obstáculos, los dos puntuables para la Copa de Andalucía, además de exhibiciones ecuestres, actividades formativas, espectáculos de volteo, desfiles de moda y actuaciones musicales.",
    "En la presentación estuvieron la alcaldesa, Ana Isabel Jiménez; el delegado de Deportes, Pedro Gracia (PSOE); la delegada de Fiestas Mayores, Rocío Bastida (PSOE), y el hermano mayor de la Hermandad del Rocío, Salvador Ramos. El cartel anunciador es obra de Bruno Halcón, según publicó la alcaldesa en su perfil de Facebook.",
    "Jiménez destacó, según el Ayuntamiento, la visibilidad y el impacto económico de una cita que, a su juicio, atrae miles de visitas a la ciudad, y agradeció a la hermandad la organización de un evento que aspira a superar la participación de su primera edición, celebrada en marzo de 2026.",
    "SICAB, el Salón Internacional del Caballo, es la feria dedicada al caballo de pura raza española que se celebra cada otoño en Sevilla y reúne a criadores, jinetes y aficionados.",
    "## Semana de aniversario",
    "La presentación llega en una semana señalada para la hermandad, con sede en la parroquia de San Agustín. El sábado 21 de noviembre celebra su XLIII aniversario con una misa a las 19.30 y una cena posterior en el Salón de Celebraciones Zambra, a las 21.00, en la que proclamará al pregonero de 2027, como <a href='#rocio-xliii-aniversario-pregonero-2027-nuevas-reglas'>ya anunció</a>.",
    "La corporación ha aprobado además en cabildo general extraordinario, celebrado el sábado 7 de noviembre, el proyecto de sus nuevas reglas, que adaptan su organización a las normas diocesanas de la Archidiócesis de Sevilla y que la hermandad elevará al Arzobispado para su aprobación definitiva.",
    "<span class='howto'><b>II Concurso de Doma Vaquera y Enganches Ciudad de Alcalá.</b> Del 5 al 7 de marzo de 2027, recinto ferial de Alcalá de Guadaíra. Organiza: Hermandad del Rocío, con la colaboración del Ayuntamiento. <b>Aniversario:</b> sábado 21 de noviembre, misa a las 19.30 en San Agustín y cena a las 21.00 en el Salón Zambra.</span>"
   ],
   "seo": [
    "rocio-alcala-concurso-doma-vaquera-enganches-2027",
    "Doma Vaquera y Enganches en Alcalá: del 5 al 7 de marzo",
    "La Hermandad del Rocío presenta en SICAB el II Concurso de Doma Vaquera y Enganches de Alcalá de Guadaíra, en el recinto ferial del 5 al 7 de marzo.",
    [
     "Hermandad del Rocío de Alcalá",
     "SICAB",
     "doma vaquera",
     "Copa de Andalucía",
     "recinto ferial",
     "Bruno Halcón"
    ]
   ],
   "encuadre": "contain",
   "actualizada": "2026-11-18T22:28"
  },
  {
   "id": "mes-del-pan-2026-record-3000-participantes",
   "sec": "economia",
   "kicker": "Turismo",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1606842541488086",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Mes del Pan supera por primera vez los 3.000 participantes, un 59,3 % más que en 2025",
   "sub": "El Ayuntamiento atribuye a la programación de los sábados de octubre un aumento del consumo en la hostelería y el comercio, sin detallar todavía la cifra exacta",
   "caption": "Presentación del Mes del Pan 2026, en una imagen de archivo.",
   "foto": "mes-del-pan-2026-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Mes del Pan de Alcalá de Guadaíra ha superado en 2026 los 3.000 participantes por primera vez, según el Ayuntamiento.",
    "La participación ha crecido un 59,3 % respecto a la edición de 2025.",
    "Las actividades se concentraron en los sábados de octubre.",
    "El Ayuntamiento no ha detallado la cifra exacta de asistentes ni el coste del programa."
   ],
   "body": [
    "El Mes del Pan de Alcalá de Guadaíra ha superado este año por primera vez los 3.000 participantes, un 59,3 % más que en la edición de 2025. Lo ha comunicado el Ayuntamiento en su perfil de Facebook este martes 17 de noviembre, tras cerrar el balance de la programación celebrada durante los sábados de octubre.",
    "Según la publicación municipal, el programa «llenó Alcalá» todos los sábados del mes. El Ayuntamiento sostiene que la cita ha generado «dinamismo económico» y consumo en la hostelería y el comercio de la ciudad, y que contribuye a situar el turismo como «un sector productivo en crecimiento» para el municipio.",
    "## Un récord sin cifra exacta",
    "El anuncio habla de «más de 3.000 participantes», pero el Ayuntamiento no ha dado en su comunicación la cifra exacta, ni cuántas actividades se programaron, cuántas plazas había disponibles o cuál ha sido el coste de la campaña. Tampoco ha aportado datos que permitan medir el gasto en los negocios locales, más allá de la valoración del propio gobierno municipal.",
    "## El pan como reclamo",
    "El Mes del Pan gira en torno a la tradición panadera de Alcalá, que durante siglos abasteció de pan a Sevilla, un papel que la Universidad Pablo de Olavide ha estudiado en sus trabajos sobre los panaderos alcalareños del siglo XVII.",
    "El oficio sigue teniendo peso en el empleo local: a finales de octubre se conocieron <a href='#convenio-panaderia-tablas-salariales'>las nuevas tablas salariales del convenio de panadería de Sevilla</a> para 2026, que fijan lo que cobran los trabajadores del sector en la provincia.",
    "<span class='howto'><b>Mes del Pan 2026.</b> Celebrado los sábados de octubre en Alcalá de Guadaíra. Participantes: más de 3.000, según el Ayuntamiento (+59,3 % sobre 2025). Información de próximas ediciones: web y redes del Ayuntamiento.</span>"
   ],
   "seo": [
    "mes-del-pan-alcala-record-participantes-2026",
    "Mes del Pan de Alcalá: récord de más de 3.000 participantes",
    "El Mes del Pan de Alcalá de Guadaíra supera por primera vez los 3.000 participantes en 2026, un 59,3 % más que el año pasado, según el Ayuntamiento.",
    [
     "Mes del Pan",
     "Ayuntamiento de Alcalá de Guadaíra",
     "turismo",
     "pan de Alcalá",
     "hostelería",
     "comercio local"
    ]
   ]
  },
  {
   "id": "atropello-mortal-autobus-cabeza-hermosa",
   "sec": "sucesos",
   "kicker": "Sucesos",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=r6oOtDHZnHU&t=1s",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Muere un peatón atropellado por un autobús en la urbanización Cabeza Hermosa",
   "sub": "La víctima quedó atrapada en una zanja de difícil acceso y los bomberos tuvieron que intervenir para llegar hasta ella; la investigación deberá aclarar cómo ocurrió",
   "caption": "Imagen de archivo de El Panadero.",
   "foto": "generica-sucesos.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "Un peatón murió en la tarde del lunes 16 de noviembre tras ser atropellado por un autobús en la urbanización Cabeza Hermosa, en Alcalá de Guadaíra.",
    "El accidente ocurrió poco después de las 19.00 en la calle Cuchipanda.",
    "La víctima quedó atrapada en una zanja de difícil acceso y los bomberos tuvieron que intervenir para llegar hasta ella.",
    "No han trascendido la identidad de la víctima ni las circunstancias del atropello."
   ],
   "body": [
    "Un peatón murió en la tarde del lunes 16 de noviembre tras ser atropellado por un autobús en la urbanización Cabeza Hermosa, en Alcalá de Guadaíra. El accidente se produjo poco después de las 19.00 en la calle Cuchipanda, y la víctima quedó atrapada en una zanja de difícil acceso, según la información facilitada por los servicios de emergencias.",
    "Ante la gravedad del aviso, la sala coordinadora de emergencias activó un dispositivo en el que participaron agentes de Tráfico de la Guardia Civil, la Policía Local, el Centro de Emergencias Sanitarias 061 y los bomberos. La intervención de estos últimos fue necesaria para acceder a la zona en la que se encontraba la persona atropellada.",
    "Fuentes de los bomberos confirmaron que la víctima había fallecido en el mismo lugar del accidente.",
    "## Sin datos sobre las causas",
    "Por el momento no han trascendido la identidad ni la edad de la víctima, ni tampoco detalles sobre cómo se produjo el atropello ni sobre el autobús implicado. La investigación deberá esclarecer las causas del accidente.",
    "El Panadero ampliará esta información cuando las autoridades faciliten nuevos datos sobre las circunstancias del accidente."
   ],
   "seo": [
    "atropello-mortal-autobus-cabeza-hermosa-alcala",
    "Muere un peatón atropellado por un autobús en Alcalá",
    "Un peatón muere atropellado por un autobús en la urbanización Cabeza Hermosa de Alcalá de Guadaíra; quedó atrapado en una zanja de difícil acceso.",
    [
     "Cabeza Hermosa",
     "atropello",
     "Guardia Civil de Tráfico",
     "Policía Local de Alcalá",
     "Emergencias 112",
     "bomberos"
    ]
   ]
  },
  {
   "id": "jornada-infancia-xii-paz-y-bien-20-noviembre",
   "sec": "alcala",
   "kicker": "Infancia",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=r6oOtDHZnHU",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La XII Jornada por la Infancia reúne el viernes 20 a cientos de escolares en el Polideportivo Distrito Sur",
   "sub": "La Asociación Paz y Bien organiza la cita con el Ayuntamiento bajo el lema «Ninguna historia crece sola, necesita una red de apoyos»",
   "caption": "Presentación del cartel de la XII Jornada por la Infancia de la Asociación Paz y Bien.",
   "foto": "jornada-infancia-xii-paz-y-bien-20-noviembre-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Asociación Paz y Bien celebra el viernes 20 de noviembre la XII Jornada por la Infancia en el Polideportivo Distrito Sur, de 9.30 a 13.30.",
    "El lema de este año es «Ninguna historia crece sola, necesita una red de apoyos».",
    "El Ayuntamiento habla de más de 350 menores participantes; la organización cifró en más de 250 los escolares de cinco centros educativos.",
    "La jornada coincide con el Día Mundial de los Derechos de la Infancia."
   ],
   "body": [
    "La Asociación Paz y Bien celebrará el viernes 20 de noviembre la XII Jornada por la Infancia de Alcalá de Guadaíra, una cita con talleres, actividades culturales y deporte en el Polideportivo Distrito Sur, de 9.30 a 13.30. La jornada coincide con el Día Mundial de los Derechos de la Infancia y este año lleva por lema «Ninguna historia crece sola, necesita una red de apoyos».",
    "La organizan Paz y Bien y el Ayuntamiento con la colaboración de la Fundación Azvi. Se presentó este martes 17 de noviembre en el Complejo Social San Buenaventura, la instalación de la asociación en Alcalá, con el presidente de Paz y Bien, Israel Montes; la delegada municipal de Servicios Sociales, Rocío Bastida, y la directora de la Fundación Azvi, Pilar Kraan.",
    "## Cuántos niños participan",
    "Las cifras de participación no coinciden. El Ayuntamiento ha informado en sus redes de que tomarán parte «más de 350 menores». Desde la organización, en cambio, se habló en la presentación de «más de 250 escolares» de cinco centros educativos del municipio, cuyo compromiso calificaron de «fundamental» para la jornada.",
    "Los participantes irán pasando por distintas actividades en las que se trabajarán aspectos que la entidad considera claves en esa red de apoyo: la protección, la identidad, el crecimiento, la familia, la seguridad y los sueños propios. Paz y Bien quiere poner el acento en el acompañamiento del entorno para que los niños y adolescentes crezcan «en condiciones de igualdad».",
    "## Una cita con doce ediciones",
    "La jornada forma parte de las acciones de sensibilización y defensa de los derechos de la infancia que impulsa Paz y Bien, entidad que trabaja con niños y adolescentes en situación de protección. En la presentación, sus responsables recordaron la frase del pedagogo José Antonio Marina según la cual «para educar a un niño hace falta la tribu entera».",
    "La asociación es también una de las entidades que participan en <a href='#mesa-capacidades-diez-anos-gala'>la Mesa de las Capacidades</a>, que este mes ha cumplido diez años de trabajo por la inclusión en Alcalá.",
    "<span class='howto'><b>XII Jornada por la Infancia.</b> Viernes 20 de noviembre, de 9.30 a 13.30. Polideportivo Distrito Sur. Organizan: Asociación Paz y Bien y Ayuntamiento de Alcalá de Guadaíra, con la Fundación Azvi. Dirigida a escolares de centros educativos del municipio.</span>"
   ],
   "seo": [
    "jornada-infancia-paz-y-bien-alcala-2026",
    "XII Jornada por la Infancia en Alcalá el viernes 20",
    "Paz y Bien y el Ayuntamiento celebran el 20 de noviembre la XII Jornada por la Infancia en el Polideportivo Distrito Sur de Alcalá con escolares.",
    [
     "Asociación Paz y Bien",
     "Jornada por la Infancia",
     "Polideportivo Distrito Sur",
     "Fundación Azvi",
     "derechos de la infancia",
     "Rocío Bastida"
    ]
   ]
  },
  {
   "id": "arbolado-colegios-115-arboles-16-centros",
   "sec": "alcala",
   "kicker": "Medio ambiente",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=vfa9QI5-D1o",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Ayuntamiento plantará 115 árboles en 16 colegios públicos para dar sombra a los patios",
   "sub": "El proyecto, de 39.800 euros como máximo y en licitación, prevé almeces, moreras, jacarandas y algarrobos, y llega en plena polémica por las talas en el entorno del Castillo",
   "caption": "Presentación del proyecto de plantación de árboles en los centros escolares.",
   "foto": "arbolado-colegios-presentacion-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Delegación de Medio Ambiente de Alcalá de Guadaíra plantará 115 árboles en 16 colegios públicos de la ciudad.",
    "El proyecto tiene un presupuesto máximo de 39.800 euros, está en licitación y se ejecutará en tres meses, con la previsión de terminar en marzo.",
    "El colegio Antonio Machado recibirá 20 árboles, y Antonio Rodríguez Almodóvar, Oromana y Cervantes, 10 cada uno.",
    "Vox denunció esta semana la tala de árboles en el entorno del Castillo y pide reponerlos con ejemplares de mayor porte."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra plantará 115 árboles en 16 colegios públicos de la ciudad para dar sombra a sus patios, con un presupuesto máximo de 39.800 euros. El proyecto de la Delegación de Medio Ambiente, anunciado el martes 17 de noviembre, está en licitación y tendrá un plazo de ejecución de tres meses una vez formalizado el contrato.",
    "El gobierno municipal explicó a El Panadero que la previsión es que todos los colegios tengan los árboles plantados en primavera, hacia marzo. La plantación repone ejemplares perdidos, algunos por las danas de los últimos inviernos y otros que habían cumplido su ciclo, ocupa alcorques vacíos y crea nuevas zonas de sombra, sobre todo en los espacios de Infantil. Según el Ayuntamiento, el proyecto responde a las necesidades que plantearon los propios directores de los centros.",
    "## Colegios y especies",
    "El colegio Antonio Machado recibirá 20 árboles, y los centros Antonio Rodríguez Almodóvar, Oromana y Cervantes, 10 cada uno; el resto se repartirá entre otros 12 colegios. Se plantarán 63 almeces, 43 moreras sin fruto, seis jacarandas y tres algarrobos. Los trabajos incluyen la preparación del terreno, la plantación, los tutores y el primer riego. La actuación se suma al plan Alcalá + Verde, que prevé plantar más de 5.000 árboles entre 2024 y 2027 y que, según el Ayuntamiento, lleva ya 4.300.",
    "## En plena polémica por las talas",
    "El anuncio llega en medio de la controversia por la retirada de árboles en el entorno del Castillo y del santuario de la Virgen del Águila. Vox ha denunciado <a href='#vox-tala-arboles-castillo-ayuntamiento-88-ejemplares'>la tala de ejemplares en esa zona</a> y su portavoz municipal, Pedro Navarro, responsabiliza a la alcaldesa, Ana Isabel Jiménez, y a la delegada de Medio Ambiente, Luisa Campos.",
    "En declaraciones a El Panadero, Navarro sostuvo que en el lugar «faltan 15 árboles sanos» y que, según le han trasladado los vecinos, en todo el entorno se han cortado 35. También criticó el estado de los naranjos de la plaza del Cabildo y de las palmeras de la plazuela y de la plaza del Duque durante las obras. Vox reclama que el Ayuntamiento haga público el inventario técnico que justifica las talas y que reponga los árboles con ejemplares de mayor porte, porque considera que los jóvenes no compensan la pérdida.",
    "Según los datos que facilitó el Ayuntamiento cuando Vox presentó su denuncia, en esa zona se han retirado 18 árboles en distintos momentos, la mayoría por roturas o caídas causadas por fenómenos meteorológicos; el inventario municipal cuenta hoy 88 árboles en el entorno, 40 de ellos plantados en los últimos años, y el gobierno local prevé un proyecto de revegetación cuando terminen los trabajos pendientes.",
    "<span class='howto'><b>Plantación en colegios.</b> 115 árboles en 16 colegios públicos de Alcalá de Guadaíra. Presupuesto máximo: 39.800 euros. Estado: en licitación. Plazo: tres meses desde la formalización; previsión, marzo de 2027. Especies: almez, morera sin fruto, jacaranda y algarrobo.</span>"
   ],
   "seo": [
    "arboles-colegios-publicos-alcala-115",
    "Alcalá plantará 115 árboles en 16 colegios públicos",
    "El Ayuntamiento de Alcalá de Guadaíra plantará 115 árboles en 16 colegios públicos para dar sombra a los patios, en plena polémica por las talas.",
    [
     "arbolado",
     "colegios públicos",
     "Delegación de Medio Ambiente",
     "Luisa Campos",
     "Vox Alcalá",
     "patios escolares"
    ]
   ],
   "actualizada": "2026-11-18T22:28"
  },
  {
   "id": "paseo-matematico-al-andalus-dia-bandera-alba-molina",
   "sec": "cultura",
   "kicker": "Día de la Bandera",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=r6oOtDHZnHU",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Casa de la Cultura abre «Paseo matemático al-Ándalus» y Alba Molina cerrará el Día de la Bandera",
   "sub": "La exposición de la Fundación Descubre podrá verse hasta el 8 de diciembre; el concierto del 4 de diciembre en el Auditorio tiene entradas a 5 euros",
   "caption": "Paneles de la exposición sobre las matemáticas del legado andalusí.",
   "foto": "paseo-matematico-al-andalus-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Casa de la Cultura de Alcalá de Guadaíra acoge desde el lunes 16 de noviembre hasta el 8 de diciembre la exposición «Paseo matemático al-Ándalus».",
    "La muestra, de la Fundación Descubre y la Junta de Andalucía, tiene 24 paneles sobre la ciencia en la arquitectura andalusí.",
    "Alba Molina dará un concierto el viernes 4 de diciembre en el Auditorio Riberas del Guadaíra, con entradas a 5 euros.",
    "El programa incluye el documental «Ellas en la ciudad» el 3 de diciembre y la ruta de Blas Infante el 5 de diciembre."
   ],
   "body": [
    "La Casa de la Cultura de Alcalá de Guadaíra acoge desde el lunes 16 de noviembre la exposición itinerante «Paseo matemático al-Ándalus», un proyecto de la Fundación Descubre y la Junta de Andalucía que explica la arquitectura monumental andalusí desde la ciencia. Es el primer acto de la programación municipal por el Día de la Bandera de Andalucía, que culminará el 4 de diciembre con un concierto de Alba Molina.",
    "La muestra puede visitarse hasta el 8 de diciembre en el salón Talavera y en el patio de la Casa de la Cultura. Está formada por 24 paneles que recorren edificios como el Alcázar de Sevilla, la Mezquita de Córdoba y la Alhambra de Granada para explicar conceptos como la simetría, la proporción, la jerarquía y el orden.",
    "La exposición analiza también las influencias entre el arte andalusí y el mudéjar cristiano, y cómo se transmitieron formas, técnicas constructivas y motivos decorativos a lo largo del tiempo. La Fundación Descubre es una entidad sin ánimo de lucro promovida por la Junta de Andalucía que trabaja desde 2010 para acercar la ciencia a la comunidad educativa y a la ciudadanía.",
    "## Documental, concierto y ruta",
    "El programa municipal sigue el jueves 3 de diciembre, a las 18.00, con la proyección en la Casa de la Cultura del documental «Ellas en la ciudad», dirigido por la arquitecta y urbanista sevillana Reyes Gallego. La película cuenta la historia de mujeres que lucharon desde los barrios populares de Sevilla por servicios como colegios, institutos, centros de salud o parques.",
    "El viernes 4 de diciembre, Día de la Bandera, el Auditorio Riberas del Guadaíra acogerá a partir de las 20.30 la entrega de los reconocimientos de la jornada y, a continuación, el concierto de Alba Molina, acompañada por el músico alcalareño Álvaro Gandul. Las entradas cuestan 5 euros y están a la venta en el portal de entradas del Ayuntamiento.",
    "La programación terminará el sábado 5 de diciembre, a las 11.00, con la ruta de Blas Infante por las calles de Alcalá. La ciudad se ha sumado este año a esta ruta turística, que reúne a una decena de municipios vinculados con la figura de Blas Infante o con la construcción política y cultural de la autonomía andaluza. Las reservas se hacen en el portal municipal.",
    "La fecha recuerda las manifestaciones del 4 de diciembre de 1977, cuando cientos de miles de andaluces salieron a la calle para reclamar la autonomía.",
    "<span class='howto'><b>Programa del Día de la Bandera en Alcalá.</b> Exposición «Paseo matemático al-Ándalus»: Casa de la Cultura, del 16 de noviembre al 8 de diciembre. Documental «Ellas en la ciudad»: jueves 3 de diciembre, 18.00, Casa de la Cultura. Reconocimientos y concierto de Alba Molina con Álvaro Gandul: viernes 4 de diciembre, 20.30, Auditorio Riberas del Guadaíra; 5 euros. Ruta de Blas Infante: sábado 5 de diciembre, 11.00; reserva en el portal municipal.</span>"
   ],
   "seo": [
    "paseo-matematico-al-andalus-alba-molina-alcala",
    "Alcalá: Paseo matemático al-Ándalus y Alba Molina",
    "La Casa de la Cultura de Alcalá acoge hasta el 8 de diciembre «Paseo matemático al-Ándalus» y Alba Molina actuará el 4 por el Día de la Bandera.",
    [
     "Día de la Bandera de Andalucía",
     "Fundación Descubre",
     "Casa de la Cultura de Alcalá",
     "Alba Molina",
     "Álvaro Gandul",
     "Blas Infante",
     "Auditorio Riberas del Guadaíra"
    ]
   ]
  },
  {
   "id": "jornadas-diabetes-federacion-al-guadaira-19-noviembre",
   "sec": "alcala",
   "kicker": "Salud",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=r6oOtDHZnHU",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Las jornadas sobre diabetes en los barrios terminan el jueves 19 en el Centro Cívico Silos-Zacatín",
   "sub": "El Centro de Salud Don Paulino García Donas y la Federación de Asociaciones de Vecinos Al-Guadaíra acercan a los vecinos consejos de prevención y autocuidado",
   "caption": "Profesionales sanitarias atienden a MiGuadaíraTV en la presentación de las jornadas sobre diabetes en los barrios.",
   "foto": "jornadas-diabetes-federacion-al-guadaira-19-novi-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Las jornadas sobre diabetes que se celebran en noviembre en Alcalá de Guadaíra terminan el jueves 19 a las 9.30 en el Centro Cívico Silos-Zacatín.",
    "Las organizan el Área de Gestión Sanitaria Sur de Sevilla y el Centro de Salud Don Paulino García Donas, con la Federación Local de Asociaciones de Vecinos Al-Guadaíra y el Ayuntamiento.",
    "Ya se han celebrado sesiones los días 9, 12 y 16 de noviembre.",
    "Están abiertas a personas con diabetes, a sus familiares y a cualquier vecino interesado."
   ],
   "body": [
    "Las jornadas sobre diabetes que se celebran este mes en los barrios de Alcalá de Guadaíra terminan el jueves 19 de noviembre con una última sesión a las 9.30 en el Centro Cívico Silos-Zacatín, sede de la Federación Local de Asociaciones de Vecinos Al-Guadaíra. El objetivo es acercar a los vecinos información sobre la prevención, el diagnóstico precoz y el control de la enfermedad.",
    "La iniciativa la organizan el Área de Gestión Sanitaria Sur de Sevilla y el Centro de Salud Don Paulino García Donas, con la colaboración de la Federación Al-Guadaíra y del Ayuntamiento. Antes de la sesión de cierre se celebraron encuentros los días 9, 12 y 16 de noviembre, en torno al Día Mundial de la Diabetes, que fue el sábado 14.",
    "## Autocuidado y hábitos saludables",
    "En las sesiones, los profesionales sanitarios resuelven dudas y dan pautas para mejorar la alimentación, incorporar hábitos saludables y entender la importancia del control de la enfermedad. La diabetes es una enfermedad crónica que afecta a la regulación de la glucosa en la sangre y exige un seguimiento continuado para evitar complicaciones.",
    "Uno de los sanitarios participantes explicó a El Panadero que la enfermedad afecta a «uno de cada ocho pacientes» y que en la consulta conviven pacientes «volcados en su autocuidado» con otros que lo están menos. Por eso, señaló, las sesiones intentan acercar esos conocimientos también a quienes acaban de recibir el diagnóstico, para que aprendan a cuidarse, que considera «una de las partes más importantes» del tratamiento. La atención primaria, con sus equipos de médicos y enfermeros, es la que hace el seguimiento habitual de estos pacientes.",
    "## Una asociación por reactivar",
    "Entre los asistentes también hay quien plantea que la experiencia no se quede aquí. Uno de los participantes recordó a El Panadero que Alcalá tiene una asociación de personas con diabetes que lleva tiempo sin actividad y expresó su intención de reactivarla, con el apoyo de los profesionales sanitarios, y de que haya nuevas sesiones en el futuro.",
    "Las jornadas están abiertas tanto a personas con diabetes como a sus familiares y a cualquier vecino que quiera conocer mejor la enfermedad y sus factores de riesgo.",
    "<span class='howto'><b>Última jornada sobre diabetes.</b> Jueves 19 de noviembre, 9.30. Centro Cívico Silos-Zacatín (sede de la Federación de Asociaciones de Vecinos Al-Guadaíra). Abierta a pacientes, familiares y vecinos.</span>"
   ],
   "seo": [
    "jornadas-diabetes-alcala-silos-zacatin",
    "Jornadas sobre diabetes en Alcalá: cierre el jueves 19",
    "La última jornada sobre diabetes para vecinos de Alcalá de Guadaíra será el jueves 19 de noviembre a las 9.30 en el Centro Cívico Silos-Zacatín.",
    [
     "diabetes",
     "Centro de Salud Don Paulino García Donas",
     "Federación Al-Guadaíra",
     "Área de Gestión Sanitaria Sur de Sevilla",
     "Centro Cívico Silos-Zacatín",
     "salud"
    ]
   ]
  },
  {
   "id": "amargura-exposicion-cristo-desamparados-18-noviembre",
   "sec": "hermandades",
   "kicker": "Patrimonio",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "Hermandad de la Amargura (Facebook)",
   "fuente_url": "https://www.facebook.com/1491046389785408/posts/1492289582994422",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El lienzo restaurado del Cristo de los Desamparados se expone en el Museo de la Ciudad hasta el domingo 22",
   "sub": "Las pinturas restauradas del Cristo de los Desamparados y del Santo Cristo de Burgos se pueden ver en el Museo de la Ciudad hasta el domingo 22 de noviembre",
   "caption": "Una sala de exposiciones del Museo de Alcalá de Guadaíra, donde estaba prevista la presentación aplazada, en una imagen de archivo.",
   "foto": "museo-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El acto, aplazado a finales de octubre por el luto oficial tras el accidente de Urda, forma parte del Ciclo de Conservación Preventiva del Consejo de Hermandades.",
    "La pintura pertenece al patrimonio de la Hermandad de la Amargura.",
    "El Consejo de Hermandades precisó que la exposición incluye también el «Santo Cristo de Burgos» y que la conferencia, a las 20.00, sería en el Museo de la Ciudad.",
    "Las dos pinturas restauradas se exponen en la sala de arte religioso del Museo de la Ciudad hasta el domingo 22 de noviembre."
   ],
   "body": [
    "La Hermandad de la Amargura de Alcalá de Guadaíra anunció que el miércoles 18 de noviembre, a las 19.30, se inauguraría la exposición y se celebraría la conferencia dedicada, entre otras obras, al lienzo restaurado del Santísimo Cristo de los Desamparados, una pintura de su patrimonio. Lo ha comunicado la hermandad en su perfil de Facebook este martes 17.",
    "La presentación se celebró finalmente el miércoles 18 en el Museo de la Ciudad, y las dos pinturas pueden visitarse en su sala de arte religioso hasta el domingo 22 de noviembre. El conservador Alejandro Redondo explicó a El Panadero que la tabla del Cristo de los Desamparados, procedente del antiguo cementerio de San Rafael y colocada después en la fachada de la parroquia de San Sebastián, exigió un trabajo «bastante meticuloso» sobre todo en el soporte, muy alterado. La hermandad la recuperó y la guarda desde hace unos años. Del Santo Cristo de Burgos, cubierto casi por completo de repintes y capas de barniz, destacó que la limpieza ha devuelto detalles como la llaga del pecho y la definición del rostro.",
    "El acto forma parte del Ciclo de Conservación Preventiva del Patrimonio que organiza el Consejo General de Hermandades y Cofradías de Alcalá, y llega después de su aplazamiento a finales de octubre.",
    "El Consejo General de Hermandades y Cofradías completó el miércoles 18 en su perfil de Facebook los detalles del acto: a las 19.30 se inauguraba la exposición de la restauración de las pinturas «Santo Cristo de Burgos» y «Cristo de los Desamparados», y a las 20.00, en el Museo de la Ciudad, el vicepresidente del Consejo y conservador de obras de arte Alejandro Redondo y su equipo ofrecían una conferencia sobre el proceso de intervención.",
    "## Aplazado por el luto",
    "La presentación estaba prevista para el jueves 29 de octubre en el Museo de la Ciudad, pero el Consejo la suspendió por los tres días de <a href='#consejo-suspende-exposicion-pinturas-restauradas'>luto oficial decretado tras el accidente ferroviario de Urda</a> (Toledo). Entonces, el acto incluía la exposición de dos pinturas restauradas, el «Cristo de los Desamparados» de la Amargura y el «Santo Cristo de Burgos» de la parroquia de San Sebastián, y una conferencia sobre su intervención.",
    "Esa conferencia iba a correr a cargo del conservador de obras de arte Alejandro Redondo, vicepresidente del Consejo y autor de la restauración, y de su equipo: Victoria Fernández Espejo, José Ángel del Valle Serrano y el historiador del arte Enrique Ruiz Portillo.",
    "## Un ciclo sobre cómo cuidar el patrimonio",
    "El ciclo, que organizan el Consejo de Hermandades y el Ayuntamiento, busca que las cofradías aprendan a conservar sus bienes antes de tener que restaurarlos. En una de sus sesiones de octubre, el restaurador <a href='#pedro-manzano-conservacion-preventiva'>Pedro Manzano pidió a las hermandades de Alcalá cuidar cómo manipulan su patrimonio</a>. Redondo, por su parte, defendió entonces que cada hermandad tenga un responsable de conservación preventiva.",
    "La Amargura vive además un año de proyectos patrimoniales: prepara para la próxima Cuaresma la primera fase de su nuevo retablo.",
    "<span class='howto'><b>Presentación de las pinturas restauradas del Cristo de los Desamparados y del Santo Cristo de Burgos.</b> Miércoles 18 de noviembre. Inauguración de la exposición, 19.30; conferencia de Alejandro Redondo y su equipo, 20.00, en el Museo de la Ciudad de Alcalá de Guadaíra. Ciclo de Conservación Preventiva del Consejo General de Hermandades y Cofradías.</span>"
   ],
   "seo": [
    "cristo-desamparados-lienzo-restaurado-amargura-alcala",
    "Lienzo restaurado del Cristo de los Desamparados, el 18",
    "La Hermandad de la Amargura presenta el miércoles 18 en Alcalá el lienzo restaurado del Cristo de los Desamparados, aplazado por el luto de Urda.",
    [
     "Hermandad de la Amargura",
     "Cristo de los Desamparados",
     "Consejo de Hermandades de Alcalá",
     "conservación preventiva",
     "Alejandro Redondo",
     "restauración"
    ]
   ],
   "actualizada": "2026-11-19T22:34"
  },
  {
   "id": "cautivo-triduo-cristo-rey-19-22-noviembre",
   "sec": "hermandades",
   "kicker": "Cultos",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "Hermandad Servita de Jesús Cautivo (Facebook)",
   "fuente_url": "https://www.facebook.com/1160162549992960/posts/1161589559850259",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Cautivo presidirá el altar mayor de San Sebastián en el triduo de Cristo Rey, del 19 al 22 de noviembre",
   "sub": "La Hermandad Servita celebra sus primeros cultos con la nueva junta de gobierno de José David Cobos; la función del domingo será a las 11.00",
   "caption": "Cartel de los cultos de Cristo Rey de la Hermandad Servita, con Nuestro Padre Jesús Cautivo y Rescatado.",
   "foto": "cautivo-triduo-cristo-rey-19-22-noviembre-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad Servita de Jesús Cautivo",
   "claves": [
    "La Hermandad Servita de Jesús Cautivo celebra los días 19, 20 y 21 de noviembre, a las 20.00, un triduo por la festividad de Cristo Rey del Universo.",
    "Nuestro Padre Jesús Cautivo y Rescatado presidirá el altar mayor de la parroquia de San Sebastián.",
    "La función solemne será el domingo 22 de noviembre a las 11.00, con el Coro de Nuestra Señora del Dulce Nombre de María.",
    "Son los primeros cultos tras la toma de posesión, el 14 de noviembre, de la junta de gobierno de José David Cobos."
   ],
   "body": [
    "La Hermandad Servita de Jesús Cautivo de Alcalá de Guadaíra celebrará los días 19, 20 y 21 de noviembre, a las 20.00, un solemne triduo con motivo de la festividad de Cristo Rey del Universo, en el que Nuestro Padre Jesús Cautivo y Rescatado presidirá el altar mayor de la parroquia de San Sebastián. Lo ha anunciado la hermandad en su perfil de Facebook.",
    "Los cultos terminarán el domingo 22 de noviembre, a las 11.00, con la función solemne en honor a Cristo Rey, presidida por la misma imagen. La música correrá a cargo del Coro de Nuestra Señora del Dulce Nombre de María. La hermandad invita a sus hermanos y a los fieles a participar.",
    "## Primeros cultos de la nueva junta",
    "Será el primer gran culto de la hermandad tras el relevo en su gobierno. El sábado 14 de noviembre tomó posesión, tras la misa de las 20.00 en su capilla, la nueva junta de gobierno encabezada por el hermano mayor José David Cobos Martínez, en un acto al que asistió el párroco y director espiritual, Álvaro Montilla González.",
    "Cobos ganó el cabildo de elecciones del 25 de octubre frente a la candidatura de Juan Carlos Navarro, lo que supone una renovación completa de la junta, como contó este periódico al informar de <a href='#cautivo-soberano-poder-toma-posesion-juntas'>las tomas de posesión del Cautivo y del Soberano Poder</a>. La hermandad ha agradecido la presencia en el acto del vicepresidente del Consejo General de Hermandades y Cofradías, Alejandro Redondo.",
    "La Hermandad Servita da culto a Nuestro Padre Jesús Cautivo y Rescatado, María Santísima de los Dolores y Nuestra Señora de la Esperanza, y hace estación de penitencia el Miércoles Santo, que en 2027 será el 24 de marzo.",
    "<span class='howto'><b>Cultos de Cristo Rey del Universo.</b> Triduo: 19, 20 y 21 de noviembre, 20.00. Función solemne: domingo 22 de noviembre, 11.00. Parroquia de San Sebastián, Alcalá de Guadaíra. Música: Coro de Nuestra Señora del Dulce Nombre de María.</span>"
   ],
   "seo": [
    "cautivo-triduo-cristo-rey-san-sebastian-alcala",
    "El Cautivo, en el triduo de Cristo Rey de San Sebastián",
    "La Hermandad Servita de Jesús Cautivo de Alcalá celebra del 19 al 22 de noviembre el triduo y la función de Cristo Rey en la parroquia de San Sebastián.",
    [
     "Hermandad del Cautivo",
     "Jesús Cautivo y Rescatado",
     "parroquia de San Sebastián",
     "Cristo Rey",
     "José David Cobos",
     "cultos"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "tenis-oromana-subcampeonas-andalucia-dobles-sub13",
   "sec": "deportes",
   "kicker": "Tenis",
   "iso": "2026-11-17",
   "hora": "22:27",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8438/irene-torres-y-claudia-gavira-subcampeonas-de-andalucia-de-dobles-sub-13",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Irene Torres y Claudia Gavira, del Club de Tenis Oromana, subcampeonas de Andalucía de dobles sub-13",
   "sub": "Las dos jugadoras alcalareñas llegaron a la final del Campeonato de Andalucía disputado en Córdoba",
   "caption": "Irene Torres y Claudia Gavira, del Club de Tenis Oromana, en el Campeonato de Andalucía.",
   "foto": "tenis-oromana-subcampeonas-andalucia-dobles-sub1-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "Irene Torres Gómez y Claudia Gavira Pecino, del Club de Tenis Oromana, son subcampeonas de Andalucía de dobles en la categoría sub-13.",
    "El campeonato se disputó en Córdoba.",
    "El club alcalareño acoge esta semana el XVI Senior International Champion MT200."
   ],
   "body": [
    "Las tenistas Irene Torres Gómez y Claudia Gavira Pecino, jugadoras del Club de Tenis Oromana de Alcalá de Guadaíra, se han proclamado subcampeonas de Andalucía de dobles en la categoría sub-13, en el campeonato autonómico disputado en Córdoba. Lo ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento, este martes 17 de noviembre.",
    "La pareja alcalareña alcanzó la final del torneo y se hizo con el segundo puesto de Andalucía en su categoría. El portal municipal destaca el resultado como un reconocimiento al trabajo de cantera que desarrolla el club de Oromana.",
    "## Una semana intensa en Oromana",
    "El éxito llega en una semana de mucha actividad para el Club de Tenis Oromana, que acoge del 16 al 21 de noviembre <a href='#tenis-senior-mt200-oromana-noviembre'>el XVI Senior International Champion MT200</a>, una prueba del circuito internacional de veteranos de la Federación Internacional de Tenis (ITF).",
    "El club dedicó además la jornada de menores del XXII Torneo Ciudad de Alcalá a la Cabalgata de Reyes Magos, según ha agradecido la propia Cabalgata en su perfil de Facebook.",
    "El tenis de base suma así otro resultado a una temporada de buenos datos para el deporte femenino alcalareño, después de que <a href='#cp-aguila-femenino-campeon-espana-petanca-2026'>el equipo femenino del C.P. Águila se proclamara campeón de España de petanca</a> y de que <a href='#milu-luchas-olimpicas-subcampeon-liga-iberdrola-2026'>el Club de Luchas Olímpicas Milu cerrara la temporada como subcampeón de la Liga Iberdrola</a>."
   ],
   "seo": [
    "tenis-oromana-subcampeonas-andalucia-dobles-sub13",
    "Tenis Oromana: subcampeonas de Andalucía sub-13 de dobles",
    "Irene Torres y Claudia Gavira, del Club de Tenis Oromana de Alcalá de Guadaíra, logran el subcampeonato de Andalucía de dobles sub-13 en Córdoba.",
    [
     "Club de Tenis Oromana",
     "tenis",
     "Campeonato de Andalucía",
     "sub-13",
     "deporte femenino",
     "Alcalá+Deporte"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "medina-de-haro-mobiliario-equipamiento-adjudicado",
   "sec": "alcala",
   "kicker": "Equipamientos",
   "iso": "2026-11-17",
   "hora": "07:30",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=NopNuWU4Rvw",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Ayuntamiento adjudica el mobiliario del Centro Cívico Medina de Haro, último trámite antes de abrirlo",
   "sub": "El suministro, adjudicado por algo más de 67.000 euros, completa un proyecto de casi dos millones cofinanciado con fondos Next Generation; el gobierno municipal no ha dado todavía fecha de apertura",
   "caption": "Responsables municipales revisan la documentación del equipamiento.",
   "foto": "medina-de-haro-mobiliario-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha adjudicado el mobiliario y el equipamiento del nuevo Centro Cívico Medina de Haro, en el Distrito Este.",
    "La Junta de Gobierno Local trató el equipamiento del centro en su sesión del viernes 13 de noviembre.",
    "El edificio, ya rehabilitado y recepcionado, tendrá uso administrativo y social dentro del plan municipal de descentralización de servicios.",
    "La adjudicación asciende a algo más de 67.000 euros, según el gobierno municipal, que no ha fijado todavía la fecha de apertura."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha adjudicado el mobiliario y el equipamiento del nuevo Centro Cívico Medina de Haro, el equipamiento del Distrito Este que acaba de terminar sus obras de rehabilitación integral. Lo ha anunciado el propio Ayuntamiento en sus perfiles de Facebook e Instagram este lunes 16 de noviembre.",
    "Según la publicación municipal, estas dotaciones permitirán que los vecinos usen el edificio para trámites administrativos y actividades sociales. El Ayuntamiento enmarca el centro en lo que llama su proyecto de descentralización de servicios y convivencia ciudadana, que busca acercar la atención municipal a los barrios.",
    "El asunto pasó por la Junta de Gobierno Local del viernes 13 de noviembre. La alcaldesa, Ana Isabel Jiménez, incluyó en su resumen de esa sesión, publicado en su perfil de Instagram, el «equipamiento del nuevo Distrito Este, Centro Cívico Medina de Haro», junto a otros acuerdos como el servicio de comidas a domicilio y el mantenimiento del Centro Deportivo Distrito Sur.",
    "## El último paso para abrir",
    "El mobiliario era lo único que faltaba. A finales de octubre, el gobierno municipal explicó que el Centro Cívico Medina de Haro ya estaba recepcionado y que solo quedaba equiparlo para abrirlo, como recogió este periódico al repasar <a href='#obras-la-mina-tunel-plazos'>el calendario de las obras municipales</a>.",
    "La portavoz del gobierno municipal precisó al dar cuenta de los acuerdos de la Junta de Gobierno Local que el suministro se ha adjudicado por algo más de 67.000 euros e incluye mobiliario para puestos de trabajo y aulas de formación, además de elementos de ajardinamiento para el interior y el exterior del edificio. Esta compra completa un proyecto global de casi dos millones de euros cofinanciado con fondos europeos Next Generation.",
    "Según explicó, el centro y la nueva Jefatura de la Policía Local abrirán «en breve», con atención a la ciudadanía, registro y espacios para formación y actividades, aunque el Ayuntamiento no ha fijado todavía la fecha de inauguración ni ha detallado las empresas adjudicatarias.",
    "## Un entorno en obras",
    "El centro cívico forma parte de una transformación más amplia de esta zona del Distrito Este. En el mismo entorno se construye la nueva Jefatura de la Policía Local, que el gobierno municipal prevé poner en servicio en el primer trimestre de 2027. La plaza junto al centro estrenó además una nueva área de juegos infantiles dentro del plan municipal de renovación de parques, el mismo que ahora llega a <a href='#juegos-la-paz-211000-euros-cuatro-meses'>la barriada de La Paz</a>.",
    "La Jefatura de Medina de Haro figura entre las inversiones que el gobierno municipal quiere terminar con el <a href='#presupuestos-2027-aportaciones-grupos'>presupuesto de 2027</a>, el último del mandato.",
    "<span class='howto'><b>Centro Cívico Medina de Haro.</b> Distrito Este de Alcalá de Guadaíra. Uso previsto: servicios administrativos y actividades sociales y vecinales. Fecha de apertura: pendiente de anunciar por el Ayuntamiento.</span>"
   ],
   "seo": [
    "centro-civico-medina-de-haro-mobiliario-adjudicado",
    "Centro Cívico Medina de Haro: adjudicado el mobiliario",
    "Alcalá de Guadaíra adjudica por algo más de 67.000 euros el mobiliario del Centro Cívico Medina de Haro, en el Distrito Este, aún sin fecha de apertura.",
    [
     "Centro Cívico Medina de Haro",
     "Distrito Este",
     "Ayuntamiento de Alcalá de Guadaíra",
     "Junta de Gobierno Local",
     "equipamientos municipales",
     "descentralización"
    ]
   ],
   "actualizada": "2026-11-17T22:27"
  },
  {
   "id": "adelante-andalucia-vivienda-protegida-solar-santa-lucia",
   "sec": "politica",
   "kicker": "Elecciones generales",
   "iso": "2026-11-17",
   "hora": "07:30",
   "src": "El Panadero",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Adelante Andalucía pide medidas sobre vivienda ante el solar de Santa Lucía donde se proyectaron cien VPO",
   "sub": "Luis de los Santos, candidato al Congreso por Sevilla, acusa a PP y PSOE de no frenar la especulación inmobiliaria",
   "caption": "Representantes de Adelante Andalucía, en Alcalá de Guadaíra.",
   "foto": "adelante-andalucia-vivienda-santa-lucia-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Adelante Andalucía ha visitado en Alcalá de Guadaíra el solar vacío de la avenida de Santa Lucía, donde se proyectaron más de cien viviendas de protección oficial que nunca se construyeron.",
    "Su candidato al Congreso por Sevilla, Luis de los Santos, sostiene que ni el PP ni el PSOE han actuado contra la especulación inmobiliaria.",
    "La visita forma parte de la campaña de Adelante Andalucía para las elecciones generales del domingo 29 de noviembre."
   ],
   "body": [
    "Adelante Andalucía ha llevado su campaña de las elecciones generales del 29 de noviembre al solar vacío de la avenida de Santa Lucía, en Alcalá de Guadaíra, donde se proyectaron más de cien viviendas de protección oficial (VPO) que nunca se construyeron, para reclamar medidas contra la especulación.",
    "En la visita participaron Luis de los Santos, candidato de Adelante Andalucía al Congreso de los Diputados por la provincia de Sevilla, y la diputada de la formación Begoña Iza. Para el partido, el solar sin edificar es un ejemplo de la falta de respuestas al problema de la vivienda.",
    "## La posición del partido",
    "De los Santos sostuvo que ni el PP ni el PSOE han abordado de forma efectiva la especulación inmobiliaria. «No podemos permitir que tener una casa dependa de cuánto dinero tengas en el banco o de la ayuda de tu familia», afirmó el candidato.",
    "Iza centró su intervención en la emancipación de los jóvenes y en los vecinos que, según la formación, se ven obligados a plantearse dejar sus municipios por el precio del alquiler. Adelante Andalucía pide que el derecho a la vivienda sea efectivo y que figure entre las prioridades de las administraciones. La visita se enmarca en su campaña, que el partido presenta con el lema «Coraje y esperanza».",
    "La formación no ha precisado quién promovía las viviendas previstas en el solar ni en qué año se proyectaron.",
    "## Qué hace el Ayuntamiento",
    "El gobierno municipal tiene en marcha dos promociones públicas a través de la empresa VIVE Alcalá: las 84 viviendas de alquiler de la Cornisa del Zacatín, a 350 euros al mes, cuyo <a href='#zacatin-84-viviendas-alquiler-adjudicacion-31-diciembre'>proceso de adjudicación está abierto hasta el 31 de diciembre</a>, y las 107 viviendas protegidas en venta de la avenida Mar Mediterráneo, que se sortearán próximamente.",
    "Begoña Iza ya llevó a la agenda de la formación otro asunto alcalareño este mes, cuando <a href='#adelante-andalucia-tranvia-retraso-explicaciones'>pidió a la Junta una fecha definitiva para el tranvía</a>.",
    "<span class='howto'><b>Elecciones generales.</b> Domingo 29 de noviembre. Los integrantes de las mesas electorales de Alcalá <a href='#mesas-electorales-sorteo-pleno-29-noviembre'>se sortearon en el pleno del 30 de octubre</a>.</span>"
   ],
   "seo": [
    "adelante-andalucia-vivienda-protegida-santa-lucia",
    "Adelante Andalucía pide vivienda en Alcalá ante el 29N",
    "Adelante Andalucía visita el solar de la avenida de Santa Lucía de Alcalá de Guadaíra, donde se proyectaron más de cien VPO, y pide frenar la especulación.",
    [
     "Adelante Andalucía",
     "Luis de los Santos",
     "Begoña Iza",
     "vivienda protegida",
     "avenida de Santa Lucía",
     "elecciones generales 2026"
    ]
   ]
  },
  {
   "id": "rocio-xliii-aniversario-pregonero-2027-nuevas-reglas",
   "sec": "hermandades",
   "kicker": "Rocío",
   "iso": "2026-11-17",
   "hora": "07:30",
   "src": "Hermandad del Rocío de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0tU9Y11kEHHUruWiZT3vSX9UwUBXcY6zA65BzNve7WMf2ejaYzr5DqvedrzsyNKsEl&id=61567806238125",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "La Hermandad del Rocío celebra su 43 aniversario el sábado 21 y proclamará al pregonero de 2027",
   "sub": "La hermandad, que acaba de aprobar sus nuevas Reglas en cabildo, homenajeará en la cena a los hermanos que cumplen 25 años",
   "caption": "Cartel de la cena del XLIII aniversario de la Hermandad del Rocío.",
   "foto": "rocio-xliii-aniversario-cena-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Rocío de Alcalá de Guadaíra",
   "claves": [
    "La Hermandad del Rocío de Alcalá de Guadaíra celebra el sábado 21 de noviembre su XLIII aniversario con una misa a las 19.30 en la parroquia de San Agustín.",
    "En la cena posterior, a las 21.00 en el Salón de Celebraciones Zambra, se proclamará al pregonero de la hermandad para 2027 y se reconocerá a los hermanos con 25 años de pertenencia.",
    "El cabildo general extraordinario del 7 de noviembre aprobó por amplia mayoría las nuevas Reglas, que deberá sancionar el Arzobispado de Sevilla."
   ],
   "body": [
    "La Hermandad de Nuestra Señora del Rocío de Alcalá de Guadaíra celebra el sábado 21 de noviembre su XLIII aniversario con una misa en la parroquia de San Agustín, su sede, a las 19.30, y una cena en la que proclamará al pregonero de la hermandad para 2027. Lo ha anunciado la propia hermandad en su perfil de Facebook.",
    "La misa contará con la participación del coro de la hermandad y de su coro infantil. Después, a las 21.00, los hermanos están convocados a la tradicional cena de aniversario en el Salón de Celebraciones Zambra, para la que la hermandad ya ha difundido el menú.",
    "Durante la cena, según la corporación, se dará a conocer oficialmente quién pronunciará el pregón de la hermandad en 2027. También habrá un reconocimiento a los hermanos que cumplen 25 años de pertenencia. La hermandad no ha adelantado el nombre del pregonero.",
    "## Nuevas Reglas",
    "El aniversario llega dos semanas después de un cabildo importante para la vida interna de la hermandad. En el cabildo general extraordinario del sábado 7 de noviembre, celebrado en San Agustín, los hermanos aprobaron por amplia mayoría el proyecto de nuevas Reglas, según comunicó la corporación el domingo 15.",
    "El nuevo texto adapta el funcionamiento de la hermandad a las normas diocesanas vigentes de la Archidiócesis de Sevilla y al Código de Derecho Canónico. Según la hermandad, moderniza su organización interna e incorpora a los estatutos su título de Hospitalaria. El expediente se enviará a la Delegación Episcopal para los Asuntos Jurídicos de las Hermandades y Cofradías del Arzobispado de Sevilla, que debe darle la sanción definitiva para que entre en vigor.",
    "Ese mismo día 7, la hermandad tenía previsto celebrar su encuentro «Vivencias del camino», que había aplazado, como recogió este periódico en su <a href='#cautivo-elecciones-jose-david-cobos'>agenda cofrade de principios de mes</a>.",
    "<span class='howto'><b>XLIII aniversario de la Hermandad del Rocío.</b> Sábado 21 de noviembre. Misa: 19.30, parroquia de San Agustín, con el coro de la hermandad y el coro infantil. Cena de aniversario: 21.00, Salón de Celebraciones Zambra, con la proclamación del pregonero de 2027 y el reconocimiento a los hermanos con 25 años de antigüedad.</span>"
   ],
   "seo": [
    "hermandad-rocio-alcala-aniversario-pregonero-2027",
    "Rocío de Alcalá: 43 aniversario y pregonero de 2027",
    "La Hermandad del Rocío de Alcalá de Guadaíra celebra su XLIII aniversario el 21 de noviembre en San Agustín y proclamará en la cena al pregonero de 2027.",
    [
     "Hermandad del Rocío de Alcalá",
     "parroquia de San Agustín",
     "pregonero 2027",
     "Reglas",
     "Arzobispado de Sevilla",
     "aniversario"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "juan-rodriguez-oromana-entrena-primer-equipo-betis",
   "sec": "deportes",
   "kicker": "Fútbol",
   "iso": "2026-11-17",
   "hora": "07:30",
   "src": "Atlético Oromana (Facebook)",
   "fuente_url": "https://www.facebook.com/1836656725129079/posts/1837546255040126",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Juan Rodríguez, del Atlético Oromana, entrena con el primer equipo del Betis a las órdenes de Pellegrini",
   "sub": "El delantero centro compite esta temporada entre el Juvenil de División de Honor y el Betis C",
   "caption": "Juan Rodríguez, en una imagen difundida por el Atlético Oromana.",
   "foto": "juan-rodriguez-oromana-of.jpg",
   "fotocredito": "Facebook del Atlético Oromana",
   "claves": [
    "El delantero Juan Rodríguez, al que el Atlético Oromana presenta como «uno de los nuestros», ha entrenado con el primer equipo del Real Betis a las órdenes de Manuel Pellegrini.",
    "Esta temporada compite entre el Juvenil de División de Honor y el Betis C.",
    "El mismo lunes, la Hermandad del Soberano Poder recibió en su capilla a Jesús Rodríguez Caraballo, jugador del Como 1907, a su hermano Juan Rodríguez y a Miguel Cuevas, ambos de la cantera bética."
   ],
   "body": [
    "El futbolista Juan Rodríguez, delantero centro al que el Atlético Oromana de Alcalá de Guadaíra presenta como «uno de los nuestros», ha entrenado con el primer equipo del Real Betis Balompié a las órdenes de Manuel Pellegrini. Lo ha contado el club alcalareño en su perfil de Facebook la noche del lunes 16 de noviembre.",
    "Según el Atlético Oromana, Juan Rodríguez compite esta temporada entre el Juvenil de División de Honor y el Betis C, dos de los escalones de la cantera verdiblanca. El club le ha felicitado por la oportunidad de participar en una sesión del primer equipo y le anima a «seguir trabajando y disfrutando de cada oportunidad».",
    "## Visita al Soberano Poder",
    "El nombre de Juan Rodríguez apareció ese mismo lunes en otra publicación alcalareña. La Hermandad del Soberano Poder, del barrio de Pablo VI, contó en sus redes sociales que había recibido por la mañana en su capilla a Jesús Rodríguez Caraballo, hermano de la corporación y jugador del Como 1907 italiano, acompañado de su hermano Juan Rodríguez y de Miguel Cuevas, a los que describió como futbolistas de la cantera del Real Betis.",
    "La hermandad agradeció a los tres la visita a Nuestro Padre Jesús del Soberano Poder y a María Santísima de la Caridad y deseó a Jesús Rodríguez una pronta recuperación. La corporación acaba de <a href='#cautivo-soberano-poder-toma-posesion-juntas'>estrenar junta de gobierno</a>, presidida por Antonio J. León.",
    "## Cantera alcalareña",
    "El Atlético Oromana es uno de los clubes de fútbol base de Alcalá y suele difundir en sus redes los pasos de sus jugadores, desde los debuts de sus categorías inferiores hasta los saltos a clubes profesionales. Ese mismo lunes celebró también el debut de un jugador con su equipo alevín de tercera.",
    "El club no ha precisado en qué día se celebró el entrenamiento con el primer equipo bético ni si habrá nuevas convocatorias."
   ],
   "seo": [
    "juan-rodriguez-atletico-oromana-betis-pellegrini",
    "Juan Rodríguez, del Oromana al primer equipo del Betis",
    "El delantero Juan Rodríguez, al que el Atlético Oromana de Alcalá presenta como uno de los suyos, entrena con el primer equipo del Betis de Pellegrini.",
    [
     "Atlético Oromana",
     "Juan Rodríguez",
     "Real Betis",
     "Manuel Pellegrini",
     "Hermandad del Soberano Poder",
     "fútbol base Alcalá"
    ]
   ],
   "encuadre": "center 22%"
  },
  {
   "id": "perdon-reyes-magos-visitan-casas-5-enero-2027",
   "sec": "hermandades",
   "kicker": "Navidad",
   "iso": "2026-11-17",
   "hora": "07:30",
   "src": "Hermandad del Perdón (Facebook)",
   "fuente_url": "https://www.facebook.com/1653440960158738/posts/1653496803486487",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Grupo Joven del Perdón abre las citas para que los Reyes Magos visiten casas la noche del 5 de enero",
   "sub": "La iniciativa de la hermandad franciscana llega a su decimosexta edición; las familias pueden pedir la visita por teléfono",
   "caption": "Cartel de la visita de los Reyes Magos a domicilio del grupo joven de la Hermandad del Perdón.",
   "foto": "perdon-reyes-magos-cartel-of.jpg",
   "fotocredito": "Facebook de la Hermandad del Perdón",
   "claves": [
    "El Grupo Joven de la Hermandad del Perdón organiza por decimosexto año la visita de los Reyes Magos a las casas de las familias que lo soliciten la noche del 5 de enero de 2027.",
    "Las citas se piden en los teléfonos 619 33 21 47 y 667 89 17 07.",
    "La hermandad no ha detallado el precio ni el número de visitas disponibles."
   ],
   "body": [
    "El Grupo Joven de la Hermandad del Perdón de Alcalá de Guadaíra ha abierto el plazo para que las familias pidan que los Reyes Magos visiten su casa la noche del 5 de enero de 2027. Es la decimosexta edición de esta iniciativa, según ha anunciado la hermandad en su perfil de Facebook este lunes 16 de noviembre.",
    "La propuesta, que la hermandad titula «Los Reyes Magos visitan tu casa», consiste en que Sus Majestades de Oriente acudan a los domicilios de las familias que lo hayan solicitado, en la misma noche de la víspera de Reyes. Para informarse o reservar la cita, la corporación ha habilitado dos teléfonos de contacto: el 619 33 21 47 y el 667 89 17 07.",
    "La hermandad no ha detallado en su anuncio si la visita tiene coste, cuántas citas puede atender ni en qué zonas de la ciudad se realiza, detalles para los que remite a esos teléfonos.",
    "## Una hermandad franciscana",
    "La Hermandad Franciscana del Perdón y Sacramental de la Inmaculada da culto al Santísimo Cristo del Perdón y a Nuestra Señora de las Angustias. Su Grupo Joven reúne a los hermanos más jóvenes de la corporación, que mantienen esta actividad navideña desde hace década y media.",
    "La visita a domicilio se suma a otras citas que preparan la Navidad en Alcalá. La Asociación de la Cabalgata de Reyes ya <a href='#cabalgata-reyes-2027-designacion-sorpresa-reyes-magos'>comunicó a principios de mes quiénes serán Melchor, Gaspar y Baltasar</a> en el desfile del 5 de enero, y recauda fondos para su obra social con el <a href='#cenicienta-musical-solidario-cabalgata-22-noviembre'>musical «Cenicienta, la Leyenda»</a>, que se representa el domingo 22 de noviembre en el Auditorio Riberas del Guadaíra.",
    "<span class='howto'><b>Visita de los Reyes Magos a domicilio.</b> Noche del martes 5 de enero de 2027. Organiza: Grupo Joven de la Hermandad del Perdón. Información y citas: 619 33 21 47 y 667 89 17 07.</span>"
   ],
   "seo": [
    "reyes-magos-visitan-tu-casa-hermandad-perdon",
    "Reyes Magos a domicilio en Alcalá con el Perdón",
    "El Grupo Joven de la Hermandad del Perdón de Alcalá de Guadaíra organiza por 16.º año la visita de los Reyes Magos a casas la noche del 5 de enero de 2027.",
    [
     "Hermandad del Perdón",
     "Grupo Joven",
     "Reyes Magos",
     "Navidad",
     "5 de enero",
     "Alcalá de Guadaíra"
    ]
   ],
   "encuadre": "contain"
  },
  {
   "id": "zacatin-84-viviendas-alquiler-adjudicacion-31-diciembre",
   "sec": "alcala",
   "kicker": "Vivienda",
   "iso": "2026-11-16",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1604771005028573",
   "title": "Abierto el proceso para adjudicar las 84 viviendas de alquiler del Zacatín, a 350 euros al mes",
   "sub": "Los inscritos en el registro municipal de demandantes en modalidad de alquiler participan directamente; quienes aún no hayan entregado la documentación tienen hasta el 31 de diciembre",
   "caption": "Representantes municipales y provinciales, en la parcela de la Cornisa del Zacatín junto a los paneles del proyecto de VIVE Alcalá, en una imagen de archivo.",
   "foto": "zacatin-obras-alquiler-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha abierto el proceso para adjudicar las 84 viviendas de alquiler que VIVE Alcalá construye en la Cornisa del Zacatín.",
    "El alquiler previsto es de 350 euros al mes.",
    "Quienes ya figuran en el Registro Municipal de Demandantes de Vivienda en la modalidad de alquiler participan de forma directa.",
    "Las personas que todavía no han presentado la documentación tienen de plazo hasta el 31 de diciembre."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha abierto el proceso para adjudicar las 84 viviendas protegidas de alquiler que la empresa pública VIVE Alcalá construye en la Cornisa del Zacatín, con un alquiler de 350 euros al mes. Así lo ha anunciado el Ayuntamiento en su perfil de Facebook este domingo, 15 de noviembre. La puerta de entrada es el registro municipal de demandantes de vivienda.",
    "Según la publicación municipal, las personas que ya están inscritas en el Registro Municipal de Demandantes de Vivienda en la modalidad de alquiler participan directamente en el proceso, sin tener que hacer ningún trámite más. Quienes todavía no han presentado la documentación tienen hasta el 31 de diciembre para hacerlo.",
    "## Quién puede optar",
    "La web de <a href='https://vivealcaladeguadaira.es/promociones/cornisa-del-zacatin/'>VIVE Alcalá</a> explica que para participar en esta promoción es necesario estar inscrito en el registro de demandantes de vivienda protegida y cumplir las condiciones económicas, familiares y personales que se fijen para ella. Las viviendas se adjudicarán, según la empresa pública, conforme a la normativa de vivienda protegida y a las bases específicas que apruebe el Ayuntamiento.",
    "Para inscribirse en el registro, la empresa pública pide con carácter general ser mayor de edad o estar emancipado, no tener una vivienda en propiedad, salvo las excepciones que recoge la normativa, tener vinculación con Alcalá por empadronamiento, trabajo o arraigo familiar y cumplir los requisitos económicos. La documentación básica es el DNI o NIE, el certificado de empadronamiento y la justificación de los ingresos.",
    "El Ayuntamiento no ha detallado todavía el sistema con el que se ordenará a los solicitantes ni la fecha en la que se conocerán los adjudicatarios.",
    "## Cómo son las viviendas",
    "Las 84 viviendas se reparten en tres bloques en la calle Castillo de Marchenilla. Según VIVE Alcalá, todas tienen dos dormitorios, plaza de garaje y trastero, y se levantan con madera contralaminada, una técnica de construcción industrializada.",
    "Las obras empezaron en octubre, adjudicadas a BILBA Construcción e Infraestructuras por 12,2 millones de euros, con un plazo anunciado de 14 meses. La promoción tiene una inversión total de 15,9 millones, de los que la Diputación de Sevilla aporta 7,97 millones y los fondos europeos Next Generation EU, 3,79 millones. La financiación municipal del proyecto ha sido objeto de debate: Izquierda Alcalareña <a href='#vive-84-viviendas-financiacion-ia'>pidió un informe público</a> sobre cómo afecta a las cuentas del Ayuntamiento.",
    "<span class='howto'><b>Cómo participar.</b> Si ya está inscrito en el Registro Municipal de Demandantes de Vivienda en modalidad de alquiler, participa directamente. Si no ha presentado la documentación, tiene hasta el 31 de diciembre. Inscripción: por vía telemática en la sede electrónica o con cita presencial en la oficina de VIVE Alcalá (plaza de la Plazuela, 10; teléfono 854 52 62 32). Más información en <a href='https://vivealcaladeguadaira.es/'>vivealcaladeguadaira.es</a>.</span>"
   ],
   "seo": [
    "84-viviendas-alquiler-zacatin-alcala-adjudicacion",
    "84 viviendas de alquiler del Zacatín: plazo hasta el 31",
    "Alcalá de Guadaíra abre el proceso para adjudicar las 84 viviendas de alquiler del Zacatín a 350 euros al mes. Documentación hasta el 31 de diciembre.",
    [
     "Alcalá de Guadaíra",
     "vivienda",
     "alquiler asequible",
     "VIVE Alcalá",
     "Cornisa del Zacatín",
     "vivienda protegida"
    ]
   ],
   "elaboracion": "ia",
   "hora": "12:07"
  },
  {
   "id": "alcala-actua-violencia-genero-25n-2026",
   "sec": "alcala",
   "kicker": "Igualdad",
   "iso": "2026-11-16",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1605821044923569",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "Alcalá arranca «Alcalá Actúa contra la Violencia de Género», su programa de actividades en torno al 25N",
   "sub": "Los talleres y actos se celebrarán sobre todo en el Centro de la Igualdad durante noviembre y diciembre; las entradas para el teatro se recogen allí y en la Casa de la Cultura",
   "caption": "Cartel del programa municipal «Alcalá actúa» contra la violencia de género.",
   "foto": "alcala-actua-25n-programa-cartel-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha puesto en marcha el programa «Alcalá Actúa contra la Violencia de Género» con motivo del 25 de noviembre.",
    "Las actividades se celebrarán principalmente en el Centro de la Igualdad durante noviembre y diciembre.",
    "Se dirigen a la ciudadanía en general y a grupos concretos como la comunidad educativa, las entidades sociales, las mujeres, los hombres y los jóvenes.",
    "Las entradas para la obra de teatro del programa están disponibles en el Centro de la Igualdad y en la Casa de la Cultura."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha puesto en marcha este lunes 16 de noviembre de 2026 el programa «Alcalá Actúa contra la Violencia de Género», una serie de actividades de sensibilización organizadas en torno al 25 de noviembre, Día Internacional de la Eliminación de la Violencia contra las Mujeres, que se celebrarán en noviembre y diciembre.",
    "Así lo ha comunicado el Ayuntamiento en su perfil de Facebook, donde explica que la mayor parte de las actividades tendrán lugar en el Centro de la Igualdad. Según la nota municipal, el programa reúne acciones que promueven la igualdad de oportunidades y la prevención de la violencia de género.",
    "Las actividades están dirigidas a la ciudadanía alcalareña en general y también a grupos concretos: la comunidad educativa, las entidades sociales, las mujeres, los hombres y los jóvenes, entre otros, según detalla el Ayuntamiento.",
    "La alcaldesa, Ana Isabel Jiménez, ha difundido también el programa en sus redes sociales. En su publicación menciona talleres para mujeres, jóvenes, familias y colectivos sociales, y sostiene que «frente a la violencia machista, la respuesta tiene que ser colectiva».",
    "## Teatro con entrada en dos puntos",
    "El programa incluye una representación teatral. Las entradas pueden recogerse en el Centro de la Igualdad y en la Casa de la Cultura. En la información difundida este lunes, el Ayuntamiento no ha detallado el calendario completo de actividades ni la fecha de la obra; remite a la nota publicada en la web municipal.",
    "En la edición de 2024, según el <a href='https://alcaladeguadaira.es/contenidos/web/1/584-cartel-25-n-programacion-(1).pdf'>cartel que el Ayuntamiento publicó entonces</a>, el programa del 25N incluyó talleres en el Centro de la Igualdad con servicio de ludoteca, un acto institucional con lectura de manifiesto el mismo 25 de noviembre, marchas escolares hasta los parques de la ciudad y una obra de teatro en el Teatro Gutiérrez de Alba.",
    "<span class='howto'>Programa: «Alcalá Actúa contra la Violencia de Género», noviembre y diciembre de 2026. Lugar principal: Centro de la Igualdad. Entradas para el teatro: Centro de la Igualdad y Casa de la Cultura. Información: alcaladeguadaira.es. Atención a víctimas de violencia de género: teléfono 016, gratuito y disponible las 24 horas.</span>"
   ],
   "seo": [
    "alcala-actua-violencia-genero-25n-programa",
    "Alcalá Actúa contra la Violencia de Género: programa 25N",
    "El Ayuntamiento de Alcalá de Guadaíra pone en marcha su programa del 25N con talleres y actos en el Centro de la Igualdad en noviembre y diciembre.",
    [
     "25N",
     "violencia de género",
     "Centro de la Igualdad",
     "Ayuntamiento de Alcalá de Guadaíra",
     "igualdad",
     "Casa de la Cultura"
    ]
   ],
   "hora": "22:24"
  },
  {
   "id": "milu-luchas-olimpicas-subcampeon-liga-iberdrola-2026",
   "sec": "deportes",
   "kicker": "Luchas olímpicas",
   "iso": "2026-11-16",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8437/el-club-de-luchas-olimpicas-milu-cierra-una-brillante-temporada-como-subcampeon-de-la-liga-iberdrola",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El Club de Luchas Olímpicas Milu cierra la temporada como subcampeón de la Liga Iberdrola por equipos",
   "sub": "Yasmin Alonso se cuelga el oro como primera de la Liga en su peso y África Sánchez logra el bronce en su categoría",
   "caption": "Deportistas y técnicos del Club Milu, con la bandera del club.",
   "foto": "milu-luchas-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "El equipo femenino del Club de Luchas Olímpicas Milu, de Alcalá de Guadaíra, ha terminado subcampeón de la Liga Iberdrola por equipos.",
    "Yasmin Alonso ha ganado el oro como primera de la Liga en su peso y África Sánchez, el bronce en su categoría.",
    "En la misma temporada el club ha sido subcampeón de la Copa de la Reina y campeón de España por equipos."
   ],
   "body": [
    "El equipo femenino del Club de Luchas Olímpicas Milu, de Alcalá de Guadaíra, ha cerrado la temporada como subcampeón de la Liga Iberdrola por equipos y con dos medallas individuales: el oro de Yasmin Alonso y el bronce de África Sánchez, según ha informado este lunes 16 de noviembre de 2026 Alcalá+Deporte, el portal deportivo del Ayuntamiento.",
    "Yasmin Alonso ha terminado como primera de la Liga en su peso, lo que le da la medalla de oro individual. África Sánchez se ha hecho con el bronce en su categoría. El portal municipal no ha detallado los pesos en los que compitieron ni los resultados de cada combate.",
    "## Tres podios por equipos",
    "El segundo puesto en la Liga Iberdrola completa una temporada con tres podios por equipos para el club alcalareño. Según el balance de Alcalá+Deporte, las luchadoras del Milu han sido subcampeonas de la Copa de la Reina, campeonas de España por equipos y, ahora, subcampeonas de la Liga Iberdrola.",
    "El portal deportivo municipal ha felicitado a las deportistas y al cuerpo técnico del club por la temporada, y presenta el resultado como un nuevo éxito del deporte alcalareño en competiciones de ámbito nacional.",
    "No es el único éxito nacional reciente del deporte femenino alcalareño. Este fin de semana, <a href='#cp-aguila-femenino-campeon-espana-petanca-2026'>el equipo femenino del C.P. Águila se proclamó campeón de España de petanca</a> en la Liga Nacional de Clubes de Primera Categoría.",
    "Las luchas olímpicas agrupan las modalidades de lucha libre y lucha grecorromana, ambas en el programa de los Juegos Olímpicos; en categoría femenina solo se compite en lucha libre. La Liga Iberdrola es la denominación que reciben las competiciones femeninas de varias federaciones españolas por el patrocinio de esa compañía."
   ],
   "seo": [
    "club-luchas-olimpicas-milu-subcampeon-liga-iberdrola",
    "El Milu de Alcalá, subcampeón de la Liga Iberdrola de lucha",
    "El equipo femenino del Club de Luchas Olímpicas Milu de Alcalá de Guadaíra acaba segundo en la Liga Iberdrola, con oro de Yasmin Alonso y bronce de África.",
    [
     "Club de Luchas Olímpicas Milu",
     "Liga Iberdrola",
     "luchas olímpicas",
     "Yasmin Alonso",
     "África Sánchez",
     "deporte femenino"
    ]
   ],
   "hora": "22:24"
  },
  {
   "id": "cenicienta-musical-solidario-cabalgata-22-noviembre",
   "sec": "cultura",
   "kicker": "Musical solidario",
   "iso": "2026-11-16",
   "src": "Cabalgata de Reyes Magos de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1852796172875241/posts/1853377882817070",
   "firma": "Redacción El Panadero",
   "elaboracion": "ia",
   "title": "El musical «Cenicienta, la Leyenda» llega el domingo 22 al Auditorio a beneficio de la obra social de la Cabalgata",
   "sub": "La función familiar empieza a las 12.00 en el Auditorio Riberas del Guadaíra y las entradas se venden en giglon.com",
   "caption": "Una escena del musical «Cenicienta, la Leyenda».",
   "foto": "cenicienta-musical-of.jpg",
   "fotocredito": "Facebook de la Cabalgata de Reyes Magos de Alcalá",
   "claves": [
    "El musical «Cenicienta, la Leyenda» se representa el domingo 22 de noviembre de 2026 a las 12.00 en el Auditorio Riberas del Guadaíra.",
    "La recaudación es a beneficio de la obra social de la Cabalgata de Reyes Magos de Alcalá de Guadaíra.",
    "El espectáculo es apto para todos los públicos y las entradas se venden en giglon.com."
   ],
   "body": [
    "El musical «Cenicienta, la Leyenda» se representa el domingo 22 de noviembre de 2026, a las 12.00, en el Auditorio Riberas del Guadaíra, en una función familiar a beneficio de la obra social de la Cabalgata de Reyes Magos de Alcalá de Guadaíra.",
    "Así lo ha anunciado la Cabalgata en su perfil de Facebook, donde presenta el espectáculo como un musical con música y fantasía para disfrutar en familia y señala que es apto para todos los públicos. La asociación anima a los vecinos a acudir para colaborar con su labor solidaria.",
    "Las entradas se venden en la plataforma giglon.com. La Cabalgata no ha detallado en su publicación el precio de las localidades ni la compañía que pone en escena el musical.",
    "La función ya figuraba en la <a href='#agenda-cultural-noviembre-2026'>programación de noviembre del Auditorio</a>, junto a los conciertos de Joana Jiménez y de Rancapino Chico. Lo que añade ahora la Cabalgata es el destino de la recaudación, que irá a su obra social.",
    "## La Cabalgata suma apoyos",
    "Ese mismo lunes, la Cabalgata ha agradecido en sus redes al Club de Tenis Oromana que haya dedicado a la asociación la jornada de menores del XXII Torneo Ciudad de Alcalá, un gesto con el que, según la asociación, el club contribuye a mantener viva la ilusión de los niños.",
    "La asociación ya trabaja en la cabalgata de 2027. A comienzos de noviembre <a href='#cabalgata-reyes-2027-designacion-sorpresa-reyes-magos'>comunicó por sorpresa quiénes serán los Reyes Magos</a> de la próxima edición, que recorrerá la ciudad la tarde del 5 de enero.",
    "<span class='howto'>«Cenicienta, la Leyenda»: domingo 22 de noviembre de 2026, 12.00. Lugar: Auditorio Riberas del Guadaíra. Público: todos los públicos. Entradas: giglon.com. A beneficio de la obra social de la Cabalgata de Reyes Magos de Alcalá de Guadaíra.</span>"
   ],
   "seo": [
    "cenicienta-la-leyenda-musical-auditorio-cabalgata",
    "Cenicienta, la Leyenda: musical solidario en Alcalá",
    "El musical «Cenicienta, la Leyenda» llega el 22 de noviembre a las 12.00 al Auditorio Riberas del Guadaíra a beneficio de la obra social de la Cabalgata.",
    [
     "Cabalgata de Reyes Magos",
     "Auditorio Riberas del Guadaíra",
     "musical",
     "Cenicienta",
     "obra social",
     "teatro familiar"
    ]
   ],
   "hora": "22:24"
  },
  {
   "id": "cautivo-soberano-poder-toma-posesion-juntas",
   "sec": "hermandades",
   "kicker": "Hermandades",
   "iso": "2026-11-16",
   "src": "Consejo General de Hermandades y Cofradías",
   "fuente_url": "https://www.consejohermandadesalcala.es/2026/11/15/nueva-junta-de-la-hermandad-de-jesus-cautivo/",
   "title": "El Cautivo y el Soberano Poder estrenan juntas de gobierno con José David Cobos y Antonio J. León",
   "sub": "Las dos hermandades celebraron este fin de semana la toma de posesión de sus nuevos hermanos mayores, que sustituyen a Juan Carlos Navarro y Jaime Otero",
   "caption": "Una de las imágenes marianas de la Hermandad del Cautivo, en una imagen de archivo.",
   "foto": "cautivo-elecciones-david-cobos.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "José David Cobos Martínez y su junta tomaron posesión el sábado 14 de noviembre al frente de la Hermandad del Cautivo.",
    "Antonio J. León Donoso hizo lo propio el domingo 15 en la Hermandad del Soberano Poder, durante la eucaristía en la parroquia de San Mateo.",
    "El Consejo de Hermandades asistió a los dos actos y agradeció a los hermanos mayores salientes, Juan Carlos Navarro y Jaime Otero, su trabajo en la Junta Superior.",
    "La Hermandad de Jesús organiza el jueves 19 una conferencia sobre donación y trasplantes."
   ],
   "body": [
    "Dos hermandades de penitencia de Alcalá de Guadaíra han cambiado de gobierno este fin de semana. La Hermandad del Cautivo celebró el sábado 14 de noviembre la toma de posesión de la junta que encabeza José David Cobos Martínez, y la del Soberano Poder hizo lo mismo el domingo 15 con la de Antonio J. León Donoso. Así lo han informado las propias hermandades y el Consejo General de Hermandades y Cofradías de la ciudad.",
    "## El Cautivo, tras la misa del sábado",
    "Según ha publicado la Hermandad del Cautivo en su perfil de Facebook, la nueva Junta de Gobierno juró sus cargos tras la misa de las 20.00 horas en su capilla, con la presencia del párroco y director espiritual, Álvaro Montilla González. La hermandad encomendó la nueva etapa a sus titulares: María Santísima de los Dolores, Nuestro Padre Jesús Cautivo y Rescatado y Nuestra Señora de la Esperanza.",
    "Cobos ganó el <a href='#cautivo-elecciones-jose-david-cobos'>cabildo de elecciones del 25 de octubre</a> con 335 votos frente a los 252 de la candidatura del hermano mayor saliente, Juan Carlos Navarro. Al acto asistió el vicepresidente del Consejo de Hermandades, Alejandro Redondo, que según la <a href='https://www.consejohermandadesalcala.es/2026/11/15/nueva-junta-de-la-hermandad-de-jesus-cautivo/'>nota del Consejo</a> deseó a la nueva junta un mandato fructífero y agradeció a Navarro su trabajo en la Junta Superior.",
    "## El Soberano Poder, en San Mateo",
    "La Hermandad del Soberano Poder, con sede en la barriada de Pablo VI, celebró la toma de posesión el domingo 15 durante la eucaristía en la parroquia de San Mateo. Según ha publicado la hermandad en Facebook, Antonio J. León, como hermano mayor, y los miembros de la nueva Junta de Gobierno asumieron sus cargos ante Nuestro Padre Jesús del Soberano Poder y María Santísima de la Caridad.",
    "En este caso acudió el presidente del Consejo, Enrique Ruiz, que, según la <a href='https://www.consejohermandadesalcala.es/2026/11/16/nueva-junta-de-la-hermandad-de-jesus-del-soberano-poder/'>nota del Consejo</a>, agradeció al hermano mayor saliente, Jaime Otero, su labor en la Junta Superior. La alcaldesa, Ana Isabel Jiménez, felicitó a las dos nuevas juntas en sus redes sociales.",
    "## Agenda cofrade de la semana",
    "La Hermandad de Jesús celebra el próximo jueves, 19 de noviembre, dentro de sus jornadas culturales, la conferencia «Trasplantes, el gran milagro de la generosidad», con testimonios de donantes y trasplantados y moderada por José Pérez Bernal, según ha anunciado la hermandad en Facebook.",
    "El Consejo de Hermandades ha puesto a la venta los décimos del número 41500 de la Lotería de Navidad, cuyos beneficios van a su obra social; se pueden comprar en las hermandades y en comercios colaboradores. Y el grupo joven de la Hermandad del Perdón ha abierto por decimosexto año las peticiones para que los Reyes Magos visiten los hogares la noche del 5 de enero, en los teléfonos 619 33 21 47 y 667 89 17 07."
   ],
   "seo": [
    "cautivo-soberano-poder-toma-posesion-alcala",
    "Cautivo y Soberano Poder estrenan juntas de gobierno",
    "José David Cobos y Antonio J. León toman posesión como hermanos mayores del Cautivo y del Soberano Poder en Alcalá de Guadaíra el fin de semana.",
    [
     "Alcalá de Guadaíra",
     "hermandades",
     "Hermandad del Cautivo",
     "Soberano Poder",
     "Consejo de Hermandades",
     "Semana Santa"
    ]
   ],
   "elaboracion": "ia",
   "hora": "12:07"
  },
  {
   "id": "dia-flamenco-auditorio-lleno-encuentro-penas-2026",
   "sec": "cultura",
   "kicker": "Flamenco",
   "iso": "2026-11-16",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1605726984932975",
   "title": "El Auditorio se llena para el Día del Flamenco con María Terremoto, Caracafé y El Petete",
   "sub": "Alcalá cerró el domingo el ciclo «Sevilla Flamenca» de la Diputación y acogió el Encuentro Provincial de Peñas, con representantes de entidades flamencas de la provincia",
   "caption": "Presentación de la gala del Día Internacional del Flamenco, con el cartel de la clausura de «Sevilla Flamenca» en Alcalá, en una imagen de archivo.",
   "foto": "dia-flamenco-2026-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "El Auditorio Riberas del Guadaíra se llenó el domingo 15 de noviembre para la gala del Día Internacional del Flamenco, según el Ayuntamiento.",
    "Actuaron María Terremoto, Emilio Caracafé, El Petete y Jóvenes de las 3.000.",
    "La gala cerró el ciclo «Sevilla Flamenca» de la Diputación de Sevilla y coincidió con el Encuentro Provincial de Peñas."
   ],
   "body": [
    "Alcalá de Guadaíra celebró el domingo 15 de noviembre el Día Internacional del Flamenco con el Auditorio Riberas del Guadaíra completamente lleno, según ha publicado el Ayuntamiento en su perfil de Facebook. Sobre el escenario actuaron María Terremoto, Emilio Caracafé, El Petete y Jóvenes de las 3.000, en la gala que cerró el ciclo «Sevilla Flamenca» de la Diputación de Sevilla.",
    "La jornada sirvió también para celebrar el Encuentro Provincial de Peñas, que organiza la Federación Provincial de Entidades Flamencas y que este año ha terminado en Alcalá. Representantes de peñas de distintos municipios sevillanos pasaron el día en la ciudad. El Ayuntamiento no ha facilitado una cifra de asistentes.",
    "## Cómo fue el día",
    "Tal y como <a href='#dia-flamenco-15-noviembre-maria-terremoto-caracafe'>anunció El Panadero</a>, el programa empezó a las 10.00 horas con la recepción de las entidades flamencas, cuyos representantes hicieron una visita turístico-cultural guiada por la ciudad. La gala comenzó a las 13.00 horas, con entrada mediante invitación gratuita, que se repartió desde el 5 de noviembre.",
    "El cartel unió a artistas consagrados con una formación joven. María Terremoto, cantaora jerezana de la saga de los Terremoto, encabezó la gala junto al cantaor Emilio Caracafé y El Petete. Jóvenes de las 3.000 completó el programa.",
    "La víspera, el viernes 13, la Peña Flamenca El Arrabal acogió la actuación de Gloria del Rosario, la cita alcalareña dentro del mismo ciclo.",
    "## Un ciclo provincial",
    "«Sevilla Flamenca» es la programación de la Diputación de Sevilla para el Día Internacional del Flamenco, que se celebra cada 16 de noviembre desde que la UNESCO declaró el flamenco Patrimonio Cultural Inmaterial de la Humanidad en 2010. El ciclo se impulsa a través de Prodetur, la sociedad de promoción de la Diputación, y en Alcalá ha contado con la participación de las delegaciones municipales de Cultura y de Turismo.",
    "El delegado de Cultura, Christopher Rivas, había defendido en la presentación del programa el papel de las peñas como espacios para mantener vivo el flamenco. La agenda cultural de noviembre sigue en el Auditorio con <a href='#agenda-cultural-noviembre-2026'>otras citas</a> de música y artes escénicas."
   ],
   "seo": [
    "dia-flamenco-alcala-2026-auditorio-lleno",
    "Día del Flamenco en Alcalá: lleno en el Auditorio",
    "María Terremoto, Caracafé, El Petete y Jóvenes de las 3.000 llenan el Auditorio de Alcalá de Guadaíra en la clausura del ciclo Sevilla Flamenca 2026.",
    [
     "Alcalá de Guadaíra",
     "flamenco",
     "Día Internacional del Flamenco",
     "María Terremoto",
     "Sevilla Flamenca",
     "peñas flamencas"
    ]
   ],
   "elaboracion": "ia",
   "hora": "12:07"
  },
  {
   "id": "vox-tala-arboles-castillo-ayuntamiento-88-ejemplares",
   "sec": "politica",
   "kicker": "Arbolado",
   "iso": "2026-11-16",
   "src": "VOX Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/reel/2202732623641455/",
   "title": "Vox denuncia la tala de árboles en el entorno del Castillo y el Ayuntamiento habla de 18 retiradas",
   "sub": "El grupo pide el informe técnico y una reposición con árboles de mayor porte; según los datos municipales, la zona tiene hoy 88 árboles y ha sumado 40 en los últimos años",
   "caption": "Copas de árboles. Imagen de recurso",
   "foto": "arbolado-stock.jpg",
   "fotocredito": "Unsplash",
   "claves": [
    "Vox denuncia la tala de árboles de más de 50 años en el entorno del Castillo y del Santuario de la Virgen del Águila y pide el informe técnico que la respalde.",
    "Según los datos facilitados por el Ayuntamiento, en esa zona se han retirado 18 árboles en distintos momentos, la mayoría por roturas o caídas por fenómenos meteorológicos.",
    "El inventario municipal cuenta hoy 88 árboles en el entorno y 40 plantados en los últimos años.",
    "El Ayuntamiento prevé un proyecto de revegetación cuando terminen los trabajos pendientes."
   ],
   "body": [
    "Vox ha denunciado la tala de árboles de más de 50 años en el entorno del Castillo de Alcalá de Guadaíra y del Santuario de la Virgen del Águila. Según ha publicado el grupo municipal en su perfil de Facebook, su portavoz, Pedro Navarro, exige que se paralicen esas actuaciones, que se entregue el informe técnico que las respalda y que se repongan los ejemplares de forma digna.",
    "El Ayuntamiento, por su parte, sostiene que los árboles retirados en esa zona lo fueron en distintos momentos y, en la mayoría de los casos, por roturas o caídas causadas por fenómenos meteorológicos o por el mal estado de los ejemplares, según los datos que ha facilitado la Delegación de Medio Ambiente.",
    "## La posición de Vox",
    "En su publicación, Vox califica de «masacre» lo ocurrido en el entorno del Castillo y lo compara con lo sucedido en la plaza del Cabildo y en otras zonas de la ciudad. El grupo responsabiliza a la alcaldesa, Ana Isabel Jiménez, y a sus socios de gobierno de Andalucía Por Sí, y también a la delegada de Medio Ambiente, Luisa Campos. Vox reprocha al gobierno municipal que utilice el número de nuevas plantaciones para justificar la pérdida de árboles adultos y reclama que la reposición se haga con ejemplares de mayor porte.",
    "No es la primera vez que el grupo plantea el asunto: en agosto pidió explicaciones por los naranjos de la plaza del Cabildo durante las obras de remodelación, como recogió El Panadero en su información sobre el plan director del arbolado.",
    "## Las cifras del Ayuntamiento",
    "Según el inventario municipal, el entorno del Castillo y del Santuario del Águila tiene hoy 88 árboles: 45 naranjos, 17 paraísos, 14 moreras, diez jacarandas, una palmera y un olmo. En los últimos años se han plantado 40: 14 dentro del programa Alcalá Más Verde y 26 naranjos en la reciente intervención junto al Centro de Interpretación del Castillo.",
    "Los retirados suman 18, siempre según los datos municipales: diez paraísos, seis moreras, una jacaranda y una palmera. El Ayuntamiento no ha precisado en qué fechas se quitó cada uno.",
    "## Lo que viene",
    "La Delegación de Medio Ambiente prevé revisar el estado de los árboles de la zona y preparar un proyecto de revegetación cuando terminen los trabajos pendientes en el entorno. En la plaza del Cabildo está prevista la reposición de los naranjos afectados por las obras.",
    "El Ayuntamiento trabaja además en el primer Plan Director del Arbolado, que la Junta de Gobierno Local sacó a licitación por 72.539 euros y que deberá analizar unos 90.000 árboles de titularidad y gestión municipal para fijar cómo conservarlos, mejorarlos y ampliarlos."
   ],
   "seo": [
    "vox-tala-arboles-castillo-alcala-ayuntamiento",
    "Vox denuncia talas junto al Castillo de Alcalá",
    "Vox denuncia la tala de árboles en el entorno del Castillo de Alcalá de Guadaíra. El Ayuntamiento cifra en 18 las retiradas y en 88 los árboles actuales.",
    [
     "Alcalá de Guadaíra",
     "Vox",
     "arbolado",
     "Castillo de Alcalá",
     "Medio Ambiente",
     "Santuario del Águila"
    ]
   ],
   "elaboracion": "ia",
   "hora": "12:07"
  },
  {
   "id": "afar-almuerzo-benefico-2026-cuarenta-anos",
   "sec": "alcala",
   "kicker": "Solidaridad",
   "iso": "2026-11-16",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Facebook)",
   "fuente_url": "https://www.facebook.com/1605699894935684/posts/1605018591670481",
   "title": "AFAR celebra su almuerzo benéfico y abre la cuenta atrás de sus 40 años, que cumplirá en 2027",
   "sub": "La cita, en la Hacienda de La Andrada, reunió a representantes municipales, hermandades y entidades; el sacerdote alcalareño Adrián Sanabria será padrino del aniversario",
   "caption": "Asistentes al almuerzo benéfico de AFAR, ante el photocall de la asociación.",
   "foto": "afar-almuerzo-2026-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "La Asociación AFAR celebró el domingo 15 de noviembre su tradicional almuerzo benéfico para recaudar fondos con los que ayudar a personas necesitadas.",
    "La cita marcó el inicio de la celebración de los 40 años de la asociación, que se cumplen en 2027.",
    "El sacerdote alcalareño Adrián Sanabria será el padrino del aniversario.",
    "AFAR participó además este fin de semana en la Gran Recogida de Alimentos."
   ],
   "body": [
    "La Asociación AFAR celebró el domingo 15 de noviembre su tradicional almuerzo benéfico en Alcalá de Guadaíra, con el que recauda fondos para ayudar a personas necesitadas. Así lo ha informado el Ayuntamiento en su perfil de Facebook. La cita tuvo lugar en la Hacienda de La Andrada, según el Consejo de Hermandades, que participó y colaboró en la organización.",
    "Este año el almuerzo tuvo un significado añadido. Según ha explicado la alcaldesa, Ana Isabel Jiménez, en sus redes sociales, la cita marca el inicio de la celebración de los 40 años de AFAR, que se cumplen en 2027. El padrino del aniversario será Adrián Sanabria, sacerdote alcalareño.",
    "## Una cita con la ciudad",
    "Al almuerzo acudieron representantes del gobierno municipal y de distintas entidades. La alcaldesa destacó el trabajo de Manuel Ángel Cano y de su equipo en favor de la inclusión y la dignidad de las personas. Además del Consejo de Hermandades, hermandades como la del Perdón estuvieron representadas, según han publicado en sus redes.",
    "AFAR es una asociación con sede en Alcalá que trabaja con personas en situación de vulnerabilidad. Durante el mismo fin de semana, según ha publicado la entidad en Facebook, su equipo y personas usuarias de sus distintos recursos participaron como voluntarios en la Gran Recogida de Alimentos, la campaña anual a beneficio del Banco de Alimentos.",
    "El Ayuntamiento no ha facilitado la cantidad recaudada en el almuerzo ni el número de asistentes.",
    "## Otras citas solidarias",
    "El almuerzo de AFAR se suma a otras iniciativas solidarias de estas semanas en la ciudad, como la <a href='#san-silvestre-solidaria-alcala-27-diciembre-oromana'>primera San Silvestre Solidaria</a>, prevista para el 27 de diciembre, y la convocatoria municipal de <a href='#subvenciones-sedes-entidades-sociales-2026-63400'>ayudas para equipar las sedes de las entidades sociales</a>, dotada con 63.400 euros, cuyo plazo sigue abierto hasta el 26 de noviembre, según ha recordado el Ayuntamiento."
   ],
   "seo": [
    "afar-almuerzo-benefico-alcala-2026",
    "AFAR celebra su almuerzo benéfico en Alcalá",
    "La Asociación AFAR celebra en Alcalá de Guadaíra su almuerzo benéfico, que abre la celebración de sus 40 años en 2027 con Adrián Sanabria como padrino.",
    [
     "Alcalá de Guadaíra",
     "AFAR",
     "solidaridad",
     "almuerzo benéfico",
     "asociaciones",
     "Banco de Alimentos"
    ]
   ],
   "elaboracion": "ia",
   "hora": "12:07"
  },
  {
   "id": "cp-aguila-femenino-campeon-espana-petanca-2026",
   "sec": "deportes",
   "kicker": "Petanca",
   "iso": "2026-11-16",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8436/el-equipo-femenino-del-cp-aguila-se-proclama-campeon-de-espana-de-petanca",
   "title": "El equipo femenino del C.P. Águila, campeón de España de petanca",
   "sub": "Las alcalareñas ganan la Liga Nacional de Clubes de Primera Categoría, disputada del 13 al 15 de noviembre",
   "caption": "El equipo femenino del C.P. Águila, con las medallas de campeón de España.",
   "foto": "cp-aguila-petanca-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "El equipo femenino del Club de Petanca Águila se ha proclamado campeón de España de la Liga Nacional de Clubes de Primera Categoría.",
    "La competición se disputó los días 13, 14 y 15 de noviembre.",
    "El equipo lo forman Gemma María Romero, Cristina García, Rocío Román, Leire Romero, Estefanía Sánchez, Adriana Sánchez, Laura Villaecija y María Esmeralda Espinosa, con Jorge Fernández en la dirección técnica."
   ],
   "body": [
    "El equipo femenino del Club de Petanca Águila de Alcalá de Guadaíra se ha proclamado campeón de España de la Liga Nacional de Clubes de Primera Categoría, según ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento. La competición se disputó los días 13, 14 y 15 de noviembre.",
    "Con este título, el club alcalareño se sitúa en lo más alto de la competición femenina por clubes de la petanca española esta temporada.",
    "## Las campeonas",
    "El equipo campeón lo forman Gemma María Romero, Cristina García, Rocío Román, Leire Romero, Estefanía Sánchez, Adriana Sánchez, Laura Villaecija y María Esmeralda Espinosa. La dirección técnica corresponde a Jorge Fernández.",
    "Alcalá+Deporte ha felicitado a las jugadoras, al cuerpo técnico y al resto del club por el campeonato. El portal municipal no ha detallado los resultados de cada eliminatoria ni la clasificación final del resto de equipos.",
    "## Una temporada de títulos",
    "El triunfo del C.P. Águila se suma a otros éxitos recientes del deporte alcalareño que ha recogido El Panadero, como las <a href='#cd-qalat-copa-diputacion-granada-kickboxing-siete-medallas'>siete medallas del CD Qalat en la Copa Diputación de Granada de kickboxing</a>. Alcalá acogerá además los días 21 y 22 de noviembre la <a href='#copa-andalucia-escalada-bloque-wiseclimb-21-22-noviembre'>segunda prueba de la Copa de Andalucía de Escalada en Bloque</a>."
   ],
   "seo": [
    "cp-aguila-campeon-espana-petanca-femenino-alcala",
    "El C.P. Águila femenino, campeón de España de petanca",
    "El equipo femenino del Club de Petanca Águila de Alcalá de Guadaíra gana la Liga Nacional de Clubes de Primera Categoría, disputada del 13 al 15 de noviembre.",
    [
     "Alcalá de Guadaíra",
     "petanca",
     "C.P. Águila",
     "campeonas de España",
     "deporte femenino",
     "Alcalá+Deporte"
    ]
   ],
   "elaboracion": "ia",
   "hora": "12:07"
  },
  {
   "id": "subvenciones-sedes-entidades-sociales-2026-63400",
   "sec": "economia",
   "hora": "19:12",
   "iso": "2026-11-12",
   "kicker": "Ayudas a asociaciones",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Extracto-num-224842-de-la-convocatoria-de-subvenciones-por-la-Delegacion-de-Servicios-Sociales-para-la-mejora-de-las-sedes-de-entidades-sociales-ubicadas-en-el-municipio-2026-BDNS-codigo-941049/",
   "title": "Las entidades sociales de Alcalá pueden pedir desde el viernes ayudas para amueblar y equipar sus sedes",
   "sub": "El Ayuntamiento reparte 63.400 euros a partes iguales entre las solicitudes bien valoradas; el plazo es de diez días hábiles y la petición se hace por la sede electrónica",
   "caption": "Imagen de archivo.",
   "foto": "generica-economia.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "El BOP de Sevilla publica este jueves la convocatoria municipal de 2026 de ayudas para que las entidades sociales compren mobiliario y equipamiento para sus sedes.",
    "El crédito disponible es de 63.400 euros y se repartirá de forma lineal entre las solicitudes con valoración positiva, sin superar lo que pida cada entidad.",
    "Pueden optar las organizaciones sin ánimo de lucro inscritas en el registro municipal con al menos un año de antigüedad; quedan fuera fundaciones, AMPAs, hermandades, peñas y asociaciones vecinales, culturales, deportivas, sindicales y empresariales.",
    "El plazo es de diez días hábiles a partir del viernes 13 de noviembre."
   ],
   "body": [
    "Las entidades sociales de Alcalá de Guadaíra pueden pedir desde el viernes 13 de noviembre una ayuda municipal para comprar mobiliario y equipamiento para sus sedes. El Boletín Oficial de la Provincia de Sevilla publica este jueves, 12 de noviembre, el <a href='https://bopsevilla.dipusevilla.es/export/sites/bop/.galleries/Documentos-BOPs-en-PDF/bop-12_11_2026-139f8452-ddbb-11f1-9250-0050569ff69d-1794441674597.pdf'>extracto de la convocatoria</a>, dotada con 63.400 euros y con diez días hábiles de plazo.",
    "La convocatoria la gestiona la Delegación de Servicios Sociales, se tramita en régimen de concurrencia competitiva y figura en la Base de Datos Nacional de Subvenciones con el código 941049. El extracto lo firma el secretario general del Ayuntamiento, José Antonio Bonilla Ruiz, con fecha del 10 de noviembre.",
    "## Quién puede pedirla",
    "Según el texto publicado, pueden solicitarla las organizaciones sin ánimo de lucro con sede social en el municipio, o con una delegación en él, cuyos estatutos recojan fines sociales o de salud, entre otros, y que estén inscritas en el registro municipal de asociaciones con al menos un año de antigüedad.",
    "El extracto excluye de forma expresa a las fundaciones, las AMPAs, las hermandades y las peñas, y también a las asociaciones sindicales, vecinales, culturales, deportivas y empresariales. Tampoco pueden concurrir las federaciones cuando una de sus entidades federadas haya presentado solicitud en la misma línea, ni los proyectos que ya reciban dinero de otra área municipal.",
    "## Cuánto se reparte",
    "El dinero sale de la aplicación presupuestaria 50301/2319/78903 y solo puede destinarse a adquirir mobiliario y equipamiento; el texto no incluye obras en los locales. La convocatoria no fija un máximo por entidad: la cantidad se reparte de forma lineal entre todas las solicitudes bien presentadas que obtengan una valoración positiva, sin superar en ningún caso lo que haya pedido cada asociación. Por eso, la ayuda final de cada una dependerá del número de solicitudes que se aprueben.",
    "Las solicitudes que tengan defectos se podrán subsanar en un plazo de diez días naturales. La justificación de las ayudas se rige por las bases generales que el Ayuntamiento publicó en el BOP en noviembre de 2021.",
    "<span class='howto'><b>Cómo pedirla.</b> Plazo: diez días hábiles contados desde el viernes 13 de noviembre, día siguiente a la publicación del extracto. Dónde: en la <a href='https://www.alcaladeguadaira.es/sede-electronica'>sede electrónica del Ayuntamiento</a>, con los modelos oficiales y la firma electrónica del representante legal de la entidad. Importe total: 63.400 euros, a repartir entre las solicitudes aprobadas.</span>"
   ],
   "seo": [
    "ayudas-sedes-entidades-sociales-alcala-2026",
    "Ayudas para sedes de entidades sociales en Alcalá 2026",
    "El Ayuntamiento de Alcalá de Guadaíra reparte 63.400 euros entre entidades sociales para mobiliario y equipamiento. Plazo de diez días hábiles desde el 13.",
    [
     "Alcalá de Guadaíra",
     "subvenciones",
     "entidades sociales",
     "asociaciones",
     "Servicios Sociales",
     "BOP de Sevilla"
    ]
   ],
   "elaboracion": "ia"
  },
  {
   "id": "estudiantes-banda-musica-alcala-fin-25-anos",
   "sec": "hermandades",
   "hora": "19:12",
   "iso": "2026-11-12",
   "kicker": "Martes Santo",
   "src": "El Panadero",
   "title": "La Hermandad de los Estudiantes prescinde de la Banda de Música de Alcalá después de 25 años tras su palio",
   "sub": "La banda, que acompañaba desde 2001 a María Santísima de la Angustia cada Martes Santo, expresa en un comunicado su «profunda tristeza» por la decisión",
   "caption": "Imagen de archivo.",
   "foto": "generica-hermandades.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "La Hermandad de los Estudiantes ha decidido prescindir de la Banda de Música de Alcalá, que acompañaba su paso de palio desde 2001.",
    "La propia banda lo ha dado a conocer en un comunicado en el que expresa su «profunda tristeza» por la decisión.",
    "Según la banda, la hermandad le ha trasladado que la ruptura no se debe a motivos musicales ni económicos ni a ningún incumplimiento por su parte."
   ],
   "body": [
    "La Hermandad de los Estudiantes de Alcalá de Guadaíra ha decidido prescindir de la Banda de Música de Alcalá, que acompañaba cada Martes Santo a su paso de palio desde 2001. Lo ha dado a conocer la propia banda en un comunicado, con el que se cierra una vinculación de 25 años.",
    "La Hermandad de los Estudiantes procesiona el Martes Santo con sus dos titulares, el Cristo de la Buena Muerte y María Santísima de la Angustia. Durante este cuarto de siglo, la Banda de Música de Alcalá ha sido la encargada de poner la música tras la dolorosa.",
    "## La versión de la banda",
    "En su comunicado, la banda expresa su «profunda tristeza» por la decisión de la corporación. Según su relato, la hermandad le ha explicado que el final de la relación no responde a razones musicales ni económicas, ni a ningún incumplimiento por parte de la formación. La banda recuerda en el mismo texto que suma más de 160 años de trayectoria y cierra su mensaje con una despedida: «En Alcalá tenéis todos vuestra casa».",
    "La hermandad no ha hecho público qué formación acompañará a María Santísima de la Angustia en la próxima Semana Santa."
   ],
   "seo": [
    "hermandad-estudiantes-banda-musica-alcala",
    "Los Estudiantes prescinde de la Banda de Música de Alcalá",
    "La Hermandad de los Estudiantes de Alcalá de Guadaíra prescinde de la Banda de Música de Alcalá, que acompañaba a su palio cada Martes Santo desde 2001.",
    [
     "Alcalá de Guadaíra",
     "Hermandad de los Estudiantes",
     "Banda de Música de Alcalá",
     "Martes Santo",
     "Semana Santa",
     "cofradías"
    ]
   ],
   "elaboracion": "ia"
  },
  {
   "id": "copa-andalucia-escalada-bloque-wiseclimb-21-22-noviembre",
   "sec": "deportes",
   "hora": "19:12",
   "iso": "2026-11-12",
   "kicker": "Escalada",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8432/alcala-de-guadaira-acogera-la-ii-prueba-de-la-copa-de-andalucia-de-escalada-de-bloque",
   "title": "Alcalá acoge el 21 y 22 de noviembre la segunda prueba de la Copa de Andalucía de Escalada de Bloque",
   "sub": "La competición se celebra en Wiseclimb, la organiza el CD Climbing Canyon con la federación andaluza y las inscripciones cierran el lunes 16 a las 23.59",
   "caption": "Cartel de la II prueba de la Copa de Andalucía de Escalada de Bloque en Alcalá.",
   "foto": "copa-andalucia-escalada-bloque-wiseclimb-21-22-n-cartel-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "Las instalaciones de Wiseclimb, en Alcalá, acogen el sábado 21 y el domingo 22 de noviembre la II Prueba de la Copa de Andalucía de Escalada de Bloque.",
    "Está abierta a todas las categorías, desde sub-9 hasta absoluta, y la organiza el CD Climbing Canyon junto a la FADMES.",
    "Para optar al podio y sumar puntos en la clasificación hace falta licencia federativa anual de la FADMES o de la FEDME.",
    "Las inscripciones, individuales o por grupos, se cierran el lunes 16 de noviembre a las 23.59."
   ],
   "body": [
    "Alcalá de Guadaíra será sede el fin de semana del 21 y 22 de noviembre de la segunda prueba de la Copa de Andalucía de Escalada de Bloque. La competición se disputa en las instalaciones de Wiseclimb y reunirá a escaladores de todas las categorías, desde sub-9 hasta absoluta, según ha informado el portal deportivo municipal.",
    "La organiza el Club Deportivo Climbing Canyon, bajo la supervisión de Emilio Acosta Granados, con la Federación Andaluza de Deportes de Montaña, Escalada y Senderismo (FADMES). La escalada de bloque se practica sobre paredes de poca altura, sin cuerda y con colchonetas en el suelo, y la Copa de Andalucía la forman varias pruebas que suman puntos en una clasificación acumulada.",
    "## Licencias y documentación",
    "Para subir al podio y puntuar en la clasificación general es obligatorio tener en vigor la licencia federativa anual de la FADMES o de la Federación Española de Deportes de Montaña y Escalada (FEDME). Quienes tengan licencia de medio año o de un día de la FADMES pueden participar, pero sin opción a podio ni a puntos.",
    "Los participantes menores de edad deben aportar la licencia, el DNI, la autorización firmada del padre, la madre o el tutor y una copia del DNI de quien firma. Los mayores de edad, la licencia, el DNI y el consentimiento informado firmado. Si la documentación no se adjunta al hacer la inscripción, se puede enviar al correo de la organización.",
    "<span class='howto'><b>Cómo inscribirse.</b> Fechas: sábado 21 y domingo 22 de noviembre. Lugar: Wiseclimb, Alcalá de Guadaíra. Inscripción: individual o por grupos, mediante los formularios enlazados en la <a href='https://www.alcalamasdeporte.com/noticias/8432/alcala-de-guadaira-acogera-la-ii-prueba-de-la-copa-de-andalucia-de-escalada-de-bloque'>noticia de Alcalá+Deporte</a>, hasta el lunes 16 de noviembre a las 23.59. Documentación: compeswise@gmail.com.</span>"
   ],
   "seo": [
    "copa-andalucia-escalada-bloque-alcala-wiseclimb",
    "Copa de Andalucía de Escalada de Bloque en Alcalá",
    "Wiseclimb acoge en Alcalá de Guadaíra el 21 y 22 de noviembre la II Prueba de la Copa de Andalucía de Escalada de Bloque. Inscripciones hasta el lunes 16.",
    [
     "Alcalá de Guadaíra",
     "escalada",
     "escalada de bloque",
     "Copa de Andalucía",
     "FADMES",
     "Wiseclimb",
     "CD Climbing Canyon"
    ]
   ],
   "elaboracion": "ia",
   "encuadre": "contain"
  },
  {
   "id": "concurso-exposicion-palomas-raza-hienipa-25-29-noviembre",
   "sec": "deportes",
   "hora": "19:12",
   "iso": "2026-11-12",
   "kicker": "Colombicultura",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8433/alcala-de-guadaira-acogera-el-xvii-concurso-exposicion-local-de-palomas-de-raza",
   "title": "El CD Hienipa organiza del 25 al 29 de noviembre el XVII Concurso-Exposición de Palomas de Raza",
   "sub": "Las aves podrán verse en las instalaciones de la avenida de Portugal el viernes 27, el sábado 28 y el domingo 29, día de la entrega de premios",
   "caption": "Cartel del XVII Concurso-Exposición Local de Palomas de Raza.",
   "foto": "concurso-exposicion-palomas-raza-hienipa-25-29-n-cartel-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "El Club Deportivo de Colombicultura Hienipa celebra del 25 al 29 de noviembre el XVII Concurso-Exposición Local de Palomas de Raza.",
    "La exposición abre al público el viernes 27 por la tarde, el sábado 28 en horario de mañana y tarde y el domingo 29 por la mañana.",
    "El domingo 29 se entregan los premios y se clausura el concurso, que se celebra en la avenida de Portugal."
   ],
   "body": [
    "Las palomas de raza vuelven a tener su escaparate en Alcalá de Guadaíra. El Club Deportivo de Colombicultura Hienipa celebra del 25 al 29 de noviembre el XVII Concurso-Exposición Local de Palomas de Raza en sus instalaciones de la avenida de Portugal, sin número, y los vecinos podrán visitar la muestra durante el último fin de semana del mes.",
    "El concurso arranca el miércoles 25 con la recepción de los ejemplares que presentan los criadores. El jueves 26 los jueces valoran las aves y, a partir del viernes, la exposición abre sus puertas al público.",
    "## Horarios de visita",
    "La muestra podrá verse el viernes 27 de noviembre de 17.00 a 21.00; el sábado 28, de 10.30 a 14.00 y de 17.00 a 21.30, y el domingo 29, de 10.00 a 13.00. Ese mismo domingo se celebra la clausura, con la entrega de premios, y los criadores recogen sus ejemplares.",
    "El concurso cuenta con la colaboración del Ayuntamiento de Alcalá de Guadaíra, la Federación Andaluza de Colombicultura, la Junta de Andalucía y varias entidades y empresas, según ha informado el portal deportivo municipal Alcalá+Deporte.",
    "<span class='howto'><b>Visitar la exposición.</b> Lugar: instalaciones del CD Colombicultura Hienipa, avenida de Portugal, s/n. Horario: viernes 27, de 17.00 a 21.00; sábado 28, de 10.30 a 14.00 y de 17.00 a 21.30; domingo 29, de 10.00 a 13.00. Entrega de premios: domingo 29.</span>"
   ],
   "seo": [
    "concurso-exposicion-palomas-raza-alcala-hienipa",
    "XVII Concurso-Exposición de Palomas de Raza en Alcalá",
    "El CD Colombicultura Hienipa celebra del 25 al 29 de noviembre en Alcalá de Guadaíra el XVII Concurso-Exposición Local de Palomas de Raza, con visitas.",
    [
     "Alcalá de Guadaíra",
     "colombicultura",
     "palomas de raza",
     "CD Hienipa",
     "exposición",
     "avenida de Portugal"
    ]
   ],
   "elaboracion": "ia",
   "encuadre": "contain"
  },
  {
   "id": "temporal-cierre-parques-instalaciones-deportivas-11-noviembre",
   "sec": "alcala",
   "kicker": "Temporal",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8431/aviso-meteorologico-|-cierre-de-instalaciones-deportivas",
   "title": "Alcalá cierra hoy sus parques todo el día y las instalaciones deportivas desde las 14.00 por el temporal",
   "sub": "El Ayuntamiento pide evitar los desplazamientos innecesarios entre las 16.00 y las 20.00 por las lluvias intensas y las fuertes rachas de viento",
   "caption": "Aviso municipal de cierre de parques e instalaciones deportivas del 11 de noviembre.",
   "foto": "temporal-cierre-parques-instalaciones-deportivas-cartel-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "Los parques y jardines de Alcalá de Guadaíra permanecen cerrados durante todo el miércoles 11 de noviembre.",
    "Las instalaciones deportivas municipales, cubiertas y al aire libre, cierran desde las 14.00 hasta las 23.59.",
    "El Ayuntamiento recomienda evitar los desplazamientos innecesarios entre las 16.00 y las 20.00.",
    "Las medidas responden a los avisos amarillo y naranja por lluvias intensas y fuertes rachas de viento previstos para hoy."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha cerrado este miércoles, 11 de noviembre, todos los parques y jardines de la ciudad durante la jornada completa, y cerrará las instalaciones deportivas municipales desde las 14.00 hasta las 23.59, por los avisos amarillo y naranja de lluvias intensas y fuertes rachas de viento previstos para hoy.",
    "Según ha informado el portal municipal de deportes, Alcalá+Deporte, el cierre de las instalaciones afecta tanto a las cubiertas como a las que están al aire libre, por lo que los entrenamientos y las actividades programadas para la tarde y la noche en los recintos municipales quedan suspendidos. El Ayuntamiento justifica la decisión en la necesidad de garantizar la seguridad de la ciudadanía y agradece la comprensión de los usuarios y de los clubes deportivos.",
    "La recomendación municipal más concreta se refiere a la tarde: el Ayuntamiento pide evitar los desplazamientos que no sean necesarios entre las 16.00 y las 20.00. También aconseja extremar la precaución en las zonas arboladas y ajardinadas, por las posibles incidencias del viento, y seguir en todo momento las indicaciones de las autoridades.",
    "<span class='howto'><b>Qué hacer hoy en Alcalá.</b> Parques y jardines: cerrados todo el día. Instalaciones deportivas municipales: cerradas de 14.00 a 23.59. Evite desplazarse sin necesidad de 16.00 a 20.00. Extreme la precaución en las zonas con árboles. Ante una emergencia, llame al 112.</span>",
    "Los clubes y usuarios que tenían previsto usar las instalaciones municipales esta tarde deben contar con que permanecerán cerradas hasta el final del día. El Ayuntamiento no ha indicado si las actividades suspendidas se recuperarán en otra fecha."
   ],
   "seo": [
    "temporal-alcala-cierre-parques-instalaciones-deportivas",
    "Temporal: Alcalá cierra parques e instalaciones deportivas",
    "Alcalá de Guadaíra cierra hoy los parques todo el día y las instalaciones deportivas de 14.00 a 23.59 por lluvias y viento; evite salir de 16.00 a 20.00.",
    [
     "temporal",
     "aviso naranja",
     "parques",
     "instalaciones deportivas",
     "Alcalá de Guadaíra",
     "lluvia",
     "viento"
    ]
   ],
   "iso": "2026-11-11",
   "hora": "10:35",
   "elaboracion": "ia",
   "encuadre": "contain"
  },
  {
   "id": "bop-bases-ayudas-comercios-pai-edil",
   "sec": "economia",
   "kicker": "Ayudas al comercio",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Bases-reguladoras-de-la-convocatoria-de-subvenciones-a-pymes-comercios-y-autonomos-para-proyectos-de-inversion-alineados-con-los-objetivos-de-PAI-y-EDIL/",
   "title": "El BOP publica las bases de las ayudas europeas para que pymes y autónomos de Alcalá modernicen sus negocios",
   "sub": "Las subvenciones, a fondo perdido y cofinanciadas al 85 % por el FEDER, se repartirán por concurrencia competitiva; la convocatoria con el importe y el plazo aún no se ha publicado",
   "caption": "Imagen de archivo.",
   "foto": "generica-economia.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "El BOP de Sevilla publica este miércoles las bases de las subvenciones municipales a pymes, comercios y autónomos que inviertan en mejorar sus negocios.",
    "Son ayudas a fondo perdido, en concurrencia competitiva y cofinanciadas al 85 % por el Fondo Europeo de Desarrollo Regional (FEDER).",
    "Solo pueden pedirlas los negocios situados en el ámbito del Plan de Actuación Integrado (PAI) y en los ejes colindantes que fije cada convocatoria.",
    "El Pleno aprobó las bases el 20 de octubre; para solicitar la ayuda hay que esperar a la convocatoria."
   ],
   "body": [
    "El Boletín Oficial de la Provincia de Sevilla publica este miércoles, 11 de noviembre, las <a href='https://bopsevilla.dipusevilla.es/export/sites/bop/.galleries/Documentos-BOPs-en-PDF/bop-11_11_2026-c7d8996d-dd02-11f1-9250-0050569ff69d-1794355264980.pdf'>bases reguladoras</a> de las subvenciones del Ayuntamiento de Alcalá de Guadaíra para pymes, comercios y autónomos que hagan inversiones para mejorar sus negocios. Es el paso previo a la convocatoria, que es la que abrirá el plazo para pedirlas.",
    "Las bases las aprobó el Pleno en su sesión ordinaria del 20 de octubre (expediente 14275/2026). Corresponden a la línea de ayudas al comercio con fondos europeos que el primer teniente de alcaldesa, Jesús Mora, <a href='#ayudas-comercios-calles-obras'>anunció a finales de octubre</a> en relación con los negocios de las calles afectadas por las obras de reurbanización.",
    "## Para qué son",
    "Según el texto publicado, las ayudas financian proyectos de inversión que modernicen, digitalicen o hagan más sostenibles o accesibles los establecimientos, o que mejoren los locales. Son a fondo perdido y se conceden en concurrencia competitiva, es decir, las solicitudes se puntúan y se reparten según esa puntuación.",
    "Pueden pedirlas los autónomos y las pequeñas y medianas empresas con actividad económica cuyo establecimiento esté dentro del ámbito del Plan de Actuación Integrado (PAI) de Alcalá. Las bases lo delimitan por secciones censales del INE (01002, 01003, 02001, 03001, 03002, 03003, 04001, 04008, 04015, 04019 y 04029) y añaden los ejes urbanos colindantes que delimite cada convocatoria. El anexo VIII recoge los epígrafes del IAE admitidos, entre ellos el comercio al por menor, la hostelería y los servicios.",
    "Quedan fuera los seguros, los gastos financieros, la compra de inmuebles, los gastos ordinarios de funcionamiento, el renting, el mantenimiento y las licencias de software, y la videovigilancia y las alarmas, salvo la ciberseguridad dentro de la línea de digitalización. Las inversiones deben estar hechas, facturadas y pagadas dentro del periodo que marque la convocatoria. Las ayudas se acogen al régimen de minimis, que limita a 300.000 euros en tres años las ayudas públicas de este tipo que puede recibir una empresa.",
    "## De dónde sale el dinero",
    "Las subvenciones están cofinanciadas al 85 % por el FEDER. Forman parte del PAI que el Ayuntamiento presentó a la convocatoria estatal de fondos europeos de 2024 y que una resolución del 16 de enero de 2026 dotó con 11.948.905 euros del FEDER, dentro de una inversión pública total de 14.057.535 euros repartida en tres proyectos: transformación urbana, natural e inclusiva.",
    "Las bases no fijan el importe total que se repartirá ni las fechas para solicitarlo: lo hará la convocatoria, cuyo extracto debe publicarse en el BOP a través de la Base de Datos Nacional de Subvenciones.",
    "<span class='howto'><b>Si tiene un negocio en el centro.</b> Compruebe si su local está en el ámbito del PAI y si su actividad figura en el anexo VIII de las bases. No pida todavía la ayuda: espere a que el BOP publique el extracto de la convocatoria, que abrirá el plazo. Las inversiones deben hacerse, facturarse y pagarse dentro del periodo que marque la convocatoria.</span>"
   ],
   "seo": [
    "bases-ayudas-comercios-pymes-autonomos-pai-edil-alcala",
    "Ayudas FEDER a comercios de Alcalá: el BOP publica las bases",
    "Alcalá de Guadaíra publica en el BOP las bases de las ayudas a fondo perdido para pymes y autónomos del ámbito del PAI, cofinanciadas al 85 % por el FEDER.",
    [
     "ayudas al comercio",
     "pymes",
     "autónomos",
     "FEDER",
     "PAI",
     "EDIL",
     "BOP de Sevilla",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-11",
   "hora": "10:35",
   "elaboracion": "ia"
  },
  {
   "id": "jornadas-prevencion-caidas-mayores-13-20-noviembre",
   "sec": "alcala",
   "kicker": "Mayores",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8430/alcala-de-guadaira-impulsa-unas-jornadas-gratuitas-para-prevenir-las-caidas-en-las-personas-mayores",
   "title": "Dos jornadas gratuitas enseñarán a las personas mayores de Alcalá ejercicios para prevenir caídas",
   "sub": "Las sesiones serán el 13 de noviembre en el Centro Cívico Distrito Sur y el 20 en el de Silos-Zacatín, abiertas a toda la ciudadanía y sin inscripción",
   "caption": "Cartel de las jornadas de ejercicio para prevenir caídas en las personas mayores.",
   "foto": "jornadas-prevencion-caidas-mayores-13-20-noviemb-cartel-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "El Ayuntamiento organiza dos jornadas gratuitas sobre ejercicio físico para prevenir caídas en las personas mayores.",
    "La primera será el viernes 13 de noviembre a las 11.15 en el Centro Cívico Distrito Sur y la segunda, el viernes 20 a las 11.00 en el Centro Cívico Silos-Zacatín.",
    "No hace falta inscribirse y pueden asistir todos los vecinos.",
    "Es el primer Ciclo de Jornadas Formativas para la Ciudadanía, coordinado por las delegaciones de Deportes y Participación Ciudadana."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra organiza dos jornadas gratuitas para enseñar a las personas mayores ejercicios que ayudan a prevenir caídas. La primera será el viernes 13 de noviembre, a las 11.15, en el Centro Cívico Distrito Sur, y la segunda, el viernes 20 de noviembre, a las 11.00, en el Centro Cívico Silos-Zacatín.",
    "La asistencia es libre y no requiere inscripción previa. Las sesiones llevan por título «Ejercicio para la prevención de caídas en la persona mayor» y forman parte del I Ciclo de Jornadas Formativas para la Ciudadanía, que coordinan las delegaciones municipales de Deportes y de Participación Ciudadana, según ha informado el portal municipal Alcalá+Deporte.",
    "El objetivo, según el Ayuntamiento, es que las personas mayores conozcan los beneficios de mantenerse activas y aprendan hábitos que reduzcan el riesgo de caerse. Las jornadas se centran en el ejercicio físico para ganar equilibrio, fuerza y autonomía personal, y en la confianza para las actividades de cada día, dentro de lo que el programa define como un envejecimiento activo, saludable y seguro. Aunque están pensadas para los mayores, las jornadas están abiertas a toda la ciudadanía.",
    "<span class='howto'><b>Cómo asistir.</b> Viernes 13 de noviembre, 11.15: Centro Cívico Distrito Sur. Viernes 20 de noviembre, 11.00: Centro Cívico Silos-Zacatín. Gratis, sin inscripción previa y abierto a todos los vecinos.</span>",
    "Las jornadas se suman a la oferta formativa para este colectivo en la ciudad, como el Aula Abierta de Mayores de la Universidad Pablo de Olavide, que arrancó su curso en octubre."
   ],
   "seo": [
    "jornadas-gratuitas-prevencion-caidas-mayores-alcala",
    "Jornadas gratis para prevenir caídas en mayores en Alcalá",
    "Alcalá de Guadaíra ofrece dos jornadas gratuitas de ejercicio para prevenir caídas en personas mayores, el 13 y el 20 de noviembre, sin inscripción.",
    [
     "personas mayores",
     "prevención de caídas",
     "envejecimiento activo",
     "centros cívicos",
     "Distrito Sur",
     "Silos-Zacatín",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-11",
   "hora": "10:35",
   "elaboracion": "ia",
   "encuadre": "contain"
  },
  {
   "id": "concurso-cancion-andaluza-iii-premios-4200-euros",
   "sec": "cultura",
   "kicker": "Convocatoria",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Extracto-num-224704-de-la-convocatoria-del-III-concurso-de-cancion-andaluza-BDNS-codigo-940693/",
   "title": "Abre el plazo del III Concurso de Canción Andaluza de Alcalá, con 4.200 euros en premios",
   "sub": "Pueden participar artistas con residencia en España y 16 años cumplidos; hay 20 días hábiles para inscribirse por la sede electrónica con dos vídeos",
   "caption": "Imagen de archivo.",
   "foto": "generica-cultura.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "El BOP de Sevilla publica este miércoles la convocatoria del III Concurso de Canción Andaluza del Ayuntamiento de Alcalá de Guadaíra.",
    "El primer premio es de 2.000 euros, el segundo de 1.000 y el tercero de 700; los otros cinco finalistas reciben 100 euros cada uno.",
    "El plazo es de 20 días hábiles desde el día siguiente a la publicación, es decir, a partir del jueves 12 de noviembre.",
    "La inscripción se hace en la sede electrónica con la solicitud, el DNI y el enlace a dos vídeos de actuaciones de los últimos tres años."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha convocado el III Concurso de Canción Andaluza, con 4.200 euros en premios. El <a href='https://bopsevilla.dipusevilla.es/export/sites/bop/.galleries/Documentos-BOPs-en-PDF/bop-11_11_2026-c7d8996d-dd02-11f1-9250-0050569ff69d-1794355264980.pdf'>extracto de la convocatoria</a> se publica este miércoles, 11 de noviembre, en el Boletín Oficial de la Provincia de Sevilla, y desde el día siguiente cuentan los 20 días hábiles de plazo para inscribirse.",
    "La Junta de Gobierno Local aprobó la convocatoria el 6 de noviembre. Las bases del concurso son las que aprobó el Pleno el 21 de octubre de 2025 y se publicaron en el BOP del 18 de noviembre de 2025. Lo organiza el Departamento de Cultura del Ayuntamiento.",
    "El concurso está abierto a artistas de cualquier nacionalidad que residan en España y tengan 16 años cumplidos al terminar el plazo. Si el participante es menor de edad, la solicitud debe ir firmada también por su madre, su padre o su tutor legal.",
    "Para inscribirse hay que presentar una instancia general en la sede electrónica municipal con el modelo de solicitud del anexo I, una copia del DNI y el enlace a dos vídeos de actuaciones propias, con dos temas libres y una antigüedad máxima de tres años.",
    "El concurso tiene tres fases. En la preliminar, el Departamento de Cultura visiona y valora los vídeos. De ahí salen los 20 artistas de las semifinales y, después, los ocho de la gran final. En cada fase, los participantes interpretan dos temas, y uno de ellos debe ser un pasodoble o un pasodoble-marcha.",
    "El jurado puntúa cinco criterios con hasta 20 puntos cada uno: voz y oído musical, interpretación, puesta en escena, dificultad del tema o composición propia, y vestuario. Lo preside la alcaldesa o el concejal en quien delegue y lo forman tres profesionales de la música; en la final se suma un concejal de la oposición. La Junta de Gobierno Local resuelve el concurso.",
    "El ganador recibe 2.000 euros; el segundo clasificado, 1.000, y el tercero, 700. Los otros cinco finalistas cobran 100 euros cada uno como premio de consolación. El pago se hará en un plazo de 20 días hábiles desde que la Junta de Gobierno apruebe el fallo. Las bases publicadas no fijan todavía las fechas de las semifinales y de la final.",
    "<span class='howto'><b>Cómo inscribirse.</b> Plazo: 20 días hábiles desde el jueves 12 de noviembre. Dónde: sede electrónica del Ayuntamiento de Alcalá de Guadaíra (instancia general). Documentos: solicitud del anexo I, DNI y enlace a dos vídeos de actuaciones de los últimos tres años. Menores de edad: firma también de madre, padre o tutor. Edad mínima: 16 años.</span>"
   ],
   "seo": [
    "iii-concurso-cancion-andaluza-alcala-guadaira-premios",
    "Concurso de Canción Andaluza de Alcalá: 4.200 € en premios",
    "Alcalá de Guadaíra convoca el III Concurso de Canción Andaluza: 2.000 euros al ganador y 20 días hábiles para inscribirse en la sede electrónica.",
    [
     "canción andaluza",
     "concurso",
     "copla",
     "pasodoble",
     "cultura",
     "BOP de Sevilla",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-11",
   "hora": "10:35",
   "elaboracion": "ia"
  },
  {
   "id": "adelante-andalucia-tranvia-retraso-explicaciones",
   "sec": "politica",
   "kicker": "Tranvía",
   "src": "El Panadero",
   "title": "Adelante Andalucía pide a la Junta una fecha definitiva para el tranvía de Alcalá",
   "sub": "La diputada Begoña Iza contrapone el anuncio de que funcionaría en 2026 con los 25,9 millones que reservan para el proyecto los presupuestos andaluces de 2027",
   "caption": "Visita a las obras de los talleres y cocheras del tranvía de Alcalá en agosto, en una imagen de archivo.",
   "foto": "tranvia-junta-presupuesto-2027-of.jpg",
   "fotocredito": "Junta de Andalucía",
   "claves": [
    "Adelante Andalucía exige a la Junta explicaciones y una fecha definitiva para la puesta en marcha del tranvía de Alcalá de Guadaíra.",
    "La diputada Begoña Iza recuerda que el Gobierno andaluz anunció que el tranvía funcionaría en 2026.",
    "El proyecto de presupuestos de la Junta para 2027 reserva unos 25,9 millones de euros para terminar las obras pendientes y poner en marcha el servicio.",
    "La formación pide un informe sobre el grado de ejecución, las obras pendientes, el destino de las partidas y un calendario actualizado."
   ],
   "body": [
    "Adelante Andalucía ha pedido a la Junta de Andalucía explicaciones y una fecha definitiva para la puesta en marcha del tranvía de Alcalá de Guadaíra, una obra para la que el proyecto de presupuestos andaluces de 2027 todavía reserva unos 25,9 millones de euros.",
    "La diputada de la formación Begoña Iza sostiene que el proyecto acumula un nuevo retraso, porque el Gobierno andaluz que preside Juanma Moreno anunció que el tranvía estaría funcionando en 2026 y sus presupuestos para 2027 siguen reservando dinero para terminarlo.",
    "Iza reclama a la Junta transparencia y responsabilidades por los retrasos. En concreto, pide a la Junta un informe sobre el grado de ejecución de los trabajos, las obras que quedan pendientes, el destino de las partidas presupuestarias y un calendario actualizado con la fecha en la que el tranvía empezará a dar servicio. La diputada acusa además al Gobierno andaluz de usar el tranvía como herramienta de propaganda política.",
    "Las críticas se apoyan en el proyecto de presupuestos de la Junta para 2027, que, como publicó El Panadero, <a href='#tranvia-presupuesto-junta-2027-25-millones'>reserva más de 25,9 millones de euros para el tranvía de Alcalá</a>. De esa cantidad, 15,7 millones son para terminar los talleres y cocheras y para el material rodante, y 10,25 millones, para la puesta en marcha del servicio.",
    "El desglose provincial de las cuentas no fija una fecha para el primer viaje con pasajeros. En agosto, durante una visita a las obras de los talleres y cocheras, la Junta situaba los trabajos pendientes en el 75 % de ejecución, dentro de unas obras de 178 millones de euros. El proyecto de presupuestos debe pasar todavía por el Parlamento de Andalucía."
   ],
   "seo": [
    "adelante-andalucia-tranvia-alcala-fecha-definitiva",
    "Adelante Andalucía pide fecha definitiva para el tranvía",
    "Adelante Andalucía pide a la Junta una fecha para el tranvía de Alcalá de Guadaíra, anunciado para 2026 y con 25,9 millones en las cuentas de 2027.",
    [
     "tranvía de Alcalá",
     "Adelante Andalucía",
     "Begoña Iza",
     "Junta de Andalucía",
     "presupuestos 2027",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-11",
   "hora": "10:35",
   "elaboracion": "ia"
  },
  {
   "id": "mesa-capacidades-diez-anos-gala",
   "sec": "alcala",
   "kicker": "Inclusión",
   "src": "El Panadero",
   "title": "La Mesa de las Capacidades celebra diez años de trabajo por la inclusión en Alcalá",
   "sub": "La gala del aniversario reunió a usuarios, familias y entidades con teatro, música y baile, y reconoció a cinco colectivos que colaboran con la Mesa",
   "caption": "Imagen de archivo.",
   "foto": "generica-alcala.jpg",
   "fotocredito": "Archivo El Panadero",
   "claves": [
    "La Mesa de las Capacidades de Alcalá de Guadaíra ha celebrado su décimo aniversario con una gala organizada junto al Ayuntamiento.",
    "La forman la Delegación de Servicios Sociales y once entidades que trabajan por la inclusión.",
    "La gala reconoció al Centro de Mayores Luis Velázquez Peña, al Club de Petanca Águila, al IES Doña Leonor de Guzmán, a APACOAL y a la Asociación de Fibromialgia de Alcalá."
   ],
   "body": [
    "La Mesa de las Capacidades de Alcalá de Guadaíra ha cumplido diez años y lo ha celebrado con una gala organizada junto al Ayuntamiento, que reunió a usuarios, familias y entidades. El acto combinó teatro, música, baile y vídeos, con muestras del trabajo de los participantes en deporte, música, baile, teatro y creación digital.",
    "La Mesa de las Capacidades agrupa a la Delegación municipal de Servicios Sociales y a once entidades: la Asociación Alcalareña de Educación Especial, Autismo Sevilla, ASAENES, la Fundación Centro Girasol, Molinos del Guadaíra, PROLAYA, el Centro Educativo San Juan de Dios, Planeta Propio, Paz y Bien, Te-NACES y ZALO. Todas comparten el trabajo por la inclusión en la ciudad.",
    "Durante la gala, la Mesa entregó reconocimientos a cinco colectivos que han colaborado con ella en estos años: el Centro de Mayores Luis Velázquez Peña, el Club de Petanca Águila, el IES Doña Leonor de Guzmán, la Asociación Coronaria APACOAL y la Asociación de Fibromialgia de Alcalá.",
    "Al acto asistieron la alcaldesa, Ana Isabel Jiménez, y la delegada de Servicios Sociales, Rocío Bastida. En su intervención, la alcaldesa resumió la década de la Mesa como el resultado de «el esfuerzo de cientos de personas, la dedicación de muchas horas, los pequeños logros de cada día»."
   ],
   "seo": [
    "mesa-de-las-capacidades-alcala-diez-anos-inclusion",
    "La Mesa de las Capacidades cumple diez años en Alcalá",
    "La Mesa de las Capacidades de Alcalá de Guadaíra celebra su décimo aniversario con una gala y reconoce a cinco colectivos que colaboran con la inclusión.",
    [
     "Mesa de las Capacidades",
     "inclusión",
     "discapacidad",
     "Servicios Sociales",
     "entidades sociales",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-11",
   "hora": "10:35",
   "elaboracion": "ia"
  },
  {
   "id": "cd-qalat-copa-diputacion-granada-kickboxing-siete-medallas",
   "sec": "deportes",
   "kicker": "Kickboxing",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8429/el-cd-qalat-destaca-en-la-copa-diputacion-de-granada-de-kickboxing-con-siete-medallas",
   "title": "El CD Qalat vuelve de la Copa Diputación de Granada de Kickboxing con siete medallas",
   "sub": "Los cuatro deportistas del club alcalareño suman dos oros, cuatro platas y un bronce en las modalidades de Kick Light, Light Contact y K1 Light",
   "caption": "Deportistas del CD Qalat con sus medallas de la Copa Diputación de Granada de Kickboxing.",
   "foto": "cd-qalat-copa-diputacion-granada-kickboxing-siet-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "El CD Qalat, club de Alcalá de Guadaíra, ha conseguido siete medallas en la Copa Diputación de Granada de Kickboxing: dos de oro, cuatro de plata y una de bronce.",
    "Jesús López ganó el oro en K1 Light y Adrián Sarria, el oro en Kick Light y el bronce en Light Contact.",
    "Antonio Muñoz y Adrián Yoel lograron dos platas cada uno."
   ],
   "body": [
    "El CD Qalat, club de kickboxing de Alcalá de Guadaíra, ha regresado de la Copa Diputación de Granada con siete medallas: dos de oro, cuatro de plata y una de bronce, repartidas entre los cuatro deportistas que compitieron en el torneo, según ha informado el portal municipal Alcalá+Deporte.",
    "Jesús López se proclamó campeón en K1 Light. Adrián Sarria también subió a lo más alto del podio en Kick Light y sumó además un bronce en Light Contact.",
    "Antonio Muñoz se colgó dos medallas de plata, en Kick Light y en Light Contact, después de disputar cinco combates. Muñoz compite actualmente con el Club Élite Salamanca durante su estancia de Erasmus. Adrián Yoel completó el medallero con otras dos platas, en K1 Light y en Kick Light.",
    "<span class='howto'><b>El medallero del CD Qalat en Granada.</b> Jesús López: oro en K1 Light. Adrián Sarria: oro en Kick Light y bronce en Light Contact. Antonio Muñoz: plata en Kick Light y plata en Light Contact. Adrián Yoel: plata en K1 Light y plata en Kick Light. Total: 2 oros, 4 platas y 1 bronce.</span>",
    "El club agradeció el trabajo de Rafa Martínez y Diogo, que acompañaron a los deportistas en Granada, por su orientación y su apoyo durante la competición."
   ],
   "seo": [
    "cd-qalat-kickboxing-copa-diputacion-granada-medallas",
    "El CD Qalat logra siete medallas de kickboxing en Granada",
    "El CD Qalat de Alcalá de Guadaíra suma dos oros, cuatro platas y un bronce en la Copa Diputación de Granada de Kickboxing con cuatro de sus deportistas.",
    [
     "CD Qalat",
     "kickboxing",
     "Copa Diputación de Granada",
     "K1 Light",
     "Kick Light",
     "Light Contact",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-11",
   "hora": "10:35",
   "elaboracion": "ia",
   "encuadre": "contain"
  },
  {
   "id": "ies-hienipa-ciclo-construccion-alcala",
   "sec": "alcala",
   "kicker": "Educación",
   "hora": "07:20",
   "iso": "2026-11-05",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=_YcQqQeWcI4&t=5s",
   "title": "El IES Hienipa forma en Alcalá a futuros técnicos de construcción con prácticas en el centro y en obra",
   "sub": "El ciclo de grado medio, en modalidad dual, busca dar relevo a un sector con escasez de albañiles jóvenes",
   "caption": "Alumnado del ciclo de Técnico en Construcción durante una clase en el IES Hienipa de Alcalá de Guadaíra.",
   "foto": "hienipa-construccion-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El IES Hienipa de Alcalá de Guadaíra imparte desde el curso pasado el ciclo de grado medio de Técnico en Construcción.",
    "La formación es dual: una parte se cursa en el centro, con teoría y práctica en un aula taller, y otra en empresas del sector.",
    "El equipo docente atribuye la demanda a la jubilación de los albañiles de mayor edad y a la falta de relevo.",
    "El ciclo apenas tiene alumnas: las dos matriculadas en dos cursos lo dejaron por la distancia y el transporte."
   ],
   "body": [
    "El IES Hienipa de Alcalá de Guadaíra imparte desde el curso pasado el ciclo formativo de grado medio de Técnico en Construcción, una titulación que, según su equipo docente, responde a la demanda de las empresas del sector, que buscan relevo para los albañiles que se jubilan. El ciclo se cursa en modalidad dual: los alumnos combinan las clases en el centro con la formación en empresas.",
    "María Luisa Jiménez, del equipo docente del ciclo, explicó a El Panadero que cada vez hay más demanda de empresas y de jóvenes. Según detalló, el oficio ha cambiado: hay más herramientas y medios auxiliares, la prevención ha reducido los accidentes y el convenio de la construcción ofrece, en sus palabras, buenos sueldos. Con ese cambio, señaló, alumnos de unos 16 años empiezan a interesarse por la formación.",
    "## Teoría, taller y empresa",
    "La mayoría de los alumnos ha terminado la ESO y alguno viene de otro grado medio. También hay algún caso de en torno a 30 años. Al terminar pueden dar el salto a un grado superior o a la universidad. Este curso, los de primer año estudian solado, chapado y alicatado, y el plan reparte las horas entre contenidos teóricos, como materiales, cálculo de medidas y estructuras, y prácticas en el aula taller.",
    "Esas prácticas sirven también para mejorar el propio instituto. El curso pasado los alumnos levantaron un muro de contención para un huerto y este año el equipo prepara nuevas mejoras. El aula taller recibe además a empresas que dan clases: Jiménez citó a Isidoro Gordillo, de Morón, que presentó cal artesanal. Cuando hacen la formación en la empresa, los estudiantes siguen siendo alumnos, no trabajadores, y no realizan tareas de riesgo. El centro los lleva también a obras cercanas, entre ellas de Grupo Recio, y a proveedores de pintura y materiales de construcción.",
    "## Pocas alumnas y nuevas tendencias",
    "El ciclo tiene un déficit de alumnas. Según Jiménez, el curso pasado se matriculó una chica y este año otra, pero las dos dejaron de asistir por la distancia y el transporte. El equipo docente trabaja, dijo, para atraer a más mujeres, y subraya que la obra ofrece oficios para todo tipo de personas.",
    "Jiménez señaló dos tendencias del sector que el ciclo quiere incorporar: la sostenibilidad, para reducir residuos y consumo de combustible, y la industrialización, con más elementos prefabricados que abaratan costes y mejoran la calidad. Citó también la bioconstrucción, con materiales sostenibles y de cercanía. Para el centro, el alumnado debe aspirar a ser «albañiles 4.0», con herramientas digitales, materiales nuevos y una base técnica apoyada en la normativa.",
    "El instituto utiliza Instagram y TikTok para dar a conocer el ciclo y para contactar con profesionales y empresas que trabajan con materiales novedosos."
   ],
   "seo": [
    "ies-hienipa-ciclo-tecnico-construccion-alcala",
    "IES Hienipa: ciclo de Técnico en Construcción en Alcalá",
    "El IES Hienipa de Alcalá de Guadaíra imparte el grado medio de Técnico en Construcción en modalidad dual, con prácticas en el centro y en empresas.",
    [
     "IES Hienipa",
     "Técnico en Construcción",
     "FP dual",
     "formación profesional",
     "Alcalá de Guadaíra",
     "construcción",
     "empleo"
    ]
   ]
  },
  {
   "id": "relanza-t-primera-jornada-activacion-empleo",
   "sec": "economia",
   "kicker": "Empleo",
   "hora": "07:20",
   "iso": "2026-11-05",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9968/relanza-t-reune-a-mas-de-120-personas-en-la-primera-de-sus-cuatro-jornadas-de-activacion-para-el-empleo",
   "title": "RELANZA-T reúne a más de 120 personas en la primera de sus cuatro Jornadas de Activación para el Empleo",
   "sub": "La segunda cita será el 20 de noviembre en el Auditorio Riberas del Guadaíra, y habrá otras dos en febrero y marzo",
   "caption": "Asistentes a la primera Jornada de Activación para el Empleo del programa RELANZA-T.",
   "foto": "relanza-t-primera-jornada-activacion-empleo-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "Más de 120 personas participaron el 3 de noviembre en la primera Jornada de Activación para el Empleo de RELANZA-T, en el Auditorio Riberas del Guadaíra.",
    "El ciclo tiene cuatro jornadas: 3 de noviembre, 20 de noviembre, 10 de febrero y 12 de marzo.",
    "RELANZA-T beneficia a 800 personas con más de 60 itinerarios formativos y una financiación aproximada de 5,7 millones de euros.",
    "El Fondo Social Europeo Plus cofinancia el 85 % del proyecto."
   ],
   "body": [
    "Más de 120 personas participaron el 3 de noviembre en la primera de las cuatro Jornadas de Activación para el Empleo que organiza el Ayuntamiento de Alcalá de Guadaíra dentro del proyecto RELANZA-T. El encuentro, celebrado en el Auditorio Riberas del Guadaíra, se dirige principalmente a quienes cursan los itinerarios formativos del programa.",
    "La jornada se tituló «Activación, motivación, competencias y bienestar». Incluyó una conferencia inicial, «Trabajar de “lo que sea” no es un plan», y cuatro talleres prácticos sobre motivación, autoconocimiento, gestión de la adversidad y descubrimiento del talento.",
    "## Para qué sirven las jornadas",
    "Según la delegada de Empleo, Paula Fuster, la iniciativa busca complementar la formación del programa con herramientas y experiencias que ayuden a afrontar la búsqueda de empleo, reconocer capacidades y mejorar las oportunidades de incorporación al mercado laboral. El Ayuntamiento destaca el peso de las competencias transversales en los procesos de selección. Las jornadas también quieren favorecer el contacto entre participantes, empresas formadoras y entidades colaboradoras del proyecto.",
    "Las actividades se desarrollan sobre todo en el hall del Auditorio Riberas del Guadaíra, y algunos talleres usan aulas del recinto.",
    "## El proyecto RELANZA-T",
    "RELANZA-T es el proyecto de empleabilidad del Ayuntamiento, que según el propio consistorio beneficia a 800 personas con más de 60 itinerarios formativos en profesiones de alta demanda laboral. Cuenta con una financiación aproximada de 5,7 millones de euros procedentes del Ministerio de Política Territorial, cofinanciados en un 85 % por el Fondo Social Europeo Plus (FSE+) y por el Ayuntamiento. El Panadero informó de la apertura de plazo de su tercera convocatoria de cursos, que cerró el 30 de octubre.",
    "<span class='howto'>Próximas jornadas: 20 de noviembre, «Marca personal, talento y oportunidades»; 10 de febrero, «Gestión emocional, resiliencia y autocuidado»; y 12 de marzo, «Empleo, networking y contacto con empresas». Todas cuentan con conferencias y talleres prácticos. El Ayuntamiento no ha detallado si las jornadas están abiertas a personas ajenas a los itinerarios.</span>"
   ],
   "seo": [
    "relanza-t-jornadas-activacion-empleo-alcala",
    "RELANZA-T: primera jornada de activación para el empleo",
    "Más de 120 personas participaron en la primera de las cuatro Jornadas de Activación para el Empleo de RELANZA-T, en el Auditorio Riberas del Guadaíra.",
    [
     "RELANZA-T",
     "empleo Alcalá",
     "Paula Fuster",
     "Auditorio Riberas del Guadaíra",
     "Fondo Social Europeo Plus",
     "formación para el empleo"
    ]
   ]
  },
  {
   "id": "juegos-la-paz-211000-euros-cuatro-meses",
   "sec": "alcala",
   "kicker": "Hábitat Urbano",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=v7p_hxeczsU&t=560s",
   "title": "El Ayuntamiento renueva los juegos infantiles de La Paz con una inversión de 211.000 euros",
   "sub": "La zona junto a la calle Doctor Marañón estrena juegos accesibles, nuevo cerramiento y suelo de caucho continuo; abrirá «en pocos días», según el gobierno municipal",
   "caption": "Zona de juegos infantiles renovada en la barriada de La Paz, junto a la calle Doctor Marañón.",
   "foto": "juegos-la-paz-obras-2026.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha renovado el área de juegos infantiles de la barriada de La Paz, junto a la calle Doctor Marañón.",
    "El proyecto cuenta con una inversión de 211.000 euros y un plazo de ejecución previsto de cuatro meses.",
    "La obra incluye nuevos juegos, entre ellos elementos accesibles, nuevo cerramiento y pavimento de caucho continuo en las zonas de impacto.",
    "El Ayuntamiento prevé abrir la zona a los vecinos en pocos días, cuando terminen los últimos detalles y se certifique la instalación."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha renovado el área de juegos infantiles de la barriada de La Paz, situada junto a la calle Doctor Marañón, con una inversión de 211.000 euros y un plazo de ejecución previsto de cuatro meses. La alcaldesa, Ana Isabel Jiménez, ha visitado las instalaciones, según informó el Ayuntamiento el 4 de noviembre de 2026; el gobierno municipal prevé abrirlas «en pocos días».",
    "La visita contó también con el delegado de Hábitat Urbano, David Delgado, y la delegada responsable del Distrito Norte, Abril Castillo. Según el Ayuntamiento, los trabajos terminan estos días y falta ultimar detalles y certificar la instalación para comprobar que cumple la normativa específica de seguridad de las áreas de juego.",
    "## Qué se ha hecho en la zona",
    "La actuación ha consistido en desmontar los elementos de juego y el cerramiento anteriores, renovar el pavimento, que estaba deteriorado, e instalar juegos nuevos y un cerramiento nuevo. Las zonas de impacto, donde puede haber caídas, se rematan con pavimento continuo de caucho, una superficie pensada para amortiguar los golpes. Entre los juegos hay elementos accesibles, que permiten que niños con distintas capacidades puedan usarlos.",
    "El espacio incluye además una zona verde con áreas de césped. Según explicó el Ayuntamiento durante la visita, el proyecto se planteó consultando antes a los vecinos del entorno sobre qué necesidades tenían, y se buscó un espacio que pudiera usarse a todas las edades en una barriada donde viven muchas personas mayores, jóvenes y niños.",
    "## Parte de un plan en los cuatro distritos",
    "La renovación de La Paz se enmarca en el plan municipal de renovación de las áreas infantiles, que el Ayuntamiento presentó con una inversión total de 400.000 euros repartida en 49 espacios de ocio de los cuatro distritos de la ciudad. El Ayuntamiento no ha detallado cuánto se destina a cada una de las demás zonas.",
    "La alcaldesa defendió que estas actuaciones responden al trabajo «en pro del bienestar, la cohesión social, la convivencia familiar y vecinal» y a las peticiones de los vecinos sobre sus barrios. También sostuvo que las zonas de juegos tienen «un elevado contenido lúdico» y están diseñadas para estimular la imaginación infantil y contribuir al desarrollo físico y mental de los niños.",
    "La renovación de La Paz sigue a otras ya realizadas con el mismo plan, como la nueva área de juegos de la plaza junto al Centro Cívico Medina de Haro o la ampliación de elementos infantiles en la Plaza del Rey, según comunicó el propio Ayuntamiento.",
    "<span class='howto'>Dónde y cuándo: área de juegos de la barriada de La Paz, junto a la calle Doctor Marañón. El Ayuntamiento prevé abrirla en los próximos días; no ha dado una fecha concreta.</span>"
   ],
   "seo": [
    "juegos-infantiles-la-paz-alcala-renovacion",
    "Juegos infantiles de La Paz, Alcalá: 211.000 € de obra",
    "El Ayuntamiento de Alcalá de Guadaíra renueva el parque infantil de La Paz, junto a Doctor Marañón, con 211.000 euros de inversión y cuatro meses de plazo.",
    [
     "La Paz",
     "juegos infantiles",
     "Hábitat Urbano",
     "Ana Isabel Jiménez",
     "David Delgado",
     "Distrito Norte"
    ]
   ]
  },
  {
   "id": "paro-octubre-2026-alcala-5941",
   "sec": "economia",
   "kicker": "Empleo",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=v7p_hxeczsU&t=128s",
   "title": "El paro baja en octubre en Alcalá a 5.941 personas, un 11,8 % menos que hace un año",
   "sub": "La ciudad registra cinco parados menos que en septiembre y 798 menos que en octubre de 2025; las mujeres suman el 64 % del desempleo",
   "caption": "Viandantes junto a un comercio de Alcalá de Guadaíra, en una imagen de archivo.",
   "foto": "paro-octubre-2026-alcala-5941-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Alcalá de Guadaíra cerró octubre de 2026 con 5.941 personas paradas registradas, cinco menos que en septiembre (5.946).",
    "En un año el paro ha bajado en 798 personas, un 11,8 %, desde las 6.739 de octubre de 2025.",
    "Las mujeres suman 3.819 paradas frente a 2.122 hombres, algo más del 64 % del total.",
    "El descenso interanual de Alcalá supera el de la provincia de Sevilla (9,8 %) y el de Andalucía (10,5 %)."
   ],
   "body": [
    "Alcalá de Guadaíra terminó octubre de 2026 con 5.941 personas paradas registradas, cinco menos que en septiembre, cuando la cifra era de 5.946. En comparación con octubre de 2025, el paro ha bajado en 798 personas, un 11,8 %, desde las 6.739 de hace un año. El descenso supera al de la provincia de Sevilla y al de Andalucía.",
    "El dato mensual es un descenso muy leve. Pesa más la comparación anual: en los últimos doce meses el desempleo de la ciudad se ha reducido a un ritmo superior al de su entorno, según las cifras de paro registrado de octubre.",
    "## Más paro femenino que masculino",
    "Por sexos, el desempleo sigue afectando más a las mujeres. En octubre había 3.819 mujeres paradas frente a 2.122 hombres, lo que significa que ellas representan algo más del 64 % del total, casi dos de cada tres personas desempleadas.",
    "## Evolución a lo largo del año",
    "Desde enero de 2026, cuando Alcalá contaba con 6.711 personas paradas, el paro ha bajado en 770 personas, aproximadamente un 11,5 %. La cifra más baja de este periodo se registró en julio, con 5.919 personas. Después hubo un ligero repunte en agosto y septiembre, y en octubre volvió a bajar. El Panadero ya informó a finales de octubre de que la ciudad se mantenía por debajo de los 6.000 parados.",
    "Las estadísticas recogen además 9.208 demandantes de empleo en octubre. De ellos, 6.520 son demandantes no ocupados, es decir, personas que buscan trabajo y no tienen empleo. La cifra de demandantes es superior a la de parados registrados.",
    "## Comparación con Sevilla y Andalucía",
    "En la provincia de Sevilla hay 131.745 personas paradas, 14.340 menos que hace un año, lo que supone un descenso del 9,8 %. En el conjunto de Andalucía son 539.041 desempleados frente a los 602.262 de octubre de 2025: 63.221 menos, un 10,5 % de reducción. Con un 11,8 %, Alcalá mejora la evolución de ambos territorios en el último año.",
    "<span class='howto'>Resumen de octubre de 2026 en Alcalá: 5.941 parados (septiembre: 5.946; octubre de 2025: 6.739); 3.819 mujeres y 2.122 hombres; 9.208 demandantes de empleo, 6.520 de ellos no ocupados.</span>"
   ],
   "seo": [
    "paro-octubre-2026-alcala-de-guadaira",
    "Paro en Alcalá: 5.941 personas en octubre de 2026",
    "El paro baja en Alcalá de Guadaíra a 5.941 personas en octubre de 2026, 798 menos que hace un año (-11,8 %), por encima de la caída de Sevilla y Andalucía.",
    [
     "paro registrado",
     "Alcalá de Guadaíra",
     "empleo",
     "octubre 2026",
     "paro femenino",
     "Andalucía"
    ]
   ]
  },
  {
   "id": "oromana-vandalismo-iluminacion-camino",
   "sec": "alcala",
   "kicker": "Medio Ambiente",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9972/medio-ambiente-denuncia-danos-por-vandalismo-en-el-nuevo-sistema-de-iluminacion-del-camino-de-oromana",
   "title": "Medio Ambiente denuncia destrozos en las luces a ras de suelo del Camino de Oromana",
   "sub": "El Ayuntamiento ha dado traslado a la Policía Local para investigar la autoría y estudia instalar videovigilancia en el parque de ribera",
   "caption": "Una de las balizas de iluminación dañadas en el Camino de Oromana.",
   "foto": "oromana-vandalismo-iluminacion-camino-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "La Delegación de Medio Ambiente denuncia destrozos en varios báculos de luz a ras de suelo del sendero entre la Pasarela de San Juan y la Casa del Guarda.",
    "El Ayuntamiento ha trasladado a la Policía Local el informe de daños para que investigue la autoría y refuerce la vigilancia.",
    "Según el Ayuntamiento, repondrá los elementos dañados «a la mayor brevedad».",
    "El gobierno municipal se plantea instalar un sistema de videovigilancia y reforzar la vigilancia con el dron de la Policía Local."
   ],
   "body": [
    "La Delegación de Monumento Natural, Medio Ambiente y Sostenibilidad del Ayuntamiento de Alcalá de Guadaíra ha denunciado este miércoles 4 de noviembre de 2026 actos vandálicos en el nuevo sistema de iluminación del Camino de Oromana. Los destrozos afectan a pequeños báculos instalados a ras de suelo que iluminan el sendero desde la Pasarela de San Juan.",
    "La delegada, María Luisa Campos, ha trasladado el informe completo de daños a la Policía Local para que se investigue quién los ha causado y se refuerce la vigilancia en esta zona del parque de ribera. El Ayuntamiento no ha detallado cuántos báculos están dañados ni el coste de la reparación.",
    "## Un alumbrado estrenado este verano",
    "Según el Ayuntamiento, los destrozos han afectado a varios de los soportes de luminarias que dan luz al sendero desde la Pasarela hasta la Casa del Guarda. Este sistema se puso en funcionamiento este verano para facilitar las visitas nocturnas a esta parte del Monumento Natural, que por primera vez puede visitarse de noche gracias a esta dotación, según la delegación.",
    "## Qué va a hacer el Ayuntamiento",
    "Campos ha explicado que los elementos dañados se repondrán «a la mayor brevedad» para mantener un alumbrado que, según la delegada, da seguridad y hace más accesible este punto del Monumento Natural. «No tiene sentido y, por supuesto, no vamos a consentir que estos destrozos queden indemnes», ha afirmado la concejala.",
    "Para prevenir nuevos actos vandálicos, la delegación se plantea instalar un sistema de videovigilancia, aunque no ha dado plazos, y reforzar la presencia de la Policía Local con todos los recursos disponibles, entre ellos el dron de vigilancia.",
    "La delegada ha llamado además a «respetar y a defender» el Monumento Natural de las Riberas del Guadaíra, al que el Ayuntamiento atribuye miles de visitas de personas de Alcalá y de ciudades vecinas. El Ayuntamiento pide la colaboración ciudadana para comunicar cualquier comportamiento incívico o situación que ponga en riesgo el patrimonio o el mobiliario público.",
    "<span class='howto'>Ayuntamiento de Alcalá de Guadaíra: centralita 955 796 000. La Policía Local investiga la autoría de los daños.</span>"
   ],
   "seo": [
    "vandalismo-iluminacion-camino-oromana-alcala",
    "Vandalismo en la luz del Camino de Oromana, Alcalá",
    "Medio Ambiente denuncia destrozos en los báculos a ras de suelo entre la Pasarela de San Juan y la Casa del Guarda y pide colaboración ciudadana.",
    [
     "Camino de Oromana",
     "vandalismo",
     "Monumento Natural",
     "María Luisa Campos",
     "Policía Local",
     "iluminación"
    ]
   ]
  },
  {
   "id": "dia-flamenco-15-noviembre-maria-terremoto-caracafe",
   "sec": "cultura",
   "kicker": "Flamenco",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9971/alcala-de-guadaira-celebrara-el-dia-internacional-del-flamenco-con-maria-terremoto-caracafe-petete-y-los-jovenes-de-las-3000",
   "title": "María Terremoto, Caracafé y El Petete actuarán el 15 de noviembre en el Auditorio por el Día del Flamenco",
   "sub": "La gala cierra el ciclo «Sevilla Flamenca» de la Diputación y acoge el Encuentro Provincial de Peñas; las invitaciones gratuitas se recogen desde el 5 de noviembre",
   "caption": "Presentación de la gala del Día Internacional del Flamenco, con el cartel de la clausura de «Sevilla Flamenca» en Alcalá.",
   "foto": "dia-flamenco-2026-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "La gala de clausura de «Sevilla Flamenca» será el domingo 15 de noviembre de 2026 en el Auditorio Riberas del Guadaíra, con apertura de puertas a las 12:00 y comienzo a las 13:00.",
    "Actúan María Terremoto, Emilio Caracafé, El Petete y Jóvenes de las 3.000.",
    "Las invitaciones son gratuitas, con un máximo de dos por persona, y se recogen desde el 5 de noviembre en el Auditorio y en la Casa de la Cultura.",
    "El viernes 13 de noviembre, a las 21:00, Gloria del Rosario actúa en la Peña Flamenca El Arrabal."
   ],
   "body": [
    "Alcalá de Guadaíra celebrará el domingo 15 de noviembre de 2026 el Día Internacional del Flamenco con una gala en el Auditorio Riberas del Guadaíra en la que actuarán María Terremoto, Emilio Caracafé, El Petete y Jóvenes de las 3.000. La cita cierra el ciclo «Sevilla Flamenca» de la Diputación de Sevilla, impulsado a través de Prodetur.",
    "La programación coincide con el Encuentro Provincial de Peñas, que organiza la Federación Provincial de Entidades Flamencas y que, según el Ayuntamiento, recorre 14 peñas flamencas de la provincia y termina en Alcalá. La Delegación de Cultura y la de Turismo del Ayuntamiento participan en la organización.",
    "## Programa del 13 al 15 de noviembre",
    "El viernes 13 de noviembre, a las 21:00 horas, Gloria del Rosario actuará en la Peña Flamenca El Arrabal, la presencia alcalareña dentro del ciclo. El domingo 15 comenzará a las 10:00 con el encuentro de las entidades flamencas, cuyos representantes harán una visita turístico-cultural guiada por Alcalá.",
    "La gala de clausura empezará a las 13:00 en el Auditorio Riberas del Guadaíra, con apertura de puertas a las 12:00. El cartel reúne, según el Ayuntamiento, artistas con una trayectoria reconocida y jóvenes que están encontrando en el flamenco una forma de expresión.",
    "## Qué dice el Ayuntamiento",
    "El delegado de Cultura, Christopher Rivas, ha afirmado que las peñas «son mucho más que lugares donde se organizan recitales» y que son «espacios fundamentales para mantener vivo el flamenco». Según Rivas, el encuentro permite reunir a esas entidades, reconocer su trabajo y reforzar la conexión entre el tejido flamenco de los distintos municipios de la provincia.",
    "El delegado ha explicado también que, desde el Área de Identidad, el Ayuntamiento quiere que Alcalá siga teniendo presencia en este tipo de iniciativas, y ha agradecido su trabajo a la Diputación, a la Federación Provincial de Entidades Flamencas, a las peñas y a los artistas.",
    "Estaba programado que el ciclo hiciera escala en la peña alcalareña el 24 de octubre, con el baile de Lucía la Piñona, según había anunciado el Ayuntamiento.",
    "<span class='howto'>Invitaciones: gratuitas, máximo dos por persona, desde el 5 de noviembre en el Auditorio Riberas del Guadaíra y en la Casa de la Cultura. Gala: domingo 15 de noviembre, puertas a las 12:00 y comienzo a las 13:00 en el Auditorio. Gloria del Rosario: viernes 13, 21:00, Peña Flamenca El Arrabal.</span>"
   ],
   "seo": [
    "dia-flamenco-alcala-gala-15-noviembre",
    "Día del Flamenco en Alcalá: gala el 15 de noviembre",
    "María Terremoto, Caracafé y El Petete actúan el 15 de noviembre en el Auditorio Riberas del Guadaíra. Invitaciones gratuitas desde el 5 de noviembre.",
    [
     "Día del Flamenco",
     "María Terremoto",
     "Emilio Caracafé",
     "Sevilla Flamenca",
     "Auditorio Riberas del Guadaíra",
     "peñas flamencas"
    ]
   ]
  },
  {
   "id": "mg-saavedra-premio-andalucia-excelente-2026",
   "sec": "economia",
   "kicker": "Empresas",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=v7p_hxeczsU&t=821s",
   "title": "La empresa alcalareña M.G. Saavedra recibe el premio Andalucía Excelente 2026 a los servicios de calidad",
   "sub": "Los galardones, que llegan a su 14.ª edición, reconocen la trayectoria de una compañía fundada en 1928 y dedicada a materiales de construcción, saneamiento y servicios de grúa",
   "caption": "Entrega de los premios Andalucía Excelente 2026, con la mención a M.G. Saavedra en pantalla.",
   "foto": "mg-saavedra-andalucia-excelente-2026.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La empresa alcalareña M.G. Saavedra ha recibido el premio Andalucía Excelente 2026 en la categoría de servicios de calidad.",
    "Es la 14.ª edición de unos premios que organiza la publicación El Suplemento.",
    "La empresa, fundada en 1928, comercializa materiales de construcción y saneamiento y ofrece transporte y servicios de grúa.",
    "La alcaldesa, Ana Isabel Jiménez, ha felicitado a la empresa en su perfil de Instagram."
   ],
   "body": [
    "La empresa alcalareña M.G. Saavedra ha recibido el premio Andalucía Excelente 2026 en la categoría de servicios de calidad. El galardón forma parte de la 14.ª edición de unos premios que distinguen cada año a empresas, instituciones y profesionales andaluces por su trayectoria, su capacidad de innovación y su contribución al desarrollo económico, social y cultural de la comunidad.",
    "La compañía se dedica a la comercialización de materiales de construcción y saneamiento, así como al transporte y a los servicios de grúa. Su actividad arrancó en Alcalá de Guadaíra en 1928, y desde entonces ha ampliado sus instalaciones y sus servicios sin salir de la ciudad. Atiende tanto a profesionales de la construcción como a particulares.",
    "## El reconocimiento del jurado",
    "Según los datos de la entrega, el jurado de los premios Andalucía Excelente reconoce con este galardón la apuesta de la empresa por la calidad del servicio y la atención al cliente. M.G. Saavedra comparte esta edición con otras empresas y profesionales andaluces distinguidos en ámbitos como la innovación, la tecnología, la construcción, el turismo y la cultura.",
    "## La felicitación de la alcaldesa",
    "La alcaldesa, Ana Isabel Jiménez, ha trasladado su enhorabuena a la empresa en su perfil de Instagram. En su mensaje destaca que la trayectoria de M.G. Saavedra comenzó en 1928 y que, generación tras generación, la compañía ha mantenido, a su juicio, su «compromiso con la profesionalidad, la cercanía y la atención al cliente». Jiménez añade que es una satisfacción que empresas de Alcalá lleven el nombre de la ciudad y sean reconocidas.",
    "La información disponible no detalla el número de empleados de la empresa ni su facturación.",
    "<span class='howto'>Premios Andalucía Excelente 2026 (14.ª edición): categoría de servicios de calidad. Empresa premiada: M.G. Saavedra, Alcalá de Guadaíra.</span>"
   ],
   "seo": [
    "mg-saavedra-premio-andalucia-excelente-alcala",
    "M.G. Saavedra, premio Andalucía Excelente 2026 en Alcalá",
    "La empresa alcalareña M.G. Saavedra, fundada en 1928 en la ciudad, recibe el premio Andalucía Excelente 2026 en la categoría de servicios de calidad.",
    [
     "M.G. Saavedra",
     "Andalucía Excelente",
     "empresas de Alcalá",
     "servicios de calidad",
     "materiales de construcción",
     "Ana Isabel Jiménez"
    ]
   ]
  },
  {
   "id": "cabalgata-reyes-2027-designacion-sorpresa-reyes-magos",
   "sec": "cultura",
   "kicker": "Cabalgata de Reyes",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=v7p_hxeczsU&t=1127s",
   "title": "La Cabalgata de Reyes comunica esta noche por sorpresa quiénes serán Melchor, Gaspar y Baltasar",
   "sub": "Los elegidos y la estrella de la ilusión conocerán la designación en sus casas; la asociación la hará pública después en sus redes sociales",
   "caption": "Una carroza de la Cabalgata de Reyes Magos de Alcalá, en una imagen de archivo.",
   "foto": "cabalgata-reyes-2027-designacion-sorpresa-reyes-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Asociación de la Cabalgata de Reyes de Alcalá comunica esta noche, miércoles 4 de noviembre, quiénes serán Melchor, Gaspar y Baltasar.",
    "Los elegidos no lo saben antes: la comitiva de la asociación va a sus domicilios para darles la noticia por sorpresa.",
    "Después, la asociación hará públicos los nombres en sus perfiles de redes sociales.",
    "La programación sigue el viernes con una fiesta infantil y el sábado con el guiso de las 1000 pesetas, ambos en la sede de la asociación."
   ],
   "body": [
    "La Asociación de la Cabalgata de Reyes de Alcalá de Guadaíra comunica esta noche, miércoles 4 de noviembre de 2026, quiénes serán los Reyes Magos de la próxima cabalgata, la que recorrerá la ciudad la tarde del 5 de enero. Los elegidos, que no lo saben de antemano, recibirán la noticia en sus casas, donde acudirá la comitiva de la asociación.",
    "Además de Melchor, Gaspar y Baltasar, la designación incluye a la estrella de la ilusión. Según la tradición de la cabalgata, el nombramiento no se hace en un acto público: la asociación visita por sorpresa los domicilios de cada uno. Una vez hechas las visitas, dará a conocer oficialmente las identidades a través de sus perfiles en redes sociales.",
    "## Un paso hacia la cabalgata de 2027",
    "La designación marca uno de los primeros pasos de la preparación de la cabalgata, un momento que cada año se vive con especial emoción, tanto por los protagonistas como por sus familias. El Panadero ya contó en octubre cómo la cabalgata rindió homenaje a Isidoro Villalba tras casi cuarenta años diseñando el cortejo.",
    "La asociación no ha adelantado nombres ni ha detallado cómo se hará el anuncio en redes, más allá de que se producirá tras las visitas de esta noche.",
    "## Los próximos actos de la asociación",
    "La programación de la asociación continúa este viernes 6 de noviembre con una fiesta infantil en su sede. El sábado 7 de noviembre se celebra el tradicional guiso de las 1000 pesetas, también en la sede de la asociación, situada en la calle Escultor Duque Cornejo.",
    "Estos actos forman parte de las actividades con las que la asociación se prepara para la cabalgata del 5 de enero. El 13 de octubre la asociación también organizó una campaña de donación de sangre en su sede.",
    "<span class='howto'>Fiesta infantil: viernes 6 de noviembre, en la sede de la Asociación de la Cabalgata de Reyes (calle Escultor Duque Cornejo). Guiso de las 1000 pesetas: sábado 7 de noviembre, en la misma sede. La asociación no ha comunicado los horarios en la información disponible.</span>"
   ],
   "seo": [
    "cabalgata-reyes-alcala-designacion-reyes-magos",
    "Cabalgata de Reyes de Alcalá: designación de los Reyes",
    "La Asociación de la Cabalgata comunica esta noche por sorpresa quiénes serán Melchor, Gaspar y Baltasar para el 5 de enero en Alcalá de Guadaíra.",
    [
     "Cabalgata de Reyes",
     "Reyes Magos",
     "Alcalá de Guadaíra",
     "Escultor Duque Cornejo",
     "estrella de la ilusión"
    ]
   ]
  },
  {
   "id": "corte-pepe-corzo-jueves-5-noviembre-paso-elevado",
   "sec": "alcala",
   "kicker": "Tráfico",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=v7p_hxeczsU&t=1209s",
   "title": "Corte total de la calle Pepe Corzo el jueves 5 de noviembre para instalar un paso de peatones elevado",
   "sub": "La Oficina Técnica de Tráfico avisa de que no se podrá circular entre las 9:30 y las 15:00 por el tramo entre Matrona y Antón de Medellín",
   "caption": "Calle Pepe Corzo de Alcalá de Guadaíra, donde se instalará un paso de peatones elevado.",
   "foto": "corte-pepe-corzo-paso-elevado-2026.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La calle Pepe Corzo estará cortada al tráfico el jueves 5 de noviembre de 2026, de 9:30 a 15:00 horas.",
    "El corte afecta al tramo comprendido entre las calles Matrona, Isabel Selma y Antón de Medellín.",
    "El motivo es la instalación de un paso de peatones elevado, que también servirá como reductor de velocidad.",
    "El aviso lo ha dado la Oficina Técnica de Tráfico del Ayuntamiento."
   ],
   "body": [
    "La calle Pepe Corzo de Alcalá de Guadaíra permanecerá cortada al tráfico de forma total el jueves 5 de noviembre de 2026, entre las 9:30 y las 15:00 horas, en el tramo comprendido entre las calles Matrona, Isabel Selma y Antón de Medellín. Lo ha informado la Oficina Técnica de Tráfico del Ayuntamiento.",
    "El motivo del corte es la instalación de un paso de peatones elevado. Esta infraestructura, además de facilitar el cruce a los viandantes, funciona como reductor de velocidad para los vehículos que circulan por la calle.",
    "## Qué conviene saber antes de salir",
    "Durante las cinco horas y media que dura el corte no se podrá circular por ese tramo, por lo que los conductores que habitualmente pasan por Pepe Corzo tendrán que buscar rutas alternativas por las calles del entorno. El aviso no detalla qué itinerarios alternativos propone el Ayuntamiento ni si habrá desvíos señalizados.",
    "Tampoco informa de cómo afectará el corte al acceso de vehículos de residentes o a los comercios del tramo, ni de si habrá personal para ordenar la circulación. Conviene consultar la señalización de la zona y la información de tráfico del Ayuntamiento antes de salir.",
    "## Una obra de seguridad vial",
    "Los pasos de peatones elevados se instalan para reducir la velocidad de los coches en puntos donde cruzan personas a pie, ya que obligan a frenar al llegar a ellos. El Ayuntamiento no ha explicado en este aviso por qué se ha elegido este punto de Pepe Corzo ni el coste de la actuación.",
    "<span class='howto'>Corte total: jueves 5 de noviembre, de 9:30 a 15:00 horas. Calle Pepe Corzo, entre Matrona, Isabel Selma y Antón de Medellín. Motivo: instalación de un paso de peatones elevado. Información de tráfico del Ayuntamiento: 955 796 000.</span>"
   ],
   "seo": [
    "corte-trafico-pepe-corzo-5-noviembre-alcala",
    "Corte de tráfico en Pepe Corzo, Alcalá, el 5 de noviembre",
    "La calle Pepe Corzo estará cortada el jueves 5 de noviembre de 9:30 a 15:00, entre Matrona y Antón de Medellín, por la instalación de un paso elevado.",
    [
     "Pepe Corzo",
     "corte de tráfico",
     "paso de peatones elevado",
     "Oficina Técnica de Tráfico",
     "Alcalá de Guadaíra"
    ]
   ]
  },
  {
   "id": "rosa-rodriguez-del-tronco-conferencia-5-noviembre-auditorio",
   "sec": "cultura",
   "kicker": "Conferencias",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9970/la-conferencia-de-rosa-rodriguez-del-tronco-%E2%80%9Cla-vida-que-queremos-habitar%E2%80%9D-protagoniza-manana-el-ciclo-%E2%80%9Cconversaciones-de-vida-elige-ser-feliz%E2%80%9D",
   "title": "Rosa Rodríguez del Tronco da el jueves 5 la penúltima charla del ciclo «Conversaciones de vida»",
   "sub": "La conferencia «La vida que queremos habitar» es a las 19:00 en el Auditorio Riberas del Guadaíra; la última será el 16 de diciembre",
   "caption": "Cartel de la conferencia de Rosa Rodríguez del Tronco en el ciclo «Conversaciones de vida. Elige ser feliz».",
   "foto": "rosa-rodriguez-conferencia-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "Rosa Rodríguez del Tronco ofrece el jueves 5 de noviembre de 2026, a las 19:00, la conferencia «La vida que queremos habitar» en el Auditorio Riberas del Guadaíra.",
    "La apertura de puertas es a las 18:00 y las entradas están disponibles en la web municipal.",
    "Es una nueva sesión del ciclo «Conversaciones de vida. Elige ser feliz», que la organiza el Ayuntamiento.",
    "La última conferencia de esta edición será el 16 de diciembre con Isabel Rojas y «Conocerte cambia todo»."
   ],
   "body": [
    "La conferencia «La vida que queremos habitar», de Rosa Rodríguez del Tronco, se celebra el jueves 5 de noviembre de 2026 a las 19:00 en el Auditorio Riberas del Guadaíra, dentro del ciclo «Conversaciones de vida. Elige ser feliz» del Ayuntamiento de Alcalá de Guadaíra. Las puertas abrirán a las 18:00 y las entradas están disponibles en la web municipal.",
    "## Quién es la ponente",
    "Según el Ayuntamiento, Rodríguez del Tronco es psicóloga, consultora, formadora y conferenciante, y lleva más de veinte años acompañando a personas y organizaciones en procesos de desarrollo, liderazgo, comunicación y bienestar emocional. Es consejera delegada de DICTEA, especialista en desarrollo personal y organizacional, y coautora de «Smart Feedback», una obra que trata de cómo las conversaciones pueden contribuir al crecimiento de las personas y los equipos.",
    "## De qué hablará",
    "El Ayuntamiento describe su trabajo como una conexión entre la psicología y situaciones frecuentes en la vida cotidiana: el miedo al error, la dificultad para afrontar cambios, las relaciones profesionales y las conversaciones que pueden ayudar a avanzar o terminar desgastando. Con «La vida que queremos habitar», la ponente invitará a los asistentes a pensar cómo quieren vivir, relacionarse y construir su bienestar más allá de las exigencias del día a día.",
    "## El ciclo, hasta diciembre",
    "«Conversaciones de vida. Elige ser feliz» se anunció este año como un ciclo de siete conferencias, del 17 de septiembre al 5 de noviembre, aunque el Ayuntamiento ha indicado que la edición se cerrará con una última charla el 16 de diciembre, a cargo de Isabel Rojas y titulada «Conocerte cambia todo». El ciclo ha contado con ponentes como Pedro García Aguado, Anne Igartiburu, Luis Galindo, Alba Cardalda y Juan José Martín «Sabas».",
    "El Ayuntamiento no ha detallado el precio de las entradas en la información publicada: remite a la página de venta de entradas de la web municipal.",
    "<span class='howto'>Cuándo y dónde: jueves 5 de noviembre, 19:00, Auditorio Riberas del Guadaíra (puertas a las 18:00). Entradas: web municipal, entradas.alcaladeguadaira.es. Próxima y última charla: 16 de diciembre, Isabel Rojas.</span>"
   ],
   "seo": [
    "rosa-rodriguez-del-tronco-conferencia-alcala",
    "Rosa Rodríguez del Tronco, el 5 nov en el Auditorio",
    "La psicóloga Rosa Rodríguez del Tronco ofrece «La vida que queremos habitar» el 5 de noviembre a las 19:00 en el Auditorio Riberas del Guadaíra.",
    [
     "Rosa Rodríguez del Tronco",
     "Conversaciones de vida",
     "Auditorio Riberas del Guadaíra",
     "conferencia",
     "Alcalá de Guadaíra"
    ]
   ]
  },
  {
   "id": "san-silvestre-solidaria-alcala-27-diciembre-oromana",
   "sec": "deportes",
   "kicker": "Carreras",
   "hora": "22:20",
   "iso": "2026-11-04",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8427/alcala-de-guadaira-celebrara-su-i-san-silvestre-solidaria-el-proximo-27-de-diciembre",
   "title": "Alcalá celebrará su primera San Silvestre Solidaria el 27 de diciembre, con salida en el Club de Tenis Oromana",
   "sub": "La carrera de cinco kilómetros recaudará fondos para una escuela de alfabetización de la ONGD Mundo Orenda en Angola; las inscripciones abrirán «muy pronto»",
   "caption": "Cartel de la I San Silvestre Solidaria Alcalá, el 27 de diciembre de 2026.",
   "foto": "san-silvestre-solidaria-2026-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "contain",
   "claves": [
    "La I San Silvestre Solidaria de Alcalá de Guadaíra será el domingo 27 de diciembre de 2026, con salida y meta en el Club de Tenis Oromana.",
    "La carrera tiene cinco kilómetros y la organizan el Club de Tenis Oromana y la ONGD Mundo Orenda, con el Ayuntamiento como colaborador.",
    "La recaudación apoya la construcción de la Escuelita de Alfabetización Soñando Alto en Angola, que tiene 184 alumnos registrados.",
    "Según el cartel, el dorsal solidario cuesta 5 euros; las inscripciones aún no se han abierto."
   ],
   "body": [
    "Alcalá de Guadaíra celebrará el domingo 27 de diciembre de 2026 su I San Silvestre Solidaria, una carrera de cinco kilómetros con salida y meta en las instalaciones del Club de Tenis Oromana. La organizan el propio club y la ONGD Mundo Orenda, con la colaboración del Ayuntamiento y su Delegación de Deportes, según informa Alcalá+Deporte.",
    "La prueba empieza a las 10:00 horas. El cartel de la carrera indica que la salida de corredores es a las 10:00 y la salida general a las 11:00, y que el dorsal solidario cuesta 5 euros para adultos e infantil. Las inscripciones todavía no están abiertas: la organización indica que se abrirán «próximamente».",
    "## El recorrido",
    "El recorrido parte del Club de Tenis Oromana y pasa por Hacienda La Perdida, la zona de Toboganes, el camino junto al río, la Casa del Guarda, la subida a San Roque y el entorno del Hotel Oromana, para terminar de nuevo en el club. Allí se habilitará una zona de convivencia tras la carrera.",
    "## A qué se destina la recaudación",
    "La recaudación de esta primera edición se destinará a apoyar la construcción de la Escuelita de Alfabetización Soñando Alto, un proyecto educativo impulsado por la ONGD Mundo Orenda en Angola. Según la organización, la iniciativa comenzó en 2021 bajo un árbol de mangos y cuenta ahora con cinco profesores y 184 alumnos registrados. Su objetivo es ofrecer a niños y niñas un espacio educativo digno y estable.",
    "Los organizadores presentan la carrera como una cita que une deporte, convivencia familiar y solidaridad en Navidad, y quieren que se consolide como una nueva fecha del calendario deportivo y solidario de la ciudad. Invitan a deportistas, familias, clubes, empresas y ciudadanía a sumarse, participando o colaborando con el proyecto.",
    "No se ha detallado cuánto se espera recaudar ni el límite de participantes.",
    "<span class='howto'>I San Silvestre Solidaria Alcalá: domingo 27 de diciembre de 2026, 10:00 h. Salida y meta: Club de Tenis Oromana. Distancia: 5 km. Dorsal solidario: 5 euros, según el cartel. Inscripciones: próximamente. Finalidad: proyecto Soñando Alto, en Angola.</span>"
   ],
   "seo": [
    "san-silvestre-solidaria-alcala-27-diciembre",
    "I San Silvestre Solidaria de Alcalá: 27 de diciembre",
    "Alcalá celebra su I San Silvestre Solidaria el 27 de diciembre: 5 km con salida en el Club de Tenis Oromana y fines benéficos para una escuela en Angola.",
    [
     "San Silvestre Solidaria",
     "Club de Tenis Oromana",
     "Mundo Orenda",
     "carreras",
     "Alcalá de Guadaíra",
     "Angola"
    ]
   ]
  },
  {
   "id": "encuentros-musica-juventud-casa-juventud-2026",
   "sec": "cultura",
   "kicker": "Juventud",
   "hora": "07:15",
   "iso": "2026-11-04",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9964/%E2%80%8Bvuelven-los-%E2%80%98encuentros-con-la-musica%E2%80%99-de-juventud-con-talleres-masterclass-jam-sessions-y-conciertos",
   "title": "«Encuentros con la Música» vuelve a la Casa de la Juventud con talleres gratuitos hasta abril de 2027",
   "sub": "Los talleres serán los lunes y jueves de 17.00 a 21.00 horas desde el 9 de noviembre, con masterclass y jam sessions los domingos 15 y 22",
   "caption": "Imagen de la presentación del programa, facilitada por el Ayuntamiento.",
   "foto": "encuentros-musica-juventud-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El programa «Encuentros con la Música» se celebra en la Casa de la Juventud de Alcalá de Guadaíra desde el 9 de noviembre de 2026 hasta abril de 2027.",
    "Los talleres son gratuitos y tienen lugar los lunes y los jueves, de 17.00 a 21.00 horas.",
    "Los domingos 15 y 22 de noviembre habrá masterclass y jam sessions.",
    "Será una programación anual, según la delegada de Juventud, Paula Fuster, tras el éxito de la edición del pasado verano."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra retoma el programa «Encuentros con la Música», una propuesta gratuita de la Delegación de Juventud con talleres, masterclass, jam sessions y conciertos. Empieza el lunes 9 de noviembre de 2026 en la Casa de la Juventud y se prolongará hasta abril de 2027.",
    "La delegada de Juventud, Paula Fuster, ha presentado el programa y ha explicado que se convierte en anual tras el éxito de la edición del pasado verano. Según el Ayuntamiento, el objetivo es acercar a los jóvenes a la música de la mano de profesionales, formarlos e impulsar su talento.",
    "## Talleres los lunes y los jueves",
    "Los talleres se celebrarán los lunes y los jueves, de 17.00 a 21.00 horas, en la Casa de la Juventud, y arrancan el lunes 9 de noviembre. Según el Ayuntamiento, combinarán varios instrumentos a la vez y adaptarán la formación a las preferencias de los participantes, con una metodología activa.",
    "El domingo 15 y el domingo 22 de noviembre habrá además masterclass y jam sessions. El Ayuntamiento no ha detallado, por ahora, el horario ni el lugar de esas dos jornadas, ni el calendario de los conciertos que anuncia el programa.",
    "## Dos músicos al frente de las sesiones",
    "La programación contará con profesionales como Patricio Jiménez, músico alcalareño que ha participado en el musical homenaje a Mecano «Hoy no me puedo levantar», y el Juan Galiardo Quintet, formación de jazz.",
    "Fuster sostiene que el ciclo busca «alternativas atractivas para el sector juvenil» y unir el ocio y la cultura con la música como hilo conductor. A su juicio, la música puede servir como medio de comunicación y expresión y facilitar el desarrollo de la autoestima y la socialización de muchos jóvenes. La delegada añade que se pretende animarlos a crear grupos y a experimentar con la música, no solo escucharla.",
    "El programa, subraya el Ayuntamiento, está abierto a todo el mundo. La semana de arranque coincide con otra cita musical municipal: el <a href='#panarra-session-viernes-6-noviembre-auditorio'>Panarra Session</a>, que reúne a seis DJ el viernes 6 de noviembre en la explanada del Auditorio Riberas del Guadaíra.",
    "<span class='howto'><b>Encuentros con la Música.</b> Dónde: Casa de la Juventud, Alcalá de Guadaíra. Cuándo: lunes y jueves, de 17.00 a 21.00 horas, desde el 9 de noviembre de 2026 hasta abril de 2027. Masterclass y jam sessions: domingos 15 y 22 de noviembre. Precio: gratuito.</span>"
   ],
   "seo": [
    "encuentros-musica-casa-juventud-alcala",
    "Encuentros con la Música: talleres gratis en Alcalá",
    "Talleres gratuitos de música para jóvenes en la Casa de la Juventud de Alcalá de Guadaíra desde el 9 de noviembre, con masterclass y jam sessions.",
    [
     "Encuentros con la Música",
     "Casa de la Juventud",
     "Paula Fuster",
     "Delegación de Juventud",
     "talleres de música",
     "jam sessions"
    ]
   ]
  },
  {
   "id": "urda-69-victimas-identificadas-decreto-ayudas",
   "sec": "alcala",
   "kicker": "Accidente de Urda",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=aQYFNup7wN8&t=141s",
   "title": "Identificadas las 69 víctimas de Urda, entre ellas el policía alcalareño Iván Romano",
   "sub": "El Consejo de Ministros ha abordado un Real Decreto que duplicará las cuantías del seguro obligatorio de viajeros y permitirá anticipar indemnizaciones",
   "caption": "Operarios de emergencias junto a los vagones siniestrados en el accidente ferroviario de Urda.",
   "foto": "urda-69-identificadas-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Las 69 personas fallecidas en el accidente de Urda están identificadas y todas las familias han recibido la comunicación oficial, según el Centro Integrado de Datos.",
    "Entre las víctimas figura Iván Romano Ramos, policía nacional de 42 años y vecino de Alcalá, cuyo fallecimiento se confirmó el sábado 31 de octubre.",
    "El Gobierno ha anunciado un Real Decreto con cuatro medidas, entre ellas duplicar las cuantías del seguro obligatorio de viajeros; las cuantías concretas se conocerán cuando se publique la norma."
   ],
   "body": [
    "Las 69 personas fallecidas en el accidente ferroviario de Urda están identificadas, entre ellas el policía nacional alcalareño Iván Romano Ramos. El Centro Integrado de Datos ha confirmado este martes 3 de noviembre que todas las familias han recibido la comunicación oficial. El Gobierno ha anunciado ayudas.",
    "## El balance de las identificaciones",
    "El balance definitivo se mantiene en 69 fallecidos: 40 hombres y 29 mujeres, todos mayores de edad. De ellos, 54 tenían nacionalidad española y 15 eran extranjeros, procedentes de 10 países. La identificación se ha hecho con dos procedimientos: en 56 casos mediante huellas dactilares y en los 13 restantes con pruebas de ADN. En los trabajos forenses han participado más de 60 profesionales y, a estas horas, 55 de los cuerpos ya están a disposición de sus familiares.",
    "## El vecino de Alcalá",
    "Iván Romano Ramos tenía 42 años, estaba destinado en Madrid y regresaba a Sevilla para pasar unos días con su familia. Viajaba en el vagón 8 del tren de alta velocidad siniestrado. Su muerte se confirmó el sábado 31 de octubre, después de varios días de búsqueda en los que su entorno había mantenido la esperanza de encontrarlo con vida. El Ayuntamiento confirmó su muerte, como recoge <a href='#ayuntamiento-confirma-muerte-ivan-romano-urda'>la información sobre el policía de Alcalá fallecido en Urda</a>.",
    "## Un Real Decreto con cuatro medidas",
    "El Consejo de Ministros ha abordado hoy un Real Decreto específico para los afectados, que toma como referencia las ayudas aprobadas tras el accidente de Adamuz. Según el paquete anunciado por el presidente del Gobierno, Pedro Sánchez, incluye cuatro medidas.",
    "La primera es duplicar las cuantías del seguro obligatorio de viajeros. La segunda, un mecanismo para anticipar las indemnizaciones, de modo que familias y heridos puedan recibir una primera compensación sin esperar a que terminen todos los procedimientos. La tercera, un procedimiento específico de incapacidad temporal con mejor cobertura para quienes sufrieron lesiones. La cuarta, la creación de oficinas de atención integral y personalizada en las delegaciones y subdelegaciones del Gobierno de las comunidades donde residan las víctimas. Los detalles definitivos sobre cuantías, requisitos y procedimientos se conocerán cuando se apruebe y se publique la norma.",
    "## La investigación sigue abierta",
    "Con las 69 víctimas identificadas se cierra una etapa para las familias, pero la investigación judicial continúa para esclarecer las causas del accidente, como se detalla en <a href='#urda-investigacion-juzgado-orgaz-guardia-civil'>el secreto de sumario decretado por la jueza de Orgaz</a>. Para el resto de la cronología del suceso, <a href='#accidente-tren-urda-ave-iryo'>la crónica de los dos primeros días</a> recoge la evolución desde los primeros días."
   ],
   "seo": [
    "urda-69-victimas-identificadas-decreto-ayudas",
    "Urda: 69 víctimas identificadas y decreto de ayudas",
    "Identificadas las 69 víctimas de Urda, entre ellas el policía alcalareño Iván Romano. El Gobierno prepara un decreto de ayudas para los afectados.",
    [
     "Urda",
     "accidente ferroviario",
     "Iván Romano",
     "Real Decreto",
     "ayudas víctimas",
     "seguro obligatorio de viajeros",
     "Alcalá de Guadaíra"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "22:10"
  },
  {
   "id": "ies-leonor-guzman-ciclo-superior-industria-alimentaria",
   "sec": "alcala",
   "kicker": "Educación",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9957/apoyo-municipal-al-ies-leonor-de-guzman-para-la-concesion-del-ciclo-superior-de-procesos-y-calidad-en-la-industria-alimentaria",
   "title": "El Ayuntamiento respalda que el IES Doña Leonor de Guzmán imparta el ciclo superior de Industria Alimentaria",
   "sub": "El centro, que ya forma a unos veinte alumnos en panadería y repostería, ha pedido el Grado Superior; la alcaldesa lo vincula al relevo generacional del sector",
   "caption": "La alcaldesa, Ana Isabel Jiménez, durante su visita al taller de panadería del IES Doña Leonor de Guzmán.",
   "foto": "ies-leonor-ciclo-superior-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El IES Doña Leonor de Guzmán ha pedido el Ciclo de Grado Superior de Procesos y Calidad en la Industria Alimentaria y el Ayuntamiento ha anunciado su apoyo.",
    "El centro imparte desde hace ocho años el Grado Medio de Panadería, Repostería y Confitería en formación dual, con unos veinte alumnos, y desde 2022-2023 un Ciclo Básico de 8 plazas.",
    "La alcaldesa sostiene que el ciclo ayudaría a cubrir la demanda de personal cualificado de las empresas panaderas y confiteras locales."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra apoya la petición del IES Doña Leonor de Guzmán para impartir el Ciclo de Grado Superior de Procesos y Calidad en la Industria Alimentaria. La alcaldesa, Ana Isabel Jiménez, y el delegado de Educación, Pablo Chain, visitaron el centro este martes 3 de noviembre, según el Consistorio.",
    "## Lo que ofrece hoy el instituto",
    "El Grado Medio se imparte en formación dual, con parte teórica y parte práctica en empresas. Comenzó hace ocho años, tiene una veintena de alumnos y recibe estudiantes de Alcalá y de otros municipios de la comarca, porque la oferta de este ciclo es escasa en Andalucía, según el Consistorio. Desde el curso 2022-2023 el centro suma un Ciclo Básico de esta misma rama con 8 plazas, dirigido a alumnado con necesidades especiales.",
    "## El argumento municipal",
    "Jiménez destacó la «trascendencia» del ciclo y sostuvo que la panadería y la confitería son una seña de identidad de la ciudad, por el Pan de Alcalá y las Tortas de Alcalá, y también «muy especialmente» un motor económico. A su juicio, una mano de obra cualificada propicia la creación de empleo, en buena parte juvenil, y ayuda a mantener los negocios tradicionales y a ampliar mercados. El Ayuntamiento afirma que prestará «todo el apoyo posible». El Gobierno municipal subraya que, dado el éxito del ciclo medio, llega el momento de aumentar la cualificación de estos profesionales, que tienen en su mano el relevo generacional del sector artesanal.",
    "## El papel del sector",
    "Según el Ayuntamiento, los empresarios panaderos y confiteros, a través de la Federación de Industriales y Comerciantes de Alcalá (FICA) y de las asociaciones de panaderos y de productores de tortas, llevan años promocionando estos productos con colaboración municipal. Las empresas de panadería y repostería de la localidad también se han comprometido a ofrecer formación práctica al alumnado.",
    "## Otras peticiones del centro",
    "La alcaldesa se interesó asimismo por otras líneas educativas que demanda el instituto, como el Ciclo Superior de Técnico en Igualdad. La concesión de los ciclos depende de la administración educativa competente: el Ayuntamiento no ha detallado en qué fase está la solicitud ni cuándo se resolvería."
   ],
   "seo": [
    "ies-leonor-guzman-ciclo-superior-industria-alimentaria",
    "El Ayuntamiento apoya el ciclo superior de panadería",
    "El Ayuntamiento respalda que el IES Doña Leonor de Guzmán obtenga el Grado Superior de Industria Alimentaria, que daría relevo al sector panadero.",
    [
     "IES Doña Leonor de Guzmán",
     "panadería",
     "formación profesional",
     "Industria Alimentaria",
     "FICA",
     "Pan de Alcalá",
     "Ana Isabel Jiménez"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "22:10"
  },
  {
   "id": "mesas-electorales-sorteo-pleno-29-noviembre",
   "sec": "politica",
   "kicker": "Elecciones generales",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=aQYFNup7wN8&t=476s",
   "title": "Alcalá sortea en pleno las mesas electorales de las elecciones generales del 29 de noviembre",
   "sub": "Los elegidos como presidentes, vocales y suplentes recibirán la notificación oficial en su domicilio con las instrucciones para el día de la votación",
   "caption": "Cabinas de votación en un colegio electoral, en una imagen de archivo.",
   "foto": "mesas-electorales-29n-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Pleno del Ayuntamiento celebró el viernes 30 de octubre una sesión extraordinaria con un único punto: el sorteo de las mesas electorales.",
    "El sorteo designa presidentes y vocales, titulares y suplentes, de los colegios del municipio para las elecciones generales del 29 de noviembre.",
    "Los designados recibirán una notificación oficial en su domicilio con las instrucciones."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ya ha sorteado quiénes formarán las mesas electorales de las elecciones generales del próximo 29 de noviembre. El sorteo se celebró el viernes 30 de octubre en un pleno extraordinario cuyo único punto del orden del día era la designación de los integrantes de las mesas.",
    "## Qué se decidió en el pleno",
    "El procedimiento determina quiénes ejercerán como presidentes y vocales, tanto titulares como suplentes, en los colegios electorales del municipio. Las personas seleccionadas recibirán la correspondiente notificación oficial en sus domicilios, donde se les comunicará su designación y las instrucciones para desempeñar esta responsabilidad durante la jornada electoral.",
    "## Qué prevé la ley para los elegidos",
    "Con carácter general, la ley electoral establece que cada mesa la forman un presidente y dos vocales, con dos suplentes para cada puesto. La designación es obligatoria y el incumplimiento puede acarrear sanciones. Quien reciba la notificación puede presentar alegaciones ante la junta electoral de zona, con su causa y la documentación que la acredite, en los siete días siguientes a recibirla. La presentación de alegaciones no exime por sí sola de ejercer el cargo: decide la junta.",
    "<span class='howto'><b>Si le llega la notificación:</b> compruebe el colegio y la mesa que le corresponden, la hora de constitución que figura en la carta y el plazo de siete días para alegar una causa justificada, si fuera su caso.</span>",
    "## El contexto de la cita con las urnas",
    "Los comicios generales se celebrarán el domingo 29 de noviembre. La campaña llega marcada por el accidente ferroviario de Urda, que llevó a varios partidos a suspender sus actos, como recoge <a href='#urda-oposicion-reacciones-campana'>la información sobre las reacciones de PP, PSOE y Vox</a>. El Ayuntamiento no ha detallado cuántas mesas ni cuántas personas se han designado en el sorteo."
   ],
   "seo": [
    "mesas-electorales-sorteo-pleno-alcala-29-noviembre",
    "Alcalá sortea las mesas electorales del 29 de noviembre",
    "El Pleno de Alcalá sorteó el 30 de octubre las mesas electorales de las elecciones generales del 29 de noviembre. Qué hacer si le toca ser vocal.",
    [
     "mesas electorales",
     "elecciones generales",
     "29 de noviembre",
     "pleno extraordinario",
     "Alcalá de Guadaíra",
     "sorteo"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "22:10"
  },
  {
   "id": "bomberos-alcala-sindicato-pide-mas-plantilla-oep-2027",
   "sec": "alcala",
   "kicker": "Servicios públicos",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=aQYFNup7wN8&t=941s",
   "title": "El Sindicato Andaluz de Bomberos pide más plantilla para el parque de Alcalá en la oferta de empleo de 2027",
   "sub": "El colectivo asegura que lleva tres años reclamando más personal y denuncia que los servicios extraordinarios se cobran con meses de retraso",
   "caption": "Bomberos de Alcalá junto a un camión del parque, en una imagen de archivo.",
   "foto": "bomberos-alcala-plantilla-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Sindicato Andaluz de Bomberos pide al Ayuntamiento que la oferta de empleo público de 2027 incluya más efectivos para el servicio de extinción de incendios de Alcalá.",
    "Afirma que lleva tres años reclamando más personal para cubrir las contingencias y las jubilaciones previstas.",
    "Denuncia que los servicios extraordinarios tardan en ocasiones varios meses en pagarse."
   ],
   "body": [
    "El Sindicato Andaluz de Bomberos ha pedido al Ayuntamiento de Alcalá de Guadaíra que la oferta de empleo público de 2027 contemple un aumento de la plantilla del Servicio de Extinción de Incendios y Salvamento. Lo hace en una nota informativa difundida este martes 3 de noviembre, en la que asegura que lleva tres años reclamando más personal.",
    "## Lo que denuncia el sindicato",
    "Según el comunicado, hace falta más gente para cubrir las contingencias, las jubilaciones previstas y las necesidades reales del municipio. El colectivo sostiene que la falta de efectivos obliga a los bomberos a asumir servicios extraordinarios y refuerzos dentro de sus propios turnos para mantener la operatividad del servicio. Esa situación, afirma, supone un importante esfuerzo personal y profesional y no puede mantenerse de forma permanente. El sindicato alerta también de los retrasos en el cobro de esos servicios extraordinarios, que en ocasiones, según su comunicado, tardan varios meses en abonarse.",
    "## Qué pide",
    "El colectivo solicita que la próxima oferta de empleo público incluya un incremento de plantilla y medidas que garanticen condiciones de trabajo seguras y una respuesta eficaz ante las emergencias. Los bomberos insisten en que reforzar el servicio es también una cuestión de prevención y seguridad para la ciudadanía de Alcalá.",
    "## Lo que dijo el gobierno municipal",
    "La petición llega pocos días después de que la portavoz del PSOE y delegada de Hacienda, Mª de los Ángeles Ballesteros, explicara en el programa La Tribuna que el parque ha incorporado cinco bomberos con la oferta de empleo público de 2026 y que habrá nuevas plazas de policía y de bomberos en 2027, sin concretar cuántas, según recoge <a href='#policia-local-bomberos-plazas-tribuna'>la información sobre las plazas de Policía Local y bomberos</a>. El Servicio de Extinción de Incendios estrenó además en octubre un camión ligero para las salidas por el casco urbano."
   ],
   "seo": [
    "bomberos-alcala-sindicato-pide-mas-plantilla-oferta-empleo-2027",
    "Bomberos de Alcalá piden más plantilla en la OEP de 2027",
    "El Sindicato Andaluz de Bomberos pide más efectivos en la oferta de empleo de 2027 de Alcalá y denuncia retrasos en el pago de servicios extraordinarios.",
    [
     "bomberos de Alcalá",
     "Sindicato Andaluz de Bomberos",
     "oferta de empleo público 2027",
     "plantilla",
     "Ayuntamiento de Alcalá"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "22:10"
  },
  {
   "id": "fica-puente-aereo-sevilla-madrid-urda",
   "sec": "economia",
   "kicker": "Economía local",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=aQYFNup7wN8&t=350s",
   "title": "FICA pide un puente aéreo urgente entre Sevilla y Madrid mientras sigue cortada la alta velocidad tras Urda",
   "sub": "La federación se suma a la Cámara de Comercio de Sevilla y reclama además mejoras en las infraestructuras y los sistemas de seguridad ferroviarios",
   "caption": "Vagones siniestrados en el accidente ferroviario de Urda, que ha interrumpido la alta velocidad entre Andalucía y Madrid.",
   "foto": "fica-puente-aereo-urda-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Federación de Industriales y Comerciantes de Alcalá (FICA) respalda la petición de la Cámara de Comercio de Sevilla de un puente aéreo urgente con Madrid.",
    "Las previsiones de ocupación hotelera en Sevilla para el puente de Todos los Santos han caído del 90 % al 50 %, según datos del Ayuntamiento sevillano.",
    "FICA pide también intervenir sin demora en las infraestructuras ferroviarias y sus sistemas de seguridad."
   ],
   "body": [
    "La Federación de Industriales y Comerciantes de Alcalá (FICA) se ha sumado a la petición de la Cámara de Comercio de Sevilla de un puente aéreo urgente entre Sevilla y Madrid. La entidad lo plantea como medida de contingencia tras el accidente de Urda, que interrumpió las conexiones de alta velocidad.",
    "## Qué pide FICA",
    "La federación comparte la preocupación por los perjuicios para los usuarios y el tejido empresarial y considera urgente disponer de una alternativa que garantice la conexión con Madrid. Su reivindicación, sin embargo, va más allá de una solución temporal: reclama también que se intervenga sin demora en la mejora de las infraestructuras ferroviarias y de sus sistemas de seguridad. Con ello, FICA pide una respuesta rápida que permita recuperar la conectividad y reducir el impacto económico de la interrupción. Según FICA, la situación ya tiene consecuencias en la actividad económica y turística.",
    "## El impacto en el turismo sevillano",
    "En Sevilla, las previsiones de ocupación hotelera para el puente de Todos los Santos han pasado del 90 % al 50 %. Según los datos trasladados por el Ayuntamiento sevillano, la patronal hotelera había previsto inicialmente una ocupación media del 84 % para las tres noches festivas. Los hoteleros han alertado además de cancelaciones y cambios de reservas y de una posible pérdida de entre 3.000 y 4.200 pernoctaciones diarias mientras siga interrumpida la conexión ferroviaria.",
    "## El corte ferroviario",
    "El plan alternativo de Renfe, las limitaciones de los vuelos y la previsión de tráfico por carretera para el puente se detallan en <a href='#urda-viajar-sevilla-madrid-sin-ave'>la información sobre cómo viajar entre Sevilla y Madrid sin AVE</a>. El Gobierno ha anunciado hoy ayudas para los afectados por el accidente, como recoge <a href='#urda-69-victimas-identificadas-decreto-ayudas'>la información sobre las víctimas identificadas y el decreto</a>."
   ],
   "seo": [
    "fica-puente-aereo-sevilla-madrid-urda",
    "FICA pide un puente aéreo Sevilla-Madrid tras Urda",
    "FICA respalda la petición de la Cámara de Comercio de Sevilla de un puente aéreo urgente con Madrid mientras sigue cortada la alta velocidad por Urda.",
    [
     "FICA",
     "puente aéreo",
     "Sevilla-Madrid",
     "Urda",
     "Cámara de Comercio de Sevilla",
     "alta velocidad",
     "turismo"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "22:10"
  },
  {
   "id": "panarra-session-viernes-6-noviembre-auditorio",
   "sec": "cultura",
   "kicker": "Música",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9966/javi-torres-lospicy--oscar-herrera-dj-yanyo-luis-jimenez-y-josan-fame-animaran-este-viernes-6-el-festival-panarra-session",
   "title": "El Panarra Session reúne a seis DJ el viernes 6 en el Auditorio, con entrada libre hasta completar aforo",
   "sub": "La jornada de música electrónica, que había sido aplazada, abre puertas a las 17.00 y comienza a las 18.00; los menores sin acompañante necesitan autorización firmada",
   "caption": "El delegado de Cultura, Christopher Rivas, junto al cartel del Panarra Session.",
   "foto": "panarra-session-cartel-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Panarra Session se celebra el viernes 6 de noviembre en la explanada del Auditorio Riberas del Guadaíra, con puertas a las 17.00 y comienzo a las 18.00.",
    "Actúan Javi Torres, LosPicy, Óscar Herrera, DJ Yanyo, Luis Jiménez y Josan Fame.",
    "La entrada es libre y gratuita hasta completar aforo; los menores que acudan sin acompañante deben presentar una autorización firmada."
   ],
   "body": [
    "La explanada del Auditorio Riberas del Guadaíra acogerá este viernes 6 de noviembre el Panarra Session, una jornada de DJ con entrada libre y gratuita hasta completar el aforo. Las puertas se abrirán a las 17.00 y el comienzo está fijado a las 18.00, según ha anunciado la Delegación de Cultura del Ayuntamiento.",
    "## El cartel",
    "El delegado de Cultura, Christopher Rivas, explicó que actuarán seis artistas. Javi Torres es un DJ y productor sevillano que destaca, según el Ayuntamiento, por sus sesiones de música electrónica, afrohouse y ritmos latinos, acompañadas de percusión en directo. LosPicy trabajan con música electrónica, reggaetón y éxitos comerciales. Completan el cartel Óscar Herrera, DJ Yanyo, Luis Jiménez y Josan Fame. El cartel anuncia además regalos, sorteos y otras sorpresas.",
    "## Una cita que había sido aplazada",
    "Rivas explicó que la jornada de DJ «tuvo que ser aplazada». El Ayuntamiento suspendió el PanarraFest y el PrePanarraFest por el luto oficial decretado tras el accidente de Urda, como se recoge en <a href='#panarrafest-suspendido-luto-oficial'>esta información</a>. El delegado dijo que la idea es que Alcalá disfrute de una jornada con propuestas que puedan interesar a distintas generaciones. «Queremos que la cultura llegue a públicos diversos, que cada persona encuentre su espacio y que la música en directo siga formando parte de la vida de nuestra ciudad», afirmó.",
    "Sobre el espacio, Rivas recordó que la explanada del Auditorio Riberas del Guadaíra permite celebrar grandes eventos musicales en un entorno muy reconocible de Alcalá, «desde el flamenco al rock, el pop, el reggaetón», y que ha reunido ya a miles de personas.",
    "<span class='howto'><b>Cómo asistir:</b> viernes 6 de noviembre, explanada del Auditorio Riberas del Guadaíra. Puertas a las 17.00, comienzo a las 18.00. Entrada libre y gratuita hasta completar aforo. Los menores que vayan sin acompañante deben llevar firmada la autorización de acceso, que se exigirá en la entrada. El Ayuntamiento ofrece el documento en PDF para descargarlo junto a su nota de prensa.</span>"
   ],
   "seo": [
    "panarra-session-6-noviembre-auditorio-riberas-alcala",
    "Panarra Session: seis DJ el 6 de noviembre en Alcalá",
    "Seis DJ actúan el viernes 6 de noviembre en la explanada del Auditorio Riberas del Guadaíra. Entrada libre hasta completar aforo; puertas a las 17.00.",
    [
     "Panarra Session",
     "Auditorio Riberas del Guadaíra",
     "DJ",
     "Christopher Rivas",
     "música en Alcalá",
     "entrada libre"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "22:10"
  },
  {
   "id": "tranvia-presupuesto-junta-2027-25-millones",
   "sec": "alcala",
   "kicker": "Transporte",
   "src": "Junta de Andalucía",
   "fuente_url": "https://www.juntadeandalucia.es/organismos/economiahaciendayfondoseuropeos/servicios/actualidad/noticias/detalle/690883.html",
   "title": "La Junta reserva 25,9 millones en 2027 para terminar y poner en marcha el tranvía de Alcalá de Guadaíra",
   "sub": "El proyecto aprobado por el Consejo de Gobierno destina 15,7 millones a talleres, cocheras y trenes y 10,25 millones a arrancar el servicio",
   "caption": "El consejero de Fomento, Mario Muñoz-Atanet, en el centro con chaleco, durante la visita a las obras de los talleres y cocheras del tranvía en agosto, en una imagen de archivo.",
   "foto": "tranvia-junta-presupuesto-2027-of.jpg",
   "fotocredito": "Junta de Andalucía",
   "claves": [
    "El proyecto de Presupuestos de la Junta de Andalucía para 2027 destina más de 25,9 millones de euros al tranvía de Alcalá de Guadaíra.",
    "De esa cantidad, 15,7 millones son para terminar los talleres y cocheras y para el material rodante, y 10,25 millones para la puesta en marcha del servicio.",
    "En agosto, la Junta situaba las obras pendientes en el 75 % de ejecución, dentro de unos trabajos de 178 millones de euros.",
    "Las cuentas deben pasar por el Parlamento de Andalucía; la Junta prevé que entren en vigor el 1 de enero de 2027."
   ],
   "body": [
    "La Junta de Andalucía prevé destinar en 2027 más de 25,9 millones de euros al tranvía de Alcalá de Guadaíra, según el desglose provincial del Proyecto de Ley de Presupuestos que aprobó el Consejo de Gobierno el viernes 30 de octubre. El dinero se reparte entre terminar las obras pendientes y poner en marcha el servicio.",
    "La partida se divide en dos bloques: 15,7 millones de euros para finalizar las obras de los talleres y cocheras, junto con el material rodante, y 10,25 millones para la puesta en marcha. El desglose no fija una fecha para el primer viaje con pasajeros.",
    "El tranvía aparece entre los proyectos citados en la <a href='https://www.juntadeandalucia.es/organismos/economiahaciendayfondoseuropeos/servicios/actualidad/noticias/detalle/690883.html'>nota de la Junta sobre las cuentas de 2027</a> para la Consejería de Fomento y Movilidad, que tendrá 1.332,6 millones de euros, un 12,8 % más que en 2026. Toda la provincia de Sevilla recibe 905.447.897 euros de inversión en el proyecto.",
    "## Las obras, al 75 % en agosto",
    "La última actualización oficial del estado de los trabajos es del 28 de agosto. Ese día, el consejero de Fomento y Movilidad, Mario Muñoz-Atanet, <a href='https://www.juntadeandalucia.es/organismos/fomentoymovilidad/servicios/actualidad/noticias/detalle/681283.html'>visitó las obras y las situó en el 75 % de ejecución</a>. Se refería a los trabajos que faltan para poner la línea en servicio, que suman 178 millones de euros, cofinanciados con fondos europeos Feder y Next Generation.",
    "Según aquella nota, la catenaria estaba instalada casi por completo, los ramales técnicos de los talleres estaban terminados y el edificio principal, con el taller de mantenimiento y el puesto de control, tenía un estado de avance alto. La flota será de seis trenes. Las dos primeras unidades, guardadas en ese recinto, hicieron las primeras pruebas dinámicas en primavera.",
    "La línea discurre <a href='https://www.juntadeandalucia.es/boja/2026/177/38.html'>entre la Universidad Pablo de Olavide y Montecarmelo</a>. La Junta recuerda que en 2019 ya se habían invertido 113 millones de euros y sostiene que entonces las obras estaban paralizadas y sin los fondos europeos necesarios para acabarlas. Una de las próximas promociones de VIVE Alcalá, la de Monte Carmelo, se prevé junto a una de sus paradas.",
    "## Otras partidas de transporte",
    "En el mismo capítulo, la Consejería de Fomento y Movilidad asigna en la provincia 250 millones de euros a la Línea 3 Norte del Metro de Sevilla, más de 70 millones a mejorar la Línea 1, con la que enlazará el tranvía, y 14 millones al inicio de la primera fase del Área Logística de Majarabique.",
    "Las cifras son las del proyecto de ley, de modo que aún pueden cambiar en su tramitación. La Junta prevé que el Parlamento de Andalucía lo apruebe antes de que acabe el año, para que entre en vigor el 1 de enero de 2027."
   ],
   "seo": [
    "tranvia-alcala-presupuestos-junta-2027",
    "Tranvía de Alcalá: 25,9 millones en Presupuestos de 2027",
    "La Junta destina más de 25,9 millones en 2027 al tranvía de Alcalá de Guadaíra: 15,7 para talleres, cocheras y trenes y 10,25 para arrancar el servicio.",
    [
     "tranvía de Alcalá de Guadaíra",
     "Presupuestos Junta de Andalucía 2027",
     "Consejería de Fomento y Movilidad",
     "Mario Muñoz-Atanet",
     "transporte metropolitano Sevilla",
     "Metro de Sevilla"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "07:41"
  },
  {
   "id": "ampa-ies-albero-vallado-objetos-patio",
   "sec": "alcala",
   "kicker": "Educación",
   "src": "AMPA Alberica (Instagram)",
   "fuente_url": "https://www.instagram.com/ampaalberica/p/Ddl7wAFNgRE/",
   "title": "El AMPA del IES Albero pide medidas para frenar el lanzamiento de objetos al patio además del nuevo vallado",
   "sub": "Las familias sostienen que la actuación en parte de la valla no basta y reclaman una solución integral al Ayuntamiento",
   "caption": "Cartel «Diario de obra» con el que el AMPA Alberica sigue los trabajos del vallado del IES Albero, en Alcalá de Guadaíra.",
   "foto": "ies-albero-vallado-ampa-of.jpg",
   "fotocredito": "Instagram de AMPA Alberica",
   "encuadre": "contain",
   "claves": [
    "El AMPA Alberica del IES Albero, en Alcalá de Guadaíra, denuncia el lanzamiento de objetos desde el exterior al patio del instituto.",
    "La asociación afirma que el Ayuntamiento se comprometió el pasado septiembre a terminar en un mes las obras del vallado.",
    "Las familias reclaman además medidas de refuerzo que impidan que los objetos sigan llegando al patio, y una reunión con la Delegación de Hábitat Urbano."
   ],
   "body": [
    "La Asociación de Madres y Padres (AMPA) Alberica del IES Albero, en Alcalá de Guadaíra, ha denunciado públicamente el lanzamiento de objetos al patio del instituto desde la zona exterior próxima a su perímetro. Considera insuficiente la actuación sobre parte de la valla y pide una solución integral para un centro con más de 1.000 alumnos, según sus datos.",
    "La asociación sigue el asunto en su perfil de Instagram con una serie gráfica titulada «Diario de una obra». En la primera entrega, del 22 de septiembre, escribió que los trabajos debían terminar en un mes y que ese era el compromiso del Ayuntamiento. También enumeró algunos de los objetos que, según las familias, llegan al patio: sartenes, cacerolas, palos y piedras.",
    "## Pendientes de una reunión",
    "En esa misma publicación, el AMPA explicaba que esperaba reunirse con el delegado de Hábitat Urbano, David Delgado, para conocer las medidas de refuerzo del vallado. Dos días después, en la tercera entrega, informó de que había recibido por fin una propuesta de cita tras meses de espera: un martes a las 10.30. La asociación se quejaba de que esa franja es imposible para sus integrantes por motivos de trabajo.",
    "En ese texto, el AMPA defiende el papel de estas asociaciones y sostiene que asumen gastos que corresponden a las administraciones, además de organizar a las familias de un centro de ese tamaño. Es la posición de la asociación.",
    "El Ayuntamiento no ha detallado públicamente qué medidas de refuerzo adoptará. La última publicación del AMPA sobre el instituto en Instagram es del 27 de octubre.",
    "<span class='howto'>Qué se pide: que el nuevo cerramiento del IES Albero incluya medidas que impidan lanzar objetos al patio desde el exterior. Quién lo pide: el AMPA Alberica, en su perfil de Instagram @ampaalberica. Plazo que cita: un mes desde el 22 de septiembre, según el compromiso que atribuye al Ayuntamiento.</span>"
   ],
   "seo": [
    "ampa-ies-albero-vallado-lanzamiento-objetos-patio",
    "AMPA del IES Albero: objetos al patio y nuevo vallado",
    "El AMPA Alberica del IES Albero de Alcalá de Guadaíra denuncia el lanzamiento de objetos al patio y pide medidas de refuerzo además del nuevo vallado.",
    [
     "IES Albero",
     "AMPA Alberica",
     "Alcalá de Guadaíra",
     "David Delgado",
     "Delegación de Hábitat Urbano",
     "centros educativos"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "07:41"
  },
  {
   "id": "policia-local-formacion-patinetes-vmp",
   "sec": "alcala",
   "kicker": "Seguridad vial",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9962/la-policia-local-refuerza-la-formacion-de-sus-agentes-en-la-normativa-y-el-control-de-los-vmp",
   "title": "La Policía Local de Alcalá forma a sus agentes en las nuevas normas y el control de los patinetes eléctricos",
   "sub": "El programa aborda la reforma del Reglamento de Circulación y los requisitos técnicos, y se suma a la vigilancia en el casco urbano y su entorno",
   "caption": "Coches patrulla de la Policía Local de Alcalá de Guadaíra, en una imagen de archivo.",
   "foto": "policia-local-vehiculos.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Policía Local de Alcalá de Guadaíra está completando un programa de formación sobre la normativa y el control de los vehículos de movilidad personal, como los patinetes.",
    "Según el delegado de Gobernación, Pedro Gracia, el curso aborda las últimas reformas legales, los nuevos requisitos técnicos y las directrices de la Dirección General de Tráfico.",
    "El Ayuntamiento no ha informado de cuántos agentes participan en el programa ni de cuándo terminará."
   ],
   "body": [
    "La Policía Local de Alcalá de Guadaíra está completando un programa de formación sobre la normativa y el control de los vehículos de movilidad personal (VMP), como los patinetes eléctricos, ha informado el Ayuntamiento este lunes 2 de noviembre. El Consistorio lo justifica por la creciente presencia de estos vehículos en las calles de la ciudad.",
    "Según la nota municipal, la formación actualiza los conocimientos de los agentes sobre la regulación de estos vehículos y sus herramientas de intervención y vigilancia. El delegado de Gobernación, Pedro Gracia, ha señalado que aborda «las recientes reformas legislativas» y que incluye los nuevos requisitos técnicos y las directrices de la Dirección General de Tráfico (DGT).",
    "Gracia añade que la preparación se completa con vigilancia activa en el casco urbano y en su entorno, con atención a las conductas que puedan poner en riesgo a las personas o afectar a la convivencia. El Ayuntamiento no ha detallado cuántos agentes participan, cuántas horas dura el programa ni cuándo terminará.",
    "## Una norma en vigor desde octubre",
    "El curso llega un mes después de la entrada en vigor de los cambios del Reglamento General de Circulación, aprobados por el Real Decreto 518/2026, que se aplican desde el 1 de octubre. La Policía Local ya había puesto en marcha una campaña informativa con un folleto sobre la nueva normativa para patinetes, bicicletas, motos y ciclomotores, autocaravanas y peatones.",
    "Como publicó este periódico entonces, usar un patinete exige ahora una edad mínima de 15 años y casco. Estos vehículos no pueden circular por las aceras, ni por autopistas, autovías o travesías, y deben llevar el alumbrado encendido.",
    "<span class='howto'>Dónde informarse: el folleto de la Policía Local con las modificaciones del Reglamento General de Circulación se puede descargar en la agenda de la web municipal, alcaladeguadaira.es. Teléfono del Ayuntamiento: 955 796 000.</span>"
   ],
   "seo": [
    "policia-local-alcala-formacion-patinetes-vmp",
    "Policía Local de Alcalá: formación sobre patinetes",
    "La Policía Local de Alcalá de Guadaíra completa un programa de formación sobre normas y control de patinetes tras la reforma del Reglamento de Circulación.",
    [
     "Policía Local de Alcalá",
     "patinetes eléctricos",
     "vehículos de movilidad personal",
     "Pedro Gracia",
     "Reglamento General de Circulación",
     "Real Decreto 518/2026"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "07:41"
  },
  {
   "id": "museo-mochilas-familias-misiones",
   "sec": "cultura",
   "kicker": "Museo de Alcalá",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9963/el-museo-de-alcala-propone-a-las-familias-experiencias-divertidas-de-misiones-didacticas-con-un-%E2%80%98kit%E2%80%99-especial",
   "title": "El Museo de Alcalá presta 30 mochilas gratuitas con misiones para que las familias recorran sus colecciones",
   "sub": "Pensadas para niños de 6 a 12 años, se recogen en recepción sin reserva e incluyen tarjetas con retos, bloc, lápices y un marco de observación",
   "caption": "El delegado de Patrimonio y Museos, Christopher Rivas, y Cecilia Rivera, impulsora de la idea, con una de las mochilas en el Museo de Alcalá.",
   "foto": "museo-mochilas-familias-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Museo de Alcalá de Guadaíra presta gratis una treintena de mochilas con actividades para visitar sus colecciones en familia.",
    "Están recomendadas para familias con niños de 6 a 12 años, se recogen en recepción sin reserva previa y se devuelven al terminar la visita.",
    "Las misiones parten de las colecciones del museo: los paisajes, las piezas arqueológicas, el arte religioso y el esqueleto de la ballena de Alcalá."
   ],
   "body": [
    "El Museo de Alcalá de Guadaíra presta desde ahora una treintena de mochilas gratuitas con misiones y material de dibujo para que las familias recorran sus colecciones a su ritmo. Las ha presentado el delegado de Patrimonio y Museos, Christopher Rivas, junto a Cecilia Rivera, impulsora de la idea, según ha informado el Ayuntamiento este lunes 2 de noviembre.",
    "Las mochilas están recomendadas para familias con menores de entre 6 y 12 años. Se recogen en la recepción del museo durante su horario de apertura y no hace falta reservar. No hay un horario cerrado ni un recorrido obligatorio, de modo que cada familia adapta las actividades al tiempo que tenga. Al acabar, la mochila y los materiales se devuelven en recepción para que los use otra familia.",
    "## Qué lleva cada mochila",
    "Cada una incluye tarjetas con pequeñas misiones, un bloc para dibujar y tomar notas, lápices de colores, lápiz de grafito, goma y un marco de observación para fijarse en detalles concretos de las piezas.",
    "Las misiones se apoyan en las colecciones. Las familias pueden comparar cómo distintos artistas han pintado un mismo paisaje y explorar con preguntas y retos las piezas arqueológicas y el arte religioso. Una de las pruebas se centra en la ballena de Alcalá: los niños tienen que localizar partes de su esqueleto y calcular su longitud aproximada contando sus propios pasos.",
    "«No queremos que los niños y niñas se limiten a mirar las piezas o a leer información, sino que puedan investigar, buscar, comparar, dibujar y descubrir por sí mismos», ha explicado Rivas, que defiende que la visita en familia permite compartir ese descubrimiento entre generaciones.",
    "La iniciativa se suma a las visitas guiadas, conferencias, talleres infantiles y actividades con escolares del museo. Entre su programación actual está la retrospectiva del escultor Antonio Cerero, abierta hasta el 8 de noviembre, y el <a href='#pedro-manzano-conservacion-preventiva'>II Ciclo de Conservación Preventiva</a>, organizado con el Consejo de Hermandades.",
    "<span class='howto'>Mochilas del Museo de Alcalá: gratuitas, sin reserva, unas 30 disponibles. Recomendadas para familias con niños de 6 a 12 años. Se piden en recepción durante el horario de apertura y se devuelven al terminar la visita.</span>"
   ],
   "seo": [
    "museo-alcala-mochilas-gratuitas-familias-misiones",
    "Museo de Alcalá: mochilas gratis para visitar en familia",
    "El Museo de Alcalá de Guadaíra presta 30 mochilas gratuitas con misiones y material de dibujo a familias con niños de 6 a 12 años, sin reserva previa.",
    [
     "Museo de Alcalá",
     "Christopher Rivas",
     "Cecilia Rivera",
     "actividades para familias",
     "ballena de Alcalá",
     "planes con niños"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "07:41"
  },
  {
   "id": "director-area-identidad-ayuntamiento-bop",
   "sec": "economia",
   "kicker": "Empleo público",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Bases-de-la-convocatoria-para-la-provision-por-libre-designacion-en-movilidad-interadministrativa-del-puesto-de-trabajo-de-Director-de-Identidad/",
   "title": "Alcalá busca por libre designación un director del Área de Identidad con 45.122 euros de complemento",
   "sub": "El puesto, abierto a funcionarios del grupo A1 de cualquier administración, dirigirá Turismo, Monumento Natural, Medio Ambiente, Cultura y Museos",
   "caption": "Datos principales de la convocatoria del puesto de director o directora del Área de Identidad, publicada en el BOP de Sevilla.",
   "foto": "director-area-identidad-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "El BOP de Sevilla publica el 3 de noviembre de 2026 las bases para cubrir el puesto de director o directora de Identidad del Ayuntamiento de Alcalá de Guadaíra.",
    "Se cubrirá por libre designación entre funcionarios de carrera del subgrupo A1 de cualquier administración, con nivel 27 y un complemento específico de 45.122,14 euros.",
    "El plazo será de 15 días hábiles desde que la convocatoria se publique en el BOE, donde aún no figura en el sumario del 3 de noviembre."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha convocado por libre designación el puesto de director o directora del Área de Identidad, según las <a href='https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Bases-de-la-convocatoria-para-la-provision-por-libre-designacion-en-movilidad-interadministrativa-del-puesto-de-trabajo-de-Director-de-Identidad/'>bases publicadas este martes 3 de noviembre en el BOP de Sevilla</a>. Las aprobó la Junta de Gobierno Local el 23 de octubre. El puesto dirigirá las delegaciones de Turismo, Monumento Natural, Medio Ambiente, Cultura y Museos.",
    "Pueden optar funcionarios de carrera de la Administración del Estado, de las comunidades autónomas y de la administración local, en servicio activo, del subgrupo A1 y con licenciatura o grado. Es lo que se llama movilidad interadministrativa: la plaza no se reserva a personal del propio Ayuntamiento.",
    "## Condiciones del puesto",
    "Se trata del puesto número 1.3.155.7 de la Relación de Puestos de Trabajo. Tiene complemento de destino de nivel 27 y un complemento específico de 45.122,14 euros, además del resto de retribuciones de su categoría, con jornada de plena disponibilidad. Las bases no recogen la retribución total.",
    "Según el anexo de funciones, quien lo ocupe dirigirá las delegaciones de Turismo, Monumento Natural, Medio Ambiente y Sostenibilidad, Memoria Democrática e Identidad Andaluza y Cultura, y Patrimonio y Museos. También coordinará sus unidades administrativas y su personal, y se ocupará de la programación de artistas, exposiciones y actividades, de la logística de espacios, transportes, seguros y montajes, y de las relaciones con otros organismos públicos.",
    "## Cómo se elige",
    "Los méritos que se valoran incluyen la experiencia en puestos de responsabilidad de la administración local, en planificación estratégica, en dirección de equipos y en la gestión de servicios culturales, turísticos, patrimoniales, ambientales o museísticos, además de la formación en esas materias. Las candidaturas admitidas pasarán por una entrevista, y la inasistencia sin justificar supone la exclusión.",
    "La convocatoria puede quedar desierta si ninguna candidatura se ajusta al perfil. El nombramiento debe hacerse en un máximo de dos meses desde que acabe el plazo de solicitudes, prorrogable un mes más.",
    "<span class='howto'>Plazo: 15 días hábiles desde el día siguiente a la publicación de la convocatoria en el Boletín Oficial del Estado, que todavía no figura en el sumario del 3 de noviembre. Dónde: Registro General del Ayuntamiento (plaza del Duque), registros auxiliares o por las vías de la Ley 39/2015, con el modelo del anexo II y el currículum. Bases completas en el BOP de Sevilla n.º 212 y en la sede electrónica municipal.</span>"
   ],
   "seo": [
    "director-area-identidad-ayuntamiento-alcala-libre-designacion",
    "Alcalá convoca el puesto de director del Área de Identidad",
    "El Ayuntamiento de Alcalá de Guadaíra convoca por libre designación el puesto de director de Identidad, con 45.122 euros de complemento específico.",
    [
     "Ayuntamiento de Alcalá de Guadaíra",
     "empleo público",
     "libre designación",
     "Área de Identidad",
     "BOP de Sevilla",
     "funcionarios A1"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "07:41"
  },
  {
   "id": "tenis-senior-mt200-oromana-noviembre",
   "sec": "deportes",
   "kicker": "Tenis",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8423/alcala-de-guadaira-volvera-a-ser-sede-del-tenis-internacional-con-el-xvi-senior-international-champion-mt200",
   "title": "El Club de Tenis Oromana acoge del 16 al 21 de noviembre el XVI Senior International Champion MT200",
   "sub": "El torneo del circuito internacional de veteranos de la ITF reunirá en Alcalá a jugadores de distintas nacionalidades en individuales, dobles y dobles mixtos",
   "caption": "Cartel del XVI Senior International Champion MT200, que se disputa en el Club de Tenis Oromana.",
   "foto": "tenis-senior-mt200-oromana-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "contain",
   "claves": [
    "El XVI Senior International Champion MT200 se juega del 16 al 21 de noviembre de 2026 en el Club de Tenis Oromana, en Alcalá de Guadaíra.",
    "Forma parte del circuito internacional de veteranos de la Federación Internacional de Tenis (ITF) y tiene al Ayuntamiento como patrocinador principal.",
    "Hay modalidades individuales, dobles masculinos, dobles femeninos y dobles mixtos, y las inscripciones se hacen en la web de la ITF."
   ],
   "body": [
    "El Club de Tenis Oromana, en Alcalá de Guadaíra, acoge del 16 al 21 de noviembre el XVI Senior International Champion MT200, un torneo del circuito internacional de veteranos de la Federación Internacional de Tenis (ITF), ha informado Alcalá+Deporte. El Ayuntamiento es su patrocinador principal, aunque no se ha publicado el importe de esa aportación.",
    "Se juega en las modalidades de individuales, dobles masculinos, dobles femeninos y dobles mixtos. La nota sitúa las categorías de edad entre los +30 y los +85 años, mientras que el cartel del torneo las sitúa entre los +35 y los +85, una diferencia que los organizadores no aclaran. El cartel cita como organizador a Senior Tennis Events.",
    "## Partidos por la mañana",
    "En ediciones anteriores han participado jugadores de países como Canadá, Suiza, Alemania, Portugal e Inglaterra. La organización prevé jugar preferentemente por la mañana, para que los participantes puedan visitar por la tarde lugares como el Castillo de Alcalá, el centro histórico o el parque de Oromana. El club ofrecerá también servicios especiales de restauración durante esos días.",
    "La organización invita a aficionados y público en general a acercarse a las instalaciones del club para ver los partidos. La nota no indica que haya que pagar entrada.",
    "En octubre, las pistas de Oromana acogieron el VI Torneo Ciudad de Alcalá, que ganó Matías Ponce.",
    "<span class='howto'>XVI Senior International Champion MT200. Del 16 al 21 de noviembre de 2026 en el Club de Tenis Oromana. Horarios y cuadros: en la web del club. Inscripciones: en la página de la ITF, ipin.itftennis.com, según el cartel.</span>"
   ],
   "seo": [
    "tenis-senior-international-champion-mt200-oromana",
    "Torneo MT200 de tenis sénior en Oromana, en noviembre",
    "El Club de Tenis Oromana de Alcalá acoge del 16 al 21 de noviembre el XVI Senior International Champion MT200, del circuito de veteranos de la ITF.",
    [
     "Club de Tenis Oromana",
     "tenis veteranos",
     "ITF",
     "Senior International Champion MT200",
     "Senior Tennis Events",
     "deporte Alcalá"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "07:41"
  },
  {
   "id": "zambomba-rosario-salesianos-28-noviembre",
   "sec": "hermandades",
   "kicker": "Hermandad del Rosario",
   "src": "Hermandad del Rosario",
   "fuente_url": "https://www.giglon.com/todos?idEvent=zambomba-hermandad-del-rosario20261128",
   "title": "La Hermandad del Rosario celebra su IV Zambomba el 28 de noviembre en el patio de los Salesianos de Alcalá",
   "sub": "Juan Tejero y el grupo Tirititrán encabezan el cartel de la cita, a las 13.00, con entrada de cinco euros y tapa de garbanzos incluida",
   "caption": "Cartel de la IV Zambomba del Rosario, organizada por la Hermandad del Rosario en el patio del Colegio Salesianos.",
   "foto": "zambomba-rosario-cartel-of.jpg",
   "fotocredito": "Hermandad del Rosario (vía Giglon)",
   "encuadre": "contain",
   "claves": [
    "La Hermandad del Rosario de Alcalá de Guadaíra celebra su IV Zambomba el sábado 28 de noviembre, a las 13.00, en el patio del Colegio Salesianos.",
    "Actúan Juan Tejero y el grupo Tirititrán, y el cartel anuncia otras actuaciones que no detalla.",
    "La entrada cuesta cinco euros e incluye una tapa de garbanzos; se vende en la plataforma Giglon."
   ],
   "body": [
    "La Hermandad del Rosario de Alcalá de Guadaíra celebrará su IV Zambomba el sábado 28 de noviembre, a las 13.00, en el patio del Colegio Salesianos, según el cartel que ha difundido la corporación. Actuarán Juan Tejero y el grupo Tirititrán, bajo el lema «Que suenen los villancicos y se encienda la Navidad».",
    "La entrada cuesta cinco euros e incluye una tapa de garbanzos. El cartel anuncia también un ambigú a precios populares y otras actuaciones, sin concretar cuáles. Las entradas <a href='https://www.giglon.com/todos?idEvent=zambomba-hermandad-del-rosario20261128'>ya están a la venta en la plataforma Giglon</a>.",
    "La hermandad <a href='#cautivo-elecciones-jose-david-cobos'>había adelantado la venta de entradas en el programa Alcalá Cofrade</a>, donde anunció además la entrega de su cuarto Olivo de Plata a Fernando Domínguez Troncoso, antiguo hermano mayor.",
    "Es una de las zambombas de estas fechas en la ciudad. La <a href='#agenda-cultural-noviembre-2026'>agenda cultural de noviembre</a> incluye la del Coro de San Miguel el día 27, y la Hermandad del Dulce Nombre tiene la suya prevista para el 20 de diciembre.",
    "<span class='howto'>IV Zambomba del Rosario. Sábado 28 de noviembre, 13.00. Patio del Colegio Salesianos, Alcalá de Guadaíra. Entrada: 5 euros, con tapa de garbanzos. Venta en giglon.com.</span>"
   ],
   "seo": [
    "zambomba-hermandad-rosario-salesianos-alcala",
    "IV Zambomba del Rosario en Salesianos: 28 de noviembre",
    "La Hermandad del Rosario de Alcalá celebra su IV Zambomba el 28 de noviembre en Salesianos con Juan Tejero y Tirititrán. Entrada de cinco euros con tapa.",
    [
     "Hermandad del Rosario",
     "zambomba",
     "Colegio Salesianos",
     "Juan Tejero",
     "Tirititrán",
     "Navidad en Alcalá"
    ]
   ],
   "iso": "2026-11-03",
   "hora": "07:41"
  },
  {
   "id": "ayuntamiento-confirma-muerte-ivan-romano-urda",
   "sec": "sucesos",
   "hora": "08:35",
   "kicker": "Accidente de Urda",
   "iso": "2026-11-01",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Instagram)",
   "fuente_url": "https://www.instagram.com/anaisabel_jc/p/DfLNGFsoADq/",
   "title": "El Ayuntamiento confirma la muerte de Iván Romano, el policía de Alcalá que viajaba en el AVE de Urda",
   "sub": "El Consistorio traslada el pésame a la familia del policía nacional alcalareño de 42 años, que viajaba en el coche 8 del tren de Renfe que chocó con un Iryo el 28 de octubre",
   "caption": "Equipos de rescate sobre los restos de uno de los trenes accidentados en Urda (Toledo), en una imagen de archivo.",
   "foto": "urda-policia-alcala-rescate-tv.jpg",
   "fotocredito": "Guardia Civil (vía MiGuadaíraTV)",
   "encuadre": "center 30%",
   "rel": [
    "policia-alcala-desaparecido-urda",
    "accidente-tren-urda-ave-iryo"
   ],
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha confirmado el fallecimiento de Iván Romano Ramos, vecino de la ciudad, en el accidente ferroviario de Urda (Toledo) del 28 de octubre.",
    "Iván Romano, policía nacional de 42 años, viajaba en el coche 8 del AVE 2080 de Renfe, que alcanzó por detrás a un tren de Iryo en la línea Madrid-Sevilla.",
    "El Consistorio ha trasladado el pésame a su familia y lo ha extendido a todas las víctimas del choque, en una publicación del sábado 31 de octubre en Instagram."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha confirmado el fallecimiento de Iván Romano Ramos, el policía nacional alcalareño de 42 años que viajaba en el AVE del <a href='#accidente-tren-urda-ave-iryo'>choque de trenes de Urda (Toledo)</a>. Lo ha hecho en una publicación del sábado 31 de octubre en Instagram, compartida por el perfil del Ayuntamiento y por el de la alcaldesa, Ana Isabel Jiménez.",
    "En ese mensaje, el Consistorio expresa su «profundo pesar» por la muerte de quien define como «vecino de nuestra ciudad» y traslada su pésame y su cariño a la familia, los amigos y los seres queridos. Extiende las condolencias a las familias de todas las personas fallecidas y desea una pronta recuperación a los heridos. «Alcalá de Guadaíra se une a su dolor y permanece a su lado», concluye la publicación.",
    "Varios medios de la provincia han publicado también la confirmación de su muerte. La publicación municipal no detalla cuándo se produjo la identificación ni la fecha del sepelio.",
    "## Cuatro días de espera",
    "Iván Romano viajaba en el coche 8 del AVE 2080 de Renfe, que el miércoles 28 de octubre alcanzó por detrás a un tren de Iryo en el punto kilométrico 118 de la línea de alta velocidad Madrid-Sevilla, entre Los Yébenes y Urda. Volvía a Alcalá para pasar unos días con su familia.",
    "Su entorno difundió el mismo miércoles en redes sociales un llamamiento para pedir información sobre su paradero, y el jueves la familia se desplazó a Toledo. El viernes 30, la Guardia Civil les comunicó que <a href='#policia-alcala-desaparecido-urda'>no figuraba entre los heridos hospitalizados</a>, aunque entonces no había confirmación oficial de su fallecimiento.",
    "La identificación de las víctimas del accidente la hacen los forenses de Toledo y Ciudad Real mediante huellas dactilares y cotejo de ADN con familiares directos. La Guardia Civil recuerda que las identificaciones se comunican siempre en persona, nunca por mensaje de texto ni por teléfono.",
    "## Luto en Alcalá",
    "El Ayuntamiento guardó un minuto de silencio el día del accidente y <a href='#minuto-silencio-urda-alcala-suspende-actos'>suspendió todos sus actos</a> durante los tres días de luto oficial decretados por el Gobierno, del jueves 29 al sábado 31 de octubre. Por ese motivo se aplazaron, entre otros, los <a href='#panarrafest-suspendido-luto-oficial'>festivales PrePanarraFest y PanarraFest</a>.",
    "<span class='howto'>Renfe atiende a los familiares de los pasajeros en el teléfono gratuito 900 10 10 20 e Iryo, en el 900 001 403. Ante mensajes sospechosos que dicen venir de la Guardia Civil para comunicar identificaciones, llame al 062.</span>"
   ],
   "seo": [
    "ayuntamiento-alcala-confirma-muerte-ivan-romano-accidente-urda",
    "Confirmada la muerte de Iván Romano en el accidente de Urda",
    "El Ayuntamiento de Alcalá de Guadaíra confirma la muerte de Iván Romano Ramos, policía nacional alcalareño que viajaba en el AVE del accidente de Urda.",
    [
     "Iván Romano",
     "accidente de Urda",
     "Alcalá de Guadaíra",
     "policía nacional",
     "AVE",
     "Iryo",
     "luto oficial"
    ]
   ]
  },
  {
   "id": "cb-alcala-gana-san-fernando-tercera-feb",
   "sec": "deportes",
   "hora": "08:35",
   "kicker": "Baloncesto",
   "iso": "2026-11-01",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8425/el-cb-alcala-se-impone-al-cb-san-fernando-76-70-y-suma-una-nueva-victoria-en-tercera-feb",
   "title": "El CB Alcalá gana 76-70 al CB San Fernando en el Pabellón Distrito Sur",
   "sub": "El equipo sénior masculino alcalareño suma una nueva victoria en Tercera FEB en el partido disputado el sábado 31 de octubre",
   "caption": "Los jugadores y el cuerpo técnico del CB Alcalá celebran la victoria ante el marcador del Pabellón Distrito Sur, que refleja el 76-70.",
   "foto": "cb-alcala-san-fernando-tercera-feb-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "claves": [
    "El CB Alcalá ganó 76-70 al CB San Fernando el sábado 31 de octubre en el Pabellón Distrito Sur, en partido de Tercera FEB.",
    "Es una nueva victoria del equipo sénior masculino alcalareño en la competición nacional, según el portal deportivo municipal Alcalá+Deporte."
   ],
   "body": [
    "El Club Baloncesto Alcalá ganó por 76-70 al CB San Fernando en el partido de Tercera FEB disputado el sábado 31 de octubre en el Pabellón Distrito Sur de Alcalá de Guadaíra, según ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento.",
    "El equipo sénior masculino alcalareño suma así una nueva victoria en la liga. El encuentro se decidió por seis puntos, con un rival que mantuvo el partido abierto hasta el final, y se jugó con el apoyo de la afición local en las gradas.",
    "El marcador del pabellón reflejó al final 76 puntos para el equipo local y 70 para el visitante, con cuatro faltas por equipo en el último periodo.",
    "## Una liga nacional",
    "La Tercera FEB es una de las categorías nacionales del baloncesto español que organiza la Federación Española de Baloncesto. El CB Alcalá disputa sus partidos como local en el Pabellón Distrito Sur.",
    "La información municipal no detalla la anotación individual ni la posición del equipo en la clasificación tras esta jornada.",
    "<span class='howto'>El calendario y los resultados de los clubes alcalareños se publican en el portal municipal Alcalá+Deporte (alcalamasdeporte.com), que también recoge la agenda de las instalaciones deportivas de la ciudad.</span>"
   ],
   "seo": [
    "cb-alcala-gana-cb-san-fernando-76-70-tercera-feb",
    "El CB Alcalá gana 76-70 al CB San Fernando en Tercera FEB",
    "El CB Alcalá vence 76-70 al CB San Fernando en el Pabellón Distrito Sur y suma una nueva victoria en Tercera FEB, la liga nacional de baloncesto.",
    [
     "CB Alcalá",
     "CB San Fernando",
     "Tercera FEB",
     "baloncesto",
     "Pabellón Distrito Sur",
     "Alcalá de Guadaíra"
    ]
   ]
  },
  {
   "id": "puente-rueda-prensa-urda-centro-control",
   "sec": "politica",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-31",
   "src": "El Panadero",
   "title": "Puente atribuye el choque de Urda a un fallo del centro de control de Adif y se niega a dimitir",
   "sub": "El ministro de Transportes dice que en la sala de Atocha había 16 controladores, que el sistema LZB ha tenido 170 incidencias este año y que comparecerá el martes en el Congreso",
   "caption": "Óscar Puente, en la reunión del centro de coordinación de la emergencia en Toledo, el jueves 29 de octubre.",
   "foto": "urda-puente-comparecencia-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "rel": [
    "accidente-tren-urda-ave-iryo",
    "urda-audios-centro-control-adif"
   ],
   "claves": [
    "El ministro de Transportes, Óscar Puente, atribuyó el 30 de octubre de 2026 el choque de trenes de Urda (Toledo) a un fallo del centro de control de Adif en Atocha y descartó dimitir.",
    "Según Puente, en la sala de control había 16 controladores y el sistema LZB ha registrado 170 incidencias en 2026, dentro de lo habitual en Europa.",
    "Puente comparecerá a petición propia el martes 3 de noviembre a las 17:00 ante la Diputación Permanente del Congreso.",
    "El Gobierno de Castilla-La Mancha mantiene en 69 los muertos verificados, pero prevé que la cifra supere los 70."
   ],
   "body": [
    "El ministro de Transportes, Óscar Puente, atribuyó el viernes 30 de octubre a un fallo en el centro de control de Adif en Madrid-Puerta de Atocha el choque de trenes de Urda (Toledo), que ha causado al menos 69 muertos, y descartó dimitir. Lo dijo en una rueda de prensa de casi dos horas en la sede del ministerio.",
    "Según Puente, los indicios apuntan a que el accidente se debe a un fallo del centro de control, que asumió la gestión del tráfico después de la avería del sistema de seguridad LZB. El ministro explicó que los operadores sabían que el tren de Iryo seguía parado en la vía cuando el AVE de Renfe lo alcanzó, pero evitó culpar a un trabajador concreto: la investigación, dijo, examinará cada decisión, cada comunicación y cada fallo del sistema.",
    "El ministro avisó de que, si se demuestran fallos de control o de organización, se exigirán responsabilidades individuales por los cauces que correspondan. Sobre Iryo, aseguró que no quiere culpar a la compañía.",
    "## Dieciséis controladores y 170 incidencias",
    "En la sala del centro de control de Atocha había 16 controladores en el momento del accidente, según Puente. El ministro afirmó que el LZB, el sistema que vigila desde la cabina la velocidad de los trenes y la distancia entre ellos, ha registrado 170 incidencias en lo que va de 2026, una cifra que situó dentro de lo habitual en las redes europeas.",
    "El LZB se está sustituyendo por el sistema europeo ERTMS. En la línea Madrid-Sevilla la instalación está terminada, pero el nuevo sistema todavía no funciona porque tiene que superar las fases de pruebas, explicó el ministro. Puente abrió además la posibilidad de cortar temporalmente la línea Madrid-Barcelona para acelerar su modernización, una medida que está en estudio y no se ha decidido.",
    "## «No me voy a esconder detrás de nadie»",
    "Puente descartó dimitir. «No me voy a esconder detrás de nadie», dijo, y aseguró que seguirá adelante con el respaldo del presidente del Gobierno, Pedro Sánchez. Solo dejaría el cargo, explicó, si su continuidad perjudicara al proyecto político del Gobierno. Recordó que el PSOE no pidió la dimisión de la ministra de Fomento Ana Pastor tras el accidente de Angrois de 2013.",
    "El ministro dijo que seguirá viajando en tren y expresó su «absoluta desolación» por la muerte de la exministra Fátima Báñez, que viajaba en el Iryo. Comparecerá a petición propia el martes 3 de noviembre a las 17:00 ante la Diputación Permanente del Congreso. Sus primeras explicaciones, del día del accidente, están en <a href='#urda-puente-centro-control-adif'>la pieza sobre la orden del centro de control</a>.",
    "## Más de 70 muertos, previsiblemente",
    "El Gobierno de Castilla-La Mancha mantiene en 69 los muertos verificados, aunque su presidente, Emiliano García-Page, admitió el viernes que la cifra superará previsiblemente los 70. Hay 70 denuncias de desaparición y 31 bolsas con restos parciales pendientes de identificar. «Cuando hablamos de fallecidos estamos hablando de cuerpos completos», explicó. La emergencia ha bajado al nivel 1.",
    "La alta velocidad entre Madrid y Andalucía, la que usan los vecinos de Alcalá de Guadaíra desde Sevilla-Santa Justa, sigue cortada sin fecha de reapertura. El balance y la situación en Alcalá están en <a href='#accidente-tren-urda-ave-iryo'>la noticia principal del accidente</a>, y las alternativas para viajar, en <a href='#urda-viajar-sevilla-madrid-sin-ave'>la guía para ir a Madrid sin AVE</a>."
   ],
   "seo": [
    "oscar-puente-rueda-prensa-urda-centro-control-adif",
    "Puente culpa al control de Adif del choque de Urda",
    "Óscar Puente atribuye el choque de trenes de Urda a un fallo del centro de control de Adif, descarta dimitir y comparecerá el martes en el Congreso.",
    [
     "Óscar Puente",
     "accidente de Urda",
     "Adif",
     "centro de control de Atocha",
     "sistema LZB",
     "Congreso",
     "AVE Madrid-Sevilla"
    ]
   ]
  },
  {
   "id": "agenda-cultural-noviembre-2026",
   "sec": "cultura",
   "kicker": "Agenda cultural",
   "iso": "2026-10-31",
   "hora": "09:12",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/agenda",
   "title": "Joana Jiménez, María Terremoto y Rancapino Chico, en la agenda cultural de noviembre en Alcalá",
   "sub": "El auditorio Riberas del Guadaíra programa cinco espectáculos entre el 6 y el 28 de noviembre y el Centro San Miguel ofrece flamenco, poesía y teatro casi todos los fines de semana",
   "caption": "Cartel del concierto de Joana Jiménez «Al compás de la Tercera Palabra», el 13 de noviembre en el auditorio Riberas del Guadaíra.",
   "foto": "agenda-cultural-noviembre-2026-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "La agenda municipal de Alcalá de Guadaíra para noviembre de 2026 incluye en el auditorio Riberas del Guadaíra a Joana Jiménez (13 de noviembre), la gala de clausura de Sevilla Flamenca (15), el musical «Cenicienta, la Leyenda» (22) y a Rancapino Chico (28).",
    "La gala de Sevilla Flamenca, con María Terremoto, Emilio Caracafé, El Petete y Jóvenes de las 3000, es por invitación: se recogen desde el 5 de noviembre, dos por persona.",
    "El Centro San Miguel programa del 7 al 28 de noviembre baile flamenco, cante, poesía, comedia y teatro, casi todo con entrada libre hasta completar aforo.",
    "El luto oficial que suspendió los actos municipales termina a las 24.00 horas del sábado 31 de octubre."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha publicado en su agenda la programación cultural de noviembre, que reúne en el auditorio Riberas del Guadaíra a Joana Jiménez, Rancapino Chico y la gala de clausura del circuito Sevilla Flamenca. La oferta se reanuda tras el luto oficial por el accidente de Urda, que termina a las 24.00 horas del sábado 31 de octubre.",
    "El luto obligó a suspender todos los actos municipales del 29 al 31 de octubre, entre ellos <a href='#panarrafest-suspendido-luto-oficial'>el PanarraFest y el PrePanarraFest</a>, cuyas entradas se devuelven. La agenda de noviembre mantiene las fechas anunciadas para el resto del otoño.",
    "## Cinco citas en el auditorio",
    "Abre el mes el viernes 6 de noviembre, a las 20.30 horas, «Homenaje al Soul», con Kike Baeza y The Soul Makers. Es un concierto solidario por el 50 aniversario de la Asociación Alcalareña de Educación Especial, con entradas en la web municipal de venta.",
    "El viernes 13 de noviembre, a las 21.00 horas, la cantante Joana Jiménez presenta «Al compás de la Tercera Palabra». Según la ficha municipal, M. José Alcalá y Jesús Navarro actuarán antes del concierto principal. Las entradas se venden en entradas.alcaladeguadaira.es.",
    "El domingo 15 de noviembre, a las 13.00 horas, llega la gala de clausura del circuito Sevilla Flamenca, con María Terremoto, Emilio Caracafé, El Petete y Jóvenes de las 3000. La entrada es por invitación, que se reparte en el propio auditorio y en la Casa de la Cultura desde el 5 de noviembre, con un máximo de dos por persona.",
    "Para el público familiar, el domingo 22 de noviembre a las 12.00 horas se representa el musical «Cenicienta, la Leyenda», con entradas en giglon.com. El sábado 28 de noviembre, a las 20.00 horas, Alonso Núñez «Rancapino Chico» trae «El cante por Navidad», un repertorio de villancicos adaptados a palos flamencos, con Antonio Higuero a la guitarra. Las entradas también están en giglon.com.",
    "## El Centro San Miguel y las exposiciones",
    "El Centro San Miguel tiene actividad del 7 al 28 de noviembre. El 7, a las 20.00 horas, la compañía de Verónica Nieto baila «La Roldana: la indómita escultora»; el 13, a las 21.00, hay recital de baile con Gloria del Rosario; el 20, a las 19.30, Luis Brenes ofrece un recital de poesía de homenaje a Alcalá, y el 21, a las 13.00, canta Elvira Ponce dentro del ciclo Otoño Flamenco en Sevilla. Los días 18 y 19 abre sus puertas por el Día Mundial del Flamenco.",
    "El mismo centro acoge el 21 y el 22 un festival internacional de comedia del arte de la Asociación Cultural La Sala, con inscripción gratuita, la zambomba del Coro de San Miguel el 27 (entrada de 5 euros, con reserva) y el teatro «Rebelión», de la Escuela Dos Lunas, el 28. El resto de sus actividades son de entrada libre hasta completar aforo.",
    "En las salas siguen abiertas la retrospectiva del escultor Antonio Cerero en el Museo de Alcalá, hasta el 8 de noviembre, y la exposición del XXIII Concurso de Pintura al Aire Libre Emilio Sánchez Perrier en la Casa de la Cultura, hasta el 15.",
    "<span class='howto'>Auditorio Riberas del Guadaíra: Soul (6 de noviembre, 20.30), Joana Jiménez (13, 21.00), Sevilla Flamenca (15, 13.00, por invitación desde el 5), «Cenicienta, la Leyenda» (22, 12.00) y Rancapino Chico (28, 20.00). Jornadas de Narración y Educación: 14 y 15 de noviembre en la biblioteca Editor José Manuel Lara, con inscripción gratuita hasta el 6. Taller de gestión emocional: 20 de noviembre, 19.00, Distrito Norte, gratuito con reserva. Programación completa en alcaladeguadaira.es/agenda.</span>"
   ],
   "seo": [
    "agenda-cultural-noviembre-alcala-joana-jimenez-rancapino",
    "Agenda cultural de noviembre en Alcalá de Guadaíra",
    "Joana Jiménez, María Terremoto con Sevilla Flamenca y Rancapino Chico encabezan la agenda de noviembre de Alcalá de Guadaíra en el auditorio y San Miguel.",
    [
     "agenda cultural",
     "auditorio Riberas del Guadaíra",
     "Joana Jiménez",
     "Rancapino Chico",
     "María Terremoto",
     "Sevilla Flamenca",
     "Centro San Miguel"
    ]
   ]
  },
  {
   "id": "accidente-tren-urda-ave-iryo",
   "sec": "sucesos",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-30",
   "src": "El Panadero",
   "title": "Urda, dos días después: 69 muertos, 43 heridos ingresados y solo cinco víctimas identificadas",
   "sub": "La Guardia Civil comunica a la familia del policía de Alcalá desaparecido que no está entre los hospitalizados; Renfe retrasa al menos al 3 de noviembre su plan alternativo por el plazo que exigen los maquinistas",
   "caption": "Pedro Sánchez y Emiliano García-Page, en la reunión del centro de coordinación de la emergencia en Toledo, el jueves 29 de octubre.",
   "foto": "urda-cecopi-sanchez-page-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "rel": [
    "policia-alcala-desaparecido-urda",
    "urda-fatima-banez-exministra"
   ],
   "claves": [
    "Al menos 69 personas han muerto en el choque de un AVE de Renfe y un Iryo en Urda (Toledo) el 28 de octubre de 2026. Siguen ingresadas 43: 39 en hospitales de Castilla-La Mancha, 17 de ellas en la UCI, y cuatro en Madrid.",
    "Los forenses han practicado 48 autopsias, pero hasta el viernes 30 solo se habían comunicado oficialmente cinco identificaciones. La Guardia Civil alerta de SMS falsos que suplantan al cuerpo.",
    "La Guardia Civil ha comunicado a la familia del policía nacional de Alcalá de Guadaíra que viajaba en el AVE que no está entre los hospitalizados; no hay confirmación oficial de su fallecimiento.",
    "Renfe no pondrá en marcha su plan alternativo de transporte antes del martes 3 de noviembre. Teléfonos para familias: Renfe 900 10 10 20 e Iryo 900 001 403."
   ],
   "body": [
    "Dos días después del choque de dos trenes de alta velocidad en Urda (Toledo), el balance provisional es de 69 muertos y 43 heridos que siguen ingresados. Un AVE de Renfe alcanzó a un Iryo a las 8:54 del miércoles 28 de octubre en la línea Madrid-Sevilla, que sigue cortada sin fecha de reapertura.",
    "En Alcalá de Guadaíra, la Guardia Civil ha comunicado a la familia de <a href='#policia-alcala-desaparecido-urda'>Iván Romano, el policía nacional alcalareño que viajaba en el coche 8 del AVE</a>, que no se encuentra entre los hospitalizados. Según sus allegados, les han pedido que se preparen para la peor noticia, aunque el viernes no había confirmación oficial de su fallecimiento ni de su identificación.",
    "El choque se produjo en el punto kilométrico 118, entre Los Yébenes y Urda. El AVE 2080 chocó por detrás contra el Iryo 6076 y dos coches del Iryo descarrilaron y cayeron por un terraplén. En los dos trenes viajaban 544 pasajeros, según el Gobierno de Castilla-La Mancha.",
    "<img src='fotos/urda-gfx-trenes.jpg' alt='Gráfico: el AVE 2080 de Renfe alcanzó por detrás al Iryo 6076; los dos iban de Madrid a Sevilla-Santa Justa' loading='lazy' style='display:block;width:100%;height:auto;margin:6px 0'>",
    "García-Page mantuvo el viernes 30 el balance en 69 muertos, aunque no descarta que aumente porque quedan restos humanos pendientes de identificar. De los 43 heridos ingresados, 39 están en hospitales de Castilla-La Mancha, 17 de ellos en la UCI, y cuatro en Madrid; las autoridades sanitarias han informado de la mejoría de cuatro pacientes que estaban muy graves. La Guardia Civil ha recogido 70 denuncias de desaparición, que pueden incluir duplicados; dos de esas personas han sido localizadas con vida.",
    "Las grúas movieron el jueves el coche que cayó por el terraplén, sin que aparecieran más cuerpos. Los forenses de Toledo y Ciudad Real han practicado 48 autopsias, pero hasta el viernes solo se habían comunicado oficialmente cinco identificaciones, hechas con las huellas dactilares; el resto se hará también con muestras de ADN de los familiares. El nivel de emergencia ha bajado del 2 al 1, lo que permitirá reducir los efectivos desplegados en la zona.",
    "La Guardia Civil ha denunciado que algunos familiares de las víctimas reciben SMS de delincuentes que se hacen pasar por el cuerpo para comunicar supuestas identificaciones. El instituto armado recuerda que esa comunicación solo se hace en persona, nunca por mensaje de texto, WhatsApp ni llamada.",
    "## Una avería en el sistema de control",
    "El ministro de Transportes, Óscar Puente, sitúa el origen en la orden del centro de control de Adif en Atocha de reanudar la marcha tras una avería del sistema de control LZB hacia las 8:30.",
    "Las grabaciones de las comunicaciones del centro de control, difundidas el miércoles por la noche, recogen que a las 8:36 Atocha ordenó al maquinista del AVE reanudar «con marcha normal» y que a las 8:48 la maquinista del Iryo avisó de que seguía parada. <a href='#urda-audios-centro-control-adif'>Qué dicen los audios</a>.",
    "<img src='fotos/urda-gfx-secuencia.jpg' alt='Gráfico: secuencia del accidente de Urda, de la avería del sistema LZB al descarrilamiento de dos coches del Iryo' loading='lazy' style='display:block;width:100%;height:auto;margin:6px 0'>",
    "La jueza de Orgaz (Toledo) que instruye la causa ha decretado el secreto de sumario y ha ordenado incautar las cajas negras de los trenes. La Guardia Civil ha interrogado al operario que autorizó la reanudación, como recoge <a href='#urda-investigacion-juzgado-orgaz-guardia-civil'>la información sobre la investigación</a>.",
    "<img src='fotos/urda-gfx-terraplen.jpg' alt='Gráfico: sección transversal del terraplén por el que cayeron dos coches del Iryo' loading='lazy' style='display:block;width:100%;height:auto;margin:6px 0'>",
    "## Alta velocidad cortada y luto en Alcalá",
    "Adif mantiene cortada sin fecha la alta velocidad entre Madrid y Andalucía. Renfe ha retrasado al martes 3 de noviembre, como pronto, el plan alternativo de transporte que iba a activar este viernes 30, porque el sindicato de maquinistas Semaf exige el plazo reglamentario de 96 horas para cambiar los cuadros de servicio. La venta de billetes en esa relación sigue parada hasta el 13 de diciembre. Las opciones están en <a href='#urda-viajar-sevilla-madrid-sin-ave'>la guía para viajar a Madrid sin AVE</a>.",
    "Los dos trenes iban a Sevilla-Santa Justa, la estación que usan los vecinos de Alcalá de Guadaíra para ir a Madrid.",
    "El Ayuntamiento de Alcalá ha decretado tres días de luto y ha suspendido todos sus actos hasta la medianoche del sábado 31, entre ellos <a href='#panarrafest-suspendido-luto-oficial'>el PanarraFest</a>.",
    "La Guardia Civil ha confirmado la muerte de uno de sus agentes, un sevillano de 31 años destinado en Madrid que viajaba en el AVE. La CEOE y el PP confirmaron el jueves la muerte de <a href='#urda-fatima-banez-exministra'>la exministra Fátima Báñez</a>, presidenta de la Fundación CEOE, que viajaba en el Iryo.",
    "Sánchez prometió el jueves aclarar «hasta el último detalle» y reforzar la seguridad ferroviaria. El ministro de Transportes, Óscar Puente, comparecerá el martes 3 de noviembre a las 17:00 ante la Diputación Permanente del Congreso. El luto oficial rige en toda España hasta el sábado 31.",
    "Es el segundo accidente grave del año en esta línea, tras el descarrilamiento de Adamuz (Córdoba), que causó 46 muertos en enero.",
    "<span class='howto'>Familiares de viajeros: Renfe, 900 10 10 20; Iryo, 900 001 403; juzgado de Orgaz, 925 317 020. Familiares de primer grado de personas no localizadas: oficinas de la Guardia Civil para muestras de ADN en Madrid, Sevilla, Córdoba y Toledo. Las identificaciones solo se comunican en persona; ante mensajes o llamadas sospechosas, Guardia Civil (062) o INCIBE (017). Emergencias: 112.</span>",
    "Rectificación, 28 de octubre de 2026: una versión anterior daba 50 muertos y 179 heridos, cifras que el Gobierno de Castilla-La Mancha no había confirmado. 29 de octubre: las 29 denuncias de desaparición eran del miércoles por la noche; hasta el jueves por la mañana fueron 64. 30 de octubre: se ha retirado el nombre del guardia civil fallecido, que las fuentes dan de forma distinta. 30 de octubre, noche: los 39 ingresados del balance anterior eran los de Castilla-La Mancha; con los de Madrid son 43."
   ],
   "seo": [
    "accidente-tren-urda-toledo-ave-iryo",
    "Accidente de Urda: 69 muertos y 43 heridos ingresados",
    "El choque de un AVE y un Iryo en Urda (Toledo) deja 69 muertos y 43 ingresados. Solo cinco víctimas identificadas; Renfe retrasa su plan alternativo.",
    [
     "accidente ferroviario",
     "Urda",
     "AVE Madrid-Sevilla",
     "Iryo",
     "Adif",
     "identificación de víctimas",
     "luto oficial",
     "Santa Justa"
    ]
   ],
   "actualizada": "2026-10-30T23:14"
  },
  {
   "id": "dgt-puente-todos-los-santos-2026",
   "sec": "alcala",
   "kicker": "Tráfico",
   "iso": "2026-10-30",
   "hora": "23:14",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=9-RjEl5XncY&t=809s",
   "title": "La DGT prevé 5,34 millones de viajes en el puente de Todos los Santos, con la A-92 entre las vías más cargadas",
   "sub": "En Andalucía la operación especial dura hasta la medianoche del lunes 2, festivo, y Tráfico espera más coches por el corte de la alta velocidad tras el accidente de Urda",
   "caption": "Tráfico en una autovía de acceso a Sevilla al atardecer.",
   "foto": "dgt-puente-todos-los-santos-2026.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Dirección General de Tráfico (DGT) prevé 5.340.000 desplazamientos de largo recorrido por carretera en el puente de Todos los Santos de 2026.",
    "La operación especial empezó a las 15.00 del viernes 30 de octubre y en Andalucía se prolonga hasta las 24.00 del lunes 2 de noviembre, festivo en la comunidad.",
    "La A-92, que atraviesa el término de Alcalá de Guadaíra, está entre los corredores andaluces con más tráfico previsto, junto a la A-4, la A-49 y la AP-4.",
    "La DGT espera más coches y autobuses porque la alta velocidad entre Madrid y Andalucía sigue cortada tras el accidente de Urda."
   ],
   "body": [
    "La Dirección General de Tráfico (DGT) prevé 5.340.000 desplazamientos de largo recorrido por las carreteras españolas en el puente de Todos los Santos. La operación especial empezó a las 15.00 del viernes 30 de octubre y en Andalucía durará hasta la medianoche del lunes 2 de noviembre, festivo en la comunidad. Afecta a Alcalá de Guadaíra porque la A-92, que cruza su término, está entre las vías más cargadas.",
    "Tráfico advierte de que este año la circulación puede ser mayor en Andalucía por la suspensión de la alta velocidad con Madrid tras el <a href='#accidente-tren-urda-ave-iryo'>accidente de Urda (Toledo)</a>. La DGT calcula que parte de los viajeros que pensaban ir en tren usarán el autobús o el coche. Las alternativas para ir a Madrid están en <a href='#urda-viajar-sevilla-madrid-sin-ave'>la guía para viajar sin AVE</a>.",
    "## Cuándo habrá más tráfico",
    "Las primeras retenciones se esperaban el mismo viernes entre las 16.00 y las 22.00, en las salidas de las grandes ciudades y en los accesos a la costa y a las zonas turísticas. El sábado 31 la circulación seguirá siendo intensa por la mañana, sobre todo entre las 8.00 y las 14.00.",
    "En Andalucía, los desplazamientos se concentrarán en los grandes corredores: la A-4, la A-92, la A-49 y la AP-4, además de las vías de acceso a las zonas turísticas y de segunda residencia. La operación retorno será distinta a la de otras comunidades, donde empezará el domingo por la tarde: aquí se concentrará el lunes 2 por la tarde, con retenciones previstas en los accesos a las ciudades.",
    "Para el dispositivo, Tráfico ha desplegado agentes de la Guardia Civil, helicópteros, drones, radares y cámaras. También habilitará carriles adicionales y reversibles en los tramos con más intensidad y parará las obras que puedan afectar a la circulación.",
    "La DGT recomienda planificar el viaje, consultar el estado de las carreteras antes de salir y extremar la precaución por la posible lluvia o niebla y por la reducción de horas de luz propia de estas fechas.",
    "<span class='howto'>Operación especial de Todos los Santos en Andalucía: desde las 15.00 del viernes 30 de octubre hasta las 24.00 del lunes 2 de noviembre. Horas de más tráfico: viernes de 16.00 a 22.00, sábado de 8.00 a 14.00 y lunes por la tarde (retorno). Estado de las carreteras: teléfono 011 y web de la DGT.</span>"
   ],
   "seo": [
    "dgt-operacion-puente-todos-los-santos-a92",
    "La DGT prevé 5,34 millones de viajes en el puente",
    "La DGT prevé 5,34 millones de viajes en el puente de Todos los Santos. En Andalucía la operación dura hasta el lunes 2 y la A-92 irá muy cargada.",
    [
     "DGT",
     "operación salida",
     "Todos los Santos",
     "A-92",
     "tráfico",
     "accidente de Urda",
     "Andalucía"
    ]
   ]
  },
  {
   "id": "halloween-suspendido-survival-zombie-aplazado",
   "sec": "cultura",
   "kicker": "Halloween",
   "iso": "2026-10-30",
   "hora": "23:14",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=9-RjEl5XncY&t=594s",
   "title": "Alcalá se queda sin Halloween: cancelada la fiesta de la Casa de la Juventud y aplazado el Survival Zombie",
   "sub": "El luto oficial por el accidente de Urda anula los actos municipales del sábado 31; las entradas del juego de supervivencia del centro comercial Los Alcores valen para la nueva fecha",
   "caption": "Vista aérea del centro comercial Los Alcores, en Alcalá de Guadaíra, donde se celebrará el Survival Zombie Halloween.",
   "foto": "halloween-suspendido-survival-zombie-aplazado.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La fiesta de Halloween de la Casa de la Juventud de Alcalá de Guadaíra, prevista para el sábado 31 de octubre desde las 18.00, queda cancelada por el luto oficial tras el accidente de Urda.",
    "También se ha suspendido el pasacalles de Halloween que el Ayuntamiento preparaba con la Asociación de Comerciantes Santa Lucía.",
    "El Survival Zombie Halloween del centro comercial Los Alcores se aplaza al sábado 21 de noviembre y las entradas compradas para el 31 de octubre sirven para la nueva fecha."
   ],
   "body": [
    "Alcalá de Guadaíra no tendrá este año las citas de Halloween previstas para el sábado 31 de octubre. La fiesta de la Casa de la Juventud queda cancelada por los tres días de luto oficial tras el <a href='#accidente-tren-urda-ave-iryo'>accidente ferroviario de Urda (Toledo)</a>, y el Survival Zombie Halloween del centro comercial Los Alcores se aplaza al sábado 21 de noviembre.",
    "La fiesta municipal iba a empezar a las 18.00 en la Casa de la Juventud, con un pasaje del terror para los más pequeños, actuaciones musicales, propuestas de animación y sesiones de DJ hasta la medianoche. El Ayuntamiento lo ha recordado en su perfil de Instagram, en un aviso dirigido a los jóvenes, y ha confirmado también la suspensión del pasacalles de Halloween que organizaba con la Asociación de Comerciantes Santa Lucía.",
    "La anulación forma parte de la suspensión de <a href='#minuto-silencio-urda-alcala-suspende-actos'>todos los actos municipales</a> desde las 00.00 del jueves 29 hasta las 24.00 del sábado 31, la misma medida que ha dejado sin <a href='#panarrafest-suspendido-luto-oficial'>PanarraFest ni PrePanarraFest</a> este fin de semana. El Ayuntamiento no ha anunciado si la fiesta de la Casa de la Juventud tendrá otra fecha.",
    "## El juego de supervivencia, el 21 de noviembre",
    "El Survival Zombie Halloween es una actividad privada que no depende del Ayuntamiento, pero su organización también ha decidido aplazarla por el luto oficial. Se trata de una experiencia de juego en vivo de seis horas en la que los participantes deben sobrevivir en un escenario apocalíptico de zombis, dentro del centro comercial Los Alcores.",
    "La organización ha confirmado que las entradas compradas para el 31 de octubre serán válidas para el sábado 21 de noviembre, por lo que quienes ya las tengan no necesitan hacer ningún cambio.",
    "<span class='howto'>Fiesta de Halloween de la Casa de la Juventud (sábado 31 de octubre): cancelada. Pasacalles de Halloween con la Asociación de Comerciantes Santa Lucía: suspendido. Survival Zombie Halloween: aplazado al sábado 21 de noviembre en el centro comercial Los Alcores; las entradas del 31 de octubre siguen siendo válidas.</span>"
   ],
   "seo": [
    "halloween-alcala-cancelado-survival-zombie-aplazado",
    "Halloween en Alcalá: fiesta cancelada y Survival aplazado",
    "Alcalá de Guadaíra cancela la fiesta de Halloween de la Casa de la Juventud por el luto y el Survival Zombie de Los Alcores pasa al 21 de noviembre.",
    [
     "Halloween",
     "Casa de la Juventud",
     "Survival Zombie",
     "centro comercial Los Alcores",
     "luto oficial",
     "accidente de Urda"
    ]
   ]
  },
  {
   "id": "junta-gobierno-arboles-colegios-feria-empleo",
   "sec": "alcala",
   "kicker": "Junta de Gobierno",
   "iso": "2026-10-30",
   "hora": "23:14",
   "src": "Ana Isabel Jiménez (Instagram)",
   "fuente_url": "https://www.instagram.com/anaisabel_jc/p/DfHYJaViJOe/",
   "title": "La Junta de Gobierno de Alcalá aprueba contratar la plantación de árboles en los colegios",
   "sub": "El órgano de gobierno municipal da luz verde también al convenio con Cruz Roja para la feria de empleo del 10 de noviembre y a trabajos de limpieza junto a edificios municipales",
   "caption": "Árboles en una zona verde. Imagen de recurso",
   "foto": "arbolado-stock.jpg",
   "fotocredito": "Unsplash",
   "claves": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra aprobó el viernes 30 de octubre de 2026 el expediente de contratación para plantar árboles en los centros educativos, según la alcaldesa, Ana Isabel Jiménez.",
    "También aprobó el convenio con Cruz Roja para la feria de empleo del 10 de noviembre y actuaciones de mantenimiento, conservación y limpieza de zonas ajardinadas junto a edificios municipales."
   ],
   "body": [
    "La Junta de Gobierno Local de Alcalá de Guadaíra aprobó el viernes 30 de octubre el expediente de contratación para plantar árboles en los centros educativos de la ciudad, según ha publicado la alcaldesa, Ana Isabel Jiménez, en su perfil de Instagram. La sesión dio luz verde también a un convenio con Cruz Roja y a trabajos de limpieza en espacios públicos.",
    "La aprobación del expediente es el paso previo a la licitación: con él, el Ayuntamiento puede sacar a concurso el contrato. La alcaldesa no ha detallado el importe, el número de árboles, las especies ni en qué colegios se plantarán. Cuando se publique la licitación, esos datos deberán figurar en el perfil del contratante municipal.",
    "## Convenio para la feria de empleo",
    "El segundo acuerdo es el convenio con Cruz Roja para celebrar la <a href='#feria-empleo-cruz-roja-10-noviembre'>feria de empleo del lunes 10 de noviembre</a>, la IV edición de «Creando Oportunidades para el Empleo». El Ayuntamiento ya había anunciado que reunirá a más de 40 empresas en la Caseta Municipal. El convenio formaliza la colaboración entre las dos entidades.",
    "La Junta de Gobierno aprobó además actuaciones de mantenimiento, conservación y limpieza de espacios públicos y de zonas ajardinadas junto a edificios municipales.",
    "La Junta de Gobierno Local es el órgano que, con la alcaldesa y los concejales que ella designa, aprueba buena parte de los contratos y convenios del Ayuntamiento entre plenos.",
    "La sesión coincidió con los días de luto oficial por el <a href='#accidente-tren-urda-ave-iryo'>accidente de Urda</a>, durante los que el Ayuntamiento ha suspendido sus actos públicos, pero no la actividad administrativa.",
    "<span class='howto'>Feria de empleo «Creando Oportunidades para el Empleo»: lunes 10 de noviembre, Caseta Municipal de Alcalá de Guadaíra, con más de 40 empresas. Las licitaciones municipales se publican en el perfil del contratante del Ayuntamiento y en la Plataforma de Contratación del Sector Público.</span>"
   ],
   "seo": [
    "junta-gobierno-alcala-arboles-colegios-cruz-roja",
    "Alcalá aprueba plantar árboles en los colegios",
    "La Junta de Gobierno de Alcalá de Guadaíra aprueba el expediente para plantar árboles en colegios y el convenio con Cruz Roja para la feria de empleo.",
    [
     "Junta de Gobierno Local",
     "arbolado",
     "centros educativos",
     "Cruz Roja",
     "feria de empleo",
     "Ana Isabel Jiménez"
    ]
   ]
  },
  {
   "id": "cautivo-elecciones-jose-david-cobos",
   "sec": "hermandades",
   "kicker": "Elecciones en las hermandades",
   "iso": "2026-10-30",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=3DRHC8SgWKA&t=1091s",
   "title": "José David Cobos gana las elecciones del Cautivo con 335 votos y sucede a Juan Carlos Navarro",
   "sub": "El cabildo reunió a 596 votantes; el Soberano Poder elige junta el 7 de noviembre y el Rocío traslada a esa fecha su encuentro sobre la romería",
   "caption": "Una de las imágenes marianas de la Hermandad del Cautivo, ataviada para el mes de noviembre.",
   "foto": "cautivo-elecciones-david-cobos.jpg",
   "fotocredito": "MiGuadaíraTV",
   "rel": [
    "jesus-palio-socorro-borriquita-cristo-bondad",
    "rocio-pregonero-2027",
    "consejo-suspende-exposicion-pinturas-restauradas"
   ],
   "claves": [
    "José David Cobos Martínez ha ganado el cabildo de elecciones de la Hermandad del Cautivo de Alcalá de Guadaíra, celebrado el domingo 25 de octubre.",
    "Su candidatura obtuvo 335 votos y la del hermano mayor saliente, Juan Carlos Navarro Huertas, 252; hubo ocho votos en blanco y 596 votos en total.",
    "La nueva junta de gobierno dirigirá la hermandad los próximos cuatro años, tras la aprobación de la autoridad eclesiástica y la toma de posesión.",
    "La Hermandad del Soberano Poder vota el sábado 7 de noviembre, con Antonio León Donoso como candidato a hermano mayor."
   ],
   "body": [
    "José David Cobos Martínez será el nuevo hermano mayor de la Hermandad de Nuestro Padre Jesús Cautivo de Alcalá de Guadaíra. Su candidatura ganó el cabildo de elecciones del domingo 25 de octubre con 335 votos, frente a los 252 de la encabezada por el hermano mayor saliente, Juan Carlos Navarro Huertas.",
    "Según los resultados difundidos por la propia hermandad, votaron 596 hermanos y hubo ocho papeletas en blanco. La diferencia entre las dos listas fue de 83 votos. La elección queda a expensas de la aprobación de la autoridad eclesiástica, y la junta de Cobos tendrá el gobierno de la cofradía durante los próximos cuatro años.",
    "La jornada transcurrió con una participación alta y, más allá de algún comentario fuera de lugar durante el escrutinio, las dos candidaturas pidieron respeto y no hubo incidentes. Hasta que se produzca el traspaso de poderes, la junta saliente sigue al frente: en estos días ha cambiado el atuendo de Nuestra Señora de la Esperanza y de María Santísima de los Dolores, que visten ya de luto para noviembre, el mes de los difuntos.",
    "El cabildo cerraba un proceso con dos candidaturas que El Panadero ya anunció la semana pasada. Cobos tiene previsto pasar por el programa Alcalá Cofrade cuando tome posesión para explicar su proyecto.",
    "## El Soberano Poder vota el 7 de noviembre",
    "La próxima hermandad que pasa por las urnas es la del Soberano Poder, que celebra cabildo de elecciones el sábado 7 de noviembre. Antonio León Donoso presentó su candidatura el domingo 25 de octubre en la sede de la Asociación de Amigos de los Reyes Magos, la de la Cabalgata, con una junta que combina a hermanos con trayectoria en la cofradía del Miércoles Santo y a otros que se estrenan en el gobierno. Sustituirá a Jaime Otero, que deja el cargo tras cuatro años, como ya contó este periódico.",
    "Ese mismo sábado 7 la Hermandad del Rocío celebrará el encuentro «Vivencias del camino», que tenía previsto para el sábado 31 de octubre después de su misa de hermandad y que ha aplazado por el accidente ferroviario de Urda. En él, los hermanos repasarán las fotografías de la última romería y elegirán las del próximo boletín.",
    "## Otras citas de las hermandades",
    "La Hermandad del Rosario entregará su cuarto Olivo de Plata a Fernando Domínguez Troncoso, antiguo hermano mayor de la corporación salesiana, y tiene ya a la venta las entradas de su zambomba en el patio de los Salesianos. La Hermandad del Perdón celebra el sábado 31 de octubre el 39.º aniversario de la bendición de Nuestra Señora de las Angustias.",
    "La presentación de las <a href='#consejo-suspende-exposicion-pinturas-restauradas'>pinturas restauradas del Cristo de Burgos y del Cristo de los Desamparados</a>, suspendida por el luto oficial, se celebrará previsiblemente en la segunda quincena de noviembre, según el restaurador Alejandro Redondo.",
    "La presentación de las <a href='#consejo-suspende-exposicion-pinturas-restauradas'>pinturas restauradas del Cristo de Burgos y del Cristo de los Desamparados</a>, suspendida por el luto oficial, sigue sin fecha cerrada."
   ],
   "seo": [
    "elecciones-hermandad-cautivo-jose-david-cobos-hermano-mayor",
    "Elecciones del Cautivo en Alcalá: gana José David Cobos",
    "José David Cobos gana con 335 votos las elecciones de la Hermandad del Cautivo de Alcalá de Guadaíra; el Soberano Poder vota el 7 de noviembre.",
    [
     "Hermandad del Cautivo",
     "José David Cobos",
     "Juan Carlos Navarro",
     "Hermandad del Soberano Poder",
     "Antonio León Donoso",
     "Hermandad del Rocío de Alcalá",
     "elecciones en las hermandades"
    ]
   ],
   "hora": "17:14"
  },
  {
   "id": "cementerio-san-mateo-todos-los-santos",
   "sec": "alcala",
   "kicker": "Todos los Santos",
   "iso": "2026-10-30",
   "hora": "13:12",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=9-RjEl5XncY&t=655s",
   "title": "El cementerio de San Mateo abrirá de 9.00 a 18.00 sin cierre el fin de semana de Todos los Santos",
   "sub": "El lunes 2 de noviembre, Día de los Difuntos, habrá misa en el cementerio a las 17.00 y una suelta de globos con mensajes de las familias",
   "caption": "Cruces y panteones del Cementerio Municipal de San Mateo, en Alcalá de Guadaíra, en vísperas de Todos los Santos.",
   "foto": "cementerio-san-mateo-todos-los-santos-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Cementerio Municipal de San Mateo, en Alcalá de Guadaíra, abrirá de 9.00 a 18.00 sin interrupción el sábado 31 de octubre y el domingo 1 de noviembre, con un puesto de flores y cuatro trabajadores de refuerzo.",
    "El lunes 2 de noviembre, Día de los Difuntos, habrá misa en el cementerio a las 17.00 y, después, la suelta de globos «Mensajes al cielo».",
    "El luto oficial por el accidente de Urda suspende los actos municipales hasta el sábado 31, pero no afecta a la apertura del cementerio."
   ],
   "body": [
    "El Cementerio Municipal de San Mateo, en Alcalá de Guadaíra, abrirá sin interrupción de 9.00 a 18.00 el sábado 31 de octubre y el domingo 1 de noviembre, día de Todos los Santos, con un puesto de flores instalado en el recinto, según ha publicado el Ayuntamiento en su perfil de Instagram.",
    "El lunes 2 de noviembre, Día de los Difuntos, habrá misa en el propio cementerio a las 17.00, con música de la coral que, según el Ayuntamiento, dirige el padre Manuel Ángel Cano. El Ayuntamiento no ha detallado el horario de apertura del recinto para ese lunes.",
    "## «Mensajes al cielo»",
    "Tras la misa se celebrará «Mensajes al cielo», una suelta de globos que llevan atados mensajes escritos por familiares de personas fallecidas. Es un acto que el cementerio de San Mateo repite desde hace algunos años en torno al 2 de noviembre, según el Ayuntamiento.",
    "El recinto se ha preparado para el aumento de visitas con refuerzos de limpieza y mantenimiento. Cuatro trabajadores atienden el cementerio esta semana y ayudan a los visitantes, por ejemplo con las escaleras para llegar a los nichos altos, según explicó a El Panadero uno de sus responsables. Este año las obras se han centrado en los módulos de nichos más antiguos, que se pican, se sanean y se recubren con un mortero más moderno.",
    "La previsión es que la afluencia crezca durante toda la semana y, sobre todo, este fin de semana y el lunes 2, festivo en Andalucía, no solo el día 1. Para este trabajador, son jornadas de mucha emoción para las familias, que buscan sobre todo paz al visitar a sus difuntos.",
    "El horario especial del cementerio coincide con el luto oficial por el accidente ferroviario de Urda (Toledo). Durante esos tres días, hasta las 24.00 del sábado 31 de octubre, el Ayuntamiento <a href='#minuto-silencio-urda-alcala-suspende-actos'>ha suspendido todos los actos municipales</a>. El cementerio, que es un servicio, mantiene la apertura, y los actos del Día de los Difuntos quedan fuera de ese periodo.",
    "Sí se han anulado otras citas de este fin de semana: <a href='#panarrafest-suspendido-luto-oficial'>el PanarraFest y el PrePanarraFest</a>, el pasacalles de Halloween previsto con la Asociación de Comerciantes Santa Lucía y las actividades de Halloween de la Casa de la Juventud.",
    "<span class='howto'>Cementerio Municipal de San Mateo. Sábado 31 de octubre y domingo 1 de noviembre: de 9.00 a 18.00, sin cierre a mediodía, con puesto de flores. Lunes 2 de noviembre: misa a las 17.00 en el cementerio y, después, suelta de globos «Mensajes al cielo».</span>"
   ],
   "seo": [
    "cementerio-san-mateo-horario-todos-los-santos",
    "Cementerio de San Mateo: horario de Todos los Santos",
    "El cementerio de San Mateo de Alcalá de Guadaíra abre de 9.00 a 18.00 el 31 de octubre y el 1 de noviembre; el 2 habrá misa a las 17.00 y suelta de globos.",
    [
     "Cementerio de San Mateo",
     "Todos los Santos",
     "Día de los Difuntos",
     "Mensajes al cielo",
     "Ayuntamiento de Alcalá de Guadaíra",
     "horarios"
    ]
   ],
   "actualizada": "2026-10-30T23:14"
  },
  {
   "id": "antequera-aquabike-campeon-espana",
   "sec": "deportes",
   "kicker": "Triatlón",
   "iso": "2026-10-30",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8417/el-alcalareno-javier-antequera-se-proclama-campeon-de-espana-de-aquabike-de-larga-distancia-en-el-desafio-donana",
   "title": "El alcalareño Javier Antequera, del Club CAPA, gana el Campeonato de España de Aquabike de Larga Distancia",
   "sub": "Se impuso en la categoría de 20 a 24 años en el Desafío Doñana, una prueba de 3 kilómetros de natación y 110 de ciclismo",
   "caption": "Javier Antequera, en lo más alto del podio del Desafío Doñana 2026, en el cartel con el que el Club CAPA celebra su título nacional.",
   "foto": "antequera-aquabike-campeon-espana-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "contain",
   "claves": [
    "Javier Antequera, del Club CAPA de Alcalá de Guadaíra, es campeón de España de Aquabike de Larga Distancia en la categoría de 20 a 24 años.",
    "Ganó el título el sábado 17 de octubre en el Desafío Doñana 2026, en Matalascañas (Huelva).",
    "La prueba sumaba 3 kilómetros de natación y 110 kilómetros de ciclismo, sin carrera a pie.",
    "Andalucía logró 17 medallas en los Campeonatos de España de Triatlón de Larga Distancia y Aquabike, según la Federación Andaluza de Triatlón."
   ],
   "body": [
    "El triatleta alcalareño Javier Antequera, del Club CAPA, se ha proclamado campeón de España de Aquabike de Larga Distancia en la categoría de 20 a 24 años. Logró el título el sábado 17 de octubre en el Desafío Doñana 2026, en Matalascañas (Huelva), según ha informado Alcalá+Deporte, el portal deportivo del Ayuntamiento de Alcalá de Guadaíra.",
    "El aquabike es una modalidad del triatlón sin el tramo de carrera a pie: solo se nada y se pedalea. En la distancia larga del Desafío Doñana, los participantes nadaron 3 kilómetros y recorrieron después 110 kilómetros en bicicleta. Antequera fue el primero de su grupo de edad, el de 20 a 24 años.",
    "El club ha atribuido el resultado a la constancia del deportista. «Estamos enormemente orgullosos de Javier. Detrás de este Campeonato de España hay muchas horas de entrenamiento, sacrificio y compromiso», han señalado desde el Club CAPA, que considera la victoria «un reconocimiento al trabajo de todo el equipo».",
    "## Dos alcalareños en Doñana",
    "Antequera no fue el único representante del club en la cita onubense. Fernando Morilla, también del Club CAPA, completó el recorrido de larga distancia y terminó la prueba.",
    "El campeonato dejó además un buen balance para el triatlón andaluz. Los deportistas de la comunidad sumaron 17 medallas en los Campeonatos de España de Triatlón de Larga Distancia y Aquabike disputados en el Desafío Doñana, según los datos de la Federación Andaluza de Triatlón.",
    "El título se suma a otros resultados recientes del deporte de Alcalá, como la clasificación del conjunto Juvenil Base del YBlanco para el Campeonato de España de gimnasia rítmica.",
    "<span class='howto'>Próxima cita del Club CAPA en Alcalá: el club, junto al CC Los Alcores, organiza el <a href='#cross-escolar-solidario-2026'>XIII Cross Escolar Solidario y la II Carrera Solidaria</a> el sábado 21 de noviembre, con salida a las 9.30 en los Pinares de Oromana. La inscripción es un kilo de alimentos no perecederos y un donativo de 2 euros.</span>"
   ],
   "seo": [
    "javier-antequera-campeon-espana-aquabike-club-capa",
    "Javier Antequera, campeón de España de aquabike",
    "El alcalareño Javier Antequera, del Club CAPA, gana el Campeonato de España de Aquabike de Larga Distancia (20-24 años) en el Desafío Doñana.",
    [
     "Javier Antequera",
     "Club CAPA",
     "aquabike",
     "Desafío Doñana",
     "triatlón",
     "campeonato de España"
    ]
   ]
  },
  {
   "id": "panarrafest-suspendido-luto-oficial",
   "sec": "cultura",
   "kicker": "Luto oficial",
   "iso": "2026-10-29",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9961/suspendidos-los-festivales-de-este-fin-de-semana",
   "rel": [
    "urda-sanchez-luto-oficial",
    "consejo-suspende-exposicion-pinturas-restauradas"
   ],
   "title": "Alcalá suspende el PanarraFest y el PrePanarraFest por el luto oficial y devolverá el importe de las entradas",
   "sub": "El Ayuntamiento anula todos sus actos del jueves 29 al sábado 31 de octubre; el dinero se reembolsará por el mismo canal de compra en unas 96 horas",
   "caption": "Carteles del PanarraFest y del PrePanarraFest con el aviso de suspensión difundido por el Ayuntamiento de Alcalá de Guadaíra.",
   "foto": "panarrafest-suspendido-luto-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha suspendido el PrePanarraFest del viernes 30 de octubre y el PanarraFest del sábado 31 por el luto oficial tras el accidente ferroviario de Urda (Toledo).",
    "Quedan suspendidos todos los actos y actividades municipales desde las 00.00 del jueves 29 hasta las 24.00 del sábado 31 de octubre, también el pasacalles de Halloween con la Asociación de Comerciantes Santa Lucía y las actividades de Halloween de la Casa de la Juventud.",
    "Las entradas de los dos conciertos se devolverán íntegras por el mismo canal de compra, en un plazo estimado de 96 horas.",
    "La conferencia de Isabel Rojas Estapé del ciclo Conversaciones de Vida se celebrará el 16 de diciembre a las 19.00 en el Teatro Auditorio Riberas del Guadaíra."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha suspendido el PrePanarraFest del viernes 30 de octubre y el PanarraFest del sábado 31, los dos conciertos previstos en la explanada del Auditorio Riberas del Guadaíra, por el luto oficial decretado tras el accidente ferroviario de Urda (Toledo). El importe de las entradas se devolverá íntegro.",
    "La suspensión de los festivales forma parte de una medida más amplia. Según ha comunicado el Ayuntamiento, quedan anulados todos los actos y actividades que organiza el Consistorio desde las 00.00 del jueves 29 hasta las 24.00 del sábado 31 de octubre, los tres días de <a href='#urda-sanchez-luto-oficial'>luto oficial decretados por el Gobierno de España</a>.",
    "## Cómo se devuelven las entradas",
    "Las entradas de los dos conciertos se reembolsarán por el mismo canal por el que se compraron, y cada comprador recibirá un correo electrónico de aviso. La Delegación de Cultura calcula que las devoluciones estarán completas en unas 96 horas, es decir, cuatro días. Si pasado ese plazo el dinero no ha llegado, el Ayuntamiento ha habilitado un teléfono y un correo electrónico para revisar cada caso.",
    "El PrePanarraFest tenía en su cartel a LosPicy, Original Elías, Javi Torres y Óscar Herrera, con entradas a dos euros. El PanarraFest iba a reunir el sábado a Nebulossa y Ladilla Rusa, junto a Carmen Xía, Karmento y Tú Peleas Como Una Vaca. Para las dos noches, el Ayuntamiento había preparado un dispositivo de tráfico y aparcamiento con cortes en la rotonda del Auditorio desde las 17.00.",
    "En su nota, la Delegación de Cultura explica que ha tomado la decisión «por respeto al dolor de todo el país» y recuerda que la tragedia toca de cerca a la ciudad por la desaparición de un vecino, <a href='#policia-alcala-desaparecido-urda'>un policía nacional que viajaba en uno de los trenes</a>. El Ayuntamiento no ha anunciado si los festivales tendrán nueva fecha.",
    "## Otros actos aplazados",
    "La suspensión alcanza también a la noche de Halloween. El Ayuntamiento ha recordado este viernes en su perfil de Instagram que se ha cancelado el pasacalles que preparaba con la Asociación de Comerciantes Santa Lucía y que tampoco habrá las actividades de Halloween organizadas por la Casa de la Juventud. El luto oficial se extiende hasta las doce de la noche del sábado 31 de octubre.",
    "La medida alcanza también al ciclo Conversaciones de Vida. Según ha publicado el Ayuntamiento en su perfil de Instagram, la conferencia de la psicóloga Isabel Rojas Estapé se celebrará el miércoles 16 de diciembre a las 19.00 en el Teatro Auditorio Riberas del Guadaíra. Las III Jornadas de Memoria Democrática, que ya habían anulado las actividades del miércoles 28, quedan dentro del periodo de suspensión.",
    "Fuera de la agenda municipal, el Consejo de Hermandades ha suspendido la <a href='#consejo-suspende-exposicion-pinturas-restauradas'>presentación de dos pinturas restauradas</a> que estaba prevista para la tarde del jueves 29 en el Museo de la Ciudad.",
    "<span class='howto'>Devolución de entradas del PanarraFest y del PrePanarraFest: automática, por el mismo canal de compra, con aviso por correo electrónico. Plazo estimado: 96 horas. Incidencias: teléfono 650 604 774 y correo vgarcia@alcalaguadaira.org. Conferencia de Isabel Rojas Estapé: miércoles 16 de diciembre, 19.00, Teatro Auditorio Riberas del Guadaíra.</span>"
   ],
   "seo": [
    "panarrafest-suspendido-luto-oficial-devolucion-entradas",
    "PanarraFest suspendido en Alcalá: cómo recuperar la entrada",
    "Alcalá de Guadaíra suspende el PanarraFest y el PrePanarraFest del 30 y 31 de octubre por el luto oficial y devolverá las entradas en unas 96 horas.",
    [
     "PanarraFest",
     "PrePanarraFest",
     "luto oficial",
     "accidente de Urda",
     "Auditorio Riberas del Guadaíra",
     "devolución de entradas",
     "Delegación de Cultura"
    ]
   ],
   "actualizada": "2026-10-30T13:12"
  },
  {
   "id": "minuto-silencio-urda-alcala-suspende-actos",
   "sec": "alcala",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=5Hy5Ze-ndJw&t=347s",
   "rel": [
    "policia-alcala-desaparecido-urda",
    "accidente-tren-urda-ave-iryo"
   ],
   "title": "Alcalá suspende actos municipales y guarda un minuto de silencio por las víctimas del choque de trenes de Urda",
   "sub": "El Ayuntamiento anuló las Jornadas de Memoria Democrática del miércoles y la charla de Conversaciones de Vida prevista para el jueves 29",
   "caption": "Fachada del Ayuntamiento de Alcalá de Guadaíra, en la plaza del Duque, donde se convocó el minuto de silencio.",
   "foto": "minuto-silencio-urda-suspende-actos-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra convocó un minuto de silencio a las 20.00 del miércoles 28 de octubre a las puertas del Consistorio por las víctimas del accidente ferroviario de Urda (Toledo).",
    "Se suspendieron las III Jornadas de Memoria Democrática del miércoles, el Foro del Correo, el encuentro Café con jóvenes y la recepción a la nueva directiva del club CAPA.",
    "También se canceló la charla del ciclo Conversaciones de Vida prevista para el jueves 29 en el Teatro Auditorio Riberas del Guadaíra."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra convocó a los vecinos a guardar un minuto de silencio a las 20.00 del miércoles 28 de octubre, a las puertas del Consistorio, en memoria de las víctimas del <a href='#accidente-tren-urda-ave-iryo'>choque de dos trenes de alta velocidad en Urda (Toledo)</a>, y suspendió varios actos de su agenda de ese día y del jueves 29.",
    "El accidente se produjo poco antes de las nueve de la mañana del miércoles, cuando un AVE de Renfe y un tren de Iryo que cubrían servicios con destino a Sevilla colisionaron en la provincia de Toledo. La circulación de alta velocidad entre Madrid y Andalucía quedó interrumpida.",
    "## Condolencias del Ayuntamiento",
    "En una nota publicada en su web, el Ayuntamiento trasladó sus condolencias a las familias y amigos de los fallecidos, con los que dice compartir su dolor, y su deseo de que los heridos evolucionen favorablemente. La alcaldesa, Ana Isabel Jiménez, publicó en su perfil de Instagram un mensaje de pésame en el que agradece también el trabajo de los equipos de emergencias que intervienen en la zona. El portal deportivo municipal, Alcalá+Deporte, se sumó con un mensaje de pesar.",
    "## Los actos suspendidos",
    "La Delegación de Memoria Democrática suspendió las actividades que las III Jornadas de Memoria Democrática tenían previstas en la tarde del miércoles en la Casa de la Cultura. Las jornadas, con el lema «Memoria, Democracia e Identidad», estaban programadas entre el 28 y el 30 de octubre con conferencias, documentales y actividades educativas. El Ayuntamiento no ha informado de cambios en las sesiones del jueves y el viernes.",
    "Ese mismo miércoles quedaron suspendidos el Foro del Correo, el encuentro Café con jóvenes y la recepción municipal a la nueva directiva del club CAPA. También se canceló la charla del ciclo Conversaciones de Vida prevista para el jueves 29 en el Teatro Auditorio Riberas del Guadaíra.",
    "Un vecino de Alcalá, policía nacional, figura entre las personas a las que sus familias buscaban tras el accidente, según han difundido sus allegados: <a href='#policia-alcala-desaparecido-urda'>su familia pide información sobre su paradero</a>.",
    "<span class='howto'>Los familiares directos de los pasajeros pueden acudir a las dependencias que la Guardia Civil ha habilitado para la toma de muestras de ADN y la identificación de las víctimas. En Andalucía, la oficina está en la Comandancia de Sevilla, avenida de la Borbolla, 8. También hay puntos en Madrid, Córdoba y Toledo.</span>"
   ],
   "seo": [
    "alcala-minuto-silencio-accidente-urda-actos-suspendidos",
    "Alcalá suspende actos por el accidente de trenes de Urda",
    "El Ayuntamiento de Alcalá de Guadaíra convocó un minuto de silencio y suspendió las Jornadas de Memoria Democrática y otros actos por el choque de Urda.",
    [
     "accidente de Urda",
     "minuto de silencio",
     "Ayuntamiento de Alcalá de Guadaíra",
     "Memoria Democrática",
     "Conversaciones de Vida",
     "Ana Isabel Jiménez"
    ]
   ]
  },
  {
   "id": "urda-audios-centro-control-adif",
   "sec": "sucesos",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "title": "Los audios de Urda: Adif ordenó al AVE seguir «con marcha normal» mientras el Iryo estaba parado delante",
   "sub": "Las grabaciones del centro de control de Atocha recogen el aviso de la maquinista del Iryo seis minutos antes del choque",
   "caption": "Agentes de la Guardia Civil y equipos de rescate junto a la cabecera del Iryo accidentado en Urda (Toledo).",
   "foto": "urda-audios-iryo-tv.jpg",
   "fotocredito": "Guardia Civil (vía MiGuadaíraTV)",
   "encuadre": "center 30%",
   "rel": [],
   "claves": [
    "Las grabaciones del centro de control de Adif en Madrid-Puerta de Atocha recogen que a las 8:36 del 28 de octubre de 2026 un operador ordenó al maquinista del AVE 2080 reanudar la marcha «con marcha normal», 18 minutos antes de alcanzar al Iryo 6076 en Urda (Toledo).",
    "A las 8:41 la maquinista del Iryo informó de que estaba detenida en la señal de entrada de Urda y recibió la misma instrucción; a las 8:48 avisó de que no podía restablecer el sistema LZB y seguía parada.",
    "Las grabaciones difundidas no recogen ninguna orden al AVE para que se detuviera. El choque dejó al menos 68 muertos.",
    "La jueza de Orgaz investiga el accidente bajo secreto de sumario."
   ],
   "body": [
    "Las grabaciones del centro de control de Adif en Madrid-Puerta de Atocha recogen que a las 8:36 del miércoles 28 de octubre un operador ordenó al maquinista del AVE 2080 reanudar «con marcha normal». A las 8:54, el AVE alcanzó por detrás al Iryo 6076, que estaba parado en Urda (Toledo). El choque dejó al menos 68 muertos.",
    "Las grabaciones, que se difundieron en la noche del miércoles, reconstruyen los 23 minutos anteriores al accidente. A las 8:31, el maquinista del AVE avisó de que había perdido la transmisión del LZB, el sistema que vigila desde la cabina la velocidad del tren y la distancia con el de delante, y se detuvo. Cinco minutos después, el operador le indicó que reiniciara el sistema y siguiera con marcha normal.",
    "## Los avisos del Iryo",
    "<img src='fotos/urda-audios-centro-control-gfx.jpg' alt='Gráfico: cronología de las comunicaciones entre el centro de control de Adif en Atocha y los dos trenes' loading='lazy' style='display:block;width:100%;height:auto;margin:6px 0'>",
    "A las 8:41, la maquinista del Iryo, que circulaba varios kilómetros por delante, informó de que también había perdido la transmisión y de que estaba detenida en la señal de entrada de Urda. Recibió la misma instrucción que el AVE: reiniciar el LZB y seguir.",
    "A las 8:48 volvió a llamar al centro de control. No podía restablecer el sistema y seguía parada. El operador le respondió que volviera a llamar si el problema continuaba. Las grabaciones difundidas no recogen ninguna orden al AVE para que se detuviera o redujera la velocidad. Seis minutos después, el AVE alcanzó al Iryo en el punto kilométrico 118, entre Los Yébenes y Urda.",
    "## Las versiones del ministro y de Iryo",
    "El ministro de Transportes, Óscar Puente, había atribuido el accidente a la orden del centro de control de reanudar la marcha, que calificó de «inexplicable» y «errónea», y dijo que la señal estaba en rojo. Su comparecencia está en <a href='#urda-puente-centro-control-adif'>la pieza sobre las explicaciones del ministro</a>.",
    "Iryo había sostenido que su tren seguía parado porque no había recibido la orden de reanudar la marcha, que el AVE sí tenía. Según las grabaciones, su maquinista recibió la instrucción de reiniciar el sistema y seguir, pero no pudo restablecerlo y no llegó a ponerse en marcha. Adif no ha comentado el contenido de las grabaciones.",
    "La jueza de Orgaz que instruye la causa ha decretado el secreto de sumario y ha ordenado incautar las cajas negras de los trenes. La Guardia Civil ha interrogado al operario que dio la orden y a todo su turno, como recoge <a href='#urda-investigacion-juzgado-orgaz-guardia-civil'>la información sobre la investigación</a>. El balance oficial está en <a href='#accidente-tren-urda-ave-iryo'>la noticia principal</a>.",
    "<span class='howto'>Qué es el LZB: es el sistema de control de trenes de la línea de alta velocidad Madrid-Sevilla. Transmite a la cabina la velocidad máxima permitida y la distancia hasta el tren de delante, y frena el tren si el maquinista no lo hace. Cuando falla, la circulación depende de las órdenes del centro de control y de las señales de la vía.</span>"
   ],
   "seo": [
    "audios-centro-control-adif-accidente-urda",
    "Audios de Urda: Adif ordenó al AVE «marcha normal»",
    "Las grabaciones del centro de control de Adif recogen la orden al AVE de seguir «con marcha normal» y el aviso del Iryo parado en Urda seis minutos antes.",
    [
     "accidente ferroviario",
     "Urda",
     "Adif",
     "centro de control de Atocha",
     "sistema LZB",
     "Iryo",
     "AVE Madrid-Sevilla"
    ]
   ]
  },
  {
   "id": "urda-viajar-sevilla-madrid-sin-ave",
   "sec": "alcala",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "title": "Sevilla-Madrid sin AVE: Renfe retrasa al menos al 3 de noviembre su plan alternativo",
   "sub": "La alta velocidad con Andalucía sigue cortada sin fecha tras el accidente de Urda; Iberia limita sus vuelos a 99 euros y la DGT prevé más tráfico por carretera en el puente",
   "caption": "Alternativas para viajar entre Sevilla y Madrid mientras la alta velocidad está cortada por el accidente de Urda (Toledo).",
   "foto": "urda-viajar-sin-ave-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "rel": [],
   "claves": [
    "Adif mantiene cortada sin fecha la línea de alta velocidad Madrid-Andalucía tras el accidente de Urda (Toledo) del 28 de octubre de 2026; desde Sevilla-Santa Justa no salen trenes de alta velocidad a Madrid.",
    "Renfe no pondrá en marcha su plan alternativo de transporte antes del martes 3 de noviembre, porque el sindicato de maquinistas Semaf exige 96 horas para cambiar los cuadros de servicio. La venta de billetes de alta velocidad entre Madrid y Andalucía sigue parada hasta el 13 de diciembre.",
    "Iryo ha cancelado sus trenes hacia el sur sin previsión, y Ouigo no circulará al menos hasta el 2 de noviembre.",
    "Iberia limita hasta el 8 de noviembre sus vuelos entre Madrid y Andalucía a 99 euros por trayecto en turista."
   ],
   "body": [
    "Los vecinos de Alcalá de Guadaíra que tengan que viajar a Madrid no pueden hacerlo en alta velocidad desde Sevilla-Santa Justa: Adif mantiene cortada sin fecha la línea Madrid-Andalucía tras el <a href='#accidente-tren-urda-ave-iryo'>accidente de Urda (Toledo)</a> del miércoles 28 de octubre, y Renfe ha retrasado al menos al martes 3 de noviembre su plan alternativo.",
    "## En tren",
    "Renfe mantiene suspendidos todos sus trenes de alta velocidad entre Madrid y Andalucía, también los que unen Barcelona y Valencia con Sevilla y Málaga. El plan alternativo de transporte que iba a empezar el viernes 30 no llegará antes del martes 3 de noviembre: el sindicato de maquinistas Semaf exige que se respete el plazo reglamentario de 96 horas para modificar los cuadros de servicio. Renfe ha dicho que informará antes de esa fecha de horarios, recorridos y servicios. Por ahora mantiene trenes por la línea convencional entre Madrid, Ciudad Real y Puertollano.",
    "La compañía ha parado la venta de billetes de alta velocidad entre Madrid y Andalucía hasta el 13 de diciembre. Renfe aclara que eso no significa que la línea vaya a estar cerrada hasta esa fecha y que volverá a vender si Adif reabre antes. Los billetes de los trenes afectados se pueden cambiar o anular sin coste.",
    "Iryo ha cancelado todos sus trenes desde Madrid-Puerta de Atocha hacia el sur, sin previsión de cuándo volverán, y ofrece cambios y devoluciones gratis. Ouigo ha suspendido sus servicios entre Madrid y Andalucía al menos hasta el lunes 2 de noviembre.",
    "El jueves 29, además, los maquinistas de Renfe hicieron una huelga de 24 horas convocada por el sindicato Semaf, que la mantuvo pese al accidente.",
    "## En avión",
    "Iberia ha limitado hasta el domingo 8 de noviembre el precio de sus vuelos entre Madrid y Andalucía a 99 euros por trayecto en clase turista y 149 euros en business. El miércoles añadió 520 plazas a sus rutas con Málaga y Sevilla, 158 de ellas en la de Sevilla, y la compañía dice que trabaja para ampliar la oferta en los próximos días. Air Europa también ha añadido vuelos entre Madrid y Sevilla.",
    "Las empresas de autobús han reforzado sus servicios entre Sevilla y Madrid, pero la demanda ha provocado colas y falta de plazas en algunas salidas, por lo que conviene comprobar la disponibilidad antes de ir a la estación. La Dirección General de Tráfico prevé además que parte de los viajeros que iban a usar el tren se pasen al autobús o al coche durante el <a href='#dgt-puente-todos-los-santos-2026'>puente de Todos los Santos</a>, lo que aumentará la circulación en la A-4 y la A-92.",
    "## Sin fecha para reabrir",
    "Adif no ha dado fecha para reabrir la línea. La jueza de Orgaz que investiga el accidente ha prohibido el acceso a la zona y la retirada de elementos para preservar las pruebas, como recoge <a href='#urda-investigacion-juzgado-orgaz-guardia-civil'>la información sobre la investigación</a>.",
    "<span class='howto'>Renfe: cambios y anulaciones sin coste en los trenes afectados por el corte y por la huelga; consulte el estado de su tren antes de ir a la estación. Iryo: cambios y devoluciones gratis. Iberia: cambios de billete en el 900 111 500. Familiares de viajeros del accidente: Renfe, 900 10 10 20; Iryo, 900 001 403.</span>"
   ],
   "seo": [
    "viajar-sevilla-madrid-sin-ave-accidente-urda",
    "Sevilla-Madrid sin AVE: Renfe retrasa su plan alternativo",
    "La alta velocidad Madrid-Andalucía sigue cortada tras Urda. Renfe retrasa al 3 de noviembre su plan alternativo e Iberia limita sus vuelos a 99 euros.",
    [
     "accidente de Urda",
     "AVE Madrid-Sevilla",
     "Renfe",
     "Iryo",
     "Ouigo",
     "Iberia",
     "Santa Justa",
     "huelga de maquinistas"
    ]
   ],
   "actualizada": "2026-10-30T23:14"
  },
  {
   "id": "policia-alcala-desaparecido-urda",
   "sec": "sucesos",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "title": "La familia del policía de Alcalá desaparecido en Urda sabe que no está entre los hospitalizados",
   "sub": "La Guardia Civil ha comunicado a los allegados de Iván Romano Ramos, de 42 años, que no figura entre los heridos ingresados; no hay confirmación oficial de su fallecimiento ni de su identificación",
   "caption": "Equipos de rescate sobre los restos de uno de los trenes accidentados en Urda (Toledo).",
   "foto": "urda-policia-alcala-rescate-tv.jpg",
   "fotocredito": "Guardia Civil (vía MiGuadaíraTV)",
   "claves": [
    "La Guardia Civil ha comunicado a la familia de Iván Romano Ramos, policía nacional de 42 años natural de Alcalá de Guadaíra, que no se encuentra entre las personas hospitalizadas tras el accidente ferroviario de Urda (Toledo).",
    "Según sus allegados, los agentes les han pedido que se preparen para la peor noticia, pero el viernes 30 de octubre no había confirmación oficial de su fallecimiento ni de su identificación.",
    "Iván está destinado en Madrid y volvía a Alcalá en el coche 8 del AVE de Renfe que chocó con un Iryo el 28 de octubre. Su familia se desplazó a Toledo para seguir la búsqueda."
   ],
   "body": [
    "La Guardia Civil ha comunicado a la familia de Iván Romano Ramos, el policía nacional de 42 años natural de Alcalá de Guadaíra que viajaba en el AVE del <a href='#accidente-tren-urda-ave-iryo'>choque de trenes de Urda (Toledo)</a>, que no se encuentra entre las personas hospitalizadas. Hasta el viernes 30 de octubre no había confirmación oficial de su fallecimiento.",
    "Según el testimonio de sus allegados, los agentes les han trasladado que deben prepararse para recibir la peor de las noticias. La comunicación ha aumentado la angustia de la familia, que sigue a la espera de que los forenses completen la identificación de las víctimas, un proceso que se hace con autopsias y pruebas genéticas.",
    "Iván está destinado en Madrid y volvía a Alcalá para pasar unos días en casa con su familia. Viajaba en el coche 8 del AVE 2080 de Renfe. Su entorno difundió el miércoles 28 en redes sociales un llamamiento para pedir cualquier información sobre su paradero, y el jueves 29 la familia se desplazó a Toledo para seguir de cerca la búsqueda.",
    "## Cómo se identifica a las víctimas",
    "Los institutos de medicina legal de Toledo y Ciudad Real han recibido los cuerpos de las 69 personas fallecidas y han practicado 48 autopsias, pero hasta el viernes solo se habían comunicado oficialmente cinco identificaciones. Se han hecho con las huellas dactilares, a través del Servicio de Criminalística de la Guardia Civil, y se completan con el cotejo de ADN de familiares directos.",
    "La Guardia Civil ha recibido 70 denuncias por desaparición en comandancias de distintas provincias, aunque puede haber comunicaciones duplicadas, y dos de las personas buscadas han aparecido con vida. Más de 70 familiares esperan noticias en la casa de ejercicios El Buen Pastor, en Toledo, donde reciben atención psicológica. Para tomar muestras de ADN, el instituto armado ha habilitado oficinas en Madrid, Toledo, Córdoba y Sevilla.",
    "La Guardia Civil ha alertado además de mensajes SMS falsos que suplantan al cuerpo para comunicar supuestas identificaciones. Recuerda que esa comunicación se hace siempre en persona, nunca por mensaje de texto, WhatsApp ni llamada telefónica.",
    "El Ayuntamiento de Alcalá de Guadaíra <a href='#minuto-silencio-urda-alcala-suspende-actos'>convocó un minuto de silencio y suspendió sus actos</a> durante los tres días de luto oficial.",
    "<span class='howto'>Renfe atiende a los familiares de los pasajeros en el teléfono gratuito 900 10 10 20. Los familiares de primer grado pueden acudir a la Comandancia de la Guardia Civil de Sevilla, avenida de la Borbolla, 8, para la toma de muestras de ADN. Las identificaciones solo se comunican en persona; ante mensajes sospechosos que dicen venir de la Guardia Civil, llame al 062.</span>"
   ],
   "seo": [
    "policia-nacional-alcala-desaparecido-accidente-urda",
    "Policía de Alcalá desaparecido en Urda: no está ingresado",
    "La Guardia Civil comunica a la familia de Iván Romano, policía de Alcalá de Guadaíra desaparecido en Urda, que no está entre los hospitalizados.",
    [
     "accidente de Urda",
     "Policía Nacional",
     "desaparecidos",
     "Guardia Civil",
     "identificación de víctimas",
     "Alcalá de Guadaíra"
    ]
   ],
   "encuadre": "center 30%",
   "fuente_url": "https://www.youtube.com/watch?v=9-RjEl5XncY&t=102s",
   "actualizada": "2026-10-30T23:14"
  },
  {
   "id": "vox-congelacion-impuestos-2027",
   "sec": "politica",
   "kicker": "Impuestos",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=5Hy5Ze-ndJw&t=592s",
   "title": "Vox pide bajar los impuestos municipales en Alcalá y llama «bulo» a la congelación anunciada para 2027",
   "sub": "El gobierno municipal sostiene que no ha subido ningún impuesto ni tasa en este mandato ni en el anterior y que la oposición votó en contra de congelarlos",
   "caption": "Sesión del Pleno del Ayuntamiento de Alcalá de Guadaíra, en una imagen de archivo.",
   "foto": "vox-congelacion-impuestos-2027-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El portavoz de Vox en Alcalá de Guadaíra, Pedro Navarro, considera insuficiente la congelación de impuestos y tasas para 2027 y reclama una rebaja fiscal.",
    "Navarro calificó el anuncio de «bulo» y de «cinismo» y señaló en especial los impuestos que afectan a las herencias.",
    "La portavoz del gobierno y delegada de Hacienda, Ángeles Ballesteros, defiende que no se ha subido ningún impuesto ni tasa y que la oposición votó en contra de las ordenanzas."
   ],
   "body": [
    "El grupo municipal de Vox en Alcalá de Guadaíra ha criticado la congelación de impuestos y tasas para 2027 que anunció el gobierno local y reclama una rebaja fiscal. Su portavoz, Pedro Navarro, considera que mantener los tributos sin subidas no supone una mejora para los vecinos y asegura que Vox bajará los impuestos si llega a gobernar.",
    "Navarro calificó el anuncio del gobierno municipal de «bulo» y de «cinismo». Entre sus críticas destacó los impuestos que afectan a las herencias. Vox vincula además la política fiscal con otros asuntos que, a su juicio, no se resuelven, como el desempleo, la seguridad ciudadana y la vivienda pública.",
    "El portavoz sostiene también que un informe de la Intervención municipal advierte de una situación económica preocupante para las arcas del Ayuntamiento. Vox no ha detallado a qué informe se refiere ni qué datos recoge.",
    "## La respuesta del gobierno",
    "La portavoz del grupo socialista y delegada de Hacienda, Ángeles Ballesteros, defendió en el programa La Tribuna del miércoles 28 que el gobierno municipal no ha subido «ningún impuesto, ninguna tasa» ni en este mandato ni en el anterior, y que en ese tiempo ha aplicado bonificaciones. Según Ballesteros, quien dude puede comprobarlo en el Boletín Oficial de la Provincia o en el portal de transparencia.",
    "La delegada argumentó que, si la estabilidad presupuestaria del Ayuntamiento estuviera en peligro, habría sido necesario subir los impuestos. También recordó que todos los grupos de la oposición votaron en contra de las ordenanzas fiscales que congelan el IBI, las tasas y los precios públicos.",
    "## Qué recogen las ordenanzas",
    "Las ordenanzas fiscales de 2027, aprobadas en el Pleno de octubre, mantienen los tipos de los impuestos y tasas municipales. Según Ballesteros, incluyen cambios técnicos para adaptarlas a la normativa y a la jurisprudencia reciente y una nueva bonificación en la tasa por ocupación del dominio público para la construcción de viviendas protegidas, tanto de promoción pública como privada.",
    "<span class='howto'>Las ordenanzas fiscales de 2027 están en exposición pública: cualquier vecino o entidad puede presentar reclamaciones en el plazo de 30 días abierto tras su publicación en el BOP.</span>"
   ],
   "seo": [
    "vox-bajada-impuestos-alcala-congelacion-2027",
    "Vox pide bajar impuestos en Alcalá y critica la congelación",
    "Vox reclama una rebaja fiscal en Alcalá de Guadaíra y llama bulo a la congelación de 2027; el gobierno sostiene que no ha subido ningún impuesto ni tasa.",
    [
     "Vox",
     "Pedro Navarro",
     "Ángeles Ballesteros",
     "ordenanzas fiscales 2027",
     "impuestos municipales",
     "Pleno de Alcalá"
    ]
   ]
  },
  {
   "id": "ayudas-comercios-calles-obras",
   "sec": "economia",
   "kicker": "Comercio",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=GIi-cmlhDJ0&t=1166s",
   "title": "Los comercios de La Mina, el Cabildo y Malasmañanas tendrán ayudas de hasta el 100 % para modernizarse",
   "sub": "El Pleno ha aprobado las bases, financiadas con fondos europeos; la convocatoria aún no se ha publicado",
   "caption": "Visita municipal a las obras de la segunda fase de la calle Malasmañanas, en una imagen de archivo.",
   "foto": "ayudas-comercios-calles-obras-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra prepara ayudas que cubrirán el 100 % de las inversiones de pymes y microempresas de las calles afectadas por grandes obras.",
    "Tendrán prioridad los negocios de la calle Nuestra Señora del Águila, la Plaza del Cabildo y la calle Malasmañanas; si sobra crédito, se abrirán a otros comercios.",
    "El Pleno ha aprobado las bases, pero la convocatoria, financiada con fondos europeos, aún no se ha publicado."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra pondrá en marcha unas ayudas que pagarán el 100 % de las inversiones de los pequeños comercios de las calles afectadas por grandes obras: la calle Nuestra Señora del Águila (La Mina), la Plaza del Cabildo y la calle Malasmañanas. El Pleno ya ha aprobado las bases y la convocatoria está pendiente de publicarse.",
    "Así lo explicó el primer teniente de alcaldesa y delegado de Urbanismo, Jesús Mora, en el programa La Tribuna del miércoles 28 de octubre. Según Mora, las ayudas se financian con fondos europeos, porque la misma convocatoria europea que paga las obras de reurbanización incluye una línea de apoyo a la modernización del comercio.",
    "## Qué se puede pagar",
    "Las bases contemplan inversiones en digitalización y modernización de los negocios, eficiencia energética (por ejemplo, cambiar equipos de climatización o vitrinas por otros que consuman menos), escaparatismo, accesibilidad, mobiliario y veladores, y todo lo relacionado con la imagen comercial del establecimiento.",
    "Las beneficiarias serán pymes y microempresas. Los negocios situados en las tres calles en obras tendrán un primer bloque de acceso a las ayudas. Si queda crédito disponible, el Ayuntamiento abrirá la línea al resto de comercios de la ciudad, según el delegado. El gobierno municipal no ha detallado todavía el importe total de esta línea.",
    "## Plazos",
    "Mora no dio fecha para la convocatoria. Explicó que, al proceder de fondos europeos, la tramitación es más compleja y que el Ayuntamiento citará a los comerciantes en cuanto se publique para que puedan preparar sus proyectos.",
    "El delegado recordó que el Ayuntamiento resolvió el mes pasado otra convocatoria de ayudas para pymes que comenzó con 200.000 euros y que se amplió hasta 600.000. Según sus datos, llegó a 160 comercios y pymes de Alcalá, además de pequeñas industrias con proyectos de industria 4.0.",
    "Las obras de la segunda fase de La Mina y la Plaza del Cabildo y las de Malasmañanas siguen en marcha. El gobierno municipal prevé terminarlas antes de final de año, como recoge <a href='#obras-la-mina-tunel-plazos'>el repaso al estado de las obras municipales</a>."
   ],
   "seo": [
    "ayudas-comercios-calles-obras-la-mina-malasmananas",
    "Ayudas del 100 % para comercios de calles en obras en Alcalá",
    "Alcalá de Guadaíra pagará el 100 % de las inversiones de los comercios de La Mina, el Cabildo y Malasmañanas; falta publicar la convocatoria.",
    [
     "ayudas al comercio",
     "calle La Mina",
     "Plaza del Cabildo",
     "Malasmañanas",
     "fondos europeos",
     "Jesús Mora"
    ]
   ]
  },
  {
   "id": "obras-la-mina-tunel-plazos",
   "sec": "alcala",
   "kicker": "Obras",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=GIi-cmlhDJ0&t=1349s",
   "title": "La Mina terminará de pavimentarse en 15 días y el túnel del carril bici no abrirá hasta tener cámaras y baterías",
   "sub": "El gobierno municipal prevé acabar Malasmañanas antes de final de año y abrir la nueva Jefatura de la Policía Local en el primer trimestre de 2027",
   "caption": "La alcaldesa y el delegado de Urbanismo, en una visita a las obras de la calle La Mina en septiembre.",
   "foto": "obras-la-mina-tunel-plazos-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El delegado de Urbanismo, Jesús Mora, prevé que la calle La Mina quede pavimentada y abierta al público en unos 15 días, salvo remates.",
    "La tercera fase de Malasmañanas debería estar terminada antes de final de año y la Jefatura de la Policía Local, en servicio en el primer trimestre de 2027.",
    "El túnel del antiguo tren de los panaderos no se abrirá hasta instalar cámaras y baterías de emergencia para el alumbrado."
   ],
   "body": [
    "La calle Nuestra Señora del Águila, conocida como La Mina, terminará de pavimentarse en los próximos 15 días, salvo algunos remates, y quedará abierta al público. Así lo avanzó el primer teniente de alcaldesa y delegado de Urbanismo de Alcalá de Guadaíra, Jesús Mora, en el programa La Tribuna del miércoles 28 de octubre, en el que repasó el estado de las principales obras municipales.",
    "## La Mina y el Cabildo",
    "Tras el pavimento llegarán el mobiliario urbano, el alumbrado, la jardinería y los elementos ornamentales. Mora explicó que la Plaza del Cabildo será accesible por sus dos extremos, con una rampa desde la calle Alcalá y Ortiz y un sistema de elevación desde La Mina. La obra la ejecuta la empresa alcalareña Martín Casillas.",
    "El delegado evitó dar una fecha de final: «Como toda obra pública, no nos atrevemos a dar plazos», dijo, aunque se marcó como objetivo terminar antes de final de año. En septiembre, el Ayuntamiento situó el final de la segunda fase de La Mina y la Plaza del Cabildo en el último trimestre de 2026. Los comercios de estas calles tendrán <a href='#ayudas-comercios-calles-obras'>ayudas de hasta el 100 % para modernizarse</a>.",
    "## Malasmañanas, Medina de Haro y la Jefatura",
    "En la calle Malasmañanas, ya en su tercera fase, los trabajos se centran en la rotonda que comunica con el colegio Antonio Machado, que tendrá una nueva zona ajardinada. Según Mora, la previsión es que la calle esté abierta por completo y la fase terminada antes de final de año. La plantación de árboles empezará en los próximos días, aprovechando la temporada de lluvias.",
    "El Centro Cívico Medina de Haro, en el Distrito Este, ya está recepcionado y solo falta el mobiliario para abrirlo. El Ayuntamiento no ha fijado la fecha de inauguración. La nueva Jefatura de la Policía Local, en el mismo entorno, está muy avanzada y el gobierno prevé que empiece a dar servicio en el primer trimestre de 2027. Mora citó también los avances del colector de pluviales de La Nocla.",
    "## El carril bici y el túnel",
    "El carril bici hacia la universidad ya está abierto, con la nueva pasarela sobre el Guadaíra, hasta el límite del término municipal de Alcalá. El tramo restante corresponde al Ayuntamiento de Dos Hermanas. Mientras lo ejecuta, Alcalá habilitará de forma provisional la margen derecha y un acceso bajo la explanada del canal, acordado con la universidad.",
    "Más tiempo tardará el túnel del antiguo tren de los panaderos, que conectará la zona de la biblioteca con el Auditorio. Ya tiene instalado el alumbrado, pero el Ayuntamiento no lo abrirá hasta colocar cámaras de videovigilancia y unas baterías que mantengan la luz en caso de apagón. «Hasta que no esté garantizada al 100 % esa seguridad, no vamos a poder abrir el túnel», afirmó Mora, que no dio fecha."
   ],
   "seo": [
    "obras-la-mina-malasmananas-tunel-carril-bici-plazos",
    "La Mina, Malasmañanas y el túnel: plazos de las obras",
    "Alcalá de Guadaíra prevé pavimentar La Mina en 15 días y acabar Malasmañanas este año; el túnel del carril bici esperará a tener cámaras y baterías.",
    [
     "calle La Mina",
     "Plaza del Cabildo",
     "Malasmañanas",
     "carril bici",
     "túnel del tren de los panaderos",
     "Jesús Mora",
     "Medina de Haro"
    ]
   ]
  },
  {
   "id": "epa-tercer-trimestre-2026-sevilla",
   "sec": "economia",
   "kicker": "Empleo",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=5Hy5Ze-ndJw&t=460s",
   "title": "La provincia de Sevilla pierde empleo en el tercer trimestre y el paro sube un 14,7 %, según la EPA",
   "sub": "La provincia cierra el verano con unos 145.900 parados y una tasa de paro cercana al 15 %",
   "caption": "Principales datos de la Encuesta de Población Activa del tercer trimestre de 2026 en la provincia de Sevilla.",
   "foto": "epa-tercer-trimestre-2026-sevilla-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "La ocupación en la provincia de Sevilla bajó un 2,34 % entre el segundo y el tercer trimestre de 2026 y el paro subió un 14,7 %, según la EPA.",
    "La provincia tiene unas 830.100 personas ocupadas y 145.900 en paro, con una tasa cercana al 15 %.",
    "En Andalucía la tasa de paro sube al 14,9 %, aunque hay 44.100 ocupados más que hace un año."
   ],
   "body": [
    "La provincia de Sevilla, a la que pertenece Alcalá de Guadaíra, cerró el tercer trimestre de 2026 con menos empleo y más paro, según la Encuesta de Población Activa (EPA). La ocupación bajó un 2,34 % respecto al segundo trimestre y el número de parados aumentó un 14,7 %.",
    "La provincia registra unas 830.100 personas ocupadas y 145.900 desempleadas, con una tasa de paro cercana al 15 %. La comparación con el mismo periodo del año pasado tampoco es favorable: la ocupación cae un 0,77 % y el paro aumenta un 3,62 %.",
    "## Andalucía",
    "En el conjunto de Andalucía, el número de ocupados se redujo en 24.900 personas durante el trimestre, hasta 3.656.300. El paro aumentó en 13.400 personas, hasta 640.500, y la tasa subió al 14,9 %.",
    "Por sectores, los servicios y la industria crearon empleo en la comunidad, pero las pérdidas en la agricultura y la construcción hicieron bajar la ocupación total. En la comparación anual, Andalucía cuenta con 44.100 ocupados más y 10.400 parados menos que hace un año, una evolución mejor que la de la provincia de Sevilla.",
    "## Qué dice de Alcalá",
    "La EPA es una encuesta del Instituto Nacional de Estadística y no ofrece datos por municipios. Para Alcalá, la referencia más cercana es el paro registrado en las oficinas de empleo, que publica cada mes el Servicio Público de Empleo Estatal. Según esa estadística, Alcalá encadena tres meses por debajo de 6.000 parados, una cifra que no veía desde 2008.",
    "Las dos estadísticas miden cosas distintas. El paro registrado solo cuenta a quienes se inscriben como demandantes de empleo, mientras que la EPA pregunta a una muestra de hogares por su situación laboral, estén inscritos o no."
   ],
   "seo": [
    "epa-tercer-trimestre-2026-sevilla-paro",
    "EPA: el paro sube un 14,7 % en la provincia de Sevilla",
    "La provincia de Sevilla pierde un 2,34 % de ocupados en el tercer trimestre de 2026 y suma 145.900 parados, con una tasa cercana al 15 %, según la EPA.",
    [
     "EPA",
     "paro",
     "provincia de Sevilla",
     "Andalucía",
     "empleo",
     "Encuesta de Población Activa"
    ]
   ]
  },
  {
   "id": "pedro-manzano-conservacion-preventiva",
   "sec": "hermandades",
   "kicker": "Patrimonio",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=5Hy5Ze-ndJw&t=750s",
   "title": "El restaurador de la Macarena y el Gran Poder pide a las hermandades de Alcalá cuidar cómo se manipulan las imágenes",
   "sub": "Pedro Manzano Beltrán habló en el Museo de Alcalá dentro del II Ciclo de Conservación Preventiva, que organizan el Ayuntamiento y el Consejo de Hermandades",
   "caption": "El restaurador Pedro Manzano Beltrán, a la derecha, en la mesa de la conferencia en el Museo de Alcalá.",
   "foto": "pedro-manzano-conservacion-preventiva-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El restaurador Pedro Manzano Beltrán dio el martes 27 de octubre la conferencia «Patrimonio en nuestras manos. Claves para su conservación» en el Museo de Alcalá.",
    "Manzano ha restaurado la Esperanza Macarena, la Esperanza de Triana y el Gran Poder, y en Alcalá el San Mateo de la Hermandad del Águila y las imágenes titulares de la Oración en el Huerto.",
    "El ciclo, del Ayuntamiento y el Consejo de Hermandades y Cofradías, tiene prevista otra charla sobre dos pinturas de la parroquia de San Sebastián."
   ],
   "body": [
    "El restaurador Pedro Manzano Beltrán, que ha intervenido en imágenes como la Esperanza Macarena y el Señor del Gran Poder, pidió a los miembros de las hermandades de Alcalá de Guadaíra que traten su patrimonio como lo que es, obras de arte que requieren una manipulación específica. Lo hizo el martes 27 de octubre en el Museo de Alcalá, dentro del II Ciclo de Conservación Preventiva.",
    "Su conferencia, titulada «Patrimonio en nuestras manos. Claves para su conservación», terminó con una serie de recomendaciones básicas dirigidas a quienes manejan imágenes, enseres y ajuares en las hermandades. Manzano explicó a El Panadero que su idea principal era que la gente se concienciara de que esos objetos «necesitan una forma de manipulación y un trato muy distinto» al de cualquier otro.",
    "## «Con amor, pero de forma incorrecta»",
    "El restaurador valoró que el ciclo aborde este asunto. A su juicio, el uso que se hace de los bienes en las hermandades se hace con mucha dedicación, pero muchas veces de forma incorrecta. Por eso considera útil dar pautas a las personas que se mueven en ese ambiente para que el patrimonio se transmita en buenas condiciones a las próximas generaciones.",
    "Manzano tiene más de 35 años de experiencia y es licenciado en Conservación y Restauración de Obras de Arte por la Universidad de Sevilla. Entre sus trabajos figuran las restauraciones de la Esperanza de Triana, la Esperanza Macarena, el Cristo de las Tres Caídas y el Señor del Gran Poder. En Alcalá restauró la talla de San Mateo de la Hermandad de la Virgen del Águila y las imágenes de Nuestro Padre Jesús de la Oración en el Huerto y la Virgen del Rosario, de la Hermandad de la Oración en el Huerto.",
    "## Un ciclo con exposiciones y charlas",
    "El II Ciclo de Conservación Preventiva lo organizan el Ayuntamiento, a través del área de Identidad, y el Consejo de Hermandades y Cofradías de Alcalá. Combina exposiciones y conferencias sobre piezas del patrimonio local restauradas con las subvenciones municipales, con entrada libre y gratuita. El Museo expuso hasta el 25 de octubre la peana de la Virgen del Águila, restaurada con ayudas municipales.",
    "Antes de la charla, el delegado de Patrimonio y Museos, Christopher Rivas, había invitado a los vecinos a conocer de primera mano el trabajo de Manzano, al que atribuye «una dilatada experiencia» y «un gran prestigio».",
    "El programa tenía prevista para el jueves 29 de octubre una nueva conferencia sobre la intervención en dos pinturas de la parroquia de San Sebastián: el Santo Cristo de Burgos y el Cristo de los Desamparados, de la Hermandad de la Amargura.",
    "<span class='howto'>Las actividades del II Ciclo de Conservación Preventiva se celebran en el Museo de Alcalá de Guadaíra, con entrada libre y gratuita. La programación se publica en la agenda de la web municipal.</span>"
   ],
   "seo": [
    "pedro-manzano-conservacion-preventiva-museo-alcala",
    "Pedro Manzano y la conservación del patrimonio cofrade",
    "El restaurador de la Macarena y el Gran Poder, Pedro Manzano, pidió en el Museo de Alcalá cuidar la manipulación de las imágenes de las hermandades.",
    [
     "Pedro Manzano Beltrán",
     "conservación preventiva",
     "Museo de Alcalá",
     "Consejo de Hermandades",
     "Hermandad de la Oración en el Huerto",
     "Hermandad de la Amargura"
    ]
   ]
  },
  {
   "id": "cross-escolar-solidario-2026",
   "sec": "deportes",
   "kicker": "Atletismo",
   "iso": "2026-10-29",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8421/alcala-de-guadaira-se-prepara-para-una-nueva-jornada-de-deporte-y-solidaridad-con-el-xiii-cross-escolar-solidario",
   "title": "El XIII Cross Escolar Solidario llenará Oromana el 21 de noviembre: un kilo de comida y 2 euros para correr",
   "sub": "El club CAPA – CC Los Alcores organiza también la II Carrera Solidaria para adultos; lo recaudado va al Banco de Alimentos de Alcalá y a ANDEX",
   "caption": "Cartel del XIII Cross Escolar Solidario y la II Carrera Solidaria en los Pinares de Oromana.",
   "foto": "cross-escolar-solidario-2026-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "contain",
   "claves": [
    "El XIII Cross Escolar Solidario y la II Carrera Solidaria se celebran el sábado 21 de noviembre desde las 9.30 en los Pinares de Oromana, en Alcalá de Guadaíra.",
    "Cada corredor debe aportar un kilo de alimentos no perecederos para el Banco de Alimentos de Alcalá y un donativo de 2 euros para ANDEX.",
    "Hay pruebas para escolares, una de 3.000 metros para juveniles, otra de 6.000 para adultos y veteranos y relevos mixtos de 4 x 250 metros."
   ],
   "body": [
    "Los Pinares de Oromana, en Alcalá de Guadaíra, acogerán el sábado 21 de noviembre el XIII Cross Escolar Solidario y la II Carrera Solidaria, organizados por el club CAPA – CC Los Alcores. La salida será a las 9.30, junto a los columpios situados frente al Hotel Oromana, y las pruebas están abiertas a escolares, familias y aficionados.",
    "La inscripción no tiene precio en dinero para el club: cada corredor debe llevar un kilo de alimentos no perecederos, que irá al Banco de Alimentos de Alcalá de Guadaíra, y un donativo de 2 euros que se entregará íntegro a ANDEX, la Asociación de Padres de Niños con Cáncer de Andalucía.",
    "## Pruebas para todas las edades",
    "El programa incluye distintas distancias según las categorías escolares, una prueba juvenil de 3.000 metros y una carrera de 6.000 metros para adultos y veteranos. Además se disputarán los Relevos Solidarios, una prueba mixta de 4 x 250 metros en la que pueden correr juntos deportistas, familiares, profesores y entrenadores.",
    "Todos los escolares que participen recibirán una medalla. El centro educativo que consiga que más alumnos lleguen a meta ganará material deportivo valorado en 100 euros, según la organización.",
    "Es la decimotercera edición del cross escolar y la segunda de la carrera para adultos. La organización quiere que la jornada vaya más allá de la competición y sirva de espacio de convivencia y de compromiso social, según el anuncio publicado por Alcalá+Deporte.",
    "El portal deportivo municipal ha difundido el cartel y los enlaces de inscripción, con formularios separados para escolares y para adultos. Las inscripciones también podrán formalizarse en los Pinares el mismo día de la prueba, desde una hora antes de la salida.",
    "<span class='howto'>XIII Cross Escolar Solidario y II Carrera Solidaria. Sábado 21 de noviembre, 9.30, Pinares de Oromana (salida junto a los columpios frente al Hotel Oromana). Inscripción: un kilo de alimentos no perecederos y 2 euros para ANDEX. Se puede inscribir en los formularios del club CAPA – CC Los Alcores o el mismo día desde las 8.30.</span>"
   ],
   "seo": [
    "cross-escolar-solidario-oromana-2026",
    "Cross Escolar Solidario en Oromana el 21 de noviembre",
    "Los Pinares de Oromana acogen el 21 de noviembre el XIII Cross Escolar Solidario del club CAPA: un kilo de alimentos y 2 euros para ANDEX por corredor.",
    [
     "Cross Escolar Solidario",
     "club CAPA",
     "Pinares de Oromana",
     "ANDEX",
     "Banco de Alimentos",
     "atletismo"
    ]
   ]
  },
  {
   "id": "convenio-panaderia-tablas-salariales",
   "sec": "economia",
   "kicker": "Panaderos",
   "iso": "2026-10-29",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Acuerdo-de-la-Comision-Paritaria-del-Convenio-Colectivo-del-sector-de-las-industrias-de-panaderia-y-expendedurias-de-pan-fijando-las-tablas-salariales-para-2024-2025-y-2026/",
   "title": "Un oficial de panadería cobrará 18.290 euros brutos en 2026 con las nuevas tablas del convenio de Sevilla",
   "sub": "Patronal y sindicatos fijan los salarios de 2024, 2025 y 2026 y ponen fin al pleito por la revisión salarial que resolvió el TSJA",
   "caption": "Evolución del salario bruto anual de un oficial de panadería tradicional según el convenio provincial.",
   "foto": "convenio-panaderia-tablas-salariales-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "El BOP de Sevilla publica el 29 de octubre de 2026 las tablas salariales de 2024, 2025 y 2026 del convenio de industrias de panadería y expendedurías de pan de la provincia.",
    "Un oficial de panadería tradicional pasa de 17.072,30 euros brutos anuales en 2024 a 18.290,30 euros en 2026.",
    "El acuerdo entre FEPAN, UGT y CCOO pone fin a un conflicto colectivo que resolvió el Tribunal Superior de Justicia de Andalucía en marzo."
   ],
   "body": [
    "El Boletín Oficial de la Provincia de Sevilla (BOP) publica este jueves 29 de octubre las tablas salariales de 2024, 2025 y 2026 del convenio colectivo de las industrias de panadería y expendedurías de pan de Sevilla y su provincia, que regula el sector en toda la provincia, también en Alcalá de Guadaíra. Con ellas, un oficial de panadería tradicional cobrará 18.290,30 euros brutos al año en 2026.",
    "Las tablas las aprobó por unanimidad la comisión paritaria del convenio el 15 de septiembre de 2026 en la sede del SERCLA, el sistema andaluz de solución de conflictos laborales. La forman cuatro representantes de la patronal FEPAN y cuatro de los sindicatos, dos de UGT y dos de CCOO.",
    "## Fin de un pleito",
    "El acuerdo pone fin al conflicto colectivo por la interpretación del artículo 2 del convenio, el que regula la revisión de los salarios. El caso empezó en el Juzgado de lo Social número 11 de Sevilla y terminó con una sentencia firme de la Sala de lo Social del Tribunal Superior de Justicia de Andalucía en Sevilla, del 12 de marzo de 2026. Las partes renuncian ahora a cualquier otra acción legal sobre estas tablas.",
    "## Cuánto se cobra",
    "En la panadería tradicional, el oficial de panadería pasa de 17.072,30 euros brutos anuales en 2024 a 17.772,84 en 2025 y 18.290,30 en 2026, unos 1.218 euros más en dos años, un 7,1 %. El maestro encargado llega en 2026 a 19.195,75 euros; el conductor repartidor, a 17.539,55; y el administrativo, a 19.377,75. Los vendedores, ayudantes, auxiliares administrativos y operarios de limpieza cobrarán 17.094 euros.",
    "En la panadería semimecanizada, los sueldos son algo más altos. El jefe de fabricación alcanza en 2026 los 24.131,85 euros brutos anuales, el jefe de taller 22.372,35 y el oficial de panadería 18.631,03.",
    "Los salarios publicados son cantidades brutas anuales. El acta no detalla en cuántas pagas se reparten.",
    "## Un convenio que acaba este año",
    "El convenio provincial termina su vigencia el 31 de diciembre de 2026, de modo que patronal y sindicatos tendrán que negociar uno nuevo para los próximos años."
   ],
   "seo": [
    "convenio-panaderia-sevilla-tablas-salariales-2026",
    "Convenio de panadería de Sevilla: salarios hasta 2026",
    "El BOP publica las tablas del convenio de panadería de Sevilla: un oficial cobrará 18.290 euros brutos en 2026 tras el pleito resuelto por el TSJA.",
    [
     "convenio de panadería",
     "FEPAN",
     "UGT",
     "CCOO",
     "salarios",
     "BOP de Sevilla",
     "panaderos de Alcalá"
    ]
   ]
  },
  {
   "id": "vive-alcala-plazas-asesor-administrativo",
   "sec": "economia",
   "kicker": "Empleo público",
   "iso": "2026-10-29",
   "src": "BOP de Sevilla",
   "fuente_url": "https://bopsevilla.dipusevilla.es/publica/buscador-anuncios/anuncio/Bases-de-la-convocatoria-del-proceso-de-seleccion-para-el-puesto-de-Asesor-Juridico/",
   "title": "VIVE Alcalá abre el plazo para cubrir un puesto de asesor jurídico y otro de administrativo",
   "sub": "La empresa municipal de vivienda los cubrirá por concurso-oposición; las solicitudes se presentan hasta el 18 de noviembre",
   "caption": "La empresa municipal VIVE Alcalá busca un asesor jurídico y un administrativo.",
   "foto": "vive-alcala-plazas-asesor-administrativo-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "VIVE Alcalá, la empresa pública de la vivienda de Alcalá de Guadaíra, convoca un puesto de asesor jurídico y otro de administrativo por concurso-oposición.",
    "El plazo de solicitudes es de 20 días naturales desde el día siguiente a la publicación en el BOP del 29 de octubre de 2026, es decir, hasta el 18 de noviembre.",
    "Las bases completas se consultan en la sede electrónica de VIVE Alcalá."
   ],
   "body": [
    "VIVE Alcalá, la empresa pública de la vivienda del Ayuntamiento de Alcalá de Guadaíra, ha abierto dos procesos de selección para cubrir un puesto de asesor jurídico y otro de administrativo. El Boletín Oficial de la Provincia de Sevilla (BOP) publica este jueves 29 de octubre las bases, y desde el día siguiente corre un plazo de 20 días naturales para presentar solicitudes.",
    "Los dos puestos se cubrirán por concurso-oposición, un sistema que combina pruebas y valoración de méritos. Las bases las aprobó el Consejo de Administración de la empresa el 6 de octubre de 2026, según los edictos firmados por su director gerente, Ricardo Martínez Alfaro.",
    "## Dónde están las bases",
    "Los anuncios del BOP solo reproducen el apartado de plazos. El resto de las condiciones, como los requisitos de titulación, el tipo de contrato, el temario o el salario, figuran en las bases completas, que se consultan en la sede electrónica de VIVE Alcalá con el código seguro de verificación de cada documento. Las solicitudes que se presenten fuera de plazo o sin la forma prevista no se admitirán.",
    "## Una empresa en crecimiento",
    "La convocatoria llega en pleno arranque de las primeras promociones de la empresa municipal. VIVE construye 84 viviendas de alquiler asequible en la Cornisa del Zacatín, cuyas obras empezaron en octubre, y prepara el sorteo de 107 viviendas protegidas en venta en la avenida Mar Mediterráneo, previsto para diciembre. Según el delegado de Urbanismo, Jesús Mora, la empresa trabaja además en los anteproyectos de unas 100 viviendas en Pablo VI y 600 en Cercadillo.",
    "El BOP del mismo día publica también las bases para cubrir, por concurso de méritos entre funcionarios de carrera del Ayuntamiento, la jefatura de la Sección de Mantenimiento de Edificios, un puesto de arquitectura técnica con un plazo de 15 días hábiles.",
    "<span class='howto'>Plazo: 20 días naturales desde el 30 de octubre, hasta el miércoles 18 de noviembre de 2026. Bases y solicitudes: sede electrónica de VIVE Alcalá (vivealcaladeguadaira.sedelectronica.es). Códigos de verificación de las bases: 79SRWNCQ7NHMLKM54WXXC9JK7 (asesor jurídico) y 3CYR5AZ293P6DN3AF7XNA3YQ6 (administrativo).</span>"
   ],
   "seo": [
    "vive-alcala-empleo-asesor-juridico-administrativo",
    "VIVE Alcalá convoca un asesor jurídico y un administrativo",
    "VIVE Alcalá, la empresa municipal de vivienda de Alcalá de Guadaíra, abre hasta el 18 de noviembre la selección de un asesor jurídico y un administrativo.",
    [
     "VIVE Alcalá",
     "empleo público",
     "asesor jurídico",
     "administrativo",
     "concurso-oposición",
     "BOP de Sevilla"
    ]
   ]
  },
  {
   "id": "consejo-suspende-exposicion-pinturas-restauradas",
   "sec": "hermandades",
   "kicker": "Patrimonio",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=-s_rz-gnJk0&t=66s",
   "rel": [
    "pedro-manzano-conservacion-preventiva",
    "peana",
    "panarrafest-suspendido-luto-oficial"
   ],
   "title": "El luto aplaza la presentación de las pinturas restauradas del Cristo de Burgos y del Cristo de los Desamparados",
   "sub": "La presentación de las dos obras, prevista el jueves 29 en el Museo de la Ciudad, se celebrará previsiblemente en la segunda quincena de noviembre",
   "caption": "Una sala de exposiciones del Museo de Alcalá de Guadaíra, en una imagen de archivo.",
   "foto": "museo-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Consejo de Hermandades de Alcalá ha suspendido la exposición y la conferencia sobre la restauración de dos pinturas previstas el jueves 29 de octubre en el Museo de la Ciudad.",
    "Las obras son el «Santo Cristo de Burgos», de la parroquia de San Sebastián, y el «Cristo de los Desamparados», de la Hermandad de la Amargura.",
    "El restaurador Alejandro Redondo, vicepresidente del Consejo, sitúa la nueva fecha previsiblemente en la segunda quincena de noviembre.",
    "La suspensión responde al luto oficial de tres días decretado por el Gobierno tras el accidente ferroviario de Urda (Toledo)."
   ],
   "body": [
    "El Consejo de Hermandades de Alcalá de Guadaíra ha suspendido la exposición y la conferencia sobre la restauración del «Santo Cristo de Burgos» y del «Cristo de los Desamparados» que estaban previstas para la tarde del jueves 29 de octubre en el Museo de la Ciudad, por el luto oficial decretado tras el accidente ferroviario de Urda (Toledo).",
    "Los dos actos formaban parte del II Ciclo de Conservación Preventiva, que organizan el Ayuntamiento y el Consejo de Hermandades. Según ha informado el Consejo en su web, quedan suspendidos por los tres días de <a href='#urda-sanchez-luto-oficial'>luto oficial</a> que ha decretado el Gobierno de España, del jueves 29 al sábado 31 de octubre.",
    "## Nueva fecha prevista",
    "El conservador de obras de arte Alejandro Redondo, que firma la restauración de las dos pinturas, explicó a El Panadero que la presentación queda aplazada y que se celebrará previsiblemente en la segunda quincena de noviembre. Redondo atendió a este periódico en la parroquia de San Sebastián, a la que pertenece el «Santo Cristo de Burgos».",
    "Redondo defendió que las hermandades piensen en cómo guardar y manipular cada pieza antes de comprarla o restaurarla, y propuso que cada una tenga un responsable de conservación preventiva. «No es lo mismo intervenir cada 15 años que intervenir cada 100», afirmó. El ciclo continúa el sábado 7 de noviembre con una conferencia sobre la conservación de Santa María Magdalena, de la Hermandad del Santo Entierro, y una jornada de puertas abiertas para ver el paso de San Juan.",
    "## Lo que estaba previsto",
    "La exposición de las dos obras pictóricas iba a abrirse a las 19.30. El «Santo Cristo de Burgos» pertenece a la parroquia de San Sebastián y el «Cristo de los Desamparados», a la Hermandad de la Amargura.",
    "A las 20.00 estaba prevista la conferencia sobre el proceso de intervención en ambas pinturas. La iban a ofrecer el conservador de obras de arte Alejandro Redondo, vicepresidente del Consejo, y su equipo: Victoria Fernández Espejo, José Ángel del Valle Serrano y el historiador del arte Enrique Ruiz Portillo. Es el mismo equipo que abrió el ciclo en septiembre con la restauración del retablo de San Juan Bosco, en la capilla de los Salesianos.",
    "La sesión iba a continuar la del martes 27, cuando el restaurador <a href='#pedro-manzano-conservacion-preventiva'>Pedro Manzano pidió a las hermandades cuidar cómo manipulan su patrimonio</a>. En esa misma sala del Museo se presentó a mediados de octubre la peana restaurada de la Virgen del Águila.",
    "El Ayuntamiento ha suspendido también todos sus actos durante el luto, entre ellos <a href='#panarrafest-suspendido-luto-oficial'>el PanarraFest y el PrePanarraFest</a>.",
    "En su web, el Consejo de Hermandades ha trasladado además sus condolencias a las víctimas del accidente y a sus familias."
   ],
   "seo": [
    "pinturas-restauradas-cristo-burgos-desamparados-suspendida",
    "Aplazada la presentación del Cristo de Burgos restaurado",
    "El Consejo de Hermandades de Alcalá suspende por el luto la exposición y la charla sobre las pinturas restauradas del Cristo de Burgos y los Desamparados.",
    [
     "Consejo de Hermandades de Alcalá",
     "Hermandad de la Amargura",
     "parroquia de San Sebastián",
     "Cristo de los Desamparados",
     "Santo Cristo de Burgos",
     "Museo de Alcalá",
     "restauración"
    ]
   ],
   "actualizada": "2026-10-30T17:14"
  },
  {
   "id": "policia-local-bomberos-plazas-tribuna",
   "sec": "politica",
   "kicker": "Seguridad",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=ZSp3fDslwbA&t=183s",
   "rel": [
    "bomberos",
    "policia-local-vehiculos",
    "horas-extra-pleno-reparo"
   ],
   "title": "El gobierno de Alcalá cifra en nueve las plazas de Policía Local en proceso y en cinco los bomberos que han entrado en 2026",
   "sub": "La portavoz socialista, Mª de los Ángeles Ballesteros, atribuye la falta de agentes a la congelación de plazas de 2012 y anuncia nuevas convocatorias en 2027",
   "caption": "Plazas de Policía Local y bomberos y vehículos de la Policía Local, según los datos ofrecidos por el gobierno municipal.",
   "foto": "policia-local-bomberos-plazas-tribuna-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "Según el gobierno municipal, nueve plazas de Policía Local de Alcalá de Guadaíra están en proceso y sus aspirantes terminan las pruebas antes de pasar por la academia.",
    "Cinco bomberos se han incorporado en 2026 con la oferta pública de empleo de este año, según la portavoz socialista, Mª de los Ángeles Ballesteros.",
    "Ballesteros atribuye la merma de las plantillas a la congelación de la reposición de plazas aprobada en 2012 y anuncia nuevas plazas de policía y bomberos en 2027.",
    "Grupos de la oposición han sostenido que faltan efectivos en los dos cuerpos."
   ],
   "body": [
    "El gobierno municipal de Alcalá de Guadaíra tiene en marcha un proceso para cubrir nueve plazas de Policía Local y ha incorporado este año a cinco bomberos, según explicó la portavoz del PSOE y delegada de Hacienda, Mª de los Ángeles Ballesteros, el miércoles 28 de octubre en el programa La Tribuna.",
    "Ballesteros respondió así a las críticas sobre la falta de efectivos en los dos cuerpos que han planteado grupos de la oposición en ese mismo espacio en las últimas semanas. La portavoz sostuvo que esas reclamaciones toman como referencia ratios generales para toda España, como los que maneja la Federación Española de Municipios y Provincias (FEMP).",
    "## La congelación de 2012",
    "La delegada atribuyó la merma de las plantillas a la congelación de la creación y reposición de plazas públicas, incluidas las de Policía Local, aprobada en 2012 por el Gobierno de Mariano Rajoy. Según su versión, durante varios años los ayuntamientos no pudieron cubrir las jubilaciones de agentes, y la plantilla de Alcalá sufrió «una gran merma», como la de los demás municipios.",
    "Desde que se levantó esa restricción, afirmó, el Ayuntamiento ha ofertado plazas de policía cada año. Los aspirantes a las nueve plazas actuales están terminando las pruebas y después tendrán que pasar por la academia. Ballesteros anunció nuevas plazas de policía y de bomberos en 2027, sin concretar cuántas.",
    "En el parque de bomberos, los cinco nuevos efectivos han llegado con la oferta pública de empleo aprobada en 2026. La portavoz destacó también los procesos de promoción interna y el refuerzo de mandos superiores e intermedios en los dos cuerpos.",
    "## Vehículos nuevos",
    "Ballesteros se refirió además a la renovación de medios. El Servicio de Extinción de Incendios estrenó en octubre un camión ligero para las salidas por el casco urbano, que según la portavoz ha tardado un año en fabricarse para ajustarse a la normativa. La Policía Local, que incorporó coches nuevos con cámara frontal, cuenta con 16 vehículos entre turismos, furgonetas y todoterrenos, además de motocicletas, según sus datos.",
    "La portavoz no detalló cuántos agentes ni cuántos bomberos tiene hoy la plantilla municipal. El Pleno aprobó este mes 1,2 millones de euros para pagar horas extraordinarias del personal municipal."
   ],
   "seo": [
    "plazas-policia-local-bomberos-alcala-plantilla",
    "Alcalá: nueve plazas de Policía Local y cinco bomberos",
    "El gobierno de Alcalá de Guadaíra tiene en proceso nueve plazas de Policía Local y ha incorporado cinco bomberos en 2026, según la portavoz del PSOE.",
    [
     "Policía Local de Alcalá",
     "bomberos de Alcalá",
     "Mª de los Ángeles Ballesteros",
     "PSOE de Alcalá",
     "oferta de empleo público",
     "La Tribuna"
    ]
   ]
  },
  {
   "id": "presupuestos-2027-aportaciones-grupos",
   "sec": "politica",
   "kicker": "Presupuestos 2027",
   "iso": "2026-10-29",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=ZSp3fDslwbA&t=1057s",
   "rel": [
    "ordenanzas-fiscales-2027",
    "vox-congelacion-impuestos-2027",
    "obras-la-mina-tunel-plazos"
   ],
   "title": "El PP pide un papel en el presupuesto de 2027 y Ballesteros responde que la oposición no ha hecho propuestas en tres años",
   "sub": "La delegada de Hacienda abrirá antes de fin de año un plazo de aportaciones de los grupos para unas cuentas que, según el gobierno, cerrarán las obras del mandato",
   "caption": "Fachada de la Casa Consistorial de Alcalá de Guadaíra, en la plaza del Duque, en una imagen de archivo.",
   "foto": "salon-plenos-reforma-of.jpg",
   "fotocredito": "CarlosVdeHabsburgo / Wikimedia Commons (CC BY-SA 4.0)",
   "claves": [
    "El gobierno municipal de Alcalá de Guadaíra ya trabaja en el presupuesto de 2027, el último del mandato 2023-2027.",
    "El portavoz del PP, Esaú Pérez, ha preguntado qué papel tendrán los grupos de la oposición en la elaboración de esas cuentas.",
    "La delegada de Hacienda, Mª de los Ángeles Ballesteros, dice que abre cada año un plazo de aportaciones en el último trimestre y que los grupos no han presentado propuestas presupuestarias en tres años."
   ],
   "body": [
    "La delegada de Hacienda de Alcalá de Guadaíra, Mª de los Ángeles Ballesteros (PSOE), abrirá en el último trimestre del año un plazo para que los grupos municipales hagan aportaciones al presupuesto de 2027. Lo dijo el miércoles 28 de octubre en el programa La Tribuna, al responder a una pregunta del portavoz del PP, Esaú Pérez.",
    "Pérez planteó qué está dispuesto a hacer el gobierno para que las cuentas del próximo año respondan a las necesidades de los vecinos, qué papel tendrán los grupos de la oposición para participar y proponer, y qué esfuerzo hará para ganarse su confianza.",
    "## La respuesta del gobierno",
    "Ballesteros afirmó que cada año, antes de la aprobación inicial del presupuesto, abre un periodo de aportaciones para los grupos. Según su versión, el año pasado todos lo declinaron, y el anterior el PP presentó propuestas, algunas de las cuales el gobierno incorporó.",
    "La delegada sostuvo que en tres años no ha recibido de los grupos ninguna propuesta dirigida de forma directa al presupuesto, aunque reconoció que el gobierno ha cumplido varias de sus mociones y que eso tiene reflejo en las cuentas. A su juicio, la oposición declina participar para justificar su voto en contra, como hizo con las ordenanzas fiscales de 2027, que el gobierno presenta como una congelación de impuestos y tasas y que la oposición rechaza que lo sea.",
    "## Las cuentas del final del mandato",
    "Ballesteros explicó en el mismo programa que la Delegación de Hacienda ya trabaja en el presupuesto, el último del mandato 2023-2027. Según el gobierno, servirá para terminar las inversiones en marcha, entre ellas la calle La Mina, la plaza del Cabildo, la <a href='#obras-la-mina-tunel-plazos'>Jefatura de Policía Local en Medina de Haro</a>, la pista de atletismo de los Cercadillos y el carril bici, además de mantener los servicios municipales.",
    "La política fiscal del gobierno es uno de los asuntos de debate de este final de mandato. Vox, por ejemplo, ha calificado de «bulo» la congelación y <a href='#vox-congelacion-impuestos-2027'>reclama una bajada de impuestos</a>. El gobierno no ha dado todavía una fecha para presentar el proyecto de presupuesto de 2027 ni para abrir el plazo de aportaciones."
   ],
   "seo": [
    "presupuesto-2027-alcala-oposicion-aportaciones",
    "Presupuesto 2027 de Alcalá: el PP pide participar",
    "El PP pide un papel en el presupuesto de 2027 de Alcalá de Guadaíra y la delegada de Hacienda abrirá un plazo de aportaciones antes de fin de año.",
    [
     "presupuesto 2027",
     "Mª de los Ángeles Ballesteros",
     "Esaú Pérez",
     "PP de Alcalá",
     "PSOE de Alcalá",
     "Ayuntamiento de Alcalá de Guadaíra",
     "La Tribuna"
    ]
   ]
  },
  {
   "id": "urda-investigacion-juzgado-orgaz-guardia-civil",
   "sec": "sucesos",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "title": "La jueza de Orgaz decreta el secreto de sumario del choque de Urda y los forenses empiezan las autopsias",
   "sub": "La Guardia Civil ha interrogado al operario de Adif que autorizó al AVE a reanudar la marcha; los institutos forenses de Toledo y Ciudad Real han recibido 54 cuerpos",
   "caption": "Una portavoz de la Guardia Civil pide a los familiares de primer grado de los pasajeros que acudan a dar muestras de ADN.",
   "foto": "urda-guardia-civil-portavoz-tv.jpg",
   "fotocredito": "Guardia Civil (vía MiGuadaíraTV)",
   "rel": [],
   "claves": [
    "La jueza de la plaza 2 del Tribunal de Instancia de Orgaz, que investiga el choque de trenes de Urda (Toledo) del 28 de octubre de 2026, ha decretado el secreto de sumario, ha prohibido el acceso a la zona y ha ordenado incautar las cajas negras.",
    "La Guardia Civil ha tomado declaración al operario del centro de control de Adif que autorizó a reanudar la marcha antes del accidente y al resto de su turno. No se han fijado responsabilidades individuales.",
    "Los institutos de Medicina Legal de Toledo y Ciudad Real trabajan sin interrupción en la identificación de 54 cuerpos. Las familias reciben la noticia en persona; el Centro de Integración de Datos alerta de mensajes falsos que suplantan a la Guardia Civil.",
    "La Comisión de Investigación de Accidentes Ferroviarios (CIAF) investiga por su cuenta las causas técnicas, con apoyo de la Guardia Civil."
   ],
   "body": [
    "La jueza que investiga en Orgaz (Toledo) el choque de un AVE de Renfe y un Iryo en Urda, que dejó al menos 68 muertos el miércoles 28 de octubre de 2026, ha decretado el secreto de sumario. Este jueves 29 empiezan las autopsias, y la Guardia Civil ha interrogado al operario de Adif que autorizó la reanudación de la marcha.",
    "Según el Tribunal Superior de Justicia de Castilla-La Mancha (TSJCM), la causa corresponde a la plaza número 2 de la Sección Civil y de Instrucción del Tribunal de Instancia de Orgaz, que estaba de guardia. Su titular se ha desplazado a la zona del accidente, entre Los Yébenes y Urda.",
    "En una providencia dictada a las 21:10 del miércoles, la jueza prohibió el acceso de personas ajenas a la zona del accidente y la retirada de elementos para preservar las pruebas. También decretó el secreto de sumario y ordenó incautar las cajas negras de los trenes.",
    "<img src='fotos/urda-investigacion-gfx.jpg' alt='Gráfico: quién investiga el accidente de Urda: el juzgado de Orgaz, la Guardia Civil y la CIAF' loading='lazy' style='display:block;width:100%;height:auto;margin:6px 0'>",
    "## Cinco equipos judiciales",
    "La Sala de Gobierno del TSJCM acordó un dispositivo extraordinario de cinco equipos judiciales. Cada uno lo forman un magistrado, un letrado de la Administración de Justicia y un médico forense. Su trabajo es autorizar y coordinar las diligencias sobre el terreno, empezando por el levantamiento de los cuerpos.",
    "El Instituto de Medicina Legal de Toledo, donde han empezado a llegar los cuerpos, ha activado su protocolo para grandes catástrofes. La Unidad Militar de Emergencias (UME) ha levantado junto a él una morgue auxiliar, y 12 forenses harán las autopsias, según García-Page. El Instituto Nacional de Toxicología y Ciencias Forenses obtiene los perfiles genéticos. El TSJCM ha activado también un Centro de Integración de Datos, formado por forenses y miembros de las Fuerzas y Cuerpos de Seguridad del Estado, que reúne la información sobre autopsias e identificaciones.",
    "A última hora del miércoles, el Instituto de Medicina Legal de Toledo había recibido 52 cuerpos y el de Ciudad Real, otros dos. Las autopsias empiezan este jueves. El Centro de Integración de Datos es el único organismo autorizado para certificar las identificaciones y dar información oficial sobre ellas.",
    "## El operario del centro de control",
    "La Guardia Civil ha tomado declaración en el centro de control de alta velocidad de Madrid-Puerta de Atocha al operario que, según el ministro de Transportes, Óscar Puente, autorizó al AVE a reanudar la marcha tras la avería del sistema de control de trenes, y también al resto de su turno. No ha precisado en calidad de qué declararon y no se han establecido responsabilidades individuales. Sus explicaciones están en <a href='#urda-puente-centro-control-adif'>la comparecencia del ministro</a>, y las grabaciones de esas comunicaciones, en <a href='#urda-audios-centro-control-adif'>la pieza sobre los audios</a>.",
    "Vox ha presentado una querella ante el juzgado de Orgaz contra los responsables de Adif, en particular contra los operadores del puesto de mando de Atocha que autorizaron reanudar la marcha tras el fallo del LZB, por presuntos delitos de homicidio y lesiones imprudentes. Actúa como acusación popular y pide que se conserven las grabaciones y los registros del centro de control.",
    "Además de la causa judicial, la Comisión de Investigación de Accidentes Ferroviarios (CIAF), el organismo que analiza las causas técnicas de los accidentes de tren, ha abierto su propia investigación. Con ella colaboran las unidades de la Guardia Civil que trabajan en el caso: la Unidad Central Operativa (UCO), la Unidad Técnica, la Policía Judicial y la Comandancia de Toledo.",
    "Para identificar a los fallecidos, la Guardia Civil toma muestras de ADN a familiares de primer grado de las personas no localizadas en oficinas de Madrid, Sevilla, Córdoba y Toledo. La Guardia Civil había recogido 64 denuncias de desaparición hasta el jueves por la mañana. Las identificaciones solo se comunican en persona: el Centro de Integración de Datos alertó el jueves de mensajes falsos que se hacen pasar por la Guardia Civil para anunciar identificaciones. El balance oficial está en <a href='#accidente-tren-urda-ave-iryo'>la noticia principal del accidente</a>.",
    "<span class='howto'>Familiares: centro de atención del juzgado de Orgaz, 925 317 020. Las identificaciones solo se comunican en persona; ante mensajes sospechosos, Guardia Civil (062) o INCIBE (017). Teléfonos de las compañías: Renfe, 900 10 10 20; Iryo, 900 001 403. Muestras de ADN para familiares de primer grado: oficinas de la Guardia Civil en Madrid, Sevilla, Córdoba y Toledo. Emergencias: 112.</span>",
    "Rectificación, 29 de octubre de 2026: la cifra de 29 denuncias de desaparición publicada a primera hora correspondía al miércoles por la noche; la Guardia Civil había recogido 64 hasta el jueves por la mañana."
   ],
   "seo": [
    "investigacion-accidente-urda-juzgado-orgaz-guardia-civil",
    "Urda: secreto de sumario y empiezan las autopsias",
    "La jueza de Orgaz decreta el secreto de sumario del choque de trenes de Urda (Toledo) y ordena incautar las cajas negras. Empiezan las autopsias.",
    [
     "accidente ferroviario",
     "Urda",
     "juzgado de Orgaz",
     "Guardia Civil",
     "Adif",
     "CIAF",
     "TSJCM",
     "identificación de víctimas"
    ]
   ],
   "encuadre": "center 20%"
  },
  {
   "id": "urda-puente-centro-control-adif",
   "sec": "sucesos",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "title": "Puente atribuye el choque de Urda a una orden «errónea» del centro de control de Adif y descarta dimitir",
   "sub": "El ministro de Transportes explica que el AVE recorrió 25 kilómetros tras recibir permiso para reanudar la marcha con la señal en rojo",
   "caption": "Equipos de rescate junto a los coches del AVE y del Iryo, entre olivos, en el lugar del choque de Urda (Toledo).",
   "foto": "urda-puente-restos-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "rel": [],
   "claves": [
    "El ministro de Transportes, Óscar Puente, atribuye el accidente de Urda (Toledo) del 28 de octubre de 2026 a la decisión del centro de control de Adif en Atocha de autorizar al AVE a reanudar la marcha, que calificó de «errónea» e «inexplicable».",
    "Según Puente, el sistema de control LZB dejó de funcionar hacia las 8:30 en un tramo de 63 kilómetros; a las 8:36 se autorizó la reanudación y el AVE recorrió 25 kilómetros hasta alcanzar al Iryo.",
    "Puente ha descartado dimitir y comparecerá el martes 3 de noviembre ante la Diputación Permanente del Congreso.",
    "Fuentes de Iryo sostienen que su tren seguía detenido porque no había recibido la orden de reanudar la marcha; el Gobierno cree que también recibió alguna instrucción para seguir."
   ],
   "body": [
    "El ministro de Transportes, Óscar Puente, atribuye el choque de trenes de Urda (Toledo), que dejó al menos 68 muertos el miércoles 28 de octubre de 2026, a una orden «errónea» del centro de control de Adif en Atocha, que autorizó al AVE a reanudar la marcha. Puente ha descartado dimitir.",
    "En su comparecencia, Puente calificó de «inverosímil» un accidente por alcance en la red ferroviaria española y de «inexplicable» la decisión tomada en el centro de control. Según su relato, la persona que dio la orden está identificada. Las responsabilidades, dijo, las fijará la investigación.",
    "<img src='fotos/urda-puente-gfx.jpg' alt='Gráfico: cronología del accidente de Urda según el ministro de Transportes, Óscar Puente' loading='lazy' style='display:block;width:100%;height:auto;margin:6px 0'>",
    "## Del fallo del LZB al alcance",
    "El ministro explicó que hacia las 8:30 un fallo dejó sin servicio el LZB, el sistema que vigila desde la cabina la velocidad de los trenes y la distancia entre ellos, en un tramo de unos 63 kilómetros. Los trenes que circulaban por ese tramo se detuvieron de forma automática, entre ellos el AVE 2080, que había salido de Madrid-Puerta de Atocha a las 8:00 hacia Sevilla-Santa Justa.",
    "A las 8:36, seis minutos después de la avería, el centro de control autorizó al AVE a reanudar la marcha, aunque la señal de la vía estaba en rojo. El tren recorrió unos 25 kilómetros hasta alcanzar por detrás al Iryo 6076, que estaba detenido delante, en el punto kilométrico 118. Dos coches del Iryo cayeron por un terraplén.",
    "Puente aseguró que todavía no ha hablado con el operario que dio la autorización. La Guardia Civil ya lo ha interrogado, como recoge <a href='#urda-investigacion-juzgado-orgaz-guardia-civil'>la investigación que dirige el juzgado de Orgaz</a>.",
    "## La versión de Iryo",
    "Iryo ha confirmado en un comunicado que su tren 6076 recibió un golpe en la parte trasera a la altura de Urda, por causas que dice desconocer. Fuentes de la compañía sostienen que el tren seguía parado porque su maquinista aún hablaba con el centro de control de Atocha y no había recibido la orden de reanudar la marcha, que el AVE sí tenía. El Gobierno sostiene, en cambio, que el Iryo también recibió alguna instrucción para seguir, aunque Puente admitió no saber con precisión por qué continuaba detenido.",
    "Las grabaciones del centro de control, difundidas el miércoles por la noche, recogen que la maquinista del Iryo recibió a las 8:41 la misma instrucción que el AVE, reiniciar el LZB y seguir, y que a las 8:48 avisó de que no podía hacerlo y continuaba parada. Seis minutos después, el AVE la alcanzó. <a href='#urda-audios-centro-control-adif'>Qué dicen los audios</a>.",
    "## «No estoy pensando en mí»",
    "Preguntado por su continuidad, el ministro respondió: «En estos momentos no estoy pensando en mí, sino en gestionar la situación». También dijo que están «absolutamente devastados» y que es uno de los momentos más duros que se pueden vivir.",
    "Puente comparecerá el martes 3 de noviembre a las 17:00 ante la Diputación Permanente del Congreso. Según Transportes, lo hace por voluntad propia, después de que Sumar, Podemos y ERC registraran peticiones para que explicara el accidente. El jueves participó en Toledo en la reunión del centro de coordinación de la emergencia con Sánchez y García-Page.",
    "El presidente del Gobierno, Pedro Sánchez, que no ha querido adelantar responsabilidades, ha dicho que todo indica que el origen de este accidente no tiene que ver con el de Adamuz (Córdoba) de enero. Sus declaraciones están en <a href='#urda-sanchez-luto-oficial'>la pieza sobre el luto oficial</a>.",
    "Adif mantiene suspendida hasta nuevo aviso la alta velocidad entre Madrid y Andalucía, la línea que usan los viajeros de Alcalá de Guadaíra desde Sevilla-Santa Justa. El balance oficial y los teléfonos para familias están en <a href='#accidente-tren-urda-ave-iryo'>la noticia principal</a>.",
    "El ministro volvió a dar explicaciones el viernes 30 en una rueda de prensa: <a href='#puente-rueda-prensa-urda-centro-control'>Puente atribuye el choque a un fallo del centro de control y se niega a dimitir</a>."
   ],
   "seo": [
    "oscar-puente-accidente-urda-centro-control-adif",
    "Puente culpa del choque de Urda al control de Adif",
    "Óscar Puente atribuye el accidente de Urda (Toledo) a la orden «errónea» de Adif de reanudar la marcha del AVE con la señal en rojo y descarta dimitir.",
    [
     "Óscar Puente",
     "accidente ferroviario",
     "Urda",
     "Adif",
     "sistema LZB",
     "Ministerio de Transportes",
     "AVE Madrid-Sevilla"
    ]
   ]
  },
  {
   "id": "urda-fatima-banez-exministra",
   "sec": "sucesos",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "title": "Muere la exministra Fátima Báñez en el choque de trenes de Urda",
   "sub": "La CEOE y el PP confirmaron el jueves su fallecimiento; la presidenta de la Fundación CEOE viajaba a Sevilla en el Iryo para participar en el Día de la Empresa de la patronal andaluza",
   "caption": "Los coches del AVE y del Iryo, entre olivos, tras el choque en Urda (Toledo).",
   "foto": "urda-banez-trenes-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "rel": [],
   "claves": [
    "La exministra de Empleo Fátima Báñez, presidenta de la Fundación CEOE, murió en el choque de trenes de Urda (Toledo) del 28 de octubre de 2026, a los 59 años.",
    "La CEOE y el presidente del PP, Alberto Núñez Feijóo, confirmaron su fallecimiento el jueves 29.",
    "Báñez viajaba a Sevilla en el Iryo 6076 para participar en el Día de la Empresa de la Confederación de Empresarios de Andalucía (CEA)."
   ],
   "body": [
    "La exministra de Empleo Fátima Báñez, presidenta de la Fundación CEOE, murió en el choque de trenes de Urda (Toledo) del miércoles 28 de octubre de 2026. La CEOE y el presidente del PP, Alberto Núñez Feijóo, confirmaron su fallecimiento el jueves 29, después de un día y medio sin noticias oficiales sobre ella. Tenía 59 años.",
    "La CEOE fue la primera en informar, a mediodía del miércoles, de que Báñez iba en uno de los trenes. Durante la tarde circuló la noticia de su muerte, que la patronal y el PP no confirmaron entonces. El jueves por la mañana la CEOE seguía sin noticias; por la tarde comunicó su fallecimiento tras recibir confirmación oficial y expresó «su más profunda tristeza».",
    "<img src='fotos/urda-banez-gfx.jpg' alt='Gráfico: la exministra Fátima Báñez viajaba en el Iryo accidentado en Urda' loading='lazy' style='display:block;width:100%;height:auto;margin:6px 0'>",
    "Feijóo, que el miércoles había dicho que el partido seguía «sin noticias confirmadas», anunció en las redes sociales que le habían confirmado que Báñez estaba entre las fallecidas.",
    "## Rumbo a Sevilla",
    "Báñez se dirigía a Sevilla para participar en el Día de la Empresa de la Confederación de Empresarios de Andalucía (CEA). Viajaba en el Iryo 6076, el tren que circulaba delante en la misma dirección y del que dos coches cayeron por un terraplén tras el impacto. Según el primer desglose del presidente de Castilla-La Mancha, Emiliano García-Page, 44 de los muertos viajaban en el Iryo. El balance oficial es de al menos 69.",
    "Nacida en San Juan del Puerto (Huelva) en 1967, Báñez fue diputada del PP en el Congreso entre 2000 y 2019 y ministra de Empleo y Seguridad Social en los gobiernos de Mariano Rajoy desde finales de 2011 hasta junio de 2018. Desde su ministerio se aprobó la reforma laboral de 2012. Tras dejar la política preside la Fundación CEOE.",
    "La identificación de las víctimas corresponde al Centro de Integración de Datos, que coordina el trabajo de los forenses de Toledo y Ciudad Real. El balance oficial y la información para familias están en <a href='#accidente-tren-urda-ave-iryo'>la noticia principal del accidente</a>."
   ],
   "seo": [
    "fatima-banez-exministra-accidente-urda-iryo",
    "Muere Fátima Báñez en el accidente de trenes de Urda",
    "La exministra de Empleo Fátima Báñez, presidenta de la Fundación CEOE, murió en el choque de trenes de Urda (Toledo). La CEOE y el PP lo confirmaron.",
    [
     "Fátima Báñez",
     "accidente ferroviario",
     "Urda",
     "Iryo",
     "Fundación CEOE",
     "CEA",
     "PP"
    ]
   ]
  },
  {
   "id": "urda-sanchez-luto-oficial",
   "sec": "politica",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "title": "Sánchez decreta tres días de luto por Urda: «Si ha habido negligencias, se sabrá»",
   "sub": "El presidente del Gobierno admite desde el lugar del accidente que «no es asumible» sufrir dos accidentes de alta velocidad en un mismo año",
   "caption": "Pedro Sánchez, en el puesto de mando avanzado de Urda (Toledo), junto al ministro del Interior, Fernando Grande-Marlaska (a la izquierda).",
   "foto": "urda-moncloa-page.jpg",
   "fotocredito": "Pool Moncloa / Sandra Armada",
   "rel": [],
   "claves": [
    "El presidente del Gobierno, Pedro Sánchez, ha decretado tres días de luto oficial en España, del jueves 29 al sábado 31 de octubre de 2026, por el accidente ferroviario de Urda (Toledo).",
    "Sánchez habló desde el puesto de mando avanzado de Urda, junto a Emiliano García-Page, en una declaración sin preguntas: «Si ha habido negligencias, se sabrá, y si ha habido fallos en el sistema de seguridad se responderá con total contundencia».",
    "La Junta de Andalucía ha decretado luto hasta las 14:00 del sábado 31 de octubre y el Ayuntamiento de Sevilla, tres días. Su presidente, Juanma Moreno, pide una «inmediata revisión» de las vías andaluzas."
   ],
   "body": [
    "El presidente del Gobierno, Pedro Sánchez, ha decretado tres días de luto oficial en toda España, del jueves 29 al sábado 31 de octubre de 2026, por el choque de trenes de Urda (Toledo), que dejó al menos 68 muertos. Sánchez prometió llegar «hasta el final» para aclarar las causas.",
    "Este jueves 29, tras reunirse en Toledo con García-Page y los ministros del Interior, Fernando Grande-Marlaska, y de Transportes, Óscar Puente, en el centro de coordinación de la emergencia, Sánchez prometió aclarar «hasta el último detalle» de la tragedia y reforzar la seguridad ferroviaria. Los Reyes tenían previsto visitar a los heridos en el Hospital Universitario de Toledo.",
    "Sánchez habló el miércoles 28 desde el puesto de mando avanzado instalado junto a las vías, acompañado por el presidente de Castilla-La Mancha, Emiliano García-Page, en una declaración sin preguntas. «Si ha habido negligencias, se sabrá, y si ha habido fallos en el sistema de seguridad se responderá con total contundencia», afirmó.",
    "El presidente reconoció que «no es asumible» para un país como España «sufrir dos accidentes ferroviarios de alta velocidad en un mismo año», en referencia al descarrilamiento de Adamuz (Córdoba) de enero, que causó 46 muertos. Añadió, sin embargo, que «muy probablemente» el origen de los dos accidentes «nada tiene que ver».",
    "## Investigación y medidas",
    "Sánchez evitó atribuir responsabilidades antes de que concluyan las investigaciones. Las causas las estudiarán la Comisión de Investigación de Accidentes Ferroviarios (CIAF), la Justicia y las propias Adif y Renfe. El ministro de Transportes, Óscar Puente, sí ha señalado <a href='#urda-puente-centro-control-adif'>la orden del centro de control de Adif</a> como origen del choque.",
    "El presidente aseguró que el Gobierno tomará las medidas necesarias para reforzar la seguridad y recuperar la confianza en la alta velocidad, sin concretarlas. «Detrás de cada una de las personas que hoy ha fallecido hay vidas rotas, familias quebradas», dijo.",
    "## Luto en Andalucía y en Sevilla",
    "Al luto nacional se suman los decretados en Andalucía y en Sevilla, destino de los dos trenes. El presidente de la Junta, Juanma Moreno, ha decretado tres días de luto oficial, desde las 14:00 del miércoles 28 hasta las 14:00 del sábado 31 de octubre. El alcalde de Sevilla, José Luis Sanz, ha decretado otros tres días y ha suspendido los actos oficiales del Ayuntamiento.",
    "Moreno, en una declaración institucional por la tarde, exigió al Gobierno «transparencia, rigor y verdad» y pidió una «inmediata revisión de todas las vías férreas en Andalucía», sobre todo de la línea de alta velocidad con Madrid. Sostuvo que el AVE Madrid-Andalucía «ha dejado de ser un medio de transporte seguro» y recordó que al menos 114 personas han muerto en dos accidentes en esa línea en nueve meses.",
    "El accidente ha frenado además la precampaña de las elecciones generales del 29 de noviembre: <a href='#urda-oposicion-reacciones-campana'>la mayoría de los partidos ha suspendido sus actos</a>. El balance oficial y la información para familias están en <a href='#accidente-tren-urda-ave-iryo'>la noticia principal</a>."
   ],
   "seo": [
    "sanchez-luto-oficial-accidente-urda",
    "Sánchez decreta tres días de luto por el accidente de Urda",
    "Pedro Sánchez decreta luto oficial del 29 al 31 de octubre por el choque de trenes de Urda (Toledo) y promete que, si hubo negligencias, «se sabrá».",
    [
     "Pedro Sánchez",
     "luto oficial",
     "accidente ferroviario",
     "Urda",
     "Emiliano García-Page",
     "Junta de Andalucía",
     "Sevilla"
    ]
   ]
  },
  {
   "id": "urda-oposicion-reacciones-campana",
   "sec": "politica",
   "kicker": "Accidente de Urda",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "title": "El accidente de Urda frena la precampaña: PP y PSOE suspenden sus actos y Vox mantiene los suyos",
   "sub": "Feijóo pide una investigación del Gobierno «inmediata» y otra judicial; Vox culpa al Gobierno y se querella contra responsables de Adif",
   "caption": "Qué han hecho los partidos tras el accidente ferroviario de Urda (Toledo), a un mes de las elecciones generales del 29 de noviembre.",
   "foto": "urda-partidos-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "rel": [],
   "claves": [
    "El accidente de trenes de Urda (Toledo) del 28 de octubre de 2026 ha llevado al PSOE, al PP y a otros partidos a suspender sus actos de precampaña de las elecciones generales del 29 de noviembre. Vox es el único que mantiene su agenda.",
    "El presidente del PP, Alberto Núñez Feijóo, pide dos investigaciones en paralelo: una del Gobierno, inmediata, y otra judicial, sin interferencias.",
    "El líder de Vox, Santiago Abascal, atribuye el accidente a la gestión del Gobierno y a la degradación de las infraestructuras. Su partido se ha querellado contra los responsables de Adif por presuntos homicidio y lesiones imprudentes."
   ],
   "body": [
    "El choque de trenes de Urda (Toledo), que dejó al menos 68 muertos el miércoles 28 de octubre de 2026, ha frenado la precampaña de las elecciones generales del 29 de noviembre. El PSOE, el PP y otras formaciones han suspendido sus actos. Vox es el único partido que mantiene su agenda.",
    "El presidente del Gobierno y candidato socialista, Pedro Sánchez, canceló su agenda a primera hora y se desplazó a la zona del accidente, desde donde <a href='#urda-sanchez-luto-oficial'>decretó tres días de luto oficial</a>. El PSOE suspendió su actividad pública del día. El PP anunció la suspensión de todos sus actos de precampaña en España y su presidente, Alberto Núñez Feijóo, también suspendió su agenda.",
    "## Feijóo pide dos investigaciones",
    "Feijóo compareció por la tarde en la sede del PP en Madrid. Pidió dos investigaciones en paralelo: una del Gobierno, que sea inmediata, y otra judicial, sin interferencias. Sostuvo que los españoles tienen derecho a saber en qué estado están las vías y las infraestructuras ferroviarias. No pidió la dimisión del ministro de Transportes, Óscar Puente.",
    "El líder del PP se refirió también a la exministra Fátima Báñez, que viajaba en el Iryo accidentado: dijo que el partido seguía «sin noticias confirmadas» sobre ella. Su situación se explica en <a href='#urda-fatima-banez-exministra'>la pieza dedicada a la exministra</a>.",
    "## Vox mantiene su campaña",
    "El líder de Vox, Santiago Abascal, rechazó suspender la campaña y atribuyó el accidente a la gestión del Gobierno de Sánchez y a la degradación de las infraestructuras. Abascal reprochó a Sánchez y a Puente sus bromas sobre Renfe y sostuvo que eso es lo que deberían suspender, y no los actos electorales.",
    "Vox ha presentado además una querella ante el juzgado de Orgaz contra los responsables de Adif y, en particular, contra los operadores del puesto de mando de Atocha que autorizaron a los trenes a reanudar la marcha, por presuntos delitos de homicidio y lesiones imprudentes. El partido actúa como acusación popular y pide que se conserven las grabaciones y los registros del centro de control. La causa la instruye <a href='#urda-investigacion-juzgado-orgaz-guardia-civil'>el juzgado de Orgaz</a>.",
    "Sumar, Podemos y ERC registraron el jueves peticiones para que Puente explicara el accidente en el Congreso. El ministro comparecerá el martes 3 de noviembre a las 17:00 ante la Diputación Permanente, por voluntad propia según su departamento.",
    "Desde el Gobierno, la vicepresidenta segunda, Yolanda Díaz, trasladó sus condolencias a las familias de los fallecidos y agradeció el trabajo de los equipos de emergencia.",
    "Puente ha atribuido el choque a <a href='#urda-puente-centro-control-adif'>una orden «errónea» del centro de control de Adif</a> y ha descartado dimitir. El balance oficial y los teléfonos para familias están en <a href='#accidente-tren-urda-ave-iryo'>la noticia principal del accidente</a>."
   ],
   "seo": [
    "accidente-urda-partidos-precampana-29n",
    "Urda frena la precampaña: PP y PSOE paran y Vox sigue",
    "El accidente de Urda (Toledo) frena la precampaña del 29-N: PSOE y PP suspenden actos, Feijóo pide investigar y Vox mantiene su agenda y culpa al Gobierno.",
    [
     "accidente ferroviario",
     "Urda",
     "elecciones generales 29-N",
     "Alberto Núñez Feijóo",
     "Santiago Abascal",
     "Pedro Sánchez",
     "PP",
     "Vox"
    ]
   ]
  },
  {
   "id": "parque-cerro-de-la-era",
   "sec": "alcala",
   "kicker": "Zonas verdes",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=OZZlQUijaSc&t=984s",
   "title": "Las obras del nuevo parque del Cerro de la Era convertirán en zona verde un solar sin uso desde los años 80",
   "sub": "El Ayuntamiento presentó a los vecinos un proyecto de más de 600.000 euros para 3.600 metros cuadrados junto a la calle Profesor Esteban Palacios",
   "caption": "Vecinos del Cerro de la Era en la reunión informativa sobre el proyecto del nuevo parque.",
   "foto": "parque-cerro-de-la-era.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra ha empezado las obras de un parque en un solar municipal de 3.600 metros cuadrados del Cerro de la Era, sin uso desde la década de 1980.",
    "La inversión supera los 600.000 euros y el plazo de ejecución previsto es de seis meses, según el Ayuntamiento.",
    "El parque tendrá medio centenar de árboles, juegos infantiles, aparatos biosaludables, zona de calistenia y un espacio para perros.",
    "Mientras duren las obras solo los vecinos con garaje pueden acceder a la calle Maestro Francisco Rodríguez Cordero."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha empezado a construir un parque en un solar municipal de 3.600 metros cuadrados del barrio del Cerro de la Era, junto a la calle Profesor Esteban Palacios, que no tenía uso desde los años 80. La obra supera los 600.000 euros y tiene un plazo previsto de seis meses.",
    "El proyecto se presentó a los vecinos el lunes 26 de octubre en una reunión informativa en el auditorio. Asistieron residentes del barrio y del entorno, la junta directiva de la Asociación de Vecinos Cerro de la Era y representantes de la Fundación Girasol, Alwadi-ira y Transformando entre Mujeres. También estuvo el arquitecto autor del proyecto, Juan Bosco Ruiz Heras.",
    "Por parte del gobierno municipal participaron la delegada de Monumento Natural, Medio Ambiente y Sostenibilidad, Luisa Campos; el responsable del Área de Identidad, Christopher Rivas, y la delegada del distrito Centro Oeste, Lidia Ballesteros.",
    "## Una petición vecinal",
    "Campos explicó a El Panadero que la actuación responde a una propuesta de los vecinos para dar uso al solar y que el objetivo es crear una zona verde con más sombra y un espacio de convivencia. En sus declaraciones situó el coste en unos 661.000 euros y la duración de la obra entre seis y ocho meses; la nota oficial del Ayuntamiento habla de más de 600.000 euros y seis meses.",
    "Rivas sostuvo que lo que «era un vacío urbano» se convertirá en un parque para el barrio y para el resto de la ciudad, y destacó que el diseño incluye la recogida de agua de lluvia para reutilizarla en el riego.",
    "## Qué tendrá el parque",
    "Según el Ayuntamiento, el proyecto adecúa los accesos y los aparcamientos existentes, crea itinerarios peatonales adaptados a la pendiente del terreno y zonas de estancia, y planta medio centenar de árboles, además de arbustos y parterres. El alumbrado será LED.",
    "El riego será inteligente y el parque contará con Sistemas Urbanos de Drenaje Sostenible (SUDS) para gestionar el agua de lluvia. Tendrá mobiliario urbano, juegos infantiles, aparatos biosaludables, una zona de calistenia y un espacio de esparcimiento para animales de compañía.",
    "Mientras duren los trabajos, el aparcamiento está restringido en la calle Maestro Francisco Rodríguez Cordero, donde solo se permite el acceso de los vecinos para entrar y salir de sus garajes.",
    "<span class='howto'>Dónde: solar municipal del Cerro de la Era, entorno de la calle Profesor Esteban Palacios. Superficie: 3.600 metros cuadrados. Inversión: más de 600.000 euros. Plazo previsto: seis meses. Tráfico: aparcamiento restringido en la calle Maestro Francisco Rodríguez Cordero durante la obra, salvo acceso a garajes.</span>"
   ],
   "seo": [
    "parque-cerro-de-la-era-solar-obras-alcala",
    "Parque del Cerro de la Era: obras en Alcalá por 600.000 €",
    "Alcalá de Guadaíra construye un parque de 3.600 m² en un solar del Cerro de la Era sin uso desde los 80: árboles, juegos, calistenia y zona canina.",
    [
     "Cerro de la Era",
     "Luisa Campos",
     "zonas verdes",
     "parques",
     "Christopher Rivas",
     "Lidia Ballesteros"
    ]
   ]
  },
  {
   "id": "vive-84-viviendas-financiacion-ia",
   "sec": "politica",
   "kicker": "Vivienda",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=OZZlQUijaSc&t=584s",
   "title": "Izquierda Alcalareña pide un informe público sobre cómo pagará el Ayuntamiento las 84 viviendas de alquiler de VIVE",
   "sub": "La formación apoya la promoción del Zacatín, pero cuestiona que la aportación municipal suba de 5,7 a más de 7,7 millones bajo un plan económico-financiero",
   "caption": "Una máquina trabaja en la parcela de la Cornisa del Zacatín donde VIVE construye las 84 viviendas de alquiler.",
   "foto": "vive-84-viviendas-financiacion-ia.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Izquierda Alcalareña reclama un informe público sobre el impacto en la deuda y la estabilidad presupuestaria de las 84 viviendas de alquiler que construye VIVE Alcalá en el Zacatín.",
    "Según la formación, la aportación municipal a la promoción pasa de 5,7 millones a más de 7,7 millones de euros.",
    "La ayuda europea Next Generation de cerca de 3,8 millones exige que las obras empiecen antes del 31 de diciembre de 2026.",
    "El Ayuntamiento sostiene que la financiación europea evita endeudarse y ahorra cerca de 4,9 millones en costes financieros."
   ],
   "body": [
    "Izquierda Alcalareña ha pedido al Ayuntamiento de Alcalá de Guadaíra un informe público que detalle cómo afectará a la deuda y a la estabilidad presupuestaria la financiación de las 84 viviendas de alquiler asequible que construye la empresa pública VIVE Alcalá en la Cornisa del Zacatín. La formación dice que apoya la promoción, pero no la fórmula para pagarla.",
    "Las obras empezaron este mes, adjudicadas a BILBA Construcción e Infraestructuras. La inversión total anunciada es de 15,9 millones de euros, con 7,97 millones de la Diputación de Sevilla y 3,79 millones de fondos europeos Next Generation EU.",
    "## Dos millones más de aportación municipal",
    "El principal reparo de Izquierda Alcalareña es el aumento de la aportación municipal, que según sus cálculos pasa de 5,7 millones de euros a más de 7,7 millones, algo más de dos millones adicionales. La formación recuerda que el Ayuntamiento está sometido a un plan económico-financiero y cita informes económicos municipales que, según su lectura, advierten de un margen de equilibrio presupuestario muy reducido.",
    "Esos informes, sostiene la formación, plantean la posibilidad de un nuevo incumplimiento si no se produce la inejecución de gasto prevista, es decir, si el Ayuntamiento acaba gastando más de lo que calcula que dejará sin ejecutar.",
    "El segundo punto es el calendario. La ayuda Next Generation vinculada al proyecto, de cerca de 3,8 millones de euros, está condicionada a que las obras comiencen antes del 31 de diciembre de 2026, según la documentación que cita Izquierda Alcalareña. Por eso pide un plan alternativo por si no se cumplen los plazos de la financiación europea.",
    "## La versión del Ayuntamiento",
    "El Ayuntamiento defiende que recurrir a la financiación europea permite evitar endeudamiento y ahorrar cerca de 4,9 millones de euros en costes financieros.",
    "Izquierda Alcalareña insiste en que no cuestiona la necesidad de construir vivienda pública en Alcalá, sino la forma elegida para financiarla y sus posibles consecuencias para las cuentas municipales.",
    "Las 84 viviendas son de dos dormitorios y se alquilarán por 350 euros al mes más garaje y trastero, según el Ayuntamiento. Es una de las promociones con las que el gobierno municipal quiere ampliar el parque público, junto a las 107 viviendas protegidas en venta que VIVE sorteará a principios de diciembre."
   ],
   "seo": [
    "izquierda-alcalarena-vive-84-viviendas-financiacion",
    "Izquierda Alcalareña pide un informe sobre las 84 viviendas",
    "Izquierda Alcalareña apoya las 84 viviendas de alquiler de VIVE en Alcalá, pero pide aclarar la subida de la aportación municipal y el plazo europeo.",
    [
     "Izquierda Alcalareña",
     "VIVE Alcalá",
     "Cornisa del Zacatín",
     "vivienda pública",
     "Next Generation EU",
     "plan económico-financiero"
    ]
   ]
  },
  {
   "id": "robo-perros-fundacion-mehnert",
   "sec": "sucesos",
   "kicker": "Sucesos",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "title": "Roban 13 perros del refugio de la Fundación Benjamín Mehnert en Alcalá, algunos enfermos y a punto de ser adoptados",
   "sub": "Los autores rompieron la parte superior de una valla durante la madrugada del martes; la protectora pide ayuda para localizarlos",
   "caption": "Uno de los galgos robados del refugio de la Fundación Benjamín Mehnert, en una imagen difundida por la entidad.",
   "foto": "robo-perros-fundacion-mehnert-tv.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "La Fundación Benjamín Mehnert ha denunciado que le han robado 13 perros de su refugio de Alcalá de Guadaíra durante la madrugada del martes 27 de octubre.",
    "Los autores entraron tras romper la parte superior de una valla.",
    "Algunos de los animales tienen leishmaniosis, todos están castrados y varios iban a ser adoptados en los próximos días."
   ],
   "body": [
    "La Fundación Benjamín Mehnert, que rescata y recupera galgos y otros perros de caza abandonados, ha denunciado que le han robado 13 perros de su refugio de Alcalá de Guadaíra durante la madrugada del martes 27 de octubre. Según la protectora, los autores entraron en el recinto tras romper la parte superior de una valla y dejaron vacías las jaulas.",
    "Entre los animales sustraídos hay perros enfermos de leishmaniosis, que necesitan atención veterinaria, y varios que ya tenían una familia esperando para adoptarlos. Todos están castrados.",
    "## «No tienen valor económico»",
    "Un miembro de la fundación difundió un vídeo con las jaulas vacías para pedir ayuda. «Son animales que están castrados, algunos de ellos enfermos de leishmaniosis y que no sirven para la caza», explicó. La protectora insiste en que los perros no tienen valor económico, solo emocional, y pide que sean devueltos lo antes posible.",
    "Su principal preocupación es el estado de salud de los animales, sobre todo de los que siguen tratamiento.",
    "## Llamamiento a la colaboración",
    "La fundación ha pedido la máxima difusión del caso entre protectoras, clínicas veterinarias y particulares, y que cualquier persona que haya visto algo sospechoso o tenga información sobre el paradero de los perros se ponga en contacto con su equipo.",
    "La Fundación Benjamín Mehnert es una organización sin ánimo de lucro con sede en Alcalá de Guadaíra. La creó en el año 2000 Gisela Mehnert y tiene un centro de recuperación en el que los perros reciben cuidados veterinarios y rehabilitación antes de buscarles un hogar. Además de la acogida y la adopción, hace campañas de concienciación sobre bienestar animal y tenencia responsable.",
    "<span class='howto'>Si tienes información sobre los perros robados, puedes contactar con la Fundación Benjamín Mehnert a través de su web, fundacionbm.com, o de sus redes sociales.</span>"
   ],
   "seo": [
    "robo-13-perros-fundacion-benjamin-mehnert-alcala",
    "Roban 13 perros de la Fundación Benjamín Mehnert en Alcalá",
    "Roban 13 perros del refugio de la Fundación Benjamín Mehnert en Alcalá de Guadaíra; algunos están enfermos y la protectora pide ayuda para encontrarlos.",
    [
     "Fundación Benjamín Mehnert",
     "galgos",
     "protectoras",
     "perros robados",
     "bienestar animal",
     "adopción"
    ]
   ],
   "fuente_url": "https://www.youtube.com/watch?v=5Hy5Ze-ndJw&t=964s"
  },
  {
   "id": "plazas-empleo-asesor-juridico-mantenimiento",
   "sec": "economia",
   "kicker": "Empleo público",
   "iso": "2026-10-28",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9954/el-ayuntamiento-ha-abierto-el-plazo-para-dos-plazas-de-empleo",
   "title": "El Ayuntamiento convoca dos plazas fijas: un asesor jurídico para el centro de la mujer y un oficial de mantenimiento",
   "sub": "Las solicitudes se presentan por vía electrónica en un plazo de 20 días hábiles; la tasa es de 24,67 y 9,82 euros",
   "caption": "Datos de las dos plazas de personal laboral fijo convocadas por el Ayuntamiento de Alcalá de Guadaíra.",
   "foto": "plazas-empleo-asesor-juridico-mantenimiento-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra convoca una plaza de asesor o asesora jurídica para el Centro Municipal de Información a la Mujer y otra de oficial de primera de mantenimiento, ambas de personal laboral fijo.",
    "El plazo es de 20 días hábiles a partir del día siguiente a la publicación del extracto en el Boletín Oficial del Estado.",
    "La plaza jurídica exige grado en Derecho, 200 horas de formación en igualdad y un año de experiencia; la de mantenimiento, graduado escolar o ESO."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra ha convocado dos plazas de personal laboral fijo por turno libre, de la Oferta de Empleo Público de 2024: una de asesor o asesora jurídica para el Centro Municipal de Información a la Mujer y otra de oficial de primera de mantenimiento. Las solicitudes se presentan por vía electrónica en un plazo de 20 días hábiles.",
    "Según las bases, ese plazo cuenta desde el día siguiente a la publicación del extracto de la convocatoria en el Boletín Oficial del Estado (BOE). El Ayuntamiento informó el lunes 26 de octubre de que las convocatorias ya están publicadas en los boletines oficiales, sin precisar la fecha del BOE de la que depende el cierre.",
    "## Asesor jurídico: Derecho y formación en igualdad",
    "La plaza de asesoría jurídica es del grupo A, subgrupo A1, y se cubre por concurso-oposición. Exige el título de licenciado o graduado en Derecho. Además, conforme al decreto andaluz que regula los centros municipales de información a la mujer, hay que acreditar al menos 200 horas de formación en igualdad entre mujeres y hombres, incluida la violencia contra las mujeres, y un año de experiencia en entidades públicas o privadas.",
    "La Junta de Gobierno Local aprobó sus bases el 16 de octubre. La tasa de examen es de 24,67 euros, o 12,34 euros para quienes acrediten estar en paro con una antigüedad mínima de seis meses.",
    "## Oficial de mantenimiento: por oposición",
    "La plaza de oficial de primera de mantenimiento es del grupo C, subgrupo C2, y se cubre por oposición. Se pide graduado escolar, ESO, Formación Profesional de primer grado o equivalente. Sus bases las aprobó la Junta de Gobierno Local el 2 de octubre. La tasa es de 9,82 euros, o 4,87 euros para personas desempleadas con seis meses de antigüedad.",
    "En los dos procesos la solicitud, el pago de la tasa y la documentación se presentan obligatoriamente a través del portal de convocatorias del Ayuntamiento. Terminado el plazo, el Ayuntamiento tiene hasta dos meses para publicar las listas provisionales de admitidos y excluidos.",
    "<span class='howto'>Dónde inscribirse: alcalaguadaira.convoca.online, apartado «Convocatorias». Plazo: 20 días hábiles desde el día siguiente al extracto en el BOE. Asesor/a jurídico/a: grado en Derecho, 200 horas de formación en igualdad y un año de experiencia; tasa 24,67 € (12,34 € en paro). Oficial 1.ª de mantenimiento: graduado escolar o ESO; tasa 9,82 € (4,87 € en paro). Bases completas: sede electrónica del Ayuntamiento.</span>"
   ],
   "seo": [
    "plazas-empleo-ayuntamiento-asesor-juridico-mantenimiento",
    "Empleo en el Ayuntamiento de Alcalá: dos plazas fijas",
    "El Ayuntamiento de Alcalá de Guadaíra convoca una plaza fija de asesor jurídico del centro de la mujer y otra de oficial de mantenimiento. Requisitos.",
    [
     "empleo público",
     "oposiciones",
     "Centro Municipal de Información a la Mujer",
     "oficial de mantenimiento",
     "OPE 2024",
     "personal laboral fijo"
    ]
   ]
  },
  {
   "id": "feria-empleo-cruz-roja-10-noviembre",
   "sec": "economia",
   "kicker": "Empleo",
   "iso": "2026-10-28",
   "src": "Ayuntamiento de Alcalá de Guadaíra",
   "fuente_url": "https://www.alcaladeguadaira.es/noticias/9953/alcala-reune-a-mas-de-40-empresas-en-la--iv-feria-%E2%80%98creando-oportunidades-para-el-empleo%E2%80%99",
   "title": "Más de 40 empresas buscarán trabajadores el 10 de noviembre en la feria de empleo de la Caseta Municipal",
   "sub": "La IV feria ‘Creando Oportunidades para el Empleo’, de Cruz Roja, permitirá entregar el currículum en mano y hacer entrevistas en el momento",
   "caption": "La delegada de Empleo, Paula Fuster, y la coordinadora provincial del Plan de Empleo de Cruz Roja Sevilla, Carmen de la Corte, en la presentación de la feria.",
   "foto": "feria-empleo-cruz-roja-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "La IV feria ‘Creando Oportunidades para el Empleo’ se celebra el martes 10 de noviembre, de 9:30 a 14:00, en la Caseta Municipal del recinto ferial de San Juan de Alcalá de Guadaíra.",
    "Participan más de 40 empresas, además de oficinas del Servicio Andaluz de Empleo y del Servicio Público de Empleo Estatal.",
    "La organiza Cruz Roja con la colaboración del Ayuntamiento y financiación del Fondo Social Europeo; la entrada es libre."
   ],
   "body": [
    "Más de 40 empresas participarán el martes 10 de noviembre en la IV feria ‘Creando Oportunidades para el Empleo’ de Alcalá de Guadaíra, que se celebrará de 9:30 a 14:00 en la Caseta Municipal del recinto ferial de San Juan. La organiza Cruz Roja, con la colaboración del Ayuntamiento y financiación del Fondo Social Europeo, y está abierta a toda la población.",
    "Las personas que busquen trabajo podrán hablar directamente con los responsables de selección de las empresas, entregar su currículum en mano y, cuando sea posible, hacer una entrevista en el momento. También habrá información sobre ofertas y necesidades de contratación.",
    "## SAE, SEPE y orientación",
    "En la feria estarán oficinas del Servicio Andaluz de Empleo (SAE) y del Servicio Público de Empleo Estatal (SEPE), y habrá servicios de orientación personalizada y asesoramiento para mejorar la búsqueda de empleo y preparar los procesos de selección.",
    "La delegada municipal de Empleo, Paula Fuster, animó a participar y destacó que esta edición se traslada a la Caseta Municipal, un espacio más amplio que el del año pasado.",
    "La coordinadora provincial del Plan de Empleo de Cruz Roja Sevilla, Carmen de la Corte Granado, explicó que la organización repite en Alcalá por el número de empresas y el potencial laboral de la ciudad. «Algo que valoran mucho las empresas es que pueden ver cara a cara a los candidatos», señaló, y añadió que para los asistentes la ventaja es poder dar el currículum en mano.",
    "## La oficina de Cruz Roja",
    "Cruz Roja tiene en Alcalá una oficina local en la calle Barrio Obrero, 3, desde la que desarrolla programas de orientación y acompañamiento para personas que necesitan apoyo para mejorar su empleabilidad.",
    "La feria coincide con otras iniciativas de empleo en marcha en la ciudad, como los cursos gratuitos de RELANZA-T y la <a href='#plazas-empleo-asesor-juridico-mantenimiento'>convocatoria de dos plazas fijas en el Ayuntamiento</a>.",
    "<span class='howto'>Cuándo: martes 10 de noviembre, de 9:30 a 14:00. Dónde: Caseta Municipal del recinto ferial de San Juan. Precio: entrada libre. Qué llevar: currículum impreso. Organiza: Cruz Roja, con el Ayuntamiento de Alcalá de Guadaíra.</span>"
   ],
   "seo": [
    "feria-empleo-cruz-roja-caseta-municipal-alcala",
    "Feria de empleo en Alcalá el 10 de noviembre: 40 empresas",
    "Más de 40 empresas participan el 10 de noviembre en la IV feria de empleo de Cruz Roja en la Caseta Municipal de Alcalá: currículum en mano y entrevistas.",
    [
     "feria de empleo",
     "Cruz Roja",
     "Paula Fuster",
     "Caseta Municipal",
     "SAE",
     "Fondo Social Europeo"
    ]
   ]
  },
  {
   "id": "huertos-urbanos-zona-norte",
   "sec": "alcala",
   "kicker": "Barrios",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=OZZlQUijaSc&t=1182s",
   "title": "Alcalá construye en la zona norte su segundo espacio de huertos urbanos, con 10 parcelas y 156.000 euros",
   "sub": "Las obras, entre las calles Francisco de Calatrava y Plaza de Rota, durarán tres meses e incluyen un edificio con aseo y almacén",
   "caption": "Visita municipal a las obras de los nuevos huertos urbanos de la zona norte de Alcalá.",
   "foto": "huertos-urbanos-zona-norte-of.jpg",
   "fotocredito": "Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "El Ayuntamiento de Alcalá de Guadaíra construye 10 parcelas de huertos urbanos en la zona norte, entre las calles Francisco de Calatrava y Plaza de Rota.",
    "La obra cuesta 156.000 euros y tiene un plazo de ejecución de tres meses.",
    "Será el segundo espacio municipal de huertos urbanos, tras el de la avenida de Santa Lucía."
   ],
   "body": [
    "El Ayuntamiento de Alcalá de Guadaíra está construyendo en la zona norte de la ciudad su segundo espacio de huertos urbanos, con 10 parcelas de cultivo, entre las calles Francisco de Calatrava y Plaza de Rota. El proyecto tiene un presupuesto de 156.000 euros y un plazo de ejecución de tres meses.",
    "Hasta ahora la ciudad solo tenía huertos urbanos municipales en la avenida de Santa Lucía, en la zona este. Según el Ayuntamiento, la nueva instalación responde a una demanda de los vecinos de la zona norte.",
    "## Qué incluye",
    "El recinto tendrá una zona de mesas de cultivo junto al acceso principal, las parcelas de huerto en la parte central, pasillos de circulación y un espacio para el compostaje. La única edificación será un área de servicio de 15,93 metros cuadrados construidos, más 61 metros entre porche y accesos, con aseo, almacén y armario de herramientas.",
    "Las parcelas tendrán agua para riego, saneamiento de aguas grises e instalación de luz y fuerza para el aseo y el almacén. La actuación se completará con el refuerzo del vallado y mejoras de accesibilidad en el entorno.",
    "## Mayores y vecindad",
    "La alcaldesa, Ana Isabel Jiménez, visitó las obras con el delegado de Hábitat Urbano, David Delgado. Jiménez vinculó los huertos a los programas de envejecimiento activo, a las relaciones entre vecinos y generaciones y a la recuperación de espacios urbanos.",
    "La delegada de Participación Ciudadana, Teresa García Cruz, destacó la experiencia de los huertos de Santa Lucía, donde el Ayuntamiento ha hecho desde el verano labores de limpieza, pintura y mantenimiento. García Cruz aspira a que Alcalá sea «pionera» en esta actividad en la provincia.",
    "El Ayuntamiento no ha informado todavía de cómo se adjudicarán las nuevas parcelas ni de los requisitos para optar a una.",
    "<span class='howto'>Dónde: entre las calles Francisco de Calatrava y Plaza de Rota, zona norte. Parcelas: 10. Presupuesto: 156.000 euros. Plazo de obra: tres meses.</span>"
   ],
   "seo": [
    "huertos-urbanos-zona-norte-alcala",
    "Huertos urbanos en la zona norte de Alcalá: 10 parcelas",
    "Alcalá de Guadaíra construye su segundo espacio de huertos urbanos, con 10 parcelas en la zona norte, por 156.000 euros y con tres meses de obra.",
    [
     "huertos urbanos",
     "zona norte",
     "David Delgado",
     "Teresa García Cruz",
     "Santa Lucía",
     "envejecimiento activo"
    ]
   ]
  },
  {
   "id": "vivienda-compraventas-precio-2026",
   "sec": "economia",
   "kicker": "Vivienda",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=OZZlQUijaSc&t=455s",
   "title": "La vivienda en venta se anuncia en Alcalá a 1.704 euros el metro cuadrado, un 13,4 % más que hace un año",
   "sub": "La ciudad cerró 2025 con 1.028 compraventas de viviendas, nueve de cada diez de segunda mano",
   "caption": "Bloques de viviendas en Alcalá de Guadaíra.",
   "foto": "vivienda-compraventas-precio-2026.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Alcalá de Guadaíra registró 1.028 compraventas de viviendas en 2025: 968 de segunda mano y 60 nuevas, según el Sistema de Información Multiterritorial de Andalucía.",
    "El precio medio de oferta llegó en septiembre de 2026 a 1.704 euros por metro cuadrado, un 13,4 % más que un año antes, según el portal idealista.",
    "Ese precio es el de los anuncios, no necesariamente el que se paga al cerrar la compra.",
    "En la provincia de Sevilla se vendieron 1.867 viviendas en agosto de 2026, un 5,18 % más que en agosto de 2025."
   ],
   "body": [
    "El precio medio al que se anuncian las viviendas en venta en Alcalá de Guadaíra llegó en septiembre de 2026 a 1.704 euros por metro cuadrado, un 13,4 % más que en el mismo mes de 2025 y un 1,3 % más que en agosto, según los datos del portal inmobiliario idealista.",
    "Con ese precio medio, una vivienda de 90 metros cuadrados se anunciaría en torno a 153.000 euros. Hace un año, con la subida del 13,4 %, el metro cuadrado se ofertaba en torno a 1.500 euros, por lo que la misma vivienda costaría unos 18.000 euros menos.",
    "## Nueve de cada diez, de segunda mano",
    "Los últimos datos municipales disponibles sobre operaciones son de 2025. Ese año se registraron en Alcalá 1.028 compraventas de viviendas, según el Sistema de Información Multiterritorial de Andalucía (SIMA). De ellas, 968 fueron de vivienda usada y 60 de vivienda nueva: la segunda mano concentró el 94 % del mercado.",
    "El dato de idealista mide el precio de oferta, es decir, lo que piden los vendedores en sus anuncios. No es necesariamente el importe final que se paga cuando se cierra la operación, que suele negociarse.",
    "## La provincia también vende más",
    "En el conjunto de la provincia de Sevilla se vendieron 1.867 viviendas en agosto de 2026, un 5,18 % más que en agosto del año anterior, según los últimos datos publicados por la Diputación de Sevilla a partir de la estadística del Instituto Nacional de Estadística (INE).",
    "El número de operaciones y la evolución de los precios miden dos cosas distintas: cuántas viviendas cambian de dueño y cuánto cuesta a quien busca comprar.",
    "La subida llega mientras el Ayuntamiento y su empresa pública VIVE Alcalá preparan nuevas promociones protegidas. VIVE sorteará a principios de diciembre 107 viviendas protegidas en venta y ha empezado a construir 84 viviendas de alquiler asequible en el Zacatín, que se alquilarán por 350 euros al mes más garaje y trastero."
   ],
   "seo": [
    "precio-vivienda-alcala-compraventas-2026",
    "Precio de la vivienda en Alcalá: 1.704 €/m², un 13,4 % más",
    "La vivienda en venta se anuncia en Alcalá de Guadaíra a 1.704 euros el metro cuadrado, un 13,4 % más que hace un año; en 2025 hubo 1.028 compraventas.",
    [
     "precio de la vivienda",
     "compraventas",
     "idealista",
     "SIMA",
     "mercado inmobiliario",
     "VIVE Alcalá"
    ]
   ]
  },
  {
   "id": "huelga-general-ccoo-asamblea",
   "sec": "economia",
   "kicker": "Huelga general",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=OZZlQUijaSc&t=712s",
   "title": "CCOO explica en Alcalá los motivos de la huelga general del 11 de noviembre: salarios, vivienda y precios",
   "sub": "El sindicato celebró una asamblea informativa para animar a secundar el paro convocado junto a UGT en los sectores público y privado",
   "caption": "Asamblea informativa de Comisiones Obreras en Alcalá de Guadaíra sobre la huelga general del 11 de noviembre.",
   "foto": "huelga-general-ccoo-asamblea.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "Comisiones Obreras celebró el lunes 26 de octubre en Alcalá de Guadaíra una asamblea informativa sobre la huelga general del 11 de noviembre.",
    "La huelga la convocan CCOO y UGT para trabajadores de los sectores público y privado.",
    "El sindicato reclama subidas salariales, vivienda asequible, control de los precios básicos y servicios públicos de calidad."
   ],
   "body": [
    "Comisiones Obreras (CCOO) celebró el lunes 26 de octubre en Alcalá de Guadaíra una asamblea informativa para explicar los motivos de la huelga general convocada para el miércoles 11 de noviembre y animar a secundarla. El paro lo impulsan CCOO y UGT y llama a trabajadores de los sectores público y privado.",
    "La asamblea de Alcalá forma parte de las decenas que el sindicato celebra cada semana en la provincia de Sevilla y en el resto del país, según explicó a El Panadero el responsable de CCOO que la dirigió. El objetivo, dijo, es «debatir con la gente trabajadora» y que el mensaje llegue a las empresas de localidades como Alcalá y de la comarca de Los Alcores.",
    "## Las reivindicaciones",
    "El sindicato sostiene que el crecimiento económico y los beneficios empresariales no se están trasladando lo suficiente al poder adquisitivo de los trabajadores. Sus demandas se agrupan en tres bloques: subidas salariales, acceso a una vivienda digna y asequible, y medidas para frenar el efecto de la subida de precios en la economía de las familias.",
    "Según el representante sindical, la vivienda ocupa un lugar central en la convocatoria: CCOO reclama que se pueda acceder a un techo, en alquiler o en propiedad, a un precio asequible. También pide control sobre el precio de bienes como el combustible, la luz o el agua, y servicios públicos de calidad en sanidad y educación.",
    "En cuanto a los salarios, el sindicato considera que, por mucho que se negocien convenios colectivos, los sueldos no consiguen evitar la pérdida de poder adquisitivo.",
    "## A quién llama a parar",
    "CCOO dirige la convocatoria a trabajadores en activo, pensionistas y estudiantes. «Quien trabaje, que no vaya a trabajar. Quien no trabaje, que participe de los piquetes, de las asambleas y sobre todo de las manifestaciones», resumió el responsable sindical.",
    "<span class='howto'>Qué: huelga general convocada por CCOO y UGT. Cuándo: miércoles 11 de noviembre de 2026. A quién afecta: trabajadores de los sectores público y privado.</span>"
   ],
   "seo": [
    "huelga-general-11-noviembre-ccoo-alcala",
    "Huelga general del 11 de noviembre: CCOO informa en Alcalá",
    "CCOO celebró en Alcalá de Guadaíra una asamblea sobre la huelga general del 11 de noviembre, convocada con UGT por salarios, vivienda y precios.",
    [
     "huelga general",
     "CCOO",
     "UGT",
     "11 de noviembre",
     "salarios",
     "vivienda asequible"
    ]
   ]
  },
  {
   "id": "pp-axsi-reglamento-organico",
   "sec": "politica",
   "kicker": "Pleno",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=OZZlQUijaSc&t=884s",
   "title": "El PP acusa a Andalucía Por Sí de cambiar de postura al votar contra revisar el reglamento del Pleno",
   "sub": "Los populares recuerdan que el partido andalucista apoyó en 2023, desde la oposición, crear una comisión para estudiar el Reglamento Orgánico Municipal",
   "caption": "Concejales de la corporación municipal durante el último Pleno ordinario.",
   "foto": "pp-axsi-reglamento-organico.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El PP de Alcalá de Guadaíra critica que Andalucía Por Sí votara en el último Pleno contra su propuesta de revisar el Reglamento Orgánico Municipal.",
    "Los populares recuerdan que en febrero de 2023 Andalucía Por Sí votó a favor de una comisión especial para estudiar mejoras en ese reglamento.",
    "El PP pide al portavoz andalucista, Christopher Rivas, que explique el cambio de postura."
   ],
   "body": [
    "El Partido Popular de Alcalá de Guadaíra ha acusado a Andalucía Por Sí, socio del gobierno municipal, de cambiar de postura sobre el Reglamento Orgánico Municipal (ROM), la norma que regula el funcionamiento del Pleno. Los andalucistas votaron en contra de la propuesta del PP para revisarlo, debatida en el último Pleno.",
    "La presidenta local del PP y candidata a la alcaldía, Sandra González, considera contradictorio que la formación andalucista defendiera cambios en el reglamento cuando estaba en la oposición y ahora, desde el gobierno, rechace una iniciativa para modificarlo.",
    "## La comisión de 2023",
    "Los populares recuerdan que en febrero de 2023 Andalucía Por Sí votó a favor de crear una comisión especial para estudiar posibles mejoras del reglamento. Entre ellas figuraban nuevas fórmulas de participación ciudadana, como la figura del «concejal 26», que permitiría a vecinos y colectivos intervenir en las sesiones.",
    "Según el PP, revisar el ROM permitiría mejorar la transparencia, facilitar el control de la oposición y ampliar la participación de los vecinos. Por eso reclama al portavoz de Andalucía Por Sí, Christopher Rivas, que explique los motivos del cambio.",
    "El partido sostiene que la norma de funcionamiento del Ayuntamiento debe poder revisarse con independencia de quién gobierne y anuncia que mantendrá su propuesta para reforzar la participación y el control democrático.",
    "## El contexto",
    "Andalucía Por Sí gobierna en Alcalá en coalición con el PSOE de la alcaldesa, Ana Isabel Jiménez. Rivas es responsable del Área de Identidad y delegado de Cultura en el gobierno municipal. La formación anunció este mes que no se presentará a las elecciones generales.",
    "La crítica del PP llega a siete meses de las elecciones municipales de mayo de 2027, para las que el partido ya ha presentado a Sandra González como candidata."
   ],
   "seo": [
    "pp-andalucia-por-si-reglamento-organico-pleno",
    "El PP critica a Andalucía Por Sí por el reglamento del Pleno",
    "El PP de Alcalá de Guadaíra acusa a Andalucía Por Sí de cambiar de postura al votar contra revisar el Reglamento Orgánico Municipal, que apoyó en 2023.",
    [
     "PP de Alcalá",
     "Andalucía Por Sí",
     "Sandra González",
     "Christopher Rivas",
     "Reglamento Orgánico Municipal",
     "Pleno"
    ]
   ]
  },
  {
   "id": "villalba-homenaje-consejo",
   "sec": "hermandades",
   "kicker": "Patrimonio cofrade",
   "iso": "2026-10-28",
   "src": "Consejo de Hermandades de Alcalá",
   "fuente_url": "https://www.consejohermandadesalcala.es/2026/10/26/homenaje-de-la-cabalgata-a-isidoro-villalba-corzo/",
   "title": "El Consejo de Hermandades se suma al homenaje a Isidoro Villalba, autor del primer cartel de la Semana Santa de Alcalá",
   "sub": "El artista, director artístico de la Cabalgata durante cuatro décadas, pintó los carteles de 1982 y 1984 y firma desde 1990 los pergaminos de los pregoneros",
   "caption": "Asistentes al homenaje de la Cabalgata de Reyes Magos a Isidoro Villalba Corzo, el domingo 25 de octubre.",
   "foto": "villalba-homenaje-consejo-of.jpg",
   "fotocredito": "Consejo de Hermandades de Alcalá",
   "claves": [
    "El Consejo de Hermandades de Alcalá de Guadaíra participó el domingo 25 de octubre en el homenaje de la Cabalgata de Reyes Magos a Isidoro Villalba Corzo.",
    "Villalba pintó en 1982 el primer cartel anunciador de la Semana Santa de Alcalá y el tercero, en 1984.",
    "Desde 1990 realiza el pergamino oficial con el que el Consejo reconoce a cada pregonero de la Semana Santa."
   ],
   "body": [
    "El Consejo de Hermandades y Cofradías de Alcalá de Guadaíra se sumó el domingo 25 de octubre al homenaje que la Cabalgata de Reyes Magos dedicó a Isidoro Villalba Corzo, su director artístico durante cuatro décadas. El presidente del Consejo, Enrique Ruiz Portillo, felicitó personalmente al artista, según ha informado la institución cofrade.",
    "La Cabalgata había anunciado que el reconocimiento sería durante su Almuerzo de Convivencia Real en la Hacienda de la Andrada.",
    "## El primer cartel de la Semana Santa",
    "Villalba está muy vinculado al mundo de las hermandades como cofrade y como artista. En 1982 pintó el primer cartel anunciador de la Semana Santa de Alcalá y en 1984, el tercero, con lo que abrió la serie de carteles oficiales que edita el Consejo.",
    "Además, formó parte de la Junta Permanente del Consejo como secretario entre 1980 y 1988 y pronunció el pregón de la Semana Santa alcalareña en 1987.",
    "## Los pergaminos de los pregoneros",
    "Desde 1990, el Consejo le encarga el pergamino oficial con el que homenajea a cada pregonero de la Semana Santa. Son piezas personalizadas para cada pregonero, en las que la institución destaca la tipografía y la carga simbólica.",
    "En 2023 el Consejo volvió a contar con él para ilustrar el Cartel de las Glorias de Alcalá de Guadaíra, dedicado ese año a la Hermandad del Rocío de la localidad.",
    "Fuera del ámbito cofrade, Villalba ha diseñado desde 1987 las carrozas, el vestuario y los personajes de la Cabalgata de Reyes Magos que recorre Alcalá cada 5 de enero, además de su logotipo oficial."
   ],
   "seo": [
    "isidoro-villalba-homenaje-consejo-hermandades",
    "Homenaje a Isidoro Villalba, autor del primer cartel cofrade",
    "El Consejo de Hermandades de Alcalá se suma al homenaje a Isidoro Villalba, autor del primer cartel de Semana Santa (1982) y de los pergaminos del pregón.",
    [
     "Isidoro Villalba",
     "Consejo de Hermandades",
     "Cabalgata de Reyes Magos",
     "Semana Santa de Alcalá",
     "Enrique Ruiz Portillo",
     "cartel"
    ]
   ]
  },
  {
   "id": "concurso-ornitologico-alguira",
   "sec": "deportes",
   "kicker": "Ornitología",
   "iso": "2026-10-28",
   "src": "Alcalá+Deporte",
   "fuente_url": "https://www.alcalamasdeporte.com/noticias/8419/la-caseta-municipal-reune-mas-de-2000-ejemplares-de-aves-que-compiten-en-belleza",
   "title": "El concurso ornitológico de Algüira reúne 2.130 aves en la Caseta Municipal, abierto al público del 29 al 31",
   "sub": "La 42.ª edición, con entrada gratuita, muestra cientos de variedades de canarios, aves exóticas e híbridos criados en cautividad",
   "caption": "Cartel del XLII Concurso Ornitológico Algüira en la Caseta Municipal de Alcalá de Guadaíra.",
   "foto": "concurso-ornitologico-alguira-of.jpg",
   "fotocredito": "Alcalá+Deporte",
   "encuadre": "contain",
   "claves": [
    "El XLII Concurso Ornitológico de la Asociación Algüira reúne 2.130 aves en la Caseta Municipal de Alcalá de Guadaíra.",
    "Se puede visitar gratis el jueves 29 y el viernes 30 de octubre de 17:30 a 21:00 y el sábado 31 de 10:00 a 14:00 y de 16:00 a 20:00.",
    "La mayoría de los ejemplares son canarios, que se juzgan por su color o por su postura."
   ],
   "body": [
    "La Caseta Municipal de Alcalá de Guadaíra acoge el XLII Concurso Ornitológico de la Asociación Algüira, con 2.130 aves inscritas. La exposición se puede visitar gratis del jueves 29 al sábado 31 de octubre, después de que los jueces hayan puntuado cada ejemplar.",
    "El concurso es la culminación del trabajo de cría y selección de todo el año. Los criadores presentan sus mejores ejemplares, todos criados en cautividad, y los jueces determinan la puntuación de cada uno y los premios. Según el cartel, el enjuiciamiento fue el domingo 25, la inauguración es el jueves 29 a las 17:30 y la entrega de trofeos, el sábado 31 a las 12:30. Hay 200 euros para el mejor criador de cada monográfico.",
    "## Canarios de color y de postura",
    "Los canarios son, con mucho, las aves más numerosas. Se dividen en dos grandes grupos según la característica que se juzga: de color y de postura. Entre los de color hay cientos de variedades, del rojo intenso al blanco o el amarillo, y combinaciones con pigmentos oscuros que dan ejemplares bronces, verdes o grises. Algunas mutaciones toman el nombre de piedras como el topacio, el ópalo o el cobalto.",
    "En los de postura, cada raza suele proceder de la selección de los criadores de una región o país. España aporta el Giboso, el raza española o el Melado Tinerfeño; Francia, el rizado; Italia, los Gibber, Fiorino o Padovano; los Países Bajos, los Rizados del Norte y del Sur, y Japón, el Hosso.",
    "La muestra se completa con aves exóticas, ejemplares de fauna europea criados en cautividad e híbridos entre especies. Como novedad, este año hay una sala de exposición y cesión de aves.",
    "La Asociación Ornitológica Algüira es una de las más importantes del país, con una larga trayectoria y socios con premios nacionales y mundiales, según el portal deportivo municipal.",
    "<span class='howto'>Dónde: Caseta Municipal del recinto ferial. Horario de visita: jueves 29 y viernes 30 de octubre, de 17:30 a 21:00; sábado 31, de 10:00 a 14:00 y de 16:00 a 20:00. Entrega de trofeos: sábado 31, a las 12:30. Precio: entrada gratuita.</span>"
   ],
   "seo": [
    "concurso-ornitologico-alguira-caseta-municipal",
    "Concurso ornitológico Algüira: 2.130 aves en Alcalá",
    "El XLII Concurso Ornitológico Algüira expone 2.130 aves en la Caseta Municipal de Alcalá de Guadaíra del 29 al 31 de octubre, con entrada gratuita.",
    [
     "Asociación Algüira",
     "ornitología",
     "canarios",
     "Caseta Municipal",
     "concurso ornitológico",
     "aves"
    ]
   ]
  },
  {
   "id": "rodaje-pelicula-oromana-molinos",
   "sec": "alcala",
   "kicker": "Rodajes",
   "iso": "2026-10-28",
   "src": "Ayuntamiento de Alcalá de Guadaíra (Instagram)",
   "fuente_url": "https://www.instagram.com/aytoalcaladeguadaira/p/De_zqPCANGu/",
   "title": "Un rodaje de cine cortará de forma intermitente el paso junto a los molinos de la Aceña y del Algarrobo",
   "sub": "La grabación ocupa el entorno del parque de Oromana durante todo el día el miércoles 28 y el jueves 29 de octubre",
   "caption": "Un grupo de personas junto al río Guadaíra, en el entorno de Oromana, en una imagen difundida por el Ayuntamiento.",
   "foto": "rodaje-pelicula-oromana-of.jpg",
   "fotocredito": "Instagram del Ayuntamiento de Alcalá de Guadaíra",
   "claves": [
    "Un equipo rueda una película en el entorno del parque de Oromana, en Alcalá de Guadaíra, los días 28 y 29 de octubre.",
    "El miércoles 28 el rodaje es en el molino de la Aceña y el jueves 29, en el molino del Algarrobo.",
    "Habrá cortes temporales del paso para caminantes y otros usuarios de los caminos."
   ],
   "body": [
    "Un equipo de cine rueda una película el miércoles 28 y el jueves 29 de octubre en el entorno del parque de Oromana, en Alcalá de Guadaíra, según ha informado el Ayuntamiento en su perfil de Instagram. El rodaje se desarrolla durante toda la jornada: el miércoles en el molino de la Aceña y el jueves en el molino del Algarrobo.",
    "Durante la grabación habrá zonas acotadas y cortes intermitentes del paso, por lo que los caminantes y demás usuarios de los senderos pueden verse afectados de forma puntual.",
    "## Cortes temporales",
    "Según el Ayuntamiento, los cortes serán temporales: se irá dejando pasar a la gente al terminar cada toma o cuando las condiciones del rodaje lo permitan, para que puedan seguir su recorrido.",
    "Los dos son antiguos molinos harineros de la ribera del Guadaíra, en una de las zonas de paseo más frecuentadas de la ciudad.",
    "El Ayuntamiento no ha dado el título de la película ni el nombre de la productora. La web de turismo municipal ofrece un servicio de oficina de rodajes, Alcalá Film Office, para las producciones que quieran grabar en la ciudad.",
    "<span class='howto'>Cuándo: miércoles 28 de octubre, molino de la Aceña; jueves 29 de octubre, molino del Algarrobo. Durante toda la jornada. Afecta a: caminos del entorno del parque de Oromana, con cortes intermitentes del paso.</span>"
   ],
   "seo": [
    "rodaje-pelicula-oromana-molino-acena-algarrobo",
    "Rodaje en Oromana: cortes junto a los molinos de Alcalá",
    "Un rodaje de cine corta de forma intermitente el paso junto a los molinos de la Aceña y del Algarrobo, en Oromana, el 28 y el 29 de octubre en Alcalá.",
    [
     "rodajes",
     "Oromana",
     "molino de la Aceña",
     "molino del Algarrobo",
     "Riberas del Guadaíra",
     "Alcalá Film Office"
    ]
   ]
  },
  {
   "id": "premios-juventud-andaluza-2026",
   "sec": "alcala",
   "kicker": "Convocatorias",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=OZZlQUijaSc&t=1235s",
   "title": "Los jóvenes de 14 a 35 años pueden presentar candidaturas a los Premios Juventud Andaluza hasta el 10 de noviembre",
   "sub": "La Junta reconoce el emprendimiento, la cultura, el deporte o la ciencia en siete modalidades y con una mención al municipio joven del año",
   "caption": "Datos de la convocatoria de los Premios Juventud Andaluza 2026.",
   "foto": "premios-juventud-andaluza-2026-gfx.jpg",
   "fotocredito": "Gráfico El Panadero",
   "encuadre": "contain",
   "claves": [
    "La Junta de Andalucía ha convocado los Premios Juventud Andaluza 2026, abiertos a jóvenes de 14 a 35 años andaluces o residentes en Andalucía y a colectivos formados mayoritariamente por jóvenes.",
    "El plazo es de 10 días hábiles desde el 27 de octubre, por lo que termina el 10 de noviembre.",
    "Los premios son honoríficos, sin dotación económica, y se reparten en siete modalidades."
   ],
   "body": [
    "Los jóvenes de Alcalá de Guadaíra de entre 14 y 35 años, y los colectivos y entidades formados mayoritariamente por jóvenes, pueden presentar su candidatura a los Premios Juventud Andaluza 2026, que convoca el Instituto Andaluz de la Juventud. El plazo, de 10 días hábiles, empezó el 27 de octubre y termina el 10 de noviembre.",
    "La convocatoria se publicó el lunes 26 de octubre en el <a href='https://www.juntadeandalucia.es/boja/2026/207/3.html'>Boletín Oficial de la Junta de Andalucía</a>. Pueden participar personas andaluzas o residentes en Andalucía que tengan entre 14 y 35 años al terminar el plazo. No pueden presentarse quienes ya hayan ganado en ediciones anteriores.",
    "## Siete modalidades",
    "Los premios tienen siete modalidades: emprendimiento juvenil, arte y cultura, deporte, ciencia e investigación, innovación y tecnología, respeto a la igualdad y a la diversidad sexual y de género, desarrollo sostenible y promoción de la inclusión sociolaboral de jóvenes con discapacidad. Cada candidatura solo puede optar a una.",
    "El emprendimiento se divide en dos categorías: una para negocios de hasta tres años de antigüedad y otra para iniciativas con más trayectoria.",
    "La Junta concede además la mención «Municipio Joven del año», que propone el jurado entre los municipios reconocidos como Municipio Joven de Andalucía que no la hayan recibido antes.",
    "## Cómo se presenta",
    "La candidatura se presenta con el modelo de solicitud del anexo y una memoria de hasta cuatro páginas que justifique los méritos, junto al currículum y el material que los acredite. Se pueden añadir cartas de recomendación de entidades públicas o privadas, centros educativos o asociaciones juveniles.",
    "Los premios son honoríficos: no tienen dotación económica y consisten en una escultura. El jurado fallará en el plazo de un mes desde el cierre de la convocatoria. La entrega está prevista para el 2 de diciembre en Granada.",
    "<span class='howto'>Quién: jóvenes de 14 a 35 años andaluces o residentes en Andalucía, y colectivos de mayoría joven. Plazo: hasta el 10 de noviembre. Cómo: preferentemente por el Registro Electrónico de la Junta de Andalucía; las entidades, obligatoriamente por esa vía. Premio: escultura honorífica, sin dinero.</span>"
   ],
   "seo": [
    "premios-juventud-andaluza-2026-candidaturas",
    "Premios Juventud Andaluza 2026: plazo hasta el 10/11",
    "Los jóvenes de 14 a 35 años de Alcalá pueden optar a los Premios Juventud Andaluza 2026 en siete modalidades. Las candidaturas, hasta el 10 de noviembre.",
    [
     "Premios Juventud Andaluza",
     "Instituto Andaluz de la Juventud",
     "Junta de Andalucía",
     "BOJA",
     "jóvenes",
     "emprendimiento"
    ]
   ]
  },
  {
   "id": "david-munoz-silencio-y-ruido",
   "sec": "cultura",
   "kicker": "Libros",
   "iso": "2026-10-28",
   "src": "El Panadero",
   "fuente_url": "https://www.youtube.com/watch?v=sw5p-k1cUfg&t=22s",
   "title": "El alcalareño David Muñoz Álvarez publica ‘Silencio y ruido’, una novela de suspense con un detective en Nueva York",
   "sub": "Su primera novela, de 16 capítulos, se presentó en la Casa de la Juventud y ya se vende en las grandes plataformas",
   "caption": "David Muñoz Álvarez, autor de ‘Silencio y ruido’, durante la entrevista en el programa Directo a la Tarde.",
   "foto": "david-munoz-silencio-y-ruido.jpg",
   "fotocredito": "MiGuadaíraTV",
   "claves": [
    "El escritor de Alcalá de Guadaíra David Muñoz Álvarez ha publicado su primera novela, ‘Silencio y ruido’, una historia de suspense ambientada en Nueva York.",
    "El protagonista es Ryan Ramsey, un detective privado con oficina en Queens al que un caso le cambia la vida.",
    "La presentación oficial fue en la Casa de la Juventud de Alcalá, con más de 40 asistentes."
   ],
   "body": [
    "El escritor alcalareño David Muñoz Álvarez ha publicado ‘Silencio y ruido’, su primera novela, una historia de suspense e intriga ambientada en Nueva York. La presentó oficialmente hace alrededor de una semana y media en la Casa de la Juventud de Alcalá de Guadaíra, ante más de 40 personas en una sala con aforo para 50.",
    "El título nace del contraste entre la oficina aburrida y silenciosa del protagonista y el ruido de una ciudad que nunca duerme, explicó Muñoz en declaraciones a El Panadero en el programa Directo a la Tarde.",
    "## Un detective aburrido en Queens",
    "La novela sigue a Ryan Ramsey, un detective privado de padres ingleses con una pequeña oficina en el barrio neoyorquino de Queens. Ramsey está cansado de casos rutinarios de infidelidades y dinero hasta que aparece Kimberly Sinclair con un encargo que cambia su percepción de la realidad y pone su vida patas arriba.",
    "El libro tiene 16 capítulos, que el autor no escribió en orden. Lo más difícil, dijo, fue el final: «Vamos a intentar que guste más o menos a todo el mundo y que quede algo decente». La historia tiene principio y fin, aunque Muñoz no descarta nuevos casos del detective: o se queda en uno, o hace una trilogía.",
    "## Diez años de idea, cuatro meses de escritura",
    "Muñoz cuenta que escribir no tiene nada que ver con sus estudios ni con su trabajo, pero que siempre le ha gustado. La idea surgió hace unos diez años, mientras estudiaba Derecho Administrativo, y la escribió en serio este año, en unos cuatro meses, durante una mudanza. No se lo contó a nadie hasta tenerla terminada.",
    "En marzo la envió a varias editoriales y firmó con la primera que le respondió, al mes y medio. «Es un proceso muy lento», resumió.",
    "<span class='howto'>Dónde comprarla: en Amazon y Fnac; según el autor, llegará a Casa del Libro, El Corte Inglés y librerías. También la vende él mismo con dedicatoria.</span>"
   ],
   "seo": [
    "david-munoz-alvarez-novela-silencio-y-ruido",
    "‘Silencio y ruido’, la primera novela de David Muñoz",
    "El alcalareño David Muñoz Álvarez publica ‘Silencio y ruido’, su primera novela, un thriller con el detective Ryan Ramsey en Nueva York. Dónde comprarla.",
    [
     "David Muñoz Álvarez",
     "Silencio y ruido",
     "novela",
     "escritores de Alcalá",
     "Casa de la Juventud",
     "suspense"
    ]
   ]
  },
  {
   "id": "opinion-pan-relevo",
   "sec": "opinion",
   "kicker": "Tribuna",
   "iso": "2026-10-15",
   "src": "",
   "autor": "Carmen del Molino",
   "autor_cargo": "Firma ficticia de prueba",
   "ficticia": true,
   "title": "Un cupón no amasa pan",
   "sub": "Cinco millones de boletos con nuestras teleras son un orgullo. La pregunta es quién las hará dentro de veinte años",
   "caption": "",
   "foto": "",
   "claves": [],
   "body": [
    "El lunes 19 de octubre, cinco millones de cupones de la ONCE llevarán por toda España unas teleras, unos roscos y unos picaitos de Alcalá. Lo celebro. Pocas ciudades pueden decir que un producto suyo, hecho de madrugada y vendido a precio de barra, merece un sorteo nacional. Pero me temo que nos estamos acostumbrando a celebrar el pan como se celebra a un abuelo: con cariño, con fotos y con la sensación de que ya no va a durar mucho.",
    "En la presentación del cupón, el presidente de la Asociación de Panaderos recordó que el oficio empieza cuando la ciudad duerme. Es la frase más repetida del mes, y la más incómoda si uno la piensa dos veces. ¿Cuántos jóvenes de Alcalá quieren levantarse a las tres de la mañana seis días por semana? ¿Cuántos saben siquiera que existe esa salida?",
    "## Mucho homenaje, poca escuela",
    "Este octubre tenemos un programa precioso: molinos a la luz del candil, escape room en la Harinera, microtalleres en los que un niño aprende a formar una pieza en media hora. Todo eso está bien y llena los fines de semana. Pero un taller de treinta minutos es una visita, no una formación.",
    "Mientras tanto, el Ayuntamiento prepara una nueva convocatoria de cursos para el empleo con ocho familias profesionales, de la hostelería a la fabricación mecánica. No es un reproche a esa lista, que responde a lo que piden las empresas. Es una pregunta: si de verdad creemos que el pan es nuestra seña de identidad, ¿por qué la panadería no figura con nombre propio entre esos itinerarios en una ciudad que se presenta en toda España como la de los panaderos?",
    "## La identidad también se paga",
    "Las tradiciones no se conservan en los museos ni en los cupones. Se conservan cuando alguien puede vivir de ellas. Eso exige cosas poco vistosas: suelo asequible para obradores, ayudas al relevo cuando un panadero se jubila sin sucesor, formación reglada y una marca colectiva con capacidad real de defender el precio frente al pan industrial que se hornea en cualquier gasolinera.",
    "Nada de eso cabe en una foto. Y, sin embargo, es lo único que garantiza que dentro de veinte años sigamos hablando del Pan de Alcalá en presente.",
    "Disfrutemos del cupón. Compremos uno, aunque sea por el gusto de tener nuestro pan en la cartera. Y el martes, cuando pase el sorteo, preguntemos a quien corresponda qué plan hay para que el oficio no se quede en una ilustración.",
    "<span class='howto'>Texto de prueba para maquetar la sección de Opinión de El Panadero. La autora y el contenido son ficticios y no representan la opinión de ninguna persona real. No publicar.</span>"
   ],
   "seo": [
    "opinion-cupon-once-pan-de-alcala-relevo-oficio",
    "Opinión: un cupón no amasa pan",
    "Tribuna de opinión (prueba): el cupón de la ONCE honra al Pan de Alcalá, pero el oficio necesita relevo, formación y obradores para sobrevivir.",
    [
     "opinión",
     "Pan de Alcalá",
     "panaderos",
     "relevo generacional",
     "ONCE",
     "formación"
    ]
   ]
  }
 ]
};
