import 'whatwg-fetch';

const state = {
    categorias: [],
    loadingcategorias: false,
    selectedCategoria: null,
    productos:[],
    loadingProductos:false,
}

const getters = {
    categorias : (state) => (state.categorias),
    loadingcategorias: (state) => (state.loadingcategorias),
    selectedCategoria: (state) => (state.selectedCategoria),
    productos: (state) => (state.productos),
    loadingProductos: (state) => (state.loadingProductos),
}

const actions = {
    async getCategorias ({commit}) {
        commit("setLoadingCategorias", true);
        const response = await fetch("https://api.mercadolibre.com/sites/MLC/categories", {
            method:"GET",
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const responseJson = await response.json();
        commit("setCategorias", responseJson);
        commit("setLoadingCategorias", false);
    },
    async setSelectedCategoria({commit}, value){
        commit("setSelectedCategoria", value);
        commit("setProductos", []);
        if(value){
            commit("setLoadingproductos", true);
            const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?category=${value}&official_store_id=all`, {
                method:"GET",
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            const responseJson = await response.json();
            commit("setProductos", responseJson.results);
            commit("setLoadingproductos", false);
        }
    }
}

const mutations = {
    setCategorias : (state, value) =>(state.categorias = value),
    setLoadingCategorias: (state, value) => (state.loadingcategorias = value),
    setSelectedCategoria: (state, value) => (state.selectedCategoria = value),
    setLoadingproductos: (state, value) => (state.loadingProductos = value),
    setProductos: (state, value) => (state.productos = value),
}

export default {
    state,
    getters,
    actions,
    mutations,
}