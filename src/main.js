import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { mainPage, orderPage, confirmPage, directionsPage } from './components/pages'

export const eventBus = new Vue()

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    component: mainPage
  },
  {

    path : '/order',
    component: orderPage
  },
  {
    path : '/confirm',
    component: confirmPage
  },
  {
    path : '/directions',
    component: directionsPage
  }
]

const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')