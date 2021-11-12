<template>

  <v-toolbar app fixed dark>
    <v-toolbar-title>
      <a class="header__logo" href="/">
        Altan
        <!-- <v-img
          src="@/assets/logo-altan-3-white.png"
        ></v-img> -->
      </a>
    </v-toolbar-title>

    <v-toolbar-items class="hidden-sm-and-down" v-if="isLoggedIn">
      
      <router-link to="/"><v-btn text>Home</v-btn></router-link>
      
      <v-btn text>
        <router-link to="/dashboard">Dashboard</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/profile">My Profile</router-link>
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items class="hidden-sm-and-down" v-else>
      <v-btn text>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/register">Register</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/login">Log In</router-link>
      </v-btn>
    </v-toolbar-items>

    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <v-responsive max-width="260">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
      ></v-text-field>
    </v-responsive>
  </v-toolbar>
</template>


<script>
export default {
  data: () => ({ drawer: null }),
  name: 'NavBar',
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logOut');
      this.$router.push('/login');
    }
  },
}
</script>


<style scoped>

</style>