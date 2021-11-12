<template>
  <div id="app">
    <v-app>
      <Header />
    
      <v-main class="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="2">
              <SideBar /> 
            </v-col>

            <v-col>
              <v-sheet>
                <router-view/>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>

      <Footer />
    </v-app>
  </div>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/TheHeader.vue'
import SideBar from '@/components/TheSideBar.vue'
import Footer from '@/components/TheFooter.vue'

export default {
  components: {
    Header,
    SideBar,
    Footer
  }
}
</script>


<style>

</style>
