import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import UET from '@/page/ue_test'
import JQ from '@/page/jq'
import UEC from '@/page/ue_content'
import Father from '@/page/father'
import Count from '@/page/count'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/content/:id',
      component: Content
    },
    {
      path: '/ue',
      component: UET
    },
    {
      path: '/jq',
      component: JQ
    },
    {
      path: '/uec/:id',
      component: UEC
    },
    {
      path: '/father',
      component: Father
    },
    {
      path: '/count',
      component: Count
    }
  ]
})
