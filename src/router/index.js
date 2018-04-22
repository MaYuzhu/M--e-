import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home.vue'
import about from '../pages/about/about.vue'
import contact from '../pages/contact/contact.vue'
import news from '../pages/news/news.vue'
import join from '../pages/join/join.vue'
import main from '../pages/main/main.vue'

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
    },
    {
      path: '/contact',
      component:contact
    },
    {
      path: '/news',
      component:news
    },
    {
      path: '/join',
      component:join
    },
    {
      path: '/main',
      component:main
    },
  ]
})
