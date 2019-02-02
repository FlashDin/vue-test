import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Overlap from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Overlap',
      component: Overlap
    }
  ]
})
