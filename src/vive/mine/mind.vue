<template>
  <div id="mind">
   	<ul class="list-1">
  		<li v-for="item in this.$router.options.routes" class="list1-li">
  			
  		<router-link v-for="(child,index) in item.children[1].children":key='mind' :to='{path:child.path}'>{{child.alias}}</router-link>
  		</li>
  	</ul>
  	<div class="content">
  	 <router-view></router-view>
  	 </div>
  </div>
</template>

<script>
export default {
  name: 'mind'
}
</script>

<style>
#mind{
  
 
  color: #2c3e50;
 
  height: 100%;
  
}
.list-li{
	list-style: none;
	float: left;
}
a{
	text-decoration: none;
}
</style>