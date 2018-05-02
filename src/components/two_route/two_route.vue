<template>
  <div>
    <ul class="two_route">
      <li><slot name='first'></slot></li>
      <li><slot name='second'></slot></li>
      <li><slot name='third'></slot></li>
      <li><slot name='fourth'></slot></li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .two_route
    width 100%
    height 2rem
    background #f3f3f3
    display flex
    justify-content space-around
    font-size 16px
    line-height 2rem
    li
      padding 0 10px
</style>
