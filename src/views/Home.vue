<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/silhouette.png" class="cover">
    <Intro msg="Get Fit"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
  }
}
</script>

<style scoped>
.cover{
  height: 5em;
  width:auto;
}
</style>