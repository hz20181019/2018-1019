<template>
  <div id="admin">
  	<!--<Head></Head>-->
  	<header class="head-top">yongh</header>
  	<section class="cha">
  		<aside class="nav">
  			<ul class="list">
  				<li v-for="item in routes" class="list-li">
  					<router-link v-for="(child,index) in item.children":key='index' :to='{path:child.path}'>{{child.alias}}</router-link>
  				</li>
  			</ul>
  		</aside>
  		<section class="con">
  			<router-view></router-view>
  			<!--这是显示内容的地方-->
  		</section>
  		
  			
  		
  	</section>
  	
 <!--  <div class="ss">
   		<!--<router-link to="/index">hhh</router-link>-->
   		<!--<div @click='goIndex'>韩晶</div>
   </div>
   <div class="sa">-->
   		<!--<router-link :to="{path:'/index'}">hhh</router-link>-->
   		<!--<div v-if ='!show' >
			摸摸大   			
   		</div>
   		<div v-show ='!hide' >
			摸摸大   			
   		</div>
   		<input type="text" v-model="userName" value="请输入用户名" />
   		<div>{{userName}}</div>
   		。。。。。。。。。。。。。。。
   	<div v-if='name==13'>45</div>
   	<div v-else>
   		韩晶
   	</div>
   	<div v-text='hh'></div>
   	<img v-bind:src='imageSrc'/></img>
   	<div v-bind:style="{background:isred}">摸胸</div>
   	<div v-bind:style="{color:ispink}">摸胸</div>-->
   	<!--<div v-once>{{names}}</div>
   	<div>{{names}}</div>-->
   	<!--<ul>
   		<li v-for='item in arrs'>{{item}}</li>
   	</ul>-->
   <!--<div v-html="msg.title"></div>
   </div>-->
   	
   		
  </div>
  
</template>

<script>
//	import Head from "./components/hed"
export default {
  name: 'admin',
components:{
//	Head
},
  
  
  data(){
  	return{
  		//相当于变量
//		msg:{
//			title:20181019
//		},
//		show:false,
//		hide:true,
//		userName:"韩晶",
//		name:12,
//		hh:'种草莓',
//		isred:'red',
//		ispink:'pink',
//		names:'lal',
//		arrs:['晶晶','晶晶','晶晶','晶晶','晶晶','晶晶'],
//		imageSrc:require('./assets/01.jpg')
			routes:this.$router.options.routes
  	}
  },
  methods:{
//	onceText(){
//		setInterval(()=>{
//			this.names+=10
//		},1000)
  },
  	
  	
//	goIndex(){
//		this.$router.push({
//				path:'/index',
//				name:'index'
//		})
//	console.log(this)
//	this.$router.push('/index')
//	this.$router.replace('/index')
//	}
	
// },
//mounted(){
//	//自执行函数 挂载中的生命周期
//  this.onceText();
//}

}
 

</script>

<style lang="scss" scope='scope'>
.wh{
	width: 100%;
	height: 100%;
}
.back{
	background: pink;
}
#admin {
 
  @extend .wh;
  background: #ccc;
  overflow: hidden;
 /*.ss{
 	width: 300px;
 	height: 50px;
 	background: red;
 	padding: 10px;
 	margin: 0 auto;
 	line-height: 50px;
 }
 .sa{
 	width: 300px;
 	height: 50px;
 	background: pink;
 	padding: 10px;
 	margin: 0 auto;
 	line-height: 50px;
 	li{
 		list-style: none;
 		
 	}}*/
 	.head-top{
 		width: 100%;
 		height: 60px;
 		font: 20px/60px "微软雅黑";
 	
 		background: cornflowerblue;
 		/*position: absolute;
 		top: 0;
 		left: 0;*/
 }
 .cha{
 
 	width: 100%;
 	height: 100%;
 	@extend .back;
 	display: flex;
 	 justify-content:flex-start;

 	
 	.nav{
 		width: 200px;
 		height: 100%;
 		background: red;
 		.list{
 			@extend .wh;
 			.list-li{
 				/*border: none;*/
 			list-style: none;
 			width: 100%;
 			height: 40px;
 			line-height: 40px;
 			a{
 				text-decoration: none;
 				display: block;
 				width: 100%;
 				height: 40px;
 				border: 1px solid #000;
				color: white;
 				}

 		 	}
 		}
 	}
 	.con{
 		flex: 1;
 		height: 100%;
 		background: yellow;
 		font-size:50px ;
 		color: #fff;
 	}
 }
}
</style>
