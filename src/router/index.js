import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
