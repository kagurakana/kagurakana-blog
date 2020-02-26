<template>
  <div>
    <HomeHeadPic />
    <HomeNav class="home-nav" />
    <Content>
      <template v-slot:left>
        <LeftContent />
      </template>
      <template v-slot:mid>
        <MidContent />
      </template>
      <template v-slot:right>
        <RightContent />
      </template>
    </Content>
    <v-snackbar color="blue" :timeout="timeout" v-model="welcomeTip" :top='isMobile'>
      {{checkedUsername}} 欢迎回来~ ({{second}})
      <v-btn color="gray" text @click="welcomeTip = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-snackbar color="blue" :timeout="timeout" v-model="newUserRegisterTip" :top='isMobile'>
      可以点击右下角的浮动🔑按钮注册哦~ ({{second}})
      <v-btn color="gray" text @click="newUserRegisterTip = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import HomeHeadPic from "./childComps/HomeHeadPic";
import HomeNav from "./childComps/HomeNav";
import Content from "components/common/content/Content";
import LeftContent from "./childComps/HomeContent/LeftContent";
import MidContent from "./childComps/HomeContent/MidContent";
import RightContent from "./childComps/HomeContent/RightContent";
import { getLoginCheck } from "network/user";
import {mapGetters} from 'vuex'
export default {
  name: "Home",
  components: {
    HomeHeadPic,
    HomeNav,
    Content,
    LeftContent,
    MidContent,
    RightContent
  },
  created() {
    getLoginCheck().then(res => {
      if (res.errno !== -1) {
        this.checkedUsername = res.data.username;
        this.showTip('welcomeTip');
      } else {
        this.showTip('newUserRegisterTip');
      }
    });
  },
  mounted() {
    this.$store.commit("resize");
  },
  data() {
    return {
      newUserRegisterTip: false,
      welcomeTip: false,
      checkedUsername: "",
      second: 0,
      timeout: 6000
    };
  },
  computed:{
    ...mapGetters(['isMobile'])
  },
  methods: {
    showTip(tip) {
      this.second = this.timeout / 1000;
      this[tip] = true;
      // this.newUserRegisterTip = true;
      let timer = setInterval(() => {
        this.second -= 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
      }, this.timeout);
    }
  }
};
</script>

<style lang='scss' scoped>
.home-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>