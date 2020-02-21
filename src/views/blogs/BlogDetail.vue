<template>
  <div>
    <HomeNav class="home-nav"/>
    <Content>
      <template v-slot:mid>
       
      </template>
    </Content>
  </div>
</template>

<script>
import HomeNav from 'views/home/childComps/HomeNav'
import Content from "components/common/content/Content";
export default {
  name: "BlogDetail",
  components: {
    Content,
    HomeNav
  }
};
</script>

<style lang='scss' scoped>
.home-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>