<template>
  <div class="home-head">
    <div class="imgs-container">
      <v-img
        class="back"
        :class="{ bulr: isBulr, breath: !isMobile }"
        :height="isMobile ? '40vh' : '100vh'"
        src="https://cdn.kagurakana.xyz/home_image_trees.jpg@webp"
        eager
        ref="back"
        @load="$emit('showImg')"
      ></v-img>
      <div class="flag d-flex align-center justify-center">
        <section class="flex-fill">
          <h1 class="p-0 m-0 home-text">{{ welcomeTip }}</h1>
        </section>
      </div>
      <v-col v-show="!isMobile" cols="12" class="text-center home-head-btn">
        <v-btn
          class="btn-in"
          @mouseover="isBulr = true"
          @mouseleave="isBulr = false"
          fab
          text
          color="white"
          @click="$emit('hideImg')"
        >
          <v-icon class="btn-in" style="font-size: 24px">mdi-arrow-down</v-icon>
        </v-btn>
      </v-col>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "HomeHeadPic",
  data() {
    return {
      isShow: true,
      isBulr: false,
      gettedName: "这里是「神楽花菜」",
      topics: [
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum saepe est laudantium deserunt harum eligendi odit aperiam recusandae impedit.",
          date: "2020-12-5",
        },
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum saepe est laudantium deserunt harum eligendi odit aperiam recusandae impedit.",
          date: "2020-13-5",
        },
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum saepe est laudantium deserunt harum eligendi odit aperiam recusandae impedit.",
          date: "2020-11-5",
        },
      ],
    };
  },
  props: {
    //deprecate
    scrollDis: 0,
  },
  computed: {
    ...mapGetters(["isMobile"]),
    welcomeTip() {
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
        str = "晚安!";
      }
      return str + this.gettedName;
    },
  },

  methods: {
  },
};
</script>

<style lang='scss' scoped>
.home-head {
  position: relative;
  transition: margin-top 1.2s ease-in-out;
  width: 100%;
  overflow: hidden;
  .back {
    width: 100%;
    transition: transform 0.5s, filter 0.5s;
  }
  .bulr {
    -webkit-filter: blur(4px); /* Chrome, Opera */
    -moz-filter: blur(4px);
    -ms-filter: blur(4px);
    filter: blur(4px);
    transform: scale(1.1);
    transition: transform 0.5s, filter 0.5s;
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

  font-size: 74px;
  border: 0;
  outline: none;
  text-align: center;
  width: inherit;
  height: 100px;
  font-family: "SiYuan-Heavy,roboto";
  font-weight: 900;
  color: #ffffff;
  text-shadow: 3px 3px 8px  rgba(0, 0, 0, 0.25);
  :focus {
    border: 0px;
    outline: none;
  }
}
.topic {
  display: block;
  text-align: center;
}
.topic-text {
  padding: 5px 30px;
  color: #000;
}
.topic-card {
  transition: all 1s;
  display: inline-block;
  margin-left: 30px;
}
.topic-transistion-enter,
.topic-transistion-leave-active {
  position: absolute !important;
  transition: all 1s;
  transform: scale(0.1);
}
.breath {
  animation: breath 10s ease-in-out alternate infinite;
}
@keyframes breath {
  0% {
    transform: translate(-3px, -5.19px) scale(1.01);
    filter: brightness(1.05);
  }

  33% {
    transform: translate(5.19px, 3px) scale(1.01);
    filter: brightness(0.9);

  }
  66% {
    transform: translate(5.19px, -3px) scale(1.01);
    filter: brightness(1.08);

  }
  100% {
    transform: translate(-5.19px, 3px) scale(1.01);
    filter: brightness(0.8);

  }
}
@media screen and(max-width: 1300px) {
  .home-text {
    font-size: 36px;
  }
}

@media screen and(max-width: 650px) {
  .home-text {
    font-size: 22px;
  }
}
.btn-in:hover + .back {
  -webkit-filter: blur(20px); /* Chrome, Opera */
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
  filter: blur(20px);
}
</style>