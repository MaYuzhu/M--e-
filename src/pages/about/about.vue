<template>
  <div>
    <NavHeader ></NavHeader>
    <div class="about_big_img">
      <img src="./about_03.jpg" alt="">
    </div>
    <TwoRoute>
      <span class="span_about" slot="first"></span>
      <span class="span_about" :class="{active:isCurrent1('/about/about1')}" @click="aboutChange('/about/about1')" slot="second">公司简介</span>
      <span class="span_about" :class="{active:isCurrent1('/about/about2')}" @click="aboutChange('/about/about2')" slot="third">集团优势</span>
      <span class="span_about" slot="fourth"></span>
    </TwoRoute>
    <router-view></router-view>

  </div>
</template>

<script>
  import NavHeader from '../../components/nav_header/nav_header.vue'
  import TwoRoute from '../../components/two_route/two_route.vue'

  export default {

    components:{
      NavHeader,
      TwoRoute,
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
  .about_big_img
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
  .span_about
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
