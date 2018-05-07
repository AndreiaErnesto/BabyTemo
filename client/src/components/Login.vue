<template>
  <v-container grid-list-x1 text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <div class="white elevation-2">
          <v-toolbar flat dense dark class="cyan">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
            ></v-text-field>
            <br>
            <br>
            <div class="error1" v-html= "error" />
            <br>
            <v-btn
              dark
              class="cyan"
              @click="login">
              Login
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error1 {
  color: red;
}
</style>
