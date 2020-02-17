<template>
  <Swiper>
    <template v-slot:swiperItem>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" alt />
        </a>
      </SwiperItem>
    </template>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.isLoad = !this.isLoad;
        // this.$emit("homeSwiperImgLoad");
      }
    }
  }
};
</script>

<style lang='scss' scoped>
#swiper{
  width: 100%;
  height: 400px;
}
</style>