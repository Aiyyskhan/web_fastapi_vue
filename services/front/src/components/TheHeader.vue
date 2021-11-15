<template>

  <v-toolbar app fixed dark>
    <v-toolbar-title>
      Altan
      <!-- <a class="header__logo" href="/">
        Altan
        <v-img
          src="@/assets/logo-altan-3-white.png"
        ></v-img>
      </a> -->
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <div v-if="isLoggedIn">
        <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/dashboard">Dashboard</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/profile">My Profile</router-link>
        </v-btn>
      </div>
      <div v-else>
        <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/register">Register</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/login">Log In</router-link>
        </v-btn>
      </div>
    </v-toolbar-items>

    <v-menu class="hidden-md-and-up">
      <v-app-bar-nav-icon slot="activator"></v-app-bar-nav-icon>

      <v-list v-if="isLoggedIn">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/">Home</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/dashboard">Dashboard</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/profile">My Profile</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list v-else>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/">Home</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/register">Register</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/login">Log In</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
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