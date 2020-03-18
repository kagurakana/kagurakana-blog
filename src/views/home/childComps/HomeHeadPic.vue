<template>
  <!-- <div class="home-head" :style="{'margin-top':imgMarginTop}"> -->
  <div class="home-head">
    <div class="imgs-container">
      <v-img
        class="back"
        :height="isMobile?'40vh':'100vh'"
        src="https://cdn.kagurakana.xyz/home_head_pic.jpg"
        eager
        @load="$emit('showImg')"
      ></v-img>
      <div class="flag d-flex align-center justify-center">
        <input type="text" autofocus class="home-text" v-model="showName" />
      </div>
      <v-col v-show="!isMobile" cols="12" class="text-center home-head-btn">
        <v-btn  fab text color="white" @click="$emit('hideImg')">
          <v-icon style="font-size:24px">mdi-arrow-down</v-icon>
        </v-btn>
      </v-col>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
// import _ from "lodash";
export default {
  name: "HomeHeadPic",
  data() {
    return {
      isShow: true,
      showName: ""
      // imgMarginTop: "0",
      // oldTop: 0,
      // moveDown:false,
      // moveUp:false,
      // debouncedImgScroll: _.debounce(this.imgScroll, 500, { leading: true })
    };
  },
  props: {
    gettedName: ""
  },
  computed: {
    ...mapGetters(["isMobile"]),
    name() {
      let now = moment().format("HH");
      let str = "";
      if (now >= 6 && now < 12) {
        str = "上午好!";
      } else if (now >= 12 && now < 15) {
        str = "中午好!";
      } else if (now >= 15 && now < 20) {
        str = "下午好!";
      } else if (now >= 20 && now < 23) {
        str = "晚上好!";
      } else {
        str = "要秃头了!";
      }
      return str + this.gettedName;
    }
  },
  mounted() {
    // window.addEventListener("scroll", () => {
    //   this.debouncedImgScroll();
    // });
    let i = 0;
    let timer = setInterval(() => {
      this.showName += this.name[i] ? this.name[i++] : "";
    }, 150);
    setTimeout(() => {
      clearInterval(timer);
      // console.log('timer cleared')
    }, 500 * this.name.length);
  },

  methods: {
    // imgScroll() {
    //   console.log("aaaaaaaa");
    //   let top = document.scrollingElement.scrollTop;
    //   if (top > this.oldTop) {
    //     //向下滚动
    //     if (top < window.innerHeight) {
    //       //位于头图范围中
    //       this.moveDown = true;
    //       this.moveUp = false;
    //     }else{
    //       //不位于头图范围中
    //       this.moveDown = false;
    //       this.moveUp = false;
    //     }
    //   } else {
    //     //向上滚动
    //     if (top == 0) {
    //       //位于顶部,将返回头图
    //       this.moveUp = true
    //       this.moveDown = false;
    //     }else{
    //       this.moveUp = false
    //       this.moveDown = false
    //     }
    //   }
    //   this.oldTop = top;
    // }
  }
};
</script>

<style lang='scss' scoped>
.home-head {
  position: relative;
  transition: margin-top 1.2s ease-in-out;
  width: 100%;
  .back {
    width: 100%;
  }
  .fake {
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
    z-index: 20;
    width: 85%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background-color: rgba($color: #fff, $alpha: 0.5);
    // img {
    //   width: 100%;
    //   animation-duration: 0.5s;
    // }
  }
}
.home-head-btn {
  position: absolute;
  bottom: 100px;
  

}
.bottom-line {
  width: 0;
  height: 3px;
  top: 0;
  background-color: #000;
  position: absolute;
}
// .flag:hover .bottom-line{
//   width: 100%;
//   transition: all 0.2s ease-in-out;
// }

.flag:hover .back {
  filter: blur(10px);
  -webkit-filter: blur(10px);
}

.opc-enter-active,
.opc-leave-active {
  transition: opacity 0.5s;
}
.opc-enter,
.opc-leave-to {
  opacity: 0;
}
.front-img {
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
}

.home-text {
  // position: relative;
  font-size: 74px;
  border: 0;
  outline: none;
  text-align: center;
  width: inherit;
  height: 100px;
  font-family: "SiYuan-Heavy,roboto";
  font-weight: 900;
  color: rgba($color: #fff, $alpha: 0.85);

  :focus {
    border: 0px;
    outline: none;
  }
}

@media screen and(max-width: 1100px) {
  .home-text {
    font-size: 36px;
  }
}

@media screen and(max-width: 650px) {
  .home-text {
    font-size: 22px;
  }
}
</style>