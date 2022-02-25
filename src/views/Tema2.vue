<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plataformas de apps
    p.mb-5 En el desarrollo de aplicaciones móviles es importante implementar las plataformas de desarrollo de apps, ya que estas se pueden englobar en varios grupos en función de su creación. A continuación, se describen estas aplicaciones:
    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/47.svg', alt='Texto que describa la imagen')

      .tarjeta.bg--2-claro.p-3(x="50%" y="47%" numero="")
        .h5.mb-2 Nativas
        p Se denominan plataformas de desarrollo nativas a las aplicaciones que se desarrollan con características propias para cada sistema operativo como iOS, Android o Windows Phone, así es como se adapta el lenguaje de desarrollo a cada sistema operativo. Para Android se implementa el lenguaje Java, para iOS se usa el lenguaje Objective-C y para Windows Phone .Net.
          br
          br
          |Haciendo una comparación o analizando cada lenguaje en estas clases de apps, se puede decir que aprovechan la mayoría de funciones de los dispositivos, también tiene una característica muy favorable porque se pueden utilizar offline. Una de sus debilidades es que los procesos de actualización se tornan costosos. 
      .tarjeta.bg--2-claro.p-3(x="67%" y="30%" numero="")
        .h5.mb-2 Híbridas
        p Estas aplicaciones reciben este nombre ya que fusionan aspectos de las nativas y de aplicaciones <i>web</i> con finalidades específicas. Estas aplicaciones son desarrolladas a partir de lenguajes de programación CSS y HTML, esto las hace versátiles ya que se logran adaptar a cualquier sistema operativo y permiten el acceso a todas las funcionalidades de los dispositivos.
      .tarjeta.bg--2-claro.p-3(x="64%" y="60%" numero="")
        .h5.mb-2 <i>Web</i>
        p La mayoría de aplicaciones <i>web</i> son desarrolladas a partir de los lenguajes de programación CSS, HTML y JavaScript que son muy conocidos en el mundo.
      .tarjeta.bg--2-claro.p-3(x="51%" y="83%" numero="")
        .h5.mb-2 Multiplataforma
        p Estas plataformas hacen honor a su nombre, pues poseen una característica propia que le permiten disminuir costos y tiempo de desarrollo, en la actualidad tienen bastante demanda por desarrolladores ya que se logran adaptar muy fácil a las diferentes plataformas. Tiene una desventaja que no logran aprovechar todas las funciones de un dispositivo móvil o tablet.
    p.mb-5 Por su parte, para la programación de una aplicación se encuentran dos plataformas en el mercado iOS y Android, las cuales poseen casi el total del mercado, se podría decir que el 99%. Es importante entender las características de cada plataforma para el desarrollo de la app. Por consiguiente, a continuación, se describen las características principales de estas dos plataformas:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--4-claro2")
      .row(titulo="Android").px-5
        .col-md-10.mb-4.mb-md-0
          p Es el sistema operativo para móviles fue creado por la empresa Android Inc., cuya dueña es Google; dentro de sus características están:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Aplicación de código abierto, esto quiere decir que cualquier usuario puede acceder al código fuente y modificarlo dependiendo los requerimientos.
            li 
              i.fas.fa-check
              | Su función está basada en Linux, que es un sistema operativo de código abierto tanto para computadores como para portátiles.

            li 
              i.fas.fa-check
              | El lenguaje de programación que utiliza es el nativo de Java.
            li 
              i.fas.fa-check
              | La lista de aplicaciones se encuentra en Google Play.
            li 
              i.fas.fa-check
              | Cuenta con soporte para un sin números de formatos de multimedia.
          p Para crear una aplicación para Android será necesario trabajar sobre lenguaje de programación Java y ampliar con Linux.
        .col-md-2
          figure
            img(src='@/assets/curso/48.png', alt='Texto que describa la imagen')
      .row(titulo="IOS").px-5
        .col-md-10.mb-4.mb-md-0
          p Este desarrollador fue incorporado en el mercado hacia el año 2007, al igual que su primer teléfono inteligente iPhone, aquí se mencionan sus características:
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Esta plataforma es exclusiva de Apple y es solo compatible con sus dispositivos.
            li 
              i.fas.fa-check
              | Por ser exclusiva sus características técnicas son privadas.
            li 
              i.fas.fa-check
              | Los lenguajes de programación que maneja son ObjetiveC y Swift.
            li 
              i.fas.fa-check
              | El conjunto de aplicaciones se encuentra en Apple Store.
            li 
              i.fas.fa-check
              | Cuenta con soporte para un sin número de multimedia.
            p La compañía Apple se caracteriza por ser la única que pone a disposición sus herramientas de hardware y de <i>software</i> en el proceso de desarrollo de aplicaciones para este sistema operativo.
        .col-md-2
          figure
            img(src='@/assets/curso/49.png', alt='Texto que describa la imagen')
      .row(titulo="Para destacar...").px-5
        .col-md-10.mb-4.mb-md-0
          p Cabe precisar que la compatibilidad de estas dos plataformas es restringida, así que para desarrollar una aplicación móvil para estas dos plataformas es necesario desarrollar dos aplicaciones una para cada sistema operativo. Pero existe la posibilidad de crear una app híbrida como se explicó anteriormente. La tecnología utilizada se traduce en HTML5, CSS3 y JavaScript, así se podrá crear una app multiplataforma. 
        .col-md-2
          figure
            img(src='@/assets/curso/50.png', alt='Texto que describa la imagen')
















































</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import BotonesC from '../components/BotonesC.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
    BotonesC,
  },
  data: () => ({
    indicadorTarjetaFlip: true,
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
