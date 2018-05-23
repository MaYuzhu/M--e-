<template>
  <div>
    <NavHeader></NavHeader>

    <div class="button1" v-if="aShow==true" @click="isShowA">弹出A</div>
    <div class="button2" v-if="bShow==true" @click="isShowB">弹出B</div>
    <div class="button3" v-if="cShow==true" @click="isShowC">弹出C</div>

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
  	data(){
  		return{
  			aShow:1,
        bShow:0,
        cShow:0,
      }
    },
    components:{
      NavHeader,
      Title,
    },
    methods:{
      isShowA(){
      	alert('A')

        this.bShow = 1
        this.aShow = 0
        this.cShow = 0
      },
      isShowB(){
        alert('B')
        this.bShow = 0
        this.aShow = 0
        this.cShow = 1
      },
      isShowC(){
        alert('C')
        this.bShow = 0
        this.aShow = 1
        this.cShow = 0
      },
    },
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
