<template>
  <div class="header_wrap">
    <div class="logo">
      <img src="./logo.jpg" alt="">
    </div>
    <div class="nav" @touchend.stop="navIs">
        <i class="iconfont icon-gengduo" :class="{on:isShow}"></i>
        <i class="iconfont icon-ego-guanbi" :class="{on:!isShow}"></i>
    </div>
    <transition name="nav_list">
      <ul class="nav_list" v-show="nav_item">
        <li @click="goto('/home')" :class="{current:isCurrent('/home')}">首&nbsp;&nbsp;&nbsp;&nbsp;页</li>
        <li @click="goto('/about')" :class="{current:isCurrent('/about')}">关于我们</li>
        <li @click="goto('/main')" :class="{current:isCurrent('/main')}">主导产业</li>
        <li @click="goto('/news')" :class="{current:isCurrent('/news')}">新闻中心</li>
        <li @click="goto('/join')" :class="{current:isCurrent('/join')}">加入我们</li>
        <li @click="goto('/contact')" :class="{current:isCurrent('/contact')}">联系我们</li>
      </ul>
    </transition>

  </div>
</template>

<script>

  export default {

    data(){
    	return{
    		isShow:true,
        nav_item:false,
        data:true
      }
    },
    mounted(){
      document.addEventListener('touchend',()=>{
        this.nav_item = false
        this.isShow = true
        this.data = false
      })
    },
    methods:{
      navIs(){
      	this.isShow = !this.isShow
        this.nav_item = !this.nav_item
      },

      goto(path){
        this.$router.push(path)
        this.$emit('listenH',false)
      },
      isCurrent(path){
        return this.$route.path.indexOf(path) === 0
      }

    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/css/border-1px.styl"
  .header_wrap
    top 0
    width 100%
    height 68px
    background #f9f9f9
    display flex
    justify-content space-between
    border-bottom  1px solid #999
    @media only screen and (-webkit-device-pixel-ratio: 2 )
      border-bottom  0.5px solid #999
    @media only screen and (-webkit-device-pixel-ratio: 3 )
      border-bottom  0.333333px solid #999
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
        transform translate(-50%,-50%)
        font-size 34px
        color #666
        opacity 0
        transition all 0.3s ease
        &.on
          opacity 1
          transform translate(-50%,-50%)

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


      .current
        color #f9662d



</style>
