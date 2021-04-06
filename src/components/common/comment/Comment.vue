<template>
  <div>
    <v-form v-model="valid" lazy-validation>
      <v-row class="px-1 ma-0">
        <v-img
          class="pa-2 my-2 mx-auto round"
          :src="commentAvatar"
          max-width="60px"
          min-width="60px"
          max-height="60px"
          min-height="60px"
        >
        </v-img>
        <v-row class="mx-1">
          <v-col class="mx-auto" cols="11" sm="4">
            <v-text-field
              label="昵称*/QQ号"
              hint="输入QQ号会自动获得昵称~"
              class="comment-input-name"
              :rules="usernameRule"
              v-model="username"
              @blur="getQQInfo"
            ></v-text-field>
          </v-col>
          <v-col class="mx-auto" cols="11" sm="4">
            <v-text-field
              label="邮箱*"
              class="comment-input-mail"
              @blur="getGravatar"
              :rules="emailRule"
              v-model="email"
            ></v-text-field>
          </v-col>
          <v-col class="mx-auto" cols="11" sm="4">
            <v-text-field
              label="URL"
              class="comment-input-url"
              placeholder="https://"
              v-model="URL"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-row>
      <v-col cols="12">
        <v-textarea
          dense
          :rules="textRule"
          counter="1000"
          outlined
          v-model="comment"
          color="indigo"
          auto-grow
          :rows="rows"
          :placeholder="replyPlaceholder"
          label="评论"
          hint="(´；ω；`)请不要打广告~ 支持markdown哦"
          class="comment-area"
          :class="`OwO-textarea-${replyCommentId}`"
          ref="comment-text"
        ></v-textarea>
        <v-row class="px-3" justify="space-between">
          <OwO
            @requestCursorIndex="getCursorIndex"
            :cursorIndex="textAreaCursorIndex"
          ></OwO>
          <v-btn
            color="blue darken-3"
            @click="isShowPreview = !isShowPreview"
            text
            >预览</v-btn
          >
        </v-row>
        <v-row class="px-3" v-show="isShowPreview">
          <article
            class="comment-preview"
            v-html="compiledCommentInput"
          ></article>
        </v-row>
        <v-row align="center" class="px-2 py-0 ma-0" justify="space-between">
          <v-btn
            class="comment-submit"
            color="orange darken-1"
            @click="commitComment"
            :disabled="!valid"
            outlined
          >
            <v-icon class="mx-1">mdi-comment-text-outline</v-icon>提交评论
          </v-btn>
          <v-checkbox
            v-model="resaveEmail"
            label="当收到回复时用邮件提醒我"
          ></v-checkbox>
        </v-row>
      </v-col>
    </v-form>
    <v-snackbar
      color="blue"
      :timeout="timeout"
      v-model="isShowTip"
      :top="isMobile"
    >
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
import { getqqInfo } from "@/network/proxyRequset";
import { mapGetters } from "vuex";
import { BASE_URL_OUT } from "network/request";

