<template>
  <div class="wrap_title">
    <h2>{{title}}</h2>
    <div></div>
  </div>
</template>

<script>
  export default {
    props:{
      title:String,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap_title
    width 100%
    background #fff
    margin 20px auto
    h2
      width 100%
      font-size 24px
      font-weight 500
      margin 6px 0
      text-align center
      letter-spacing 5px
    div
      width 2rem
      height 1px
      background #333
      margin 0 auto
</style>
