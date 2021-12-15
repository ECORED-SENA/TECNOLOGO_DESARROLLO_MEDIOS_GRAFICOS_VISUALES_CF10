<template lang="pug">
.tabs-b
  .tabs-b__header.row.m-0.justify-content-center
    .col-6.col-sm-4.col-lg-2.tabs-b__tab(
      v-for="(elm,index) of elements"
      :key="'tabs-b-menu-'+elm.id"
      :class="{'tabs-b__tab--active' : selected === elm.id}"
      @click="selected = elm.id"
      @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
    )
      .indicador__container(v-if="mostrarIndicador && index === 1")
        .indicador--click
      .tabs-b__tab__icon(v-if="elm.icono")
        img(:src="elm.icono")
      .tabs-b__tab__title
        span {{elm.titulo}}

  .tabs-b__content-item(
    v-for="elm of elements"
    :key="'tabs-content-'+elm.id"
    v-show="selected === elm.id"
    v-child="elm.elm"
  )

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins.js'
export default {
  name: 'TabsB',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass">
.tabs-b
  &__header
  &__tab
    margin-bottom: 5px
    display: flex
    flex-direction: column
    align-items: center
    padding: 20px
    margin-right: 10px
    background-color: #6edde6
    cursor: pointer
    border-radius: 20px
    border-right: 0px !important

    &:active, &:focus, &:hover
      background-color: #FEE578
      border-right: 0px

    &:last-child
      border-right: 0px
    &__icon
      width: 50px
      margin-bottom: 20px
    &__title
      text-align: center
      font-size: $h6-font-size
      line-height: 1.1em
      display: flex
      height: 100%
      align-items: center

    &--active
      border-bottom: 0px transparent
      &:active, &:focus, &:hover
        border-bottom: 0px
        background-color: #FEE578
      .tabs-b__tab__title
        font-weight: $base-bold-font-weight



  &__content-item
      background-color: #FEE578
      margin: 10px
      border-radius: 20px
      padding: 50px

  &.color-primario
    .tabs-b__tab--active
      border-top-color: $color-primario !important
  &.color-secundario
    .tabs-b__tab--active
      border-top-color: $color-secundario !important
  &.color-acento-contenido
    .tabs-b__tab--active
      border-top-color: $color-acento-contenido !important
  &.color-acento-botones
    .tabs-b__tab--active
      border-top-color: $color-acento-botones !important
.tabs-b__tab--active
  background-color: #FEE578
  border-top: 0px !important
</style>
