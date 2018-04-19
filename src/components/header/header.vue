<template>
  <div class="header_wrap">
    <div class="logo">
      <img src="./logo.png" alt="">
    </div>
    <div class="nav" @click="navIs">
      <transition name="nav_icon">
        <i class="iconfont icon-gengduo" :class="{on:isShow}" ></i>
      </transition>
      <transition name="close_icon">
        <i class="iconfont icon-ego-guanbi" :class="{on:!isShow}" ></i>
      </transition>

    </div>
  </div>
</template>

<script>


  export default {
    data(){
    	return{
    		isShow:true
      }
    },
    methods:{
      navIs(){
      	this.isShow = !this.isShow
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
      position relative
      i
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%) rotate(180deg)
        font-size 34px
        color #666
        opacity 0
        transition all 1s ease
        &.on
          opacity 1
          transform translate(-50%,-50%) rotate(0deg)

        /*&.nav_icon-enter-active,&.nav_icon-leave-active
          transition all 1s ease

        &.nav_icon-enter,&.nav_icon-leave-to
          opacity 0.5


        &.close_icon-enter-active,&.close_icon-leave-active
          transition all 1s ease
          opacity 0
        &.close_icon-enter,&.close_icon-leave-to
          opacity 0.5*/



</style>
