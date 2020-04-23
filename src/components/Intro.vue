<template>
  <div>
      <h1>{{ msg }}</h1>
      <!-- <h2 class="intro">What is Get Fit?</h2> -->
      <p class="intro">
        Here we are going to write our Intro, the same as in the rules
      </p>
    <div class="options">
      <p id="rules">Rules intro... <br>
      <router-link to="/rules">Read the rules</router-link>
      </p>
      <p id="play">Play the game...<br>
      <router-link to="/play">Play now!</router-link>
      </p>
      
    </div>
 <foodCard></foodCard>
  </div>
</template>

<script>
import foodCard from './foodCard.vue'
export default {
  created() {
  console.log(this.$store.state.foods)
},
  name: 'Intro',
  components: {
    foodCard
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
h2{
font-size: 1.2em;
}

.options{
  display: grid;
  grid-template-columns: 20% 20%;
  grid-gap: 1em;
  justify-content: center;
}

</style>
