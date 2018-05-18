import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home.vue'
import about from '../pages/about/about.vue'
import contact from '../pages/contact/contact.vue'
import news from '../pages/news/news.vue'
import join from '../pages/join/join.vue'
import main from '../pages/main/main.vue'

import newsDetails from '../pages/news_details/news_details.vue'

import about1 from '../pages/about/about1/about1.vue'
import about2 from '../pages/about/about2/about2.vue'

import news1 from '../pages/news/news1/news1.vue'
import news2 from '../pages/news/news2/news2.vue'

import di from '../pages/main/di/di.vue'
import piao from '../pages/main/piao/piao.vue'
import zhi from '../pages/main/zhi/zhi.vue'
import zi from '../pages/main/zi/zi.vue'


Vue.use(Router)

export default new Router({
  /*mode:'history',*/
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },*/
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home,
      meta: {
        showHeader: true
      }
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
          component: about1,
          meta: {
            showHeader: true
          }
        },
        {
          path:'about2',
          component: about2,
          meta: {
            showHeader: true
          }
        },
      ],

    },
    {
      path: '/contact',
      component:contact,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/news',
      component:news,
      children:[
        {
          path:'',
          redirect:'/news/news1'
        },
        {
          path:'news1',
          component: news1,
          meta: {
            showHeader: true
          }
        },
        {
          path:'news2',
          component: news2,
          meta: {
            showHeader: true
          }
        },
      ],
      meta: {
        showHeader: true
      }
    },
    {
      path: '/join',
      component:join,
      meta: {
        showHeader: true
      }
    },
    {
      path: '/main',
      component:main,
      children:[
        {
          path:'',
          redirect:'/main/di'
        },
        {
          path:'di',
          component: di,
          meta: {
            showHeader: true
          }
        },
        {
          path:'piao',
          component: piao
        },
        {
          path:'zhi',
          component: zhi,
          meta: {
            showHeader: true
          }
        },
        {
          path:'zi',
          component: zi,
          meta: {
            showHeader: true
          }
        },
      ],
      meta: {
        showHeader: true
      }
    },
    {
      path: '/newsDetails',
      component:newsDetails
    },
  ]
})
