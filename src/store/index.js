import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  count:100,
	  todos: [
	        { id: 1, text: '...', done: true },
	        { id: 2, text: '...', done: false }
	      ]
  },
  getters:{
	  doneToDos:state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  
  //asynchronous operation is not allowed in mutations
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
	  },
	  changeTodos(state,arr)
	  {
		  state.todos = arr;
	  }
  },
  
  //asynchronous operation is put in actions
  actions: {
	  
	  changeTodos()
	  {
		  //inside, do something that takes time(ajax), invoke mutations
		  setTimeout(()=>{
		  		  
		  		  let arr = [];
		  		  arr.push({ id: 3, text: '...3', done: true });
		  		  arr.push({ id: 4, text: '...4', done: true });
		  		  
		  		  
		  		 //invoke mutations
		  		  this.commit('changeTodos',arr)
		  		  
		  },1000)
	  }  
  },
  modules: {
  }
})
