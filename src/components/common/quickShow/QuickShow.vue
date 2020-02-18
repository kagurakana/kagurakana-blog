<template>
  <v-container class="mx-auto" max-width="50%">
    <v-row>
      <v-col v-for="(quickShow, index) in quickShows" :key="index"
      sm='4'
      cols="11"
      >
        <v-hover v-slot:default="{hover}">
          <v-card elevation="hover?12:2" :class="{'on-hover':hover}">
            <v-img
              :src="quickShow.headPic"
              height="256px"
              :max-width="isMobile?'100vw':'50vw'"
              lazy-src="~assets/img/loading.gif"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                  align-content="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title class="title"  tag="div" text-truncate>{{quickShow.title}}</v-card-title>
            <v-chip v-for="(tag, index) in quickShow.tags" :key="index">{{tag}}</v-chip>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      quickShows: [
        {
          headPic: "https://i.loli.net/2020/02/17/EHeSiRW8wmNztrc.png",
          title: "我是标题我是标题",
          tags: ["标题", "标题", "标题"]


        },
        {
          headPic: "https://i.loli.net/2020/02/17/ajSefBiAprlDwnh.png",
          title: "我是标题我是标题我是标题我是标题",
          tags: ["标题", "标题", "标题"]
        },
        {
          headPic: "https://i.loli.net/2020/02/17/uLS1R8b73kO2c6Z.png",
          title: "我是标题我是标题我是标题我是标题",
          tags: ["标题", "标题", "标题"]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["isMobile"])
  }
};
</script>

<style lang='scss' scoped>
.one-line {
  display: flex;
}
v-card {
  padding: 10px;
  margin: 2px;
}
</style>