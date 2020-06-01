<template>
  <div id="app">
	<div>
		<button type="button" @click="nav1">navigate1</button>
	</div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
	  <router-link to="/test">Test</router-link>
    </div>
	<keep-alive>
		<router-view/>
	</keep-alive>
    
  </div>
</template>

<script>
	export default{
		methods:{
			nav1()
			{
				//this.$router.push('about');
				//this.$router.push({path:'about'});
				//this.$router.push({name:'About'});
				//this.$router.push({name:'Detail',params:{id:200}});
				//this.$router.push('/about/detail/100');
				this.$router.push({'path':'/about',query:{id:888}});
			}
		}
	}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
