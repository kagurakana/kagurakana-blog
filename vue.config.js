module.exports = {
  "configureWebpack": {
    "resolve": {
      "alias": {
        "assets": "@/assets",
        "common": "@/common",
        "network": "@/network",
        "components": "@/components",
        "views": "@/views"
      }
    },
    "externals": { 'moment': 'moment' }
  },

  "css": {
    "loaderOptions": {
      "scss": {
        "prependData": `
        @import "~@/assets/css/var.scss";
        `
      }
    }
  },

  "publicPath": "/",

  "transpileDependencies": [
    "vuetify"
  ],

  // productionSourceMap: true,

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/css/var.scss";'
      }
    }
  },

  productionSourceMap: false
}