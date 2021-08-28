<template>
  <div id="img-viewer" v-if="showImgViewer" @click="hideImgViewer">
    <div class="img-viewer-box">
      <img
        :src="imgSrc"
        alt=""
        ref="viewerImg"
        @touchmove.stop="dragMove"
        @touchstart.stop="changeMoveOrigin"
        @mousewheel.stop="zoomImgLiner"
        @dblclick.stop="zoomImgLevel"
      />
    </div>
    <v-icon @click.stop="goPrev()" class="prev-btn">
      mdi-chevron-left-circle
    </v-icon>

    <v-icon @click.stop="goNext()" class="next-btn">
      mdi-chevron-right-circle
    </v-icon>
  </div>
</template>

<script>
let moveOrigin = [0, 0];
import _, { transform } from "lodash";
export default {
  name: "ImgViewer",
  props: ["imgSet"],
  data() {
    return {
      currentImgIdx: 0,
      showImgViewer: false,
    };
  },
  computed: {
    imgSrc() {
      return this.imgSet.length > 0 ? this.imgSet[this.currentImgIdx].src : "";
    },
  },
  mounted() {},
  watch: {
    imgSet() {
      this.imgSet.forEach((img, idx) => {
        img.addEventListener("click", (e) => {
          this.currentImgIdx = idx;
          this.showImgViewer = true;
          moveOrigin = [0, 0];
          this.$nextTick(() => {
            this.$refs.viewerImg.style.transform = "translate(0px, 0px)";
          });
          document.documentElement.style.overflowY = "hidden";
        });
      });
    },
  },
  methods: {
    hideImgViewer() {
      this.showImgViewer = false;
      document.documentElement.style.overflowY = "auto";
    },
    goPrev() {
      if (this.currentImgIdx - 1 < 0) return;
      this.currentImgIdx > 0 &&
        this.currentImgIdx - 1 >= 0 &&
        this.currentImgIdx--;
    },
    goNext() {
      if (this.currentImgIdx + 1 > this.imgSet.length - 1) return;
      this.currentImgIdx < this.imgSet.length &&
        this.currentImgIdx + 1 <= this.imgSet.length &&
        this.currentImgIdx++;
    },
    zoomImgLiner(e) {
      if (e.deltaY > 0) {
        e.target.style.width = e.target.offsetWidth - 20 + "px";
      } else {
        e.target.style.width = e.target.offsetWidth + 20 + "px";
      }
    },
    dragMove(e) {
      e.preventDefault();
      let img = e.target;
      img.style.transform = `translate(${
        e.touches[0].clientX - moveOrigin[0]
      }px,${e.touches[0].clientY - moveOrigin[1]}px)`;
    },
    changeMoveOrigin(e) {
      e.preventDefault();
      let img = e.target;
      let curr = /\((.*)px,(.*)px/g.exec(img.style.transform);
      moveOrigin[0] = Math.floor(
        e.touches[0].clientX * 1 - curr[1].replace("px", "") * 1
      );
      moveOrigin[1] = Math.floor(
        e.touches[0].clientY * 1 - curr[2].replace("px", "") * 1
      );
    },
    zoomImgLevel() {},
  },
};
</script>

<style lang='scss' scoped>
#img-viewer {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(22, 22, 22, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .img-viewer-box {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
    }
  }
  .prev-btn,
  .next-btn {
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 50px;
    font-size: 50px;
    top: 50%;
    transform: translateY(-50%);
  }
  .prev-btn {
    left: 20px;
  }
  .next-btn {
    right: 20px;
  }
}
</style>