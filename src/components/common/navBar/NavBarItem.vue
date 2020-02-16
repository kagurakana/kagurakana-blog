<template>
  <div>
     <div class="menu-item">
        <ul class="title">{{items.name}}</ul>
        <transition
        enter-active-class="animated fadeInDown"
        leave-active-class=""
        >
        <ul class="content" >
        <li v-for="(include, index) in items.includes" :key="index">
          {{include}}
        </li>
        </ul>
        </transition>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  props:{
    items:{
      type:Object
    }
  }

};
</script>

<style lang='scss' scoped>
.title{
  height: 100%;
  line-height: $home-nav-height;
}
.text{
  width: 200px;
}
 .menu-item:hover .content{
   display: block;
    
 }
.menu-item{
  flex:1;
  max-width: 800px;
  font-size: 1.2rem;
  list-style: none;
  position: relative;

  .content{
    display: none;
    position: absolute;
    left: 10px;
    right: 10px;
  }
  li{
    top: $home-nav-height;
    height: 60px;
    line-height: 60px;
    background-color: $base-lightgray-color;
    border-bottom: 1px solid $devide-line-color;
    max-width: 200px;
    margin: 0 auto
  }
}

</style>