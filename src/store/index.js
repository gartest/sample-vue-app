import Vuex from "vuex";
import Vue from "vue";
import Drawer from "./modules/Drawer"
import SampleGet from "./modules/SampleGet"

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules:{
        Drawer,
        SampleGet,
    }
});
