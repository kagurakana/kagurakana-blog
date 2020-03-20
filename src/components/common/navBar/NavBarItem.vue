<template>
  <div>
    <div
      class="menu-item"
      @mouseenter="isShow=true"
      @mouseleave="isShow=false"
      @touch="isShow=!isShow"
    >
      <ul class="title">
        <router-link :to="'/list/'+ items.name" tag="div">{{items.name}}</router-link>
      </ul>
      <transition
        appear
        enter-active-class="animated flipInY "
        leave-active-class="animated flipOutY"
      >
        <ul class="content" v-show="isShow">
          <li v-for="(include, index) in items.includes" :key="index">
            <router-link tag="div" :to="'/list/'+include">{{include}}</router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    items: {
      type: Object
    }
  },
  data() {
    return {
      isShow: false
    };
  }
};
</script>

<style lang='scss' scoped>
.title {
  height: 100%;
  line-height: $home-nav-height;
  padding-left: 0;
}
.text {
  width: 200px;
}
.menu-item {
  flex: 1;
  max-width: 800px;
  font-size: 1.2rem;
  list-style: none;
  position: relative;

  .content {
    position: absolute;
    // z-index:-1;
    left: 10px;
    right: 10px;
    padding-left: 0;
    box-shadow: 0px 1px 5px 0px rgba(#000, 0.5);
    max-width: 200px;
    min-width: 100px;
    border-radius: 0 0 3px 3px/ 0 0 3px 3px;
    overflow: hidden;
  }
  li {
    top: $home-nav-height;
    height: 60px;
    line-height: 60px;
    background-color: $nav-color;
    border-bottom: 1px solid $devide-line-color;
    width: 100%;
    margin: 0 auto;
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