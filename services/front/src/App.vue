<template>
  <div id="app">
    
    <Header />
    
    <main class="main">
      <!-- <SideBar /> -->
      <section class="content">
        <router-view/>
      </section>
    </main>

    <Footer />
  </div>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
// import SideBar from '@/components/TheSideBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    // SideBar,
    Footer
  }
}
</script>


<style>

</style>
