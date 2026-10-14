/* =========================================================
   Euro Heaters México – Datos del catálogo
   Fuente: euroheaters.mx (textos reescritos para claridad,
   especificaciones técnicas sin cambios).
   ========================================================= */
window.EH = (function () {
  'use strict';

  var IMG = 'assets/img/productos/';
  var DOC = 'assets/docs/';
  function photos(prefix, n) { var a = []; for (var i = 1; i <= n; i++) a.push(IMG + prefix + '-' + i + '.jpg'); return a; }

  /* ---------------- Empresa ---------------- */
  var company = {
    legal: 'EUROHEATERS de México S. de R.L.',
    tagline: 'Representantes exclusivos para México de la marca inglesa EuroHeaters.',
    phone: '55 5775 7515',
    phoneHref: 'tel:+525557757515',
    email: 'ventas@euroheaters.mx',
    hours: 'de 9:00 a 18:00 h',
    address: ['Paseo de la Reforma 483, Of. 1450', 'Col. Cuauhtémoc, Ciudad de México', 'C.P. 06500'],
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=Paseo+de+la+Reforma+483+Cuauht%C3%A9moc+CDMX',
    catalogPdf: 'https://www.euroheaters.mx/images/PDFS/catalogo-euroheaters-mexico-septiembre-2018--liv-.pdf',
    website: 'https://www.euroheaters.mx'
  };

  var offices = [
    { city: 'Ciudad de México', tag: 'Oficinas centrales', lines: ['Paseo de la Reforma 483, Of. 1450', 'Col. Cuauhtémoc, C.P. 06500'], phone: '55 5775 7515', email: 'ventas@euroheaters.mx' },
    { city: 'León, Guanajuato', lines: ['Calle París 204, Col. Andrade', 'C.P. 37020'] },
    { city: 'Puebla', lines: ['Blvd. Atlixcáyotl 1499', 'Col. Reserva Territorial Atlixcáyotl, C.P. 72810'] },
    { city: 'Querétaro', lines: ['Prol. Bernardo Quintana Sur 302, Lt. 10', 'Fracc. Centro Sur, C.P. 76090'] },
    { city: 'San Luis Potosí', lines: ['Luis de Velasco 735, Col. Virreyes', 'C.P. 78240'], phone: '(422) 690 3767' },
    { city: 'Toluca', lines: ['Hermenegildo Galeana Sur 809', 'Col. Francisco Murguía, C.P. 50130'] }
  ];

  var world = [
    { country: 'Inglaterra', city: 'Londres', img: 'assets/img/sedes/sede-03.jpg', note: 'Casa matriz de la marca' },
    { country: 'Francia', city: 'Euroheaters Industrielle', img: 'assets/img/sedes/sede-00.jpg' },
    { country: 'Brasil', city: 'São Paulo', img: 'assets/img/sedes/sede-01.jpg' },
    { country: 'China', city: 'Hong Kong', img: 'assets/img/sedes/sede-02.jpg' },
    { country: 'India', city: 'EH India Group', img: 'assets/img/sedes/sede-05.jpg' },
    { country: 'México', city: '6 oficinas', img: 'assets/img/sedes/sede-04.jpg' }
  ];
  var distributors = 'Perú, Estados Unidos, Honduras, Panamá, Costa Rica, Venezuela y Uruguay';

  /* ---------------- Categorías ---------------- */
  var cats = [
    { id: 'colada', label: 'Colada caliente', short: 'Colada caliente' },
    { id: 'res', label: 'Resistencias', short: 'Resistencias' },
    { id: 'sen', label: 'Sensores', short: 'Sensores' },
    { id: 'ctrl', label: 'Controladores', short: 'Controladores' },
    { id: 'acc', label: 'Accesorios', short: 'Accesorios' }
  ];

  /* ---------------- Productos ----------------
     cat: categoría principal (etiqueta); cats: todas las categorías donde aparece
     viz: ilustración interactiva (solo controladores); photos: fotos reales
     opts/optHelp/specs(o): configuración que modifica la ficha
     table: tabla de modelos; docs: fichas técnicas descargables              */
  var products = [
    /* ===== Controladores ===== */
    {
      id: 'controlador-temperatura', cat: 'ctrl', cats: ['ctrl'], viz: 'temp',
      name: 'Controlador de temperatura',
      short: 'Pirómetros digitales 48 × 96 mm en gabinete rack de 19" de aluminio.',
      badge: 'Entrega inmediata',
      chips: ['IP65', '1–6 zonas', 'Rack 19"'],
      search: 'temperatura pirometro rack zonas termopar ip65 48 96',
      desc: 'Pirómetros digitales con microprocesador en formato estándar 48 × 96 mm, montados en gabinete rack de 19" de aluminio. Creados para las máximas exigencias de la inyección por colada caliente, con programación sencilla por teclado.',
      photos: photos('temp', 2),
      kpis: [['IP65', 'grado de protección'], ['48 × 96', 'mm por zona'], ['19"', 'rack de aluminio']],
      optLabel: 'Número de zonas', defOpt: '4',
      opts: [['1', '1'], ['4', '4'], ['5', '5'], ['6', '6'], ['custom', 'A medida']],
      optHelp: function (o) {
        return o === 'custom' ? 'Fabricamos gabinetes con el número de zonas que necesites.'
          : o + (o === '1' ? ' zona' : ' zonas') + ' · un pirómetro de 48 × 96 mm por zona · entrega inmediata';
      },
      headline: 'Tu molde sigue produciendo, aunque falle un termopar.',
      features: [
        ['Compensación automática de termopar', 'Ante una falla, pasa a modo manual con la potencia promedio de los últimos minutos. Sin paros de línea.'],
        ['Arranque suave automático', 'Calienta las resistencias de forma progresiva al encender y prolonga su vida útil.'],
        ['Control de potencia', 'Ajusta el porcentaje de potencia entregada a cada zona según tu proceso.'],
        ['Lectura clara y amperímetro', 'Temperatura deseada y real en cada zona, con amperímetro incluido.']
      ],
      specs: function (o, optName) {
        return [
          ['Tipo de control', 'Pirómetro digital con microprocesador'],
          ['Formato por zona', '48 × 96 mm estandarizado'],
          ['Gabinete', 'Rack 19" de aluminio, construcción robusta'],
          ['Zonas disponibles', '1, 4, 5 y 6 · otras bajo pedido'],
          ['Configuración elegida', o === 'custom' ? 'A medida' : optName + (o === '1' ? ' zona' : ' zonas')],
          ['Programación', 'Por teclado frontal'],
          ['Arranque', 'Suave, automático'],
          ['Falla de termopar', 'Compensación automática en modo manual'],
          ['Indicación', 'Temperatura deseada y real'],
          ['Medición de corriente', 'Amperímetro incluido'],
          ['Grado de protección', 'IP65'],
          ['Aplicación', 'Inyección por colada caliente']
        ];
      },
      apps: [
        ['Moldes de colada caliente', 'Control de temperatura de boquillas y distribuidores (manifold).'],
        ['Inyección multicavidad', 'Un pirómetro por zona para cada punto de inyección.'],
        ['Producción continua', 'La compensación de termopar evita paros mientras se programa el mantenimiento.'],
        ['Reemplazo de equipos', 'Formato estándar 48 × 96 mm y rack de 19" para actualizar controladores existentes.']
      ],
      warranty: 'Garantía por escrito y entrega inmediata en configuraciones estándar.'
    },
    {
      id: 'controlador-modular', cat: 'ctrl', cats: ['ctrl', 'colada'], viz: 'modular',
      name: 'Controlador de temperatura modular',
      short: 'Sistema touch screen, multifunción o tarjeta, en módulos o gabinetes.',
      badge: 'Hasta 256 zonas',
      chips: ['Touch screen', '2–256 zonas', '15 / 30 A'],
      search: 'modular touch screen tactil multifuncion tarjeta 256 zonas temperatura gabinete serie 5 serie 8',
      desc: 'EuroHeaters es referencia en controladores para moldes con canales calientes, con más de 50 años de innovación, robustez y calidad. Todos los modelos usan el software de "Sintonía Permanente Self Control" y se ofrecen en módulos individuales o gabinetes: Serie 5 (2 a 48 zonas), Serie Mundial y Serie 8 (módulos compactos de zona doble).',
      photos: [IMG + 'modular-1.jpg', IMG + 'modular-2.jpg', IMG + 'modular-4.jpg', IMG + 'modular-3.jpg'],
      kpis: [['2–256', 'zonas (touch screen)'], ['15 / 30 A', 'potencia por módulo'], ['IP65', 'grado de protección']],
      optLabel: 'Línea', defOpt: 'touch',
      opts: [['touch', 'Touch screen'], ['multi', 'Multifunción'], ['card', 'Tarjeta 2 zonas']],
      optHelp: function (o) {
        return { touch: 'Interfaz táctil con seguimiento sincronizado de 2 a 256 zonas.', multi: 'Protección patentada contra cortos y termopar mal colocado · 1 a 12 zonas.', card: 'Una tarjeta controla dos zonas en tamaño reducido.' }[o];
      },
      headline: 'Potencia suave y precisa, zona por zona.',
      features: [
        ['Autoajuste y ángulo de fase', 'Entrega una potencia suave y precisa a cada zona.'],
        ['Arranque suave', 'Protege las resistencias en cada encendido.'],
        ['Diagnóstico preventivo', 'Monitorea el molde y ayuda a solucionar fallas antes de que detengan la producción.'],
        ['Diseño totalmente modular', 'Mantenimiento sencillo: se reemplaza solo el módulo necesario.']
      ],
      specs: function (o, optName) {
        return [
          ['Línea seleccionada', optName],
          ['Zonas', { touch: '2 a 256 zonas', multi: '1 a 12 zonas y gabinetes', card: '2 zonas por tarjeta' }[o]],
          ['Interfaz', { touch: 'Pantalla táctil', multi: 'Formato estándar', card: 'Microcontrolador (MCU) integrado' }[o]],
          ['Protecciones', { touch: 'Diagnóstico preventivo del molde', multi: 'Cortocircuito en cableado, termopar mal colocado y falla de neutro', card: 'Falla de neutro y protección de triac por disipación' }[o]],
          ['Potencia por módulo', '15 A o 30 A (opcional)'],
          ['Control', 'Autoajuste y salida por ángulo de fase'],
          ['Arranque', 'Suave'],
          ['Software', 'Sintonía Permanente Self Control'],
          ['Gabinetes Serie 5 / Serie 8', '2 a 48 zonas'],
          ['Grado de protección', 'IP65']
        ];
      },
      apps: [
        ['Moldes con muchas zonas', 'Seguimiento sincronizado de todas las zonas de temperatura.'],
        ['Plantas con mantenimiento propio', 'Módulos intercambiables que reducen el tiempo de reparación.'],
        ['Ambientes exigentes', 'Baja temperatura dentro del gabinete incluso en condiciones severas.'],
        ['Crecimiento por etapas', 'Agrega zonas sumando módulos o tarjetas.']
      ],
      docs: [['Ficha técnica · Touch Screen System', DOC + 'modular-touch-screen.pdf'], ['Ficha técnica · Hot Runner Card', DOC + 'modular-hot-runner-card.pdf']],
      warranty: 'Garantía por escrito y soporte técnico especializado.'
    },
    {
      id: 'controlador-tiempo-inyeccion', cat: 'ctrl', cats: ['ctrl', 'colada'], viz: 'timer',
      name: 'Controlador de tiempo de inyección',
      short: 'Temporizador de secuencia para abrir y cerrar compuertas de colada caliente.',
      badge: '',
      chips: ['24 V DC / 220 V AC', 'Modos A · B · C'],
      search: 'tiempo inyeccion secuencia compuertas valvula 24 v 220 v solenoide temporizador',
      desc: 'Temporizador de secuencia que abre y cierra las compuertas de un canal caliente. Controla en qué momento inyecta cada punto para eliminar la línea de soldadura, ajustar la cantidad de material por compuerta y mejorar la calidad de la pieza.',
      photos: photos('timer', 2),
      kpis: [['24 / 220 V', 'salida seleccionable'], ['A · B · C', 'modos de operación'], ['Auto', 'indicación de voltaje']],
      optLabel: 'Voltaje de salida', defOpt: '24',
      opts: [['24', '24 V DC'], ['220', '220 V AC']],
      optHelp: function () { return 'Elige el voltaje que coincide con la válvula solenoide de tu molde.'; },
      headline: 'Piezas sin línea de soldadura ni marcas de flujo.',
      features: [
        ['Elimina la línea de soldadura', 'Abre las compuertas en secuencia para que los frentes de flujo no se encuentren.'],
        ['Inyección ajustable por compuerta', 'Define cuánto material entra por cada punto.'],
        ['Menor fuerza de cierre', 'La secuencia reduce la fuerza de sujeción necesaria.'],
        ['Mínimas marcas de flujo', 'Mejor acabado en piezas visibles.']
      ],
      specs: function (o, optName) {
        return [
          ['Función', 'Apertura y cierre secuencial de compuertas'],
          ['Voltaje de salida elegido', optName],
          ['Opciones de salida', '24 V DC o 220 V AC'],
          ['Indicación', 'Voltaje de salida automático en operación'],
          ['Modos de operación', 'A, B y C'],
          ['Ajuste', 'Tiempos de apertura y cierre según condiciones de operación'],
          ['Aplicación', 'Colada caliente con compuertas de válvula']
        ];
      },
      apps: [
        ['Piezas grandes con varias compuertas', 'Llenado secuencial y controlado.'],
        ['Piezas estéticas', 'Reduce marcas de flujo en superficies visibles.'],
        ['Moldes con línea de soldadura', 'Elimina la unión de frentes de flujo.'],
        ['Optimización de máquina', 'Menor tonelaje de cierre requerido.']
      ],
      docs: [['Ficha técnica · Controlador de tiempo de inyección', DOC + 'tiempo-inyeccion.pdf']],
      warranty: 'Garantía por escrito y asesoría para configurar la secuencia.'
    },
    {
      id: 'controladores-presion', cat: 'ctrl', cats: ['ctrl'], viz: 'pressure',
      name: 'Controladores y transductores de presión',
      short: 'Medición y control de presión de fusión con diafragma de Inconel.',
      badge: 'Garantía 3 años',
      chips: ['Error 0.5%', '400 °C máx.', '4–20 mA'],
      search: 'presion transductor fusion inconel psi 4-20 ma alarmas sensor melt pressure',
      desc: 'Transductores y controladores para medir y controlar la presión de fusión, con más de 13 años de experiencia en la fabricación de sensores. Diafragma de Inconel estándar, recubrimientos opcionales y garantía de 3 años contra defectos de fabricación.',
      photos: photos('pressure', 2),
      kpis: [['0.5%', 'error combinado'], ['400 °C', 'temperatura máx.'], ['3 años', 'de garantía']],
      optLabel: 'Modelo', defOpt: 'melt',
      opts: [['melt', 'Indicador de presión'], ['ctrl', 'Controlador'], ['dual', 'Dual + amplificador'], ['mpc', 'Control de fusión']],
      optHelp: function (o) {
        return { melt: 'Indicador para medir la presión de fusión.', ctrl: 'Controlador con entrada para galga de 350 Ω y 2 alarmas.', dual: 'Presión y temperatura (termopar J) con 3 alarmas.', mpc: 'Control PID con muestreo de 100 ms y salida 4–20 mA.' }[o];
      },
      headline: 'Presión bajo control, lectura en la que puedes confiar.',
      features: [
        ['Diafragma de Inconel', 'Estándar en todos los transductores, con recubrimientos opcionales.'],
        ['Intercambiable', 'Compatible con modelos de relleno de fluido o varilla de empuje de otras marcas.'],
        ['Alarmas configurables', 'Alarmas de alta y baja presión para proteger el proceso.'],
        ['Respuesta de 100 ms', 'Muestreo y control rápidos en el modelo de control de fusión.']
      ],
      specs: function (o, optName) {
        var by = {
          melt: [['Conexión', 'Bayoneta de 6 pines'], ['Manguera', 'Flexible de 6", con o sin extensión de 18"'], ['Precisión', 'Error combinado de 0.5%'], ['Calibración de salida', '80%'], ['Temperatura máxima', '400 °C (750 °F)'], ['Rangos', 'Desde 0–500 psi hasta 0–20,000 psi']],
          ctrl: [['Entrada', 'Galga extensiométrica de 350 Ω'], ['Rango', 'Escalable'], ['Alarmas', '2 configurables (alta / baja / off)'], ['Calibración', 'Automática / manual'], ['Ajuste de cero', 'Manual'], ['Salida', 'Retransmisión del valor de proceso']],
          dual: [['Funciones', 'Todas las de los modelos MP9410 y MP9610'], ['Entrada de temperatura', 'Termopar tipo J'], ['Alarmas', '3']],
          mpc: [['Sintonización', 'PID manual'], ['Muestreo', '100 ms'], ['Respuesta de control', '100 ms'], ['Salida', 'Retransmisión de PV 4–20 mA'], ['Calibración', 'Automática / manual']]
        }[o] || [];
        return [['Modelo seleccionado', optName]].concat(by, [['Diafragma', 'Inconel estándar'], ['Garantía', '3 años contra defectos de fabricación']]);
      },
      apps: [
        ['Presión de fusión', 'Monitoreo del material fundido durante el proceso.'],
        ['Protección del equipo', 'Alarmas de alta y baja presión.'],
        ['Integración al proceso', 'Retransmisión de la variable de proceso en 4–20 mA.'],
        ['Reemplazo directo', 'Sustituye transductores existentes sin cambiar la instalación.']
      ],
      docs: [['Ficha técnica · Transductores de presión', DOC + 'presion-transductores.pdf'], ['Ficha técnica · Pressure Controllers', DOC + 'presion-pressure-controllers.pdf']],
      warranty: '3 años de garantía contra defectos de fabricación.'
    },

    /* ===== Sistema de colada caliente ===== */
    {
      id: 'puntas-inyeccion', cat: 'colada', cats: ['colada'],
      name: 'Puntas de inyección',
      short: 'Boquillas robustas con termopar tipo J para una temperatura real y precisa.',
      badge: 'Pin point gate',
      chips: ['Termopar J', 'Válvula de aguja', 'PP · PE · ABS'],
      search: 'puntas boquillas nozzle pin point gate valvula aguja termopar j colada caliente inyeccion',
      desc: 'Boquillas fabricadas con materias primas importadas de alta calidad, de forma robusta para un mejor tratamiento térmico y resistentes a la corrosión. Incluyen termopar tipo J para obtener la temperatura real con mayor precisión. Ofrecemos distintos tipos de boquilla según el tamaño de la compuerta y el plástico.',
      photos: photos('puntas', 3),
      kpis: [['Tipo J', 'termopar integrado'], ['Pin point', 'compuerta más usada'], ['3 piezas', 'boquilla, válvula y eje']],
      headline: 'Llenado más fácil, ciclos más cortos y mejor acabado.',
      features: [
        ['Menor viscosidad del fundido', 'Mejora la velocidad de corte del plástico y facilita el llenado del molde. Ideal para PP, PE y ABS.'],
        ['Válvula de aguja', 'Accionada por presión neumática o hidráulica: acorta el tiempo de ciclo y aumenta la velocidad de inyección.'],
        ['Acabado superficial superior', 'Para herramentales de superficie fina y plásticos con alta exigencia de calidad, como el plástico médico.'],
        ['Materiales difíciles', 'Buena adaptabilidad para plásticos de ingeniería, antiflama y de moldeo complejo.']
      ],
      specs: [
        ['Tipo de compuerta', 'Pin point gate (abierta) y válvula de aguja'],
        ['Termopar', 'Tipo J'],
        ['Componentes', 'Boquilla, válvula de agarre de la boquilla y eje de boquilla'],
        ['Accionamiento de válvula', 'Neumático o hidráulico'],
        ['Materiales', 'Partes metálicas de materia prima importada'],
        ['Resistencia', 'A la corrosión'],
        ['Selección', 'Según tamaño de compuerta y tipo de plástico']
      ],
      apps: [
        ['Commodities', 'PP, PE y ABS con llenado eficiente.'],
        ['Plásticos de ingeniería', 'Incluye materiales antiflama y con cambio de color.'],
        ['Piezas médicas', 'Superficies finas con alta exigencia de calidad.'],
        ['Ciclos rápidos', 'Válvula de aguja para reducir el tiempo de ciclo.']
      ]
    },

    /* ===== Resistencias ===== */
    {
      id: 'resistencia-cartucho', cat: 'res', cats: ['res', 'colada'],
      name: 'Resistencia de cartucho',
      short: 'Alta y baja densidad, hechas a la medida para moldes, dados, placas y troqueles.',
      badge: 'Hasta 760 °C',
      chips: ['62 W/cm²', '3/8"–1"', 'Inox 316'],
      search: 'cartucho alta densidad baja densidad anti impacto molde dado troquel placa sellado nicrom',
      desc: 'Las resistencias tipo cartucho entregan calor uniforme, son herméticas y resisten la oxidación y la corrosión. Se diseñan y fabrican a la medida con los materiales más confiables y bajo estrictos controles de calidad internacionales.',
      photos: photos('cartucho', 2),
      kpis: [['760 °C', 'temperatura de operación'], ['62 W/cm²', 'densidad de potencia'], ['3/8"–1"', 'diámetros estándar']],
      optLabel: 'Densidad', defOpt: 'alta',
      opts: [['alta', 'Alta densidad'], ['baja', 'Baja densidad']],
      optHelp: function (o) {
        return o === 'alta'
          ? 'Anti impacto: alta densidad de potencia en espacios reducidos; soporta vibración, humedad y dilataciones.'
          : 'Resistencia de Nicrom sobre cuerpo cerámico, sello antihumedad y funda de acero inoxidable 316 sin costura.';
      },
      headline: 'Calor uniforme justo donde lo necesitas.',
      features: [
        ['Entrega de calor uniforme', 'Distribución pareja a lo largo de la zona caliente.'],
        ['Herméticas', 'Resistentes a la oxidación y a la corrosión.'],
        ['Para condiciones duras', 'Soportan vibraciones, humedad, derrames y dilataciones frecuentes.'],
        ['Cualquier medida', 'Fabricamos cualquier diámetro, largo, tipo de salida y tensión.']
      ],
      specs: function (o) {
        return [
          ['Tipo', o === 'alta' ? 'Alta densidad (anti impacto)' : 'Baja densidad'],
          ['Construcción', o === 'alta' ? 'Nicrom con aislamiento granular refractario compactado' : 'Nicrom helicoidal en cuerpo cerámico con aislamiento granular refractario'],
          ['Funda', o === 'alta' ? 'Latón o acero inoxidable' : 'Tubo de acero inoxidable 316 sin costura'],
          ['Hilo resistivo', 'Nicrom 80/20'],
          ['Aislamiento', 'Óxido de magnesio de alta pureza y tubos cerámicos de alta alúmina'],
          ['Sello', o === 'alta' ? 'Hermético' : 'Antihumedad de pasta cerámica'],
          ['Diámetros estándar', '3/8", 7/16", 1/2", 9/16", 5/8", 3/4", 7/8" y 1"'],
          ['Tensión estándar', '220 V'],
          ['Cables', 'Fibra de vidrio siliconada de 250 mm o trenzados flexibles'],
          ['Tolerancia de potencia', '+5% / −10%'],
          ['A pedido', 'Cualquier diámetro, largo, tipo de salida y tensión']
        ];
      },
      table: {
        title: 'Temperatura y densidad de potencia (alta densidad)',
        cols: ['Temperatura de operación', '°F', 'Densidad de potencia'],
        rows: [['760 °C', '1400 °F', '62 W/cm²'], ['538 °C', '1000 °F', '62 W/cm²']]
      },
      apps: [
        ['Inyección de plástico', 'Calentamiento de moldes y canales calientes.'],
        ['Empaque', 'Barras de sellado en equipos de envasado.'],
        ['Dados, placas y troqueles', 'Calor concentrado en espacios reducidos.'],
        ['Laboratorio e industria', 'Calentamiento de líquidos, muestras para cromatografía y semiconductores.']
      ],
      docs: [['Tipos de salida', DOC + 'cartucho-tipos-de-salida.pdf'], ['Cables y protecciones', DOC + 'cartucho-cables-y-protecciones.pdf']]
    },
    {
      id: 'resistencia-cartucho-bipartido', cat: 'res', cats: ['res', 'colada'],
      name: 'Resistencia de cartucho bipartido',
      short: 'Cartucho de entrega uniforme para inyección, sellado y calentamiento de dados.',
      badge: 'A medida',
      chips: ['Hermético', 'Anticorrosión', 'Compacto'],
      search: 'cartucho bipartido split dado placa sellado inyeccion',
      desc: 'Resistencia industrial tipo cartucho con entrega uniforme de calor, hermética y resistente a la oxidación y la corrosión. Se diseña y construye a la medida como resistencia compacta, con materiales de primera y estrictos controles de calidad internacionales.',
      photos: [IMG + 'bipartido-2.jpg'],
      kpis: [['Hermética', 'sellado total'], ['Compacta', 'para espacios reducidos'], ['A medida', 'diseño personalizado']],
      features: [
        ['Calor uniforme', 'Entrega pareja de calor en toda la zona de trabajo.'],
        ['Resistente a la corrosión', 'Construcción hermética que soporta la oxidación.'],
        ['Diseño compacto', 'Pensada para alojarse en espacios reducidos.'],
        ['Fabricación personalizada', 'Construida según las especificaciones de tu equipo.']
      ],
      specs: [
        ['Tipo', 'Cartucho bipartido'],
        ['Construcción', 'Hermética'],
        ['Protección', 'Contra oxidación y corrosión'],
        ['Fabricación', 'A medida, en las cantidades requeridas'],
        ['Control de calidad', 'Estándares internacionales']
      ],
      apps: [
        ['Inyección de plástico', 'Calentamiento de moldes.'],
        ['Empaque', 'Sellado de diversas formas de empaque.'],
        ['Herramentales', 'Calentamiento de dados, placas y troqueles.'],
        ['Líquidos', 'Calentamiento de líquidos en procesos industriales.']
      ]
    },
    {
      id: 'resistencia-coiler', cat: 'res', cats: ['res', 'colada'],
      name: 'Resistencia coiler o helicoidal',
      short: 'Microtubular de diámetro reducido y gran poder calorífico para boquillas.',
      badge: 'Desde 1 pieza',
      chips: ['Microtubular', 'Inox', 'Hasta 950 W'],
      search: 'coiler helicoidal microtubular boquilla nozzle colada caliente',
      desc: 'Resistencias microtubulares de diámetro reducido pero de gran poder calorífico, para calentar en espacios muy pequeños. El hilo calefactor se recubre con una funda de acero inoxidable y se compacta para lograr mayor duración y temperaturas muy altas. Toman la forma que necesites: recta, helicoidal para boquillas y tuberías, u otras geometrías.',
      photos: [IMG + 'coiler-3.jpg', IMG + 'coiler-2.jpg', IMG + 'coiler-1.jpg'],
      kpis: [['1.3 × 2.3', 'mm, sección mínima'], ['950 W', 'potencia de referencia'], ['1 pieza', 'pedido mínimo']],
      headline: 'Mucho calor en muy poco espacio.',
      features: [
        ['Gran poder calorífico', 'Alta potencia en diámetros reducidos.'],
        ['Funda de acero inoxidable', 'Compactada para mayor duración y altas temperaturas.'],
        ['Cualquier geometría', 'Recta, helicoidal o formas especiales según tu pieza.'],
        ['Sin mínimos', 'Fabricamos desde una sola unidad.']
      ],
      specs: [
        ['Tipo', 'Microtubular (coiler)'],
        ['Funda', 'Acero inoxidable'],
        ['Secciones disponibles', '1.3 × 2.3 · 1.8 × 3.2 · 2.2 × 4.2 · 3.0 × 3.0 · Ø 3.3 · 4.6 × 8.6 mm'],
        ['Formas', 'Recta, helicoidal u otras geometrías'],
        ['Fabricación', 'A medida, desde una unidad']
      ],
      table: {
        title: 'Medidas de referencia',
        note: 'Valores de referencia. Fabricamos según tus especificaciones.',
        cols: ['Longitud total', 'Longitud calórica', 'Potencia'],
        rows: [['290 mm', '250 mm', '195 W'], ['320 mm', '280 mm', '215 W'], ['375 mm', '335 mm', '240 W'], ['425 mm', '385 mm', '295 W'], ['500 mm', '460 mm', '350 W'], ['560 mm', '520 mm', '400 W'], ['640 mm', '600 mm', '460 W'], ['800 mm', '760 mm', '610 W'], ['940 mm', '900 mm', '690 W'], ['1150 mm', '1110 mm', '850 W'], ['1350 mm', '1310 mm', '950 W']]
      },
      apps: [
        ['Boquillas de inyección', 'Forma helicoidal alrededor de la boquilla.'],
        ['Cuchillas y plegadoras', 'Calentamiento de superficies rectas.'],
        ['Tuberías', 'Calentamiento helicoidal de conductos.'],
        ['Espacios reducidos', 'Donde no cabe una resistencia convencional.']
      ]
    },
    {
      id: 'resistencia-nozzle', cat: 'res', cats: ['res', 'colada'],
      name: 'Resistencias nozzle y coiler especiales',
      short: 'Calentadores de bobina plana para boquillas, con termopar J o K opcional.',
      badge: 'IP65',
      chips: ['650 °C', '220 V', 'Termopar J / K'],
      search: 'nozzle boquilla bobina plana coiler especial termopar j k laton bronce inox pvc',
      desc: 'Calentadores de bobina plana, precisos y confiables, para optimizar el funcionamiento de boquillas y componentes de acoplamiento. Se adaptan al diseño de la boquilla para reducir al mínimo el uso de material, y su superficie de contacto maximiza la longitud calentada. Disponibles con o sin termopar interno tipo J o K.',
      photos: [IMG + 'nozzle-2.jpg'],
      kpis: [['650 °C', 'temp. máx. de vaina'], ['IP65', 'sellado hermético'], ['J / K', 'termopar opcional']],
      headline: 'Calor uniforme y larga vida en cada boquilla.',
      features: [
        ['Cubierta resistente', 'Acero inoxidable o bronce con anillos sellados en los extremos contra corrosión y desgaste.'],
        ['Incrustación de latón', 'Masa térmica elevada para mejor rendimiento a alta temperatura y mayor vida útil.'],
        ['Cabezal resistente', 'Transición reforzada entre la bobina y la salida.'],
        ['Salidas a medida', 'Amplia variedad de salidas estándar y personalizadas.']
      ],
      specs: [
        ['Voltaje', '220 V'],
        ['Armadura', 'Bronce, o acero inoxidable para materiales corrosivos como PVC'],
        ['Densidad de superficie', '4–4.5 W/cm² (latón) · 5.6 W/cm² (acero inoxidable)'],
        ['Rigidez dieléctrica', '2000 V'],
        ['Espesor de pared', '1.5 mm ± 0.2 mm'],
        ['Temperatura máx. de vaina', '650 °C (1200 °F)'],
        ['Prueba de alto voltaje', '800 V AC'],
        ['Resistencia de aislamiento', '5 MΩ a 500 V DC'],
        ['Corriente de fuga', '< 0.5 mA a 253 V AC'],
        ['Tolerancia de potencia', '± 10%'],
        ['Tolerancia de diámetro interior', '± 0.05 mm'],
        ['Zona sin calentar', 'Mín. 15 mm (tolerancia ± 10%, mín. ± 9 mm)'],
        ['Termopar interno', 'Opcional, tipo J o K'],
        ['Sellado', 'Hermético IP65']
      ],
      apps: [
        ['Boquillas de colada caliente', 'Calentamiento preciso de la boquilla.'],
        ['Materiales corrosivos', 'Versión en acero inoxidable para PVC.'],
        ['Alta temperatura', 'Incrustación de latón para mayor masa térmica.'],
        ['Ahorro de energía', 'Alta densidad de superficie y transferencia rápida de calor.']
      ]
    },
    {
      id: 'resistencia-tubular-flexible', cat: 'res', cats: ['res', 'colada'],
      name: 'Resistencia tubular flexible',
      short: 'Se adapta a cualquier forma y contorno: altamente flexible y maleable.',
      badge: 'A medida',
      chips: ['Nicrom 80/20', 'Inconel', 'Flexible'],
      search: 'tubular flexible maleable nicrom incoloy inconel inox contorno',
      desc: 'Resistencias especiales que se adaptan a cualquier forma. Su flexibilidad permite seguir los contornos de la pieza a calentar, lo que se traduce en una transferencia de calor muy eficiente. Se fabrican a la medida con los mejores materiales y bajo rigurosos estándares internacionales.',
      photos: photos('tubflex', 3),
      kpis: [['80/20', 'alambre de Nicrom'], ['5', 'aceros y aleaciones'], ['A medida', 'forma y cantidad']],
      features: [
        ['Altamente flexible', 'Se moldea a los contornos y espacios de tu equipo.'],
        ['Eficiencia térmica', 'Mayor contacto con la superficie, mejor transferencia de calor.'],
        ['Materiales de primera', 'Óxido de magnesio de alta pureza y aleaciones de alta temperatura.'],
        ['Fabricación personalizada', 'En las cantidades y especificaciones que necesites.']
      ],
      specs: [
        ['Hilo resistivo', 'Alambre de Nicrom calidad 80/20'],
        ['Terminal', 'Pin roscado de níquel puro'],
        ['Aislamiento', 'Óxido de magnesio de alta temperatura y pureza'],
        ['Tubo', 'Acero inoxidable 304, 316L o 310, Incoloy e Inconel'],
        ['Aislante de salida', 'Cerámico'],
        ['Fabricación', 'A medida']
      ],
      apps: [
        ['Moldes y colada caliente', 'Calentamiento de contornos irregulares.'],
        ['Superficies curvas', 'Se dobla para seguir la geometría de la pieza.'],
        ['Equipos especiales', 'Diseños únicos según tu plano.'],
        ['Reemplazos', 'Fabricación sobre muestra.']
      ]
    },
    {
      id: 'resistencia-tubular', cat: 'res', cats: ['res'],
      name: 'Resistencia tubular',
      short: 'La resistencia más versátil: se forma y dobla en muchas formas y tamaños.',
      badge: 'A medida',
      chips: ['Blindada', 'Formable', 'A medida'],
      search: 'tubular blindada doblada forma revestimiento metalico',
      desc: 'Las resistencias más versátiles de la industria de revestimiento metálico. Se fabrican a pedido respetando los valores, especificaciones, materiales y exigencias de cada aplicación. Su flexibilidad permite formarlas y doblarlas en muchas formas y tamaños, adaptándose a contornos y espacios.',
      photos: photos('tubular', 3),
      kpis: [['Blindada', 'revestimiento metálico'], ['Formable', 'doblada a tu medida'], ['A pedido', 'valores y materiales']],
      features: [
        ['Máxima versatilidad', 'Recta, en U, en espiral o con la forma que requieras.'],
        ['Fabricación a pedido', 'Respetamos potencia, voltaje, materiales y dimensiones.'],
        ['Se adapta al espacio', 'Se dobla para seguir los contornos de tu equipo.'],
        ['Con o sin aletas', 'Configuraciones para aire, líquidos o contacto.']
      ],
      specs: [
        ['Tipo', 'Tubular blindada'],
        ['Forma', 'A medida (recta, U, espiral, serpentín)'],
        ['Especificaciones', 'Potencia, voltaje y materiales según requerimiento'],
        ['Fabricación', 'A pedido']
      ],
      apps: [
        ['Calentamiento de líquidos', 'Tanques y procesos de inmersión.'],
        ['Calentamiento de aire', 'Hornos, ductos y estufas.'],
        ['Contacto', 'Placas y superficies metálicas.'],
        ['Equipos industriales', 'Reemplazos y diseños especiales.']
      ]
    },
    {
      id: 'resistencia-banda', cat: 'res', cats: ['res'],
      name: 'Resistencia tipo banda',
      short: 'Calentamiento rápido de cañones y boquillas, con apriete que mejora la adherencia.',
      badge: 'A medida',
      chips: ['Abrazadera', 'Ø a medida', 'Varias salidas'],
      search: 'banda abrazadera cañon extrusora inyectora boquilla mica',
      desc: 'Genera un rápido incremento de la temperatura. Al calentarse, la banda se tensa para asegurar buena adherencia y eliminar vacíos: aumenta la conductividad térmica, baja la temperatura interna de la resistencia y alarga su vida útil. Se fabrica a pedido en distintos diámetros, anchos, potencias, terminales y salidas.',
      photos: photos('banda', 3),
      kpis: [['Rápida', 'subida de temperatura'], ['Mayor vida', 'menor temperatura interna'], ['A pedido', 'diámetro y ancho']],
      features: [
        ['Calentamiento rápido', 'Incremento acelerado de la temperatura transferible.'],
        ['Apriete térmico', 'La banda se tensa al calentar y elimina vacíos.'],
        ['Vida útil prolongada', 'Menor temperatura interna gracias a la mejor conducción.'],
        ['Totalmente configurable', 'Diámetros, anchos, potencias, terminales y salidas a elegir.']
      ],
      specs: [
        ['Tipo', 'Banda (abrazadera)'],
        ['Diámetros y anchos', 'A pedido'],
        ['Potencia', 'Amplio rango, según requerimiento'],
        ['Terminales y salidas', 'Distintos tipos de conexión'],
        ['Cantidades', 'Las que se requieran']
      ],
      apps: [
        ['Inyectoras', 'Calentamiento de cañones y boquillas.'],
        ['Extrusoras', 'Zonas de calentamiento del barril.'],
        ['Sopladoras', 'Calentamiento de cabezales.'],
        ['Tuberías y recipientes', 'Calentamiento externo de superficies cilíndricas.']
      ]
    },
    {
      id: 'resistencia-banda-ceramica', cat: 'res', cats: ['res'],
      name: 'Resistencia tipo banda cerámica',
      short: 'Hasta 95% de eficiencia energética al dirigir el calor hacia el interior.',
      badge: '95% eficiencia',
      chips: ['Nicrom', 'Cerámica 1200 °C', 'Inox 316'],
      search: 'banda ceramica eficiencia aislamiento termico nicrom inox 316 extrusora',
      desc: 'Resistencia de Nicrom en forma helicoidal alojada en cuerpos cerámicos concatenados, con alto aislamiento dieléctrico, óptima conductividad térmica y punto de fusión de 1200 °C. Su aislamiento térmico exterior dirige el calor hacia el interior y eleva la eficiencia energética hasta un 95%. Blindaje de acero inoxidable 316.',
      photos: photos('bandacer', 2),
      kpis: [['95%', 'eficiencia energética'], ['1200 °C', 'fusión de la cerámica'], ['Inox 316', 'blindaje metálico']],
      headline: 'Menos energía perdida, más calor en el cañón.',
      features: [
        ['Ahorro de energía', 'Aislamiento exterior que dirige el calor hacia la pieza.'],
        ['Cuerpos cerámicos', 'Alto aislamiento dieléctrico y óptima conductividad térmica.'],
        ['Blindaje robusto', 'Plancha de acero inoxidable calidad 316.'],
        ['Terminales a elegir', 'Pernos, enchufe tipo plancha, bornera de loza o cable níquel-acero con caja.']
      ],
      specs: [
        ['Hilo resistivo', 'Nicrom en forma helicoidal'],
        ['Aislamiento', 'Cuerpos cerámicos concatenados, punto de fusión 1200 °C'],
        ['Aislamiento térmico', 'En la cara exterior de la banda'],
        ['Eficiencia energética', 'Hasta 95%'],
        ['Blindaje', 'Acero inoxidable 316'],
        ['Sujeción', 'Cilíndrica coplanaria, integrada o con sobretapa independiente'],
        ['Terminales', 'Pernos, enchufe tipo plancha, bornera de loza o cable níquel-acero con caja de protección']
      ],
      apps: [
        ['Extrusoras', 'Barriles con alto consumo energético.'],
        ['Inyectoras', 'Cañones de inyección.'],
        ['Alta temperatura', 'Procesos con plásticos de ingeniería.'],
        ['Ahorro energético', 'Sustitución de bandas de mica.']
      ]
    },
    {
      id: 'resistencia-plana', cat: 'res', cats: ['res'],
      name: 'Resistencia plana',
      short: 'Nicrom sobre mica con blindaje de acero inoxidable 316 y orificios de montaje.',
      badge: 'A medida',
      chips: ['Mica', 'Inox 316', 'Con pernos'],
      search: 'plana mica placa platina nicrom inox 316',
      desc: 'Resistencia de Nicrom enrollada sobre una lámina de mica y aislada por láminas similares en ambas caras, con alto aislamiento dieléctrico y óptima conductividad térmica. Blindaje de acero inoxidable 316 y orificios incorporados para fijarse con pernos.',
      photos: photos('plana', 2),
      kpis: [['Mica', 'aislamiento dieléctrico'], ['Inox 316', 'blindaje metálico'], ['Pernos', 'montaje directo']],
      features: [
        ['Contacto directo', 'Superficie plana para transferir calor a placas y platinas.'],
        ['Aislamiento de mica', 'Alto aislamiento dieléctrico en ambas caras.'],
        ['Blindaje inoxidable', 'Acero inoxidable calidad 316.'],
        ['Montaje sencillo', 'Orificios incorporados para pernos.']
      ],
      specs: [
        ['Hilo resistivo', 'Nicrom enrollado sobre lámina de mica'],
        ['Aislamiento', 'Láminas de mica en ambas caras'],
        ['Blindaje', 'Acero inoxidable 316'],
        ['Montaje', 'Orificios para ajuste con pernos'],
        ['Terminales', 'Pernos, enchufe tipo plancha, bornera de loza o cable níquel-acero con caja de protección']
      ],
      apps: [
        ['Platinas y placas', 'Calentamiento por contacto.'],
        ['Moldes', 'Placas calientes de herramentales.'],
        ['Selladoras', 'Mordazas y barras planas.'],
        ['Prensas', 'Platos de prensas térmicas.']
      ]
    },
    {
      id: 'resistencia-ceramica-infrarroja', cat: 'res', cats: ['res'],
      name: 'Resistencia cerámica infrarroja',
      short: 'Radiación infrarroja de onda larga, de 300 a 700 °C, con vida de hasta 10,000 h.',
      badge: '2–10 µm',
      chips: ['230 V', '125–1000 W', '10,000 h'],
      search: 'infrarroja ceramica onda larga termoformado secado fte hte ffe radiacion',
      desc: 'Resistencia cerámica eficiente y robusta que emite radiación infrarroja de onda larga. Opera entre 300 °C y 700 °C con longitudes de onda de 2 a 10 micrones. Se suministra con 100 mm de perlinas cerámicas.',
      photos: photos('infra', 3),
      kpis: [['300–700 °C', 'temperatura de trabajo'], ['2–10 µm', 'longitud de onda'], ['10,000 h', 'vida útil promedio']],
      headline: 'Calor radiante, uniforme y sin contacto.',
      features: [
        ['Onda larga', 'Radiación de 2 a 10 µm, ideal para plásticos.'],
        ['Larga vida', 'Entre 5,000 y 10,000 horas de duración promedio.'],
        ['Formatos curvo y plano', 'Elementos grandes y medianos para cada panel.'],
        ['Instalación sencilla', 'Incluye 100 mm de perlinas cerámicas.']
      ],
      specs: [
        ['Hilo resistivo', 'Hierro-cromo-aluminio'],
        ['Voltaje', '230 V estándar (otros bajo pedido)'],
        ['Longitud de onda', '2–10 µm'],
        ['Temperatura de operación', '300 °C a 700 °C'],
        ['Duración promedio', '5,000 – 10,000 h'],
        ['Distancia de radiación', '100 a 200 mm recomendada'],
        ['Suministro', 'Con 100 mm de perlinas cerámicas']
      ],
      table: {
        title: 'Modelos',
        cols: ['Modelo', 'Forma', 'Potencias (W)', 'Temp. media', 'Dimensiones', 'Peso'],
        rows: [
          ['FTE', 'Curvo grande', '150 – 1000', '255 – 685 °C', '245 × 60 × 31 mm', '216 g'],
          ['HTE', 'Curvo mediano', '125 – 500', '354 – 722 °C', '122 × 60 × 31 mm', '116 g'],
          ['FFE', 'Plano grande', '150 – 1000', '262 – 722 °C', '245 × 60 × 24 mm', '206 g'],
          ['FFE mediano', 'Plano mediano', '125 – 500', '354 – 722 °C', '122 × 60 × 24 mm', '113 g']
        ]
      },
      apps: [
        ['Termoformado', 'Precalentamiento de láminas plásticas.'],
        ['Secado y curado', 'Pinturas, tintas y recubrimientos.'],
        ['Soldadura de plástico', 'Calentamiento sin contacto.'],
        ['Calefacción', 'Calor radiante en áreas de trabajo.']
      ]
    },
    {
      id: 'resistencia-cuarzo', cat: 'res', cats: ['res'],
      name: 'Resistencia de cuarzo',
      short: 'Emisores de onda media con respuesta más rápida que la cerámica.',
      badge: 'Onda media',
      chips: ['Serie Q10', 'Serie Q5', 'Cassette modular'],
      search: 'cuarzo onda media emisor q10 q5 precalentamiento reflector cassette',
      desc: 'Emisores de cuarzo de onda media que complementan la gama cerámica con longitudes de onda más cortas y tiempos de respuesta más rápidos. Basados en las series Q10 y Q5, en forma estándar y SE. Se usan en sistemas de precalentamiento de fabricantes líderes en las industrias del plástico y la electrónica.',
      photos: photos('cuarzo', 2),
      kpis: [['Rápida', 'respuesta térmica'], ['Q10 · Q5', 'series disponibles'], ['Modular', 'sistema cassette']],
      features: [
        ['Respuesta rápida', 'Calientan y enfrían más rápido que los emisores cerámicos.'],
        ['Onda media', 'Longitudes de onda más cortas para procesos ágiles.'],
        ['Sistema completo', 'Reflectores y sistemas de cableado disponibles.'],
        ['Cassette modular', 'Arma platinas completas de forma modular.']
      ],
      specs: [
        ['Tipo de emisor', 'Cuarzo de onda media'],
        ['Series', 'Q10 y Q5, en forma estándar y SE'],
        ['Presentación', 'Unidades individuales'],
        ['Complementos', 'Reflectores y sistemas de cableado'],
        ['Montaje', 'Sistema de cassette modular']
      ],
      apps: [
        ['Precalentamiento', 'Sistemas de fabricantes de equipo original.'],
        ['Plásticos', 'Termoformado y procesos rápidos.'],
        ['Electrónica', 'Procesos de calentamiento controlado.'],
        ['Líneas automatizadas', 'Ciclos cortos de encendido y apagado.']
      ]
    },
    {
      id: 'lamparas-cuarzo', cat: 'res', cats: ['res'],
      name: 'Lámparas de cuarzo',
      short: 'Filamento de tungsteno de onda media y halógenas de onda corta, hasta 2000 W.',
      badge: 'Hasta 2520 °C',
      chips: ['QT · QH', '750–2000 W', 'R7s'],
      search: 'lampara cuarzo halogena tungsteno onda corta qts qtm qtl qhs qhm qhl r7s',
      desc: 'Lámparas con dos tipos de filamento de tungsteno: tipo puercoespín o estrella para una emisión rápida de onda media, y emisores halógenos de onda corta. Montadas en reflectores de alta reflectividad, maximizan la salida y ofrecen un montaje rígido y robusto.',
      photos: photos('lampara', 2),
      kpis: [['2000 W', 'potencia máxima'], ['2520 °C', 'temp. máx. de bobina'], ['R7s', 'conexión estándar']],
      features: [
        ['Dos tecnologías', 'Onda media (QT) y halógena de onda corta (QH).'],
        ['Reflectores de alta reflectividad', 'Maximizan la salida de energía.'],
        ['Montaje robusto', 'Portalámparas R7s para instalación sencilla.'],
        ['Conectores especiales', 'Otros conectores disponibles bajo pedido.']
      ],
      specs: [
        ['Filamento', 'Tungsteno (puercoespín, estrella o halógeno)'],
        ['Conexión', 'R7s'],
        ['Portalámparas cerámico · voltaje máx.', '250 V AC'],
        ['Portalámparas · corriente máx.', '8 A'],
        ['Portalámparas · temperatura máx.', '350 °C'],
        ['Cables', '190 mm con aislamiento PTFE (máx. 250 °C)'],
        ['Sujeción', 'M4']
      ],
      table: {
        title: 'Modelos',
        cols: ['Modelo', 'Potencia', 'Temp. máx. de bobina', 'Longitud total', 'Longitud de calefacción'],
        rows: [
          ['QTS', '750 W', '1450 °C', '224 mm', '170 mm'],
          ['QTM', '750 W', '1210 °C', '277 mm', '225 mm'],
          ['QTM', '1000 W', '1450 °C', '277 mm', '225 mm'],
          ['QTL', '1500 W', '1270 °C', '473 mm', '415 mm'],
          ['QTL', '1750 W', '1470 °C', '473 mm', '415 mm'],
          ['QTL', '2000 W', '1500 °C', '473 mm', '415 mm'],
          ['QHS', '750 W', '2410 °C', '224 mm', '170 mm'],
          ['QHS', '1000 W', '2520 °C', '224 mm', '170 mm'],
          ['QHM', '1000 W', '2410 °C', '277 mm', '225 mm'],
          ['QHL', '2000 W', '2250 °C', '473 mm', '425 mm'],
          ['QHL', '2000 W', '2390 °C', '473 mm', '425 mm']
        ]
      },
      apps: [
        ['Termoformado', 'Calentamiento rápido de láminas.'],
        ['Secado industrial', 'Tintas, pinturas y adhesivos.'],
        ['Precalentamiento', 'Procesos que exigen respuesta inmediata.'],
        ['Hornos de túnel', 'Calor por radiación en línea.']
      ]
    },
    {
      id: 'resistencia-fundida', cat: 'res', cats: ['res'],
      name: 'Resistencia fundida en aluminio o bronce',
      short: 'Calentamiento homogéneo de superficies planas o curvas, hasta 25 W/cm².',
      badge: 'A medida',
      chips: ['Aluminio', 'Bronce', '23–25 W/cm²'],
      search: 'fundida aluminio bronce inyectada a presion collarin superficie homogenea',
      desc: 'Resistencias tubulares blindadas fundidas a presión en aluminio o bronce, para un calentamiento totalmente homogéneo de superficies planas o curvas. Garantizan un óptimo intercambio térmico y alcanzan cargas superficiales de hasta 23–25 W/cm². Fabricamos cualquier forma y cantidad.',
      photos: photos('fundida', 3),
      kpis: [['25 W/cm²', 'carga superficial'], ['Al · Br', 'aluminio o bronce'], ['Homogéneo', 'calentamiento']],
      features: [
        ['Calor homogéneo', 'Toda la superficie a la misma temperatura.'],
        ['Alto rendimiento', 'Tubulares blindadas fundidas a presión.'],
        ['Vida útil prolongada', 'Materiales de primera calidad en todo el ciclo de producción.'],
        ['Cualquier forma', 'Planas, curvas o collarines a medida.']
      ],
      specs: [
        ['Construcción', 'Resistencia tubular blindada fundida a presión'],
        ['Material', 'Aluminio o bronce'],
        ['Carga superficial', 'Hasta 23–25 W/cm²'],
        ['Formas', 'Planas, curvas o especiales'],
        ['Fabricación', 'Cualquier forma y cantidad']
      ],
      apps: [
        ['Extrusoras e inyectoras', 'Collarines de calentamiento de barril.'],
        ['Fluidos y líquidos', 'Tratamiento térmico de fluidos.'],
        ['Placas calientes', 'Superficies planas de contacto.'],
        ['Equipos de proceso', 'Calentamiento homogéneo de piezas curvas.']
      ]
    },
    {
      id: 'resistencia-silicona', cat: 'res', cats: ['res'],
      name: 'Resistencia flexible de caucho silicón',
      short: 'Delgada y flexible para tambores, tanques y superficies irregulares.',
      badge: 'VDE · DIN EN 60335',
      chips: ['24–250 V', 'Hasta 6500 W', '1.5–5 mm'],
      search: 'silicon silicona caucho flexible tambor tanque adhesivo cera alquitran manta',
      desc: 'Resistencias de silicón flexible que facilitan el manejo de materiales solidificados o viscosos como adhesivos, ceras, alquitrán, químicos y aceites, y eliminan métodos costosos de calefacción con vapor o combustible. También se ofrecen como calentadores de tambor con aislamiento de lana de vidrio, carcasa metálica, ruedas y panel de control termostático.',
      photos: photos('silicona', 3),
      kpis: [['6500 W', 'potencia máxima'], ['2.5 m²', 'área máxima'], ['12 kV/mm', 'rigidez dieléctrica']],
      headline: 'Calor flexible para materiales difíciles.',
      features: [
        ['Se adapta a la superficie', 'Radio de curvatura de hasta 50 mm.'],
        ['Delgada y ligera', 'Espesor de 1.5 a 5 mm.'],
        ['Varias formas de montaje', 'Vulcanizada, adhesiva, pegada con silicón, con placas de presión o resortes.'],
        ['Homologada', 'VDE 0700 parte 1 y DIN EN 60335.']
      ],
      specs: [
        ['Tensión de trabajo', '24 a 250 V AC / DC'],
        ['Potencia', 'Hasta 6500 W'],
        ['Espesor', '1.5 – 5 mm'],
        ['Dimensiones máximas', '2.5 m de largo × 1.0 m de ancho (2.5 m²)'],
        ['Radio de curvatura', 'R 50 mm'],
        ['Temperatura', 'Hasta 200 °C continuo, picos cortos de 250 °C'],
        ['Carga superficial máx.', '0.60 W/cm² autorregulada · 2 W/cm² con termopar y regulador'],
        ['Conductividad térmica (100 °C)', 'Aprox. 15 × 10⁻⁴ W/K·cm'],
        ['Rigidez dieléctrica', '12 kV/mm'],
        ['Tolerancia de potencia', '± 10%'],
        ['Conexiones', 'Cable de silicón vulcanizado; uni o bifilar, con tierra o conector plano'],
        ['Homologaciones', 'VDE 0700 parte 1, DIN EN 60335']
      ],
      table: {
        title: 'Carga superficial y temperatura (sin regulación)',
        note: 'Calentador plano en posición horizontal, ambiente de 20 °C sin viento, medición en estado estable.',
        cols: ['Carga superficial', 'Temperatura de superficie'],
        rows: [['0.05 W/cm²', '40 °C'], ['0.10 W/cm²', '70 °C'], ['0.20 W/cm²', '105 °C'], ['0.30 W/cm²', '135 °C'], ['0.40 W/cm²', '164 °C'], ['0.50 W/cm²', '188 °C'], ['0.60 W/cm²', '210 °C'], ['0.80 W/cm²', '247 °C'], ['1.00 W/cm²', '270 °C']]
      },
      apps: [
        ['Calentadores de tambor', 'Adhesivos, ceras, alquitrán y aceites.'],
        ['Tanques y tuberías', 'Mantenimiento de temperatura.'],
        ['Superficies irregulares', 'Montaje adhesivo o vulcanizado.'],
        ['Protección anticongelante', 'Equipos en climas fríos.']
      ]
    },
    {
      id: 'resistencia-tipo-cable', cat: 'res', cats: ['res'],
      name: 'Resistencia tipo cable',
      short: 'Cables calefactores autorregulables, de potencia constante y en serie.',
      badge: 'Hasta 425 °C',
      chips: ['12–1000 V', 'Hasta 200 W/m', 'Autorregulable'],
      search: 'cable calefactor autorregulable potencia constante serie anticongelante traza tuberia freezstop powerheat',
      desc: 'Cables calefactores para protección contra congelamiento y mantenimiento de temperatura en tuberías y equipos. Disponibles en tres tecnologías: autorregulables, de potencia constante (se cortan a la medida) y de resistencia en serie, diseñados de forma individual.',
      photos: photos('cable', 3),
      kpis: [['425 °C', 'temperatura máxima'], ['200 W/m', 'salida máxima'], ['1000 V', 'tensión máxima']],
      features: [
        ['Autorregulable', 'Ajusta su potencia a la temperatura: seguro y eficiente.'],
        ['Potencia constante', 'Se corta a la medida en obra.'],
        ['En serie', 'Diseño individual para tramos largos y trifásicos.'],
        ['Para cualquier clima', 'Protección contra congelamiento y deshielo.']
      ],
      specs: [
        ['Tecnologías', 'Autorregulable, potencia constante y en serie'],
        ['Tensión', '12 a 1000 V (serie: hasta 1000 V trifásico)'],
        ['Temperatura soportada', 'Hasta 425 °C (potencia constante)'],
        ['Salida', 'Hasta 200 W/m'],
        ['Control', 'Termostático recomendado en potencia constante']
      ],
      table: {
        title: 'Tecnologías disponibles',
        cols: ['Tipo', 'Uso principal', 'Tensión', 'Temperatura', 'Salida'],
        rows: [
          ['Autorregulable (FSS-FC)', 'Anticongelante y mantenimiento de temperatura', '12 – 1000 V', 'Hasta 300 °C', 'Hasta 120 W/m'],
          ['Potencia constante (HTA)', 'Corte a medida en obra', '12 – 1000 V', 'Hasta 425 °C', 'Hasta 200 W/m'],
          ['En serie (HTS3F-CS)', 'Tramos largos, diseño individual', 'Hasta 1000 V, 3 fases', 'Hasta 230 °C', '60 W/m']
        ]
      },
      apps: [
        ['Tuberías', 'Trazado eléctrico y mantenimiento de temperatura.'],
        ['Anticongelante', 'Equipos en exteriores y climas fríos.'],
        ['Tanques', 'Mantenimiento de fluidos a temperatura.'],
        ['Procesos químicos', 'Líneas con fluidos viscosos.']
      ]
    },

    /* ===== Sensores ===== */
    {
      id: 'termopares', cat: 'sen', cats: ['sen', 'colada'],
      name: 'Termopares',
      short: 'Gran variedad de modelos y tamaños, con aislamiento mineral y norma ASTM.',
      badge: 'Norma ASTM',
      chips: ['Aislamiento mineral', 'Alta temperatura', 'ASTM'],
      search: 'termopar termopares termocupla sensor temperatura tipo j k aislamiento mineral astm',
      desc: 'Fabricamos termopares en una gran variedad de modelos y tamaños: metal forrado con aislamiento mineral, metales comunes, de alta temperatura, con unión a tierra, sin conexión a tierra y expuesta. Los modelos con aislante de fibra de vidrio miden temperaturas muy altas en operación continua.',
      photos: photos('termopar', 3),
      kpis: [['ASTM', 'control de calidad'], ['3 tipos', 'de unión'], ['A medida', 'modelos y tamaños']],
      features: [
        ['Variedad de construcciones', 'Aislamiento mineral, metales comunes o alta temperatura.'],
        ['Tipos de unión', 'A tierra, sin conexión a tierra o expuesta.'],
        ['Operación continua', 'Fibra de vidrio para temperaturas muy altas.'],
        ['Calidad verificada', 'Controles que aseguran cumplimiento ASTM.']
      ],
      specs: [
        ['Construcción', 'Metal forrado con aislamiento mineral, metales comunes o alta temperatura'],
        ['Unión', 'A tierra, sin conexión a tierra o expuesta'],
        ['Aislante', 'Fibra de vidrio para alta temperatura en operación continua'],
        ['Norma', 'ASTM'],
        ['Modelos y tamaños', 'Gran variedad, a medida']
      ],
      apps: [
        ['Colada caliente', 'Medición en boquillas y distribuidores.'],
        ['Inyección y extrusión', 'Control de zonas de calentamiento.'],
        ['Hornos', 'Medición de alta temperatura.'],
        ['Procesos generales', 'Monitoreo de temperatura industrial.']
      ]
    },
    {
      id: 'termoresistencias-rtd', cat: 'sen', cats: ['sen'],
      name: "Termorresistencias RTD's",
      short: 'Los sensores de temperatura más precisos, fabricados según tu especificación.',
      badge: 'Alta precisión',
      chips: ['RTD', 'Cabezal', 'A medida'],
      search: 'rtd termoresistencia pt100 sensor temperatura precision cabezal',
      desc: "Los sensores tipo RTD's son los más precisos gracias a los materiales con que se fabrican y al cumplimiento de los más altos estándares de calidad. Se fabrican de forma personalizada según tus especificaciones y exigencias.",
      photos: photos('rtd', 3),
      kpis: [['Máxima', 'precisión de medición'], ['Cabezal', 'de conexión'], ['A medida', 'longitud y montaje']],
      features: [
        ['Alta precisión', 'La opción más exacta para medir temperatura.'],
        ['Materiales de calidad', 'Fabricación bajo los más altos estándares.'],
        ['Personalizados', 'Longitud, diámetro y montaje según tu proceso.'],
        ['Cabezal de conexión', 'Instalación robusta en campo.']
      ],
      specs: [
        ['Tipo', "Termorresistencia (RTD's)"],
        ['Precisión', 'Alta'],
        ['Fabricación', 'Personalizada, según especificación'],
        ['Conexión', 'Cabezal de conexión']
      ],
      apps: [
        ['Control de procesos', 'Donde la precisión es crítica.'],
        ['Industria alimentaria', 'Medición confiable y repetible.'],
        ['Laboratorio', 'Mediciones de referencia.'],
        ['Equipos térmicos', 'Retroalimentación para controladores.']
      ]
    },

    /* ===== Accesorios ===== */
    {
      id: 'cables-recubrimientos', cat: 'acc', cats: ['acc'],
      name: 'Cables y recubrimientos',
      short: 'Cables de alta temperatura de silicón, níquel y fibra de vidrio para resistencias.',
      badge: 'Hasta 500 °C',
      chips: ['Silicón', 'Níquel', 'PTFE · Fibra de vidrio'],
      search: 'cable alta temperatura silicon niquel fibra de vidrio ptfe ehvm eh3v recubrimiento electroglass accesorios',
      desc: 'Además de los cables tradicionales de caucho de silicón con conductor de cobre, ofrecemos cables de níquel y cobre niquelado, cables compensados para termopar y para resistencias térmicas, con clases de aislamiento B a C. Recubrimientos de PTFE, fibra de vidrio y Electroglass para cada aplicación.',
      photos: photos('cables', 3),
      kpis: [['500 °C', 'temperatura de trabajo'], ['2.5 kV', 'tensión de prueba'], ['B a C', 'clases de aislamiento']],
      features: [
        ['Conductores para alta temperatura', 'Cobre niquelado o níquel 99.2% hasta 600 °C.'],
        ['Recubrimientos a elegir', 'Cinta de PTFE, espiral o trenza de fibra de vidrio impregnada.'],
        ['Excelente resistencia a la llama', 'Autoextinguibles, prácticamente no inflamables.'],
        ['Colores a pedido', 'Blanco, amarillo, rojo, verde/amarillo, café y combinaciones.']
      ],
      specs: [
        ['Conductores', 'Cobre, cobre niquelado o níquel 99.2%'],
        ['Aislamientos', 'Silicón, cinta de PTFE, mica, fibra de vidrio, Electroglass'],
        ['Clases de aislamiento', 'B a C'],
        ['Tipos especiales', 'Compensados para termopar y para resistencias térmicas'],
        ['Tensión nominal', '300/500 V']
      ],
      table: {
        title: 'Modelos',
        cols: ['Modelo', 'Temp. de trabajo', 'Picos', 'Tensión de prueba', 'Color estándar'],
        rows: [
          ['Monoconductor de silicón', '−60 a 320 °C', '350 °C', '2000 V', 'Café'],
          ['EHVM', '−60 a 500 °C', '700 °C', '2500 V', 'Blanco'],
          ['Recubrimiento Electroglass', '−60 a 220 °C', '250 °C', '2 kV', 'Rojo ladrillo'],
          ['EH3V', '−60 a 220 °C', '250 °C', '3 – 4 kV', 'Rojo ladrillo']
        ]
      },
      apps: [
        ['Resistencias eléctricas', 'Salidas de cartuchos, bandas y nozzles.'],
        ['Inyección de plástico', 'Cableado de moldes y canales calientes.'],
        ['Hornos', 'Conexiones expuestas a alta temperatura.'],
        ['Electrodomésticos y transporte', 'Industria naval, aeronáutica y ferroviaria.']
      ]
    }
  ];

  return { company: company, offices: offices, world: world, distributors: distributors, cats: cats, products: products };
})();
