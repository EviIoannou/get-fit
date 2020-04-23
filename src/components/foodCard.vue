<template>
<div>

</div>
</template>
  
<script>
// function foodCard (name, hp, protein, fat, carbs){
// this.name = name;
// this.hp = hp;
// this.protein = protein;
// this.fat = fat;
// this.carbs = carbs;
// }

// let 



export default {
data(){
  return{
    kebabPizza : null,
    chickenSoup : null
  }

},
  methods: {
    foodCard(name, hp, protein, fat, carbs){
      this.name = name;
      this.hp = hp;
      this.protein = protein;
      this.fat = fat;
      this.carbs = carbs;
    },
    fillDeck(){
      this.kebabPizza = new foodCard('Kebab pizza', -8, 6, 10, 10);
      this.chickenSoup = new foodCard('Chicken soup', 4, 3, 3, 1);
      console.log(this.kebabPizza);
      console.log(this.chickenSoup);
     this.$store.state.foods.push(kebabPizza);
     this.$store.state.foods.push(chickenSoup);
    }
  },
  name: 'foodCard'
}
</script>