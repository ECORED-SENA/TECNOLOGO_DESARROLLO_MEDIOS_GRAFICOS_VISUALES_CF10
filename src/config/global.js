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
            titulo: 'Monocromo, duotono, tritono, cuatritono',
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
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'síntesis',
      },
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
      referencia: 'Adobe. (2020). Rasterizado y vectorizado. ',
      link:
        'https://helpx.adobe.com/es/photoshop-elements/key-concepts/raster-vector.html',
    },
    {
      referencia: 'Álvarez, M. (2019). Herramientas principales de Photoshop.',
      link:
        'https://desarrolloweb.com/articulos/herrameintas-principales-photoshop.html',
    },
    {
      referencia: 'EcuRed. (2020). Adobe Photoshop Lightroom.',
      link: 'https://www.ecured.cu/Adobe_Photoshop_Lightroom',
    },
    {
      referencia: 'Fotoversia (2019). Interfaz de Photoshop.',
      link: 'https://fotoversia.com/la-interfaz-de-photoshop',
    },
    {
      referencia:
        'González, A. (2016) Photoshop. Los 14 retoques más fáciles que te van a dar mejor resultado para editar fotos.',
      link:
        'https://www.xataka.com/fotografia-y-video/los-14-retoques-mas-faciles-de-photoshop-que-te-van-a-dar-mejor-resultado-para-editar-fotos',
    },
    {
      referencia:
        'Gomez, F. (2015) Técnicas avanzadas de retoque fotográfico profesional.',
      link:
        'https://www.deustoformacion.com/blog/diseno-produccion-audiovisual/tecnicas-avanzadas-retoque-fotografico-profesional',
    },
    {
      referencia: 'Ionos. (2021). Qué es un píxel.',
      link:
        'https://www.ionos.es/digitalguide/paginas-web/diseno-web/que-es-un-pixel/',
    },
    {
      referencia:
        'Lana, J. (2021). Puedes crear imágenes surrealistas mediante el fotomontaje digital.',
      link:
        'https://www.adobe.com/la/creativecloud/photography/discover/photomontage.html',
    },
    {
      referencia: 'Lucidchart. (2021). Qué es un wireframe para un sitio web.',
      link:
        'https://www.lucidchart.com/pages/es/que-es-un-wireframe-para-un-sitio-web',
    },
    {
      referencia: 'Mora, J. (2020). La interfaz de Photoshop.',
      link:
        'https://www.fotoaprendizaje.com/borrador-automaticoelementos-mas-importantes-de-photoshop/#Panel_de_herramientas',
    },
    {
      referencia: 'Ojeda, J. (2016). Fotografía para principiantes.',
      link:
        'http://fotografiaparaprincipianntes.blogspot.com/2016/06/las-mascaras-en-photoshop.html',
    },
    {
      referencia: 'Pérez, J y Merino, M. (2014). Interfaz.',
      link: 'https://definicion.de/interfaz/',
    },
    {
      referencia: 'Significados. (2015). Significado de interfaz.',
      link: 'https://www.significados.com/interfaz/',
    },
    {
      referencia: 'Sistemas.com. (2021). Definición de aplicación.',
      link: 'https://sistemas.com/aplicacion.php',
    },
    {
      referencia: 'Workana (2020). Cómo crear una app: alcance del proyecto.',
      link:
        'https://blog.workana.com/emprendimiento/como-crear-una-app-alcance-del-proyecto/',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación ',
      significado:
        'también llamada app es simplemente un programa informático creado para llevar a cabo o facilitar una tarea en un dispositivo informático (Sistemas.com, 2021).',
    },
    {
      termino: 'Interfaz',
      significado:
        'término que procede del vocablo inglés interfaz. En informática, esta noción sirve para señalar a la conexión que se da de manera física y a nivel de utilidad entre dispositivos o sistemas (Pérez y Merino, 2011, actualizado 2014).',
    },
    {
      termino: 'Lightroom ',
      significado:
        'programa que hace parte de la suite de Adobe Company creado para el tratamiento de imágenes digitales, con este programa se logra realizar los procesos de revelado, tratamiento y flujo de trabajo de imágenes (Adobe Company, 2021).',
    },
    {
      termino: 'Pixel',
      significado:
        'o px, para abreviar, es el elemento más pequeño de una imagen reproducida digitalmente. En un monitor o en la pantalla de un teléfono móvil se suelen alinear varios píxeles en una trama. La combinación de varios píxeles constituye una imagen rasterizada (Ionos, 2021).',
    },
    {
      termino: '<i>Wireframe</i>',
      significado:
        'en un principio, el término <i>wireframe</i> significaba una representación visual de objetos tridimensionales, como aquellos empleados en el desarrollo y diseño de productos.',
    },
  ],
  complementario: [
    {
      texto: 'Garrido, J. (2013). TFC Desarrollo de aplicaciones móviles. ',
      tipo: 'PDF',
      descarga: '/downloads/jugarridocoTFC0113memoria.pdf',
    },
    {
      texto:
        'Adobe Company. (2021). Puedes crear imágenes surrealistas mediante el fotomontaje digital.',
      tipo: 'Enlace',
      link:
        'https://www.adobe.com/la/creativecloud/photography/discover/photomontage.html',
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
        nombre: 'Juan Manuel Reyes Ramírez ',
        cargo: 'Instructor experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
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
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
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
