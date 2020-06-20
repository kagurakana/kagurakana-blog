<template>
  <v-container class="mx-auto" max-width="50%">
    <v-row>
      <v-col v-for="(quickShow, index1) in quickShows" :key="index1" lg="4" cols="12">
        <v-lazy min-height="250">
          <transition appear appear-active-class="animated zoomIn">
            <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="100">
              <v-card
                :title="quickShow.title"
                class="quick-card"
                color="rgba(255,255,255,0.85)"
                :elevation="hover?12:2"
                min-height="100%"
                @click.native="pushRouter(quickShow.id)"
              >
                <v-img
                  :src="quickShow.headPic"
                  height="256px"
                  max-width="100%"
                  lazy-src="~assets/img/loading.gif"
                  @load="isMounted = true"
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
                <v-card-title class="title" tag="div" text-truncate>{{quickShow.title}}</v-card-title>
                <v-card-subtitle class="d-flex">
                  <v-chip
                    class="ma-1 chip"
                    v-for="(tag, index) in quickShow.tags"
                    :title="tag"
                    :refs="`chip-${index1}-${index}`"
                    :key="index"
                    @click.stop="pushRouterTag(tag)"
                  >{{tag}}</v-chip>
                </v-card-subtitle>
              </v-card>
            </v-hover>
          </transition>
        </v-lazy>
      </v-col>
    </v-row>
    <v-snackbar color="blue" :timeout="timeout" v-model="routerErrTip" :top="isMobile">
      现在已经是{{nowRoute}}页了！！！ ({{second}})
      <v-btn color="gray" text @click="routerErrTip = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import routerErrTipMixin from "@/mixins/routerErrTipMixin";

import _ from "lodash";
export default {
  name: "",
  mixins: [routerErrTipMixin],
  data() {
    return {
      isBind: false,
      isMounted: false
    };
  },
  // updated(){
  //   this.isMounted = true
  // },
  props: {
    //前三个博客的id,title,tags,headPic
    quickShows: {
      type: Array
    }
  },
  computed: {
    ...mapGetters(["isMobile"])
  },
  methods: {
    pushRouter(id) {
      this.$router.push("/detail/" + id);
    },
    pushRouterTag(tag) {
      this.$router.push("/list/" + tag).catch(err => {
        this.debouncedShowErrTip(tag);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  cursor: pointer;
}
.one-line {
  display: flex;
}
.quick-card {
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
}
</style>