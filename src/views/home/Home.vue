<template>
  <div>
    <HomeHeadPic />
    <HomeNav />
    <Content>
      <template v-slot:left>
        <LeftContent />
      </template>
      <template v-slot:mid>
        <MidContent />
      </template>
      <template v-slot:right>
        <RightContent />
      </template>
    </Content>
  </div>
</template>

<script>
import HomeHeadPic from "./childComps/HomeHeadPic";
import HomeNav from "./childComps/HomeNav";
import Content from "components/common/content/Content";
import LeftContent from "./childComps/HomeContent/LeftContent";
import MidContent from "./childComps/HomeContent/MidContent";
import RightContent from "./childComps/HomeContent/RightContent";
export default {
  name: "Home",
  components: {
    HomeHeadPic,
    HomeNav,
    Content,
    LeftContent,
    MidContent,
    RightContent
  },
  mounted() {
    this.$store.commit("resize");
  }
};
</script>

<style lang='scss' scoped>
</style>