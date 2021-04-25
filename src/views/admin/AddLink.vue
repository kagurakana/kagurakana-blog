<template>
  <div>
    <v-card class="add-link-container">
      <v-container>
        <h1>{{ tip }}</h1>
        <div v-if="isShow">
          <main>
            <div>
              <v-text-field
                v-model="avatar"
                filled
                label="Avatar"
              ></v-text-field>
              <v-text-field v-model="name" filled label="Name"></v-text-field>
              <v-text-field v-model="URL" filled label="URL"></v-text-field>
              <v-text-field v-model="bio" filled label="Bio"></v-text-field>
              <v-radio-group v-model="linkType" :mandatory="false">
                <v-radio label="传教" value="recommend"></v-radio>
                <v-radio label="朋友" value="friend"></v-radio>
                <v-radio label="大佬" value="fame"></v-radio>
              </v-radio-group>
            </div>
            <div>
              <v-card  elevation="4" class="friend-link-card">
                <div class="d-flex">
                  <img
                    :src="
                      avatar
                        ? avatar
                        : 'https://cdn.kagurakana.xyz/Cat_congras.webp@webp'
                    "
                    class="link-avatar"
                    alt=""
                  />
                  <div>
                    <p><strong>名称：</strong>{{ name }}</p>
                    <p><strong>简介：</strong>{{ bio }}</p>
                    <p><strong>链接：</strong>{{ URL }}</p>
                    <p><strong>类型：</strong>{{ linkType + "" }}</p>
                  </div>
                </div>
              </v-card>
            </div>
          </main>
          <v-btn @click="addFriendsLink" class="mr-4" color="primary">
            添加
          </v-btn>
          <v-btn
            @click="updateFriendLink"
            :disabled="!isUpdating"
            color="success"
            class="mr-4"
          >
            更新
          </v-btn>
          <v-btn @click="clearInput" v-show="isUpdating" color="error">
            清空
          </v-btn>
          <v-row>
            <v-col
              class="col-12 col-md-6 col-lg-4"
              v-for="(friendLink, index) in friendLinks"
              :key="index"
            >
              <v-card elevation="4" class="friend-link-card">
                <div class="d-flex">
                  <img :src="friendLink.avatar" class="link-avatar" alt="" />
                  <div>
                    <p><strong>ID: </strong>{{ friendLink.id }}</p>
                    <p><strong>名称：</strong>{{ friendLink.name }}</p>
                    <p><strong>简介：</strong>{{ friendLink.bio }}</p>
                    <p><strong>链接：</strong>{{ friendLink.url }}</p>
                    <p><strong>类型：</strong>{{ friendLink.linkType + "" }}</p>
                  </div>
                </div>
                <div class="link-btn-group">
                  <v-btn color="success" @click="changeInputData(friendLink)">
                    更新
                  </v-btn>
                  <v-btn color="error" @click="deleteFrinedLink(friendLink.id)">
                    删除
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-card>
    <v-snackbar v-model="showSnackBar" :timeout="1500" color="">{{
      snackerBarTip
    }}</v-snackbar>
  </div>
</template>

<script>
import {
  getLoginCheck,
  postAddFriendLink,
  getFriendLink,
  postUpdateFrinedLink,
  postDeleteFriendLink,
} from "network/user";
import { mapGetters } from "vuex";
export default {
  name: "AddLink",
  computed: {
    ...mapGetters(["loginCheckUsername"]),
  },
  data() {
    return {
      tip: "权限验证中...",
      showSnackBar: false,
      snackerBarTip: "",
      isShow: false,
      linkId: "",
      avatar: "",
      name: "",
      URL: "",
      bio: "",
      linkType: "",
      friendLinks: [],
      isUpdating: false,
    };
  },
  created() {
    getLoginCheck()
      .then((res) => {
        if (res.data.isAdmin) {
          this.isShow = true;
          this.tip = "添加友链...";
          return Promise.resolve();
        } else {
          this.tip = "没有权限...";
          return Promise.reject();
        }
      })
      .then((res) => {
        return getFriendLink();
      })
      .then((res) => {
        this.friendLinks = res.data;
      });
  },

  methods: {
    addFriendsLink() {
      postAddFriendLink(
        this.avatar,
        this.name,
        this.URL,
        this.bio,
        this.linkType
      )
        .then((res) => {
          let temp = this.tip;
          (this.tip = "ok"),
            setTimeout(() => {
              this.tip = temp;
            }, 1000);
          return getFriendLink();
        })
        .then((res) => {
          this.friendLinks = res.data;
        });
    },
    changeInputData(friendLink) {
      this.linkId = friendLink.id;
      this.avatar = friendLink.avatar;
      this.name = friendLink.name;
      this.linkType = friendLink.linkType;
      this.bio = friendLink.bio;
      this.URL = friendLink.url;
      this.isUpdating = true;
    },
    clearInput() {
      this.avatar = "";
      this.name = "";
      this.linkType = "";
      this.bio = "";
      this.URL = "";
      this.isUpdating = false;
    },
    updateFriendLink() {
      postUpdateFrinedLink(
        this.linkId,
        this.avatar,
        this.name,
        this.URL,
        this.bio,
        this.linkType
      )
        .then((res) => {
          this.clearInput();
          this.snackerBarTip = "更新成功✔";
          this.showSnackBar = true;
          return getFriendLink();
        })
        .then((res) => {
          this.friendLinks = res.data;
        });
    },
    deleteFrinedLink(id) {
      postDeleteFriendLink(id)
        .then((res) => {
          this.snackerBarTip = "删除成功";
          this.showSnackBar = true;
          return getFriendLink();
        })
        .then((res) => {
          this.friendLinks = res.data;
        });
    },
  },
};
</script>

<style lang='scss' scoped>
.add-link-container {
  min-height: 80vh;
  margin: 60px;
  main {
    display: flex;
    > div {
      flex: 1;
      margin: 0 30px;
    }
  }
}
.friend-link-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  .link-avatar {
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }
  > div {
    flex: 1;
    p {
      line-height: 1.2em;
    }
  }
  .link-btn-group {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>