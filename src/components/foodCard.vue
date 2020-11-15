<template>
  <div v-if="index>=0" class="food-card" @click="send(food)">
    <h3>{{food.name}}</h3>
    <p><img :src="'/images/' + food.pic " alt="food-pic" class="pic"></p>
    <p>Energy: {{ food.energy }}</p>
  </div>
</template>

<script>
export default {
  created(){
      this.index = this.getRandomIndex()
  },

  computed: {
      food(){
        let card = this.$store.state.foods.find
        (f => this.$store.state.foods.indexOf(f) === this.index)
        return card
      },
  },
  data() {
    return {
      index: null
    }
  },
  methods : {
    getRandomIndex(){
      let index = Math.floor(Math.random() * this.$store.state.foods.length)
      return index
    },

    send(card){
      this.$emit('clickCard', card)
      this.index = this.getRandomIndex()
    }
  },
  name: 'foodCard'
 
}
</script>
