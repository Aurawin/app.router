import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SetupWizard from '../views/SetupWizard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/setup',
    name: 'setup',
    component: SetupWizard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
