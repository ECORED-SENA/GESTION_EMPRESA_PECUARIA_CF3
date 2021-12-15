export default {
  global: {
    componenteFormativo: 'Requerimientos y necesidades en la empresa pecuaria',
    descripcionCurso:
      'La construcción de empresa es la invitación que se tiene para la reactivación económica global que se busca en la actualidad y para ello se requiere saber todo el programa y requerimiento para la creación de estas entidades comerciales. Este componente formativo trabaja los requerimientos y la normativa para la generación de una persona jurídica en Colombia desde la óptica de la empresa pecuaria.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Recursos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Planeación y presupuesto',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Seguridad industrial y salud ocupacional',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Etapas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Producto',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Plan de Mercadeo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Elementos del costo',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Clasificación',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Cálculo',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Órdenes de producción',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  icono: 'fas fa-sitemap',
      //  titulo: 'Sintesis',
      //  nombreRuta: 'sintesis',
      //},
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 410 de 1971 [Presidencia de la República]. Por el cual se expide el Código de Comercio. Marzo 27 de 1971. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Decreto 957 de 2019 [Ministerio de Comercio, Industria y Turismo]. Por el cual se adiciona el capítulo 13 al Título 1 de la Parte 2 del Libro 2 del Decreto 1074 de 2015, Decreto Único del Sector Comercio, Industria y Turismo. Junio 5 de 2019. ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia:
        'Decreto ley 3743 de 1951. [Presidencia de la República]. Por el cual se expide el Código Sustantivo del Trabajo. Diciembre 20 de 1950. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Guarnizo, F. C. y Cárdenas, S. M. (2015). Costos por órdenes de producción y por procesos. La Salle. ',
      link:
        'https://es.scribd.com/book/485288049/Costos-por-ordenes-de-produccion-y-por-procesos',
    },
    {
      referencia:
        'Ministerio del trabajo (2019). Cotización a la Seguridad Social – Aportes. ',
      link:
        'https://www.mintrabajo.gov.co/empleo-y-pensiones/empleo/subdireccion-de-formalizacion-y-proteccion-del-empleo/formalizacion-laboral/cotizacion-a-la-seguridad-social-aportes',
    },
    {
      referencia:
        'Ministerio del trabajo (2019). Implementación de los sistemas de gestión de seguridad y salud en el trabajo al año 2020. ',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo/implementacion-de-los-sistemas-de-gestion-de-seguridad-y-salud-en-el-trabajo-al-ano-2020',
    },
    {
      referencia: 'Oliveros, R. (2016). Ms Excel 5 Fórmulas nómina completa. ',
      link: 'https://www.youtube.com/watch?v=KdZLNPyLGmk',
    },
    {
      referencia:
        'Planas F. E. (2018). Todo sobre la gestión de su empresa. Editorial de Vecchi. ',
      link:
        'https://es.scribd.com/read/388236109/Todo-sobre-la-gestion-de-su-empresa',
    },
    {
      referencia:
        'Rincón C. y Narváez J. (2017) Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL. Ediciones de la U. ',
      link:
        'https://es.scribd.com/read/436221926/Presupuestos-Bajo-normas-internacionales-de-informacion-financiera-y-taxonomia-XBRL',
    },
  ],
  glosario: [
    {
      termino: 'Persona natural',
      significado: 'Individuo de la raza humana con derechos y obligaciones.',
    },
    {
      termino: 'Empresa',
      significado:
        'Sistema de organización social para generar valor económico o prestar un servicio a la comunidad.',
    },
    {
      termino: 'Excedentes/Utilidades',
      significado:
        'Beneficio económico resultante al tomar los ingresos y deducirle los costos y gastos.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Plan diseñado para ejecutar acciones y alcanzar objetivos, enmarcado en unos parámetros definidos por los directivos.',
    },
    {
      termino: 'Persona natural',
      significado: 'Individuo de la raza humana con derechos y obligaciones.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Figura jurídica compuesta por una o más personas naturales con identidad propia, pero sin la capacidad de actuar por sí misma. Es diferente a todas las personas que la componen, y requiere de un representante legal para actuar.',
    },
    {
      termino: 'Erogación',
      significado: 'Disponer o hacer uso de recursos.',
    },
    {
      termino: 'Ciclo operativo',
      significado:
        'Proceso que abarca todas las etapas desde la compra de materia prima hasta la venta del producto terminado.',
    },
    {
      termino: 'Objeto social',
      significado:
        'Labor para la cual fue concebida una empresa, incluye todas las actividades que se van a ejecutar de manera recurrente.',
    },
    {
      termino: 'Productos en proceso',
      significado:
        'Producto en estado de transformación. Es la etapa intermedia entre la materia prima y el producto terminado disponible para la venta.',
    },
    {
      termino: 'Prestación social',
      significado:
        'Beneficios económicos en dinero o en especie para el trabajador. No es retributivo de los servicios prestados, dado que surgen por el simple hecho de existir una relación laboral.',
    },
    {
      termino: 'Seguridad social',
      significado:
        'Sistema de entidades que garantizan la prevención de la salud y capacidad laboral de los empleados. Se compone por los servicios de salud, pensión y riesgos laborales.',
    },
  ],
  complementario: [
    {
      texto:
        'Perez A. (2019). Plan de producción de una empresa: el pilar de toda buena gestión corporativa.',
      tipo: 'Artículo web',
      link:
        'https://www.obsbusiness.school/blog/plan-de-produccion-de-una-empresa-el-pilar-de-toda-buena-gestion-corporativa',
    },
    {
      texto:
        'Padilla F. (2016). Costos por órdenes de producción [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xQG946KNQvg',
    },
    {
      texto:
        'Oliveros R. (2016). Ms Excel 5 Fórmulas nómina completa [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KdZLNPyLGmk',
    },
    {
      texto:
        'VideoTips Docentes (2015). Costos I - Costos indirectos de fabricación [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oGrkHeP5pY4',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Avilan Lozano',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la granja - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro para la industria de la comunicación gráfica',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la industria de la comunicación gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro industrial del diseño y la manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
