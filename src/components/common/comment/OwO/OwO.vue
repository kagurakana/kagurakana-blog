<template>
  <div class="stickers">
    <v-btn
      @click="IsShowSticker = !IsShowSticker"
      outlined
      small
      color="#FB7299"
      class="sticker-btn"
      >😉表情</v-btn
    >
    <div v-show="IsShowSticker" class="owo-container">
      <div>
        <span
          class="catigory"
          v-for="(dataSet,key, index) in OwOdata"
          :class="{active:current===key}"
          @click="changeCatigory(key)"
          :key="index"
        >
          {{ dataSet.name }}
        </span>
      </div>
      <div>
        <div class="sticker-wrapper">
          <!-- <div v-for="(key, index) in items" :key="index"></div> -->
          <div v-if="showDataSet.type === 'rawText'">
            <v-btn
              class="ma-1"
              small
              v-for="(sticker, index) in showDataSet.iconList"
              :key="`text-${index}`"
              v-html="sticker.icon"
              @click="tab(sticker)"
              :title="sticker.text"
            ></v-btn>
          </div>
          <div v-else-if="showDataSet.type === 'bigImg'">
            <div
              class="hoverImg"
              :style="{ left: imgPos.left, top: imgPos.top }"
            >
              <img :src="hoverImgSrc" width="200px" alt="" />
            </div>
            <v-btn
              class="ma-1"
              small
              v-for="(sticker, index) in showDataSet.iconList"
              :key="`${sticker}-${index}`"
              width="80px"
              height="80px"
              :title="sticker.text"
              @click="tab(sticker)"
              @mousemove.stop="debouncedHoverImg(sticker, $event)"
              @mouseleave="clearHoverImg"
            >
              <v-img width="74px" height="74px" :src="sticker.icon" alt=""></v-img>
            </v-btn>
              <!-- <img width="74px" height="74px" v-for="(sticker, index) in showDataSet.iconList" :key="index" :src="sticker.icon" alt="" /> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import OwOdata from "./OwO";
import _ from "lodash";
export default {
  name: "OwO",
  props: {
    text: "",
    cursorIndex: 0,
  },
  data() {
    return {
      OwOdata: OwOdata,
      current: Object.keys(OwOdata)[0],
      IsShowSticker: false,
      hoverImgSrc: "",
      imgPos: {
        left: 0,
        top: 0,
      },
      debouncedHoverImg: _.throttle((sticker, e) => {
        this.showHoverImg(sticker, e);
      }, 50),
    };
  },
  computed: {
    showDataSet() {
      // console.log(this.current)
      return this.OwOdata[this.current];
    },
  },
  created() {
    console.log(OwOdata);
  },
  methods: {
    changeCatigory(key){
      
      this.current = key;
    },
    tab(stickerObj) {
      this.IsShowSticker = false;
      let code =
        stickerObj.code === undefined ? stickerObj.icon : stickerObj.code;
      this.$emit("requestCursorIndex", code);
      // console.log(this.cursorIndex)
    },
    showHoverImg(sticker, e) {
      // console.log(e);
      this.hoverImgSrc = sticker.icon;
      this.imgPos.top = e.clientY + 10 + "px";
      this.imgPos.left = e.clientX + 10 + "px";
      // console.log(this.imgPos);
    },
    clearHoverImg() {
      setTimeout(() => {
        this.hoverImgSrc = "";
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.stickers {
  position: relative;
  .owo-container {
    margin: 15px 0;
    .sticker-wrapper {
      display: flex;
      background-color: rgba(0, 0, 0, 0.05);
      flex-wrap: wrap;
    }
    .hoverImg {
      position: fixed;
      z-index: 50;
    }
    .catigory {
      display: inline-block;
      padding: 3px 5px;
      background-color: rgba(0, 0, 0, 0.05);
      &.active{
        color:#7677AF;
      }
    }
  }
}
</style>
