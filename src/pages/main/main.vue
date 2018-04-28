<template>
  <div>
    <NavHeader></NavHeader>
    <TowRoute>
      <span slot="first">中企地产</span>
      <span slot="second">票 e 通</span>
      <span slot="third">智投家</span>
      <span slot="fourth">资产交易中心</span>
    </TowRoute>
  </div>
</template>

<script>
  import NavHeader from '../../components/nav_header/nav_header.vue'
  import TowRoute from '../../components/two_route/two_route.vue'

  export default {
    components:{
      NavHeader,
      TowRoute,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
