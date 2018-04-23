<template>
  <div id="app">
    <transition name="app_header">
      <Header v-show="data" class="app_header"></Header>
    </transition>

    <div class="app_wrap" ref="appWrap">
    <keep-alive>
      <router-view :data="data"></router-view>
    </keep-alive>

    </div>

  </div>
</template>

<script>
  import Header from './components/header/header.vue'
  import Nav from './components/nav_scroll/nav_scroll.vue'


  import BScroll from 'better-scroll'

  export default {
    data(){
      return{
        data:false
      }
    },
  name: 'App',
  components:{
    Header,
    Nav,

  },
  mounted(){

      const pageScroll = new BScroll(this.$refs.appWrap,{
        click:true,
        probeType:3
      })
      pageScroll.on('scroll',(pos)=>{
      	let scrollY = -Math.round(pos.y)
        if(scrollY<=60){
          this.data = false
        }
        if(scrollY>60){
          this.data = true
        }
      })

  },
  methods:{
  	_initScrollY(){}



  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .app_wrap
    width: 100%;
    height: 100%;

    overflow-scrolling:touch;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    width: 0px;
  }
  .app_header
    position: absolute
    z-index: 99
    box-shadow :0 2px 6px 0 rgba(0,0,0,0.5)
    transform-origin top
    opacity .9
    &.app_header-enter-active,&.app_header-leave-active
      transition: .8s
    &.app_header-enter,&.app_header-leave-to
      opacity 0


</style>
