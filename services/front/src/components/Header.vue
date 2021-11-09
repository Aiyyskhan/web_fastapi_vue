<template>
  <header class="header">
    <a class="header__logo" href="/">
      <img src="@/assets/logo-altan-3-white.png" alt="Altan logo">
    </a>

    <nav class="menu">

      <button class="menu__toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
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

        <ul v-else class="navbar__list me-auto mb-2 mb-md-0">
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


<style scoped>
.header {
  grid-area: header;
  background-color: #303942;
  display: grid;
  align-items: center;
  grid-template: 1fr / 1fr minmax(auto, 300px) minmax(auto, 1100px) 1fr;
}
.header__logo {
  width: 150px;
  height: auto;
  padding: 10px;
  align-items: center;
  grid-column: 2 / 3;
}
.header__logo > img {
  max-width: 100%;
}

a {
  cursor: pointer;
}
.menu {
  align-items: center;
  grid-column: 3 / 4;
}
.navbar__list {
  display: grid;
  grid-auto-flow: column;
  justify-items: end;
}
.navbar__link {
  color: aliceblue;
  font-size: 18px;
  text-decoration: none;
}

@media (max-width: 992px) {
  .navbar__list {
    display: none;
  }
}

</style>


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