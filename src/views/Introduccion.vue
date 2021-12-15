<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 Apreciado aprendiz, le damos la bienvenida a este momento de aprendizaje orientado a conocer sobre las imágenes digitalizadas, su composición, manipulación y las herramientas que permiten sus retoques. Antes de empezar, le invitamos a revisar el siguiente video para identificar el contexto de aprendizaje.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ymSqw_W2vzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


</template>

<script>
import BannerInterno from '@/components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
