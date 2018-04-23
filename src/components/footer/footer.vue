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
    width 100%
    background #363739
    >p
      padding 10px 0 10px 10px
      font-size 18px
      color #e9e9e9
    >:nth-child(2)
      width 65%
    >:nth-child(3)
      width 35%
  .footer2
    width 100%
    background #29292a
    p
      color #ddd
      font-size 12px
      text-align center
      line-height 3
</style>
