import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '@/views/Home';
import Add from '@/views/Add';
import Collect from '@/views/Collect';
import List from '@/views/List';
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'current',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    }, 
    {
      path: '/home',
      name: 'home',
      component: Home
    }, 
    {
      path: '/list',
      name: 'list',
      component: List
    }, 
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    }, 
    {
      path: '/add',
      name: 'add',
      component: Add
    }, 
    {
      path: '*',
      redirect: '/home'
    }, 
  ]
})
