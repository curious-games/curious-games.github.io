import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'

Vue.use(Router)
const pages = ['Home-k9.vue', 'Home-bug.vue']

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  
  routes: [
    {
      path: '/',
      redirect: `/${i18n.locale}/`
    },
    {
      path: '/:lang',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/',
          name: 'home',
          // component: () => import('./views/Home.vue')
          component: () => import(`./views/${pages[Math.floor(Math.random()*pages.length)]}`)
        },
        {
          path: 'games',
          name: 'games',
          component: () => import('./views/Games.vue')
        },
        {
          path: 'games/cockroachracers',
          name: 'games.cockroachracers',
          props: { gamePage: true },
          component: () => import('./views/games/Cockroachracers.vue')
        },
        {
          path: 'games/robodog',
          name: 'robodog',
          component: () => import('./views/games/Robodog.vue')
        },
        {
          path: 'games/cyberrace',
          name: 'cyberrace',
          component: () => import('./views/games/Cyberrace.vue')
        },
        {
          path: 'games/tronbikers',
          name: 'tronbikers',
          component: () => import('./views/games/Tronbikers.vue')
        },
        {
          path: 'games/catchacrab',
          name: 'catchacrab',
          component: () => import('./views/games/Catchacrab.vue')
        },
        {
          path: 'partners',
          name: 'partners',
          component: () => import('./views/Partners.vue')
        },
        {
          path: 'career',
          name: 'career',
          component: () => import('./views/Career.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('./views/Contact.vue')
        }
        
      ]
    }
  ]
})
