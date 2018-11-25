import Vue from 'vue';
import App from './App';
import store from './store';

new Vue({
    store, // Adds Vuex Store to instance
    render: h => h(App)
}).$mount('#app');
