<template>
  <div class="home-mid">
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
    //listData位于getListDataMixin中,为返回的博客list(title,desc,createTime,tags)数据
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
.home-mid{
  // padding-top: 10vh
}
</style>