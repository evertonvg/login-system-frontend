<template lang="pug">
  div
    h1.pt-24 profile
    defaultButton(:post-title="valueButton" typeButton="button" :value="valueButton" :event="logout")
</template>

<script>
import defaultButton from '../components/default-button.vue';

export default {
  name: 'Home',
  data(){
    return{
      valueButton: 'logout'
    }
  },
  middleware: ['auth'],
  components:{
    'defaultButton' : defaultButton
  },
  methods:{
    logout(){
      this.$router.push('/logout')
    }
  },
  mounted(){
  }
}
</script>
<style lang="stylus" scoped>
  
</style>