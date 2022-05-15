export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'otakuBR',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
      },
    },
  },

  // server: {
  //   port: 3010,
  //   host: 'app.otakubr.test'
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/material-icons.js'
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  router:{
    // middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: 
    [
      // [
      //   '@nuxtjs/firebase',{
      //   config: {
      //     apiKey: "AIzaSyCcE_vof_L3Rcd269FFj4RQ04MS_AGOiHg",
      //     authDomain: "otakubr-bb243.firebaseapp.com",
      //     projectId: "otakubr-bb243",
      //     storageBucket: "otakubr-bb243.appspot.com",
      //     messagingSenderId: "701794493917",
      //     appId: "1:701794493917:web:960c85bc89eabbc6788234",
      //     measurementId: "G-1Y8FTQSDY6"
      //   },
      //   services: {
      //     auth: true,
      //     storage:true,
      //     database:true
      //   },
      //   auth: {
      //     persistence: 'local',
      //     initialize: {
      //       onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      //       onAuthStateChangedAction: 'onAuthStateChangedAction',
      //       subscribeManually: false
      //     },
      //     ssr: false, // default
      //     emulatorPort: 9099,
      //     emulatorHost: 'http://localhost',
      //   }
      // }],
      '@nuxtjs/axios',
      '@nuxtjs/auth-next',
      // '@nuxtjs/proxy',

  ],
  // proxy: {
  //   '/laravel': {
  //     target: 'https://laravel-auth.nuxtjs.app',
  //     pathRewrite: { '^/laravel': '/' }
  //   }
  // },

  axios:{
    credentials: true,
    // proxy: true,
  },

  build: {
  },
 
}
