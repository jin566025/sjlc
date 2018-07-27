<template>
	<div class="content clear">
		<div class="navs  fl" :class="{'nav-active':navActive==index}" v-for="(item, index) in navsList" @click="tabNav(item.url)">{{ item.name }}</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				navsList:[
					{name:"优惠券",url:"/pages/index/main"},
					{name:"海淘",url:"/pages/sea/main"},
					{name:"心愿单",url:"/pages/my/main"}
				],
				//navsList:["优惠券","海淘","我的"],
				//navActive:0
			}
		},
		props:{
			navActive:{
				type:"number",
				default:0
			}
		},
		mounted(){

		},
		methods:{
			setId:function(index){
				return "navs_"+(index+1);
			},
			tabNav:function(url){
				 wx.redirectTo({      //关闭当前页面，跳转到应用内的某个页面（这个跳转有个坑，就是跳转页面后页面会闪烁一下，完全影响了我自己的操作体验，太缺德了。）
			          url:url
			     })
			}
		}
	}
</script>

<style scoped lang=scss>

	.content{
		position: fixed;bottom: 0;height: 60px;background-color: #FFFFFF;width: 100%;z-index: 999;border-top: 1px solid gainsboro;color: #555555;
		.navs{width: 33.3%;text-align: center;height: 25px;font-size: 14px;padding-top: 35px;background-position: center 5px ;background-size: 30px;background-repeat: no-repeat;}
		.navs:nth-child(1){background-image: url(../../static/img/nav1.png);}
		.navs:nth-child(1).nav-active{background-image: url(../../static/img/nav1-active.png);color: #EBA944;}
		.navs:nth-child(2){background-image: url(../../static/img/nav2.png);background-size:25px;}
		.navs:nth-child(2).nav-active{background-image: url(../../static/img/nav2-active.png);color: #EBA944;}
		.navs:nth-child(3){background-image: url(../../static/img/nav3.png);background-size:25px;}
		.navs:nth-child(3).nav-active{background-image: url(../../static/img/nav3-active.png);color: #EBA944;}
	}
</style>