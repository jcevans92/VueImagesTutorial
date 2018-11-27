import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: (state) => {
        // !! turns value into a boolean (null = false)
        return !!state.token;
    }
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin: ({ commit }, hash) => {
        // Start extracting access token
        const hashObject = qs.parse(hash.replace('#', ''));
        commit('setToken', hashObject.access_token);

        // Lets navigate to main page now.
        router.push('/');
    },
    logout: ({ commit }) => {
        commit('setToken', null);
        // Remove from localStorage to kill session
        window.localStorage.setItem('imgur_token', '');
    }
};

const mutations = {
    setToken: (state, newToken) => {
        state.token = newToken;
        // For login persistence store token in localstorage
        window.localStorage.setItem('imgur_token', newToken);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};