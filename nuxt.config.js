export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - ${process.env.APP_NAME}`,
    title: process.env.APP_NAME,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
      }
    ]
  },

  // Customize the progress-bar color
  loading: '@/components/common/atoms/AppLoading',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/theme.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/api',
    '@/plugins/axios',
    '@/plugins/clipboard',
    '@/plugins/vee-validate',
    '@/plugins/vue-currency-filter',
    // filters
    '@/plugins/filters/capitalize',
    '@/plugins/filters/format-address',
    '@/plugins/filters/format-date',
    '@/plugins/filters/lowercase',
    '@/plugins/filters/map-type',
    '@/plugins/filters/uppercase'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Router configuration: https://nuxtjs.org/api/configuration-router
  router: {
    middleware: ['auth']
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next',
    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',
    // https://github.com/Maronato/vue-toastification
    'vue-toastification/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    credentials: true
  },

  // Proxy module configuration: https://github.com/nuxt-community/proxy-module
  proxy: {
    '/api': {
      target: process.env.API_URL
    }
  },

  // Auth module configuration: https://auth.nuxtjs.org/guide/scheme
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: false,
      home: false
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login'
          },
          logout: {
            url: '/api/auth/logout'
          },
          user: {
            url: '/api/auth/user'
          }
        },
        token: {
          property: 'data.access_token'
        },
        user: {
          property: 'data.user'
        }
      },
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: '/api/auth/login'
          },
          logout: {
            url: '/api/auth/logout'
          },
          user: {
            url: '/api/auth/user'
          }
        },
        token: {
          property: 'data.access_token'
        },
        user: {
          property: 'data.user'
        }
      }
    }
  },

  // I18n module configuration: https://i18n.nuxtjs.org/options-reference
  i18n: {
    locales: [
      {
        code: 'vi',
        iso: 'vi-VN',
        file: 'vi.json'
      }
    ],
    defaultLocale: 'vi',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'vi'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/scss/vuetify/variables/_index.scss'],
    optionsPath: '@/configs/vuetify.js',
    treeShake: true,
    defaultAssets: {
      font: false
    }
  },

  // TailwindCSS module configuration: https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
    configPath: '@/configs/tailwind.js'
  },

  // Moment module configuration: https://github.com/nuxt-community/moment-module
  moment: {
    locales: ['vi'],
    defaultLocale: 'vi'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
