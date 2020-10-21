<template>
  <div v-if="foodIndex>=0" class="food-card" @click="send(food)">
    <h3>{{food.name}}</h3>
    <p><img :src="'/images/' + food.pic " alt="food-pic" class="pic"></p>
    <p>Energy: {{ food.energy }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    foodIndex(){
        if (this.$store.state.foods.length > 0) { 
          let index = Math.floor(Math.random() * this.$store.state.foods.length)
          return index} else { return null}
      },
      food(){
        let card = this.$store.state.foods.find(f => this.$store.state.foods.indexOf(f) === this.foodIndex)
        return card;
      },
  },
  methods : {
    send(card){
      this.$emit('clickCard', card)
    }
  },
  name: 'foodCard',
 
 
}
</script>
