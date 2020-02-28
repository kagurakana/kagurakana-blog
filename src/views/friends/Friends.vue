<template>
  <div class="about">
    <Nav class="nav" />
    <v-img src="~assets/img/love-up.jpg" width="100vw" min-height="100vh" class="img-fixed"></v-img>
    <v-col cols="11" md="8" class="mx-auto">
      <v-card class="mx-auto friendsLink text-center" outlined>
        <v-card-title class="d-block">友链</v-card-title>
        <v-card-text>可在评论区告诉我你的博客地址</v-card-text>
        <v-row class="pa-0 ma-0 text-center">
          <v-col>暂无╮(￣▽￣)╭</v-col>
        </v-row>
      </v-card>
       <v-card class="mx-auto my-3 friendsLink" outlined>
      <Comment />
      <CommentList :blogID="''" />
       </v-card>
    </v-col>

    <v-img eager src="~assets/img/love-down.png"></v-img>
  </div>
</template>

<script>
import Comment from "components/common/comment/Comment";
import CommentList from "components/common/comment/CommentList";
import Nav from "views/home/childComps/HomeNav";
export default {
  name: "About",
  components: {
    Nav,
    Comment,
    CommentList
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped >
.friendsLink {
  background-color: rgba($color: #fff, $alpha: 0.8);
}

.nav {
  position: sticky;
  // position: absolute;
  top: 0;
  z-index: 1000;
}
.img-fixed {
  position: fixed;
  top: 0;
}
.content {
  height: 2000px;
  width: 100%;
  font-size: 99px;
  z-index: 10;
  position: relative;
  background-color: rgba($color: #fff, $alpha: 0.1);
}
</style>