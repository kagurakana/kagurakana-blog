<template>
  <v-img height="100%" width="100%" :src="imgSrc">
    <v-row align="center" justify="center" style="height:100%">
      <v-hover v-slot:default="{hover}">
        <v-col cols="10" md="4">
          <v-card
            color="white"
            :outlined="hover"
            width="100%"
            :class="{'on-hover':(hover||isMobile)}"
          >
            <v-form v-model="valid" class="input">
              <v-row>
                <v-col class="mx-auto" cols="11">
                  <v-text-field
                    v-model="username"
                    :rules="nameRule"
                    counter="15"
                    aria-required
                    label="用户名"
                    :hint="usernameHint"
                    :loading="usernameLoading"
                    @input="debouncedCheckUsername()"
                    :error-messages="usernameErr"
                  ></v-text-field>
                  <v-text-field
                    :loading="emailLoading"
                    v-model="email"
                    aria-required
                    :rules="emailRule"
                    label="email"
                    :hint="emailHint"
                    :error-messages="emailErr"
                    @input="debouncedCheckEmail()"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    aria-required
                    label="密码(已使用HMAC-SHA-512加密)"
                    hint="暂时不提供修改密码功能，一定要记住密码哦~"
                    type="password"
                    :rules="passwordRule"
                    :loading="loading"
                  ></v-text-field>
                  <v-checkbox v-model="haveAvatar" @click="clearAvatar">
                    <template v-slot:label>
                      <div>
                        我拥有gravatar头像
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <v-icon v-on="on">mdi-help-circle-outline</v-icon>
                          </template>
                          使用全球公认头像(gravatar)会将您的头像和邮箱绑定起来，这样只要在支持gavatar的网站输入您的邮箱，您的头像就会显示出来。
                        </v-tooltip>
                      </div>
                    </template>
                  </v-checkbox>
                  <v-checkbox @click="clearAvatar" label="使用默认头像" v-model="useDefaultAvator"></v-checkbox>
                  <!-- <v-row v-if="useDefaultAvator" class="default-avatar">
                    <v-img class="mx-2" width="60px" max-height="60px" max-width="60px" height="60px" src="~assets/img/default1.jpg"></v-img>
                    <v-img  class="mx-2" width="60px" height="60px" max-height="60px" max-width="60px" src="~assets/img/default2.jpg"></v-img>
                  </v-row>-->
                  <v-text-field
                    v-model="avatar"
                    @input="setRealAvator"
                    :disabled="haveAvatar||useDefaultAvator"
                    :rules="avatarRule"
                    label="头像URL"
                    hint="要确保头像可以被外站应用哦"
                    :loading="realAvator!=''&&!avatarPrased"
                    :error-messages="avatarErr"
                  ></v-text-field>
                  <v-img
                    lazy-src="@/assets/img/loading.gif"
                    class="avatar"
                    @load="avatarPrased=true"
                    @error="avatarPrased=false;avatarErr='无法解析/(ㄒoㄒ)/~~'"
                    v-if="!!realAvator"
                    height="64px"
                    width="64px"
                    eager
                    :src="realAvator"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        align-content="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-form>
            <v-card-subtitle class="flex">
              <v-btn class @click="postRegister" :disabled="!(btnValid)" text>注册!</v-btn>
              <v-btn class @click="pushRouterLogin" text>去登陆</v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-hover>
    </v-row>
    <v-snackbar color="blue" :timeout="timeout" v-model="successRegiste" :top='isMobile'>
      注册成功 {{second}} 秒后跳转登录
      <v-btn color="lime" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-img>
</template>

