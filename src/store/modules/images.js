import api from '../../api/imgur';
import { router } from '../../main';

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
    },
    async uploadImages({ rootState }, imageList) {
        // Get Access token
        const { token } = rootState.auth;
        // Call api to upload image
        await api.uploadImages(token, imageList);
        // Redirect our user to image list component
        router.push('/');
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