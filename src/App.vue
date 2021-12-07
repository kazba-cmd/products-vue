<template>
  <div id="app">
    <Header/>
    <hr/>
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
