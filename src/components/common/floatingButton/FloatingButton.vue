<template>
  <v-speed-dial
    v-model="fab"
    bottom
    right
    direction="top"
    :open-on-hover="false"
    transition="scale-transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab>
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-playlist-plus</v-icon>
      </v-btn>
    </template>

    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn fab dark small v-on="on" color="green" @click="$vuetify.goTo(0,1000)">
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
      </template>
      返回顶部
    </v-tooltip>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          dark
          small
          color="indigo"
          v-on="on"
          @click="$route.path==='/home'||$router.push('/home')"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </template>
      首页
    </v-tooltip>
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
          fab
          dark
          small
          color="lime"
          v-on="on"
          @click="$route.path==='/register'||$router.push('/register')"
        >
          <v-icon>mdi-key</v-icon>
        </v-btn>
      </template>
      注册/登录
    </v-tooltip>
  </v-speed-dial>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FloatingButton",
  data() {
    return {
      fab: this.isMobile ? false : true,
      tab: null
    };
  },
  computed: {
    ...mapGetters(["isMobile"])
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.v-speed-dial {
  position: fixed;
  z-index: 1000;
}
.v-btn--floating {
  position: relative;
  z-index: 1000;
}
</style>