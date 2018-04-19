<template>
  <div class="header_wrap">
    <div class="logo">
      <img src="./logo.png" alt="">
    </div>
    <div id="nav" class="nav" @click="navIs">
      <i class="iconfont icon-gengduo"></i>
      <i class="iconfont icon-ego-guanbi"></i>
    </div>
  </div>
</template>

<script>
  //var geng = document.querySelector('.nav')
  let geng = document.getElementById('nav')
  //var guan = document.querySelector('.nav> :last-child')
  export default {

    methods:{
      navIs(){
        console.log(geng)
        //console.log(guan)
        //geng.style.display = 'none'
        //guan.style.display = 'block'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header_wrap
    width 100%
    height 68px
    background pink
    display flex
    justify-content space-between
    .logo
      width 160px
      height 100%
      display flex
      justify-content center
      align-items center
      img
        width 100%
    .nav
      width 68px
      height 68px
      display flex
      justify-content center
      align-items center
      i
        font-size 34px
        color #666
      >:nth-child(1)
        display block
      >:nth-child(2)
        display none

</style>
