import api from '../../api/imgur';

const state = {
    token: null
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
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, newToken) => {
        state.token = newToken;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}