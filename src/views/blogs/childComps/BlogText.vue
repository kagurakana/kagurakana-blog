<template>
  <div v-if="Object.keys(blog).length !== 0" class="pa-2">
    <div class="heads text-center">
      <v-img class="blog-img" :src="blog.headPic" height="400px"></v-img>
      <v-card min-width="40vw" class="mx-auto title-card">
        <h1 class="text-center py-2 my-0">{{blog.title}}</h1>
        <div>
          <div class="align-center">
            <v-icon class="icons">mdi-calendar</v-icon>
            <span>发布时间:{{date}} |</span>
            <v-icon class="icons">mdi-calculator</v-icon>
            <span>字数统计:{{blog.content.length}} |</span>
            <v-icon class="icons">mdi-bookmark-check-outline</v-icon>
            <span>阅读时间:{{(blog.content.length/800).toFixed(0)}}分钟</span>
          </div>
          <v-chip
            class="mx-1 my-2"
            v-for="(tag, index) in blog.tags"
            @click="pushRoute(tag)"
            :key="index"
          >{{tag}}</v-chip>
          <v-divider class="my-2"></v-divider>
        </div>
        <div class="desc">{{blog.desc}}</div>
      </v-card>
    </div>
    <article class="context" v-html="compiledMarkdown"></article>
  </div>
</template>

<script>
import moment from "moment";
import hljsMixin from "@/mixins/hljsMixin";
export default {
  name: "BlogText",
  mixins: [hljsMixin],
  props: {
    blog: {
      type: Object
    }
  },
  methods: {
    pushRoute(tag) {
      this.$router.push("/list/" + tag);
    }
  },
  computed: {
    date() {
      return moment(this.blog.createTime).format("YYYY-MM-DD");
    }
  }
};
</script>

<style lang='scss' scoped>
.blog-img {
  position: absolute;
  left: 0;
  right: 0;
  top: $home-nav-height;
}
.heads {
  margin-bottom: 5px;
}
.title-card {
  position: relative;
  // padding-top: 450px;
  margin-top: 250px;
  .icons {
    font-size: 18px;
    line-height: 24px;
  }
}
.desc {
  display: block;
  // background-color: $base-lightgray-color;
  padding: 10px 0;
}
</style>