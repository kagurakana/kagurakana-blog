<template>
  <BaseLayout>
    <template v-slot:layout>
      <Content class="content">
        <template v-slot:mid>
          <!-- <v-img
          class="align-center justify-center d-flex text-center"
          height="400px"
          src="https://i.loli.net/2020/03/01/pnsZHyfKrl5LR46.jpg"
        >
          <v-row class="justify-center">
            <h1 class="align-center d-flex text-center list-title justify-center">{{tag}}</h1>
          </v-row>
          </v-img>-->
          <!-- TODO：在这绑定数据 -->
          <!-- <QuickShow :quickShows="quickShowData" /> -->
          <BlogList :blogList="blogListData" />
        </template>
      </Content>
    </template>
  </BaseLayout>
</template>

<script>
// import QuickShow from "components/common/quickShow/QuickShow";
import BaseLayout from "components/common/baseLayout/BaseLayout";
import Content from "components/common/content/Content";
import BlogList from "components/common/blogList/BlogList";
import { mapGetters } from "vuex";

import getListDataMixin from "@/mixins/getListDataMixin";
export default {
  name: "List",
  mixins: [getListDataMixin],
  created() {
    this.getUrlTag();
    //listData位于getListDataMixin中,为返回的博客list(title,desc,createTime,tags)数据
    this.getListData(this.tag).then(res => {
      this.blogListData = this.listData;
      // if ((this.listData.length > 3)) {
      //   this.quickShowData = this.listData.slice(0, 3);
      //   this.blogListData = this.listData.slice(3);
      // } else {
      //   this.blogListData = this.listData
      // }
    });
    this.$nextTick(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  },
  components: {
    Content,
    // QuickShow,
    BlogList,
    BaseLayout
  },
  data() {
    return {
      // quickShowData: [],
      blogListData: []
    };
  },
  computed: {
    ...mapGetters(["search"])
  },
  methods: {
    // getListData() {
    //   const arr = this.$route.path.split("/");
    //   const tag = arr[arr.length - 1];
    //   this.tag = tag;
    //   getBlogList(tag).then(list => {
    //     this.listData = list.data;
    //     console.log(this.listData);
    //     this.quickShowData = this.listData.slice(0, 3);
    //     this.blogListData = this.listData.slice(3);
    //   });

    getUrlTag() {
      const arr = this.$route.path.split("/");
      const tag = arr[arr.length - 1];
      this.tag = tag;
    }
  },

  beforeRouteUpdate(to, from, next) {
    next();
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.getUrlTag();
    document.title = '神楽花菜OFFICIAL|'+this.tag;
    this.getListData(this.tag).then(res => {
      this.blogListData = this.listData;

      // if ((this.listData.length > 3)) {
      //   this.quickShowData = this.listData.slice(0, 3);
      //   this.blogListData = this.listData.slice(3);
      // } else {
      //   this.blogListData = this.listData
      // }
    });
  }
  // watch: {
  //   $route() {
  //     const arr = this.$route.path.split("/");
  //     const tag = arr[arr.length - 1];
  //     this.tag = tag;
  //     console.log(tag);
  //   }
  // }
};
</script>

<style lang='scss' scoped>
.list-title {
  height: 200px;
  width: 300px;
  background-color: rgba($color: #fff, $alpha: 0.5);
  border-radius: 25px;
}
.content {
  position: relative;
  z-index: 1;
}
</style>