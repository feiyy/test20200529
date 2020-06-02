import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  count:100
  },
  mutations: {
	  increment(state, num)
	  {
		  if(num)
		  {
			  state.count +=num;
		  }
		  else
		  {
			    state.count++;
		  }	
	  }
  },
  actions: {
  },
  modules: {
  }
})
