<template>
	<div class="Industry_wrap">

    <div class="swiper-container-industry">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./img/bigimg.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./img/dichan1.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./img/dichan2.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./img/dichan3.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./img/dichan4.jpg" alt=""></div>

      </div>
    </div>
	</div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
	export default {

    mounted(){
      var swiperIndustry = new Swiper('.swiper-container-industry', {
        spaceBetween: 30,
        loop:true,
        /*autoplay: {
          disableOnInteraction: false,
          delay:2000
        },*/
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      })
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Industry_wrap
    width 100%
    background #faf7f7
    padding 80px 0
    .swiper-container-industry
      margin 0 100px 0 40px
      .swiper-wrapper

        .swiper-slide
          height 300px
          overflow hidden
          transition all 1s
          border-radius 12px
          img
            width 100%
            height 100%
        .swiper-slide-active
          transform scale(1.14)


</style>
