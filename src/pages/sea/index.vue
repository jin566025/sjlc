<template>
	<div class="block" >
	   
		<div class="header clear">
			<div class="navs fl" v-for="(item,index) in navs" :class="{'navs-active': headerNav==index }" @click="tabNav(index)">{{ item }}</div>
		</div>
		<div class="container">
			<!--<div class="list clear" @click="toDetail()"> 
				<div class="img-container">
					<img class="good-img" src="../../../static/img/ht_good1.jpg" mode="aspectFit" lazy-load="true" />
				</div>
				<div class="good-name">SK-II 护肤精华露</div>
				<div class="good-desc">35 年来始终如一。备受瞩目、畅销全球的 SK-II 护肤精华露（神仙水®）蕴含超过90%的天然生物成分PITERA™，集维生素、矿物质和氨基酸等多种微量营养素于一身。SK-II 护肤精华露（神仙水®）改变你的肌肤，令肌肤变得晶莹剔透，嫩滑、紧致、焕发动人光彩。体验 PITERA™ 的魔力所在。</div>
				<div class="good-footer clear">
					<div class="good-footer-left fl">59.00 $</div>
					<div class="good-footer-right fr">
						<img class="love" src="../../../static/img/love-active.png" />
						热度：288
					</div>
				</div>
			</div>-->
			
			<div class="list clear" v-for="(item,index) in lists"  @click="toDetail(item.id)">
				<div class="img-container">
					<img class="good-img" :src="item.imgs" mode="aspectFit" lazy-load="true" />
				</div>
				<div class="good-name">{{ item.title }}</div>
				<div class="good-desc">{{ item.content }}</div>
				<div class="good-footer clear">
					<div class="good-footer-left fl">{{ item.price }} $</div>
					<div class="good-footer-right fr">
						<img class="love" src="../../../static/img/love-active.png" />
						热度：{{ item.hot }}
					</div>
				</div>
			</div>
		</div>

		<div class="loading">{{ loadingText }}</div>
		<div class="zanwei"></div>
	    <mfooter :nav-active="navactive"></mfooter>
    </div>
    
</template>


<script>
	import mfooter from '@/components/mfooter'
	export default{
		data(){
			return {
				navs:["全部","美妆","服饰","吃货","其他"],
				headerNav:0,
				navactive:1,
				imgUrls: [
			      '../../../static/img/good1.jpg',
			      '../../../static/img/good2.jpg',
			      '../../../static/img/good3.jpg'
			    ],
			    indicatorDots: false,
			    autoplay: false,
			    interval: 5000,
			    duration: 1000,
				lists:[],
				pageNo:1,
			    pageSize:5,
			    total:0,
			    loadingText:"加载中...",
			    type:''
			}
		},
		onReachBottom() {
		  this.pageNo = this.pageNo+1;
		  if(this.pageNo>this.total){
		  	this.loadingText="---加载完毕---"
		  }else{
		  	this.getList(this.pageNo,this.pageSize,this.type)
		  }
		},
		created(){
			this.getList(this.pageNo,this.pageSize)
		},
		methods:{
			tabNav:function(index){
				this.headerNav=index;
				this.type = index;
				this.lists=[];
				this.pageNo = 1;
				this.loadingText = "加载中...";
				if(index==0){
					this.getList(this.pageNo,this.pageSize)
				}else{
					this.getList(this.pageNo,this.pageSize,this.type)
				}
			},
			toDetail:function(id){
				wx.navigateTo({    
			         url:"/pages/detail/main?id="+id
			    })
			},
			getList:function(pageNo,pageSize,type){
				let params = {};
				params.pageNo = pageNo;
				params.pageSize = pageSize;
				if(type){
					params.type = type;
				}
				this.$ajax.post(this.$url+"/seaAll",params).then((res)=>{
					let datas = res.data.data;
					if(res.data.code==0){
						if(datas.length==0){
							this.loadingText = "这个暂时没有~";
						}else{
							this.total = Math.ceil(res.data.total/this.pageSize);
							if(this.lists.length==0){
								this.lists = datas;
							}else{
								this.lists =this.lists.concat(datas);
							}
						}
						
					}
					
				})
			}
		},
	    components: {
	        mfooter
	    }
	}
</script>

<style scoped lang=scss>
.zanwei{height: 60px;width: 100%;}
.swiper{
	height: 4rem;
	.swiper-item{
		height: 4rem;text-align: center;width:100%;
		.swiper-img{}
	}
	
}
.title{color: #8C8D91;font-size: 0.54rem;text-align: center;font-weight: bold;height: 1rem;line-height: 1rem;}
.header{
	width: 100%;height: 1rem;line-height: 1rem;font-size: 0.3rem;
	.navs{width: 20%;text-align: center;position: relative;border-bottom: 2px solid #fff;}
	.navs-active{color: #7682F0;font-weight: bold;border-bottom: 2px solid #7682F0;}

}
.container{
	.list{
		width: 82%;margin: 0 auto;height: 7rem;margin-top: 1rem;color: #5B5A5F;
		.img-container{
			width: 100%;height: 4rem;overflow: hidden;
			.good-img{width: 100%;}
		}
		.good-name{font-size: 0.3rem;height: 1rem;line-height:1rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
		.good-desc{font-size: 0.24rem;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;}
		.good-footer{
			height: 1rem;line-height:1rem;
			.good-footer-left{font-size: 0.4srem;width: 40%;}
			.good-footer-right{
				width: 60%;font-size: 0.26rem;text-align: right;color: #d3217b;
				.love{height: 0.3rem;width: 0.3rem;vertical-align: middle;}
			}
		}
	}
}
.loading{text-align: center;font-size: 12px;height: 30px;line-height: 30px;}
</style>