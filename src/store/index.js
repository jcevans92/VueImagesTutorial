import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import images from './modules/images';

Vue.use(Vuex); // Just tells Vue that this exists and can be used

export default new Vuex.Store({
    modules: {
        auth,
        images
    }
});