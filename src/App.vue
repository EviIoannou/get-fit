<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/rules">Rules</router-link> |
      <router-link to="/play">Play</router-link> |
      <router-link to="/about">About us</router-link>|
      <router-link to="/story">The story behind</router-link>
    </div>
    <router-view/>

    <!-- These components are used to 'populate' the card decks -->
    <trainingDeck />
    <foodDeck />
    <!-- ---- -->

  </div>
</template>

<script>
import foodDeck from './components/foodDeck.vue'
import trainingDeck from './components/trainingDeck.vue'

export default{
    components: {
    foodDeck,
    trainingDeck
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
