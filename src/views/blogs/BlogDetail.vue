<template>
  <div>
    <HomeNav class="home-nav" />
    <Content>
      <template v-slot:mid>
        <BlogText :blog="blogDetail" />
        <v-divider class="my-3"></v-divider>
        <BlogComment :id="id"/>
      </template>
    </Content>
  </div>
</template>

<script>
import HomeNav from "views/home/childComps/HomeNav";
import Content from "components/common/content/Content";
import BlogText from "./childComps/BlogText";
import BlogComment from "components/common/comment/Comment";
import { getBlogDetail } from "network/blog";
export default {
  name: "BlogDetail",
  components: {
    Content,
    HomeNav,
    BlogText,
    BlogComment
  },
  created() {
    this.id = this.$route.params.id;
    getBlogDetail(this.id)
      .then(blog => {
        blog.data[0].tags = blog.data[0].tags.split(",");
        this.blogDetail = blog.data[0];
      })
      .catch(err => {});
  },
  data() {
    return {
      id: "",
      blogDetail: {}
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