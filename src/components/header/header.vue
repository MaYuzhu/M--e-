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
    <transition name="nav_list">
      <ul class="nav_list border-1px" v-show="nav_item">
        <li>首&nbsp;&nbsp;&nbsp;&nbsp;页</li>
        <li>关于我们</li>
        <li>主导产业</li>
        <li>新闻中心</li>
        <li>加入我们</li>
        <li>联系我们</li>
      </ul>
    </transition>

  </div>
</template>

<script>



  export default {
    data(){
    	return{
    		isShow:true,
        nav_item:false
      }
    },
    methods:{
      navIs(){
      	this.isShow = !this.isShow
        this.nav_item = !this.nav_item
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/border-1px.styl"
  .header_wrap
    /*position absolute
    top 0*/
    /*position fixed*/
    top 0
    width 100%
    height 68px
    background pink
    display flex
    justify-content space-between
    box-shadow 0 2px 8px 0 rgba(0,0,0,0.5)
    /*bottom-border-1px(#999)*/
    .logo
      width 160px
      height 100%
      margin-left 10px
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
        transform translate(-50%,-50%) rotate(0deg)
        font-size 34px
        color #666
        opacity 0
        transition all 0.3s ease
        &.on
          opacity 1
          transform translate(-50%,-50%) rotate(0deg)

    .nav_list
      position absolute
      top 68px
      right 0
      background #f0f0f0
      border 1px solid #999
      z-index 20
      li
        font-size 16px
        line-height 3
        bottom-border-1px(#999)
        padding  0 20px
        &:first-child
          text-align center
        &:last-child
          &::after
            display none
      &.nav_list-enter-active,&.nav_list-leave-active
        transition: all .8s
      &.nav_list-enter,&.nav_list-leave-to
        transform: translate(106px, 0)






</style>
