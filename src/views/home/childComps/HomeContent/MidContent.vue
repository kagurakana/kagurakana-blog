<template>
  <div>
    <MidSwapper />
    <QuickShow />
    <BlogList />
  </div>
</template>

<script>
import MidSwapper from "./mid/MidSwipper";
import QuickShow from "components/common/quickShow/QuickShow";
import BlogList from "components/common/blogList/BlogList";
export default {
  name: "MidContent",
  components: {
    MidSwapper,
    QuickShow,
    BlogList
  }
};
</script>

<style lang='scss'>
</style>