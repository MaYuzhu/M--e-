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
    background pink
    display flex
    justify-content space-around
    font-size 18px
    line-height 2rem
</style>
