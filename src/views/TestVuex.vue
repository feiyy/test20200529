<template>
	  <div>
		  <button @click="modifystore">Modify by mutation</button>
		  
		  <button @click="modifytodos" type="button">modify by action</button>
	  </div>
</template>

<script>
	export default{
		
		methods:{
			modifystore()
			{
				//commit means invoke methods in mutations
				this.$store.commit('increment',5)
			},
			modifytodos()
			{
				//dispatch means invoke methods in actions
				this.$store.dispatch('changeTodos')
			}
		}
		
	}
</script>

<style>
</style>
