<template>
  <div>
    <h1 class="mx-3">{{text}}</h1>
    <div v-if="admin">
      <CommentList
        :blogID="''"
        :isAdmin="true"
        @deleteComment="deleteComment"
        @addToList="addList"
      />
      <div>
        <v-col
          v-for="(showItem, index1) in isShowList"
          :key="index1"
        >{{showItem.username}}-{{showItem.comment}}</v-col>
        <v-col
          v-for="(deleteItem, index2) in deleteList"
          :key="index2+'1'"
        >{{deleteItem.username}}-{{deleteItem.comment}}</v-col>
      </div>
      <div>
        <v-btn @click="submit">提交</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { getLoginCheck } from "network/user";
import { controlComment } from "network/comment";
import CommentList from "components/common/comment/CommentList";
export default {
  name: "CommentVerify",
  components: {
    CommentList
  },
  created() {
    getLoginCheck().then(res => {
      if (res.data.isAdmin === true) {
        this.text = "审查和删除评论";
        this.admin = true;
      }else{
        this.text = '没有权限✖'
      }
    });
  },
  data() {
    return {
      text: "验证权限中...",
      admin: false,
      isShowList: [],
      deleteList: []
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
      controlComment(this.isShowList, this.deleteList).then(res => {
        // console.log(res);
      });
    }
  }
};
</script>

<style lang='scss' scoped>
</style>