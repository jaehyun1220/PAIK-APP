import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { mainPage, orderPage } from './components/pages'

Vue.config.productionTip = true

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    component: mainPage
  },
  {

    path : '/order',
    component: orderPage
  }
]

const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')