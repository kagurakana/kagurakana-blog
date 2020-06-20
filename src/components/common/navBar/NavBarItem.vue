<template>
  <div
    class="nav-item menu-item"
    @mouseenter="debouncedShow(true)"
    @mouseleave="debouncedShow(false)"
    @touch="isShow=!isShow"
  >
    <router-link class="title menu-item" :to="'/list/'+ items.name" tag="div">{{items.name}}</router-link>
    <transition
      appear
      enter-active-class="animated flipInY "
      leave-active-class="animated flipOutY"
    >
      <ul class="content" v-show="isShow">
        <li v-for="(include, index) in items.includes" :key="index" class="nav-item">
          <router-link tag="div" :to="'/list/'+include">{{include}}</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "NavBarItem",
  props: {
    items: {
      type: Object
    }
  },
  data() {
    return {
      isShow: false,
      debouncedShow: _.debounce(
        show => {
          this.delayShow(show);
        },
        150,
        { leading: false }
      )
    };
  },
  methods: {
    delayShow(show) {
      this.isShow = show;
    }
  }
};
</script>

<style lang='scss' scoped>
.title {
  height: 100%;
  line-height: $home-nav-height;
  padding-left: 0;
  width: 100%;
  display: block;
  text-align: center;
}
.text {
  width: 200px;
}
.nav-item {
  max-width: 800px;
  font-size: 1.2rem;
  list-style: none;
  text-align: center;
  display: flex;

  // position: relative;
}
.nav-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    max-width: 200px;
    min-width: 100px;
    background-color: #fff;
    padding: 0;
    margin-top: 15px;
    width: 100%;
    position: relative;
    border-radius: 0 0 4px 4px/ 0 0 4px 4px;
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.2);
    &::before {
      content: "";
      border-top: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid #fff;
      position: absolute;
      left: 50%;
      top: -15px;
      transform: translate(-50%, 0);
    }
    li {
      display: block;
      height: $home-nav-height;
      text-align: center;
      border-bottom: 1px solid $devide-line-color;
      line-height: $home-nav-height;
    }
  }
}
.flipInY,
.flipOutY {
  animation-duration: 0.25s;
}
li:hover {
  background-color: #eee;
}
</style>