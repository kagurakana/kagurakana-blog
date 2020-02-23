<template>
  <v-img height="100%" width="100%" src="~assets/img/home_head_pic.jpg">
    <v-row align="center" justify="center" style="height:100%">
      <v-hover v-slot:default="{hover}">
        <v-col cols="4">
          <v-card color="white" :outlined="hover" width="100%" :class="{'on-hover':hover}">
            <v-form v-model="valid" class="input">
              <v-row>
                <v-col class="mx-auto" cols="11">
                  <v-text-field v-model="username" required  label="用户名/邮箱"></v-text-field>
                  <v-text-field v-model="password" required  label="密码" type="password"></v-text-field>
                </v-col>
                <v-col cols="12"></v-col>
              </v-row>
            </v-form>
            <v-card-subtitle class="flex">
              <v-btn class @click="pushRouterRegister" text>去注册</v-btn>
              <v-btn class='right' @click="postData" text>登录!</v-btn>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-hover>
    </v-row>
  </v-img>
</template>

<script>
import {postLogin} from 'network/user'
export default {
  name: "Login",
  data() {
    return {
      valid: false,
      password: "",
      username: ""
    };
  },
  methods: {
    postData(){
      postLogin(this.username,this.password).then(res=>{
        console.log(res)
      })
    },
    pushRouterRegister(){
      this.$router.push('/register')
    }
  },
};
</script>

<style lang='scss' scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.2;
}
.on-hover {
  opacity: 0.85;
}
.flex{
  display: flex;
  justify-content: space-around;
}

</style>