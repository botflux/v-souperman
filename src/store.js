import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navActive: false
  },
  mutations: {
    setActive: (state, newState) => state.navActive = newState
  },
  actions: {
    setActive: ({ commit }, newState) => commit('setActive', newState)
  }
})
