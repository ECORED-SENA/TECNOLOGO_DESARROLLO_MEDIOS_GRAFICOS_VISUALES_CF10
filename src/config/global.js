export default {
  global: {
    componenteFormativo: 'Manipulación de imágenes digitalizadas',
    descripcionCurso:
      'Las innovaciones tecnológicas siempre traen nuevos retos y fuertes cambios, la adaptación a estos cambios son cruciales y las nuevas formas de comunicación sugieren adaptaciones. Aprender acerca del diseño, la manipulación de imágenes digitalizadas en softwares especializados es clave para el desarrollo de proyectos como las aplicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
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
        titulo: '<i>Software</i> de retoque de imágenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Interfaz de usuario y herramientas	',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Espacio y área de trabajo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modos de color y su aplicación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Ajustes y corrección de color',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Monocromo, duotono y tritono',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Dimensiones, resolución y tamaño',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Herramientas de corrección y retoque',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Selección y máscaras',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Coloración y filtros',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Herramientas de dibujo',
            hash: 't_1_10',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plataformas de apps',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<i>Software</i> de revelado y tratamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: ' Introducción y características',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Interfaz de usuario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Espacio de trabajo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Biblioteca y revelado',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Presentación',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Edición y composición avanzada de imágenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fotomontaje',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Efectos y retoque especiales',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
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
        'Capriotti, P. (2009). <i>Branding</i> corporativo. Fundamentos para la gestión estratégica de la identidad corporativa. Colección de Libros de la Empresa.',
      link: 'http://www.analisisdemedios.com/branding/BrandingCorporativo.pdf',
    },
    {
      referencia:
        'Fernández, F. (2012). Imágenes con 1, 2 y 3 puntos de fuga. Dibujando. ',
      link:
        'https://dibujando.net/tutorial/perspectiva/imagenes-con-1-2-y-hasta-3-puntos-de-fuga-32718',
    },
    {
      referencia:
        'García, H. (2017). Ilustración publicitaria. Ilustrando en la escuela de arte. ',
      link:
        'http://ilustrandoenlaescueladearte.blogspot.com/2014/10/ilustracion-publicitaria.html',
    },
    {
      referencia:
        'Menza, A., Sierra, E. y Sánchez, W. (2016). La ilustración: dilucidación y proceso creativo. Revista KEPES, 13(13), p. 265-296.',
      link: 'http://vip.ucaldas.edu.co/kepes/downloads/Revista13_12.pdf',
    },
    {
      referencia:
        'Moreno, J. (2021). ¿Cómo crear un manual de identidad corporativa paso a paso? HubSpot. ',
      link:
        'https://blog.hubspot.es/marketing/branding-e-identidad-corporativa-guias-de-estilo',
    },
    {
      referencia: 'Sosa, A. (2020). Tipos de <i>Branding</i>. Grupo Endor.',
      link: 'https://www.grupoendor.com/tipos-de-branding/',
    },
  ],
  glosario: [
    {
      termino: 'Análoga',
      significado: 'que tiene analogía con algo.',
    },
    {
      termino: '<i>Branding</i>',
      significado:
        'hace referencia al proceso para construir y gestionar una marca, se vincula en forma directa o indirecta al nombre y/o símbolo (logotipo) que la identifican, la hacen única y competitiva.',
    },
    {
      termino: 'Editorial',
      significado:
        'corresponde a un artículo que expresa la opinión sobre un tema determinado, generalmente de interés público, a través de un medio de comunicación como el periódico o la revista',
    },
    {
      termino: 'Exponencial',
      significado:
        'relativo al crecimiento, que se incrementa cada vez más rápido.',
    },
    {
      termino: 'Marca',
      significado:
        'se entiende como una identificación comercial, conformada por atributos y valores que la hacen única.',
    },
    {
      termino: 'Pantone',
      significado:
        '“Es un sistema de identificación de colores de impresión creado por la empresa Pantone”. Izquierdo, T. (2019). Diseño gráfico y <i>web</i>.',
    },
    {
      termino: 'Publicidad',
      significado:
        'es una forma de comunicación con el propósito de presentar, divulgar o promocionar productos o servicios.',
    },
  ],
  complementario: [
    {
      texto:
        'Capriotti, P. (2009). <i>Branding</i> corporativo. Fundamentos para la gestión estratégica de la identidad corporativa. Colección de Libros de la Empresa.',
      tipo: 'PDF',
      descarga: '/downloads/BrandingCorporativo.pdf',
    },
    {
      texto:
        'Notodoanimacion. (2020). Cómo Diseñar Personajes NIVEL DIOS (2 HORAS) Curso de Diseño y Creación de Personajes GRATIS [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QXEoH4AsnUE',
    },
    {
      texto:
        'Barba Batel. (2020). Tutorial básico de luces y sombras en el dibujo artístico [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ma8dsEsOh34',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González ',
        cargo: 'Instructor experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Eduardo José Velasco',
        cargo: 'Instructor experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisor metodológico y pedagógico',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
