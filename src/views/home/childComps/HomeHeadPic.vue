<template>
  <!-- <div class="home-head" :style="{'margin-top':imgMarginTop}"> -->
  <div class="home-head">
    <div class="imgs-container">
      <v-img
        class="back"
        :class="{'bulr':isBulr}"
        :height="isMobile?'40vh':'100vh'"
        src="https://cdn.kagurakana.xyz/4a1992cc6c992b13994d52193e90028d4ac535bc.png"
        eager
        ref="back"
        @load="$emit('showImg')"
      ></v-img>
      <div class="flag d-flex align-center justify-center">
        <!-- <input type="text" autofocus class="home-text" v-model="showName" /> -->
        <section class="flex-fill">
          <h1 class="p-0 m-0 home-text">{{welcomeTip}}</h1>

          <div v-if="!isMobile">
            <transition-group name="topic-transistion" class="topic">
              <v-card
                class="topic-card"
                width="345px"
                v-for="(topic, index) in topics"
                :key="topic.date"
              >
                <p class="topic-text">{{topic.content}}</p>
                <v-divider></v-divider>
                <v-card-text>{{topic.date}}</v-card-text>
              </v-card>
            </transition-group>
            <div class="text-center">
              <v-btn class="ma-2" @click="loadNext" key="left-btn">下一个</v-btn>
              <v-btn class="ma-2" @click="loadPrevious" key="right-btn">上一个</v-btn>
            </div>
          </div>
        </section>
      </div>
      <v-col v-show="!isMobile" cols="12" class="text-center home-head-btn">
        <v-btn
          class="btn-in"
          @mouseover="isBulr=true"
          @mouseleave="isBulr=false"
          fab
          text
          color="white"
          @click="$emit('hideImg')"
        >
          <v-icon class="btn-in" style="font-size:24px">mdi-arrow-down</v-icon>
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
          date: "2020-12-5"
        },
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum saepe est laudantium deserunt harum eligendi odit aperiam recusandae impedit.",
          date: "2020-13-5"
        },
        {
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum saepe est laudantium deserunt harum eligendi odit aperiam recusandae impedit.",
          date: "2020-11-5"
        }
      ]
    };
  },
  props: {
    //deprecate
    scrollDis: 0
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
    }
  },

  methods: {
    loadNext() {
      this.topics.shift();
      this.topics.push({
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum saepe est laudantium deserunt harum eligendi odit aperiam recusandae impedit.",
         date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss:SSS")
      });
    },
    loadPrevious() {
      this.topics.unshift({
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis illum saepe est laudantium deserunt harum eligendi odit aperiam recusandae impedit.",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss:SSS")
      });
      this.topics.pop();
    }
  }
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