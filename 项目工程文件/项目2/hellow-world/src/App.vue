<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Author url="https://cli.vuejs.org/cli-new-project.png" :size="100"/>
    <Author url="https://cli.vuejs.org/cli-new-project.png" :size="200"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Author from './components/Author.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Author
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
  margin-top: 60px;
}
</style>
