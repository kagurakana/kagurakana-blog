<template>
 <v-speed-dial
      v-model="fab"
      bottom
      right
      direction="top"
      :open-on-hover='!isMobile'
      transition="scale-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-playlist-plus</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
        @click="$vuetify.goTo(0,1000)"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click="$route.path==='/home'||$router.push('/home')"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'FloatingButton',
  data() {
    return {
      fab:false,
      tab:null,
    }
  },
      computed: {
      ...mapGetters(['isMobile']),
    },

    methods:{
    }

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