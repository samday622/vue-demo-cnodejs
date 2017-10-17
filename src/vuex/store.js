import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex，引入之后用Vue.use进行引用。
Vue.use(Vuex)

const state = {
  count: 0
}
export default new Vuex.Store({
  state,
  mutations: {
    // 加1
    INCREMENT (state) {
      state.count++
    },
    DECREMENT (state) {
      state.count--
    },
    INCREMENT_WITH_VALUE (state, value) {
      state.count += value
    }
  },
  actions: {
    increment ({commit}) {
      commit('INCREMENT')
    },
    decrement ({commit}) {
      commit('DECREMENT')
    },
    incrementWithValue ({commit}, value) {
      let intValue = parseInt(value)
      if (isNaN(intValue)) {
        throw new Error('Not an Interger')
      } else {
        commit('INCREMENT_WITH_VALUE', intValue)
      }
    }
  }
})
