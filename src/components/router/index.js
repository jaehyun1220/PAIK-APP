import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import order_ from '../../pages/order'
export default new VueRouter({
	mode:'history',
    routes: [
    {path: '/', component: () => import('../section.vue'),},
    {path: '/order', component: order_},
]
});