import pageHome from '../components/pageHome'
import pageThreads from '../components/pageThreads'
import pageNotFound from '../components/pageNotFound'
import * as VueRouter from 'vue-router'
import sourcData from '../data.json'

const routes = [
  {
    path: '/',
    name: 'home',
    component: pageHome
  },
  {
    path: '/threads/:id',
    name: 'pageThread',
    props: true,
    component: pageThreads,
    beforeEnter (to, from, next) {
      const threadExist = sourcData.threads.find(thread => thread.id === to.params.id)
      if (threadExist) {
        return next()
      } else {
        next({
          name: 'notFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: pageNotFound
  }
]

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
