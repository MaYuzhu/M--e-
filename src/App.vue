<template>
  <div id="app">

    <div class="app_wrap">

      <router-view/>
    </div>

  </div>
</template>

<script>
  import Header from './components/header/header.vue'
  import Nav from './components/nav_scroll/nav_scroll.vue'
export default {
  name: 'App',
  components:{
    Header,
    Nav,
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
  background: lightblue;
  overflow: hidden;
}
.app_wrap{
  width: 100%;
  height: 100%;
  overflow:auto;
  overflow-scrolling:touch;
  -webkit-overflow-scrolling: touch;
}
::-webkit-scrollbar {
  width: 10px;
}
</style>
