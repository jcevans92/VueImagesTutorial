// Functionality Imports !!! NEEDED !!!
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';

// Component Imports
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // Tells to use browser router mode. Better way for routing
    routes: [
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm },
        { path: '/oauth2/callback', component: AuthHandler }
    ]
});

new Vue({
    router,
    store, // Adds Vuex Store to instance
    render: h => h(App)
}).$mount('#app');
