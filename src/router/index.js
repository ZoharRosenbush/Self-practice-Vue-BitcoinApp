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
      path: '/contacts/:id',
      name: 'ContactDetails',
      component: ContactDetails,
      children: [
        {
          path: '/contacts/edit/:id',
          name: 'EditContact',
          component: AddEditContact,
        },
      ]
    },
    {
      path: '/contacts',
      name: 'ContactApp',
      component: ContactApp,
      children: [
        {
          path: 'edit',
          name: 'AddEditContact',
          component: AddEditContact,
        }

      ]
    },
    
  ]
})

export default router
