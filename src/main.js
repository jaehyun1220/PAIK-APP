import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { mainPage, orderPage, confirmPage } from './components/pages'

export const eventBus = new Vue()
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
  },
  {

    path : '/confirm',
    component: confirmPage
  },
]

const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')