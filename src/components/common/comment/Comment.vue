<template>
  <div>
    <v-form v-model="valid">
      <v-row class="pa-0 ma-0">
        <v-col class="mx-auto" cols="11" sm="4">
          <v-text-field
            dense
            label="昵称"
            class="comment-input-name"
            :rules="usernameRule"
            :disabled="getUsername"
            v-model="username"
          ></v-text-field>
        </v-col>
        <v-col class="mx-auto" cols="11" sm="4">
          <v-text-field
            dense
            label="邮箱"
            class="comment-input-mail"
            :rules="emailRule"
            :disabled="getEmail"
            v-model="email"
          ></v-text-field>
        </v-col>
        <v-col class="mx-auto" cols="11" sm="4">
          <v-text-field
            dense
            label="URL"
            class="comment-input-url"
            placeholder="https://"
            v-model="URL"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-textarea
          dense
          :rules="textRule"
          counter="400"
          outlined
          v-model="comment"
          color="indigo"
          auto-grow
          :rows="rows"
          :placeholder="replyPlaceholder"
          label="评论"
          class="comment-input-text"
          ref="comment-text"
        ></v-textarea>
        <v-row align="center" class="px-2 py-0 ma-0" justify="space-between">
          <v-btn class="comment-submit" color="orange darken-1" @click="commitComment" :disabled="!valid" outlined>
            <v-icon class="mx-1">mdi-comment-text-outline</v-icon>提交评论
          </v-btn>
          <v-checkbox v-model="resaveEmail" label="当收到回复时用邮件提醒我"></v-checkbox>
        </v-row>
      </v-col>
    </v-form>
    <v-snackbar color="blue" :timeout="timeout" v-model="isShowTip" :top="isMobile">
      评论成功啦!
      <v-btn color="gray" text @click="showTip = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { getLoginCheck } from "network/user";
import { addComment } from "network/comment";
import { mapGetters } from "vuex";
export default {
  name: "Comment",
  props: {
    blogId: "",
    replyId: "", //决定显示的位置,并不是回复的评论id,是一级评论id
    replyCommentId: "", //回复的评论id
    rows: {
      default: 5
    },
    replyUsername: "",
    replyPlaceholder: ""
  },
  data() {
    return {
      valid: false,
      getEmail: false,
      username: "",
      email: "",
      resaveEmail: true,
      URL: "",
      getUsername: false,
      timeout: 4000,
      commented: false,
      isShowTip: false,
      usernameRule: [
        v => !!v || "username is required",
        v => (v && v.length < 15) || "名字太长啦，要被挤爆啦(╯°口°)╯(┴—┴",
        v =>
          /^[a-zA-Z0-9_\u4e00-\u9fa5-]{2,15}$/.test(v) || "长度<2或包含特殊符号"
      ],

      emailRule: [
        v => !!v || "邮箱是必须的哦~",
        v => /.+@.+\..+/.test(v) || "无效的邮箱❌"
      ],

      textRule: [v => !!v, v => v.length < 400 || "长度不符合✖"],

      comment: ""
    };
  },
  computed: {
    ...mapGetters(["isMobile", "loginCheckUsername", "loginCheckEmail"])
  },
  created() {
    if (this.loginCheckUsername === "") {
      //未登录,发送登陆请求
      getLoginCheck().then(res => {
        if (res.errno !== -1) {
          //登陆成功
          this.getUsername = true;
          this.getEmail = true;
          this.username = res.data.username;
          this.email = res.data.email;
          this.$store.commit("storeUserData", {
            username: res.data.username,
            email: res.data.email
          });
        }
      });
    } else {
      //已登录过,从vuex中获取登录信息
      this.getUsername = true;
      this.getEmail = true;
      this.username = this.loginCheckUsername;
      this.email = this.loginCheckEmail;
    }
  },
  methods: {
    commitComment() {
      addComment(
        this.blogId,
        this.username,
        this.email,
        this.resaveEmail,
        this.URL,
        this.comment,
        this.replyId,
        this.replyCommentId,
        this.replyUsername,
        this.getEmail //isRegisted
      ).then(res => {
        // console.log(res);
        if (res.data.errno !== -1) {
          this.comment = "";
          this.isShowTip = true;
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>