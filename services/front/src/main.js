import axios from "axios";
import vuetify from '@/plugins/vuetify';
import "vuetify/dist/vuetify.css";
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000/";

Vue.config.productionTip = false

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
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
