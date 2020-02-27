<template>
  <v-app id="app" v-scroll:#app='onScroll'>
    <v-progress-linear class="liner-bar" value="15"></v-progress-linear>
    <keep-alive include="Home">
    <router-view></router-view>
    </keep-alive>
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <FloatingButton/>
<div>{{offsetTop}}</div>
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
  data() {
    return {
      offsetTop:0
    }
  },
  components:{
    FloatingButton
  },
  methods:{
    onScroll (e) {
      console.log(e)
      this.offsetTop = e.target.scrollTop
    },
  }
};
</script>
<style lang="scss" scoped>
.liner-bar{
  position: fixed;
  top :0;
  z-index: 10000;
}

#app{
  height: 100vh;
  overflow-y: scroll;
}
</style>
