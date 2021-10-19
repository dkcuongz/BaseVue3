import { createStore } from 'vuex';
import example from './example/index';

const store = createStore({
    modules: {
        example: example,
    },
    state() {
        return {};
    },
    getters: {},
    mutations: {},
    actions: {},
});

export default store;
