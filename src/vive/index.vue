<template>
  <div id="index">
   <div class="ss">qqq</div>
   <div class="sa">
   		<div v-if='shou'>
   			韩晶么么哒
   		</div>
   		<div v-show='hid'>
   			韩晶么么哒
   		</div>
   		<img v-bind:src='imgs' />
   		<div :style="{color:red}">papap</div>
   		<input type="text" value="小姐姐" v-model="name" />
   		<div>{{name}}</div>
   </div>
   <ul>
   			<li v-for='(item,index) in arr'>
   				<a href="#">
   					<img v-bind:src = "imgs" />
   					{{item}}{{index+1}}
   				</a>
   			</li>
   		</ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
  	return{
  		show:false,
  		hid:true,
  		imgs:require('../assets/01.jpg'),
  		red:'pink',
  		arr:['韩晶','么么哒','啦啦啦'],
  		name:'韩晶'
  	}
  	
  	
  }
}
</script>

<style lang="scss" scope='scope'>
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 .ss{
 	width: 300px;
 	height: 50px;
 	background:pink;
 	border: 1px solid #000;
 	padding: 10px;
 	margin: 0 auto;
 	line-height: 50px;
 }
 .sa{
 	width: 300px;
 	height: 50px;
 	background: red;
 	padding: 10px;
 	margin: 0 auto;
 	line-height: 50px;
 	
 }
 
 li{
 		width: 150px;
 		height: 300px;
 		border: 1px solid #000;
 		list-style: none;
 		float: left;
 		
 	}
}
</style>