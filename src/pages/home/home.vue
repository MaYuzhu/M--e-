<template>
  <div>
    <NavHeader :data="data"></NavHeader>

    <div class="home_img">
      <img src="./img/bigimg.jpg" alt="">
    </div>

  </div>
</template>

<script>
  import NavHeader from '../../components/nav_header/nav_header.vue'

  export default {
    props:{
      data : Boolean
    },
    components:{
      NavHeader,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_img
    width 100%
    img
      width 100%



</style>
