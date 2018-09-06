// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    apiKey: '',
    userInfo: {}
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload
    },
    setApiKey (state, payload) {
      state.apiKey = payload
    }
  },
  modules: {
    counter
  }
})

export default store
