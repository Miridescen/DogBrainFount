import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import rootView from '@/common/rootView'

import Home from '@/components/Home'
import Reading from '@/components/Reading'
import Music from '@/components/Music'
import IT from '@/components/IT'
import ShowArtical from '@/components/ShowArtical'

import CommonChannel from '@/components/CommonChannel'

Vue.use(Router)


export default new Router({

  // 每次路由后返回到页面顶部
  scrollBehavior(to, from, savePosition){
    if (savePosition){
      return savePosition
    } else {
      return {x:0, y:0}
    }

  },

  routes: [
    {
      path: '/',
      component: rootView,
      children: [
        {
          path: '',
          name: 'root',
          component:Home

        },
        {
          path: '/home',
          name: 'home',
          component:Home

        },
        {
          path: '/reading',
          name: 'reading',
          component:CommonChannel

        },
        {
          path: '/music',
          name: 'music',
          component:CommonChannel

        },
        {
          path: '/it',
          name: 'it',
          component:CommonChannel

        },
        {
          path: '/artical',
          name: 'artical',
          component:ShowArtical

        }]
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    }
  ]
})
