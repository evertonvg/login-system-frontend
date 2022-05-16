<template lang="pug">
div
    transition(name="fade")
        div.rounded-md.bg-browncolor-100.flex.items-center.justify-center.relative.z-10.px-1.py-8.text-center.warning-default(v-if="$store.state.warning.warning != ''") {{$store.state.warning.warning}}
            span.absolute.bg-white.top-px.right-2.cursor-pointer(@click.prevent="closeWarn") X
            
    Header
    transition(name="fade")
        Nuxt
    Footer
</template>

<script>
import HeaderFile from '../components/Header.vue';
import FooterFile from '../components/Footer.vue';
export default {
    name: 'default',
    components:{
        'Header': HeaderFile,
        'Footer': FooterFile,
    },
    data(){
        return{
            warning: ''
        }
    },
    methods:{
        closeWarn(){
            this.$store.dispatch('warning/setWarning','')
        }
    }
}
</script>

<style lang="stylus">

    @font-face {
        font-family Anime-Inept
        src url('../static/fonts/Anime-Inept.otf')format("opentype")
    }
    @font-face {
        font-family Naruto
        src url('../static/fonts/NinjaNaruto-YOn4.ttf')
    }
    .fade-enter-active, .fade-leave-active 
        transition all .5s
        
    .fade-enter, .fade-leave-to
        opacity 0
        transform translateY(-10px)
    
    *
        font-family: cursive;

    .fail-error
        border 1px solid red
    .warning-default
        color white
        width 300px
        min-height 50px
        position fixed
        top 100px
        left 50%
        transform translateX(-50%)
        z-index 1

    
</style>