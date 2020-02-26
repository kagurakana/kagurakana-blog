<template>
  <div>
    <h1>{{loginCheckMessage}}</h1>
    <v-row v-if="isAdmin">
      <v-col cols="12">
        <v-col cols="8" class="mx-auto">
          <v-text-field v-model="title" label="title"></v-text-field>
          <v-text-field v-model="tags" label="tags"></v-text-field>
          <v-text-field v-model="headPic" label="headPic"></v-text-field>
        </v-col>
        <v-col cols="11" class="mx-auto">
          <v-textarea v-model="desc" label="desc"></v-textarea>
          <v-row>
            <v-col cols="6">
              <v-textarea v-model="content" auto-grow outlined label="content"></v-textarea>
            </v-col>
            <v-col cols="6">
              <article class="context" v-html="compiledMarkdown"></article>
            </v-col>
          </v-row>
          <v-btn color="blue lighten-4" @click="post">提交</v-btn>
          <!-- <v-btn color="blue lighten-4" @click="hl">提交</v-btn> -->
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { postNewBlog } from "network/blog.js";
import { getLoginCheck } from "network/user";
import hljsMixin from '@/mixins/hljsMixin'
// import marked from "marked";
// import hljs from "highlight.js";
// import('highlight.js/styles/pojoaque.css')

export default {
  name: "BlogPost",
  mixins:[hljsMixin],
  data() {
    return {
      title: "",
      tags: "",
      desc: "",
      // content: "",
      headPic: "",
      loginCheckMessage: "验证权限中...",
      isAdmin: false,
    };
  },

  created() {
    getLoginCheck().then(res => {
      if (res.data.isAdmin) {
        this.isAdmin = true;
        this.loginCheckMessage = "今天要写点什么呢...";
      }
    });
  },
  methods: {
    post() {
      if (this.title && this.headPic && this.desc && this.content) {
        postNewBlog(
          this.headPic,
          this.title,
          this.tags,
          this.desc,
          this.content
        ).then(res => {
          this.$router.push("/detail/" + res.data.id);
        });
      }
    },
  }
};
</script>

<style lang='scss' scoped>


</style>