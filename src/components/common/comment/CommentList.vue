<template>
  <div>
    <v-col
      v-for="(item, index) in activeCommentComment"
      class="comment-item"
      :key="index"
    >
      <v-lazy
        :options="{
          threshold: 0.1,
        }"
        min-height="120"
        transition="scale-transition"
      >
        <v-row class="pa-0 my-3 mx-2 align-center justfy-center">
          <v-col cols="12" class="pa-0 ma-0">
            <div class="comment-info">
              <div class="avatar-group-l">
                <img :src="avatarBorders[0]" class="avatar-border" alt="" />
                <v-img class="avatar" :src="avatarSrc(item)"> </v-img>
                <div
                  class="admin-spark-s"
                  title="博主~"
                  v-if="item.isAdmin"
                ></div>
              </div>
              <div class="user-info">
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
              </div>
            </div>

            <div class="comment-detail" :id="'comment-' + item.id">
              <article class="comment-detail" v-html="item.comment"></article>
              <v-btn
                text
                small
                color="light-blue darken-3"
                @click="setReply(item.id, item.id, item.username)"
                class="my-3"
                >回复</v-btn
              >
            </div>
          </v-col>
          <!-- 回复列表 -->
          <div class="lv-2-reply">
            <v-col
              cols="12"
              v-for="(reply, index1) in getReplys(item)"
              :key="index1"
              :id="'comment-' + reply.id"
              class="d-flex pa-0 ma-0"
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
                <div
                  class="admin-spark-s"
                  title="博主~"
                  v-if="reply.isAdmin"
                ></div>
              </div>
              <v-col :cols="12" class="pl-md-2 ma-0">
                <div class="user-info">
                  <a :href="reply.url == '' ? null : reply.url" target="_blank">
                    <span
                      class="username"
                      :class="{ 'link-style': reply.url !== '' }"
                      >{{ reply.username }}</span
                    >
                  </a>
                  <!-- TODO: 绑定id -->
                  <div class="date">{{ fommatTime(reply.createTime) }}</div>
                  <div
                    class="reply-span"
                    @click="goToTarget(reply.replyCommentId)"
                  >
                    @{{ reply.replyUsername }}:
                  </div>
                  <article
                    class="comment-detail"
                    v-html="reply.comment"
                  ></article>
                  <v-btn
                    text
                    small
                    color="light-blue darken-3"
                    @click="setReply(item.id, reply.id, reply.username)"
                    class="my-3"
                    >回复</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="2" v-if="isAdmin">
                <div>blogTitle:{{ reply.title }}</div>
                <router-link :to="'/detail/' + item.blogId">
                  <div>blogId:{{ reply.blogId }}</div>
                </router-link>
                <div>isShow:{{ reply.isShow }}</div>
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
              </v-col>
            </v-col>
          </div>
          <!-- 回复input -->
          <v-col
            :id="'comment-input-' + item.id"
            v-show="replyShowPosition[item.id] == true"
            class="mx-auto pa-0 my-0"
            cols="12"
          >
            <v-col class="mx-auto pa-0 my-0" cols="12">
              <Comment
                :blogId="item.blogId"
                :rows="2"
                :replyPlaceholder="'回复 ' + replyUsername"
                :replyId="item.id"
                :replyUsername="replyUsername"
                :replyCommentId="replyCommentId"
              />
            </v-col>
          </v-col>
          <v-col v-if="isAdmin">
            <div>blogTitle:{{ item.title }}</div>
            <router-link :to="'/detail/' + item.blogId">
              <div>blogId:{{ item.blogId }}</div>
            </router-link>
            <div>isShow:{{ item.isShow }}</div>
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
          </v-col>
        </v-row>
      </v-lazy>
    </v-col>
  </div>
</template>

<script>
import gravatar from "gravatar";
import { getCommentList } from "network/comment";
import moment from "moment";
import Comment from "./Comment";
import hljsMixin from "@/mixins/hljsMixin";
import _ from "lodash";
export default {
  name: "CommentList",
  mixins: [hljsMixin],
  components: {
    Comment,
  },
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
        return gravatar.url(item.email, { s: "400", r: "pg", d: "mm" });
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
.comment-item {
  display: flex;
  flex-direction: column;
  .comment-info {
    display: flex;
    align-items: center;
    width: 100%;

    .avatar-group-l {
      position: relative;
      height: 76px;
      width: 76px;
      .avatar {
        height: 58px;
        max-width: 58px;
        width: 58px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #f06292;
      }
      .avatar-border {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 10;
        width: 76px;
        height: 76px;
        transform: translate(-50%, -50%);
      }
      .admin-spark-s {
        cursor: pointer;
        background-image: url("https://cdn.kagurakana.xyz/user-auth.png");
        background-position: -38px -53px;
        position: absolute;
        left: 46px ;
        bottom: 6px ;
        width: 20px;
        height: 20px;
        z-index: 20;
      }
    }
  }
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
  .lv-2-reply {
    margin-left: 25px;
    padding-left: 15px;
    width: 100%;
    border-left: 4px rgba($color: #b0a1c7, $alpha: 0.7) solid;
  }
}
.user-info {
  .username {
    color: #dc143c;
    font-weight: 800;
  }
  .date {
    font-size: 0.8rem;
    color: darkgray;
    padding-bottom: 5px;
  }
}
.username,
.comment {
  width: 100%;
}

.comment-detail {
  padding: 2px 10px;
  flex: 1;
}
.comment-item {
  border-bottom: 2px $devide-line-color dotted;
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
@media screen and (max-width: 860px) {
  .comment-item {
    .avatar-group-l {
      height: 75px;
      width: 75px;
      .avatar {
        height: 48px;
        max-width: 48px;
        width: 48px;
      }
      .avatar-border {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 10;
        width: 75px;
        height: 75px;
        transform: translate(-50%, -50%);
      }
    }
    .lv-2-reply{
      .reply-span,.comment-detail,button{
        margin-left: -45px;
      }
    }
  }
}
</style>
