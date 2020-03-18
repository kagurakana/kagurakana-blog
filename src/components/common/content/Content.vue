<template>
  <div class="content">
    <transition
      appear
      enter-active-class="animated fadeInLeft "
      leave-active-class="animated fadeOutLeft "
    >
      <div class="left" v-show="!isMobile">
        <slot name="left"></slot>
      </div>
    </transition>
    <v-col class="mid" cols="12" md="6">
      <slot name="mid"></slot>
    </v-col>
    <transition
      appear
      enter-active-class="animated fadeInRight "
      leave-active-class="animated fadeOutRight "
    >
      <div class="right" v-show="!isMobile">
        <slot name="right"></slot>
      </div>
    </transition>
  
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Content",
  components: {},
  computed: {
    ...mapGetters(["isMobile"])
  },

};
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  display: flex;
  .left {
    flex: 1;
    // height: 50vh;
    background-color: rgba($base-lightgray-color, 0.2);
    // opacity: 0.2;
    // background-color: red;
    position: relative;
    z-index: 2;
  }
  .right {
    flex: 1;
    // height: 50vh;
    z-index: 2;
    position: relative;
    // opacity: 0.2;
    // background-color: red;
    background-color: rgba($base-lightgray-color, 0.2);
  }
  .mid {
    padding-top: 10px;
    flex: 2;
    // opacity: 0.5;
    background-color: rgba(#fff, 0.4);
    // background: blue;
    // background-color: #fff;

    // height: 100vh;
  }
  .fadeOutLeft,
  .fadeOutRight {
    animation-duration: 0.5s;
  }
}
</style>