<template>
  <div class="about">
    <div>
		<div>{{count}}</div>
		
		{{$route.query.id}}
		<router-link to="/about/detail/100">article A</router-link>
		<router-link to="/about/detail/200">article B</router-link>
		<router-link to="/about/detail/300">article C</router-link>
			
		<router-view></router-view>
	</div>
  </div>
</template>

<script>
	export default{
		
		computed:{
			count()
			{
				return this.$store.state.count;
			}
		}
		
	}
</script>
