<template>
  <div>
    <HomeNav class="home-nav" />
    <Content>
      <template v-slot:mid>
        <v-scale-transition hide-on-leave>
          <v-skeleton-loader
            v-if="loading"
            height="100vh"
            type="image,article,paragraph,paragraph,paragraph,paragraph,paragraph,paragraph"
          ></v-skeleton-loader>
          <BlogText v-else :blog="blogDetail" />
        </v-scale-transition>
        <v-divider class="my-3"></v-divider>
        <BlogComment :blogId="id" />
        <BlogCommentList :blogId="id" />
      </template>
    </Content>
  </div>
</template>

<script>
import HomeNav from "views/home/childComps/HomeNav";
import Content from "components/common/content/Content";
import BlogText from "./childComps/BlogText";
import BlogComment from "components/common/comment/Comment";
import BlogCommentList from "components/common/comment/CommentList";
import { getBlogDetail } from "network/blog";
export default {
  name: "BlogDetail",
  components: {
    Content,
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
</style>