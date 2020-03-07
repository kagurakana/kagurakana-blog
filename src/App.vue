<template>
  <v-app id="app">
    <!-- <keep-alive include="Home"> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <FloatingButton />
  </v-app>
</template>

<script>
import _ from "lodash";
import "assets/css/base.css";
import FloatingButton from "components/common/floatingButton/FloatingButton";
export default {
  name: "App",

  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-koharu/assets/",
        tagMode: true,
        debug: false,
        display: { position: "left", width: 200, height: 400, vOffset: -120 },
        model: {
          jsonPath:
            "/live2dw/live2d-widget-model-koharu/assets/koharu.model.json"
        },
        mobile: { show: false },
        log: false
      });
    }, 3000);
  },
  
  mounted() {
    // 防抖 缩放重新计算大小

    const commitResize = _.debounce(() => {
      this.$store.commit("resize");
    }, 100);

    window.onresize = () => {
      commitResize();
    };
  },

  components: {
    FloatingButton
  }
};
</script>
<style lang="scss" scoped>
</style>
