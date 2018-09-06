// import {postAxios} from '../../utils/api'

const state = {
  loading: false,
  count: 0
}
const getters = {
  getListData: function (state) {
    return state.listData
  }
}
const mutations = {
  changStatus (state, payload) {
    state.loading = payload
  },
  setListData (state, payload) {
    state.listData = payload
  },
  increment: (state) => {
    const obj = state
    obj.count += 1
  },
  decrement: (state) => {
    const obj = state
    obj.count -= 1
  }
}

const actions = {
  // GetSearch({commit, state, rootState}, reqData) {
  //   postAxios(commit, Api, reqData, function (data) {
  //     commit("setListData", data)
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
