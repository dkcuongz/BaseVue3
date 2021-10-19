const MUTATIONS_NAME = {
    SELECT: 'SELECT',
    UN_SELECT: 'UN_SELECT',
}
export default  {
    setCategorySelection ({ commit }, data) {
        commit(MUTATIONS_NAME.SELECT, data)
    },
    unSetCategorySelection ({ commit }) {
        commit(MUTATIONS_NAME.UN_SELECT)
    }
}
