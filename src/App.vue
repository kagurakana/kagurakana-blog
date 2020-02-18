<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
import _ from "lodash";
import 'assets/css/base.css'
export default {
  name: "App",
  mounted() {
    // 防抖 缩放重新计算大小

    const commitResize = _.debounce(() => {
      this.$store.commit("resize");
    }, 100);

    window.onresize = () => {
      commitResize();
    };
  }
};
</script>
