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
          name: 'Home',
          // component: () => import('./views/Home.vue')
          component: () => import(`./views/${pages[Math.floor(Math.random()*pages.length)]}`)
        },
        {
          path: 'games',
          name: 'Games',
          component: () => import('./views/games/Games.vue')
        },
        {
          path: 'games/:slug',
          name: 'GameDetail',
          component: () => import('./views/games/GameDetail.vue'),
          props: true,
          // beforeEnter: (toRoute,next) => {
          //   window.document.title = toRoute.meta.metatitle;
          //   next();
          // },
          // meta: {
          //   title : localStorage.getItem("metatitle"),
          // },
        },
        {
          path: 'partners',
          name: 'Partners',
          component: () => import('./views/Partners.vue')
        },
        {
          path: 'career',
          name: 'Career',
          component: () => import('./views/Career.vue')
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('./views/Contact.vue')
        },
        {
          path: '/:catchAll(.*)',
          name: 'FourOFour',
          component: () => import('./views/FourOFour.vue')
        }
      ]
    }
  ]
})
