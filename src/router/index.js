import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/views/Home.vue'
import ContactApp from '../views/ContactApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'ContactApp',
      component: ContactApp
    },
    // {
    //   path: '/statistics',
    //   name: 'statistics',
    //   component: Statistics
    // }
  ]
})

export default router
