<template>
  <div id="app">
    
    <Header />
    
    <main class="main">
      <SideBar />      
      <section class="content">
        <router-view/>
      </section>
    </main>

    <Footer />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
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

.main {
  padding: 30px 15px;
}
.sidebar {
  padding: 30px 15px;
  margin: 0px 0px 30px 0px;
}
.content {
}

@media (min-width: 992px) {
  .main {
    grid-area: main;
    display: grid;
    grid-template: 1fr / 1fr minmax(auto, 300px) minmax(auto, 1100px) 1fr;
  }
  .sidebar {
    grid-column: 2 / 3;
    margin: 0;
  }
  .content {
    grid-column: 3 / 4;
    padding: 0px 0px 0px 30px;
  }
}
</style>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    SideBar,
    Footer
  }
}
</script>
