<template>
  <div id="swiper" @resize="setSize">
    <div class="swiper" @resize="setSize" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot name="swiperItem"></slot>
    </div>
    <div class="indicator">
      <div
        :class="{active:index===currentIndex-1}"
        v-for="(item, index) in slideCount"
        class="indi-item"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
 
  data() {
    return {
      slideCount: 0, // 元素个数
      slideWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false // 是否正在滚动

    };
  },
 mounted(){
    this.handleDom()
    this.startTimer()
    window.onresize = ()=>{
      if (this.$route.path.indexOf("home")!=-1){
      this.setSize()
      }
    }
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scorllContent(-this.currentIndex * this.slideWidth); //TODO
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    /**
     *滚动容器 currentPosition是需要移动到的x轴距离
     *todo 用求余重写
     */
    scorllContent(currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransform(currentPosition);
      //检测是否是最后一个
     this.checkPosition(); 
      //?是否会有异步问题
      this.scrolling = false;
    },
    //TODO 使用promise重写？ end.0 start 2 3 end.4 start.5
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms'
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1; 
          this.setTransform(-this.currentIndex * this.slideWidth);
          
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.slideWidth)
        }
      }, this.animDuration);
    },
    setTransform(distance) {
      this.swiperStyle.transform = `translate3d(${distance}px, 0, 0)`;
    },
    setSize(){
      this.swiperStyle.transition = '0ms'
     let swiperEl = document.querySelector(".swiper");
     let lastWidth = this.slideWidth;
      this.slideWidth =swiperEl.offsetWidth;
      this.setTransform(-this.currentIndex * this.slideWidth + lastWidth - this.slideWidth)
      // console.log(this.slideWidth );
      // console.log("eee");

    },
    handleDom() {
      let swiperEl = document.querySelector(".swiper");
      let slideEls = document.getElementsByClassName("slide");
      this.slideCount = slideEls.length;
      // console.log(this.slideCount);
      if (this.slideCount > 1) {
        // console.log(slideEls[0]);
        let cloneFirst = slideEls[0].cloneNode(true);
        let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slideEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.slideWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
        // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.slideWidth);
        // console.log("swiperEl");
      }
    },
    touchStart(e) {
      if (this.scrolling) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      // 1.计算出用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.slideWidth;
      let absoluteMoveDistance = currentPosition + this.distance;
      // 2.跟踪滚动到当前的位置
      this.setTransform(absoluteMoveDistance);
    },
    touchEnd(e) {
      let absDistance = Math.abs(this.distance);
      if (absDistance === 0) return;
      else if (this.distance > 0 && absDistance > 0.333 * this.slideWidth) {
        this.currentIndex--;
      } else if (this.distance < 0 && absDistance > 0.333 * this.slideWidth) {
        this.currentIndex++;
      }
    this.scorllContent(-this.currentIndex*this.slideWidth)
    this.startTimer()
    }
  }
};
</script>

<style scoped>
#swiper{
overflow: hidden;
position: relative;
}

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>