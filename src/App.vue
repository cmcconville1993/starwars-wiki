<template>
  <div id="app">
    <h1>Star Wars WIKI</h1>
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
/* https://www.color-hex.com/color-palette/22099 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 800px;
  margin: auto;
}

p router-link {
  color: #2c3e50 !important;
}

div {
  color: #381010;
}

h1 {
  color: #7e7863;
  margin: 40px 0 0;
}

h2 {
  color: #7e7863;
  margin: 40px 0 0;
}

h3 {
  color: #7e7863;
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

table th {
  color: #42b983;
}

.character-list-item {
  color: #334e30;
}
</style>
