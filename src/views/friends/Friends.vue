<template>
  <div class="about">
    <Nav class="nav" />
    <v-img :src="bgcImg" width="100vw" min-height="100vh" class="img-fixed"></v-img>
    <v-col cols="11" md="8" class="mx-auto">
      <v-card class="mx-auto friendsLink text-center" color="rgba(255,255,255,0.8)" outlined>
        <v-card-title class="d-block">友链</v-card-title>
        <!-- 友链 -->
        <v-row class="pa-0 ma-0 text-center">
          <v-col>
            <v-row>
              <v-col cols="12" sm="6" v-for="(item, index) in linkList" :key="index">
                <v-card :href="item.url" color="rgba(255,255,255, 0.5)" class="link-card" outlined>
                    <v-row align="center" class="pa-0 ma-0">
                      <v-col cols="auto">
                        <v-img :src="item.avatar" class="avatar" height="80px" width="80px"></v-img>
                      </v-col>
                      <v-col class="text-left" cols="auto">
                        <v-col cols="12" style="font-size:18px">{{item.name}}</v-col>
                        <v-col cols="12">{{item.bio}}</v-col>
                      </v-col>
                    </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card-text>可在评论里告诉我你的博客地址(头像,名称,地址,简介)</v-card-text> 
      </v-card>
      <v-card color="rgba(255,255,255,0.8)" class="mx-auto my-3 friendsLink" outlined>
        <Comment />
        <CommentList :blogID="''" />
      </v-card>
    </v-col>

    <v-img eager v-if="!isMobile" src="https://cdn.kagurakana.xyz/love-down.png"></v-img>
  </div>
</template>

<script>
import Comment from "components/common/comment/Comment";
import CommentList from "components/common/comment/CommentList";
import Nav from "views/home/childComps/HomeNav";
import { getFriendLink } from "network/user";
import { mapGetters } from "vuex";
export default {
  name: "About",
  components: {
    Nav,
    Comment,
    CommentList
  },
  created() {
    getFriendLink().then(result => {
      this.linkList = result.data;
    });
  },
  data() {
    return {
      linkList: []
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
    bgcImg() {
      return this.isMobile
        ? "https://cdn.kagurakana.xyz/head_pic_mobile.jpg"
        : "https://cdn.kagurakana.xyz/about-up.jpg";
    }
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
.link-card {
  cursor: pointer;
  transition: background-color 0.3s ease-in-out!important;
}
.link-card:hover {
  transition: background-color 0.3s ease-in-out!important;
  background-color: rgba(#eeeeee, 0.5)!important;
}
.link-card:hover .avatar {
  transition: transform 1.25s cubic-bezier(0, 0, 0, 1);
  transform: rotate(360deg);
}
.avatar {
  transition: all 1.25s cubic-bezier(0, 0, 0, 1);
  border-radius: 50%;
}
</style>