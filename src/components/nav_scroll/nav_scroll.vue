<template>
  <div>
    <div class="nav_scroll_wrap swiper-container">
      <ul class="nav_scroll swiper-wrapper">
        <li class="swiper-slide">首&nbsp;&nbsp;&nbsp;页</li>
        <li class="swiper-slide">关于我们</li>
        <li class="swiper-slide">主导产业</li>
        <li class="swiper-slide">新闻中心</li>
        <li class="swiper-slide">加入我们</li>
        <li class="swiper-slide">联系我们</li>

      </ul>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'

  export default {
  	mounted(){
        new Swiper('.swiper-container',{
          slidesPerView: 4.4,
        })

    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav_scroll_wrap
    .nav_scroll
      .swiper-slide
        text-align center
        box-sizing border-box
        font-size 16px
        line-height 2
</style>
