<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <img
          @click="tada"
          class="nav-logo"
          :class="{'animated tada':isTada}"
          src="~assets/img/nav_logo.png"
          alt
        />
      </template>
      <template v-slot:right>
        <NavBarItem
          class="nav-bar-item"
          v-for="(item, index) in menu"
          :items="item"
          :isMobile="isMobile"
          :key="index"
        />
      </template>
    </NavBar>
    <ScrollListenerBar />
  </div>
</template> 

<script>
import NavBar from "components/common/navBar/NavBar";
import NavBarItem from "components/common/navBar/NavBarItem";
import ScrollListenerBar from "components/common/scrollListenerBar/ScrollListener";
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "HomeNav",
  components: {
    NavBar,
    NavBarItem,
    ScrollListenerBar
  },
  data() {
    return {
      menu: [
        { name: "前端", includes: ["HTML", "CSS", "JS", "Vue"] },
        { name: "后端", includes: ["nodejs", "express", "nginx", "数据库"] },
        { name: "杂物", includes: ["杂记", "图片", "页面demo",'游戏测评','番剧测评'] },
        { name: "朋友" },
        { name: "关于" }
      ],
      isTada: false,
      setTada: _.debounce(() => {
        this.isTada = false;
        setTimeout(() => {
          this.isTada = true;
        }, 2);
      }, 200)
    };
  },
  methods: {
    tada() {
      this.setTada();
      this.$route.path === "/home" || this.$router.push("/home");
    }
  },
  computed: {
    ...mapGetters(["isMobile"])
  }
};
</script>

<style lang='scss' scoped>
.nav-logo {
  height: 100%;
}
.right {
  display: flex;
}
.nav-bar-item {
  flex: 1;
}
</style>