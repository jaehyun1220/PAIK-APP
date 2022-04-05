import Vue from 'vue'
import App from './App.vue'
import router from './components/router/index.js';

// import main_ from './pages/main.vue';
// import order_ from './pages/order.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