import OwO from "./OwO/OwO.vue";
import gravatar from "gravatar";
import hljsMixin from "@/mixins/hljsMixin";
export default {
  name: "Comment",
  mixins: [hljsMixin],
  props: {
    blogId: "",
    replyId: "", //决定显示的位置,并不是回复的评论id,是一级评论id
    replyCommentId: "", //回复的评论id
    rows: {
      default: 5,
    },
    replyUsername: "",
    replyPlaceholder: "",
  },
  components: {
    OwO,
  },
  data() {
    return {
      valid: false,
      getEmail: false,
      username: "",
      email: "",
      resaveEmail: true,
      commentAvatar: "https://cdn.kagurakana.xyz/default.png",
      defaultAvatar: "https://cdn.kagurakana.xyz/default.png",
      URL: "",
      baseurlOut: BASE_URL_OUT,
      getUsername: false,
      getQQname: false,
      timeout: 4000,
      commented: false,
      isShowTip: false,
      isShowPreview: false,
      usernameRule: [
        (v) => !!v || "username is required",
        (v) => (v && v.length < 15) || "名字太长啦，要被挤爆啦(╯°口°)╯(┴—┴",
        (v) =>
          /^[a-zA-Z0-9_\u4e00-\u9fa5-]{2,15}$/.test(v) ||
          "长度<2或包含特殊符号",
      ],

      emailRule: [
        (v) => !!v || "邮箱是必须的哦~",
        (v) => /.+@.+\..+/.test(v) || "无效的邮箱❌",
      ],

      textRule: [(v) => !!v, (v) => v.length < 1000 || "长度不符合✖"],
      comment: " ",
      textAreaCursorIndex: 0,
    };
  },
  computed: {
    ...mapGetters(["isMobile", "loginCheckUsername", "loginCheckEmail"]),
  },
  created() {
    if (this.loginCheckUsername === "") {
      //未登录,发送登陆请求
      getLoginCheck().then((res) => {
        if (res.errno !== -1) {
          //登陆成功
          this.getUsername = true;
          this.getEmail = true;
          this.username = res.data.username;
          this.email = res.data.email;
          this.$store.commit("storeUserData", {
            username: res.data.username,
            email: res.data.email,
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
  mounted() {
    // this.OwODemo =
  },
  methods: {
    commitComment() {
      let replacedComment = this.replaceStamp();
      let commentPayload = {
        blogId: this.blogId,
        username: this.username,
        URL: this.URL,
        comment: replacedComment,
        replyId: this.replyId,
        replyCommentId: this.replyCommentId,
        replyUsername: this.replyUsername,
        isShow: 1,
        createTime: Date.now(),
        avatar: this.getQQname
          ? this.commentAvatar
          : gravatar.url(this.email, { s: "400", r: "pg", d: "mm" }),
      };
      addComment(
        this.blogId,
        this.username,
        this.email,
        this.resaveEmail,
        this.URL,
        replacedComment,
        this.replyId,
        this.replyCommentId,
        this.replyUsername,
        this.getEmail, //isRegisted
        this.commentAvatar
      ).then((res) => {
        // console.log(res);
        if (res.errno !== -1) {
          this.comment = "";
          this.isShowTip = true;
          this.$bus.$emit("commentSuccess");
        }
      });
    },
    getQQInfo() {
      let jsondata = {};
      getqqInfo(this.username).then((res) => {
        if (res.errno !== -1) {
          // console.log(res);
          this.username = res.data.nickName;
          this.commentAvatar = `${this.baseurlOut}/${res.data.avatar}`;
          this.getQQname = true;
        } else {
          this.getQQname = false;
        }
      });
    },
    getGravatar() {
      this.commentAvatar = this.getQQname
        ? this.commentAvatar
        : gravatar
            .url(this.email, { s: "400", r: "pg", d: "mm" })
            .replace(/.*com\/avatar\//g, "https://sdn.geekzu.org/avatar/");
    },
    getCursorIndex(code) {
      let className = this.$refs["comment-text"].$el.className;
      className = className.match(/(OwO.*)/)[0];
      // console.log(className)
      let index = document.querySelector(`.${className} textarea`).selectionEnd;
      // console.log(index)
      this.textAreaCursorIndex = index;
      // console.log(code);
      this.comment = `${this.comment.slice(
        0,
        index
      )}${code}${this.comment.slice(index)}`;
      // console.log(this.comment);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
// @import "~assets/css/owo.min.css";
@import "~assets/css/blog.scss";
.round {
  border-radius: 50%;
  border: 2px solid #f06292;
}
.fill-width {
  width: 100%;
}
::v-deep.comment-preview {
  width: 100%;
  @include blog;
  p,
  a {
    padding: 0;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
  }
  img {
    max-width: 200px;
  }
}
.comment-area {
  position: relative;
  &::after {
    position: absolute;
    right: 15px;
    bottom: 30px;
    content: "\e635";
    font-family: "iconfont";
  }
}
</style>
