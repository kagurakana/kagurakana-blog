<template>
  <!-- 后台管理页 -->
  <div>
    <div class="blog-manage-container">
      <h1 class="blog-manage-title">{{ text }}</h1>
      <AdminBlogList :blogList="list" />
    </div>
  </div>
</template>

<script>
import AdminBlogList from "./childComps/AdminBlogList";
import { getBlogList, postDeleteBlog } from "network/blog";
import { getLoginCheck } from "network/user";
export default {
  name: "BlogCtrlDetail",
  components: {
    AdminBlogList,
  },
  data() {
    return {
      list: [],
      text: "验证权限中。。。。",
      id: "",
    };
  },
  created() {
    getLoginCheck().then((res) => {
      if (res.errno !== -1) {
        this.isAdmin = true;
        this.text = "文章管理";
        getBlogList().then((res) => {
          this.list = res.data;
        });
      }
    });
  },
  methods: {
    deleteBlog() {
      postDeleteBlog(this.id).then((res) => {
        if (res.errno !== -1) {
          this.text = "删除成功";
          setTimeout(() => {
            this.text = "文章管理";
          }, 6000);
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.blog-manage-title {
}
.blog-manage-container {
  width: 80%;
  min-width: 900px;
  padding: 15px;
  margin: 25px auto;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #fff !important;
}
</style>