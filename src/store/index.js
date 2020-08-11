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
