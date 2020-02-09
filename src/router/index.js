import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '@/layout/default'
import Index from '@/views/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: DefaultPage,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: '/s/:name',
        name: 'goods',
        component: () => import('@/views/goodsList')
      },
      {
        path: '/chengeCity',
        name: 'chengeCity',
        component: () => import('@/views/changeCity')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
