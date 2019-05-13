import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerMap = [
  {
    path: '',
    component: () => import('@/pages/template/index')
  },
  {
    path: '/intent',
    component: () => import('@/pages/intent/index')
  },
  {
    path: '/intent/:id',
    component: () => import('@/pages/intent/index')
  },
  {
    path: '/filespec',
    component: () => import('@/pages/filespec/index')
  },
  {
    path: '/filespec/:id',
    component: () => import('@/pages/filespec/index')
  },
  {
    path: '/devspec',
    component: () => import('@/pages/devspec/index')
  },
  {
    path: '/devspec/:id',
    component: () => import('@/pages/devspec/index')
  },
  {
    path: '/template',
    component: () => import('@/pages/template/index')
  },
  {
    path: '/template/:id',
    component: () => import('@/pages/template/index')
  }
]

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})
