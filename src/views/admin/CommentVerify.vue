<template>
  <div>
    <h1 class="mx-3">{{ text }}</h1>
    <div v-if="isAdmin">
      <admin-comment-list
        :blogID="''"
        :isAdmin="true"
        @deleteComment="deleteComment"
        @addToList="addList"
      />
      <div>
        <v-col v-for="(showItem, index1) in isShowList" :key="index1"
          >{{ showItem.username }}-{{ showItem.comment }}
        </v-col>
        <v-col v-for="(deleteItem, index2) in deleteList" :key="index2 + '1'"
          >{{ deleteItem.username }}-{{ deleteItem.comment }}
        </v-col>
      </div>
      <div class="my-4">
        <v-btn class="error" @click="submit">提交</v-btn>
      </div>
    </div>
    <transition>
      <div v-if="showSuccessTip" class="success-tip">删除成功！</div>
    </transition>
  </div>
</template>

<script>
import { getLoginCheck } from "network/user";
import { controlComment } from "network/comment";
import { mapGetters } from "vuex";
import AdminCommentList from "./childComps/AdminCommentList";
export default {
  name: "CommentVerify",
  components: {
    AdminCommentList,
  },
  created() {
    getLoginCheck().then((res) => {
      if (res.data.isAdmin === true) {
        this.text = "审查和删除评论";
        this.admin = true;
      } else {
        this.text = "没有权限✖";
      }
    });
  },
  computed: {
    ...mapGetters(["isAdmin"]),
  },
  data() {
    return {
      text: "验证权限中...",
      admin: false,
      isShowList: [],
      deleteList: [],
      showSuccessTip: false,
    };
  },
  methods: {
    deleteComment(item) {
      this.deleteList.push(item);
    },
    addList(item) {
      this.isShowList.push(item);
    },
    submit() {
      controlComment(this.isShowList, this.deleteList).then((res) => {
        this.showSuccessTip = true;
        setTimeout(() => {
          this.deleteList = [];
          this.showSuccessTip = false;
        }, 1500);
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.success-tip {
  position: fixed;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.25);
  bottom: 20px;
  left: 50%;
  right: 50%;
  border-radius: 3px;
  box-shadow: 0 0 blur spread color inset;
  background-color: #1976d2;
  transform: translate(0, -50%);
}
</style>