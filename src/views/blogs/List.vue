<template>
  <div>
    <HomeNav class="home-nav"/>
    <Content>
      <template v-slot:mid>
        <QuickShow />
        <h1>{{tag}}</h1>
      </template>
    </Content>
  </div>
</template>

<script>
import HomeNav from 'views/home/childComps/HomeNav'
import Content from "components/common/content/Content";
import QuickShow from "components/common/quickShow/QuickShow";
export default {
  name: "List",
  created() {
    const arr = this.$route.path.split("/");
    const tag = arr[arr.length - 1];
    this.tag = tag;
    console.log(tag);
    console.log('created')
  },
  
  activated(){
    console.log('act')
  },
  components: {
    Content,
    QuickShow,
    HomeNav
  },
  data() {
    return {
      tag:''
    }
  },
  //  beforeRouteUpdate(to,from,next){
  //    next()
  //   const arr = this.$route.path.split("/");
  //   const tag = arr[arr.length - 1];
  //   this.tag = tag;
  //   console.log(tag);
  // }
  watch:{
    $route(){
      const arr = this.$route.path.split("/");
const tag = arr[arr.length - 1];
this.tag = tag;
console.log(tag);
    }
  }
};
</script>

<style lang='scss' scoped>
.home-nav{
  position: sticky;
  top:0;
  z-index: 1000;
}
</style>