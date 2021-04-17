<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>KAGURAKANA CMS</v-toolbar-title>
    </v-app-bar>
    <div class="d-flex" id="main-section">
      <v-card tile width="300">
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
      </v-card>

      <keep-alive include="Home">
        <router-view class="right-section"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      drawerLists: [
        { icon: "mdi-speedometer", text: "仪表盘", link: "/admin/aaa" },
        {
          icon: "mdi-file-document-edit",
          text: "新增文章",
          link: "/admin/bbb",
        },
        { icon: "mdi-file-check", text: "文章管理" },
        { icon: "mdi-account", text: "用户管理" },
        { icon: "mdi-comment-text-multiple", text: "评论管理" },
        { icon: "mdi-link-variant-plus", text: "链接管理" },
        { icon: "mdi-image", text: "图床" },
        { icon: "mdi-earth", text: "日志分析" },
        { icon: "mdi-chart-bell-curve-cumulative", text: "性能监控" },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
#main-section {
  .left-nav {
    z-index: 2;
  }
  .left-lists {
    margin-top: 56px;
  }
  .right-section {
    margin-top: 60px;
    flex: 1;
  }
}
</style>