<template>
	<div>
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="500">
		    <block v-for="(item, index) in swiperImg" :index="index" :key="key">
		        <swiper-item class="swiper-items">
		            <image :src="item" class="slide-image slide-img" mode="aspectFit"/>
		        </swiper-item>
		    </block>
		</swiper>
		<!--<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="500">
		    <block>
		        <swiper-item class="swiper-items">
		            <img src="../../../static/img/ht_good1.jpg" class="slide-image slide-img" mode="aspectFit" />
		        </swiper-item>
		        <swiper-item class="swiper-items">
		            <img src="../../../static/img/ht_good1.jpg" class="slide-image slide-img" mode="aspectFit" />
		        </swiper-item>
		        <swiper-item class="swiper-items">
		            <img src="../../../static/img/ht_good1.jpg" class="slide-image slide-img" mode="aspectFit" />
		        </swiper-item>
		    </block>
		</swiper>-->
		<div class="desc">
			<div class="title clear">
				<div class="title-left fl">{{ title }}</div>
				<div class="title-right fr">
					<img class="love" src="../../../static/img/love-active.png" />
					热度：{{ hot }}
				</div>
			
			</div>
			
			<div class="price">$  {{ price }} </div>
			
			<div class="content">{{ content }}</div>
			<div class="img-content">
				<img v-for="item in detailImg" class="goods-img" mode="aspectFit" :src="item" />
			</div>
		<!--	<div class="add">加入心愿单</div>-->
			<div class="tips">下单、咨询可戳下方小仙女</div>
			<div class="tips">↓↓↓</div>
			<img class="erweima" src="../../../static/img/erweima.jpg" mode="widthFix" @click="fangda" />
		</div>
			
			

	</div>
</template>

<script>
	export default{
		data(){
			return {
				imgs:["../../../static/img/ht_good1.jpg","../../../static/img/ht_good1.jpg","../../../static/img/ht_good1.jpg"],
				id:'',
				hot:'',
				price:'',
				title:'',
				content:'',
				swiperImg:[],
				detailImg:[]
			}
		},
		created(){
			
		},
		onShow () {
			this.load();
		},
		methods:{
			fangda:function(){
				wx.previewImage({
				  current: 'http://a3.qpic.cn/psb?/V12XbjNF2V4W6c/4kjNd62EGYOPB7Cd.UemFVdr.rOvTUJkcCQxW*QkYDs!/b/dN4AAAAAAAAA&ek=1&kp=1&pt=0&bo=ogKAA6ICgAMBACc!&tl=3&vuin=2658902642&tm=1532678400&sce=60-2-2&rf=viewer_311',
				  urls: ['http://a3.qpic.cn/psb?/V12XbjNF2V4W6c/4kjNd62EGYOPB7Cd.UemFVdr.rOvTUJkcCQxW*QkYDs!/b/dN4AAAAAAAAA&ek=1&kp=1&pt=0&bo=ogKAA6ICgAMBACc!&tl=3&vuin=2658902642&tm=1532678400&sce=60-2-2&rf=viewer_311'],
				  complete:function(){
				  	console.log("aaa")
				  }
				})
			},
			load:function(){
				var option=this.$root.$mp.query
    			this.id = option.id
    			let params={};
    			params.id = option.id;
    			this.$ajax.post(this.$url+"/seaById",params).then((res)=>{
    				if(res.data.code==0){
    					let datas = res.data.data[0];
    					this.hot = datas.hot;
    					this.price = datas.price;
    					this.title = datas.title;
    					this.content = datas.content;
    				}
    			})
    			this.$ajax.post(this.$url+"/seaImgById",params).then((res)=>{
    				if(res.data.code==0){
    					let datas = res.data.data[0];
    					this.swiperImg = datas.swiper_img.split("+++++++++");
    					this.detailImg = datas.detail_img.split("+++++++++");
    				}
    			})
			}
		}
	}
</script>

<style scoped lang=scss>
.zanwei{height: 60px;width: 100%;}
.swiper{
	height: 5rem;text-align: center;
	.swiper-items{
		height:5rem;
		.slide-img{height:5rem;}
	}
}
.desc{
	width: 90%;margin: 0 auto;color: #5B5A5F;
	.title{
		height: 1.4rem;line-height: 1.4rem;
		.title-left{font-size: 0.4rem;font-weight: bold;color: #5B5A5F;}
		.title-right{
			text-align: right;color: #d3217b;font-size: 0.28rem;
			.love{height: 0.4rem;width: 0.4rem;vertical-align: middle;}
		}
	}
	.price{font-size: 0.3rem;height: 1rem;line-height: 1rem;font-size: 0.4rem;font-weight: bold;}
	.img-content{
		.goods-img{width: 100%;margin-top: 0.4rem;}
	}
	.content{font-size: 0.24rem;line-height: 0.4rem;}
	.tips{font-size: 0.3rem;height: 1rem;line-height: 1rem;margin-top: 0.1rem;text-align: center;}
	.erweima{width:4rem;text-align: center;display: block;margin: 0.5rem auto;}
	.add{background-color:#d3217b ;color: #ffffff;font-size: 0.34rem;width: 6rem;height: 0.8rem;line-height:0.8rem;text-align: center;margin: 0.4rem auto;border-radius: 5px;}
}
</style>