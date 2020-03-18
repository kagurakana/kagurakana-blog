<template>
  <div class="home-mid">
    <!-- TODO 绑定数据 -->
    <MidSwapper :swiperData="swiperData" />
    <QuickShow :quickShows="quickShowData" />
    <BlogList :blogList="blogListData" />
    <v-col cols="12" class="beian text-center">
      <a
        target="_blank"
        href="http://beian.miit.gov.cn/"
        style="display:block;text-decoration:none;height:20px;line-height:20px;"
      >
        <p style="height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#fff;">鄂ICP备20002676号</p>
      </a>
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001189"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"
      >
        <p style="height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#fff;">
          <img src="~assets/img/beian.png" />鄂公网安备 42011502001189号
        </p>
      </a>
    </v-col>
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
.home-mid {
  // padding-top: 10vh
}
.beian {
  position: relative;
  z-index: 2;
}
</style>