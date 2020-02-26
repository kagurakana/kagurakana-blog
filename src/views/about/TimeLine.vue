<template>

  <v-timeline :dense="isMobile">
      <v-timeline-item v-for="(timeline, index) in timelines" :key="index">
        <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover?12:2" color="rgba(255,255,255,0.8)">
          <v-img :src="timeline.img" max-width="100%"></v-img>
          <v-card-title>{{timeline.title}}</v-card-title>
          <v-card-subtitle>{{timeline.date}}</v-card-subtitle>
        </v-card>
      </v-hover>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "",
  data() {
    return {
      timelines: [
        {img:'https://i.loli.net/2020/02/25/5CjObU3zGB1eZny.jpg', title: "博客上线", date: "2020年2月26日" },
        {img:'https://i.loli.net/2020/02/25/5CjObU3zGB1eZny.jpg', title: "博客上线", date: "2020年2月26日" },
        {img:'https://i.loli.net/2020/02/25/5CjObU3zGB1eZny.jpg', title: "博客上线", date: "2020年2月26日" },
        {img:'https://i.loli.net/2020/02/25/5CjObU3zGB1eZny.jpg', title: "博客上线", date: "2020年2月26日" },
        {img:'https://i.loli.net/2020/02/25/5CjObU3zGB1eZny.jpg', title: "博客上线", date: "2020年2月26日" },
        {img:'https://i.loli.net/2020/02/25/5CjObU3zGB1eZny.jpg', title: "博客上线", date: "2020年2月26日" },
        {img:'https://i.loli.net/2020/02/25/5CjObU3zGB1eZny.jpg', title: "博客上线", date: "2020年2月26日" }
      ],
      isActive:false
    };
  },
  computed:{
    ...mapGetters(['isMobile'])
  }
};
</script>

<style lang='scss' scoped>
</style>