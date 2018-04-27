<template>
	<div class="Industry_wrap">
    <div class="backg">
      <div></div>
    </div>
    <div class="swiper-container-industry">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <img src="./img/dichan1.jpg" alt="">
          <div class="bottom_text" @click="upText(0)">
            <i class="iconfont icon-shang" @click.stop="upText(0)"></i>
            <h2>中企地产</h2>
            <p>中企地产以“领航行业进步，创建美好生活”为使命，通过不断创新企业模式，打造产品和服务品牌，有效地促进了产业发展，为提高大众的生活品质做出了应有的贡献。</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="./img/piaoe.jpg" alt="">
          <div class="bottom_text" @click="upText(1)">
            <i class="iconfont icon-shang" @click.stop="upText(1)"></i>
            <h2>票e通</h2>
            <p>票e通是中企智融金融服务外包（北京）有限公司旗下的互联网金融票据平台。</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="./img/zhi.jpg" alt="">
          <div class="bottom_text" @click="upText(2)">
            <i class="iconfont icon-shang" @click.stop="upText(2)"></i>
            <h2>智投家</h2>
            <p>“双创、四众”风起，众筹站上时代的潮头，并逐渐成为经济结构转型中投融资的重要形式。</p>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="./img/zi.jpg" alt="">
          <div class="bottom_text" @click="upText(3)">
            <i class="iconfont icon-shang" @click.stop="upText(3)"></i>
            <h2>资产交易中心</h2>
            <p>资产交易中心秉承“ 科技提升效率、交易创造价值、金融服务产业“的发展理念，以创新和专业的交易服务，发现并成就资产价值，提升资产效能，促进金融资产流转和产品创新，全面打造集“资产证券化服务平台、供应链金融集聚平台、科技金融创新平台”为一体的专业化、规范化、标准化的金融资产交易平台，为实体经济的繁荣发展贡献力量。</p>
          </div>
        </div>

      </div>
    </div>

	</div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'



	export default {
    data(){
      return{
        active:{
          src:'./img/dichan1.jpg'
        }
      }
    },
    watch:{
      active:{
        handler(newValue, oldValue) {
          console.log(newValue)
          console.log(111)
          backg.style.background = 'url('+ active.src +') no-repeat'
        },
        deep: true
      }
    },
    mounted(){
      var swiperIndustry = new Swiper('.swiper-container-industry', {
        spaceBetween: 34,
        /*loop:true,*/
        slidesPerView: 1,
        /*autoplay: {
          disableOnInteraction: false,
          delay:2000
        },*/
        pagination: {
          el: '.swiper-pagination-industry',
          clickable: true
        },
      })
      var backg = document.querySelector('.backg')
      var active = document.querySelector('.swiper-slide-active img')
      console.log(backg)
    },
    methods:{
      upText(x){
        let bottomText = document.querySelectorAll('.bottom_text')
        let upButton = document.querySelectorAll('.bottom_text>i')
        let pHeight = document.querySelectorAll('.bottom_text>p')
        let h2Height = document.querySelectorAll('.bottom_text>h2')

        if(upButton[x].style.transform === 'rotate(180deg)'){
          bottomText[x].style.transform = 'translateY(-1.2rem)'
          upButton[x].style.transform = 'rotate(0deg)'
        }else {
          bottomText[x].style.transform = 'translateY(-' + ((pHeight[x].offsetHeight)+(h2Height[x].offsetHeight)+10) + 'px)'
          upButton[x].style.transform = 'rotate(180deg)'
        }
      }
    },




  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Industry_wrap
    width 100%
    height 11.6rem
    background #faf7f7
    padding 80px 0
    position relative
    overflow hidden
    .swiper-container-industry
      margin 0 100px 0 40px
      .swiper-wrapper
        .swiper-slide
          overflow hidden
          height 12rem
          transition all 1s
          border-radius 12px
          box-shadow 3px 3px 8px 1px
          img
            display block
            width 100%
            height 100%
          .bottom_text
            background rgba(0,0,0,.5)
            transform translate(0,-1.2rem)
            transition 0.7s
            i
              font-size 1rem
              color #e0e0e0
              opacity 0.7
              display block
              text-align center
            h2
              font-size 1rem
              color #eee
              padding 8px 0 8px 16px
            p
              padding 0 16px 18px
              font-size 0.3rem
              color #eee
              line-height 1.3
              text-align justify
        .swiper-slide-active
          transform scale(1.14)


    .backg
      width 100%
      height 18rem
      position absolute
      top 0
      left 0
      /*background url('./img/dichan1.jpg') no-repeat*/
      background-size:100% 100%;
      filter blur(10px)
      div
        width 100%
        height 100%
        background rgba(100,100,100,.3)
    &::after
      float left
      display block
      content ''
      width 120%
      height 160px
      background #faf7f7
      transform rotate(-12deg) translate(-10px,-40px)
</style>
