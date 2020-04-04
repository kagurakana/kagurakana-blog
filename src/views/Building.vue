<template>
  <div>
    <v-img src="https://cdn.kagurakana.xyz/home_head_pic.jpg" height="100vh">
      <v-row align="center" justify="center" class="fill-height">
        <v-col>
          <v-col cols="12">
            <h1 class="text-center">建设中...</h1>
          </v-col>
          <v-col cols="12" class="justfy-center">
            <v-btn color="rgba(243,243,243,0.8)">
              <router-link to="/" tag="div">首页</router-link>
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Building"
};
</script>

<style lang='scss' scoped>
.text-center {
  text-align: center;
  width: 100%;
  color: rgba(252, 232, 232, 0.8);
}
.justfy-center{
  text-align: center
}
</style>