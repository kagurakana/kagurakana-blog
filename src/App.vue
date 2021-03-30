<template>
  <v-app id="app">
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>
    <ScrollListenerBar class="scroll-listener" />
    <FloatingButton />
  </v-app>
</template>

<script>
import _ from "lodash";
import "assets/css/base.css";
import FloatingButton from "components/common/floatingButton/FloatingButton";
import ScrollListenerBar from "components/common/scrollListenerBar/ScrollListener";

export default {
  name: "App",

  created() {},
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
    ScrollListenerBar,
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
