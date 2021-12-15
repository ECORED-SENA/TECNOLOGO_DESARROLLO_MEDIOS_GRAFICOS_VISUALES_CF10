<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Edición y composición avanzada de imágenes
    p.mb-5 El programa por excelencia de edición y composición Adobe Photoshop, tiene las herramientas avanzadas para la realización de ediciones y composiciones más creativas. Por tal motivo, se relaciona un ejemplo de cómo se pueden lograr composiciones con las herramientas de máscara, mostrando su paso a paso, conózcalo: 
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.bg--4-claro2.p-4.mb-5
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="1").justify-content-center.align-items-center
              .col-md-4
                figure
                  img(src='@/assets/curso/80.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                p Una vez se tiene la imagen en la mesa de trabajo, en el panel capas se debe cambiar el nombre de la capa por defecto con el nombre background haciendo doble clic en esta. 
            .row(titulo="2").justify-content-center.align-items-center
              .col-md-4
                figure
                  img(src='@/assets/curso/81.jpg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                p Posteriormente, se arrastra la capa taza de café, al icono crear capa nueva para duplicarla.
            .row(titulo="3").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Luego, en la pestaña Selección se hace clic y en la opción Seleccionar y aplicar máscara nuevamente se hace clic, como lo muestra la siguiente imagen: 
            
              .col-md-4
                figure
                  img(src='@/assets/curso/82.jpg', alt='Texto que describa la imagen')
            .row(titulo="4").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Ahora, en el panel de propiedades que aparece, se da Seleccionar (Ver-En negro). Seguidamente en la barra de herramientas a la izquierda de la mesa de trabajo, se ubica la herramienta selección rápida y se ajusta el tamaño. 
            
              .col-md-4
                figure
                  img(src='@/assets/curso/83.jpg', alt='Texto que describa la imagen')
            .row(titulo="5").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Luego, se pinta dentro de la taza de café y se hace clic.
            
              .col-md-4
                figure
                  img(src='@/assets/curso/84.jpg', alt='Texto que describa la imagen')
            .row(titulo="6").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Una vez realizado este proceso de selección se prosigue a añadir una máscara de capa haciendo doble clic en el icono Añadir máscara de capa. Aquí la máscara de capa se indica mediante un agujero blanco donde antes se pintó con la herramienta pincel en la taza de café. En la siguiente imagen se visualiza este proceso.
            
              .col-md-4
                figure
                  img(src='@/assets/curso/85.jpg', alt='Texto que describa la imagen')
            .row(titulo="7").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Continuando con el proceso, se abre una imagen nueva y su referencia es (Olas en el océano), esto con el fin de agregarla en el archivo de la taza de café, seguidamente se elige (Seleccionar-Todo) y luego copiar. Después se cambia la selección por la capa (taza de café) y se da la opción pegar.
            
              .col-md-4
                figure
                  img(src='@/assets/curso/86.jpg', alt='Texto que describa la imagen')
            .row(titulo="8").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Acto seguido se crea una máscara de recorte para proceder a recortar la imagen (olas en el océano), (capa 1), según la máscara de la capa inferior,  luego se pulsa la tecla Alt y se hace clic entre las capas; o también con el botón secuencia en capa 1 y se selecciona (crear) máscara de recorte. En la siguiente imagen se detallan los procedimientos:
            
              .col-md-4
                figure
                  img(src='@/assets/curso/87.jpg', alt='Texto que describa la imagen')
            .row(titulo="9").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Una vez se seleccione crear máscara de recorte, se hace clic en la imagen del océano y se arrastra para que las olas rellenen la taza de café.
            
              .col-md-4
                figure
                  img(src='@/assets/curso/88.jpg', alt='Texto que describa la imagen')
            .row(titulo="10").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Luego, se añade una capa de ajuste, se hace clic en el icono añadir nueva capa de ajuste en la parte inferior de la paleta capas y selecciona degradado.
            
              .col-md-4
                figure
                  img(src='@/assets/curso/89.jpg', alt='Texto que describa la imagen')
            .row(titulo="11").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Posteriormente se elige la muestra de degradado (color frontal a transparente).
            
              .col-md-4
                figure
                  img(src='@/assets/curso/90.jpg', alt='Texto que describa la imagen')
            .row(titulo="12").justify-content-center.align-items-center
              .col-md-6.mb-4.mb-md-0
                p Finalmente, se crea otra máscara de recorte para la capa de ajuste (Capa-crear máscara de recorte).  En la siguiente imagen se observa la composición creada a partir de las herramientas de máscara de capa:
            
              .col-md-4
                figure
                  img(src='@/assets/curso/91.jpg', alt='Texto que describa la imagen')
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Fotomontaje
    p.mb-5 Con el avance de la era digital, el concepto de fotomontaje incluye varios tipos de edición de imágenes en el cual varias imágenes se fusionan con el propósito de crear una sola imagen. Cuando se desarrollan estos procedimientos digitalmente, el fotomontaje también se denomina composición. 
      br
      br
      |Para profundizar más acerca de las herramientas fotomontajes, se invita a revisar el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ymSqw_W2vzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Fotomontaje
    p.mb-5 Los efectos como sombras, resplandores o biseles permiten cambiar la apariencia del contenido de una capa de forma no destructiva, los efectos de capa están enlazados con el contenido de la misma. Al mover o editar el contenido de la capa, se aplican los mismos efectos al contenido modificado. Por ejemplo, si aplica una sombra paralela a una capa de texto y añade más texto, se añade sombra de forma automática al texto nuevo. Ahora, se expone lo anterior de una manera más gráfica:
    SlyderD.mb-5(:datos="datosSlyder")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Síntesis
    img(src='@/assets/curso/96.jpg', alt='Texto que describa la imagen')






















</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Cambiar de color los ojos',
        texto:
          'Los detalles de los ojos en una fotografía tal vez es lo más importante, se utiliza duplicando la capa y retirando solo los ojos en la siguiente capa, y se le aplica el modo trama, desde ahí se realizan los retoques con el fin de crear efectos llamativos, esto hace que la capa de los ojos sea más clara que la original. Esta técnica se realiza en el programa Photoshop. ',
        imagen: require('@/assets/curso/92.jpg'),
      },
      {
        titulo: '',
        texto:
          'Es común encontrar fotografías con efecto de ojos rojos para corregir las venitas de los ojos rojos, se utiliza el pincel corrector, se puede realizar un retoque y efecto limpio, esto se realiza creando una capa de ajustes de saturación y aplicarle al rojo la desaturación, seguidamente invertir la máscara y dejarlo en blanco.',
        imagen: require('@/assets/curso/93.jpg'),
      },
      {
        titulo: 'Eliminación de granos',
        texto:
          'Este efecto para realizar limpieza de piel se realiza con la herramienta pincel corrector, la función es definir la zona a limpiar, aplicar sobre el granito y se comenzará la limpieza.',
        imagen: require('@/assets/curso/94.jpg'),
      },
      {
        titulo: 'Suavizado de piel',
        texto:
          'Se hace con el filtro polvo y rascaduras, para este efecto de piel porcelana se duplica la capa, crea y se selecciona una nueva capa y sobre esta se aplica el filtro polvo y rascaduras; los valores de umbral y radio varían en función del tamaño de la imagen. ',
        imagen: require('@/assets/curso/95.jpg'),
      },
    ],
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

<style lang="sass"></style>
