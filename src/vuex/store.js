import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex，引入之后用Vue.use进行引用。
Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add (state) {
    state.count += 1
  },
  reduce (state) {
    state.count -= 1
  }
}
export default new Vuex.Store({
  state,
  mutations
})
