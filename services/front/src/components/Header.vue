<template>
<nav class="navbar lighten-1">
  <div class="nav-wrapper">
    <div class="navbar-left">
      <a class="logo" href="/">
        <img src="@/assets/logo-altan-3-white.png" alt="Altan">
      </a>
      <a href="#" @click.prevent="$emit('click')">
        <i class="material-icons white-text">dehaze</i>
      </a>
      <span class="right white-text">{{date | date("date")}}</span>
    </div>

    <ul class="right hide-on-small-and-down">
      <li>
        <a
          class="dropdown-trigger white-text"
          href="#"
          data-target="dropdown"
          ref="dropdown"
        >
        USER NAME
        <i class="material-icons right">arrow_drop_down</i>
        </a>

        <ul id='dropdown' v-if="isLoggedIn" class="dropdown-content">
            <li>
              <router-link class="black-text" to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link class="black-text" to="/dashboard">Dashboard</router-link>
            </li>
            <li>
              <router-link class="black-text" to="/profile">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li>
              <a class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>

          <ul id='dropdown' v-else class="dropdown-content">
            <li>
              <router-link class="black-text" to="/">
                Home
              </router-link>
            </li>
            <li>
              <router-link class="black-text" to="/register">Register</router-link>
            </li>
            <li>
              <router-link class="black-text" to="/login">Log In</router-link>
            </li>
          </ul>
      </li>
    </ul>
  </div>
</nav>
</template>

<style lang="scss">
.logo {
	// border: 2px solid black;
	display: flex;
	max-width: 80px;
	img {
		width: 100%;
	}
}
</style>

<script>
import M from 'materialize-css'

export default {
  name: 'NavBar',
	data: () => ({
		date: new Date(),
		interval: null,
		dropdown: null
	}),
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
	mounted() {
		this.interval = setInterval(() => {
			this.date = new Date()
		}, 1000)
		this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
			constrainWidth: false
		})
	},
	beforeDestroy() {
		clearInterval(this.interval);
		if (this.dropdown && this.dropdown.destroy) {
			this.dropdown.destroy()
		}
	}
}
</script>