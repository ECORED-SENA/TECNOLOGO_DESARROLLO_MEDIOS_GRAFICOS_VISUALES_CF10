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
              .col-md-3
                figure
                  img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              .col-md-6.mb-4.mb-md-0
                p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
            























</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
