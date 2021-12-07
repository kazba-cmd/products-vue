import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product';
import slider from './modules/slider';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        product,
        slider
    }
})