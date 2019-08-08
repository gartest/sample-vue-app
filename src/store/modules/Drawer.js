const state = {
    drawerOpen: false,
}

const getters = {

}

const actions = {
    setDrawerOpen ({commit}, value) {
        commit("setDrawerOpenValue",value);
    }
}

const mutations = {
    setDrawerOpenValue : (state, value) =>(state.drawerOpen = value)
}

export default {
    state,
    getters,
    actions,
    mutations,
}