const PrerenderSPAPlugin = require("prerender-spa-plugin");
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const path = require("path");
const packgeConfig = require("./package.json");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 预渲染组件，gzip组件
      let plugins = [
        // new PrerenderSPAPlugin({
        //   staticDir: path.join(__dirname, "dist"),
        //   routes: ["/", "/friends", "/about"],
        //   minify: {
        //     minifyCSS: true, // css压缩
        //     removeComments: true, // 移除注释
        //   },
        //   server: {
        //     proxy: {
        //       "/api": {
        //         target: "https://www.kagurakana.xyz/api",
        //         secure: true,
        //       },

        //       // '/out/bangumi': {
        //       //   target: 'https://api.bilibili.com/x/space/bangumi/follow/list?type=1&follow_status=0&pn=1&ps=15&vmid=14076737&ts=1585838533034', // 你请求的第三方接口
        //       //   changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //       //   pathRewrite: {  // 路径重写，
        //       //     '^/out/bangumi': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        //       //   }
        //       // },
        //     },
        //   },

        //   renderer: new Renderer({
        //     // Optional - The name of the property to add to the window object with the contents of `inject`.
        //     injectProperty: "__PRERENDER_INJECTED",
        //     // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
        //     inject: {},
        //     // 在 main.js 中 new Vue({ mounted () {document.dispatchEvent(new Event('render-event'))}})，两者的事件名称要对应上。
        //     renderAfterDocumentEvent: "render-event",
        //   }),
        // }),
        // new CompressionWebpackPlugin({
        //   algorithm: "gzip", // 使用gzip压缩
        //   test: /\.(js|css)$/, // 匹配文件名
        //   filename: "[path].gz[query]", // 压缩后的文件名(保持原文件名，后缀加.gz)
        //   minRatio: 1, // 压缩率小于1才会压缩
        //   threshold: 10240, // 对超过10k的数据压缩
        //   deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
        // }),
      ];
      typeof config.plugins === "undefined"
        ? (config.plugins = plugins)
        : (config.plugins = config.plugins.concat(plugins));
    }
    // 复制路径别名
    Object.assign(config.resolve.alias, {
      assets: "@/assets",
      common: "@/common",
      network: "@/network",
      components: "@/components",
      views: "@/views",
    });

    config.externals = {
      moment: "moment",
    };
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "神楽花菜OFFICIAL";
      return args;
    });
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/css/variables.scss";
        `,
      },
    },
  },

  publicPath:
    process.env.NODE_ENV === "production"
      ? `https://cdn.jsdelivr.net/gh/kagurakana/kagurakana-blog@${packgeConfig.version}/dist/`
      : "/",

  transpileDependencies: ["vuetify"],

  // productionSourceMap: true,

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/css/variables.scss";',
      },
    },
  },
  // ---dev online api---

  //  devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://www.kagurakana.xyz',
  //     }
  //   }
  // },
  // --------

  //  ---dev local api---
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //     },
  //   },
  // },
  // devServer: __dev_server__,
  devServer: (() => {
    switch (process.env.NODE_ENV) {
      case "production":
        return undefined;
      case "development":
        return {
          proxy: {
            "/api": {
              target: "http://localhost:3000",
            },
          },
        };
    }
  })(),
  productionSourceMap: false,
};
