<template>
  <div id="app">
    <h2>Star Wars WIKI</h2>
    <p>
      <router-link to="/">Character List</router-link>
      <router-link to="/liked-characters">Liked characters</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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
