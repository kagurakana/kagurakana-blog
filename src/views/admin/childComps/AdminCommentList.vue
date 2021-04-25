<template>
  <div>
    <v-col
      class="comment-item"
      v-for="(item, index) in activeCommentComment"
      :key="index"
    >
      <v-row class="pa-0 my-3 mx-2 align-center justfy-center">
        <v-col cols="12" class="d-flex pa-0 ma-0">
          <div class="avatar-group-l">
            <img :src="avatarBorders[0]" class="avatar-border" alt="" />
            <v-img
              width="60px"
              class="avatar"
              max-width="60px"
              height="60px"
              :src="avatarSrc(item)"
            >
            </v-img>
            <div class="admin-spark-s" title="博主~" v-if="item.isAdmin"></div>
          </div>
          <div class="comment-detail" :id="'comment-' + item.id">
            <a :href="item.url == '' ? null : item.url" target="_blank">
              <span
                class="username"
                :class="{ 'link-style': item.url !== '' }"
                >{{ item.username }}</span
              >
            </a>
            <div class="date">{{ fommatTime(item.createTime) }}</div>
            <router-link
              v-if="item.blogId != null"
              :to="'/detail/' + item.blogId"
            >
              <div class="blogID-text">回复的博客ID:{{ item.blogId }}</div>
            </router-link>
            <article class="comment-detail" v-html="item.comment"></article>
          </div>
        </v-col>
        <!-- 回复列表 -->
        <div
          v-for="(reply, index1) in getReplys(item)"
          :key="index1"
          :id="'comment-' + reply.id"
          class="level-2-reply"
        >
          <div class="avatar-group-s">
            <v-img
              width="40px"
              class="avatar mt-1"
              max-width="40px"
              height="40px"
              :src="avatarSrc(reply)"
            >
            </v-img>
            <div class="admin-spark-s" title="博主~" v-if="reply.isAdmin"></div>
          </div>

          <div class="level-2-reply-main">
            <div class="level-2-reply-info">
              <a :href="reply.url == '' ? null : reply.url" target="_blank">
                <span
                  class="username"
                  :class="{ 'link-style': reply.url !== '' }"
                  >{{ reply.username }}</span
                >
              </a>
              <!-- TODO: 绑定id -->
              <div class="date">{{ fommatTime(reply.createTime) }}</div>
              <div class="reply-span" @click="goToTarget(reply.replyCommentId)">
                @{{ reply.replyUsername }}:
              </div>
              <article class="comment-detail" v-html="reply.comment"></article>
            </div>
          </div>

          <div class="level-2-info">
            <div>
              <div v-if="reply.title">blogTitle:{{ reply.title }}</div>
              <router-link v-if="item.blogId" :to="'/detail/' + item.blogId">
                <div>blogId:{{ reply.blogId }}</div>
              </router-link>
              <div>是否隐藏:{{ reply.isShow ? " 否" : " 是" }}</div>
            </div>
            <div class="level-1-verify-btn-group">
              <v-btn
                color="success"
                class="mx-3"
                @click.once="$emit('addToList', reply)"
                >通过</v-btn
              >
              <v-btn
                color="error"
                class="mx-3"
                @click.once="$emit('deleteComment', reply)"
                >删除</v-btn
              >
            </div>
          </div>
        </div>
        <div class="level-1-reply-info">
          <div v-if="item.title">文章标题:{{ item.title }}</div>
          <router-link v-if="item.blogId" :to="'/detail/' + item.blogId">
            <div>文章Id:{{ item.blogId }}</div>
          </router-link>
          <div class="my-1" v-if="item.isShow">
            是否隐藏:{{ item.isShow ? " 否" : " 是" }}
          </div>
          <v-btn
            color="success"
            class="mx-3"
            @click.once="$emit('addToList', item)"
            >通过</v-btn
          >
          <v-btn
            color="error"
            class="mx-3"
            @click.once="$emit('deleteComment', item)"
            >删除</v-btn
          >
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import gravatar from "gravatar";
import { getCommentList } from "network/comment";
import moment from "moment";
import hljsMixin from "@/mixins/hljsMixin";
import _ from "lodash";
export default {
  name: "CommentList",
  mixins: [hljsMixin],
  components: {},
  props: {
    blogId: "",
    isAdmin: false,
  },
  created() {
    getCommentList(this.blogId).then((res) => {
      this.commentLists = res.data;
    });
    this.$bus.$on("commentSuccess", () => {
      getCommentList(this.blogId).then((res) => {
        this.commentLists = res.data;
      });
    });
  },
  data() {
    return {
      commentLists: [],
      replyShowPosition: {}, //决定了哪个评论主题下的回复框显示
      replyUsername: "",
      replyCommentId: "",
      avatarBorders: [
        "https://cdn.kagurakana.xyz/6c7f2ccb92627b11101dfbb616524845cac8f216.webp",
      ],
    };
  },
  computed: {
    // 取得所有激活(显示通过审核的)评论
    activeComment() {
      return this.isAdmin
        ? this.compiledCommentMarkdownList
        : this.compiledCommentMarkdownList.filter((e) => e.isShow === 1);
    },
    // 取得显示评论中的主题评论(区别于回复),若为主题评论而不是回复,replyId=''
    activeCommentComment() {
      return this.activeComment.filter((e) => e.replyId == "");
    },
  },

  methods: {
    avatarSrc(item) {
      if (item.commentAvatar == null) {
        //未注册用户在评论时头像从gravatar获取.
        return gravatar
          .url(item.email, { s: "400", r: "pg", d: "mm" })
          .replace(/.*com\/avatar\//g, "https://sdn.geekzu.org/avatar/");
      }
      //选择默认头像的注册用户
      return item.avatar === "default"
        ? require("assets/img/default.png")
        : item.commentAvatar;
    },
    fommatTime(date) {
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    goToTarget(commentId) {
      this.$vuetify.goTo("#comment-" + commentId, {
        duration: 250,
        offset: 80,
      });
    },
    /*根据不同的replyID显示不同位置的回复框,设置回复评论的id*/
    setReply(mainCommentId, replyCommentId, username) {
      this.replyShowPosition = {}; //重置对象
      this.replyUsername = username; //重置回复target名字
      // this.
      this.replyCommentId = replyCommentId; //设置回复的评论id
      this.replyShowPosition[mainCommentId] = true; //显示对应评论主题id下的回复框
      this.$nextTick(() => {
        this.$vuetify.goTo("#comment-input-" + mainCommentId, {
          duration: 1000,
          offset: 80,
        });
      });
    },
    /** 获取对应评论主题下的回复列表 */
    getReplys(item) {
      if (this.isAdmin) {
        return this.commentLists.filter((e) => e.replyId === item.id).reverse();
      } else {
        return _.sortBy(
          this.commentLists.filter(
            (e) => e.replyId === item.id && e.isShow == 1
          ),
          ["createTime"]
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/css/blog.scss";
.avatar-group-s {
  position: relative;
  height: 40px;
  width: 40px;
  .avatar {
    border-radius: 50%;
    border: 2px solid #f06292;
  }

  .admin-spark-s {
    cursor: pointer;
    background-image: url("https://cdn.kagurakana.xyz/user-auth.png");
    background-position: -38px -53px;
    position: absolute;
    right: -5px;
    bottom: -5px;
    width: 20px;
    height: 20px;
    z-index: 20;
    transform: scale(0.85);
  }
}
.avatar-group-l {
  position: relative;
  height: 96px;
  width: 96px;
  .avatar {
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #f06292;
  }
  .avatar-border {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 96px;
    height: 96px;
  }
  .admin-spark-s {
    cursor: pointer;
    background-image: url("https://cdn.kagurakana.xyz/user-auth.png");
    background-position: -38px -53px;
    position: absolute;
    left: 60px;
    bottom: 10px;
    width: 20px;
    height: 20px;
    z-index: 20;
  }
}

.username,
.comment {
  width: 100%;
}
.username {
  color: #dc143c;
  font-weight: 800;
}
.comment-detail {
  padding: 2px 10px;
  flex: 1;
}
.comment-item {
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.15);
  margin: 15px 0;
  border-radius: 8px;
  background-color: #fff;
}
.level-1-reply-info {
  width: 100%;
  .level-1-verify-btn-group {
    display: flex;
  }
}
.level-2-reply {
  display: flex;
  width: 100%;
  margin: 10px 0 10px 100px;
  padding: 10px 10px 5px 15px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  .level-2-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .level-2-reply-main {
    display: flex;
    flex: 1;

    .level-2-reply-info {
      margin-left: 15px;
    }
  }
}
.date {
  font-size: 0.8rem;
  color: darkgray;
  padding-bottom: 5px;
}
.reply-span {
  font-size: 1rem;
  color: rgb(152, 152, 250);
  padding-bottom: 5px;
  cursor: pointer;
}
.blogID-text {
  font-size: 0.85rem;
  color: rgb(152, 152, 250);
  padding-bottom: 5px;
}
.link-style,
::v-deep.comment-detail a {
  color: $link-color;
  position: relative;
  transition: all 1s ease-in-out;
}
.link-style::after,
::v-deep.comment-detail a::after {
  content: "";
  display: inline-block;
  position: absolute;
  height: 5px;
  bottom: 0;
  background-color: rgba($color: $link-color, $alpha: 0.3);
  width: 0;
  left: 50%;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}
.link-style:hover::after,
::v-deep.comment-detail a:hover::after {
  content: "";
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background-color: rgba($color: $link-color, $alpha: 0.3);
  width: 100%;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}
::v-deep article {
  @include blog;
  margin-top: 0 !important;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-left: 0px !important;
  }
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
</style>
