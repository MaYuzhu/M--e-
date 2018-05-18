<template>
  <div>
    <NavHeader></NavHeader>
    <div class="news_big_img">
      <img src="./news.jpg" alt="">
    </div>
    <TowRoute>
      <span class="span_news" slot="first"></span>
      <span class="span_news" :class="{active:isCurrent1('/news/news1')}" @click="aboutChange('/news/news1')" slot="second">公司动态</span>
      <span class="span_news" :class="{active:isCurrent1('/news/news2')}" @click="aboutChange('/news/news2')" slot="third">行业咨讯</span>npm
      <span class="span_news" slot="fourth"></span>
    </TowRoute>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavHeader from '../../components/nav_header/nav_header.vue'
  import TowRoute from '../../components/two_route/two_route.vue'

  export default {
    components:{
      NavHeader,
      TowRoute,
    },
    methods:{
      isCurrent1(path){
        return this.$route.path.indexOf(path) !== -1
      },
      aboutChange(path){
        this.$router.push(path)
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .news_big_img
    position relative
    width 100%
    height 8rem
    overflow hidden
    img
      position absolute
      left 50%
      height 100%
      display block
      margin 0 auto
      transform translate(-50%,0)
  .span_news
    display block
    &.active
      color #f9662d
      position relative
      &::after
        position absolute
        bottom -1px
        left 50%
        content ""
        display block
        width 0
        height 0
        border-left 8px solid transparent
        border-bottom 8px solid #fff
        border-top 8px solid transparent
        border-right 8px solid transparent
        transform translate(-50%,0)

</style>
