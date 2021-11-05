<template>
  <div id="app">
    <header class="header">
      <a class="header__logo" href="/">Altan</a>
      <NavBar />
    </header>
    
    <main class="main">
      <aside class="sidebar">
        <nav class="sidebar__menu">
          <ul class="sidebar__list">
            <li>
              <a href="" class="sidebar__link">Пункт меню</a>
            </li>
            <li>
              <a href="" class="sidebar__link">Пункт меню</a>
            </li>
            <li>
              <a href="" class="sidebar__link">Пункт меню</a>
            </li>
            <li>
              <a href="" class="sidebar__link">Пункт меню</a>
            </li>
          </ul>
        </nav>
      </aside>
      
      <section class="content">
        <router-view/>
      </section>
    </main>

    <footer class="footer">

    </footer>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

#app {
  font-family: 'Montserrat', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: grid;
}
.main {
  padding-top: 5em;
}
</style>


<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
