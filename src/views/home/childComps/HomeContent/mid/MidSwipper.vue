<template :max-width="imgWidth">
   <v-card :max-height="imgHeight" :max-width="imgWidth">
      <v-carousel class="swiper" :height="imgHeight" cycle show-arrows>
        <v-carousel-item
          class="swiper-img"
          v-for="(item, index) in banners"
          :src="item.image"
          :key="index"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'MidSwipper',
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
      ],
    };
  },
  computed: {
    ...mapGetters(["cliWidth", "isMobile"]),
    imgHeight() {
      return this.isMobile ? (this.cliWidth / 4) * 3 : 400;
    },
    imgWidth() {
      return this.isMobile ? "100vw" : "50vw";
    }
  }

};
</script>

<style lang='scss' scoped>

</style>