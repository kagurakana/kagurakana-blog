<template>
  <v-timeline :dense="isMobile">
    <v-timeline-item v-for="(timeline, index) in timelines" :key="index">
      <v-lazy :options="{
          threshold: .25
        }" min-height="200">
        <transition appear enter-active-class="animated zoomIn">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover?12:2"
              color="rgba(255,255,255,0.8)"
              @click="emitImg(timeline.img)"
            >
              <v-card color="rgba(255,255,255,0.8)" @click="emitImg(timeline.img)">
                <v-img :src="timeline.img" max-width="100%" min-height="450px"></v-img>
                <v-card-title>{{timeline.title}}</v-card-title>
                <v-card-subtitle>{{timeline.date}}</v-card-subtitle>
              </v-card>
            </v-card>
          </v-hover>
        </transition>
      </v-lazy>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      timelines: [
        {
          img:"https://cdn.kagurakana.xyz/QQ截图20200324232940.jpg",
          title:"更换live2d",
          date:"2020年3月24日"
        },
        {
          img: "https://cdn.kagurakana.xyz/JHCvDCqov7.gif",
          title: "markdown图片拖拽上传实时解析",
          date: "2020年3月7日"
        },
        {
          img: "https://i.loli.net/2020/02/27/lo2HhjYNg5dEZ8p.jpg",
          title: "关于页面开发完成",
          date: "2020年2月27日"
        },
        {
          img: "https://i.loli.net/2020/02/27/9unYJszKNIjcH8o.jpg",
          title: "上传页面，博客详情支持实时markdown解析",
          date: "2020年2月25日"
        },
        {
          img: "https://i.loli.net/2020/02/27/ikfmEqMjF3XJbVA.jpg",
          title: "后端返回数据格式统一",
          date: "2020年2月22日"
        },
        {
          img: "https://i.loli.net/2020/02/27/iFneJacTYOtsmwq.jpg",
          title: "上传接口调通，前后台登录认证",
          date: "2020年2月22日"
        },
        {
          img: "https://i.loli.net/2020/02/27/awuJ1YN2RfmMipv.jpg",
          title: "后端开发创建博客接口",
          date: "2020年2月22日"
        },
        {
          img: "https://i.loli.net/2020/02/27/ZBxyvudeXqCgJtp.jpg",
          title: "调通登录和注册,背景图自适应",
          date: "2020年2月19日"
        },
        {
          img: "https://i.loli.net/2020/02/27/Nk9fnVZX7MpTiHF.jpg",
          title: "上线环境测试,配置nginx,pm2",
          date: "2020年2月19日"
        },
        {
          img: "https://i.loli.net/2020/02/26/GCa5U17D42Yu3WL.jpg",
          title: "添加快速展示和自适应",
          date: "2020年2月18日"
        },
        {
          img: "https://i.loli.net/2020/02/26/lcdsQjwmzD9EANJ.jpg",
          title: "走马灯开发",
          date: "2020年2月18日"
        },
        {
          img: "https://i.loli.net/2020/02/26/ZBpIQVCrSbHmJY4.jpg",
          title: "三列布局设计和使用动画过渡自适应",
          date: "2020年2月17日"
        },
        {
          img: "https://i.loli.net/2020/02/26/i6werFHN1OgtRWY.jpg",
          title: "Nav导航完成并自适应",
          date: "2020年2月16日"
        },
        {
          img: "https://i.loli.net/2020/02/26/bA5GBj6F1DyaZ3l.jpg",
          title: "首页BigLogo开发和Nav预设",
          date: "2020年2月15日"
        },
        {
          img: "https://i.loli.net/2020/02/26/8Nuc9Gh6UYkJ5Vg.jpg",
          title: "测试代码高亮",
          date: "2020年2月14日"
        },
        {
          img: "https://i.loli.net/2020/02/26/637m8UykEMvNtpo.jpg",
          title: "vue初始化",
          date: "2020年2月14日"
        }
      ],
      isActive: false
    };
  },
  computed: {
    ...mapGetters(["isMobile"])
  },
  methods: {
    emitImg(src) {
      this.$emit("imgClick", src);
    }
  }
};
</script>

<style lang='scss' scoped>
.zoomIn {
  animation-duration: 0.5s;
}
</style>