<template>
  <div id="app">
    <Header v-show="data" style="position: fixed;z-index: 99" ></Header>
    <div class="app_wrap" ref="appWrap">

      <router-view :fixed="data"></router-view>
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
        console.log(scrollY)
        if(scrollY>80){

          this.data = true
        }
      })

  },
  methods:{
  	_initScrollY(){}



  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.app_wrap{
  width: 100%;
  height: 100%;

  /*overflow:auto;*/
  overflow-scrolling:touch;
  -webkit-overflow-scrolling: touch;
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
