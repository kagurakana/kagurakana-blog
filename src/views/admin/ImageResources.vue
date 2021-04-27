<template>
  <div>
    <v-card class="img-resources-container">
      <div class="drag-box">
        <input type="file" @drop.prevent.stop="imgDrop" />
        <div class="upload-hit">
          <v-icon size="200">mdi-cloud-upload-outline</v-icon>
          <p>拖拽图片上传</p>
        </div>
      </div>
      <v-row class="justify-center">
        <v-card class="ma-3" v-for="(imageItem, index) in imgArr" :key="index">
          <v-img
            width="400px"
            height="400px"
            :src="`https://cdn.kagurakana.xyz/${imageItem.key}@webp`"
          >
          </v-img>
          <v-text-field
            label="URI"
            class="mx-2"
            :value="`https://cdn.kagurakana.xyz/${imageItem.key}@webp`"
          ></v-text-field>
        </v-card>
      </v-row>
    </v-card>
    <v-snackbar>上传成功！</v-snackbar>
  </div>
</template>

<script>
import { getImageList } from "network/imgUpdate";
import { getUploadToken } from "network/imgUpdate";
import { mapGetters } from "vuex";

import * as qiniu from "qiniu-js";

export default {
  name: "ImageResources",
  created() {
    if (this.isAdmin) {
      getUploadToken().then((res) => {
        //获取后台返回的七牛cdn uptoken
        this.upToken = res.data.uploadToken;
      });
      getImageList().then((res) => {
        this.imgArr = res.data;
        this.marker = res.marker;
      });
    }
  },
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  data() {
    return {
      imgArr: [],
      marker: "",
      upToken: "",
      showSuccessTip: false,
    };
  },
  methods: {
    next(res) {},
    error(err) {
      console.log(err); //上传错误处理
    },
    complete(res) {
      console.log(res); //成功处理
      this.imgArr.unshift({
        key: res.key,
      });
      this.showSuccessTip = true;
    },
    imgDrop(e) {
      console.log(232323);
      let file = e.dataTransfer.files[0]; //获取拖放文件 Blob
      if (this.upToken) {
        //qiniu.upload(file: blob, key: string, token: string, putExtra: object, config: object): observable
        let observable = qiniu.upload(
          file,
          file.name,
          this.upToken,
          { fname: file.name, params: {}, mimeType: null }, //putExtra
          { useCdnDomain: true } //config
        );

        //开始上传
        observable.subscribe(this.next, this.error, this.complete);
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.img-resources-container {
  width: 80%;
  // min-height: 100vh;
  min-height: calc(100% - 100px);
  margin: 50px auto;
  padding: 35px 15px;
}
.drag-box {
  position: relative;
  margin: 0 auto;
  width: 80%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 4px darkcyan dashed;
  background-color: rgb(245, 245, 245);
  position: relative;
  input {
    opacity: 0;
    cursor: grabbing;
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .upload-hit {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    p {
      color: #959595;
      text-align: center;
    }
  }
}
</style>