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
      this.index = Math.floor(Math.random() * this.$store.state.foods.length)
  },

  computed: {
      food(){
        let card = this.$store.state.foods.find
        (f => this.$store.state.foods.indexOf(f) === this.index)
        return card;
      },
  },
  data() {
    return {
      index: null
    }
  },
  methods : {
    send(card){
      this.$emit('clickCard', card)
      this.index = Math.floor(Math.random() * this.$store.state.foods.length)
    }
  },
  name: 'foodCard'
 
}
</script>
