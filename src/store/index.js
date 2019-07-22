
import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

let storage = window.localStorage
let isStorageSupport = typeof storage != "undefined"

if (!isStorageSupport) {
  console.log("browser do not support localStorage")
}

export default new Vuex.Store({
  state: {
    currentChannel: storage.getItem('currentChannel')
  },

  mutations: {
    changeChannel(state, item){
      state.currentChannel = item;
      if (isStorageSupport){
        storage.setItem('currentChannel', item);
      }
    }
  }
})
