<template>
    <v-layout
      row
      wrap
    >
        <v-flex md12 class="m-b">
            <h1>Seleccione una categoría para ver sus productos</h1>
        </v-flex>
        <v-flex md3>
            <ul v-if="!loadingcategorias">
                <li v-for="c in categorias" :key="c.id" @click="setSelectedCategoria(c.id)">
                    <span class="m-l-xs">{{c.name}}</span>
                </li>
                <li v-if="!categorias || categorias.length === 0">No hay categorías disponibles</li>
            </ul>
            <span v-if="loadingcategorias"><v-progress-circular indeterminate class="m-r-xs" /> cargando categorías...</span>
        </v-flex>
        <v-flex md1>
            &nbsp;
        </v-flex>
        <v-flex md8>
            <h4 v-if="!selectedCategoria">Seleccione una categoría para ver sus productos</h4>
            <span v-if="loadingProductos"><v-progress-circular indeterminate class="m-r-xs" /> cargando productos...</span>
            <div v-for="p in productos" :key="p.id" class="thumb">
                <img :src="p.thumbnail" :alt="p.title"/>
                <p>{{p.title}}</p>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
    name: "SampleGet",
    methods:{
        ...mapActions(["getCategorias", "setSelectedCategoria"]),
    },
    computed:{
        ...mapGetters([
            "categorias", 
            "loadingcategorias", 
            "selectedCategoria",
            "productos",
            "loadingProductos"
            ]),
    } ,
    created() {
        this.getCategorias();
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    ul > li{
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }
    ul > li:hover{
        background-color: #eee;
    }
    .thumb{
        width: 250px;
        height: 180px;
        margin-right: 15px;
        margin-bottom: 15px;
        float: left;
        text-align: center;
        border: 1px solid #eee;
    }
    .thumb > p{
        margin-top: 5px;
    }
</style>
