<template lang="pug">
  div.background-attach.h-screen.w-screen.flex.items-center.justify-end.relative
    div.flex-1.flex.items-center.justify-center.h-full
      h1.uppercase.text-5xl.text-whiteopt.z-10.text-center Venha fazer parte dessa comunidade
    div.loginbox.initial.p-5.h-full.flex.flex-col.items-start-justify-start
      form.w-full(action="" method="method")
        Nuxt-Link(to="/")
          div.flex.items-start.justify-start
            double-arrow-left(title="icone de voltar")
            span  Voltar
        h1.mb-8.text-4xl REGISTRAR
        div.input.mb-3
          label.mb-1(for="nome") Nome
          input.rounded-lg.h-6(type="email" placeholder="insira seu nome" v-model="nome" :class=" $v.nome.$error ? 'fail-error' : '' ")
          div.warning(v-if="!$v.nome.required && $v.nome.$error") Nome requerido

        div.input.mb-3
          label.mb-1(for="email") E-mail
          input.rounded-lg.h-6(type="email" placeholder="insira seu email" v-model="email" :class=" $v.email.$error ? 'fail-error' : '' ")
          div.warning(v-if="!$v.email.required && $v.email.$error") Email requerido
          div.warning(v-if="!$v.email.email && $v.email.$error") Insira um email valido

        div.input.mb-3
          label.mb-1(for="password") Senha
          input.rounded-lg.h-6(type="password" placeholder="insira sua senha" v-model="password" :class=" $v.password.$error ? 'fail-error' : '' ")
          div.warning(v-if="!$v.password.required && $v.password.$error") Senha Requerida
          div.warning(v-if="!$v.password.minLength && $v.password.$error") minimo de 6 caracteres são necessários
          
        
        div.input.mb-2
          label.mb-1(for="password") Repita a senha
          input.rounded-lg.h-6(type="password" placeholder="Repita sua senha" v-model="passwordRepeat" :class=" $v.passwordRepeat.$error ? 'fail-error' : '' ")
          div.warning(v-if="!$v.passwordRepeat.sameAs && $v.passwordRepeat.$error") As senhas não batem

        defaultButton.mt-4(:disabledButton="disabledButton" typeButton="submit" :valueButton="valueButton" :event="register")

        
</template>

<script>
import {required,email,minLength,sameAs} from "vuelidate/lib/validators"
import defaultButton from '../components/default-button.vue';



export default {
  name: 'Register',
  components:{
    'defaultButton' : defaultButton
  },
  data(){
    return{
      nome: '',
      email:'',
      password:'',
      valueButton:'Registrar',
      passwordRepeat: '',
      disabledButton:false
    }
  },

  validations:{
    nome: {required},
    email: {required,email},
    password: {
      required,
      minLength: minLength(6)
    },
    passwordRepeat:{
      required,
      sameAs: sameAs('password'),
    }
  },
  methods:{
    async register(ev){
      ev.preventDefault();
      if(this.$v.$invalid){
        this.$v.$touch()
        return 
      }

      this.valueButton = 'Registrando'
      this.disabledButton = true
      
      await this.$axios.$get('http://localhost:8000/sanctum/csrf-cookie').then((resp)=>{
        
      })
      await this.$axios.$post('http://localhost:8000/register',{
        'name' : this.nome,
        'email' : this.email,
        'password' : this.password
      }).
      then((res)=>{
        this.disabledButton = false
        this.valueButton = 'Registrar'
        this.$store.dispatch('warning/setWarning',res.message)
        this.$router.push('/')
      }).catch((err)=>{
        this.disabledButton = false
        this.valueButton = 'Registrar'
        this.$store.dispatch('warning/setWarning',err.response.data.message)
        this.nome = ''
        this.email = ''
        this.password = ''
        this.passwordRepeat = ''
      })
    },
   

    async metlaravel(){
      await this.$axios.$get('http://localhost:8000/sanctum/csrf-cookie').then((resp)=>{
        console.log(resp)
      })

      await this.$auth.loginWith('laravelSanctum',{
        
         data: {
          email: this.email,
          password: this.password,
        },
          
        
        }).then((resp)=>{
          this.email = ''
          this.password = ''
          this.$router.push('/')
        }).catch((err)=>{
          console.log(err)
        })
    }
    
  },
  mounted(){
 
  
    
  }
}
</script>
<style lang="stylus" scoped>
  .background-attach
    background-image url('../static/img/onegai.jpg')
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