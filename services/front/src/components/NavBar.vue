<template>
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
</template>


<style scoped>
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