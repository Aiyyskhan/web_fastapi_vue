<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Ping',
    data() {
      return {
        msg: '',
      };
    },
    methods: {
      getMessage() {
        axios.get('http://127.0.0.1:8000')
          .then((res) => {
            this.msg = res.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
    created() {
      this.getMessage();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
