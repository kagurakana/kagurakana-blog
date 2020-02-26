<template>
  <div class="about">
    <Nav class="nav" />
    <v-img src="~assets/img/love-up.jpg" width="100vw" min-height="100vh" class="img-fixed"></v-img>
    <v-col cols="11" md="8" class="mx-auto about-container">
      <v-card class="mx-auto myInfo text-center" outlined>
        <v-row class="pa-0 ma-0 ">
          <v-col cols="12" sm="auto">
            <v-img
              class="mx-auto head-img"
              src="https://i.loli.net/2020/02/25/eDgkFMqzBHP7UtS.jpg"
              height="225px"
              width="225px"
            ></v-img>
          </v-col>
          <v-col class="text-center " >
            <h1></h1>
            <h2>就读于武汉工程大学[大三]</h2>
            <p class="py-2 ma-0">喜欢的事情:睡觉，看番，玩怪猎，逛b站</p>
            <p class="py-1 ma-0">单推凑阿库娅</p>
            <v-card-actions class="btn-group">
              <v-row class="pa-0 ma-0 justify-center">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      @click="copy('textEmail')"
                      data-clipboard-text="kagurakanaofficial☆qq.com"
                      class="icons"
                    >mdi-email-outline</v-icon>
                  </template>
                  <span>{{textEmail}}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      @click="copy('textQq')"
                      class="icons"
                      data-clipboard-text="1278820830"
                    >mdi-qqchat</v-icon>
                  </template>
                  <span>{{textQq}}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      @click="copy('textGithub')"
                      v-on="on"
                      class="icons"
                      data-clipboard-text="https://github.com/kagurakana"
                    >mdi-github-circle</v-icon>
                  </template>
                  <span>{{textGithub}}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      @click="copy('textSteam')"
                      v-on="on"
                      class="icons"
                      data-clipboard-text="https://steamcommunity.com/id/kagura_kana/"
                    >mdi-steam</v-icon>
                  </template>
                  <span>{{textSteam}}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <img
                      v-on="on"
                      @click="copy('textBili')"
                      src="~assets/img/bili.svg"
                      class="icons bili"
                      data-clipboard-text="https://space.bilibili.com/14076737"
                    />
                  </template>
                  <span>{{textBili}}</span>
                </v-tooltip>
              </v-row>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
      <TimeLine />
    </v-col>
    <v-img src="~assets/img/love-down.png"></v-img>
  </div>
</template>

<script>
import ClipBoard from "clipboard";
import TimeLine from "./TimeLine";
import Nav from "views/home/childComps/HomeNav";
export default {
  name: "About",
  components: {
    Nav,
    TimeLine
  },
  mounted() {
    let clipboard = new ClipBoard(".icons");
  },
  data() {
    return {
      textEmail: "点击拷贝:kagurakanaofficial☆qq.com",
      textQq: "点击拷贝:1278820830",
      textGithub: "点击拷贝:https://github.com/kagurakana",
      textSteam: "点击拷贝:https://steamcommunity.com/id/kagura_kana/",
      textBili: "点击拷贝:https://space.bilibili.com/14076737"
    };
  },
  methods: {
    copy(content) {
      this[content] = "以拷贝到剪贴板";
    }
  }
};
</script>

<style lang='scss' scoped >
.myInfo {
  background-color: rgba($color: #fff, $alpha: 0.8);
}
.bili {
  width: 28px;
  height: 28px;
}
.icons {
  font-size: 28px;
  margin: 0 10px;
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