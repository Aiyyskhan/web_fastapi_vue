<template>
  <section>
    <form class="card auth-card" @submit.prevent="submit">
      <div class="card-content">
        <span class="card-title">Войти</span>

        <div class="input-field">
          <input
            id="name"
            type="text"
            name="username"
            v-model.trim="user.name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
          >
          <label for="name">Имя</label>
          <small 
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
          >Введите Ваше имя</small>
        </div>

        <div class="input-field">
          <input
            id="password"
            type="password"
            name="password"
            v-model.trim="user.password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          >
          <label for="password">Пароль</label>
          <small 
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
          >Поле Пароль не должен быть пустым</small>
          <small 
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов</small>
        </div>
      </div>

      <div class="card-action">
        <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
        </div>

        <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import {required, minLength} from "vuelidate/lib/validators"

export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: '',
        password: '',
      }
    };
  },
	validations: {
		name: {required},
		password: {required, minLength: minLength(7)}
	},
  methods: {
    ...mapActions(['logIn']),
    async submit() {
      if (this.$v.$invalid) {
				this.$v.$touch()
				return
			}
      const User = new FormData();
      User.append('username', this.user.name);
      User.append('password', this.user.password);
      await this.logIn(User);
      this.$router.push('/dashboard');
    }
  }
}
</script>