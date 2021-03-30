<template>
  <div>
    <NavBar :mobileMenuList="menu">
      <template v-slot:left>
        <img
          @click="tada"
          class="nav-logo"
          :class="{'animated tada':isTada}"
          src="https://cdn.kagurakana.xyz/nav_logo_web.png"
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
  </div>
</template> 

<script>
import NavBar from "components/common/navBar/NavBar";
import NavBarItem from "components/common/navBar/NavBarItem";
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  name: "HomeNav",
  components: {
    NavBar,
    NavBarItem,
    
  },
  data() {
    return {
      menu: [
        { name: "前端", includes: ["HTML", "CSS", "JS", "Vue"] },
        { name: "后端", includes: ["nodejs", "express", "nginx", "数据库"] },
        {
          name: "杂物",
          includes: ["杂记", "追番"]
        },
        { name: "小伙伴" },
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
      this.$route.path === "/" || this.$router.push("/");
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