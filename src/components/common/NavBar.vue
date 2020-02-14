<template>
  <div class="nav">
    <transition
      appear
      enter-active-class="animated bounceInLeft "
      leave-active-class="animated bounceOutLeft "
    >
      <div v-show="isShow" class="nav-left">
        <slot name="left"></slot>
      </div>
    </transition>
    <slot class="nav-right" name="right"></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["winWidth", "cliWidth"]),
    isShow() {
      return this.cliWidth / this.winWidth < 0.48 ? false : true;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.nav {
  height: 80px;
  display: flex;
  width: 100%;
  background-color: $base-lightgray-color;
}
.nav-left {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 5px 1%;
}
.nav-list-animation {
  transition: transform 0.5s;
}
</style>