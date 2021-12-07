import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './views/MainPage';
import ProductPage from './views/ProductPage';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/products/:id',
            name: 'ProductPage',
            component: ProductPage
        }
    ]
})