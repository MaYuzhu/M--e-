<template>
  <div>
    <Title title="票E通"></Title>
    <div class="piao">
      <img class="p1" src="./p1.jpg" alt="">
      <p>票e通是中企智融金融服务外包（北京）有限公司旗下的互联网金融票据平台。票e通以“让每一个老百姓都懂投资”为使命，结合多年的资产管理服务和风险控制经验，利用先进的大数据技术，提升项目服务质量和效率，秉承“深化金融改革”的理念，为促进金融创新协调发展助力。平台发布的每一个项目都经过线下严格审查和专业估价，且在相关国家部门办理实名抵押登记、质押备案、委托公证手续，保证每一个项目都真实可靠。</p>

      <p>票e通拥有完整的产品、研发、风控、财务以及客服等职能体系，是一家具备优秀的自主研发能力的金融创新型企业。我们旨在通过为投资人提供低风险、收益率适中的投资理财服务，帮助其实现资产的稳健增值；同时，通过为融资方高效解决资金需求，帮助其改善生产和生活。</p>
      <img class="p2" src="./p2.jpg" alt="">
      <p>票e通始终以“诚信、合规、透明、高效”的金融服务，走在行业的前列，全面、公开、透明的信息披露赢得广大客户的信赖和行业的认可。面向未来的发展，我们将永远守护企业精神，将一如既往地坚持客户至上、诚信立业，做可以信赖的人，打造可以信赖的产品，努力为客户提供更加的服务体验，为投资者和社会创造更大的价值，逐步成为多元化经营、多方位发展、多样化产品特点的综合性金融服务平台。</p>
      <img class="p3" src="./p3.jpg" alt="">
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
  .piao
    >p
      margin 0px auto
      padding 0 20px
      box-sizing border-box
      text-indent:2em
      text-align justify
      letter-spacing 1px
      font-size 14px
      line-height 2
    >.p1
      float right
      width 38%
      margin 10px 20px 0 10px
    >.p2
      width 100%
      padding 0 30px
      box-sizing border-box
    >.p3
      width 100%
      padding 0 10px
      box-sizing border-box
</style>
