<template>
  <div>
    <NavHeader></NavHeader>
    <TowRoute>
      <span slot="first"></span>
      <span slot="second">公司动态</span>
      <span slot="third">行业咨讯</span>npm
      <span slot="fourth"></span>
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
