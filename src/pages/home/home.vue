<template>
  <div class="home_wrap" ref="home_wrap" :class="{on1:fixed}">
    <Header :class="{on:fixed}"></Header>
    <Nav></Nav>
    <ul class="a1">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
    </ul>
  </div>
</template>

<script>
  import Header from '../../components/header/header.vue'
  import Nav from '../../components/nav_scroll/nav_scroll.vue'

  export default {
    props:{
      fixed:Boolean
    },

    components:{
      Header,
      Nav,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_wrap

    height 1000px
    background lavender
  .on1
    margin-top 68px
    .on
      display none



</style>
