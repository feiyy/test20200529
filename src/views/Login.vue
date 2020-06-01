<template>
	<div>
		
		<div>
			<input type="text" v-model="username" placeholder="username" />
		</div>
		
		<div>
			<input type="password" v-model="password" placeholder="password" />
		</div>
		
		<button type="button" @click="login">login</button>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				username:'',
				password:''
			}
		},
		methods:{
			login()
			{
				//sessionStorage is gone only when you close the brower
				sessionStorage.setItem("username",this.username);
			}
		}
	}
</script>

<style>
</style>
