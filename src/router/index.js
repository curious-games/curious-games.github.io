import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: "/", 
    redirect: "/en/" 
  },
  {
    path: '/en/',
    name: 'Home',
    component: () => import('/src/views/Home.vue'),
  },
  {
    path: '/en/games',
    name: 'Games',
    component: () => import('/src/views/games/Games.vue'),
  },
  {
    path: '/en/games/:slug',
    name: 'GameDetail',
    component: () => import('/src/views/games/GameDetail.vue'),
    props: true,
    params: true
  },
  {
    path: '/en/career',
    name: 'Career',
    component: () => import('/src/views/Career.vue'),
  },
  {
    path: '/en/contact',
    name: 'Contact',
    component: () => import('/src/views/Contact.vue'),
  },
  {
    path: '/en/partners',
    name: 'Partners',
    component: () => import('/src/views/Partners.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'FourOFour',
    component: () => import('/src/views/FourOFour.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : "Curious Games"
  next()
})

export default router
