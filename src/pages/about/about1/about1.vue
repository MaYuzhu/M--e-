<template>
  <div class="about_wrap">
    <Title title="公司简介"></Title>
    <p>中企智融金融服务外包（北京）有限公司成立于2016年，股东为汉唐控股集团和黑龙江国投政信资产交易中心有限公司，注册资本金1亿元。</p>
    <br/>
    <p>中企智融金融服务外包（北京）有限公司总部位于北京朝阳区CBD核心区域。平台业务网点辐射全国，分布北京、天津、哈尔滨、齐齐哈尔、邯郸等地，形成了既有集中又有分散，既有统一性又有灵活性，适应复杂多变市场条件的高效率运行的公司管理运营体系，成为一家以互联网金融、商业保理、私募基金、融资租赁等业务为一身的多元化、跨区域的大型金融企业，为大众提供全方位的财富管理服务。</p>
    <img class="map" src="./aboutDitu.gif" alt="">
    <p>中企智融致力于为高成长性人群、大众富裕阶层和高净值客户提供全方位、多层次、个性化进行全方位的资产配置。通过深研宏观经济、投资行业等发展态势，深入了解客户财务状况，为客户提供专业性建议，为助力客户实现家庭财富保驾护航。集团以雄厚的资金实力、高素质的专业人才和优质高效的服务在社会上树立起了良好的企业形象、，受到了社会各界与广大客户的依赖与赞扬。</p>
    <div class="img_wrap">
      <img src="./left02.gif" alt="">
      <img src="./left03.gif" alt="">
    </div>
    <div class="linian">
      <h2>中企智融理念</h2>
      <div></div>
    </div>
    <div class="about_footer">
      <div>
        <img src="./xin.gif" alt="">
        <h2>企业理念</h2>
        <p>让每一位客户都能享受到普惠金融的魅力</p>
      </div>
      <div>
        <img src="./lingdai.gif" alt="">
        <h2>企业价值观</h2>
        <p>信用、专业、创新、品质</p>
      </div>
      <div>
        <img src="./wang.gif" alt="">
        <h2>企业使命</h2>
        <p>为中国金融机构及类金融机构的资产证券化提供强大的流动性平台，建立庞大的金融资产交易体系为经营理念的互联网金融服务机构</p>
      </div>
      <div>
        <img src="./diannao.gif" alt="">
        <h2>企业愿景</h2>
        <p>依托国有企业、中央企业的公信力，成为多元化经营、多方位发展、多样化产品特点的综合性金融服务平台。</p>
      </div>
    </div>
    <div class="about_footer2">
      <h2>我们的承诺</h2>
      <div></div>
      <p>只提供第三方金融服务，不经手客户资金；
        严格履行保密协议，不透漏客户信息</p>

    </div>
  </div>
</template>

<script>
  import Title from '../../../components/titles/title.vue'
  export default {
    components:{
      Title,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about_wrap
    >p
      width 100%
      margin 0px auto
      padding 0 20px
      box-sizing border-box
      text-indent:2em
      text-align justify
      letter-spacing 1px
      font-size 14px
      line-height 2.4
    .map
      width 100%
    .img_wrap
      width 100%
      height 113px
      overflow hidden
      display flex
      justify-content center
      img
        width 50%
        height 100%
    .linian
      height 50px
      background #f9662d
      h2
        font-size 20px
        color #fff
        text-align center
        line-height 50px
      div
        width 46px
        height 1px
        background #fff
        margin -8px auto 0
    >.about_footer
      width 100%
      margin 0 auto
      display flex
      justify-content center
      flex-wrap wrap
      padding 20px 0
      >div
        width 50%
        img
          display block
          margin 16px auto
        h2
          width 100%
          text-align center
          font-size 14px
          letter-spacing 1px
        p
          width 100%
          padding 4px 8px
          box-sizing border-box
          text-align center
          font-size 14px
          line-height 1.8
          letter-spacing 1px
          color #999
    >.about_footer2
      width 100%
      margin 0 auto
      background rgb(248,248,248)
      padding 14px 0
      h2
        font-size 18px
        width 100%
        text-align center
        letter-spacing 3px
        font-weight 600
      >div
        width 60px
        height 1px
        background #a0a0a0
        margin 10px auto 0
      >p
        font-size 16px
        margin 4px auto
        padding 0 10px
        line-height 40px
        color #666
        letter-spacing 1px
        text-align center
        vertical-align top
</style>
