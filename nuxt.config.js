export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'screellabs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css',
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/uvu3cvp.css' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: './assets/styles/_includes.sass',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    headers: {
      'Content-Type': 'application/json',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
