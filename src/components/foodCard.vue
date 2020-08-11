<template>
<div></div>
</template>
  
<script>
export default {
  data: function () {
      return {
          kebabPizza : null,
          thaiSoup : null,
          veganTofu : null,
          baconOmelet : null,
          chickenCasserole : null,
          foods : []
      }
  },

  methods: {
    foodCard(name, hp, protein, fat, carbs, energy, pic){
      this.name = name;
      this.hp = hp;
      this.protein = protein;
      this.fat = fat;
      this.carbs = carbs;
      this.energy = energy;
      this.pic = pic;
    }
  },
  mounted(){
    this.foods=[
        this.kebabPizza = new this.foodCard('Kebab pizza', -15, -5, -5, -5, 10, 'kebab-pizza.jpg'),
        this.thaiSoup = new this.foodCard('Coconut thai soup', 0, 0, 3, -3, 3, 'thai-soup.jpg'),
        this.veganTofu = new this.foodCard('Vegan Tofu and Rice Salad', 15, 5, 5, 5, 10, 'tofu-rice.jpg'),
        this.baconOmelet = new this.foodCard('Bacon, patty and omelet', -1, -4, -1, 4, 5, 'omelette.jpg'),
        this.chickenCasserole = new this.foodCard('Casserole wtih chicken', 11, 5, 1, 5, 8, 'casserole.jpg')
    ]
    
    this.$store.state.foods = this.foods

      console.log(this.$store.state.foods)
    },
  name: 'foodCard'
}
</script>