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
    }
  },
  "css": {
    "loaderOptions": {
      "scss": {
        "prependData": "@import \"~@/assets/css/var.scss\";"
      }
    }
  },
  "publicPath": "./",
  "transpileDependencies": [
    "vuetify"
  ]
}