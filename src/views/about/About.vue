<template>
  <div class="about">
    <Nav class="nav" />
    <v-img :src="bgcImg" width="100vw" min-height="100vh" class="img-fixed"></v-img>
    <v-col cols="11" md="8" class="mx-auto about-container">
      <v-card color="rgba(255,255,255,0.8)" class="mx-auto myInfo text-center" outlined>
        <v-row class="pa-0 ma-0">
          <v-col cols="12" sm="auto">
            <v-img
              class="mx-auto head-img"
              src="https://i.loli.net/2020/02/25/eDgkFMqzBHP7UtS.jpg"
              height="250px"
              width="250px"
            ></v-img>
          </v-col>
          <v-col class="text-center">
            <h2>神楽花菜</h2>
            <p class="py-2 ma-0">喜欢的事情:睡觉，看番，玩怪猎，逛b站</p>
            <p class="py-1 ma-0">单推凑阿库娅</p>
            <p class="py-1 ma-0">名字来源于神楽七奈的neta</p>
            <v-card-actions class="btn-group">
              <v-row class="pa-0 ma-0 justify-center">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      @click="copy('textEmail')"
                      data-clipboard-text="kagurakanaofficial☆qq.com"
                      class="icons"
                    >mdi-email-outline</v-icon>
                  </template>
                  <span>{{textEmail}}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      @click="copy('textQq')"
                      class="icons"
                      data-clipboard-text="1278820830"
                    >mdi-qqchat</v-icon>
                  </template>
                  <span>{{textQq}}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      @click="copy('textGithub')"
                      v-on="on"
                      class="icons"
                      data-clipboard-text="https://github.com/kagurakana"
                    >mdi-github</v-icon>
                  </template>
                  <span>{{textGithub}}</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      @click="copy('textSteam')"
                      v-on="on"
                      class="icons"
                      data-clipboard-text="https://steamcommunity.com/id/kagura_kana/"
                    >mdi-steam</v-icon>
                  </template>
                  <span>{{textSteam}}</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <img
                      v-on="on"
                      @click="copy('textBili')"
                      src="~assets/img/bili.svg"
                      class="icons bili"
                      data-clipboard-text="https://space.bilibili.com/14076737"
                    />
                  </template>
                  <span>{{textBili}}</span>
                </v-tooltip>
              </v-row>
            </v-card-actions>
            <v-card-text>本站文章全部采用知识共享署名-非商业性使用-相同方式共享4.0许可协议进行许可。</v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <v-card color="rgba(255,255,255,0.8)" class="mx-auto my-3 depandence" outlined>
        <v-card-title class="text-center d-block">依赖</v-card-title>
        <v-card-text>
          <ul>
            <li class="my-3">
              <div @click="fold" class="fold-primary">
                <v-icon>mdi-chevron-down</v-icon>前端
              </div>
              <ul>
                <li>框架:vue</li>
                <li>UI框架:vuetify</li>
                <li>css预处理:scss/sass</li>
                <li>状态管理:vuex</li>
                <li>路由管理:vue-router</li>
                <li>live2d:live2d-widget</li>
                <li>
                  live2d-api:
                  <a href="https://github.com/fghrsh/live2d_api">fghrsh</a>
                  (由于是node后台没有配php环境所以直接用的大佬的api)
                </li>
                <li>
                  <div @click="fold" class="fold-secondary">
                    <v-icon>mdi-chevron-down</v-icon>工具
                  </div>
                  <ul>
                    <li>axios:ajax请求库</li>
                    <li>clipboard.js:剪贴板插件</li>
                    <li>crypto.js.js:加密插件</li>
                    <li>highlight.js:代码高亮</li>
                    <li>marked.js:markdown:语法解析</li>
                    <li>lodash:js工具库</li>
                    <li>qiniu-js:七牛云图床js-sdk</li>
                    <li>moment:时间格式化插件</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="my-3">
              <div @click="fold" class="fold-primary">
                <v-icon>mdi-chevron-down</v-icon>后端
              </div>
              <ul>
                <li>服务器:NGINX</li>
                <li>后端语言:nodejs</li>
                <li>后端框架:express</li>
                <li>内存数据库:redis</li>
                <li>数据库:mysql</li>
                <li>多进程守护:pm2</li>
                <li>服务器端渲染:暂无..(不利于SEO)</li>
                <li>
                  <div @click="fold" class="fold-secondary">
                    <v-icon>mdi-chevron-down</v-icon>工具
                  </div>
                  <ul>
                    <li>node-mailer:邮件推送工具</li>
                    <li>xss:xss过滤</li>
                    <li>cross-env:环境切换工具</li>
                    <li>gravatar:头像链接生成</li>
                    <li>qiniu:七牛后端鉴权</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="my-3">
              <div @click="fold" class="fold-primary">
                <v-icon>mdi-chevron-down</v-icon>其他服务
              </div>
              <ul>
                <li>域名:阿里云</li>
                <li>服务器:华为云</li>
                <li>CDN:百度云加速</li>
                <li>SMTP支持:zoho</li>
                <li>封面来源:感谢:<a href="https://weibo.com/bangqiaoyan">@邦乔彦</a></li>
                <li>其他图片来源:pixiv,Twitter.(本站不会将图片作为任何形式的商业用途,如有侵权请联系我进行删除)</li>
              </ul>
            </li>
          </ul>
        </v-card-text>
        <v-card-text>
          <strong>如果你想搭建博客,可以使用wordpress,hexo,vue-press等博客构建工具,他们具有良好的社区支持和生态系统,数不清的精美模板,还对搜索引擎十分友好.不怎么推荐自己搭博客.</strong>
        </v-card-text>
      </v-card>
      <TimeLine @imgClick="showBigImg" />
    </v-col>

    <v-img eager v-if="!isMobile" src="https://cdn.kagurakana.xyz/love-down.png"></v-img>
    <div class="text-center imgBig">
      <!-- big image -->
      <v-dialog v-model="dialog" max-width="70vw">
        <v-img :src="imgSrc" max-height="75vh" max-width="70vw"></v-img>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import ClipBoard from "clipboard";
