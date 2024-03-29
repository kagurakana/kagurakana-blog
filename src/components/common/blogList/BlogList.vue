<template>
  <v-container class="mx-auto" max-width="50%">
    <v-row>
      <v-col
        v-for="(blogShotCut, index) in blogList"
        :key="index"
        sm="12"
        cols="12"
      >
        <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="100">
          <v-lazy
            :options="{
              threshold: 0.25,
            }"
            min-height="200"
          >
            <transition appear enter-active-class="animated zoomIn">
              <v-card
                color="rgba(255,255,255,0.85)"
                class="pa-2 blog-list-item"
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                min-height="100%"
                @click="pushRouter(blogShotCut.id)"
              >
                <v-row>
                  <v-col cols="12" sm="3">
                    <v-img
                      :src="pressBlogImg(blogShotCut.headPic)"
                      :height="isMobile ? '256px' : '100%'"
                      :max-width="isMobile ? '100%' : '100%'"
                      lazy-src="~assets/img/loading.gif"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                          align-content="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-card-title class="title" tag="div" text-truncate>{{
                      blogShotCut.title
                    }}</v-card-title>
                    <v-card-subtitle>
                      <div>{{ blogShotCut.desc }}</div>
                      <v-divider class="my-3"></v-divider>
                      <v-chip
                        class="mx-1 my-1"
                        v-for="(tag, index) in blogShotCut.tags"
                        :key="index"
                        @click.stop="pushRouterTag(tag)"
                        >{{ tag }}</v-chip
                      >
                    </v-card-subtitle>
                  </v-col>
                </v-row>
              </v-card>
            </transition>
          </v-lazy>
        </v-hover>
      </v-col>
    </v-row>
    <v-snackbar
      color="blue"
      :timeout="timeout"
      v-model="routerErrTip"
      :top="isMobile"
    >
      现在已经是{{ nowRoute }}页了！！！ ({{ second }})
      <v-btn color="gray" text @click="routerErrTip = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import routerErrTipMixin from "@/mixins/routerErrTipMixin";
export default {
  name: "BlogList",
  mixins: [routerErrTipMixin],
  props: {
    blogList: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    pushRouter(id) {
      this.$router.push("/detail/" + id);
    },
    pressBlogImg(url) {
      url += "@800w_600h.webp";
      return url.replace(/@webp@800w_600h\.webp$/g, "@800w_600h.webp");
    },
    pushRouterTag(tag) {
      this.$router.push("/list/" + tag).catch((err) => {
        this.debouncedShowErrTip(tag);
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.zoomIn {
  animation-duration: 0.35s;
}
</style>