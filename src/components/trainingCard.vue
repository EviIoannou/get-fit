<template>
  <div v-if="trainingIndex>=0" class="training-card" @click="send(training)">
    <h3>{{training.name}}</h3>
    <p><img :src="'/images/' + training.pic " alt="training-pic" class="pic"></p>
    <p>Energy: {{ training.energy }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    
    trainingIndex(){
        if (this.$store.state.trainings.length > 0) { 
          let index = Math.floor(Math.random() * this.$store.state.trainings.length)
          return index} else { return null}
      },
      training(){
        let card = this.$store.state.trainings.find(f => this.$store.state.trainings.indexOf(f) === this.trainingIndex)
        return card;
      },
  },
  methods : {
    send(card){
      if ( this.$store.state.energyPoints < Math.abs(card.energy) ){
        console.log('You need to eat before you can train!')
        return null
      }
      else {
      this.$emit('clickCard', card) 
      }
      
    }
  },
  name: 'TrainingCard',
 
 
}
</script>
