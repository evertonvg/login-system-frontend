<template lang="pug">
  div.background-attach.h-screen.w-screen.flex.items-center.justify-end.relative
    div.flex-1.flex.items-center.justify-center.h-full
      h1.uppercase.text-5xl.text-whiteopt.z-10.text-center Seja bem vindo
    div.loginbox.initial.p-5.h-full.flex.flex-col.items-start-justify-start
      form.w-full(action="" method="method")
        h1.mb-8.text-4xl LOGIN
        div.input.mb-3
          label.mb-1(for="email") E-mail
          input.rounded-lg.h-6(type="email" placeholder="insira seu email" v-model="email" :class=" $v.email.$error ? 'fail-error' : '' ")
          div.warning(v-if="!$v.email.required && $v.email.$error") Email requerido
          div.warning(v-if="!$v.email.email && $v.email.$error") Insira um email valido
        div.input.mb-8
          label.mb-1(for="password") Senha
          input.rounded-lg.h-6(type="password" placeholder="insira sua senha" v-model="password" :class=" $v.password.$error ? 'fail-error' : '' ")
          div.warning(v-if="!$v.password.required && $v.password.$error") Senha Requerida
          div.warning(v-if="!$v.password.minLength && $v.password.$error") minimo de 6 caracteres são necessários

        defaultButton.mt-4( :disabledButton="disabledButton" typeButton="submit" :value="valueButton" :event="login")
        div.mt-12.recover-register
          Nuxt-Link(to="register") Registar
          Nuxt-Link(to="forget-password") Esqueci Minha Senha

        
</template>

<script>
import {required,email,minLength} from "vuelidate/lib/validators"
import defaultButton from '../components/default-button.vue';



export default {
  name: 'Login',
  components:{
    'defaultButton' : defaultButton
  },
  data(){
    return{
      email:'',
      password:'',
      valueButton:'Logar',
      statusLoginButton: false,
      disabledButton:false,
    }
  },
  middleware: ['auth'],
  validations:{
    email: {required,email},
    password: {
      required,
      minLength: minLength(6)
    },
  },
  methods:{
 
    async login(ev){
      ev.preventDefault();
      if(this.$v.$invalid){
        this.$v.$touch()
        return 
      }

      this.valueButton = 'logando'
      this.disabledButton = true
      this.$store.dispatch('warning/setWarning','Entrando...')

      // await this.$axios.$get('http://localhost:8000/sanctum/csrf-cookie').then((resp)=>{
      //   console.log(resp)
      // })

      await this.$auth.loginWith('laravelSanctum',{
        
         data: {
          email: this.email,
          password: this.password,
        },
        
        }).then((res)=>{
          this.$store.dispatch('warning/setWarning','')
          return res
        }).then((res)=>{
          this.$store.dispatch('warning/setWarning',res.data.message)
          this.$router.push('/')
        }).catch((err)=>{
          this.email = ''
          this.password = ''
          // action 
          this.$store.dispatch('warning/setWarning',err.response.data.message)
          // mutation
          // this.$store.commit('warning/setWarning','usuário ou senha inválidos')

          this.valueButton = 'Logar'
          this.disabledButton = false
          
        })
    }
    
  },

}
</script>
<style lang="stylus" scoped>
  .background-attach
    background-image url('../static/img/anime-bg.jpg')
    background-size: cover
    background-position: center
    background-repeat: no-repeat
      
    &:after
      position absolute
      width: 100vw
      height 100vh
      top 0
      left 0
      background-color rgba(0,0,0,0.7)
      content ''

    .loginbox
      width 30%
      z-index: 9
      align-items: start;
      justify-content: center;
      background-color: gray
      .recover-register
        display: flex
        align-items: center
        justify-content: space-between
        button
          font-weight bold
          cursos pointer
          &:hover
            text-decoration: underline
      .input
        position relative
        
        label
          width 300px
          margin-right: 20px
          display block
          font-size 1rem
        input
          color #000
          padding-left: 20px
          width 100%
        .warning
          color red
          position absolute
          bottom -15px
          left 0
          font-size 0.5rem


</style>