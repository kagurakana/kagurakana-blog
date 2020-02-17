<template>
  <div>
    <!-- <MidSwapper :banners="banners" /> -->
  </div>
</template>

<script>
import MidSwapper from "./mid/MidSwapper";
export default {
  name: "MidContent",
  components: {
    MidSwapper
  },
  data() {
    return {
      banners: [
        {
          image: "https://s2.ax1x.com/2020/02/17/394fVe.png",
          link: "https://imgchr.com/i/39445d"
        },
        {
          image: "https://s2.ax1x.com/2020/02/17/39445d.png",
          link: "https://imgchr.com/i/39445d"
        }
      ]
    }
  }
};
</script>

<style lang='scss' scoped>
</style>