import TimeLine from "./TimeLine";
import Nav from "views/home/childComps/HomeNav";
import { mapGetters } from "vuex";
export default {
  name: "About",
  components: {
    Nav,
    TimeLine
  },
  computed: {
    ...mapGetters(["isMobile"]),
    bgcImg() {
      return this.isMobile
        ? "https://cdn.kagurakana.xyz/head_pic_mobile.jpg"
        : "https://cdn.kagurakana.xyz/about-up.jpg";
    }
  },
  mounted() {
    let clipboard = new ClipBoard(".icons");
    document.dispatchEvent(new Event("render-event"));

  },
  data() {
    return {
      dialog: false, //点击查看大图
      imgSrc: "",
      textEmail: "点击拷贝:kagurakanaofficial☆qq.com",
      textQq: "点击拷贝:1278820830",
      textGithub: "点击拷贝:https://github.com/kagurakana",
      textSteam: "点击拷贝:https://steamcommunity.com/id/kagura_kana/",
      textBili: "点击拷贝:https://space.bilibili.com/14076737",
      showttt: false
    };
  },
  methods: {
    copy(content) {
      this[content] = "以拷贝到剪贴板";
    },
    showBigImg(src) {
      this.imgSrc = src;
      this.dialog = true;
    },
    fold(event) {
      let display = event.currentTarget.nextElementSibling.style.display;
      let isShow = display === "none" ? false : true;
      event.currentTarget.nextElementSibling.style.display =
        isShow === false ? "block" : "none";
      let deg = event.currentTarget.firstElementChild.style.transform;
      event.currentTarget.firstElementChild.style.transform =
        isShow === false ? "rotate(0deg)" : "rotate(-180deg)";
    }
  }
};
</script>

<style lang='scss' scoped >
.myInfo {
  background-color: rgba($color: #fff, $alpha: 0.8);
}
.bili {
  width: 28px;
  height: 28px;
}
.imgBig {
  z-index: 99999;
}
.icons {
  font-size: 28px;
  margin: 0 10px;
}

.nav {
  position: sticky;
  // position: absolute;
  top: 0;
  z-index: 1000;
}
.img-fixed {
  position: fixed;
  top: 0;
}
.content {
  height: 2000px;
  width: 100%;
  font-size: 99px;
  z-index: 10;
  position: relative;
  background-color: rgba($color: #fff, $alpha: 0.1);
}
.fold-primary {
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  line-height: 34px;
  user-select: none;
  background-color: rgba($color: lightblue, $alpha: 0.2);
}
.fold-secondary {
  font-size: 16px;
  font-weight: 800;
  line-height: 18px;
  cursor: pointer;
  user-select: none;
  background-color: rgba($color: lightblue, $alpha: 0.2);
}
.depandence {
  user-select: text;
}
</style>