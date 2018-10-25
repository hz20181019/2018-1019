import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../admin'
//import index from '../vive/index'
import Index from "../vive/mine/index";
import Mine from '../vive/mine/mind';
import Ove from '../vive/mine/ove';
import Ove1 from '../vive/mine/ove1';
Vue.use(Router)

const router = new Router({
	mode:'hash',
	//hash  就是锚点跳转的标记  /#/index/admin 优点：只是做了标签跳转 不会向后台发送请求，相当于tab切换
	//history:就是浏览器的正规url跳转
//		mode:'history',
  routes: [
    {
      path: '/',//默认路由 进入页面就显示的内容
      name: 'admin',
      component: Admin,
      //嵌套路由
      children:[
      	{
      		path:'/index',alias:'首页',name:'index',component:Index,
      		children:[
      				{
      					path:'/ove',alias:'index三级菜单',name:'ove',component:Ove
      				},
      				{
      					path:'/ove1',alias:'个人中心三级菜单',name:'ove1',component:Ove1
      				}
      		]
      	},
      	{
      		path:'/mind',alias:'个人中心',name:'mind',component:Mine,
      		children:[
      			{
      				path:'/ove1',alias:'个人中心三级菜单',name:'ove1',component:Ove1
      			},
      				{
      					path:'/ove',alias:'index三级菜单',name:'ove',component:Ove
      				}
      		]
      	}
      ]
    }
//  {
//  	path:'/index',
//  	name:'index', 
//  	component: index
//  }
  ]
})
router.replace('/ove')//设置默认显示的内容
export default router;//就是将此路由暴露出去