<script>
import { mapGetters } from "vuex";
import {
  postLogin,
  postRegister,
  getValidUsername,
  getValidEmail
} from "network/user";
import _ from "lodash";
export default {
  name: "Register",
  data() {
    return {
      valid: false,

      password: "",
      passwordRule: [
        v => !!v || "请输入密码(=・ω・=)",
        v => (v && v.length > 6) || "密码太短啦！"
      ],

      username: "",
      usernameHint: "中文√英文√数字√下划线√",
      usernameLoading: false,
      nameRule: [
        v => !!v || "输入你的名字(=・ω・=)",
        v => (v && v.length < 15) || "名字太长啦，要被挤爆啦(╯°口°)╯(┴—┴",
        v =>
          /^[a-zA-Z0-9_\u4e00-\u9fa5-]{2,15}$/.test(v) || "长度<2或包含特殊符号"
      ],
      usernameErr: "",

      email: "",
      emailRule: [
        v => !!v || "填入邮箱，才能即使获得回复哦，放心吧，邮箱不会外泄的~",
        v => /.+@.+\..+/.test(v) || "无效的邮箱❌"
      ],
      emailHint: "",
      emailLoading: false,
      emailErr: "",
      avatarRule: [
        v =>
          /\.(png|jpg|gif|jpeg|webp)$/.test(v) ||
          v == false ||
          "格式不正确(.png|.jpg|.jpeg|.webp)"
      ],
      haveAvatar: false,
      useDefaultAvator: false,
      avatar: "",
      realAvator: "",
      avatarPrased: false,
      avatarErr: "",
      loading: false,
      //验证重复
      validUserName: false,
      validEmail: false,

      successRegiste: false,
      timeout: 3000,
      second: 0,

      debouncedCheckUsername: _.debounce(() => {
        this.checkUsername();
      }, 1000),
      debouncedCheckEmail: _.debounce(() => {
        this.checkEmail();
      }, 1000)
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
    imgSrc() {
      return this.isMobile
        ? require("assets/img/head_pic_mobile.jpg")
        : require("assets/img/home_head_pic.jpg");
    },
    btnValid() {
      return (
        this.valid &&
        this.validUserName &&
        this.validEmail &&
        (this.useDefaultAvator || this.haveAvatar || this.avatarPrased)
      );
    }
  },
  methods: {
    postRegister() {
      this.loading = true;
      postRegister(this.username, this.password, this.email, this.avatar).then(
        res => {
          console.log(res);
          this.successRegiste = true;
          this.second = this.timeout / 1000;
          let timer = setInterval(() => {
            this.second -= 1;
          }, 1000);
          setTimeout(() => {
            clearInterval(timer);
            this.$router.push("/login");
          }, this.timeout);
        }
      );
    },
    pushRouterLogin() {
      this.$router.push("/login");
    },
    setRealAvator() {
      if (/\.(png|jpg|gif|jpeg|webp)$/.test(this.avatar)) {
        this.realAvator = this.avatar;
      } else {
        this.realAvator = "";
      }
    },
    checkUsername() {
      if (this.username) {
        this.validUserName = false;
        this.usernameHint = "...验证中...";
        this.usernameErr = "";
        this.usernameLoading = true;
        getValidUsername(this.username).then(res => {
          // console.log(res);
          this.usernameLoading = false;
          if (res.errno === -1) {
            this.usernameErr = res.message;
          } else {
            this.validUserName = true;
            this.usernameHint = "可以注册~";
          }
        });
      }
    },
    checkEmail() {
      if (this.email) {
        this.validEmail = false;
        this.emailErr = "";
        this.emailLoading = true;
        this.emailHint = "...验证中...";
        getValidEmail(this.email).then(res => {
          // console.log(res);
          this.emailLoading = false;
          if (res.errno === -1) {
            this.emailErr = res.message;
          } else {
            this.validEmail = true;
            this.emailHint = "可以注册~";
          }
        });
      }
    },
    clearAvatar() {
      this.avatar = "";
      this.realAvator = "";
    }
  },
  watch: {
    avatarPrased() {
      console.log(this.avatarPrased);
    }
  }
};
</script>

<style lang='scss' scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.2;
}
.on-hover {
  opacity: 0.85;
}
.flex {
  display: flex;
  align-content: space-around;
}
.avatar {
  border-radius: 50%;
}
// .default-avatar{
//   .mx-2{
//     border-radius: 50%;
//     border: darkgrey 1px solid;
//   }
// }
</style>