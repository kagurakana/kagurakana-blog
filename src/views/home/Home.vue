<template>
  <div>
    <div class="black" v-show="imgLoaded"></div>
    <transition
      appear
      enter-active-class="animated  slideInDown bulrInDown"
      leave-active-class="animated slideOutUp bulrOutUp"
      leave-to-class="bulrOutEnd"
    >
      <HomeHeadPic
        @showImg="showBlog"
        @hideImg="showWelcome=false"
        v-show="isMobile||showWelcome"
        style="z-index:10"
        :class="{'welcome':!isMobile}"
        :scrollDis="scrollDis"
        ref="headPic"
      />
      <!-- :gettedName="loginCheckUsername===''?'「神楽花菜」':`「${checkedUsername}」`" -->
    </transition>
    <transition
      appear
      enter-class="enterPosisition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="content" v-show="imgLoaded&&!showWelcome||isMobile">
        <v-img
          width="100vw"
          class="background"
          height="100vh"
          src="https://cdn.kagurakana.xyz/DpumTcUX4AEvMfp.jpg"
        ></v-img>
        <HomeNav class="home-nav" ref="nav" />
        <Content id="content">
          <template v-slot:left>
            <HomeLeftContent />
          </template>
          <template v-slot:mid>
            <HomeMidContent />
          </template>
          <template v-slot:right>
            <HomeRightContent />
          </template>
        </Content>
        <!-- welcomeTip -->
      </div>
    </transition>
    <v-snackbar
      class="tool-tip"
      color="blue"
      :timeout="timeout"
      v-model="welcomeTip"
      :top="isMobile"
    >
      {{checkedUsername}} 欢迎回来~ ({{second}})
      <v-btn color="gray" text @click="welcomeTip = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <!-- newUserRegisterTip -->
    <!-- <v-snackbar
      class="tool-tip"
      color="blue"
      :timeout="timeout"
      v-model="newUserRegisterTip"
      :top="isMobile"
    >
      可以点击右下角的浮动🔑按钮注册哦~ ({{second}})
      <v-btn color="gray" text @click="newUserRegisterTip = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>-->
  </div>
</template>

<script>
import HomeHeadPic from "./childComps/HomeHeadPic";
import _ from "lodash";
import HomeNav from "./childComps/HomeNav";
import Content from "components/common/content/Content";
import HomeLeftContent from "./childComps/HomeContent/HomeLeftContent";
import HomeMidContent from "./childComps/HomeContent/HomeMidContent";
import HomeRightContent from "./childComps/HomeContent/HomeRightContent";
import { getLoginCheck } from "network/user";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeadPic,
    HomeNav,
    Content,
    HomeLeftContent,
    HomeMidContent,
    HomeRightContent
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
          // this.showTip("newUserRegisterTip");
        }
      });
    } else {
      //vuex中有用户信息
      this.checkedUsername = this.loginCheckUsername;
      this.showTip("welcomeTip");
    }
  },
  mounted() {
    document.dispatchEvent(new Event("render-event"));

    /**监听并提交resize事件 修改store中的屏幕高宽,重新计算isMobile */
    this.$store.commit("resize");
    /**监听鼠标滚轮事件,全屏滚动 */
  },
  data() {
    return {
      newUserRegisterTip: false, //未登录,提示可以注册和登陆tip
      showWelcome: false, //显示最开始的大图
      imgLoaded: false, //头图是否加载
      welcomeTip: false, //已登录,提示欢迎tip
      checkedUsername: "", //登陆认证返回的用户名或存储在vuex中的用户名
      second: 0, //tip显示的剩余秒数
      timeout: 3000, //tip超时时间
      top: 0, //滚动位置距离顶部
      scrollDis: 0,
      leaveTop: 0,
      prevented: false,
      preventScroll: true,
      oldTime: 0,
      newTime: 0,
      /* 头图全屏滚动节流 */
      throttledScroll: _.throttle(e => {
        this.scroll(e);
      }, 1000)
    };
  },
  computed: {
    ...mapGetters(["isMobile", "loginCheckUsername"])
  },
  methods: {
    /*显示提示 tip值为newUserRegisterTip 或welcomeTip*/
    showBlog() {
      this.showWelcome = true;
      setTimeout(() => {
        this.imgLoaded = true;
      }, 500);
    },
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
    /** mousewheel处理函数 */
    imgScroll(e) {
      //获取top
      this.top = document.scrollingElement.scrollTop;
      this.scrollDis = this.scrollDis < 0 ? 0 : this.scrollDis + e.deltaY;

      // console.log(this.scrollDis);
      if (this.isMobile) {
        return;
      }
      if (this.$refs.headPic.$el.classList.contains("animated")) {
        e.preventDefault();
      }
      this.throttledScroll(e);
    },
    scroll(e) {
      if (this.top <= 100) {
        if (e.deltaY > 0) {
          this.showWelcome = false;
          // this.preventScroll = true
        } else {
          // 向上滚动,展示图片
          this.showWelcome = true;
        }
      }
    }
  },
  activated() {
    this.$vuetify.goTo(this.leaveTop, 500);
    window.addEventListener("mousewheel", this.imgScroll, {
      passive: false
    });
  },
  beforeRouteLeave(to, from, next) {
    this.leaveTop = document.documentElement.scrollTop;

    window.removeEventListener("mousewheel", this.imgScroll);
    next();
  }
};
</script>

<style lang='scss' scoped>
.black {
  position: absolute;
  top: 0;
  z-index: 0;
  background-color: #000;
  width: 100vw;
  height: 100vh;
}
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
.slideInDown,
.slideOutUp {
  animation-duration: 0.5s;
}
.bulrInDown {
  animation: bulrInDown 0.5s;
}
.bulrOutUp {
  animation: bulrOutUp 0.5s;
}
.bulrOutEnd {
  position: absolute;
  top: -120vh;
}
.tool-tip {
  z-index: 1000001 !important;
}
.welcome {
  position: absolute;
  z-index: 10000 !important;
}
@keyframes bulrInDown {
  from {
    -webkit-filter: blur(20px); /* Chrome, Opera */
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);

    top: -100vh;
  }

  to {
    -webkit-filter: blur(0px); /* Chrome, Opera */
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);

    top: 0;
  }
}

@keyframes bulrOutUp {
  from {
    -webkit-filter: blur(0px); /* Chrome, Opera */
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);

    top: 0;
  }

  to {
    -webkit-filter: blur(20px); /* Chrome, Opera */
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);

    top: -100vh;
  }
}
</style>

