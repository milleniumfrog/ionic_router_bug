import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/a/:appid',
    name: 'PageA',
    component: () => import('@/views/page_a.vue'),
  },
  {
    path: '/a/:appid/test',
    name: 'PageA1',
    component: () => import('@/views/page_a_1.vue'),
  },

  {
    path: '/b/working',
    name: 'PageB',
    component: () => import('@/views/page_b.vue'),
  },
  {
    path: '/b/working/test',
    name: 'PageB1',
    component: () => import('@/views/page_b_1.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
