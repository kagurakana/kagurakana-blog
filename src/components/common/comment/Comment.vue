<template>
  <div>
    <v-form v-model="valid">
      <v-row>
        <v-col class="mx-auto" cols="11" md="6">
          <v-text-field label="昵称" :rules="usernameRule" :disabled="getUsername" v-model="username"></v-text-field>
        </v-col>
        <v-col class="mx-auto" cols="11" md="6">
          <v-text-field label="邮箱" :rules="emailRule" :disabled="getEmail" v-model="email"></v-text-field>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-textarea
          dense
          :rules="textRule"
          hint="3~300个字符"
          counter="300"
          outlined
          v-model="comment"
          color="indigo"
          auto-grow
          label="评论"
        ></v-textarea>
        <v-btn color="orange darken-1" @click="commitComment" :disabled="!valid" outlined>
          <v-icon class="mx-1">mdi-comment-text-outline</v-icon>提交评论
        </v-btn>
      </v-col>
    </v-form>
    <v-snackbar color="blue" :timeout="timeout" v-model="isShowTip" :top="isMobile">
      评论成功啦!
      <span v-if="!getUsername">请等待审核.注册之后可以免审核哦~</span>
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
    replyId: ""
  },
  data() {
    return {
      valid: false,
      username: "",
      email: "",
      getEmail: false,
      getUsername: false,
      timeout: 6000,
      isShowTip: false,
      usernameRule: [
        v => !!v || "username is required",
        v => (v && v.length < 15) || "名字太长啦，要被挤爆啦(╯°口°)╯(┴—┴",
        v =>
          /^[a-zA-Z0-9_\u4e00-\u9fa5-]{2,15}$/.test(v) || "长度<2或包含特殊符号"
      ],

      emailRule: [
        v => !!v || "填入邮箱，才能及时获得回复哦",
        v => /.+@.+\..+/.test(v) || "无效的邮箱❌"
      ],

      textRule: [
        v => !!v || "你还什么都没有写~~",
        v => (v && v.length < 300 && v.length > 3) || "长度不符合✖"
      ],

      comment: ""
    };
  },
  computed: {
    ...mapGetters(["isMobile"])
  },
  created() {
    getLoginCheck().then(res => {
      console.log(res);
      if (res.errno !== -1) {
        this.getUsername = true;
        this.getEmail = true;
        this.username = res.data.username;
        this.email = res.data.email;
      }
    });
  },
  methods: {
    commitComment() {
      addComment(
        this.blogId,
        this.username,
        this.email,
        this.comment,
        this.replyId,
        this.getEmail
      ).then(res => {
        console.log(res);
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