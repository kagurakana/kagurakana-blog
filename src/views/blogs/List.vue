<template>
  <div>
    <HomeNav class="home-nav" />

    <Content>
      <template v-slot:mid>
        <v-img  class="align-center justify-center d-flex text-center" height="400px" src="https://i.loli.net/2020/03/01/pnsZHyfKrl5LR46.jpg">
          <v-row class="justify-center"><h1 class="align-center d-flex text-center list-title justify-center">{{tag}}</h1></v-row>
        </v-img>
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
.list-title{
  height: 200px;
  width: 300px;
  background-color: rgba($color: #fff, $alpha: 0.5);
  border-radius: 25px;
}
</style>