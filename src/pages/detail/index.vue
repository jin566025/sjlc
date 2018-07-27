<template>
	<div>
		<!--<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="500">
		    <block v-for="(item, index) in imgs" :index="index" :key="key">
		        <swiper-item class="swiper-items">
		            <image :src="item" class="slide-image slide-img" mode="aspectFit"/>
		        </swiper-item>
		    </block>
		</swiper>-->
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="500">
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
		</swiper>
		<div class="desc">
			<div class="title clear">
				<div class="title-left fl">SK-II 护肤精华露</div>
				<div class="title-right fr">
					<img class="love" src="../../../static/img/love-active.png" />
					热度：288
				</div>
			
			</div>
			
			<div class="price">$  58 </div>
			
			<div class="content">SK-II始终坚持改写女性肌肤命运的品牌理念，自王牌成分PITERA诞生起，便以其为灵感研发而成了四大王牌产品，深受全球爱用者喜爱，帮助成就肌肤晶莹剔透。
				<br/>深层清洁、保湿、补水、唇膜、防水、防脱、粉刺/抗痘、净化排毒、卷翘、抗菌消炎、抗敏感、抗衰老/抗皱 控油、美白、其他功效、祛斑、去黑眼圈、去屑、去眼袋、润唇膏、晒后修护、收缩毛孔、舒缓肌肤、锁色、提拉紧致、滋润
			</div>
			<div class="add">加入心愿单</div>
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
				imgs:["../../../static/img/ht_good1.jpg","../../../static/img/ht_good1.jpg","../../../static/img/ht_good1.jpg"]
			}
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
	.content{font-size: 0.24rem;line-height: 0.4rem;}
	.tips{font-size: 0.3rem;height: 1rem;line-height: 1rem;margin-top: 0.1rem;text-align: center;}
	.erweima{width:4rem;text-align: center;display: block;margin: 0.5rem auto;}
	.add{background-color:#d3217b ;color: #ffffff;font-size: 0.34rem;width: 6rem;height: 0.8rem;line-height:0.8rem;text-align: center;margin: 0.4rem auto;border-radius: 5px;}
}
</style>