<template>
  <div>
    <div class="footer1">
      <p>联系我们</p>
      <div>
        <ul>
          <li><i class="iconfont icon-xinlang"></i></li>
          <li><i class="iconfont icon-logo-wechat"></i></li>
          <li><i class="iconfont icon-qq"></i></li>
        </ul>
        <p class="address">地址：北京市朝阳区农展馆南路5号京朝大厦9层</p>
      </div>
      <div class="img_weixin">
        <img src="./weixin.jpg" alt="">
        <p>微信公众号</p>
      </div>
    </div>

    <div class="footer2">
      <p>Copyright © 2017 京ICP备3452324号</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer1
    position relative
    width 100%
    height 175px
    background #363739
    >p
      padding 10px 0 10px 10px
      font-size 18px
      color #e9e9e9
    >:nth-child(2)
      width 65%
      position absolute
      left 0
      ul
        display flex
        justify-content space-around
        li
          margin 12px 0
          i
            font-size 34px
            color #888
      .address
        font-size 14px
        color #888
        line-height 2
        margin 10px 0 18px 24px
    >.img_weixin
      width 35%
      position absolute
      right  0
      p
        text-align center
        font-size 14px
        color #888
        line-height 1.5
      img
        width 80%
        display block
        margin 0 auto
  .footer2
    width 100%
    background #29292a
    p
      color #888
      font-size 12px
      text-align center
      line-height 3
</style>
