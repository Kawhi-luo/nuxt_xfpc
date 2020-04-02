import ApiConfig from './config/api'
const webpack = require('webpack')
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'pc-nuxt-re',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'pc-nuxt-re-des' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      {
        src: "/gis/ol/ol.js",
      },
      {
        src: "/gis/proj4.js",
      },
      {
        src: "/gis/turf.min.js",
      },
      {
        src: "/gis/g2.js",
      },
      // {
      //   src: "/gis/gis.js",
      // },
      // {
      //   src: "/gis/commands.js",
      //   type: "text/javascript",
      // },
      // {
      //   src: "/gis/services.js",
      // },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: "/gis/ol/ol.css",
        rel: "stylesheet",
      }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui', '@/plugins/http', '@plugins/echarts', '@plugins/storage', '@plugins/bus'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios', '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
    prefix: '/enterprise',
    credentials: true
  },
  proxy: {
    '/enterprise': {
      target: ApiConfig.apiHost,
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/enterprise': ''
      }
    }
  },
  router: {
    middleware: 'authCheck'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ]
  }
}
