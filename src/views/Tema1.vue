<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <i>Software</i> de retoque de imágenes
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Photoshop es el nombre popular de un programa informático de edición de imágenes. Su nombre completo es Adobe Photoshop y está desarrollado por la empresa Adobe Systems Incorporated. Funciona en los sistemas operativos Apple Macintosh y Windows. El nombre comercial de este producto se puede traducir del inglés como “taller de fotos”; aunque existen otros programas similares como GIMP o PhotoPaint, en la cultura popular se utiliza esta palabra para referirse también al “retoque digital de una imagen".
          br
          br
          |De acuerdo con la definición de interfaz que da el portal <i>web</i> Significados (2015), se indica lo siguiente: 
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/0.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .row.mb-5.justify-content-center
      .col-lg-10
        .bg--1-claro.p-5.position-relative.hover.hover-flip
          p.text-center “Es la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro. En este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una interfaz”.
          .img(style=" position: absolute; bottom: -15%;  left: 0; width: 100%;  ")
            img(src="@/assets/curso/1.svg" alt="Adornos flotantes" style=" width: 70px").m-auto
    p.mb-5 Si bien es cierto que existen diversidad de programas para el manejo y el uso de ilustración digital, Adobe es una de las empresas más importantes y especializadas en programas de <i>software</i> de diseño que integra muchas herramientas enfocadas a la ilustración, el video, el arte y la fotografía, entre otros.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Interfaz de usuario y herramientas
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 La interfaz de Photoshop hace referencia a la primera visualización que aparece al abrir el programa que tiene por defecto una configuración de visualización, pero como muchos programas, el usuario puede configurar o determinar a criterio propio qué herramientas y paneles desea visualizar para su utilización.
          br
          br
          |La configuración de los paneles y herramientas es importante ya que permiten optimizar y mejorar el rendimiento de trabajo. La interfaz eficiente hace referencia a la forma en que el usuario interactúa con esta; finalmente, siempre será decisión del usuario como mejor se sienta manipulando o trabajando este programa.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/2.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 En la interfaz de Photoshop, se pueden visualizar seis áreas de información que son:
    .row
      .col-lg-4.mb-3
        .bg--4-claro.hover-perspective.p-3
          .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/3.svg" alt="Adornos flotantes" style=" width: 84px").me-3
            h5.mb-0 La barra de menús
      .col-lg-4.mb-3
        .bg--4-claro.hover-perspective.p-3
          .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/3.svg" alt="Adornos flotantes" style=" width: 84px").me-3
            h5.mb-0 Los paneles
      .col-lg-4.mb-3
        .bg--4-claro.hover-perspective.p-3
          .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/3.svg" alt="Adornos flotantes" style=" width: 84px").me-3
            h5.mb-0 La barra de estado
    .row
      .col-lg-4.mb-3
        .bg--4-claro.hover-perspective.p-3
          .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/3.svg" alt="Adornos flotantes" style=" width: 84px").me-3
            h5.mb-0 El lienzo
      .col-lg-4.mb-3
        .bg--4-claro.hover-perspective.p-3
          .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/3.svg" alt="Adornos flotantes" style=" width: 84px").me-3
            h5.mb-0 La barra de herramientas
      .col-lg-4.mb-5
        .bg--4-claro.hover-perspective.p-3
          .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/3.svg" alt="Adornos flotantes" style=" width: 84px").me-3
            h5.mb-0 La barra de opciones
    p.mb-5 Es importante revisar la visualización previa de Photoshop y sus herramientas, por lo que se invita a revisar el video que se describe a continuación así:
    .bg--2-claro2.position-relative.p-3.mb-5
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 132px ")
        .row.justify-content-end 
          .col-lg-10
            h5 Photoshop
            p A continuación, observe el video tutorial <b>Interfaz de Photoshop</b>, con el fin de que tenga una mayor contextualización de este tema.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4nH4L0G0ncA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Ahora, encontrará algunas de las herramientas importantes de Photoshop y sus funciones: 
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Herramienta capas
    p.mb-5 Las capas son un conjunto de opciones que contienen diferentes partes para conformar una imagen, una de las mejores opciones creadas por el <i>software</i>. Permite trabajar áreas diferentes de una imagen y apilarlas. Las capas son también fundamentales en Photoshop; todo se organiza en capas, que se pueden tratar de manera independiente. 
      br
      br
      |El hecho de trabajar con capas ofrece mucha versatilidad a los diseños, ya que puede aplicar efectos, retoques y transformaciones a cada capa de manera independiente. Ahora, se invita a ver el siguiente video, donde podrá observar de manera más práctica el uso de esta importante herramienta:
    .bg--2-claro2.position-relative.p-3.mb-5
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 132px ")
        .row.justify-content-end 
          .col-lg-10
            h5 Capas 
            p A continuación, observe el video <b>Capas</b>, con el fin de que tenga una mayor contextualización de la forma de utilización que esta herramienta le brinda.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LGnWfizDQ80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Herramienta pincel
    p.mb-5 Otra de las herramientas importantes para un diseñador, esta herramienta a su interior se subdivide en cuatro herramientas más que se exponen de manera más detallada en el video que sigue a continuación: 
    .bg--2-claro2.position-relative.p-3.mb-5
        img.position-absolute.d-none.d-lg-block(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 132px ")
        .row.justify-content-end 
          .col-lg-10
            h5 Pincel
            p Observe el video <b>Pincel</b>, con el fin de que tenga una mayor contextualización de la forma de utilización que esta herramienta le brinda.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kAvP-bzDmZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Espacio y área de trabajo
    p.mb-5 Al crear un documento en Photoshop, en lugar de comenzar con un lienzo en blanco, es posible elegir entre una gran variedad de plantillas, incluidas las de Adobe Stock. Las plantillas ofrecen recursos e ilustraciones en las que basarse para completar un proyecto. Para ver al detalle este importante tema, se sugiere revisar el siguiente video:         
    .bg--2-claro2.position-relative.p-3.mb-5
      img.position-absolute.d-none.d-lg-block(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 132px ")
      .row.justify-content-end 
        .col-lg-10
          h5 Espacio y área de trabajo
          p A continuación, observe el video tutorial para creación de documentos, con el fin de que tenga una mayor contextualización de este tema revíselo con atención y podrá observar cómo crear un documento y los numerosos ajustes que se pueden realizar en un documento en blanco en esta herramienta.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ymSqw_W2vzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Modos de color y su aplicación
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Cuando se habla de los modos de color se hace referencia a los diferentes parámetros de una imagen en relación con el número de canales de un modelo de color específico; dicho de otra manera, los modelos de color dependiendo su finalidad. Por ejemplo, si se requiere imprimir un poster, un catálogo o cualquier formato para impresión, se debe implementar el modo de color CMYK y para medios digitales se debe implementar el modelo de color RGB. A continuación, se podrá ampliar la información sobre la aplicación de los modos de color:
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/5.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")

    TabsB.mb-5
      .py-4.py-md-5(titulo="Modos de color " :icono="require('@/assets/curso/6.svg')")
        .h4 Modos de color y su aplicación
        p Cuando se habla de los modos de color se hace referencia a los diferentes parámetros de una imagen en relación con el número de canales de un modelo de color especifico, es decir, los modelos de color dependiendo su finalidad, por ejemplo si se debe implementar el modo de color CMYK para impresos, y para medios digitales el modelo de color RGB.
          br
          br
          | Los modelos de color son de gran utilidad, pues definen el color según cada dispositivo de salida, especialmente si son medios impresos o digitales; los modelos son una lista de colores estandarizados y codificados según sus características, esto permite que las fotografías e impresos no pierdan calidad ni cambien el color. 

        .row
          .col-md-5.mb-4.mb-md-0
            p Diferentes modos de color:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.bg--4
                  span 1
                p.mb-0  Modo <b>RGB</b> (millones de colores).
              li 
                .lista-ol--cuadro__vineta.bg--4
                  span 2
                p.mb-0  Modo <b>CMYK</b> (cuatricromía).
              li 
                .lista-ol--cuadro__vineta.bg--4
                  span 3
                p.mb-0  Modo <b>indexado</b> (256 colores).
              li 
                .lista-ol--cuadro__vineta.bg--4
                  span 4
                p.mb-0  Modo de <b>escala de grises</b> (256 grises).
              li 
                .lista-ol--cuadro__vineta.bg--4
                  span 5
                p.mb-0  Modo de <b>mapa de bits</b> (2 colores).
          .col-md-7
            .imagen-adornos-flotantes
              img(src="@/assets/curso/8.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Aplicación" :icono="require('@/assets/curso/39.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Aplicación
            p Para utilizar los diferentes modos de color en Photoshop se ingresa como se observa en la siguiente figura, en el menú superior en Imagen, Modo de color está la lista de opciones, y dependiendo del proyecto que se vaya a realizar se aplicará el modelo de color. Por ejemplo, si es una imagen para impresión se debe aplicar el modo de color CMYK. Dicho en otras palabras, es importante comprender la naturaleza de cada modelo de color para su implementación.
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/7.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Modos RGB" :icono="require('@/assets/curso/40.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Modo de color RGB
            p Los modelos de color  RGB, se implementan dependiendo el sistema utilizado; la implementación de 24 bits, limita a un rango de 256 x 256 x 256 x 16,7 millones de colores, lo que genera trabajar con espacios de color de alta gama, estos espacios se aplican a cualquier espacio de color basado en este modelo, pero se implementa en diferentes profundidades de bits.  Algunos espacios de color basados en RGB son, el sRGB, Adobe RGB y ProPhoto RGB. 
              br
              br
              |Este es uno de los más habituales actualmente, pensado principalmente para la edición de fotografías de forma profesional, por eso su nombre AdobeRGB, ya que fueron ellos los desarrolladores.
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/9.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Modos CMYK" :icono="require('@/assets/curso/41.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Modo de color CMYK
            p  El perfil de color CMYK, está fundamentado en la sustracción del blanco, implementando para esto la mezcla de pigmentos, se denomina síntesis sustractiva. Los colores primarios en este modo de color son CIAN, MAGENTA, AMARILLO y NEGRO representados con la sigla (CMYK). Es importante entender que este modo de color se implementa para elementos gráficos que van a ser impresos sobre un sustrato.
              br
              br
              | Las imágenes en CMYK poseen 32 bits por cada pixel, utilizando cuatro canales de información, uno correspondiente a cada color. Por otra parte, cuando se vaya a implementar cualquier formato de impresión, como una revista, un catálogo, un póster, un folleto, se deben utilizar el modelo CMYK, pues todas las máquinas de impresión están basadas en modos de color CMYK, ya sea impresión digital o impresión <i>offset</i>.
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/10.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Modos LAB" :icono="require('@/assets/curso/42.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Modo de color LAB
            p El modo de color LAB se basa en cómo el ser humano percibe el color, este modo de color detalla los colores de la visión normal de una persona, así la descripción de LAB del color se basa en la cantidad de colorante necesaria para que los dispositivos, como un monitor o una impresora, produzcan el color; LAB es un modo de color independiente. 
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/11.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Escala de grises" :icono="require('@/assets/curso/43.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Modo de escala de grises
            p Este modo de color tiene la particularidad de implementar diferentes escalas de gris en una imagen, las imágenes en modo de color gris varían en una escala de o a 255, donde 0 es negro y 255 es blanco, Este modo de color también puede ser medible en una escala de 0% y 100% en el modo CMYK.
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/12.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Mapa de bits" :icono="require('@/assets/curso/44.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Modo de mapa de bits
            p Este modo de color implementa los valores de color blanco o negro para identificar los pixeles de una imagen, estas imágenes de modo mapa de bits se definen como imagen de 1 bit en mapa de bits, ya que poseen una profundidad de bits 1.
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/13.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Modos indexado" :icono="require('@/assets/curso/45.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Modo de color indexado
            p En el modo de color el indexado hace referencia a archivos con imágenes de 8 bits con el rango máximo de 256 colores. Cuando se convierte a color indexado Photoshop crea una tabla de colores específica que agrupa y crea el índice de los colores de la imagen. Es usualmente utilizado para disminuir los tamaños de archivos, conservando la calidad visual, por ejemplo en páginas <i>web</i> o en temas de multimedia.
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/14.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .py-4.py-md-5(titulo="Modos multicanal" :icono="require('@/assets/curso/46.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Modo multicanal
            p El modo de color multicanal se caracteriza por tener 256 niveles de gris, debido a esta característica las imágenes con este modelo de color se pueden manejar para procesos de impresión, ya que el modo multicanal permite ser guardado en formato Photoshop y formato de documento grande PSB.
              br
              br
              |Es importante entender y comprender que cada modo de color cumple con unas características diferentes y están configurados en función de cada proyecto a realizar, ya sea para impresión o medios digitales, entre otros.
          .col-md-4
            .imagen-adornos-flotantes
              img(src="@/assets/curso/15.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Ajustes y corrección de color
    p.mb-5 Los ajustes en Photoshop se pueden realizan de varias maneras, una de ella es a partir de capas de ajuste o también utilizando el filtro cámara raw, las dos funciones son muy flexibles a la hora de realizar ajustes y corrección de color, sin que esto implique dañar la información de la imagen original. Dicho de otra forma, no es una clase de edición destructiva, esto quiere decir que no altera la imagen original.
      br
      br
      |Las herramientas de color permiten seleccionar, crear, agregar, combinar, diferentes tipos de color, dependiendo del uso que se requiera. Ahora, se verá de manera gráfica esta importante herramienta utilizada para realizar ajustes y corrección al color de una imagen:
    .bg--2-claro2.position-relative.p-3.mb-5
      img.position-absolute.d-none.d-lg-block(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 132px ")
      .row.justify-content-end 
        .col-lg-10
          h5 Color
          p A continuación, observe el video Color para una mejor contextualización de la importancia de esta herramienta, sus funciones, características, modos de uso, entre otros.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UHFojBUqYH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Monocromo, duotono, tritono, cuatritono
    p.mb-5 El modelo de color duotono, permite realizar imágenes en monótonos (dos colores), tritonos (tres colores) y cuatritonos (cuatro colores). 
      br
      br
      |<b>¿Cómo se realiza esta acción en Photoshop?</b> A continuación, se muestra la explicación:
    .tarjeta.card-texture.p-5.rounded-0.imagen-adornos-flotantes.mb-5
      .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
      .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
      .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .row.align-items-center.px-5
        .col-lg-5
          p En este proceso lo primero que se hace es convertir la imagen que está en modo de color RGB a modo de color escala de gris, así se habilitará la opción modo de color Duotono; posteriormente, se cambia el modo de color como está en la figura 2. Seguidamente al hacer click en Duotono se abre un panel con las opciones de duotono como lo muestra la figura 3. Y, seguidamente, se puede aplicar la opción que se desee (monocromo, duotono, tritono y cuatritono) y también brinda la opción de color por cada opción, tal como lo enseña la figura 4.
        .col-lg-7
          #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel')
            .carousel-indicators
              button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 1')
            .carousel-inner.row.justify-content-center
              .col-lg-9
                .carousel-item.active
                  figure
                    img(src='@/assets/curso/16.jpg', alt='Texto que describa la imagen')
                .carousel-item
                  figure
                    img(src='@/assets/curso/17.jpg', alt='Texto que describa la imagen')
                .carousel-item
                  figure
                    img(src='@/assets/curso/18.jpg', alt='Texto que describa la imagen')
                .carousel-item
                  figure
                    img(src='@/assets/curso/19.jpg', alt='Texto que describa la imagen')
            button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
              span.carousel-control-prev-icon(aria-hidden='true')
              span.visually-hidden Previous
            button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
              span.carousel-control-next-icon(aria-hidden='true')
              span.visually-hidden Next
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Dimensiones, resolución y tamaño
    .row.mb-5.align-items-center
      .col-lg-7(data-aos="fade-right")
        p.mb-3 El término píxel es la abreviatura de “elemento de imagen”, y los píxeles son los pequeños bloques de construcción que componen todas las imágenes digitales. Al igual que una pintura está hecha de pinceladas individuales, una imagen digital está hecha de píxeles individuales.
          br
          br
          |En Photoshop, cuando se ve una imagen con un nivel de zoom normal (100% o menos), los píxeles suelen ser demasiado pequeños para notarlo, a diferencia de lo que parece una imagen continua, con luz, sombras, colores y texturas que se mezclan para crear una escena que se parece mucho a la del mundo real. 
          br
          br
          |En cuanto al tamaño de la imagen, se refiere al ancho y alto de esta en píxeles. También se refiere al número total de píxeles de la imagen, pero en realidad es el ancho y la altura lo que debe preocupar.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/20.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Ahora se ofrece más información sobre este tema:
    .row.mb-5.justify-content-center
      .col-lg-5.mb-3
        .tarjeta-hover.tarjeta.bg--4.p-5.hover-flip.hover.h-100.hover-bg--2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          p En Photoshop el cuadro de diálogo tamaño de la imagen muestra un área de vista previa a la izquierda y detalles sobre el tamaño de la imagen a la derecha. Cubriremos el cuadro de diálogo Tamaño de la imagen con más detalle en el próximo tutorial. Por ahora, solo miraremos la información que necesitamos.
          .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/21.jpg')})`}")
      .col-lg-5.mb-3
        .tarjeta-hover.tarjeta.bg--4.p-5.hover-flip.hover.h-100.hover-bg--2(@mouseover="mostrarIndicador= false")
          p El ancho y el alto de una imagen, en píxeles, se conocen como sus dimensiones de los píxeles y en Photoshop CC, podemos verlos junto a la palabra Dimensiones cerca de la parte superior del cuadro de diálogo. Aquí vemos que la imagen tiene un ancho de 4509 píxeles (px) y un alto de 3000 píxeles.
          .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/22.jpg')})`}")
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Herramientas de corrección y retoque 
    p.mb-5 Gracias a la gama de herramientas que posee Photoshop, se pueden realizar retoques desde los más sencillos hasta temas más avanzados. En el panel de clonación, en el panel superior ventana, en la opción origen de clonación, para las herramientas tampón clonar y pincel corrector, se logra establecer hasta cinco (5) orígenes de muestra y se puede utilizar rápidamente el que requiera sin necesidad de volver a muestrear cada vez que necesite cambiar a un origen diferente. Aquí se expone lo que se puede hacer con esta herramienta:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ymSqw_W2vzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2  1.8 Selección y máscaras
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/23.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Definiendo el concepto de máscara se puede decir que es el proceso de aplicar una función en un área de trabajo específicamente, a partir de la selección de la herramienta de máscara que se encuentra en el panel derecho de la interfaz de Photoshop, como se visualiza en la siguiente imagen:
    p.mb-5 La selección de máscaras de capa se implementa con el fin de esconder sectores de una capa y visualizar las capas inferiores. También se utilizan para unir varias fotografías en una sola imagen. Dentro de las máscaras que se acaban de mencionar se encuentran las siguientes:
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3
        .tarjeta-hover.tarjeta.bg--3-claro.p-5.hover-flip.hover.h-100.hover-bg--2(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          h4 Máscaras de capa: 
          p Están diseñadas a partir de mapas de bits dependientes de la resolución que se editan con las herramientas de pintura y selección. Para crear una máscara de capa, en el panel de la derecha en capas (ver figura) está la herramienta crear máscara de capa; aquí se presenta un ejemplo de un degradé magenta sobre la imagen implementando la opción crear máscara de capa.
          .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/24.jpg')})`}")
      .col-lg-4.mb-3
        .tarjeta-hover.tarjeta.bg--4-claro.p-5.hover-flip.hover.h-100.hover-bg--2(@mouseover="mostrarIndicador= false")
          h4 Máscaras vectoriales: 
          p Se denomina así ya que se crea a partir de vectores con la herramienta de pluma, es decir, que al trabajar con capas de vectores la resolución es óptima pues se crea desde cero; con esta herramienta se pueden crear siluetas desde una fotografía tal como se ve en la siguiente imagen. Una vez se selecciona la herramienta pluma, se procede a crear la capa de vector, una vez se completa la selección en el panel superior (figura 1), 
          .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/25.jpg')})`}")
      .col-lg-4.mb-3
        .tarjeta-hover.tarjeta.bg--2-claro.p-5.hover-flip.hover.h-100.hover-bg--2(@mouseover="mostrarIndicador= false")
          h4 Máscaras vectoriales: 
          p Se hace clic y se crea la máscara de vector (figura 2) y se podrá verificar o editar desde el panel de capas a la derecha de la mesa de trabajo como está en la figura 2.
          .tarjeta-hover__img(:style="{'background-image': `url(${require('@/assets/curso/26.jpg')})`}")
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2  1.9 Coloración y filtros
    p.mb-5 En Photoshop se pueden realizar varias opciones de ajustes de color, entre estas se encuentra el equilibrio de color, este ajuste se puede implementar para mejorar defectos de color en una imagen. 
      br
      br
      |Para una mayor comprensión de este tema, se sugiere revisar la siguiente presentación que le permitirá conocer las diferentes opciones de coloración y filtro que puede encontrar para mejorar los proyectos:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.bg--3-claro.p-5.border-3(titulo="Equilibrio de color")
        .row
          .col-lg-7
            h4 Equilibrio de color
            p Con esta herramienta de ajustes de color también se pueden crear efectos atractivos variando los rangos de porcentajes de cada referencia, como el cian, magenta y amarillo, y cambiar el tono, medios tonos, sombras e iluminación. 
          .col-lg-5
            .imagen-adornos-flotantes
              img(src="@/assets/curso/27.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 3% ; top: ; bottom: 10% ; width: 40px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5% ; right: ; top:0 ; bottom: ; width: 30px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .tarjeta.color-acento-contenido--borde.bg--3-claro.p-5.border-3(titulo="Rutas")
        .row
          .col-lg-7
            h4 Rutas
            p La interfaz de Photoshop ofrece varias rutas para utilizar el ajuste de equilibrio de color, una de ellas es por el menú superior en la opción imagen, ajustes, allí se abre un panel con varias opciones de coloración como se visualiza en las imagen.
          .col-lg-5
            .imagen-adornos-flotantes
              img(src="@/assets/curso/28.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 3% ; top: ; bottom: 10% ; width: 40px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5% ; right: ; top:0 ; bottom: ; width: 30px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .tarjeta.color-acento-contenido--borde.bg--3-claro.p-5.border-3(titulo="Tonos y saturación ")
        .row
          .col-lg-7
            h4 Tonos y saturación 
            p La herramienta de tono y saturación es otra opción que brinda Photoshop para realizar ajustes de color en una imagen. Con esta herramienta se puede ajustar el tono, la saturación y luminosidad de un color especifico o de toda la gama de color si se desea. Esta herramienta funciona muy bien para modos de color CMYK. A continuación se describe cómo se utiliza esta herramienta:  
              br
              br
              |En el menú superior en capa-nueva capa de ajuste-tono y saturación, luego se da click en ok y se abre un panel de diálogo y en el icono de tono y ajustes, nuevamente se da click; aquí se observa la ruta por la opción del menú superior en capas y ajustes, donde se encuentra la herramienta, pero la interfaz de Photoshop se ajusta a diversas formas de ubicar una herramienta, es decir, tiene varias rutas. 
          .col-lg-5
            .imagen-adornos-flotantes
              img(src="@/assets/curso/29.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 3% ; top: ; bottom: 10% ; width: 40px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5% ; right: ; top:0 ; bottom: ; width: 30px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .tarjeta.color-acento-contenido--borde.bg--3-claro.p-5.border-3(titulo="Gama de color")
        .row
          .col-lg-7
            h4 Gama de color
            p Se puede ubicar la herramienta por el panel derecho en la opción ajustes y posteriormente en el icono tono y saturación. Después, se abre un panel con las funciones de la herramienta tales como las barras de tono-saturación-luminosidad, en el recuadro que enseña la imagen esta la opción de gama de color; estos se pueden seleccionar de manera independiente o todos al mismo tiempo, también los ajustes establecidos por defectos, como tonos sepia, aumento de la luminosidad, aumentar saturación, entre otros.
          .col-lg-5
            .imagen-adornos-flotantes
              img(src="@/assets/curso/30.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 3% ; top: ; bottom: 10% ; width: 40px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5% ; right: ; top:0 ; bottom: ; width: 30px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .tarjeta.color-acento-contenido--borde.bg--3-claro.p-5.border-3(titulo="Tonalidades de color")
        .row
          .col-lg-7
            h4 Tonalidades de color
            p En la siguiente imagen se observa, a manera de ejemplo, la forma como se pueden alterar las tonalidades de color y se detalla el menú desplegable de las gamas de colores resaltado con el recuadro amarillo.
          .col-lg-5
            .imagen-adornos-flotantes
              img(src="@/assets/curso/31.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 3% ; top: ; bottom: 10% ; width: 40px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5% ; right: ; top:0 ; bottom: ; width: 30px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .tarjeta.color-acento-contenido--borde.bg--3-claro.p-5.border-3(titulo="Filtros")
        .row
          .col-lg-7
            h4 Filtros
            p Los filtros son unas herramientas esenciales en el programa de Photoshop, pues se utilizan para editar y retocar imágenes, también sirven para generar efectos especiales que mejoren la fotografía, otro aspecto importante es el de la iluminación; estos filtros se encuentran en el menú superior en la opción *Filtro. 
              br
              br
              |Estos vienen predeterminados pero se pueden ajustar a lo que se desee, simplemente basta con ir al menú, opción filtros y luego galería de filtros; allí se encuentra una variedad de filtros como: artísticos, bosquejar, distorsionar, estilizar, textura, trazos de pincel entre otros. En las imágenes que se exponen a continuación, se observa un ejemplo de como se ha generado un filtro en cada una de las imágenes del gato.
          .col-lg-5
            .imagen-adornos-flotantes
              img(src="@/assets/curso/32.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 3% ; top: ; bottom: 10% ; width: 40px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5% ; right: ; top:0 ; bottom: ; width: 30px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .tarjeta.color-acento-contenido--borde.bg--3-claro.p-5.border-3(titulo="Otros filtros")
        .row
          .col-lg-7
            h4 Otros filtros
            p Aparte de la carpeta de galerías de filtros también se puede encontrar otra línea de filtros desenfoque, distorsionar, pixelar, entre otros, tal como se observa en la imagen. 
              br
              br
              |Los filtros inteligentes, aplicados a objetos, permiten usar filtros no destructivos, estos se almacenan como efectos de capa en el panel de capas y se pueden volver a ajustar en cualquier momento a partir de los datos de la imagen original que contenga el objeto inteligente.
          .col-lg-5
            .imagen-adornos-flotantes
              img(src="@/assets/curso/33.jpg" alt="Adornos flotantes")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 3% ; top: ; bottom: 10% ; width: 40px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 5% ; right: ; top:0 ; bottom: ; width: 30px ")
              .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 3% ; right: ; top: ; bottom: 5% ; width: 60px ")
    #t_1_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.10 Herramientas de dibujo
    p.mb-5 Estas herramientas ofrecen excelentes resultados a la hora de elaborar un dibujo o una ilustración y no deben faltar en la mesa de trabajo. A continuación, se describen estas herramientas y sus bondades:
    .row.mb-5.align-items-center
      .col-lg-2: img(src="@/assets/curso/34.svg" style="width: 201px").m-auto.mb-3.mb-lg-0
      .col-lg-7.col-
        h5  Herramienta pluma:
        p.mb-0 De acuerdo con el portal Desarrollo <i>web</i> (2019), esta herramienta es muy útil, sirve para hacer diferentes trazados y múltiples cosas en las imágenes. Lo bueno es que permite editar los trazados una vez hechos y que pueden ajustarse a cualquier recorrido que se necesite, por complejo que sea. Para conocer más acerca de esta herramienta, se sugiere revisar el siguiente video:
    .bg--2-claro2.position-relative.p-3.mb-5
      img.position-absolute.d-none.d-lg-block(src="@/assets/curso/4.svg" alt="Adornos flotantes" style="left: 2% ; top: -10%; width: 132px ")
      .row.justify-content-end 
        .col-lg-10
          h5 Herramienta pluma
          p A continuación, observe el video Pluma para una mejor contextualización de su importancia, sus elementos, características entre otros, y su aplicación.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/4NgovY58BQU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5.align-items-center
      .col-lg-2: img(src="@/assets/curso/35.svg" style="width: 201px").m-auto.mb-3.mb-lg-0
      .col-lg-7.col-
        h5 Herramienta rectángulo
        p.mb-0 Continuando con lo que se menciona en portal <i>web</i> Desarrollo <i>web</i> (2019) el rectángulo sirve para hacer rectángulos que pueden estar o no rellenos de color. En el lugar donde está el rectángulo hay otra serie de herramientas para hacer otros tipos de formas, como elipses, líneas o incluso formas personalizadas.
    p.mb-5 Selecciones cuadradas o rectangulares - Selecciones circulares o elípticas 
    .row.mb-5
      .col-lg-6
        h5 Marco rectangular
        img(src="@/assets/curso/36.svg").m-auto.mb-3
        p.fw-bold “Una herramienta para realizar selecciones cuadradas o rectangulares”. 
      .col-lg-6
        h5 Marco elíptico
        img(src="@/assets/curso/37.svg").m-auto.mb-3
        p.fw-bold “Herramienta para crear selecciones circulares o elípticas”.
    .bg-texture.p-5
      .row.justify-content-center
        .col-lg-5: img(src="@/assets/curso/38.svg")
        .col-lg-5
          h4 Herramientas que se utilizan para los rectángulos y otros tipos de formas son:
          ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta.bg--4.text-system.fw-bold
                  span 1
                | Tipo de relleno
              li 
                .lista-ol--cuadro__vineta.bg--4.text-system.fw-bold
                  span 2
                | Tipo de trazo
              li 
                .lista-ol--cuadro__vineta.bg--4.text-system.fw-bold
                  span 3
                | Anchura del trazo 
              li 
                .lista-ol--cuadro__vineta.bg--4.text-system.fw-bold
                  span 4
                | Tipo de trazo (forma)



















</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import TabsB from '../components/TabsB.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
    TabsB,
  },
  data: () => ({
    indicadorTarjetaSlide: true,
    mostrarIndicador: true,
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
.hover-perspective
  transition: all 0.3s ease-in-out
  &:hover
    background-color: $color-primario !important
    position: relative
    transform: rotate(-2deg)
.contenedor-hover
  overflow: hidden
  width: 150%
  .contenedor-hover-cuadro
    border-radius: 20px
    width: 190px
    transition: all 0.3s ease-in-out
    &:hover
      background-color: $color-primario !important
      transform: rotate(-2deg)
.card-texture
  background-image: url('../assets/curso/card-texture.svg')
  background-repeat: repeat
  background-size: auto
  background-position: center
.bloque-texto-g
  justify-content: flex-start
  background-color: rgba(255, 255, 255, 0.65)
.bloque-texto-g__img
  left: auto
  right: 0
</style>
