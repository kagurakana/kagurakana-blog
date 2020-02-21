<template>
  <v-container class="mx-auto" max-width="50%">
    <v-row>
      <v-col v-for="(blogShotCut, index)  in blogShotCuts" :key="index" sm="12" cols="12">
        <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="100">
          <v-card
            class="pa-2"
            :elevation="hover?12:2"
            :class="{'on-hover':hover}"
            min-height="100%"
            @click="pushRouter(blogShotCut.id)"
          >
            <v-row>
              <v-col cols="3">
                <v-img
                  :src="blogShotCut.head_pic"
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
                <div>{{blogShotCut.desc}}</div>
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
  props: {
    
    blogShotCuts: {
     type:Array
    }
  },
  methods: {
    randomColor() {
      return `rgb(${_.random(200, 255)},${_.random(200, 255)},${_.random(
        200,
        255
      )})`;
    },
    pushRouter(id) {
      this.$router.push("/detail/" + id);
    }
  }
};
</script>

<style lang='scss' scoped>
</style>