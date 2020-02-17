<template>
  <div class="content">
    <transition
      appear
      enter-active-class="animated bounceInLeft "
      leave-active-class="animated bounceOutLeft "
    >
    <div  class="left" v-show="!isMobile">
      <slot  name="left"></slot>
      </div>
    </transition>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <transition
      appear
      enter-active-class="animated bounceInRight "
      leave-active-class="animated bounceOutRight "
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
  }
};
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  display: flex;
  .left {
    flex: 1;
    height: 50vh;
    background-color: #fff;
    background-color: red;
    position: relative;
    z-index: 2;
  }
  .right {
    flex: 1;
    height: 50vh;
    z-index: 2;
    position: relative;
    background-color: red;
  }
  .mid {
    flex: 2;
    background: blue;
    height: 100vh;
  }
  .bounceOutLeft,
  .bounceOutRight {
    animation-duration: 0.5s;
  }
}
</style>