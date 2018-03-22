import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
