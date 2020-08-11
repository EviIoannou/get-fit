<template>
  <main>
    <!-- These components are used to 'populate' the card decks -->
    <trainingCard />
    <foodCard />
    <!-- ---- -->

    <header>
      <p>Energy points : {{energy}}</p>
      <p>Health points : {{health}}</p>
      <p><button @click="restart()" class="restart"> Restart game </button></p>
    </header>
    <section class="all-cards">
        <div class="foods">
            <div v-for="card in $store.state.foods" :key='card.name'  class="food-card" @click="changeStats(card)">
              <h3>{{ card.name }}</h3>
              <p><img :src="'/images/' + card.pic " alt="food-pic" class="pic"></p>
              <p>Energy: {{ card.energy }}</p>
            </div>
        </div>
        <div class="trainings">
            <div v-for="card in $store.state.trainings" :key='card.name'  class="training-card" @click="changeStats(card)">
              <h3>{{ card.name }}</h3>
              <p><img :src="'/images/' + card.pic " alt="training-pic" class="pic"></p>
              <p>Energy: {{ card.energy }}</p>
            </div>
        </div>
    </section>
    
    
  </main>
</template>

<script>
import foodCard from './foodCard.vue'
import trainingCard from './trainingCard.vue'

export default {
  data : function (){
    return{
     index1: Math.floor(Math.random() * this.$store.state.foods.length), 
     index2: Math.floor(Math.random() * this.$store.state.foods.length)
    }
  },
  computed: {
      energy (){
        return this.$store.state.energyPoints},
      health () {
        return this.$store.state.healthPoints},
      counter () {
        return this.$store.state.counter
      }
  },
  methods : {
      changeStats: function (card) { 
  
          if(this.counter < 5){
              this.$store.commit('change', card) 
              console.log(this.$store.state.energyPoints)
              console.log(this.$store.state.healthPoints)
              console.log(this.$store.state.counter)

          } else {
              this.restart()
          }
        }, 
        restart: function () { 
            this.$store.commit('restart')}
},

  mounted () {
    console.log(this.$store.state.trainings)
    console.log(this.$store.state.foods)
    console.log(this.index1 + ' ' + this.index2)

},
  name: 'Play',
  components: {
    foodCard,
    trainingCard
  }
}
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: rgb(65, 224, 224);
        color: rgb(54, 52, 52);
        font-weight:bolder
    }

    header p {
        padding: 0 1em;
    }
    .foods, .trainings{
      display: grid;
      grid-template-columns: auto auto auto;
      column-gap: 1em;
    }

    .foods{
      border-right: 2px solid gray;
    }
    .all-cards{
        margin: 1em 0;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 50% 50%;        
        align-items: center;
        justify-content: center;
        height : 70vh
    }

    .food-card:hover, .training-card:hover{
        cursor: pointer;
    }

    .pic{
      height: 8em
    }
   
   .restart{
     border: 1px solid rgb(2, 2, 46);
     border-radius: 0.5em;
     padding: 0.5em;
     background-color: white;
     color: rgb(2, 2, 46);
     cursor: pointer;

   }
</style>