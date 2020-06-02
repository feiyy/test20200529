<template>
	  <div>
		  <button @click="modifystore">Modify store</button>
	  </div>
</template>

<script>
	export default{
		
		methods:{
			modifystore()
			{
				this.$store.commit('increment',5)
			}
		}
		
	}
</script>

<style>
</style>
