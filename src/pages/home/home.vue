<template>
  <div style="height: 2000px;position: relative" class="abc">
    <Header :class="{on:fixed}"></Header>
    <Nav style="margin: 70px 0"></Nav>
    <ul class="a1">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
    </ul>
  </div>
</template>

<script>
  import Header from '../../components/header/header.vue'
  import Nav from '../../components/nav_scroll/nav_scroll.vue'
  $('.app_wrap').scroll(function () {
    console.log(1111111111111)
  })
  $('.abc').click(()=>{console.log(222)})
  console.log($('.abc').height())
  $(document).scroll(function () {
    console.log($(window).scrollTop())
    if($(window).scrollTop()>70){
      console.log('aaa')
      this.fixed = true
    }else{
      console.log('000')
      this.fixed = false
    }

  });

  export default {
    data(){
      return{
        fixed:false
      }
    },
    components:{
      Header,
      Nav,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .on
  position fixed
</style>
