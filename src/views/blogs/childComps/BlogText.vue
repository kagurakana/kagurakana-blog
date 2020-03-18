<template>
  <div v-if="Object.keys(blog).length !== 0" class="pa-2">
    <div class="heads">
      <v-img :src="blog.headPic" height="400px"></v-img>
      <h1>{{blog.title}}</h1>
      <div>
        <div>{{date}}</div>
        <v-chip
          class="mx-1 my-2"
          v-for="(tag, index) in blog.tags"
          @click="pushRoute(tag)"
          :key="index"
        >{{tag}}</v-chip>
        <v-divider class="my-2"></v-divider>
      </div>
      <div class="desc">{{blog.desc}}</div>
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
    },

    
  },
  computed: {
    date() {
      return moment(this.blog.createTime).format("YYYY/MM/DD HH:mm:ss");
    }
    
  }
};
</script>

<style lang='scss' scoped>
.heads {
  margin-bottom: 5px;
}
.desc{
  display: block;
  background-color: $base-lightgray-color;
  padding: 10px 0;
}


</style>