<template>
  <v-container class="mx-auto" max-width="50%">
    <v-row
    >
      <v-col
        v-for="(blogShotCut, index)  in blogShotCuts"

        :key="index"
        sm="12"
        cols="11"
      >
        <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="100">
          <v-card
            class="pa-2"
            :elevation="hover?12:2"
            :class="{'on-hover':hover}"
            min-height="100%"
          >
            <v-row>
              <v-col>
                <v-img
                  :src="blogShotCut.headPic"
                  height="100px"
                  width="150px"
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
              </v-col>
              <v-col>
                <div>123123123</div>
              </v-col>
            </v-row>
            <v-card-title class="title" tag="div" text-truncate>{{blogShotCut.title}}</v-card-title>
            <v-card-subtitle>
              <v-chip
                class="mx-1 my-1"
                v-for="(tag, index) in blogShotCut.tags"
                :color="randomColor()"
                :key="index"
              >{{tag}}</v-chip>
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
export default {
  name: "BlogList",
  data() {
    return {
      blogShotCuts: [
        {
          headImg: "https://i.loli.net/2020/02/17/EHeSiRW8wmNztrc.png",
          title: "我是标题我是标题我是标题我是标题",
          // tags: ["", "", ""],
          desc:
            "世界五大学习方法之思维导图 思维导图包括两个分支，一种是东尼·博赞发明的Mind Map.",
          date: "yyyy/mm/dd"
        },
        {
          headImg: "https://i.loli.net/2020/02/17/EHeSiRW8wmNztrc.png",
          title: "我是标题我是标题我是标题我是标题",
          // tags: ["", "", ""],
          desc:
            "世界五大学习方法之思维导图 思维导图包括两个分支，一种是东尼·博赞发明的Mind Map.",
          date: "yyyy/mm/dd"
        },
        {
          headImg: "https://i.loli.net/2020/02/17/EHeSiRW8wmNztrc.png",
          title: "我是标题我是标题我是标题我是标题",
          tags: ["我是", "我是我是", "我是"],
          desc:
            "世界五大学习方法之思维导图 思维导图包括两个分支，一种是东尼·博赞发明的Mind Map.",
          date: "yyyy/mm/dd"
        },
        {
          headImg: "https://i.loli.net/2020/02/17/EHeSiRW8wmNztrc.png",
          title: "我是标题我是标题我是标题我是标题",
          tags: ["我是", "我是", ""],
          desc:
            "世界五大学习方法之思维导图 思维导图包括两个分支，一种是东尼·博赞发明的Mind Map.",
          date: "yyyy/mm/dd"
        },
        {
          headImg: "https://i.loli.net/2020/02/17/EHeSiRW8wmNztrc.png",
          title: "我是标题我是标题我是标题我是标题",
          tags: ["我是", "我是", "ads"],
          desc:
            "世界五大学习方法之思维导图 思维导图包括两个分支，一种是东尼·博赞发明的Mind Map.",
          date: "yyyy/mm/dd"
        }
      ]
    };
  },
  methods: {
    randomColor() {
      return `rgb(${_.random(200, 255)},${_.random(200, 255)},${_.random(
        200,
        255
      )})`;
    }
  }
};
</script>

<style lang='scss' scoped>
</style>