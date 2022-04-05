<template>
  <div id="app">
    <div class="login_container" v-if="login">
      <Header_/>
      <Section_/>
      <Footer_/>
      <img src="./assets/image/visual.jpg" alt="visual" class="visual">
    </div>
    <div class="logout_container" v-else>
      <Login_ v-on:loginEvent="LoginEvent" v-on:loginEventAuto="LoginEventAuto"></Login_>
    </div>
  </div>
</template>

<script>
import 'boxicons'
import Header_ from './components/header.vue'
import Section_ from './components/section.vue'
import Footer_ from './components/footer.vue'
import Login_ from './components/login.vue'

export default {
  name: 'App',
  components: {
    Header_,
    Section_,
    Footer_,
    Login_,
  },
  data() {
    return {
      login : true
    }
  },
  methods : {
    LoginEvent() {
      this.login = !this.login
    },
    LoginEventAuto() {
      this.login = !this.login
    }
  }
}
</script>

<style>
  #app { color: #2c3e50; width: 500px; margin: auto; height: 100vh; background: #f2f2f2;}
  .login_container > img {position: fixed; top: 50%; left: 0; transform: translateY(-50%); z-index: -1; filter:blur(2px) brightness(75%); width: 100%;}
  .logout_container {height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;}
  @media (max-width:991px) {
    #app {width: 100%;}
  }
</style>
