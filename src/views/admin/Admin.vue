<template>
  <div>
    <v-app-bar class="admin-nav" app color="primary" dark>
      <v-toolbar-title>KAGURAKANA CMS</v-toolbar-title>
    </v-app-bar>
    <div class="d-flex" id="main-section">
      <v-navigation-drawer class="left-nav" fixed permanent dark width="300">
        <v-list class="left-lists">
          <v-list-item
            v-for="(item, i) in drawerLists"
            :key="i"
            link
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <router-view v-if="isAdmin" class="right-section"></router-view>
      <div class="right-section-no-permission" v-else>
        <h1>Access denied...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { getLoginCheck } from "network/user";
import { mapGetters } from "vuex";
export default {
  name: "Admin",
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  created() {},
  data() {
    return {
      // isAdmin: false,
      drawerLists: [
        { icon: "mdi-speedometer", text: "仪表盘", link: "/admin/pannel" },
        {
          icon: "mdi-file-document-edit",
          text: "新增文章",
          link: "/admin/add-blog",
        },
        {
          icon: "mdi-file-check",
          text: "文章管理",
          link: "/admin/manage-blog",
        },
        // { icon: "mdi-account", text: "用户管理" },
        {
          icon: "mdi-comment-text-multiple",
          text: "评论管理",
          link: "/admin/manage-comment",
        },
        {
          icon: "mdi-link-variant-plus",
          text: "链接管理",
          link: "/admin/manage-link",
        },
        { icon: "mdi-image", text: "图床",link:"/admin/image-resources" },
        { icon: "mdi-earth", text: "日志分析" },
        { icon: "mdi-chart-bell-curve-cumulative", text: "性能监控",link:"/admin/server-monitor" },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.admin-nav {
  z-index: 100;
}
#main-section {
  min-height: 100vh;
  .left-nav {
    z-index: 2;
  }
  .left-lists {
    margin-top: 56px;
  }
  .right-section {
    margin-top: 60px;
    padding: 0px 20px 0px 320px;
    min-width: 100%;
    min-height: 100%;
    position: relative;

    // &::before {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
    background: #f5f5f5;
    //   filter: blur(8px);
    // }
  }
  .right-section-no-permission {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-left: 300px;
    // &::before {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   top: 0;
    //   bottom: 0;
    //   background: url("https://cdn.kagurakana.xyz/78990961_p0.jpg@webp") center /
    //     cover no-repeat;
    //   filter: blur(8px);
    // }
  }
}
</style>