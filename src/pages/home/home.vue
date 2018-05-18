<template>
  <div>
    <NavHeader></NavHeader>

    <div class="home_img">
      <img src="./img/bigimg.jpg" alt="">
    </div>
    <div class="home_news_wrap">
      <ul class="news_date">
        <li :class="{on_news_date:changeIndex==1}" @click="isChange(1)">
          <i class="iconfont icon-rizhiriqi"></i>
          <span>2018</span>
          <p>04-06</p>
        </li>
        <li :class="{on_news_date:changeIndex==2}" @click="isChange(2)">
          <i class="iconfont icon-rizhiriqi"></i>
          <span>2018</span>
          <p>03-17</p>
        </li>
        <li :class="{on_news_date:changeIndex==3}" @click="isChange(3)">
          <i class="iconfont icon-rizhiriqi"></i>
          <span>2018</span>
          <p>02-10</p>
        </li>
      </ul>
      <div class="new_content" v-if="changeIndex==1">

        <router-link to="/news">+MORE</router-link>
        <h2>鸿鹤资本成功签约黑龙江省首支现代畜牧产业投资基金</h2>
        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基金的合作方。黑龙江省政府副省长吕维峰、副......</p>

          </div>
          <div class="img_right">
            <img src="./img/new_img.jpg" alt="new">
          </div>
        </div>

      </div>
      <div class="new_content" v-if="changeIndex==2">

        <router-link to="/news">+MORE</router-link>
        <h2>测试标题二</h2>
        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基金的合作方。黑龙江省政府副省长吕维峰、副......</p>

          </div>
          <div class="img_right">
            <img src="./img/new_img.jpg" alt="new">
          </div>
        </div>

      </div>
      <div class="new_content" v-if="changeIndex==3">

        <router-link to="/news">+MORE</router-link>
        <h2>标题三</h2>
        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基金的合作方。黑龙江省政府副省长吕维峰、副......</p>

          </div>
          <div class="img_right">
            <img src="./img/new_img.jpg" alt="new">
          </div>
        </div>

      </div>
    </div>

    <Industry></Industry>
    <Footer></Footer>
  </div>
</template>

<script>
  import NavHeader from '../../components/nav_header/nav_header.vue'
  import Industry from './industry.vue'
  import Footer from '../../components/footer/footer.vue'
  export default {
    data(){
      return {
        changeIndex:1,
      }
    },
    /*props:{
      data : Boolean
    },*/
    components:{
      NavHeader,
      Industry,
      Footer,
    },
    methods:{
      isChange(x){
        this.changeIndex = x
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_img
    width 100%
    height 8rem
    overflow hidden
    display flex
    justify-content center
    img
      width 200%
      display block

  .home_news_wrap
    width 100%
    margin-top 20px
    .news_date
      width 90%
      background #795A4E
      margin 10px auto
      border-radius 10px
      display flex
      justify-content space-around
      >li
        width 33.3333%
        height 3rem
        border-radius 10px
        padding 10px 0
        color #cabdbd
        display flex
        flex-direction column
        align-items center
        >p
          transform translate(0,-5px)
          font-size 16px
        &.on_news_date
          background #f9662d
          color #fff
          position relative
          >p
            font-size 1rem
          &::after
            position absolute
            top 3.8rem
            left 50%
            content ""
            display block
            width 0
            height 0
            border-left 12px solid transparent
            border-bottom 12px solid transparent
            border-top 12px solid #F9682E
            border-right 12px solid transparent
            transform translate(-50%,0)
        >i
          font-size 42px
        >span
          font-size 10px
          display block
          transform translate(0px,-19px)

    .new_content
      width 90%
      margin 20px auto
      position relative
      >a
        position absolute
        top 0
        right 0
        font-size 16px
      >h2
        width 70%
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 20px
        color #282828
        font-family '微软雅黑'
        margin 30px 0 10px
      >.line
        width 20%
        height 1px
        background #f8baba
      p
        line-height 1.4
        font-size 14px
        letter-spacing 1px
        font-family '微软雅黑'
        color #787878
        margin 10px 0
        text-align justify
      .img_right
        width 70%
        overflow hidden
        img
          width 100%



</style>
