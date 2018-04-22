<template>
  <div class="nav_header_wrap" ref="home_wrap">
    <Header v-show="!data"></Header>
    <Nav></Nav>

  </div>
</template>

<script>
  import Header from '../../components/header/header.vue'
  import Nav from '../../components/nav_scroll/nav_scroll.vue'

  export default {
    props:{
      data:Boolean
    },

    components:{
      Header,
      Nav,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav_header_wrap
    background #fff





</style>
