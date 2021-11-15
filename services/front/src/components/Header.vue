<template>
  <header class="header">
    <a class="header__logo" href="/">
      <img src="@/assets/logo-altan-3-white.png" alt="Altan logo">
    </a>

    <nav class="menu">

      <button class="menu__toggler" type="button">
        <span class="menu__toggler-icon"></span>
      </button>

      <div class="navbar" id="navbarCollapse">
        
        <ul v-if="isLoggedIn" class="navbar__list">
          <li class="navbar__item">
            <router-link class="navbar__link" to="/">Home</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/profile">My Profile</router-link>
          </li>
          <li class="navbar__item">
            <a class="navbar__link" @click="logout">Log Out</a>
          </li>
        </ul>

        <ul v-else class="navbar__list">
          <li class="navbar__item">
            <router-link class="navbar__link" to="/">Home</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/register">Register</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/login">Log In</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<script>
export default {
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