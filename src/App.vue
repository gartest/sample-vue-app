<template>
  <v-app>
    <Navbar/>
    <Drawer/>
    <v-content>      
      <v-container fluid>
        <router-view></router-view>
      </v-container>      
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer"
import Navbar from "./components/Navbar"

export default {
  name: 'App',
  components: {
    Drawer,
    Navbar
  },
  data () {
    return {
      //
    }
  },
}
</script>
<style>
  .m-t-xs{margin-top: 5px}
  .m-r-xs{margin-right: 5px}
  .m-b-xs{margin-bottom: 5px}
  .m-l-xs{margin-left: 5px}

  .m-t{margin-top: 15px}
  .m-r{margin-right: 15px}
  .m-b{margin-bottom: 15px}
  .m-l{margin-left: 15px}

  .p-t{padding-top: 15px}
  .p-r{padding-right: 15px}
  .p-b{padding-bottom: 15px}
  .p-l{padding-left: 15px}
</style>

