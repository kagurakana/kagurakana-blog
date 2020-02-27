<template>
  <div>
    <v-form>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field label="昵称" :disabled="getUsername" v-model="username"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="邮箱" :disabled="getEmail" v-model="email"></v-text-field>
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-textarea dense outlined v-model="comment" color="indigo" auto-grow label="评论"></v-textarea>
        <v-btn color="indigo darken-4" outlined>asdsa</v-btn>

      </v-col>

      
    </v-form>
  </div>
</template>

<script>
import { getLoginCheck } from "network/user";
export default {
  name: "Comment",
  props: {
    id: ""
  },
  data() {
    return {
      username: "",
      email: "",
      getEmail: false,
      getUsername: false,
      comment: ""
    };
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
  }
};
</script>

<style lang='scss' scoped>
</style>