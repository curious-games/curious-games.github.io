
const routes = [
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
      component: () => import('../views/Home.vue')
      // component: () => import(`../views/${pages[Math.floor(Math.random()*pages.length)]}`)
    },
    {
      path: 'games',
      name: 'Games',
      component: () => import('../views/games/Games.vue')
    },
    {
      path: 'games/:slug',
      name: 'GameDetail',
      component: () => import('../views/games/GameDetail.vue'),
      props: true,
    },
    {
      path: 'partners',
      name: 'Partners',
      component: () => import('../views/Partners.vue')
    },
    {
      path: 'career',
      name: 'Career',
      component: () => import('../views/Career.vue')
    },
    {
      path: 'contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'FourOFour',
      component: () => import('../views/FourOFour.vue')
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
document.title = to.meta.title ? to.meta.title : "Curious Games"
next()

// const paramsLocale = to.params.locale

// if (!SUPPORT_LOCALES.includes(paramsLocale)) {
//   return next(`/${locale}`)
// }

// if (!i18n.global.availableLocales.includes(paramsLocale)) {
//   await loadLocaleMessages(i18n, paramsLocale)
// }

// setI18nLanguage(i18n, paramsLocale)

// return next()
})

export default router
