<template>
  <div class="home-head">
    <div class="fake" @mouseenter.self="isShow=false" @mouseout.self="isShow=true"></div>
    <div class="imgs-container">
      <img class="back" src="~assets/img/home_head_pic.jpg" alt />
      <div class="flag">
       <transition
        appear
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOut"
       >
          <img v-show="isShow" src="~assets/img/head_logo.png" alt />
       </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeadPic",
  data() {
    return {
      isShow:true
    }
  },
  watch:{
    isShow(){
      console.log(this.isShow)
    }
  }
};
</script>

<style lang='scss' scoped>
.home-head {
  position: relative;
  width: 100%;
  .back {
    width: 100%;
  }
  .fake{
     position: absolute;
    z-index: 999;
    width: 85%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .flag {
    position: absolute;
    z-index: 2;
    width: 85%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img{
      width: 100%;
      animation-duration: 0.5s;
    }
    
  }
}

.opc-enter-active, .opc-leave-active{
  transition: opacity .5s;
}
.opc-enter, .opc-leave-to {
 opacity: 0;
}
</style>