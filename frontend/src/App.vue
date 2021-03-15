<template>
  <div id="app">
    <Forms/>
  </div>
</template>

<script>
import Forms from './components/Forms.vue'

export default {
  name: 'App',
  components: {
    Forms
  }
}
</script>

<style>
body {
  margin: 0;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  text-align: center;
  
  color: #fff;
}
</style>
