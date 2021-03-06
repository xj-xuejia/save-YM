import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Focus from '../views/Focus.vue'
import Index from '../views/Index.vue'
import Me from '../views/Me.vue'
import Sound from '../views/Sound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/focus',
    name: 'Focus',
    component: Focus
  },
  {
    path: '/sound',
    name: 'Sound',
    component: Sound
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  //{
  //  path: '/',
  //  name: 'Home',
  //  component: Home
  //},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
