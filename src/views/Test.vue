<template>
	<div>
		<chinamap></chinamap>
		<div class="table">
			<div class="t_header">
				<div class="t_column">地区</div>
				<div class="t_column">确诊</div>
				<div class="t_column">死亡</div>
				<div class="t_column">治愈</div>
			</div>
		
		    <div v-for="(p,index) in displaylist" :key="p.provinceShortName">
				 <div class="t_row">
				 	<div class="t_column">{{p.provinceShortName}}</div>
				 	<div class="t_column">{{p.confirmedCount}}</div>
				 	<div class="t_column">{{p.deadCount}}</div>
				 	<div class="t_column">
					{{p.curedCount}}
					  <!-- <i v-if="!p.cityDisplayed" class="fa fa-caret-down" aria-hidden="true" style="font-size:30px;color:darkgray;"></i>
					   <i v-else class="fa fa-caret-up" aria-hidden="true" style="font-size:30px;color:darkgray;"></i> -->
					   <font-awesome-icon :icon="['fas','caret-down']" size="lg" />
					</div>							
				 </div>
				<!-- <div class="cities" :class="{hidecity:!p.cityDisplayed}">
				 	<div class="city" v-for="c in p.cities">
				 		<div class="t_column">{{c.cityName}}</div>
				 		<div class="t_column">{{c.confirmedCount}}</div>
				 		<div class="t_column">{{c.deadCount}}</div>
				 		<div class="t_column">{{c.curedCount}}</div>
				 	</div>						 	
				 </div> -->
			</div>
								
		</div>
		
		 <div style="text-align: center;" @click="flag = !flag">{{message}}</div>
	</div>
</template>

<script>
	//import axios from 'axios'
	//import map from '../components/ChinaMap.vue'
	import chinamap from '@/components/ChinaMap.vue'
	
	export default {
		data(){
			return {
				message:'read more',
				flag:false,//display 6 province
				newslist:[]
			}
		},
		components:{
			chinamap
		},
		computed:{
			displaylist()
			{
				console.log(this.flag);
				if(!this.flag)
				{
					this.message = 'read more';
					var temp = this.newslist.slice(0,6);				
					return temp;
				}
				else
				{
					this.message ='read less';
					return this.newslist;
				}
			}
		},
		created()
		{
			//send ajax request to virus data
			this.$axios.get('http://api.tianapi.com/txapi/ncovcity/index?key=229a8745b39d447b656d775df952443c')
			.then(res => {
				//console.log(res);
				
				this.newslist = res.data.newslist;
				
				
			})	
		}
	}
</script>

<style scoped>
	.t_header
	{
		height: 55px;
		display: flex;
	}
	.t_column
	{
		width:25%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.t_row
	{
		height: 55px;
		display: flex;
		background-color: #ececec;
		border-radius: 15px;
		margin-top:10px ;
	}
	
</style>
