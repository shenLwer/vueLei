import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName: 'ghostwu'
  },
  mutations : {
    showUserName( state, msg ){
      state.userName = msg.say+msg.age;
    }
  }
})

export default store
