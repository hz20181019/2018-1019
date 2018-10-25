<template>
  <div id="index">
   	<ul class="list-1">
  		<li v-for="item in this.$router.options.routes" class="list1-li">
  			
  		<router-link v-for="(child,index) in item.children[0].children":key='index' :to='{path:child.path}'>{{child.alias}}</router-link>
  		</li>
  	</ul>
  	<div class="content">
  		<router-view></router-view>	
  	</div>
  	 	 
  </div>
</template>

<script>
export default {
  name: 'index'
  
}
</script>

<style>
#index {
  
 
  color: #2c3e50;
 
  height: 100%;
  
}
.list-1{
	width: 100%;
	height: 50px;
	background: cyan;
	line-height: 50px;
	
}
.list1-li{
	list-style: none;
	float: left;
	width: 300px;
	height: 50px;
	font-size: 16px;
	text-align: center;
	
	
}
a{
	text-decoration: none;
	margin-right:20px ;
}
.content{
	width: 300px;
	height: 100%;
	background: #ccc;
	
}
</style>
