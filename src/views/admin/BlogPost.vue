<template>
  <div>
    <main id="blog-post-container">
      <h1>{{ loginCheckMessage }}</h1>
      <v-row v-if="isAdmin">
        <v-col cols="12">
          <v-col cols="8" class="mx-auto">
            <v-text-field v-model="title" label="title"></v-text-field>
            <v-text-field v-model="tags" label="tags"></v-text-field>
            <v-text-field v-model="headPic" label="headPic"></v-text-field>
          </v-col>
          <v-col cols="10" class="mx-auto">
            <v-textarea v-model="desc" label="desc"></v-textarea>

            <div class="editor-preview">
              <Editor
                :value="markdownText"
                :plugins="plugins"
                :uploadImages="uploadImages"
                @change="handleChange"
                class="markdown-editor"
              />
              <!-- <Viewer
                  :value="markdownText"
                  class="markdown-body"
                  :plugins="plugins"
                /> -->
            </div>

            <!-- <v-btn color="blue lighten-4" @click="hl">提交</v-btn> -->
            <div class="d-flex align-center justify-space-around">
              <v-btn color="blue lighten-4" @click="post">提交</v-btn>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </main>
  </div>
</template>

<script>
import "bytemd/dist/index.min.css";
import { Editor } from "@bytemd/vue";
import highlight from "@bytemd/plugin-highlight";
import math from "@bytemd/plugin-math";
import gfm from "@bytemd/plugin-gfm";
import "katex/dist/katex.css";
// import("highlight.js/styles/solarized-light.css");

import { postNewBlog, getBlogDetail, postUpdateBlog } from "network/blog.js";
import { getLoginCheck } from "network/user";
import { getUploadToken } from "network/imgUpdate";
import hljsMixin from "@/mixins/hljsMixin";
import htmlRestore from "@/utils/htmlRestore";
import * as qiniu from "qiniu-js";
// import marked from "marked";
// import hljs from "highlight.js";
// import('highlight.js/styles/pojoaque.css')

const plugins = [gfm(), highlight(), math()];

export default {
  name: "BlogPost",
  mixins: [hljsMixin],
  components: { Editor },
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
      update: false,
      innerHeight: window.innerHeight,
      markdownText: "",
      plugins,
      uploadImages: this.uploadFunction,
    };
  },

  created() {
    getLoginCheck()
      .then((res) => {
        if (res.data.isAdmin) {
          this.isAdmin = true;
          this.loginCheckMessage = "今天要写点什么呢...";
        } else {
          this.loginCheckMessage = "权限不足✖";
        }
        return getUploadToken();
      })
      .then((res) => {
        //获取后台返回的七牛cdn uptoken
        this.upToken = res.data.uploadToken;
      })
      .then(() => {
        if (this.$route.params.id) {
          this.updateId = this.$route.params.id;
          return getBlogDetail(this.$route.params.id);
        }
      })
      .then((result) => {
        let blogData = result.data[0];
        this.title = blogData.title;
        this.tags = blogData.tags;
        this.headPic = blogData.headPic;
        this.markdownText = htmlRestore(blogData.content);
        this.desc = blogData.desc;
        this.update = true;
      });
  },
  mounted() {
    let waifu = document.querySelector("#waifu");
    waifu && (waifu.style.display = "none");
  },
  methods: {
    post() {
      if (this.title && this.headPic && this.desc && this.markdownText) {
        if (this.update) {
          postUpdateBlog(
            this.updateId,
            this.headPic,
            this.title,
            this.tags,
            this.desc,
            this.markdownText
          ).then((result) => {
            this.$router.push("/detail/" + result.data.id);
            return;
          });
        } else {
          postNewBlog(
            this.headPic,
            this.title,
            this.tags,
            this.desc,
            this.markdownText
          ).then((res) => {
            this.$router.push("/detail/" + res.data.id);
          });
        }
      }
    },
    handleChange(v) {
      this.markdownText = v;
    },
    /**
     * bytemd build in funciton, upload images
     */
    uploadFunction(files) {
      return Promise.all(
        files.map((file) => {
          let p = new Promise((resolve, reject) => {
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
              function next(res) {}
              function error(err) {
                console.log(err); //上传错误处理
              }
              function complete(res) {
                resolve({ url: `https://cdn.kagurakana.xyz/${res.name}@webp` });
              }
              //开始上传
              observable.subscribe(next, error, complete);
            }
          });

          return p;
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/blog.scss";

#blog-post-container {
  background-color: #fff;
  width: 80vw;
  min-width: 1000px;
  margin: 25px auto;
  padding: 5px 25px;
  border-radius: 8px;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.25);
}

::v-deep .bytemd {
  height: 100vh;
}
::v-deep .markdown-body {
  // overflow: scroll;
  @include blog;
}

.editor-preview {
  margin: 0 0 15px 0;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
