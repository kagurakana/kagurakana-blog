<template>
  <div v-if="Object.keys(blog).length !== 0" class>
    <v-img class="blog-img" :src="blog.headPic" height="400px">
      <v-card
        min-width="40vw"
        class="mx-auto fill-height d-flex flex-column align-center justify-center title-card"
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

    <div class="mx-auto col-12 col-lg-7 context-wrapper">
      <BlogToc v-if="!isMobile" />
      <article
        class="context"
        ref="context"
        v-html="compiledMarkdown"
      ></article>
    </div>
    <v-dialog class="big-img" v-model="dialog" max-width="70vw">
      <v-img :src="imgSrc"></v-img>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import hljsMixin from "@/mixins/hljsMixin";
import { mapGetters } from "vuex";

import BlogToc from "@/components/common/blogToc/BlogToc";
import getTopDistance from "@/utils/isScrollTop";
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
  },
  mounted() {
    let trs = document.querySelectorAll("tbody tr");
    let imgs = document.querySelectorAll(".context img");

    trs.forEach((tr) => {
      tr.children.forEach((td, indexCl) => {
        td.addEventListener("mouseover", () => {
          trs.forEach((tr, index) => {
            tr.children[indexCl].style.backgroundColor = "#ddd";
          });
        });
        td.addEventListener("mouseout", () => {
          trs.forEach((tr, index) => {
            tr.children[indexCl].style.backgroundColor = "unset";
          });
        });
      });
    });
    imgs.forEach((img) => {
      img.addEventListener("click", (e) => {
        this.imgSrc = e.target.src;
        this.dialog = true;
      });
    });
  },
  data() {
    return {
      dialog: false,
      imgSrc: "",
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  methods: {
    pushRoute(tag) {
      this.$router.push("/list/" + tag);
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
  color: #dddddd;
  background-color: rgba(#111, 0.7);
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
::v-deep .context {
  @include blog;
}
::v-deep .context-wrapper {
  position: relative;
  .toc {
    width: 240px;
    padding-left: 10px;
    border-left: 2px solid #123;
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .toc-h1 {
      font-weight: bold;
      &::before {
        content: "◾";
      }
    }
    .toc-h2 {
      padding-left: 20px;
    }
    .toc-h3 {
      padding-left: 30px;
    }
  }
  .static {
    position: absolute;
    top: 80px;
    left: -300px;
    transition: top 0.25s linear;
  }
  .fixed {
    position: absolute;
    left: -300px;
    transition: top 0.25s linear;
  }
}
</style>