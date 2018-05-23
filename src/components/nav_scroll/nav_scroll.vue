<template>
  <div>
    <div class="nav_scroll_wrap swiper-container">
      <ul class="nav_scroll swiper-wrapper">
        <li class="swiper-slide" @click="goto('/home')">
          <span :class="{current:isCurrent('/home')}">首&nbsp;&nbsp;&nbsp;页</span>
        </li>
        <li class="swiper-slide" @click="goto('/about')">
          <span :class="{current:isCurrent('/about')}">关于我们</span>
        </li>
        <li class="swiper-slide" @click="goto('/main')">
          <span :class="{current:isCurrent('/main')}">主导产业</span>
        </li>
        <li class="swiper-slide" @click="goto('/news')">
          <span :class="{current:isCurrent('/news')}">新闻中心</span>
        </li>
        <li class="swiper-slide" @click="goto('/join')">
          <span :class="{current:isCurrent('/join')}">加入我们</span>
        </li>
        <li class="swiper-slide" @click="goto('/contact')">
          <span :class="{current:isCurrent('/contact')}">联系我们</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'

  export default {
  	mounted(){

      var swiperScroll = new Swiper('.swiper-container',{
        slidesPerView: 4.5,
        paginationClickable: true,
        //……
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      })

    },
    methods:{
  		goto(path){
  			this.$router.push(path)
      },
      isCurrent(path){
  			return this.$route.path.indexOf(path) !== -1
      }
    },
    watch:{

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav_scroll_wrap
    .nav_scroll
      height 40px
      .swiper-slide
        text-align center
        box-sizing border-box
        font-size 0.7rem
        line-height 40px
        >span
          padding 6px 0
          &.current
            border-bottom solid 2px #f9662d
            color #f9662d
</style>
