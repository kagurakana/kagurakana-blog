<template>
  <NavBar>
    <template v-slot:left>
      <img class="nav-logo" src="~assets/img/nav_logo.png" alt="">
    </template>
    <template v-slot:right >
     <NavBarItem class="nav-bar-item" v-for="(item, index) in menu" :items="item" :isMobile="isMobile" :key="index"/> 
    </template>
  </NavBar>
</template> 

<script>
import NavBar from "components/common/navBar/NavBar"
import NavBarItem from 'components/common/navBar/NavBarItem'
import { mapGetters } from 'vuex';
export default {
  name: 'HomeNav',
  components:{
    NavBar,
    NavBarItem
  },
  data(){
    return{
      menu:[{name:'前端',includes:['HTML','CSS','JS','Vue']},{name:'后端',includes:['nodejs','express','nginx','数据库']},{name:'杂物',includes:['杂记','图片','页面demo','']},{name:'朋友'},{name:'关于'}]
    }
  },
  computed:{
    ...mapGetters(['isMobile']),

  }

};
</script>

<style lang='scss' scoped>
.nav-logo{
  height: 100%;
}
.right{
  display: flex;
}
.nav-bar-item{
  flex:1
}
</style>