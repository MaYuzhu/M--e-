<template>
  <div>
    <NavHeader></NavHeader>
    <div class="main_big_img">
      <img src="./main_big.jpg" alt="">
    </div>
    <TowRoute>
      <span class="span_main" slot="first" :class="{active:isCurrentMain('/main/di')}" @click="mainChange('/main/di')">中企地产</span>
      <span class="span_main" slot="second" :class="{active:isCurrentMain('/main/piao')}" @click="mainChange('/main/piao')">票 e 通</span>
      <span class="span_main" slot="third" :class="{active:isCurrentMain('/main/zhi')}" @click="mainChange('/main/zhi')">智投家</span>
      <span class="span_main" slot="fourth" :class="{active:isCurrentMain('/main/zi')}" @click="mainChange('/main/zi')">资产交易中心</span>
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
      isCurrentMain(path){
        return this.$route.path.indexOf(path) !== -1
      },
      mainChange(path){
        this.$router.push(path)
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main_big_img
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
  .span_main
    display block
    font-size 0.7rem
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
