<template>
  <div>
    <!-- <transition
      appear
      @before-enter="hideBodyOverflow"
      enter-active-class="bulrInDown"
      leave-active-class="bulrOutUp"
      leave-to-class="bulrOutEnd"
      @after-leave="showBodyOverflow"
      :duration="{ leave: 500 }"
    >
      <HomeHeadPic
        @showImg="showBlog"
        @hideImg="hideImg"
        v-show="isMobile || showWelcome"
        style="z-index: 10"
        :class="{ welcome: !isMobile }"
        :scrollDis="scrollDis"
        ref="headPic"
      />
    </transition>
    -->
 <div class="content" >    <!-- v-show="imgLoaded || isMobile" -->
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

      <div
        cols="12"
        class="
          beian
          d-flex
          flex-column
          justify-lg-space-around
          text-center
          pa-5
        "
      >
        <div class="d-lg-flex justify-center cn-beian">
          <a
            target="_blank"
            href="http://beian.miit.gov.cn/"
            style="
              display: block;
              text-decoration: none;
              height: 20px;
              line-height: 20px;
            "
          >
            <p style="height: 20px; line-height: 20px; margin: 0px 0px 0px 5px">
              鄂ICP备20002676号
            </p>
          </a>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001189"
            style="
              display: inline-block;
              text-decoration: none;
              height: 20px;
              line-height: 20px;
            "
          >
            <p style="height: 20px; line-height: 20px; margin: 0px 0px 0px 5px">
              <img src="~assets/img/beian.png" />鄂公网安备 42011502001189号
            </p>
          </a>
        </div>
        <p class="ma-0 moe-icp">
          <i class="moe-icp-icon"></i>
          <a href="https://icp.gov.moe" target="_blank">萌ICP备</a>
          <!-- <img width="30px" src="https://cdn.kagurakana.xyz/icon120.png" alt /> -->

          <a href="https://icp.gov.moe/?keyword=20200233" target="_blank">
            <span>2</span>
            <span>0</span>
            <span>2</span>
            <span>0</span>
            <span>0</span>
            <span>2</span>
            <span>3</span>
            <span>3</span>
            <span>号</span>
          </a>
        </p>
      </div>
      <!-- welcomeTip -->
    </div>

    <v-snackbar
      class="tool-tip"
      color="blue"
      :timeout="timeout"
      v-model="welcomeTip"
      :top="isMobile"
    >
      {{ checkedUsername }} 欢迎回来~ ({{ second }})
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
    HomeRightContent,
  },
  created() {
    //前台登陆校验,若未记录,后台登陆校验 loginCheckUsername:登陆校验后存储在vuex中
    if (this.loginCheckUsername === "") {
      //前台没有数据,后台登录验证
      getLoginCheck().then((res) => {
        if (res.errno !== -1) {
          this.checkedUsername = res.data.username;
          //提交vuex
          this.$store.commit("storeUserData", {
            username: res.data.username,
            email: res.data.email,
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
      oldTime: 0,
      newTime: 0,
      /* 头图全屏滚动节流 */
      throttledScroll: _.throttle((e) => {
        this.scroll(e);
      }, 200),
    };
  },
  computed: {
    ...mapGetters(["isMobile", "loginCheckUsername"]),
  },
  methods: {
    /*显示提示 tip值为newUserRegisterTip 或welcomeTip*/
    showBlog() {
      this.showWelcome = true;
      setTimeout(() => {
        this.imgLoaded = true;
      }, 0);
    },
    hideImg() {
      this.showWelcome = false;
    },
    hideBodyOverflow() {
      if (!this.isMobile) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      }
    },
    showBodyOverflow() {
      document.body.style.height = "unset";
      document.body.style.overflow = "unset";
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
      if (this.isMobile) {
        return;
      }
      this.throttledScroll(e);
    },
    scroll(e) {
      if (this.top <= 100) {
        if (e.deltaY > 0) {
          this.showWelcome = false;
        } else {
          // 向上滚动,展示图片
          this.showWelcome = true;
        }
      }
    },
  },
  activated() {
    this.$vuetify.goTo(this.leaveTop, 500);
    window.addEventListener("mousewheel", this.imgScroll);
  },
  beforeRouteLeave(to, from, next) {
    this.leaveTop = document.documentElement.scrollTop;
    window.removeEventListener("mousewheel", this.imgScroll);
    next();
  },
};
</script>

<style lang='scss' scoped>
@font-face {
  font-family: "icomoon";
  src: url("~assets/font/icomoon.ttf");
}

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
.bulrInDown {
  animation: bulrInDown 0.5s linear;
}
.bulrOutUp {
  animation: bulrOutUp 0.5s linear;
}
.bulrOutEnd {
  clip-path: circle(0 at 50% 85%);
}
.tool-tip {
  z-index: 1000001 !important;
}
.welcome {
  position: absolute;
  z-index: 10000 !important;
}

.beian {
  height: 100px;
  background-image: linear-gradient(
    rgba(#222, 0),
    rgba(#222, 0.6),
    rgba(#222, 0.7),
    rgba(#222, 0.8)
  );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  .cn-beian * {
    color: #eeeeee;
  }
  .moe-icp {
    * {
      color: #fce4ec;
      vertical-align: middle;
      font-size: 18px;
    }
    span {
      font-size: 24px;
      font-family: "Times New Roman", Times, serif;
    }
    span:nth-child(3n) {
      color: #fce4ec;
    }
    span:nth-child(3n + 1) {
      color: #e8eaf6;
    }
    span:nth-child(3n + 2) {
      color: #b2ff59;
    }
    span:last-child {
      font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 18px;
      font-weight: normal;
    }
    .moe-icp-icon {
      &:before {
        color: #fce4ec;
        font: normal normal normal 30px/1 "icomoon" !important;
        content: "\e900";
      }
    }
  }
}

@keyframes bulrInDown {
  from {
    -webkit-filter: blur(20px); /* Chrome, Opera */
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);
    clip-path: circle(0 at 50% 85%);

    // top: -100vh;
  }

  to {
    -webkit-filter: blur(0px); /* Chrome, Opera */
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
    clip-path: circle(100% at 50% 85%);

    // top: 0;
  }
}

@keyframes bulrOutUp {
  from {
    -webkit-filter: blur(0px); /* Chrome, Opera */
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
    // top: 0;
    clip-path: circle(100% at 50% 85%);
  }

  to {
    -webkit-filter: blur(20px); /* Chrome, Opera */
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    filter: blur(20px);
    clip-path: circle(0 at 50% 85%);
    // top: -100vh;
  }
}
</style>

