<template>
  <div>
    <NavHeader></NavHeader>
    <div class="contact_big_img">
      <img src="./big.jpg" alt="">
    </div>
    <Title title="加入我们"></Title>
    <img class="zhao" src="./zhao1.jpg" alt="">
    <ul class="zhaop">
      <li>
        <img src="./zhaop1.jpg" alt="">
        <p>五险一金、双休、带薪年假、健康关怀，薪满益足，胜于你想</p>
      </li>
      <li>
        <img src="./zhaop2.jpg" alt="">
        <p>绩效奖、长期服务奖、节日礼品、国内外旅游， 众多惊喜，等你嗨不停！</p>
      </li>
      <li>
        <img src="./zhaop3.jpg" alt="">
        <p>简单、平等互助的工作方式，弱化层级， 创意无限，妙趣挡不住！</p>
      </li>
      <li>
        <img src="./zhaop4.jpg" alt="">
        <p>舞台够大，让你乐享挑战，文娱活动够多，展示你最美风采， 上班轻松，下班愉快，这，才叫生活！</p>
      </li>
    </ul>
    <Title title="寻找适合您的岗位"></Title>
    <ul class="zhiwei">
      <li>职位名称：测试开发人员</li>
      <li>工作经验：2年</li>
      <li>学历要求：本科</li>
      <li>招聘人数：1人</li>
      <li>工作地点：北京</li>
      <li>薪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;酬：面议</li>
      <li>岗位描述：1、在互联网+金融+测试的领域之下，负责包括测试平台、测试框架、测试工具的设计和研发。2、带领团队深入研究某一测试方向，如性能瓶颈分析、Mock测试等，并成为该方面的业界专家。3、积极与开发人员和业务测试人员等积极沟通，将平台和技术落地实施。4、不定期对内对外进行技术培训，扩大影响力。　岗位要求：熟练掌握自动化测试理论，精通至少一种开源测试工具；精通Java开发或Web开发，熟悉至少一门脚本语言，熟悉Linux。具有较强的技术研发能力和技术敏感度，善于进行技术创新；学习能力强，具有较强的沟通能力及团队合作精神；热爱技术，热爱测试，曾为开源项目做过贡献者优先。</li>
    </ul>

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
  .zhao
    width 100%
  .zhaop
    background #fafafa
    padding 20px
    li
      display flex
      align-items center
      margin-top 1.5rem
      img
        width 5rem
        height 5rem
      p
        width 12rem
        font-size 0.7rem
        line-height 1.5
        padding-left 0.5rem
        text-align justify
  .zhiwei
    font-size 0.7rem
    margin 10px
    color #787878
    line-height 1.5
    >:last-child
      font-size 0.6rem
      text-align justify
</style>
