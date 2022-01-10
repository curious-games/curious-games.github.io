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
    meta: { title: 'Curious Games - Welcome'}
  },
  {
    path: '/en/games',
    name: 'Games',
    component: () => import('/src/views/games/Games.vue'),
    meta: { title: 'Curious Games - Games'}
  },
  {
    path: '/en/games/:slug',
    name: 'GameDetail',
    component: () => import('/src/views/games/GameDetail.vue'),
    props: true,
    meta: { title: 'Curious Games - Game Detail'}
  },
  {
    path: '/en/career',
    name: 'Career',
    component: () => import('/src/views/Career.vue'),
    meta: { title: 'Curious Games - Career'}
  },
  {
    path: '/en/contact',
    name: 'Contact',
    component: () => import('/src/views/Contact.vue'),
    meta: { title: 'Curious Games - Contact'}
  },
  {
    path: '/en/partners',
    name: 'Partners',
    component: () => import('/src/views/Partners.vue'),
    meta: { title: 'Curious Games - Partners'}
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
