<template>
  <div>
    <HomeNav class="home-nav" />
    <div class="content">
      <v-scale-transition hide-on-leave>
        <v-skeleton-loader
          v-if="loading"
          height="100vh"
          type="image,article,paragraph,paragraph,paragraph,paragraph,paragraph,paragraph"
        ></v-skeleton-loader>
        <BlogText v-else :blog="blogDetail" />
      </v-scale-transition>
      <div class="mx-auto col-12 col-lg-7">
        <v-divider class="my-3"></v-divider>
        <BlogComment :blogId="id" />
        <BlogCommentList :blogId="id" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeNav from "views/home/childComps/HomeNav";
import BlogText from "./childComps/BlogText";
import BlogComment from "components/common/comment/Comment";
import BlogCommentList from "components/common/comment/CommentList";
import { getBlogDetail } from "network/blog";
export default {
  name: "BlogDetail",
  components: {
    HomeNav,
    BlogText,
    BlogComment,
    BlogCommentList
  },
  created() {
    this.id = this.$route.params.id;
    this.$vuetify.goTo(0, 1000);
    getBlogDetail(this.id)
      .then(blog => {
        blog.data[0].tags = blog.data[0].tags.split(",");
        this.blogDetail = blog.data[0];
        this.loading = false;
        document.title = "神楽花菜OFFICIAL|" + blog.data[0].title;
      })
      .catch(err => {});
  },
  data() {
    return {
      id: "",
      blogDetail: {},
      loading: true
    };
  }
};
</script>

<style lang='scss' scoped>
.home-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.content{
    background-color: #fafbf1;
}
</style>