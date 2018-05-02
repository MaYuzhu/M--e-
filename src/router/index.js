import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home.vue'
import about from '../pages/about/about.vue'
import contact from '../pages/contact/contact.vue'
import news from '../pages/news/news.vue'
import join from '../pages/join/join.vue'
import main from '../pages/main/main.vue'

import about1 from '../pages/about/about1/about1.vue'
import about2 from '../pages/about/about2/about2.vue'

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
      component:about,
      children:[
        {
          path:'',
          redirect:'/about/about1'
        },
        {
          path:'about1',
          component: about1
        },
        {
          path:'about2',
          component: about2
        },
      ],
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
