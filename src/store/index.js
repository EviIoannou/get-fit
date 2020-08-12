import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [],
    trainings: [],
    energyPoints : 0,
    healthPoints : 0,
    counter : 0
  },
  mutations: {
    populateDeck(state, payload){
      if (payload.deck === 'foods')  {
        state.foods = payload.values
      }
      else if(payload.deck === 'trainings') {
        state.trainings = payload.values
      }

    },
    change(state, payload) {
        state.energyPoints += payload.energy;
        state.healthPoints += payload.hp;
        state.counter ++;
    },
    restart(state) {
      state.energyPoints = 0;
      state.healthPoints = 0;
      state.counter = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
