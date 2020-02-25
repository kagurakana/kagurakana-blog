<template>
  <div>
    <!-- TODO 绑定数据 -->
    <MidSwapper :swiperData="swiperData" />
    <QuickShow :quickShows="quickShowData" />
    <BlogList :blogList="blogListData" />
  </div>
</template>

<script>
import MidSwapper from "./mid/MidSwipper";
import QuickShow from "components/common/quickShow/QuickShow";
import BlogList from "components/common/blogList/BlogList";

import getListDataMixin from "@/mixins/getListDataMixin";
export default {
  name: "MidContent",
  mixins: [getListDataMixin],
  components: {
    MidSwapper,
    QuickShow,
    BlogList
  },
  created() {
    this.getListData().then(res => {
      this.swiperData = this.listData.slice(0, 3);
      this.quickShowData = this.listData.slice(3, 6);
      this.blogListData = this.listData.slice(6);
    });
  },
  data() {
    return {
      swiperData: [],
      quickShowData: [],
      blogListData: []
    };
  },
  methods: {}
};
</script>

<style lang='scss'>
</style>