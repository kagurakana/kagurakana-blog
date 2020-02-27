<template>
  <v-progress-linear :value="percent" class="liner-bar"></v-progress-linear>
</template>

<script>
import _ from "lodash";
export default {
  name: "",
  mounted() {
    const throttledScrollHandler = _.throttle(() => {
      this.scrollhandler();
    }, 50);
    window.onscroll = () => {
      // debouncedScrollHandler()
      throttledScrollHandler()
    };
  },
  data() {
    return {
      offsetTop: 0,
      percent: 0
    };
  },

  methods: {
    scrollhandler() {
      this.offsetTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.percent =
        ((this.offsetTop + window.innerHeight) / document.body.offsetHeight) *
        100;
    }
  }
};
</script>

<style lang='scss' scoped>
</style>