import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/common/Home'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/helloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      }]
    }
  ]
})
