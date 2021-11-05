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
      <div class="footer__copy">
        Copyright, 2021
      </div>
      <div class="footer__text">
        Lorem ipsum dolor sit amet.
      </div>
    </footer>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Montserrat', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  min-height: 100%;
  display: grid;
  grid-template: minmax(100px, auto) 1fr minmax(70px, auto) / 1fr;
  grid-template-areas: 
    "header"
    "main"
    "footer";
}

.header {
  grid-area: header;
  background-color: #303942;
  display: grid;
  align-items: center;
  grid-template: 1fr / 1fr minmax(auto, 300px) minmax(auto, 1100px) 1fr;
}
.header__logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: aliceblue;
  text-decoration: none;
  line-height: 40px;
  grid-column: 2 / 3;
}

.main {
  grid-area: main;
  padding: 30px 15px;
  display: grid;
  grid-template: 1fr / 1fr minmax(auto, 300px) minmax(auto, 1100px) 1fr;
}
.sidebar {
  grid-column: 2 / 3;
}
.content {
  grid-column: 3 / 4;
}

.footer {
  grid-area: footer;
  background-color: #303942;
  color: aliceblue;
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
