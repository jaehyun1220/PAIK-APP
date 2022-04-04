import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
    {
        path: '/', 
        redirect: '/home' 
    }, {
        path: '/home',
        component: () => import('../Home.vue'),
    },
]
});