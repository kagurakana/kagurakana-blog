<template>
  <NavBar>
    <template v-slot:left>
      <img class="nav-logo" src="~assets/img/nav_logo.png" alt="">
    </template>
    <template v-slot:right>
      <div class="text">aasdafiwojf</div>
    </template>
  </NavBar>
</template> 

<script>
import NavBar from "components/common/NavBar"
export default {
  name: 'HomeNav',
  components:{
    NavBar
  }

};
</script>

<style lang='scss' scoped>
.nav-logo{
  height: 100%;
}
.text{
  width: 200px;
}
</style>