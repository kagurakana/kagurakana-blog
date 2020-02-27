<template>
  <div>
    <v-col class="comment-item" v-for="(item, index) in activeComment" :key="index">
      <v-row   class="pa-0 my-3 mx-2 align-center justfy-center">
        <v-img width="60px" class="avatar" max-width="60px" height="60px" :src="avatarSrc(item)"></v-img>
        <div class="comment-detail">
          <div class="username">{{item.username}}</div>
          <div class="date">{{fommatTime(item.createTime)}}</div>
        <div class="comment">{{item.comment}}</div>
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import { getCommentList } from "network/comment";
import moment from 'moment'
export default {
  name: "CommentList",
  props: {
    blogId: ""
  },
  data() {
    return {
      commentLists: []
    };
  },
  computed:{
    activeComment(){
      return this.commentLists.filter(e=>e.isShow===1)
    }
  },
  created() {
    getCommentList(this.blogId).then(res => {
      console.log(res);
      this.commentLists = res.data;
    });
  },
  methods: {
    avatarSrc(item) {
      return item.avatar || require("assets/img/bili.svg");
    },
    fommatTime(date){
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
  }
};
</script>

<style lang='scss' scoped>
.avatar {
  border-radius: 50%;
  border: $devide-line-color 1px solid;
  
}
.username,.comment{
  width: 100%;
}
.comment-detail{
  padding: 2px 10px;
  flex:1;
}
.comment-item{
  border-bottom:1px  $devide-line-color dotted;
}
.date{
  font-size: 0.8rem;
  color:darkgray;
  padding-bottom: 5px;
}
</style>

