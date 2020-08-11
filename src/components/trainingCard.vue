<template>
  <div></div>
</template>
<script>

export default {
  data : function(){
      return {
          soccer: null,
          swimming : null,
          judo : null,
          hiking : null,
          volleyball : null,
          trainings : []
  }
  },

   methods: {
    trainingCard (name, hp, energy, pic){
    this.name = name;
    this.hp = hp;
    this.energy = energy;
    this.pic = pic;
}
    },

  mounted(){
    this.trainings = [
          this.soccer = new this.trainingCard ('Football', 12, -4, 'football.jpg'),
          this.swimming = new this.trainingCard ('Swimming', 15, -7, 'swimming.jpg'),
          this.judo = new this.trainingCard ('Judo', 11, -3, 'judo.jpg'),
          this.hiking = new this.trainingCard ('Hiking', 9, -2, 'hiking.jpg'),
          this.volleyball = new this.trainingCard ('Volleyball', 13, -4, 'volleyball.jpg')
    ]

      this.$store.state.trainings = this.trainings
      console.log(this.$store.state.trainings)

    },
  name: 'trainingCard'
}
</script>