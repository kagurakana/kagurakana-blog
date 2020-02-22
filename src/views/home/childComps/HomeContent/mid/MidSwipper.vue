<template >
  <v-col sm='12' cols="12">
     <v-card :max-height="imgHeight" :max-width="imgWidth"
   class="mx-auto"
   >
      <v-carousel class="swiper" :height="imgHeight" cycle show-arrows>
        <v-carousel-item
          class="swiper-img"
          v-for="(item, index) in swiperData"
          :src="item.headPic"
          :key="index"
          @click="pushRoute(item)"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'MidSwipper',
  props:{
    swiperData:{
      type:Array
    }
  },
  computed: {
    ...mapGetters(["cliWidth", "isMobile"]),
    imgHeight() {
      return this.isMobile ? (this.cliWidth / 4) * 3 : 400;
    },
    imgWidth() {
      return this.isMobile ? "100vw" : "50vw";
    }
  },
  methods:{
    pushRoute(item){
      this.$router.push('/detail/'+item.id)
    }
  }

};
</script>

<style lang='scss' scoped>

</style>