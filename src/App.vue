<template>
  <v-app id="app">
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
    <ScrollListener class="scroll-listener" />
    <FloatingButton />
    <transition
      appear
      enter-active-class="animated zoomInRight"
      leave-active-class="animated zoomOutRight"
    >
    <div class="sakana-box-r" v-show="is_show_decay"></div>
    </transition>
    <transition
      appear
      enter-active-class="animated zoomInLeft "
      leave-active-class="animated zoomOutLeft "
      >
    <div class="sakana-box-l" v-show="is_show_decay"></div>
    </transition>
  </v-app>
</template>

<script>
import _ from "lodash";
import "assets/css/base.css";
import FloatingButton from "components/common/floatingButton/FloatingButton";
import ScrollListener from "components/common/scrollListenerBar/ScrollListener";
import { postHello } from "network/access";
import { getLoginCheck } from "network/user";

import UA from "ua-device";
export default {
  name: "App",
  data() {
    return {
      is_show_decay: false,
    };
  },
  created() {
    document.addEventListener("DOMContentLoaded", () => {
      let loadTime = Date.now() - t1;
      let userAgent = new UA(navigator.userAgent);
      let browser =
        userAgent.browser.name +
        "_" +
        userAgent.browser.version.original.split(".")[0];
      let refer = document.referrer || "-";
      let platform = userAgent.os.name + "_" + userAgent.os.version.original;
      console.log(loadTime);
      postHello(Date.now(), refer, browser, platform, loadTime, __IP__);
    });
    getLoginCheck().then((res) => {
      if (res.data.isAdmin) {
        this.$store.commit("updateAdmin");
      }
    });
  },
  mounted() {
    setTimeout(() => {
      this.is_show_decay = true;
    }, 1000);
    const sakana_r = Sakana.init({
      // 选项: 默认值
      el: ".sakana-box-r", // 启动元素 node 或 选择器
      character: "chisato", // 启动角色 'chisato','takina'
      inertia: 0.05, // 惯性
      decay: 0.99, // 衰减
      r: 10, // 启动角度
      y: -100, // 启动高度
      scale: 1, // 缩放倍数
      canSwitchCharacter: false, // 允许换角色
      onSwitchCharacter(character) {
        // 切换角色回调
        console.log(`${character} dayo~`);
      },
    });
    const sakana_l = Sakana.init({
      // 选项: 默认值
      el: ".sakana-box-l", // 启动元素 node 或 选择器
      character: "takina", // 启动角色 'chisato','takina'
      inertia: 0.05, // 惯性
      decay: 0.99, // 衰减
      r: 60, // 启动角度
      y: 10, // 启动高度
      scale: 1, // 缩放倍数
      canSwitchCharacter: false, // 允许换角色
      onSwitchCharacter(character) {
        // 切换角色回调
        console.log(`${character} dayo~`);
      },
    });

    // 防抖 缩放重新计算大小
    const commitResize = _.debounce(() => {
      this.$store.commit("resize");
    }, 100);

    window.onresize = () => {
      commitResize();
    };
    console.log(
      `%c
   created by                                                                    
           _                               _                                  
          | |                             | |                                 
          | | ____ _  __ _ _   _ _ __ __ _| | ____ _ _ __   __ _              
          | |/ / _\` |/ _\` | | | | '__/ _\` | |/ / _\` | '_ \\ / _\` |             
          |   | (_| | (_| | |_| | | | (_| |   | (_| | | | | (_| |             
          |_|\\_\\__,_|\\__, |\\__,_|_|  \\__,_|_|\\_\\__,_|_| |_|\\__,_|             
                      __| |                                                   
                     |___/                                                    
                                                                     with ♥   
`,
      "color:#fff;background-color:#FFA726;display:block"
    );
  },

  components: {
    FloatingButton,
    ScrollListener,
  },
};
</script>
<style lang="scss" scoped>
.scroll-listener {
  position: fixed;
  top: 0;
  z-index: 10000;
}
.sakana-box-r {
  z-index: 500;
  position: fixed;
  right: -96px;;
  bottom: 0;
  transform-origin: 100% 100%; /* 从右下开始变换 */
}
.sakana-box-l {
  z-index: 500;
  position: fixed;
  left: -96px;;
  bottom: 0;
  transform-origin: 0% 100%; /* 从左下开始变换 */
}
@media screen and (max-width: 1600px) {
  .sakana-box-r {
    scale: 0.6;
    right: -31px;
  }
  .sakana-box-l {
    scale: 0.6;
    left: -31px;
  }
}
@media screen and (max-width: 1000px) {
  .sakana-box-r {
    scale: 0.5 !important;
    right: -21px;
    
  }
  .sakana-box-l {
    scale: 0.5 !important;
    left: -21px;
  }
}
@media screen and (max-width: 650px) {
  .sakana-box-r {
    display: none;
  }
  .sakana-box-l {
    display: none;
  }
}
@media screen and (max-height: 600px) {
  .sakana-box-r {
    scale: 0.5 !important;
  }
  .sakana-box-l {
    scale: 0.5 !important;
  }
}
</style>
