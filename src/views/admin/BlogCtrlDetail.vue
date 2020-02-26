<template>
  <div>
    <h1>{{text}}</h1>
    <v-col cols="12" md="4">
      <v-textarea v-model="id" label="id"></v-textarea>
      <v-col cols="6">
        <v-btn color="lime" @click.stop.native="updateBlog">更新</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn color="error" @click.stop.native="deleteBlog">删除</v-btn>
      </v-col>
    </v-col>
    <AdminBlogList :blogList="list" />
  </div>
</template>

<script>
import AdminBlogList from "./childComps/AdminBlogList";
import { getBlogList, postDeleteBlog } from "network/blog";
import { getLoginCheck } from "network/user";
export default {
  name: "BlogCtrlDetail",
  components: {
    AdminBlogList
  },
  data() {
    return {
      list: [],
      text: "验证中。。。。",
      id: ""
    };
  },
  created() {
    getLoginCheck().then(res => {
      if (res.errno !== -1) {
        this.isAdmin = true;
        this.text = "欢迎回来 kagurakana！";
        getBlogList().then(res => {
          this.list = res.data;
        });
      }
    });
  },
  methods: {
    updateBlog() {},
    deleteBlog() {
      postDeleteBlog(this.id).then(res => {
        if (res.errno !== -1) {
          this.text = "删除成功";
          setTimeout(() => {
            this.text = "欢迎回来 kagurakana！";
          }, 6000);
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>