<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>


<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
</style>


<script>
import EmptyLayout from "@/layouts/EmptyLayout"
import MainLayout from "@/layouts/MainLayout"
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout"
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
// import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'

// export default {
//   components: {
//     Header,
//     Footer
//   }
// }
</script>


<style>

</style>
