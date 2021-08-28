<template>
  <div v-if="Object.keys(blog).length !== 0" class>
    <v-img class="blog-img" :src="blog.headPic" height="400px">
      <v-card
        min-width="40vw"
        class="
          mx-auto
          fill-height
          d-flex
          flex-column
          align-center
          justify-center
          title-card
        "
      >
        <h1 class="text-center py-2 my-0">{{ blog.title }}</h1>
        <div class="blog-info text-center">
          <div class="align-center">
            <v-icon class="icons">mdi-calendar</v-icon>
            <span>发布时间:{{ date }}</span>
            <v-icon class="icons">mdi-calculator</v-icon>
            <span>字数统计: {{ blog.content.length }}</span>
            <v-icon class="icons">mdi-bookmark-check-outline</v-icon>
            <span
              >阅读时间: {{ (blog.content.length / 800).toFixed(0) }}分钟</span
            >
          </div>
          <v-chip
            class="mx-1 my-2"
            v-for="(tag, index) in blog.tags"
            @click="pushRoute(tag)"
            :key="index"
            text-color="#eeeeee"
            color="rgba(11,11,11, 0.1)"
            >{{ tag }}</v-chip
          >
          <v-divider class="my-2"></v-divider>
        </div>
        <div class="desc">{{ blog.desc }}</div>
      </v-card>
    </v-img>

    <div class="mx-auto col-12 col-lg-7 pa-0 markdown-viewer-wrapper">
      <div class="toc-container">
        <BlogToc :markdownText="this.blog.content" />
      </div>

      <Viewer
        :value="this.blog && this.blog.content"
        :plugins="plugins"
        class="markdown-viewer"
        ref="markdownViewer"
      />
      <!-- <article
        class="markdown-viewer"
        ref="markdown-viewer"
        v-html="compiledMarkdown"
      ></article> -->
    </div>
    <ImgViewer :imgSet="imgSet" />
  </div>
</template>

<script>
import "bytemd/dist/index.min.css";
import { Viewer } from "@bytemd/vue";
import highlight from "@bytemd/plugin-highlight";
import math from "@bytemd/plugin-math";
import gfm from "@bytemd/plugin-gfm";
import "katex/dist/katex.css";

import moment from "moment";
import hljsMixin from "@/mixins/hljsMixin";

import BlogToc from "@/components/common/blogToc/BlogToc";
import ImgViewer from "@/components/common/imgViewer/ImgViewer";

const plugins = [gfm(), highlight(), math()];

export default {
  name: "BlogText",
  mixins: [hljsMixin],
  props: {
    blog: {
      type: Object,
    },
  },

  components: {
    BlogToc,
    Viewer,
    ImgViewer,
  },
  mounted() {
    this.imgSet = [...document.querySelectorAll(".markdown-viewer img")];
    // let trs = document.querySelectorAll("tbody tr");
    // trs.forEach((tr) => {
    //   tr.children.forEach((td, indexCl) => {
    //     td.addEventListener("mouseover", () => {
    //       trs.forEach((tr, index) => {
    //         tr.children[indexCl].style.backgroundColor = "#ddd";
    //       });
    //     });
    //     td.addEventListener("mouseout", () => {
    //       trs.forEach((tr, index) => {
    //         tr.children[indexCl].style.backgroundColor = "unset";
    //       });
    //     });
    //   });
    // });
    // imgs.forEach((img, idx) => {
    //   img.addEventListener("click", (e) => {
    //     this.imgSet.push(e.target.src);
    //     img.setAttribute("data-order", idx);
    //     this.showImgViewer = true;
    //     document.documentElement.style.overflowY = "hidden";
    //   });
    // });
  },

  data() {
    return {
      imgSrc: "",
      plugins,
      showImgViewer: false,
      imgSet: [],
    };
  },

  methods: {
    pushRoute(tag) {
      this.$router.push("/list/" + tag);
    },
    // markdownRendered() {
    //   let mathDoms = document.querySelectorAll(".katex");
    //   [...mathDoms].forEach((mathDom) => {
    //     let latex = mathDom.querySelector("annotation").innerText;
    //     console.log("----", mathDom);
    //   });
    // },
    hideImgViewer() {
      this.showImgViewer = false;
      document.documentElement.style.overflowY = "auto";
    },
  },
  computed: {
    date() {
      return moment(this.blog.createTime).format("YYYY-MM-DD");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/css/variables.scss";
@import "~assets/css/blog.scss";
.title-card {
  // position: relative;
  @include font-source;
  color: #dddddd !important;
  background-color: rgba(#111, 0.7) !important;
  // margin-top: 150px;
  .blog-info {
    overflow: hidden;
    height: 0px;
    transition: all 0.5s ease;
  }
  &:hover {
    .blog-info {
      height: 20%;
      display: inline-block;
      transition: all 0.5s ease;
    }
  }
  h1 {
    text-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.8);
  }
  .icons {
    color: #dddddd;
    font-size: 18px;
    line-height: 24px;
  }
}
.desc {
  text-shadow: 3px 3px 5px rgba($color: #000000, $alpha: 0.8);
  display: block;
  // background-color: $base-lightgray-color;
  padding: 10px 0;
}
::v-deep .markdown-viewer {
  @include blog;
}
::v-deep .markdown-viewer-wrapper {
  position: relative;
  .toc-container {
    position: absolute;
    left: -250px;
    height: 100%;
    padding: 80px 0 0 0;
  }
}
.static {
  position: sticky;
  top: 100px;
  left: 0px;
  transition: top 0.25s linear;
}
.fixed {
  position: fixed;
  top: 0px;
  transition: top 0.25s linear;
}
</style>