import api from '../../api/imgur';

const state = {
    images: []
};

const getters = {
    getAllImages: state => state.images
};

const actions = {
    // Async Await
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
        console.log(response.data.data);
    }
};

const mutations = {
    setImages: (state, imageList) => {
        state.images = imageList;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};