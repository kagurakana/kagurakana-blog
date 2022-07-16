<template>
  <v-app id="app">
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
    <ScrollListener class="scroll-listener" />
    <FloatingButton />
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
</style>
