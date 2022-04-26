<template>
  <div id="app">
    <div class="login_container" v-if="login">
      <header_component/>
      <section_component/>
      <footer_component/>
      <img src="./assets/image/visual.jpg" alt="visual" class="visual">
    </div>
    <div class="logout_container" v-else>
      <login_component v-on:loginEvent="LoginEvent" v-on:loginEventAuto="LoginEventAuto"></login_component>
    </div>
  </div>
</template>

<script>
import 'boxicons'
import header_component from './components/header.vue'
import section_component from './components/section.vue'
import footer_component from './components/footer.vue'
import login_component from './components/login.vue'

export default {
  name: 'App',
  components: {
    header_component,
    section_component,
    footer_component,
    login_component,
  },
  data() {
    return {
      login : false
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
  #app { color: #2c3e50; width: 500px; margin: auto; background: #f2f2f2; height: 100vh;}
  .login_container > img {position: fixed; top: 50%; left: 0; transform: translateY(-50%); z-index: -1; filter:blur(2px) brightness(75%); width: 100%;}
  .logout_container {height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;}
  @media (max-width:991px) {
    #app {width: 100%;}
    .login_container > img.visual {display: none;}
  }
</style>
