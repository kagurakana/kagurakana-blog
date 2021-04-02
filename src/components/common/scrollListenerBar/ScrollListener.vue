<template>
  <div class="scrollListenerBar" ref="scrollListenerBar"></div>
</template>

<script>
import _ from "lodash";

export default {
  name: "ScrollListener",
  mounted() {
    window.onscroll = () => {
      let windowHeight = window.innerHeight;
      let wintop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let docHeight = document.body.offsetHeight;
      this.$refs.scrollListenerBar.style.width = `${
        (wintop / (docHeight - windowHeight)) * 100
      }%`;
    };
  },
};
</script>

<style lang='scss' scoped>
.scrollListenerBar {
  width: 0%;
  height: 3px;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  box-shadow: 0px 0px 10px 3px rgba($color: #4158d0, $alpha: 0.3);
  border-radius: 3px;
  transition-duration: 1s;
  &::after {
    position: absolute;
    right: 0;
    width: 3px;
    height: 3px;
    background-color: red;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    border-radius: 50%;
    background-color: transparent;
    box-shadow: 0px 0px 10px 4px rgba($color: #4158d0, $alpha: 0.2);
  }
}
</style>