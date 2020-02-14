<template>
  <div>
    <HomeHeadPic />
    <HomeNav/>
  </div>
</template>

<script>
import HomeHeadPic from "./childComps/HomeHeadPic";
import HomeNav from "./childComps/HomeNav"
export default {
  name: "Home",
  components: {
    HomeHeadPic,
    HomeNav
  },
  mounted() {
    this.$store.commit('resize')
  },
};
</script>

<style lang='scss' scoped>
</style>