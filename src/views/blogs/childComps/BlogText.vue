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
    <article class="context" ref="context" v-html="compiledMarkdown"></article>
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
  mounted() {
    let trs = document.querySelectorAll("tbody tr");
    trs.forEach(tr => {
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
::v-deep .context {
  margin-top: 25px;
  border-radius: 4px;
  box-shadow: 0 0 5px 2px rgba(48, 48, 48, 0.25);
  padding: 8px;
  pre {
    position: relative;
    z-index: 2;
    margin: 40px 20px;
    padding: 25px 0 0 0;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 20px 0px rgba(45, 45, 45, 0.2);
    &::before {
      content: "";
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      right: 0;
      height: 25px;
      border-radius: 4px 4px 0 0;
      background-color: rgb(255, 205, 72);
    }
    &::after {
      content: "";
      position: absolute;
      top: 5px;
      left: 15px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: #fc625d;
      box-shadow: 20px 0 0 0 #fdbc40, 40px 0 #35cd4b;
    }
  }
  table {
    border:1px solid #000;
    width: 100%;
    padding: 0;
    margin: 0;
    border-radius: 4px;
    box-shadow: 0 0 12px 0px rgba(45, 45, 45, 0.2);
    overflow: hidden;
    border-collapse: collapse;
    thead {
      background-color: rgb(255, 205, 72);
    }
    tr {
      &:nth-child(2n) {
        background-color: #eee;
      }
      &:hover {
        background-color: #ddd;
      }
      td {
        border: 1px solid #000;
      }
      cursor: cell;
    }
  }
  img {
    margin: 1rem auto;
    box-shadow: 0 0 8px 1px rgba(25, 25, 25, 0.3);
  }
}
</style>