<template>
  <v-progress-linear :value="percent" class="liner-bar"></v-progress-linear>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
export default {
  name: "ScrollListener",
  mounted() {
    const throttledScrollHandler = _.throttle(this.scrollhandler, 50);
    window.onscroll = () => {
      // debouncedScrollHandler()
      throttledScrollHandler();
    };
    this.percent = 0;
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
  },
  activated() {
    const throttledScrollHandler = _.throttle(this.scrollhandler, 50);
    window.onscroll = () => {
      // debouncedScrollHandler()
      throttledScrollHandler();
    };
    this.percent = 0;
  },
};
</script>

<style lang='scss' scoped>
</style>