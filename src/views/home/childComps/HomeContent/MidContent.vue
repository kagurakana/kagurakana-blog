<template>
  <div>
    <MidSwapper/>
    <QuickShow/>
  </div>
</template>

<script>
import MidSwapper from './mid/MidSwipper'
import QuickShow from 'components/common/quickShow/QuickShow'
export default {
  name: "MidContent",
  components: {MidSwapper,
  QuickShow
  },
  
};
</script>

<style lang='scss'>
</style>