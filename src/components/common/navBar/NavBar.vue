<template>
  <transition-group tag="div" class="nav" name="trans-grop">
    <div class="inline-box" key="left">
      <transition
        appear
        enter-active-class="animated bounceInLeft "
        leave-active-class="animated bounceOutLeft "
      >
        <div v-show="isShow" class="nav-left nav-list-animation">
          <slot name="left"></slot>
        </div>
      </transition>
    </div>

    <div class="nav-right" key="right">
      <transition appear enter-active-class="animated bounceInRight">
        <div class="nav-right nav-container">
          <slot class="nav-right" name="right"></slot>
        </div>
      </transition>
    </div>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["winWidth", "cliWidth"]),
    isShow() {
      return this.cliWidth / this.winWidth < 0.48 || this.winWidth < 1000
        ? false
        : true;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.nav {
  box-shadow: 2px 5px 2px 1px rgba($devide-line-color, 0.5);

  height: $home-nav-height;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  background-color: $base-lightgray-color;
}
.nav-left {
  display: inline-flex;
  width: 300px;
  align-items: center;
  height: 100%;
  padding: 5px 1%;
}
.nav-right {
  flex: 1;
  display: inline-flex;
  text-align: center;
}

.nav-container {
  display: flex !important;
}
.nav-list-animation {
  animation-duration: 1s;
}
.inline-box {
  display: inline-block;
}
.trans-grop-move {
  transition: transform 1.5s;
}
.bounceOutLeft {
  width: 1px;
}
</style>