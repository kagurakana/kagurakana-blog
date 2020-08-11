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
              <v-textarea
                @drop.prevent.stop="imgDrop"
                ref="article"
                v-model="content"
                auto-grow
                outlined
                label="content"
              ></v-textarea>
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
import { postNewBlog, getBlogDetail, postUpdateBlog } from "network/blog.js";
import { getLoginCheck } from "network/user";
import { getUploadToken } from "network/imgUpdate";
import hljsMixin from "@/mixins/hljsMixin";
import htmlRestore from "@/utils/htmlRestore";
import * as qiniu from "qiniu-js";
// import marked from "marked";
// import hljs from "highlight.js";
// import('highlight.js/styles/pojoaque.css')

export default {
  name: "BlogPost",
  mixins: [hljsMixin],
  data() {
    return {
      updateId: "",
      title: "",
      tags: "",
      desc: "",
      // content: "",
      headPic: "",
      loginCheckMessage: "验证权限中...",
      isAdmin: false,
      upToken: "",
      update: false
    };
  },

  created() {
    getLoginCheck()
      .then(res => {
        if (res.data.isAdmin) {
          this.isAdmin = true;
          this.loginCheckMessage = "今天要写点什么呢...";
        } else {
          this.loginCheckMessage = "权限不足✖";
        }
        return getUploadToken();
      })
      .then(res => {
        //获取后台返回的七牛cdn uptoken
        this.upToken = res.data.uploadToken;
      })
      .then(() => {
        if (this.$route.params.id) {
          this.updateId = this.$route.params.id;
          return getBlogDetail(this.$route.params.id);
        }
      })
      .then(result => {
        let blogData = result.data[0];
        this.title = blogData.title;
        this.tags = blogData.tags;
        this.headPic = blogData.headPic;
        this.content = htmlRestore(blogData.content);
        this.desc = blogData.desc;
        this.update = true;
      });
  },
  methods: {
    post() {
      if (this.title && this.headPic && this.desc && this.content) {
        if (this.update) {
          postUpdateBlog(
            this.updateId,
            this.headPic,
            this.title,
            this.tags,
            this.desc,
            this.content
          ).then(result => {
            this.$router.push("/detail/" + result.data.id);
            return;
          });
        } else {
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
      }
    },
    next(res) {},
    error(err) {
      console.log(err); //上传错误处理
    },
    complete(res) {
      console.log(res); //成功处理
      this.content += `![${res.name}](https://cdn.kagurakana.xyz/${res.name})`;
    },
    /**拖放监听 */
    imgDrop(e) {
      let file = e.dataTransfer.files[0]; //获取拖放文件 Blob
      if (this.upToken) {
        console.log(file);
        //qiniu.upload(file: blob, key: string, token: string, putExtra: object, config: object): observable
        let observable = qiniu.upload(
          file,
          file.name,
          this.upToken,
          { fname: file.name, params: {}, mimeType: null }, //putExtra
          { useCdnDomain: true } //config
        );

        //开始上传
        observable.subscribe(this.next, this.error, this.complete);
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "~assets/css/blog.scss" ;
::v-deep .context {
  @include blog;
}
</style>