import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import About from "./components/About"
import SampleGet from "./components/SampleGet"

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:"/",
            name:"home",
            component: Home,
        },
        {
            path:"/about",
            name:"about",
            component: About,
        },
        {
            path:"/ejemplo-get",
            name:"ejemplo-get",
            component: SampleGet,
        },
    ]
})
