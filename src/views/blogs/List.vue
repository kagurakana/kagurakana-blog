<template>
  <div>
    <HomeNav class="home-nav" />

    <Content>
      <template v-slot:mid>
         <h1>{{tag}}</h1>
        <!-- TODO：在这绑定数据 -->
        <QuickShow :quickShows="quickShowData" />
        <BlogList :blogList="blogListData" />
      </template>
    </Content>
  </div>
</template>

<script>
import HomeNav from "views/home/childComps/HomeNav";
import Content from "components/common/content/Content";
import QuickShow from "components/common/quickShow/QuickShow";
import BlogList from "components/common/blogList/BlogList";
import { mapGetters } from "vuex";

import getListDataMixin from "@/mixins/getListDataMixin";
export default {
  name: "List",
  mixins: [getListDataMixin],
  created() {
    this.getUrlTag();
    this.getListData(this.tag).then(res => {
      this.quickShowData = this.listData.slice(0, 3);
      this.blogListData = this.listData.slice(3);
    });
  },
  components: {
    Content,
    QuickShow,
    HomeNav,
    BlogList
  },
  data() {
    return {
      // tag: "",
      // listData: [],
      quickShowData: [],
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
    this.getUrlTag();
    this.getListData(this.tag).then(res => {
      this.quickShowData = this.listData.slice(0, 3);
      this.blogListData = this.listData.slice(3);
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
.home-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>