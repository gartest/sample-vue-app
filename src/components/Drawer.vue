<template>
    <v-navigation-drawer    
      v-model="drawerOpen"
      app
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Juan Pérez</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="handleMenuClick(item)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapActions} from "vuex"
export default {
    name:"Drawer",
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard', path: "/" },
          { title: 'About', icon: 'question_answer', path: "/about" },
          { title: 'Ejemplo GET', icon: 'arrow_downward', path: "/ejemplo-get" }
        ]
      }
    },
    computed: {
      drawerOpen:{
        get(){
          return this.$store.state.Drawer.drawerOpen
        },
        set(value){
          this.$store.commit("setDrawerOpenValue", value)
        }
      }
    },
    methods:{
        ...mapActions(["setDrawerOpen"]),
        handleMenuClick(item){
          this.setDrawerOpen(false);
          this.$router.push(item.path)
        }
    }
}
</script>

<style>

</style>
