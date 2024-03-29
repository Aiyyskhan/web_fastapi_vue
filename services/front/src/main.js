// import "bootstrap/dist/css/bootstrap.css";
import "materialize-css/dist/js/materialize.min";
import axios from "axios";
import Vue from 'vue';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from "@/filters/date.filter";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000/";

Vue.config.productionTip = false

Vue.use(Vuelidate)

Vue.filter("date", dateFilter)

// при истечении срока токена пользователь выходит из системы и перенаправляется на страницу входа
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch('logOut');
      return router.push('/login')
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
