<template lang="pug">
  header.bg-browncolor-100.h-20.fixed.inset-0.z-20
    div.container.mx-auto.h-full
      nav.flex.flex-row.items-center.justify-end.h-full(v-if="!['login','register','forget-password'].includes($route.name)")
        div.hamburguer-button(:class="menu ? 'active' :''" v-on:click="openCloseMenu")
          span.relative
        
</template>

<script>
export default {
    name: 'Header',
    data(){
      return {
        menu:false
      }
    },
    methods:{
      openCloseMenu(){
        this.menu = !this.menu
      }
    }
}
</script>

<style lang="stylus" scoped>
  header
    div
      nav
        .hamburguer-button
          width 35px
          height 35px
          cursor pointer
          display flex
          align-items center
          justify-content center
          &.active
            span
              transform rotate(45deg)
              &:before
                  transform rotate(90deg)
                  top 0
              &:after
                  transform rotate(90deg)
                  top 0
          span
            width 35px
            height 3px
            color white
            background-color currentColor
            transition 0.3s ease all
            cursor pointer
            &:before,&:after
              position absolute
              content ''
              width 100%
              height 3px
              background-color currentColor
              left 0
              transition 0.3s ease all
            &:before
              top -15px
            &:after
              bottom -15px
         


            


</style>