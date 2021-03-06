import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../MainPages/Home.vue'
import Rules from '../components/Rules.vue'
import Play from '../components/Play.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../MainPages/About.vue')
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import(/* webpackChunkName: "about" */ '../MainPages/Story.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
]

const router = new VueRouter({
  routes
})

export default router
