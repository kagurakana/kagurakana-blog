<template>
  <div>
    <v-container>
      <h1>{{tip}}</h1>
      <div v-if="isShow">
        <v-text-field v-model="avatar" label="Avatar"></v-text-field>
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field v-model="URL" label="URL"></v-text-field>
        <v-text-field v-model="bio" label="Bio"></v-text-field>
        <v-btn @click="addFriendsLink">addLink</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { getLoginCheck, postAddFriendLink } from "network/user";
import { mapGetters } from "vuex";
export default {
  name: "AddLink",
  computed: {
    ...mapGetters(["loginCheckUsername"])
  },
  data() {
    return {
      tip: "权限验证中...",
      isShow: false,
      avatar: "",
      name: "",
      URL: "",
      bio: ""
    };
  },
  created() {
    getLoginCheck().then(res => {
      if (res.data.isAdmin) {
        this.isShow = true;
        this.tip = "添加友链...";
      } else {
        this.tip = "没有权限...";
      }
    });
  },

  methods: {
    addFriendsLink() {
      postAddFriendLink(this.avatar, this.name, this.URL, this.bio).then(
        res => {
          let temp = this.tip;
          (this.tip = "ok"),
            setTimeout(() => {
              this.tip = temp;
            }, 1000);
        }
      );
    }
  }
};
</script>

<style lang='scss' scoped>
</style>