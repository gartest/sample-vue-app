<template>
    <v-toolbar app>
      <v-toolbar-side-icon @click="setDrawerOpen(true)"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span>Sample vue app</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>    
        <v-btn
            flat
            :loading="loading"
            :disabled="loading"
            @click="handleClick"
        >
            <span class="mr-2">Hola! soy un botón</span>
        </v-btn>
    </v-toolbar>
</template>

<script>
import { mapActions } from "vuex"
import { setTimeout } from 'timers';
export default {
    name:"Navbar",
    data: () =>({
        loading:false,
    }),
    methods: {
        ...mapActions(["setDrawerOpen"]),
        handleClick(){
            this.loading = true;
            setTimeout(()=>{
                this.loading = false;
            },3000);
        }
    }
}
</script>

<style>

</style>
