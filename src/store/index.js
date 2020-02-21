import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import getters from "./getters"
export default new Vuex.Store({
  state: {
    WIN_WIDTH: window.screen.width,
    WIN_HEIGHT: window.screen.height,
    CLI_WIDTH: document.body.offsetWidth,
    CLI_HEIGHT: document.body.offsetHeight,
    search:''
  },
  mutations: {
    resize(state,payload) {
      state.CLI_WIDTH = document.body.offsetWidth
      state.CLI_HEIGHT = document.body.offsetHeight
    },
    search(state,payload){
      state.search = payload.trim()
    }
  },
  actions: {
  },
  modules: {
  },
  getters
})
