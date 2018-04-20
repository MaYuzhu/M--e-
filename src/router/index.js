import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home.vue'
import about from '../pages/about/about.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home
    },
    {
      path: '/about',
      component:about
    }
  ]
})
