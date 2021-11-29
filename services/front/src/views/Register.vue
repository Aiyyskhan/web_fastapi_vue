<template>
  <section>
    <form class="card auth-card" @submit.prevent="submit">
      <div class="card-content">
        <span class="card-title">Зарегистрироваться</span>

        <div class="input-field">
          <input
            id="name"
            type="text"
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
            id="email"
            type="text"
            v-model.trim="user.email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
          >
          <label for="email">Email</label>
          <small 
            class="helper-text invalid"
            v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email не должно быть пустым</small>
          <small 
            class="helper-text invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
          >Пожалуйста, введите корректный Email</small>
        </div>

        <div class="input-field">
          <input
            id="password"
            type="password"
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

        <p>
          <label>
            <input type="checkbox" v-model="user.agree" />
            <span>С правилами согласен</span>
          </label>
        </p>

      </div>

      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Зарегистрироваться
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Уже есть аккаунт?
          <router-link to="/login">Войти!</router-link>
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import {email, required, minLength} from "vuelidate/lib/validators"
import M from 'materialize-css'

export default {
  name: 'Register',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        agree: false
      },
    };
  },
	validations: {
		name: {required},
		email: {email, required},
		password: {required, minLength: minLength(7)},
		agree: {checked: v => v}
	},
	mounted() {
		this.error("Test")
	},
  methods: {
    ...mapActions(['register']),
    async submit() {
      if (this.$v.$invalid) {
				this.$v.$touch()
				return
			}
      try {
        await this.register(this.user);
        this.$router.push('/dashboard');
      } catch (error) {
        throw 'Username already exists. Please try again.';
      }
    },
		message(html) {
			M.toast({html})
		},
		error(html) {
			M.toast({html: `[Ошибка]: ${html}`})
		}
  }
};
</script>
