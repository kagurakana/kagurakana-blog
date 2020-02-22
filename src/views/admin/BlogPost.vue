<template>
  <v-row>
    <v-col cols="12">
      <v-col cols="8" class="mx-auto">
        <v-text-field v-model="title" label="title"></v-text-field>
        <v-text-field v-model="tags" label="tags"></v-text-field>
        <v-text-field v-model="headPic" label="headPic"></v-text-field>
      </v-col>
      <v-col cols=11 class="mx-auto">
        <v-textarea v-model="desc" label="desc"></v-textarea>
        <v-textarea v-model="content" label="content"></v-textarea>
     <v-btn
     color="blue lighten-4"
     @click='post'
     >
        提交
      </v-btn>
      </v-col>
      
    </v-col>
  </v-row>
</template>

<script>
import {postNewBlog} from 'network/blog.js'
export default {
  name: "BlogPost",
  data() {
    return {
      title:'',
      tags:'',
      desc:'',
      content:'',
      headPic:''
    }
  },
  methods:{
    post(){
      if(this.title&&this.headPic&&this.desc&&this.content){
        console.log(this.tags)
        console.log(this.title,this.tags,this.desc,this.content)
        postNewBlog(this.headPic,this.title,this.tags,this.desc,this.content)
      }
    }
  }
};
</script>

<style lang='scss' scoped>
</style>