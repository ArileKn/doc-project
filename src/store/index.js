import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stageObj: {
      oneStage: 3,
      twoStage: -1,
      threeStage: -1
    },
    leftBarData: ''
  },
  mutations: {
    stageObj (state, val) {
      state.stageObj = val
    },
    leftBarData (state, val) {
      state.leftBarData = val
    }
  }
})

export default store
