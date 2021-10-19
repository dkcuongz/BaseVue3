export default {
    getExampleById: (state) => (id) => {
        return state.examples.find((example) => example.id === id);
    },
    doneExamples(state) {
        return state.examples.filter((example) => example.done);
    },
    doneExamplesListCount(state, getters) {
        return getters.doneExamples.length;
    },
};
