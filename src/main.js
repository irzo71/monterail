// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.debug = true

// Modal
import usermodal from './components/usermodal'
Vue.component('user-modal', usermodal)

// Comments
import comments from './components/comments'
Vue.component('comments', comments)

import App from './App'
// App-header
import header from './components/header'
Vue.component('app-header', header)

import allQustions from './components/all_qustions'
import singleQuestion from './components/single_question'
import Contact from './components/Contact'
// import { sync } from 'vuex-router-sync'

// sync(usermodal, App)
const routes = [
  { path: '/all', component: allQustions, alias: '/' },
  { path: '/single', component: singleQuestion },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
var globalModalShow = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: { globalModalShow: globalModalShow },
  props: { showModal: true },
  template: '<App/>',
  components: { App }
})
