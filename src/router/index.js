import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/views/Order'
import User from '@/views/User'
import Setting from '@/views/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/order' },
    { path: '/order', component: Order },
    { path: '/user', component: User },
    { path: '/setting', component: Setting }
  ]
})
