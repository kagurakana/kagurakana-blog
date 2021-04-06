<template>
  <BaseLayout>
    <template v-slot:layout>
      <Artitalk class="artitalk"></Artitalk>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "components/common/baseLayout/BaseLayout";
import Artitalk from "components/common/artitalk/Artitalk";
export default {
  name: "ArtitalkPage",
  components: {
    BaseLayout,
    Artitalk,
  },
};
</script>

<style lang='scss' scoped>
.artitalk {
  min-height: 100vh;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  position: relative;
  width: 80%;
  margin: 40px auto;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.85);
}
</style>