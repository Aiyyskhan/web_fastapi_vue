<template>
  <div id="app">
    <Header />
    <div class="main container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

html, body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Montserrat', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.main {
  padding-top: 5em;
}
</style>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>

</style>
