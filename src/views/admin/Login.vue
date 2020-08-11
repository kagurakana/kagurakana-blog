<template>
  <div>
    <v-img height="100vh" width="100vw" :src="imgSrc" @keydown.enter="submitByEnter()">
      <v-row align="center" justify="center" style="height:100%">
        <v-hover v-slot:default="{hover}">
          <v-col cols="8" md="4">
            <v-card
              color="white"
              :outlined="hover"
              width="100%"
              :class="{'on-hover':(hover||isMobile)}"
            >
              <v-form v-model="valid" class="input">
                <v-row>
                  <v-col class="mx-auto" cols="11">
                    <v-text-field v-model="username" required label="用户名/邮箱"></v-text-field>
                    <v-text-field v-model="password" required label="密码" type="password"></v-text-field>
                  </v-col>
                  <v-col cols="12"></v-col>
                </v-row>
              </v-form>
              <v-card-subtitle class="flex">
                <v-btn class @click="pushRouterRegister" text>去注册</v-btn>
                <v-btn class="right" ref="login" @click="postData" text>登录!</v-btn>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-hover>
      </v-row>

      <v-snackbar color="blue" :timeout="timeout" v-model="successRegiste" :top="isMobile">
        {{checkedUsername}}欢迎回来~~ {{second}} 秒后跳转首页
        <v-btn color="lime" text @click="successRegiste = false">Close</v-btn>
      </v-snackbar>
    </v-img>
    <transition>
      <div ref="foo"></div>
    </transition>
  </div>
</template>

<script>
import { postLogin, getLoginCheck } from "network/user";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      password: "", //text绑定的用户名
      username: "",
      pcSrc: "https://cdn.kagurakana.xyz/home_head_pic.jpg",
      mobileSrc: "https://cdn.kagurakana.xyz/head_pic_mobile.jpg",
      second: 0, //tip显示的时间
      timeout: 3000, //tip的超时时间
      checkedUsername: "", //成功注册的用户名
      successRegiste: false //注册成功,显示tip
    };
  },
  computed: {
    ...mapGetters(["isMobile", "loginCheckUsername"]),
    imgSrc() {
      return this.isMobile ? this.mobileSrc : this.pcSrc;
    }
  },
  created() {
    if (this.loginCheckUsername === "") {
      getLoginCheck().then(res => {
        if (res.errno !== -1) {
          this.checkedUsername = res.data.username;
          this.$store.commit("storeUserData", {
            username: res.data.username,
            email: res.data.email
          });
          this.showBar();
        }
      });
    } else {
      this.checkedUsername = this.loginCheckUsername;
      this.showBar();
    }
  },
  methods: {
    postData() {
      this.checkedUsername = "";
      postLogin(this.username, this.password).then(res => {
        if (res.errno === 0) {
          this.checkedUsername = res.data.username;
          this.showBar();
        }
      });
    },
    showBar() {
      //显示tip
      this.successRegiste = true;
      this.second = this.timeout / 1000;
      let timer = setInterval(() => {
        this.second -= 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        this.$router.push("/");
      }, this.timeout);
    },
    pushRouterRegister() {
      this.$router.push("/register");
    },
    submitByEnter() {
      //监听回车按键
      this.$refs.login.$el.click();
    }
  },

  mounted() {
    console.log('refs: ', this.$refs)
  },
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
  justify-content: space-around;
}
</style>