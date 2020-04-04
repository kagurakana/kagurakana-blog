<template>
  <div>
    <HomeNav class="home-nav" />
    <!-- use with content component to |25%|50%|25%| -->
    <slot name="layout"></slot>
  <!--use with v-container to |.|75%|.|  -->
    
    <v-img
      width="100vw"
      class="background"
      height="100vh"
      src="https://cdn.kagurakana.xyz/DpumTcUX4AEvMfp.jpg"
    ></v-img>
  </div>
</template>

<script>
import HomeNav from "views/home/childComps/HomeNav";
export default {
  name: "BaseLayout",
  components:{
    HomeNav
  }
};
</script>

<style lang='scss' scoped>
.home-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.background {
  position: fixed;
  top: 0;
  z-index: 0;
}
</style>