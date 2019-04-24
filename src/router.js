import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AppFooter from './components/AppFooter.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      components: () => import('./views/About.vue')
    }, {
      path: '/membre/:name',
      name: 'member',
      components: {
        default: () => import('./views/Member.vue'),
        // footer: () => import('./components/MemberFooter.vue')
      },
    }, {
      path: '/membre',
      redirect: '/membre/Claire' 
    }, {
      path: '/membre/*',
      redirect: '/membre/Claire'
    }, {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }, {
      path: '/animations/:slug',
      name: 'animations',
      components: {
        default: () => import('./views/Animations.vue')
      }
    }, {
      path: '/agenda',
      name: 'agenda',
      components: {
        default: () => import('./views/Agenda.vue')
      }
    }, {
      path: '/mentions-legales',
      name: 'mentions-legales',
      components: {
        default: () => import('./views/Mentions.vue')
      }
    }, {
      path: '/presse',
      name: 'presse',
      components: {
        default: () => import('./views/Presse.vue')
      }
    }
  ]
})

export default router