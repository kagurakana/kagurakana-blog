<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name:'App',
  mounted(){
    // 防抖 缩放重新计算大小
    const commitResize = _.debounce(()=>{this.$store.commit('resize')},100)
    window.onresize = ()=>{
      commitResize()
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/base.css";
</style>