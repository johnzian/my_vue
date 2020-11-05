import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mymy:0,
  },
  mutations: {
    changeMymy(state, data){
      Vue.set(state, 'mymy', data)
    },
  },
  actions: {
    changeMymyAction(context, data){
      context.commit("changeMymy", data.myValue);
      if(data.callback){data.callback()}
    },
  },
  modules: {
    
  }
})
