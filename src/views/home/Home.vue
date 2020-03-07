<template>
  <div>
    <v-img
      width="100vw"
      class="background"
      height="100vh"
      src="https://i.loli.net/2020/03/02/1TzncGo2R3xwsuI.jpg"
    ></v-img>
    <div>
      <HomeHeadPic :gettedName="loginCheckUsername===''?'「神楽花菜」':`「${checkedUsername}」`" />
      <HomeNav class="home-nav" ref="nav" />
      <Content id="content">
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
      <!-- welcomeTip -->
      <v-snackbar color="blue" :timeout="timeout" v-model="welcomeTip" :top="isMobile">
        {{checkedUsername}} 欢迎回来~ ({{second}})
        <v-btn color="gray" text @click="welcomeTip = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
      <!-- newUserRegisterTip -->
      <v-snackbar color="blue" :timeout="timeout" v-model="newUserRegisterTip" :top="isMobile">
        可以点击右下角的浮动🔑按钮注册哦~ ({{second}})
        <v-btn color="gray" text @click="newUserRegisterTip = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import HomeHeadPic from "./childComps/HomeHeadPic";
import _ from "lodash";
import HomeNav from "./childComps/HomeNav";
import Content from "components/common/content/Content";
import LeftContent from "./childComps/HomeContent/LeftContent";
import MidContent from "./childComps/HomeContent/MidContent";
import RightContent from "./childComps/HomeContent/RightContent";
import { getLoginCheck } from "network/user";
import { mapGetters } from "vuex";
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
    //前台登陆校验,若未记录,后台登陆校验 loginCheckUsername:登陆校验后存储在vuex中
    if (this.loginCheckUsername === "") {
      //前台没有数据,后台登录验证
      getLoginCheck().then(res => {
        if (res.errno !== -1) {
          this.checkedUsername = res.data.username;
          //提交vuex
          this.$store.commit("storeUserData", {
            username: res.data.username,
            email: res.data.email
          });
          this.showTip("welcomeTip");
        } else {
          this.showTip("newUserRegisterTip");
        }
      });
    } else {
      //vuex中有用户信息
      this.checkedUsername = this.loginCheckUsername;
      this.showTip("welcomeTip");
    }
  },
  mounted() {
    /**监听并提交resize事件 修改store中的屏幕高宽,重新计算isMobile */
    this.$store.commit("resize");
    /**监听鼠标滚轮事件,全屏滚动 */
    window.addEventListener("mousewheel", this.imgScroll, {
      passive: false
    });
  },
  data() {
    return {
      newUserRegisterTip: false, //未登录,提示可以注册和登陆tip
      welcomeTip: false, //已登录,提示欢迎tip
      checkedUsername: "", //登陆认证返回的用户名或存储在vuex中的用户名
      second: 0, //tip显示的剩余秒数
      timeout: 6000, //tip超时时间
      top: 0, //滚动位置距离顶部
      /* 头图全屏滚动节流 */
      throttledScroll: _.throttle(e => {
        this.scroll(e);
      }, 500)
    };
  },
  computed: {
    ...mapGetters(["isMobile", "loginCheckUsername"])
  },
  methods: {
    /*显示提示 tip值为newUserRegisterTip 或welcomeTip*/
    showTip(tip) {
      this.second = this.timeout / 1000;
      this[tip] = true;
      let timer = setInterval(() => {
        this.second -= 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
      }, this.timeout);
    },
    /* 向下滚动到nav-bar*/
    scrollDown() {
      console.log("down");
      this.$vuetify.goTo(".home-nav", {
        duration: 500,
        easing: "easeInOutCubic"
      });
    },
    /*向上滚动到0 */
    scrollUp() {
      this.$vuetify.goTo(0, { duration: 500, easing: "easeInOutCubic" });
    },
    /** 待节流函数 */
    scroll(e) {
      if (e > 0) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }
    },
    /** mousewheel处理函数 */
    imgScroll(e) {
      //获取top
      this.top = document.scrollingElement.scrollTop;
      if (
        (e.deltaY > 0 && this.top < window.innerHeight - 3) ||
        (e.deltaY < 0 && this.top < window.innerHeight)
      ) {
        // 位于头图范围中,阻止鼠标滚轮默认事件,接管滚动
        e.preventDefault();
        this.throttledScroll(e.deltaY);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("mousewheel",this.imgScroll);
  }
};
</script>

<style lang='scss' scoped>
.home-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.background {
  position: fixed;
  top: 0;
  z-index: 0;
}
</style>