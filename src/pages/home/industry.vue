<template>
	<div class="Industry_wrap">

      <div class="inner">
        <img src="./img/dichan.jpg" alt="">
        <div class="top">
          <h2>中企地产</h2>
          <div class="line"></div>
          <p>深圳正合意资产管理有限注册资本500万元人民币，总部位于深圳市前海深港合作区。</p>
        </div>

      </div>
      <div class="show_img">
        <div><img src="./img/chan1.jpg" alt=""></div>
        <div><img src="./img/chan2.jpg" alt=""></div>
        <div><img src="./img/chan3.jpg" alt=""></div>
        <div><img src="./img/chan4.jpg" alt=""></div>
      </div>

	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Industry_wrap
    width 100%
    background #faf7f7
    padding 30px 0
    .inner
      width 80%
      margin 0 auto
      img
        width 100%
    .show_img
      width 80%
      margin 0 auto
      display flex
      justify-content flex-start
      flex-wrap wrap
      >div
        width 50%
        overflow hidden
        padding 1px
        box-sizing border-box
      img
        width 100%

</style>
