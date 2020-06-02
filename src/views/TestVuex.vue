<template>
	  <div>
		  <div class="block">
		      <span class="demonstration">Switch when indicator is hovered (default)</span>
		      <el-carousel height="150px">
		        <el-carousel-item v-for="item in imgs" :key="item">
		           <img style="width:100%" :src="item" />
		        </el-carousel-item>
		      </el-carousel>
		    </div>
			
		  <el-button type="primary">Primary</el-button>
		  <el-date-picker
		        v-model="value1"
		        type="date"
		        placeholder="Pick a day">
		  </el-date-picker>
		  <i class="el-icon-s-tools"></i>
		  <i class="el-icon-share"></i>
		  <i class="el-icon-delete"></i>
		  <el-button type="primary" icon="el-icon-s-tools">Search</el-button>
		 
		 <div>
			<el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
			
			<el-dialog
			  title="Tips"
			  :visible.sync="dialogVisible"
			  width="30%"
			  :before-close="handleClose">
			  <span>This is a message</span>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">Cancel</el-button>
			    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
			  </span>
			</el-dialog> 
		 </div> 
		 
		  
		  <button @click="modifystore">Modify by mutation</button>
		  
		  <button @click="modifytodos" type="button">modify by action</button>
	  </div>
</template>

<script>
	export default{
		data(){
			return{
				value1:"",
				dialogVisible: false,
				imgs:[
					'https://liangcang-material.alicdn.com/prod/upload/3635c61df0a445d98c36d942553ddc2f.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',
					'https://liangcang-material.alicdn.com/prod/upload/60bcab8339c141d0b03d888c62be7a0a.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',
				'https://liangcang-material.alicdn.com/prod/upload/3635c61df0a445d98c36d942553ddc2f.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100',
				'https://liangcang-material.alicdn.com/prod/upload/60bcab8339c141d0b03d888c62be7a0a.jpg?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100'
				]
			}
		},		
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
			},
			handleClose(done) {
			        this.$confirm('Are you sure to close this dialog?')
			          .then(_ => {
			            done();
			          })
			          .catch(_ => {});
			      }
		}
		
	}
</script>

<style>
</style>
