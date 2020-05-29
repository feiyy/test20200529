<template>
	<div>
		<div id="map" style="width:100%;height: 400px;"></div>
		
		<button @click="changemydata">change mydata</button>
	</div>
</template>
<script>
	
	import axios from 'axios'
	import echarts from 'echarts'
	import '../../node_modules/echarts/map/js/china.js'
	export default {
		data(){
			return {
			    mydata:[]
			}
		},
		methods:{
			changemydata()
			{
				this.mydata[1].value = 100;
				
				var optionMap = {
				                /* backgroundColor: '#FFFFFF', */  
				                title: {  
				                    text: '中国疫情地图',
				                    subtext: '',  
				                    x:'left'
				                },  
				                tooltip : {  
				                    trigger: 'item'  
				                },  
				                
				                //左侧小导航图标
				                visualMap: {  
				                    show : true,  
				                    x: 'left',  
				                    y: 'bottom',
									textStyle:{
										fontSize: 6
									},
				                    splitList: [
				                        {start: 1000},{start: 500, end: 999},{start: 100, end: 499},
				                        {start: 10, end: 99},{start: 1, end: 9},
				                    ],  
				                    color: ['#cc0000', '#ff4d4d', '#ff9999','#ffe5e5']
				                },  
				                
				                //配置属性
				                series: [{  
				                    name: '确诊',  
				                    type: 'map',  
				                    mapType: 'china',   
				                    roam: false,
				                    label: {  
				                        normal: {  
				                            show: true,  //省份名称  
											fontSize: 8
				                        },  
				                        emphasis: {  
				                            show: true
				                        }  
				                    },
				                    itemStyle: {
				                         normal: {
				                            borderColor: '#fff',
				                            borderWidth: 1,
				                            areaStyle: {
				                                color: '#cc3735'
				                            },
				                            label: {
				                                show: true,
				                                textStyle: {
				                                    color: 'rgba(139,69,19,1)'
				                                }
				                            }
				                        }, 				                       
				                    }, 
				                    data:this.mydata  //数据
				                }]  
				            };  
				        //初始化echarts实例
				        var myChart = echarts.init(document.getElementById('map'));
				
				        //使用制定的配置项和数据显示图表
				        myChart.setOption(optionMap);
			}
		},
		created()
		{
			axios.get('http://api.tianapi.com/txapi/ncovcity/index?key=229a8745b39d447b656d775df952443c')
			.then(res=>{
				
				console.log(res);
				
				var map = [];
				let list = res.data.newslist;
				for(let i=0; i<list.length;i++)
				{
					var obj = {};
					obj.name = list[i].provinceShortName;
					obj.value = list[i].confirmedCount;
					
					map.push(obj);
				}
				
				this.mydata = map;
				
			})
		},
		watch:{
			mydata(newv)
			{
				console.log(newv);
				var optionMap = {
				                /* backgroundColor: '#FFFFFF', */  
				                title: {  
				                    text: '中国疫情地图',
				                    subtext: '',  
				                    x:'left'
				                },  
				                tooltip : {  
				                    trigger: 'item'  
				                },  
				                
				                //左侧小导航图标
				                visualMap: {  
				                    show : true,  
				                    x: 'left',  
				                    y: 'bottom',
									textStyle:{
										fontSize: 6
									},
				                    splitList: [
				                        {start: 1000},{start: 500, end: 999},{start: 100, end: 499},
				                        {start: 10, end: 99},{start: 1, end: 9},
				                    ],  
				                    color: ['#cc0000', '#ff4d4d', '#ff9999','#ffe5e5']
				                },  
				                
				                //配置属性
				                series: [{  
				                    name: '确诊',  
				                    type: 'map',  
				                    mapType: 'china',   
				                    roam: false,
				                    label: {  
				                        normal: {  
				                            show: true,  //省份名称  
											fontSize: 8
				                        },  
				                        emphasis: {  
				                            show: true
				                        }  
				                    },
				                    itemStyle: {
				                         normal: {
				                            borderColor: '#fff',
				                            borderWidth: 1,
				                            areaStyle: {
				                                color: '#cc3735'
				                            },
				                            label: {
				                                show: true,
				                                textStyle: {
				                                    color: 'rgba(139,69,19,1)'
				                                }
				                            }
				                        }, 
				                       /* emphasis: {
				                            borderColor: 'rgba(0,0,0,0)',
				                            borderWidth: 1,
				                            areaStyle: {
				                                color: 'rgba(255,215,0,0.8)'
				                            },
				                            label: {
				                                show: false,
				                                textStyle: {
				                                    color: 'rgba(139,69,19,1)'
				                                }
				                            }
				                        } */
				                    }, 
				                    data:newv  //数据
				                }]  
				            };  
				        //初始化echarts实例
				        var myChart = echarts.init(document.getElementById('map'));
				
				        //使用制定的配置项和数据显示图表
				        myChart.setOption(optionMap);
			}
		}
	}
</script>

<style>
</style>
