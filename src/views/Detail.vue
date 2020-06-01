<template>
	<div>
		this is detail page {{ $route.params.id }}
	</div>
</template>

<script>
	export default{
		
		created(){
			//1. get router param
			console.log(this.$route.params.id);
			//2. send ajax to get detail using aixos
		}, 
		watch:{
			$route(to, from){
				
				console.log(this.$route.params.id);
				
			}
		}
		
	}
</script>

<style>
</style>
