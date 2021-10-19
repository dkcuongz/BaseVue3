import actions from './actions';
import getters from './getters';

const MUTATIONS_NAME = {
    SELECT: 'SELECT',
    UN_SELECT: 'UN_SELECT',
}

export default {
    namespaced: true,
    state() {
        return {
            examples: {},
        };
    },
    mutations: {
        [MUTATIONS_NAME.SELECT](state, data) {
            state.item = data
        },
        [MUTATIONS_NAME.UN_SELECT](state) {
            state.item = null
        }
    },
    getters: getters,
    actions: actions,
};
