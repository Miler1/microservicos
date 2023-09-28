import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/HomeTest.vue'
import Login from './views/LoginTest.vue'
import Register from './views/RegisterTest.vue'
import Detail from './views/DetailTest.vue'
import Profile from './views/ProfileTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/register',
    component: Register
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/ProfileTest.vue')
  },
  {
    path:'/detail',
    name: 'detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
