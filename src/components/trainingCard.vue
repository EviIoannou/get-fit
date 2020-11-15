<template>
  <div v-if="index>=0" class="training-card" @click="send(training)">
    <h3>{{training.name}}</h3>
    <p><img :src="'/images/' + training.pic " alt="training-pic" class="pic"></p>
    <p>Energy: {{ training.energy }}</p>
  </div>
</template>

<script>
export default {
  created(){
      this.index = Math.floor(Math.random() * this.$store.state.trainings.length)
  },

  computed: {
      training(){
        let card = this.$store.state.trainings.find(t => this.$store.state.trainings.indexOf(t) === this.index)
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
      if ( this.$store.state.energyPoints < Math.abs(card.energy) ){
        console.log('You need to eat before you can train!')
        return null
      }
      else {
      this.$emit('clickCard', card) 
      this.index = Math.floor(Math.random() * this.$store.state.trainings.length)
      }
      
    }
  },
  name: 'trainingCard',
 
 
}
</script>
