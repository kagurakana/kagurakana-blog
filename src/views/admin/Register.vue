<template>
  <v-img height="100%" width="100%" src="~assets/img/home_head_pic.jpg">
    <v-row align="center" justify="center" style="height:100%">
      <v-hover v-slot:default="{hover}">
        <v-col cols="10" md="4">
          <v-card color="white" :outlined="hover" width="100%" :class="{'on-hover':hover}">
            <v-form v-model="valid" class="input">
              <v-row>
                <v-col class="mx-auto" cols="11">
                  <v-text-field
                    v-model="username"
                    :rules="nameRule"
                    counter="15"
                    aria-required
                    label="用户名"
                    :loading="loading"
                  ></v-text-field>
                  <v-text-field
                    :loading="loading"
                    v-model="email"
                    aria-required
                    :rules="emailRule"
                    label="email"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    aria-required
                    label="密码(数据库已使用HMAC-SHA-512加密)"
                    hint="暂时不提供修改密码功能，一定要记住密码哦~"
                    type="password"
                    :rules="passwordRule"
                    :loading="loading"
                  ></v-text-field>
                  <v-checkbox v-model="haveAvatar">
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
                  <v-checkbox label="使用默认头像" v-model="useDefaultAvator"></v-checkbox>
                  <v-text-field
                    v-model="avatar"
                    @blur="setRealAvator"
                    :disabled="haveAvatar||useDefaultAvator"
                    :rules="avatarRule"
                    label="头像URL"
                    hint="要确保头像可以被外站应用哦"
                    :loading="loading"
                  ></v-text-field>
                  <v-img
                    lazy-src="@/assets/img/loading.gif"
                    class="avatar"
                    @load="avatarPrased=true"
                    @input="avatarPrased=false"
                    @error="avatarPrased=false"
                    v-if="!!avatar"
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
              <v-btn
                class
                @click="postRegister"
                :disabled="!(valid&&useDefaultAvator||valid&&haveAvatar||valid&&avatarPrased)"
                text
              >注册!</v-btn>
              <v-btn class @click="pushRouterLogin" text>去登陆</v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-hover>
    </v-row>
  </v-img>
</template>

<script>
import { postLogin, postRegister } from "network/user";
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
      nameRule: [
        v => !!v || "输入你的名字(=・ω・=)",
        v => (v && v.length < 15) || "名字太长啦，要被挤爆啦(╯°口°)╯(┴—┴"
      ],

      email: "",
      emailRule: [
        v => !!v || "填入邮箱，才能即使获得回复哦，放心吧，邮箱不会外泄的~",
        v => /.+@.+\..+/.test(v) || "无效的邮箱❌"
      ],
      avatarRule: [
        v =>
          (/\.(png|jpg|gif|jpeg|webp)$/.test(v)||v==false) ||
          "格式不正确(.png|.jpg|.jpeg|.webp)"
      ],
      haveAvatar: false,
      useDefaultAvator: false,
      avatar: "",
      realAvator: "",
      avatarPrased: false,
      loading: false
    };
  },
  methods: {
    postRegister() {
      this.loading = true;
      postRegister(this.username, this.password, this.email, this.avatar).then(
        res => {
          console.log(res);
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
</style>