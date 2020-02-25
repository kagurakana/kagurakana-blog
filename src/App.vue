<template>
  <v-app id="app">
    <keep-alive include="Home">
    <router-view></router-view>
    </keep-alive>
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <FloatingButton/>
  </v-app>

</template>

<script>
import _ from "lodash";
import 'assets/css/base.css'
import FloatingButton from 'components/common/floatingButton/FloatingButton'
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
  },
  components:{
    FloatingButton
  }
};
</script>
