import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import $ from 'jquery'
import 'jquery-ui'
import '../node_modules/jquery-ui/ui/widgets/accordion.js'

import Index from './components/Index'
import You from './components/You'
import Hai from './components/Hai'
import Dong from './components/Dong'
import zTree from './components/VueZtree'
import JqueryUI from './components/JqueryUI'

Vue.use(VueRouter);

const routes = [
  {path:'/',component:App},
  {path:'/index',component:Index},
  {path:'/you',component:You},
  {path:'/hai',component:Hai},
  {path:'/dong',component:Dong},
  {path:'/tree',component:zTree},
  {path:'/jqueryUI',component:JqueryUI}
]

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router
})
