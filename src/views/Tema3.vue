<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 <i>Software</i> de revelado y tratamiento
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Adobe Photoshop Lightroom, es un programa de fotografía desarrollado por Adobe Systems para Mac OS X y Microsoft Windows, diseñado para ayudar a fotógrafos profesionales y aficionados en el tratamiento de imágenes digitales y trabajos de posproducción. No se trata de un navegador de archivos como Adobe Bridge, sino más bien de una organización de imágenes la cual ayuda a visualizar, editar y gestionar fotos digitales (incluidas las copias de seguridad en DVD).
          br
          br
          |Lightroom es un programa que hace parte de la suite de Adobe Company, creado para el tratamiento de imágenes digitales, con este programa se logra realizar los procesos de revelado, tratamiento y flujo de trabajo de imágenes. Al igual que su hermano Photoshop, Lightroom tiene una interfaz muy fácil de utilizar y también se puede configurar a criterio del usuario.  
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/51.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Tiene tres versiones que son las siguientes:
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.h-100.hover.p-5
          .tarjeta-numerada__numero
            .h2 1
          h4 Lightroom Classic
          p Es la adaptación para guardar las fotografías en la computadora, es la versión completa del programa.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.h-100.hover.p-5
          .tarjeta-numerada__numero
            .h2 2
          h4 Lightroom CC
          p Es una versión nueva que está basada en el concepto de guardar y almacenar en la nube, Lightroom no cuenta con todas las funciones que posee Lightroom Classic.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.h-100.hover.p-5
          .tarjeta-numerada__numero
            .h2 3
          h4 Lightroom móvil
          p Como su nombre lo identifica es una aplicación desarrollada para edición de imágenes para móviles. Photoshop es un programa independiente, pero se integra con Lightroom.
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Introducción y características
    p.mb-5 <b>Lightroom</b>, en comparación con el programa de edición de imágenes como Photoshop Lightroom, tiene dentro de sus principales ventajas su fácil manejo, una interfaz muy amigable y fácil de utilizar, características importantes como es la de que ayuda a crear flujos de trabajos eficientes; realiza funciones de edición no destructivas, ya que su procedimiento es a partir de parámetros, lo que permite crear y guardar ajustes que posteriormente se pueden aplicar fácilmente; es decir, los ajustes realizados se guardan como valores numéricos en el catálogo y en ningún momento se modifica la imagen, es un programa óptimo para organización de imágenes, con la opción de ajustes preestablecidos, tiene la función de trabajar en volúmenes de imágenes; finalmente, también tiene compatibilidad con Photoshop.
      br
      br
      b A continuación, algunas de sus funciones: 
    .row.mb-5.justify-content-center
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--4-claro2")
          .row(titulo="Biblioteca").px-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p La finalidad de este panel es organizar las imágenes y colecciones donde se puede otorgar atributos y metadatos.
          .row(titulo="Revelar").px-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p El proceso de revelado de Lightroom realiza edición no destructiva de archivos RAW, DNG, TIFF, JPG. La función revelar está diseñada para mejorar la calidad de la fotografía digital a partir de cambios en los balances de blancos, mejora de tonos, balance de color, eliminación de efectos de ojos rojos, reducción de ruido, aumento de contraste, funciones para enderezar imágenes, conversión de imágenes en blanco y negro. Hay que diferenciar que Lightroom no está diseñado para modificación de imágenes como dibujos, gráficas, etc.
          .row(titulo="Mapa").px-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Implementado a partir de la versión Lightroom 4, sirve para la organización de fotografías basadas en datos georeferenciadas y la captura de metadatos de localización a partir de los datos de GPS.
          .row(titulo="Libro").px-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Esta función ayuda a la creación de libros de fotografías y a exportar en formato PDF, o también enviarlo para procesos de impresión para recibirlo como libro en papel.
          .row(titulo="Proyección").px-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Permite realizar proyecciones de cualquier número de imágenes, videos, con funciones para añadir música, fondos y efectos.
          .row(titulo="Impresión").px-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Aquí se permite definir varias opciones de impresión.
          .row(titulo="<i>Web</i>").px-5.align-items-center
            .col-md-2
              figure
                img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Ayuda a la creación automática de galerías de fotos para <i>web</i>. 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Interfaz de usuario
    p.mb-5 La interfaz de Lightroom tiene una forma especial en cuanto a su distribución de paneles, muy fácil de utilizar para la optimización del flujo de trabajo, para cada fase del proceso se encuentran las herramientas que se van a necesitar de manera muy simple. Se compone de siete módulos que son: 
    .contenedor-tarjetas.mb-5.d-flex.justify-content-center.flex-wrap
      .tarjetas-icono(style='width: 147px;').mx-2
        .tarjetas-icono__img.bg--2.hover-bg--4.p-4.mb-2(style='border-radius: 30px;')
          img(src='@/assets/curso/53.svg', alt='Texto que describa la imagen' style='width: 91px').m-auto
        .tarjetas-icono__text
          h5.text-center Biblioteca
      .tarjetas-icono(style='width: 147px;').mx-2
        .tarjetas-icono__img.bg--2.hover-bg--4.p-4.mb-2(style='border-radius: 30px;')
          img(src='@/assets/curso/54.svg', alt='Texto que describa la imagen' style='width: 91px').m-auto
        .tarjetas-icono__text
          h5.text-center Revelar
      .tarjetas-icono(style='width: 147px;').mx-2
        .tarjetas-icono__img.bg--2.hover-bg--4.p-4.mb-2(style='border-radius: 30px;')
          img(src='@/assets/curso/55.svg', alt='Texto que describa la imagen' style='width: 91px').m-auto
        .tarjetas-icono__text
          h5.text-center Mapa
      .tarjetas-icono(style='width: 147px;').mx-2
        .tarjetas-icono__img.bg--2.hover-bg--4.p-4.mb-2(style='border-radius: 30px;')
          img(src='@/assets/curso/56.svg', alt='Texto que describa la imagen' style='width: 91px').m-auto
        .tarjetas-icono__text
          h5.text-center Libro
      .tarjetas-icono(style='width: 147px;').mx-2
        .tarjetas-icono__img.bg--2.hover-bg--4.p-4.mb-2(style='border-radius: 30px;')
          img(src='@/assets/curso/57.svg', alt='Texto que describa la imagen' style='width: 91px').m-auto
        .tarjetas-icono__text
          h5.text-center Proyecciones
      .tarjetas-icono(style='width: 147px;').mx-2
        .tarjetas-icono__img.bg--2.hover-bg--4.p-4.mb-2(style='border-radius: 30px;')
          img(src='@/assets/curso/58.svg', alt='Texto que describa la imagen' style='width: 91px').m-auto
        .tarjetas-icono__text
          h5.text-center Imprimir
      .tarjetas-icono(style='width: 147px;').mx-2
        .tarjetas-icono__img.bg--2.hover-bg--4.p-4.mb-2(style='border-radius: 30px;')
          img(src='@/assets/curso/59.svg', alt='Texto que describa la imagen' style='width: 91px').m-auto
        .tarjetas-icono__text
          h5.text-center <i>Web</i>
    p.mb-5 La interfaz de usuario de cada uno de estos módulos está siempre organizada por cinco paneles, lo que se podrán comprender mucho mejor a través del siguiente video:
    .bg--2-claro2.position-relative.p-3.mb-5
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 132px ")
        .row.justify-content-end 
          .col-lg-10
            h5 Interfaz Lightroom
            p A continuación, observe el video <b>tutorial Interfaz de Lightroom</b>, para una mejor contextualización de su importancia, sus módulos y paneles, entre otros elementos.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ymSqw_W2vzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Espacio de trabajo
    p.mb-5 El espacio de trabajo de <b>Lightroom Classic</b>, se puede decir que es un grupo de herramientas especializadas para el tratamiento de fotografías a nivel profesional y que se organizan en módulos. Cada módulo describe una etapa concreta en el desarrollo de flujo en la fotografía. En el módulo biblioteca se realiza la importación de las imágenes, así mismo se organizan, se comparan y seleccionan las fotografías. Ya en el módulo revelar se hacen ajustes de color y tonos o también realizar funciones de ajustes creativos. Siendo así, lo invitamos a conocer los paneles desplegables:
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/60.jpg', alt='Texto que describa la imagen')

      .tarjeta.bg--2.p-3(x="15%" y="3%" numero="")
        .h5.mb-0 Placa de identidad
      .tarjeta.bg--2.p-3(x="45%" y="10%" numero="")
        .h5.mb-0 Barra filtro de biblioteca
      .tarjeta.bg--2.p-3(x="86%" y="6%" numero="")
        .h5.mb-0 Selector de módulos
      .tarjeta.bg--2.p-3(x="47%" y="28%" numero="")
        .h5.mb-0 Área de visualización de imágenes
      .tarjeta.bg--2.p-3(x="20%" y="40%" numero="")
        .h5.mb-0 Paneles para trabajar con las fotografías de origen. 
      .tarjeta.bg--2.p-3(x="80%" y="40%" numero="")
        .h5.mb-0 Paneles para trabajar con metadatos y palabras clave y ajustar las imágenes. 
      .tarjeta.bg--2.p-3(x="10%" y="83%" numero="")
        .h5.mb-0 Tira de diapositivas
      .tarjeta.bg--2.p-3(x="80%" y="72%" numero="")
        .h5.mb-0 Barra de herramientas
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Administrar paneles y vista de la pantalla 
    p.mb-5 Se puede personalizar el espacio de trabajo de Lightroom Classic reorganizando el orden de los paneles del módulo revelar, mostrando solo los paneles que desee y/o ocultando algunos o todos los paneles para maximizar la visualización de las fotografías. 
      br
      br
      |A continuación, algunas explicaciones de utilizar este espacio de trabajo:
    .row.mb-5
      .col-lg-4.mb-3
        .tarjeta.bg--4-claro3.p-5.hover.h-100
          img(src='@/assets/curso/61.svg' style='width: 79px').mb-3
          h5 Abrir o cerrar un panel
          p Dar clic en el encabezado del panel. Para abrir o cerrar todos los paneles de un grupo, pulsar la tecla Ctrl (Windows) o Comando (Mac OS) y hacer clic en el nombre de un panel.
      .col-lg-4.mb-3
        .tarjeta.bg--2-claro3.p-5.hover.h-100
          img(src='@/assets/curso/61.svg' style='width: 79px').mb-3
          h5 Abrir o cerrar un panel cada vez
          p Hacer clic con el botón derecho del ratón (Windows) o pulse la tecla Control (Mac OS) y <b>dar clic en un encabezado del panel y seleccionar el modo Panel único</b>, o pulse Alt (Windows) u Opción (Mac OS) y dar clic en el encabezado del panel.
            br
            br
            |El modo Panel único se aplica independientemente a un conjunto de paneles.
            br
            br
            |El triángulo en el encabezado del panel es fijo cuando no está en modo panel único.
      .col-lg-4.mb-3
        .tarjeta.bg--3-claro3.p-5.hover.h-100
          img(src='@/assets/curso/61.svg' style='width: 79px').mb-3
          h5 Desplazarse por un grupo de paneles
          p Arrastrar la barra de desplazamiento o la rueda de desplazamiento del ratón.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Mostrar y/o ocultar grupos de paneles
    .row.justify-content-center.mb-5
      .col-lg-7 
        PasosA.color-acento-contenido.mb-5(tipo="n")
          div
            p Para mostrar y/o ocultar un solo grupo de paneles, dar clic en el icono para mostrar/ocultar el grupo de paneles. Un icono fijo indica que se está mostrando el grupo de paneles. 
              br
              br
              |La siguiente imagen es un ejemplo cómo ocultar o visualizar los paneles, cada opción de herramientas tiene a la derecha un triángulo donde se despliegan las opciones; así mismo, funciona para cada herramienta, en este caso en el módulo revelado está habilitada la herramienta básica y sus funciones. 
            a.boton.color-secundario.indicador__container.rounded-pill(@click="modal1 = true")
              span.fw-bold Visualizar los paneles
              .indicador--click(v-if="mostrarIndicador")
          div
            p Para mostrar u ocultar ambos grupos de paneles laterales, seleccionar Ventana > Paneles > Conmutar paneles laterales, o pulsar la tecla Tabulador.  
          div
            p Para ocultar todos los paneles, incluidos los paneles laterales, la tira de diapositivas y el selector de módulos, seleccionar Ventana > Paneles > Conmutar todos los paneles, o pulsar Mayús-Tabulador.
            a.boton.color-secundario.indicador__container.rounded-pill(@click="modal2 = true")
              span.fw-bold Conmutar todos los paneles
              .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      img(src='@/assets/curso/62.png')

    ModalA(:abrir-modal.sync="modal2")
      img(src='@/assets/curso/63.png')
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Biblioteca y revelado
    p.mb-5 El módulo de biblioteca es crucial en el flujo de trabajo, pues es donde se organizan, ordenan, comparan y se clasifican las fotografías de catálogo; así como se puede observar en la siguiente imagen:
    .row.mb-5.justify-content-center(data-aos="zoom-in-down")
      .col-lg-10
        .imagen-adornos-flotantes
          img(src="@/assets/curso/64.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Lightroom permite organizar la visualización de las fotografías a criterio propio, simplemente en opciones de la vista de biblioteca se configura dicha visualización de imágenes en la lista de cuadrícula. Hay varias opciones de combinación de elementos para mostrar las fotografías, por ejemplo: tira en miniatura o información de la fotografía. En las siguientes imágenes se visualiza esta ruta: 
    .row.mb-5.justify-content-center(data-aos="zoom-in-down")
      .col-lg-10
        .imagen-adornos-flotantes
          img(src="@/assets/curso/65.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Dentro del menú de la biblioteca se encuentra:\
    .row.mb-5
      .col-md-4
        img(src="@/assets/curso/66.jpg" alt="Adornos flotantes")
      .col-md-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Selector de módulos.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Área de visualización de imágenes.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Barra filtro de biblioteca.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Placa de identidad.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Paneles para trabajar con las fotografías de origen.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Tira de diapositivas.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Barra de herramientas.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Paneles para trabajar con metadatos y palabras clave, y para ajustar las imágenes.
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Sincronizar.
    p.mb-5 A continuación, se detalla la manera de visualizar las fotografías en la biblioteca de Lightroom, las opciones que para esto brinda la herramienta y su modo de uso, esto es:
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Visualización de imágenes
    p.mb-5 En la visualización de imágenes el modo biblioteca cuenta con varias opciones para organizar las fotografías en diversas alternativas de tamaño para analizarlas entre sí. En el siguiente ejemplo gráfico se observa lo siguiente: en la imagen 1. En el menú superior en (vista) las opciones de visualización en este caso esta activada la opción cuadricula para visualizar las fotografías, estos cambios de visualización se pueden realizar por ruta rápida simplemente utilizando las letras del teclado para cada opción como se muestra en el recuadro amarillo en la figura 1. Mientras que en la figura 2 se cambió a la opción de visualización (comparar) simplemente oprimiendo la letra C.
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        .titulo-sexto.color-acento-botones.m-auto
          h5.text-center Figura 1
        .imagen-adornos-flotantes
          img(src="@/assets/curso/67.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-6(data-aos="fade-left")
        .titulo-sexto.color-acento-botones.m-auto
          h5.text-center Figura 2
        .imagen-adornos-flotantes
          img(src="@/assets/curso/68.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 2% ; top: ; bottom: 10% ; width: 90px ")
    p.mb-5 Es importante tener presente que en el módulo (biblioteca) hay una opción de revelado rápido como se observa en la siguiente imagen, esto es fundamental para evitar confusiones.
    .row.mb-5.justify-content-center
      .col-lg-8
        .imagen-adornos-flotantes
          img(src="@/assets/curso/69.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Revelado
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El panel revelado es donde se realizan las ediciones de las fotografías, en el panel de la izquierda, así como se observa en la imagen donde están resaltados en los recuadros rojos: Navegador, Ajustes preestablecidos, Instantáneas, Historial y colección, aquí es donde se guardan los cambios realizados en una o varias fotografías. A la derecha está el panel de herramientas y los paneles que se usan para los ajustes en general de la imagen tales como: Básicos, Curva de tonos, Color blanco y negro, Dividir tonos, Detalle, Correcciones de lente, Efectos y Calibración de cámara. 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/70.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 A continuación, se podrá revisar de manera más detallada la descripción general del módulo revelado:
    #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 1')
      .carousel-inner
        .row.justify-content-center
          .col-lg-9
            .carousel-item.active
              .row.justify-content-center
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/71.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Panel histograma
                      p En el panel histograma del módulo Revelar podrá medir tonos de color y ajustar los tonos de las fotografías. La información adicional sobre el estado de previsualización inteligente de la fotografía aparece debajo del histograma/información EXIF/valores RGB, como se observa en la imagen. 
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/72.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Panel básico
                      p Este contiene las principales herramientas para ajustar el equilibrio de blancos, la saturación del color y la escala de tonos de la fotografía.
            .carousel-item
              .row.justify-content-center
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/73.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Paneles curvas
                      p Los paneles curva de tonos y HSL/Color/Blanco y negro contienen herramientas para optimizar los ajustes de tonos y color. 
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/74.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Panel dividir tonos
                      p El panel dividir tonos de color en las imágenes realiza ajustes de tono, saturación, equilibrio. También se pueden hacer ajustes de sombras.
            .carousel-item
              .row.justify-content-center
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/75.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Panel detalle
                      p Este panel permite ajustar el enfoque y reducir el ruido.
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/76.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Panel correcciones
                      p Con el panel correcciones de lente se corrigen la aberración cromática y las viñetas de lente provocadas por la lente de la cámara.
            .carousel-item
              .row.justify-content-center
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/77.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Panel efectos
                      p Este permite aplicar una viñeta a una imagen recortada.
                .col-lg-6
                  .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
                    .indicador--hover(v-if="mostrarIndicador")
                    img(src="@/assets/curso/78.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
                    .tarjetas-text__contenido.px-5.pb-5.pt-3
                      h3 Panel calibración
                      p Aquí se realizan ajustes en los valores de calibración por defecto de la cámara.
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Presentación
    p.mb-5 El módulo de biblioteca es crucial en el flujo de trabajo, pues es donde se organizan, ordenan, comparan y se clasifican las fotografías de catálogo; así como se puede observar en la siguiente imaPara la organización de presentaciones en Lightroom, se realiza en el módulo proyecciones de diapositivas, aquí se pueden organizar las plantillas de composición, definir las transiciones y los ajustes de reproducción. En los paneles a la izquierda está la lista de plantillas y previsualizaciones de composiciones. En el espacio central en la vista del editor de diapositivas muestra las fotografías en la plantilla de diapositivas seleccionadas. En la siguiente figura se observa cómo se describen los paneles del módulo proyecciones:
    .row.mb-5.align-items-center
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/79.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-right")
        p.mb-3 A continuación, se indica una lista de herramientas que se pueden activar mediante atajos, basta con definir la letra de cada opción que se necesite y se abre rápidamente el panel de la opción.  
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span A
            | Vista del editor de diapositivas.
          li 
            .lista-ol--cuadro__vineta
              span B
            | Previsualización de plantilla.
          li 
            .lista-ol--cuadro__vineta
              span C 
            | Plantillas y colecciones de la proyección de diapositivas.
          li 
            .lista-ol--cuadro__vineta
              span D
            | Controles de reproducción.
          li 
            .lista-ol--cuadro__vineta
              span E
            | Herramientas rotar y añadir texto. 
          li 
            .lista-ol--cuadro__vineta
              span F
            | Paneles para ajustar las opciones de reproducción y composición.
    p.mb-5 En el panel izquierdo como se observa en la imagen, también brinda la posibilidad de incorporar archivos de música en formatos mp3, m4a m4b para las presentaciones en la proyección de diapositivas.









</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false, // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.modal-a__content
  background-color: #ffbe7b
</style>
