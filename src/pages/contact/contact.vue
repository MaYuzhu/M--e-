<template>
  <div>
    <NavHeader></NavHeader>
    <div class="contact_big_img">
      <img src="./01.jpg" alt="">
    </div>
    <Title title="联系方式"></Title>
    <ul class="msg">
      <li>
        <i class="iconfont icon-dingwei"></i>
        <span>地址：北京市丰台区南四环西路188号12区1号楼</span>
      </li>
      <li>
        <i class="iconfont icon-telephone"></i>
        <span>客服热线:010-59208151</span>
      </li>
      <li>
        <i class="iconfont icon-xinfeng-guan-shi"></i>
        <span>企业邮箱：postmaster@zqzrkj.onaliyun.com</span>
      </li>
    </ul>
    <img class="map" src="./map.jpg" alt="">
  </div>
</template>

<script>
  import NavHeader from '../../components/nav_header/nav_header.vue'
  import Title from '../../components/titles/title.vue'

  export default {
    components:{
      NavHeader,
      Title,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contact_big_img
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
  .msg
    width 100%
    margin 0 auto
    li
      padding-left 10px
      box-sizing border-box
      height 1.5rem
      vertical-align middle
      i
        font-size 0.9rem
        color #f96624
        line-height 1.5rem
      span
        color #787878
        font-size 0.5rem
        margin-left 1px
        letter-spacing 2px

  .map
    display block
    width 100%
    height 100%
    margin 20px auto
    padding-bottom 20px
</style>
