<template>
  <div class="about">
    <Nav class="nav" />
    <v-img :src="bgcImg" width="100vw" min-height="100vh" class="img-fixed"></v-img>
    <v-col cols="11" md="8" class="mx-auto">
      <v-card class="mx-auto friendsLink text-center" color="rgba(255,255,255,0.8)" outlined>
        <v-card-title class="d-block">友链</v-card-title>
        <!-- 友链-friend -->
        <v-row class="pa-0 ma-0 text-center">
          <v-col>
            <v-row>
              <v-col cols="12" sm="6" v-for="(item, index) in friendList" :key="index">
                <v-card
                  :title="item.bio"
                  :href="item.url"
                  color="rgba(255,255,255, 0.5)"
                  class="link-card"
                  outlined
                >
                  <v-row align="center" class="pa-0 flex-nowrap ma-0">
                    <div width="80px" class="pl-2" height="80px">
                      <v-img :src="item.avatar" class="avatar" height="80px" width="80px"></v-img>
                    </div>
                    <div class="text-left overflow-hidden .bio-clip">
                      <v-col cols="12" style="font-size:18px">{{item.name}}</v-col>
                      <v-col cols="12" class="bio-clip">{{item.bio}}</v-col>
                    </div>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card-title class="d-block">传教</v-card-title>
                <v-row class="pa-0 ma-0 text-center">
          <v-col>
            <v-row>
              <v-col cols="12" sm="6" v-for="(item, index) in recommendList" :key="index">
                <v-card
                  :title="item.bio"
                  :href="item.url"
                  color="rgba(255,255,255, 0.5)"
                  class="link-card"
                  outlined
                >
                  <v-row align="center" class="pa-0 flex-nowrap ma-0">
                    <div width="80px" class="pl-2" height="80px">
                      <v-img :src="item.avatar" class="avatar" height="80px" width="80px"></v-img>
                    </div>
                    <div class="text-left overflow-hidden .bio-clip">
                      <v-col cols="12" style="font-size:18px">{{item.name}}</v-col>
                      <v-col cols="12" class="bio-clip">{{item.bio}}</v-col>
                    </div>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card-text>可在评论里告诉我你的博客地址(name,bio,URL,avatar)</v-card-text>
        <v-card-text class="text-start pa-3" style="user-select:text">
          <v-card-text class="pa-1">例如:</v-card-text>
          <v-card-text class="pa-1">Name: 神楽花菜</v-card-text>
          <v-card-text class="pa-1">Bio: 凑阿库娅单推人</v-card-text>
          <v-card-text class="pa-1">URL: https://kagurakana.xyz</v-card-text>
          <v-card-text class="pa-1">Avatar: https://cdn.kagurakana.xyz/eDgkFMqzBHP7UtS.jpg</v-card-text>
        </v-card-text>
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
// import { getQqInfo } from "network/out";
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
    // getQqInfo("1278820830").then(res => {
    //   console.log(res);
    // });
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
    },
    recommendList() {
      return this.linkList.filter(val => val.linkType === "recommend");
    },
    friendList() {
      return this.linkList.filter(
        val => val.linkType === "friend" || val.linkType === null
      );
    },
    fameList() {
      return this.linkList.filter(val => val.linkType === "fame");
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
  transition: background-color 0.3s ease-in-out !important;
}
.link-card:hover {
  transition: background-color 0.3s ease-in-out !important;
  background-color: rgba(#eeeeee, 0.5) !important;
}
.link-card:hover .avatar {
  transition: transform 1.25s cubic-bezier(0, 0, 0, 1);
  transform: rotate(360deg);
}
.avatar {
  transition: all 1.25s cubic-bezier(0, 0, 0, 1);
  border-radius: 50%;
}
.bio-clip {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.link-style {
  color: $link-color;
  position: relative;
  transition: all 1s ease-in-out;
}
.link-style::after {
  content: "";
  display: block;
  position: absolute;
  height: 5px;
  bottom: 0;
  background-color: rgba($color: $link-color, $alpha: 0.3);
  width: 0;
  transition: width 0.3s ease-in-out;
}
.link-style:hover::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  height: 5px;
  background-color: rgba($color: $link-color, $alpha: 0.3);
  width: 100%;
  transition: width 0.3s ease-in-out;
}
</style>