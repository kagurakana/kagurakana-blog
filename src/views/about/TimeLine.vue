<template>
  <v-timeline :dense="isMobile">
    <v-timeline-item v-for="(timeline, index) in commitLogs" :key="index">
      <v-lazy
        :options="{
          threshold: 0.25,
        }"
        min-height="100"
      >
        <a :href="timeline.link" target="_blank">
          <transition appear enter-active-class="animated zoomIn">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 12 : 2" color="rgba(255,255,255,0.8)">
                <v-card color="rgba(255,255,255,0.8)">
                  <v-card-title>{{ timeline.title }}</v-card-title>
                  <v-card-subtitle class="commit-info">
                    <span class="commiter-avatar">
                      <img :src="timeline.commiterAvatar" alt="" srcset="" />
                    </span>
                    <span class="commiter-name">{{
                      timeline.commiterName
                    }}</span>
                    <span>{{ timeline.date }}</span>
                  </v-card-subtitle>
                </v-card>
              </v-card>
            </v-hover>
          </transition>
        </a>
      </v-lazy>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapGetters } from "vuex";
import { getGitHubCommits } from "@/network/proxyRequset";
export default {
  name: "",

  mounted() {
    getGitHubCommits().then((res) => {
      res.forEach((commitInfo) => {
        this.commitLogs.push({
          title: commitInfo.commit.message,
          date: commitInfo.commit.author.date,
          link: commitInfo.html_url,
          commiterName: "kagurakana",
          commiterAvatar: commitInfo.committer.avatar_url,
        });
      });
    });
  },
  data() {
    return {
      commitLogs: [],
       isActive: false,
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
.zoomIn {
  animation-duration: 0.5s;
}

  .commit-info {
    span {
      display: inline-block;
      margin: 3px 5px;
    }
    .commiter-avatar img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 1px solid #4b5391;
    }
  }

</style>