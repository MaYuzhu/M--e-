<template>
  <div>
    <Title title="集团优势"></Title>
    <div class="content1">
      <p>持续稳健的发展，使得中企智融能够不间断的发展独特优势，并在行业内持续的保有品牌的权威性、强大的综合竞争能力和旺盛的创新研发能力。</p>
      <div class="num1_wrap">
        <img src="./num1.png" alt="">
        <p class="content1_text">行业内服务累积的品牌权威性</p>
      </div>

      <ul>
        <li>
          <img src="./c1-1.png" alt="">
          <p>令人称道的服务质量和客户满意度</p>
          <p>企业提高优质高效的服务，深入了解每一位客户自身情况，并为其提供专业性建议，为助力客户实现财富保值增值。</p>
        </li>
        <li>
          <img src="./c1-2.png" alt="" style="margin:36px auto 68px">
          <p>中国中小企业协会会员单位</p>
          <p>中企智融致力于为大众提供全方位的财富管理服务，促进互联网金融行业的发展，以实现中国企业的变革和振兴为己任；</p>
        </li>
      </ul>
    </div>
    <div class="content2">
      <div class="inner2">
        <div class="num2_wrap">
          <img src="./num2.png" alt="">
          <p class="content2_text">丰富的金融行业经验，强大的综合竞争能力</p>
        </div>

        <ul>
          <li>
            <img src="./c2-1.png" alt="">
            <p>企业团队规模大、人员结构完整</p>
            <p>由金融管理专家、人力资源专家和行业资深高管共同组成并不断吸引人才</p>
          </li>
          <li>
            <img src="./c2-2.png" alt="">
            <p>行业经验丰富、覆盖范围广泛</p>
            <p>从事金融行业多年；涉足票据、众筹、地产、资产管理等行业，行业经验丰富。</p>
          </li>
          <li>
            <img src="./c2-3.png" alt="">
            <p>共享管理经验，提升综合竞争能力</p>
            <p>利用集团的共有平台，将优秀管理制度、丰富经验进行复制输出，利用制度资本进行扩张；另一方面将最佳管理实践进行传播，在集团范围内进行管理和创新的提升。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="content3">
      <div class="inner3">
        <div class="num3_wrap">
          <img src="./num3.jpg" alt="">
          <p class="content3_text">专业、热情并极富创造力的团队，旺盛的研发能力</p>
        </div>
        <ul>
          <li class="li1">
            <img class="img1" src="./c3-1.png" alt="">
            <p class="p1">特设探索前沿理论的专家团队</p>
            <p class="p2">联合行业专业人才，组建专家团队，研究行业问题和前沿理论，通过庞大行业人力资本数据库，积累大量行业问题和解决方案，形成独有的知识库；</p>
          </li>
          <li class="li2">
            <div class="p_wrap">
              <p class="p3">大量人才储备和人才合作，确保企业服务的旺盛生命力</p>
              <p class="p4">中企智融与国内多所高校进行合作，为后续专业人才的培养和发展不断的提供新鲜血液；中企智融坚持合作共赢的模式，和大量企业进行合作，维护行业高端人才库，确保金融行业粘性和落地性，提供有力的行业支持。</p>
            </div>

            <img class="img2" src="./c3-2.jpg" alt="">
          </li>
        </ul>
      </div>
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
  .content1
    width 100%
    padding-bottom 40px
    >p
      width 90%
      margin 20px auto 0
      font-size 16px
      letter-spacing 2px
      line-height 1.8
      color #787878
      text-align justify
    .num1_wrap
      width 100%
      margin 0 auto
      position relative
      >img
        display block
        margin 50px auto
        transform scale(0.8)
      .content1_text
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        width 200px
        font-size 14px
        color #606060
        background rgba(255,255,255,.7)
        line-height 24px
        letter-spacing 1px

    >ul
      width 100%
      margin 0 auto
      display flex
      >li
        width 50%
        border-right 1px solid #ddd
        img
          display block
          margin 0 auto 50px
          width 140px
        >:nth-child(2)
          width 80%
          margin 0 auto
          letter-spacing 2px
          text-align center
          line-height 1.4
          color #3b3b3b
          font-size 14px
        >:nth-child(3)
          width 90%
          margin 10px auto 0
          text-align justify
          color #787878
          font-size 12px
          line-height 2
      >:nth-child(2)
        border-right none
        >:nth-child(3)
          width 90%

  .content2
    width 100%
    background #f3f3f3
    .inner2
      width 100%
      margin 0 auto
      .num2_wrap
        width 100%
        position relative
        padding 50px 0
        >img
          display block
          margin 0 auto
        .content2_text
          position absolute
          top 50%
          left 50%
          text-align center
          transform translate(-50%,-50%)
          font-size 20px
          color #606060
          background rgba(243,243,243,.7)
          line-height 28px
          letter-spacing 1px

      >ul
        width 100%
        display flex
        justify-content space-between
        >li
          p
            width 320px
            margin 0 auto
          >:nth-child(2)
            font-size 16px
            color #3b3b3b
            margin-top 50px
            text-align center
          >:nth-child(3)
            font-size 16px
            color #787878
            margin 30px 0 50px
            text-align justify
            line-height 2
            letter-spacing 1px


  .content3
    width 100%
    margin-bottom 80px
    .inner3
      width 100%
      margin 0 auto
      .num3_wrap
        width 100%
        position relative
        padding 50px 0
        >img
          display block
          margin 0 auto
        .content3_text
          position absolute
          top 50%
          left 50%
          text-align center
          transform translate(-50%,-50%)
          font-size 20px
          color #606060
          background rgba(255,255,255,.7)
          line-height 28px
          letter-spacing 1px

      >ul
        width 100%
        >.li1
          overflow hidden
          margin-bottom 30px
          >.img1
            float left
          >.img2
            float right
          >.p1
            font-size 16px
            color #3b3b3b
            margin 60px 0 0 50px
            float left
            line-height 2
            letter-spacing 1px
          >.p2
            font-size 16px
            color #787878
            margin 30px 0 50px 50px
            text-align justify
            line-height 2.5
            letter-spacing 1px
            float left
            width 650px


        >.li2
          width 100%
          overflow hidden
          .p_wrap
            float left
            width 650px
          >.img2
            float right
          .p3
            font-size 16px
            color #3b3b3b
            margin-top 40px
            line-height 2
            letter-spacing 1px
          .p4
            font-size 16px
            color #787878
            margin 30px 0 50px
            text-align justify
            line-height 2.5
            letter-spacing 1px


</style>
