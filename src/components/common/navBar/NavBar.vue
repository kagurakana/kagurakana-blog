<template>
  <div>
    <div v-if="isMobile">
      <!-- 手机导航 -->
      <v-toolbar ref="mobileNav">
        <v-app-bar-nav-icon @click="showDrawer"></v-app-bar-nav-icon>
        <router-link tag="div" to="/">
          <v-toolbar-title>神楽花菜OFFICIAL</v-toolbar-title>
        </router-link>
      </v-toolbar>
      <v-navigation-drawer fixed v-model="isShowDrawer">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <router-link to="/">
                <v-list-item-title class="title">神楽花菜OFFICIAL</v-list-item-title>
                <v-list-item-subtitle>（￣▽￣）</v-list-item-subtitle>
              </router-link>
              <v-list>
                <v-list-item-group v-model="item">
                  <v-list-group v-for="(item, index) in enextendNav" :key="index+'mobMain'">
                    <template v-slot:activator>
                      <v-list-item-title>{{item.name}}</v-list-item-title>
                    </template>
                    <v-list-item :to="'/list/'+item.name">
                      <v-list-item-title>{{'所有'+item.name}}</v-list-item-title>
                    </v-list-item>
                    <v-list-item
                      :to="'/list/'+include"
                      v-for="(include, index) in item.includes"
                      :key="index"
                    >
                      <v-list-item-title>{{include}}</v-list-item-title>
                    </v-list-item>
                  </v-list-group>
                  <!-- aloneNav -->
                  <v-list-item
                    :to="'/list/'+aloneItem.name"
                    v-for="(aloneItem, index) in aloneNav"
                    :key="index+'mobAlone'"
                  >
                    <v-list-item-title>{{aloneItem.name}}</v-list-item-title>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div v-else>
      <!-- PC导航 -->
      <transition-group tag="div" class="nav" name="trans-grop">
        <div class="inline-box" id="nav-logo" key="left">
          <transition
            appear
            enter-active-class="animated bounceInLeft "
            leave-active-class="animated bounceOutLeft "
          >
            <div v-show="isShow" class="nav-left nav-list-animation">
              <slot name="left"></slot>
            </div>
          </transition>
        </div>

        <div class="nav-right" key="right">
          <transition appear enter-active-class="animated bounceInRight">
            <div class="nav-right nav-container">
              <slot class="nav-right" name="right"></slot>
            </div>
          </transition>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["winWidth", "cliWidth", "isMobile"]),
    isShow() {
      return this.cliWidth / this.winWidth < 0.48 || this.winWidth < 1000
        ? false
        : true;
    },
    enextendNav() {
      return this.mobileMenuList.filter(val => {
        return val.includes !== undefined;
      });
    },
    aloneNav() {
      return this.mobileMenuList.filter(val => val.includes === undefined);
    }
  },
  props: {
    mobileMenuList: {
      type: Array
    }
  },

  data() {
    return {
      isShowDrawer: false,
      item: 5
    };
  },
  methods: {
    showDrawer(e) {
      this.isShowDrawer = !this.isShowDrawer;
    }
  }
};
</script>

<style lang='scss' scoped>
.nav {
  box-shadow: 0px 1px 5px 0px rgba(#000, 0.5);
  * {
    cursor: pointer;
  }
  height: $home-nav-height;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  background-color: $nav-color;
}
.nav-left {
  display: inline-flex;
  width: 300px;
  align-items: center;
  height: 100%;
  padding: 5px 1%;
}
.nav-right {
  flex: 1;
  display: inline-flex;
  text-align: center;
}

.nav-container {
  display: flex !important;
}
.nav-list-animation {
  animation-duration: 1s;
}
.inline-box {
  display: inline-block;
}
.trans-grop-move {
  transition: transform 1.5s;
}
.bounceOutLeft {
  width: 1px;
}
</style>