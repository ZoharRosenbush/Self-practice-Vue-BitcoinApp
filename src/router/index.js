import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ContactApp from '../views/ContactApp.vue'
import ContactDetails from '../views/ContactDetails.vue'
import AddEditContact from '../views/AddEditContact.vue'

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
      component: ContactApp,
      children:[
        {
          path: 'edit/:id?',
          name: 'AddEditContact',
          component: AddEditContact
        }

      ]
    },
    {
      path: '/contacts/:id',
      name: 'ContactDetails',
      component: ContactDetails
    },
    // {
    //   path: '/statistics',
    //   name: 'statistics',
    //   component: Statistics
    // }
  ]
})

export default router
