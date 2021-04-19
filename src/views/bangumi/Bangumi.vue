<template>
  <BaseLayout>
    <template v-slot:layout>
      <v-col cols="11" md="8" class="mx-auto">
        <v-card class="mx-auto text-center bangumi-card" color="rgba(255,255,255,0.8)" outlined>
          <h3 class="ma-3 pink--text">总共追番:{{total}}</h3>
          <v-row class="ma-1">
            <v-col
              cols="12"
              sm="6"
              md="6"
              lg="4"
              v-for="(bangumi, index) in bangumiListFromBackEnd"
              :key="index"
            >
              <v-hover v-slot:default="{ hover }">
                <a tag="div" :href="bangumi.url" target="_blank" rel="noopener noreferrer">
                  <v-card>
                    <v-img
                      height="300px"
                      :src="baseUrlOut+'/'+bangumi.cover"
                      lazy-src="~assets/img/loading.gif"
                    >
                      <transition
                        enter-active-class="animated slideInUp"
                        leave-active-class="animated slideOutDown"
                      >
                        <div
                          v-if="hover"
                          class="d-flex bangumi-intr"
                          style="height: 100%;"
                        >{{bangumi.evaluate}}</div>
                      </transition>
                    </v-img>
                    <v-card-title :title="bangumi.title" class="text-center bangumi-title" >{{bangumi.title}}</v-card-title>
                    <v-rating
                      readonly
                      v-model="bangumi.rating.stars"
                      :length="5"
                      background-color="orange lighten-3"
                      color="orange"
                    ></v-rating>
                    <v-card-text>评分:{{bangumi.rating.score}}</v-card-text>
                    <v-card-text>{{bangumi.new_ep.index_show}} | {{bangumi.progress}}</v-card-text>
                  </v-card>
                </a>
              </v-hover>
            </v-col>
          </v-row>
          <v-btn text @click="loadMoreBangumi" class="my-4" color="blue darken-3">加载更多...</v-btn>
        </v-card>
      </v-col>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "components/common/baseLayout/BaseLayout";

import { getBangumi} from "@/network/proxyRequset";
import {BASE_URL_OUT} from 'network/request'
export default {
  name: "Bangumi",
  components: {
    BaseLayout
  },
  created() {
    getBangumi(this.page, 15).then(res => {
      this.bangumiList.push(...res.data.list);
      this.total = res.data.total;
    });
  },
  data() {
    return {
      page: 1,
      bangumiList: [],
      total: 0,
      baseUrlOut:BASE_URL_OUT
    };
  },
  computed: {
    bangumiListFromBackEnd() {
      return this.bangumiList.map(val => {
        val.cover = val.cover.replace("http://", "");
        if (val.rating !== undefined) {
          val.rating.stars = (val.rating.score / 2).toFixed(0) * 1;
        } else {
          val.rating = { score: 0 };
        }
        return val;
      });
    }
  },
  methods: {
    loadMoreBangumi() {
      getBangumi(++this.page, 15).then(res => {
        this.bangumiList.push(...res.data.list);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.bangumi-card {
  position: relative;
  z-index: 2;
}
.bangumi-intr {
  padding: 10px;
  background-color: rgba(#ef6c00, 0.7);
  color: #84ffff;
  font-size: 20px;
}
.animated {
  animation-duration: 0.3s;
}
.bangumi-title {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
</style>