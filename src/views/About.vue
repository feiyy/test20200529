<template>
  <div class="about">
    <div>
		<div>{{count}}</div>
		<ul>
			<li v-for="item in todos">
				{{item.done}}
			</li>
		</ul>
		
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
			},
			todos()
			{
				return this.$store.getters.doneToDos;
			}
		}
		
	}
</script>
