<template>
  <v-container class="mx-auto" max-width="50%">
    <v-row class="blog-list">
      <v-col sm="12" cols="12" class="pa-2 list-item list-item-head">
        <div class="list-item-title">标题</div>
        <div class="list-item-time">时间</div>
        <div class="list-item-tag">标签</div>
        <div class="list-item-btn-group">操作</div>
      </v-col>
      <v-col
        v-for="(blogShotCut, index) in blogList"
        :key="index"
        sm="12"
        cols="12"
        class="pa-2 list-item"
      >
        <div
          class="list-item-title"
          :title="blogShotCut.title"
          @click="pushRouter(blogShotCut.id)"
        >
          {{ blogShotCut.title }}
        </div>
        <div class="list-item-time">
          {{ createTime(blogShotCut.createTime) }}
        </div>
        <div class="list-item-tag">
          <v-chip
            class="mx-1 my-1"
            v-for="(tag, index) in blogShotCut.tags"
            :key="index"
            @click.native="pushRouterTag(tag)"
          >
            {{ tag }}
          </v-chip>
        </div>

        <div class="list-item-btn-group">
          <v-btn
            class="btn"
            color="lime"
            @click.stop.native="updateBlog(blogShotCut.id)"
          >
            更新
          </v-btn>
          <v-btn
            class="btn"
            color="error"
            @click.stop.native="deleteBlog(index, blogShotCut.id)"
          >
            删除
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import { postDeleteBlog } from "network/blog";
import routerErrTipMixin from "@/mixins/routerErrTipMixin";
import moment from "moment";
export default {
  name: "AdminBlogList",
  mixins: [routerErrTipMixin],
  props: {
    blogList: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  methods: {
    pushRouter(id) {
      this.$router.push("/detail/" + id);
    },

    pushRouterTag(tag) {
      this.$router.push("/list/" + tag).catch((err) => {
        this.debouncedShowErrTip(tag);
      });
    },

    updateBlog(id) {
      this.$router.push("/admin/add-blog/" + id);
    },

    deleteBlog(index, id) {
      postDeleteBlog(id).then((res) => {
        if (res.errno !== -1) {
          if (index !== -1) {
            //数组响应式方法
            this.blogList.splice(index, 1);
          }
        }
      });
    },
    createTime(timestamp) {
      return moment(timestamp).format("YYYY年M月D日");
    },
  },
};
</script>

<style lang='scss' scoped>
.blog-list {
  border-top: $devide-line-color 3px solid;
  .list-item {
    display: flex;
    height: 55px;
    align-items: center;
    &:hover {
      background-color: rgb(246, 242, 242) !important;
    }
  }
  .list-item-head {
    background-color: #f6f2f2 !important;
    border-bottom: 1px salmon solid;
    font-weight: 600;
  }
  .list-item-title {
    cursor: pointer;
    width: 230px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .list-item-time {
    width: 200px;
    padding: 0 20px;
  }
  .list-item:nth-child(2n) {
    background-color: #fff;
  }
  .list-item:nth-child(2n-1) {
    background-color: #fdf9f6;
  }

  .list-item-tag {
    flex: 1;
  }
  .list-item-btn-group {
    width: 200px;
    .btn {
      margin: 10px;
    }
  }
}
</style>