<template>
	<div>
		<div class="gwc">
			<div class="good flex-box">
				<img class="good-img" src="../../../static/img/ht_good1.jpg" />
				<div class="good-name">SK-II 护肤精华露</div>
				<div class="good-price">
					<div class="good-price2">$58</div>
					<div class="good-price3">移出心愿单</div>
				</div>
			</div>
		</div>
		<div class="zanwei"></div>
	    <mfooter :nav-active="navactive"></mfooter>
	</div>
</template>

<script>
	import mfooter from '@/components/mfooter'
	export default{
		data(){
			return {
				navactive:2,
			}
		},
		components:{
			mfooter
		}
	}
</script>

<style scoped lang=scss>
.zanwei{height: 60px;width: 100%;}
.gwc{
	width: 96%;margin: 0 auto;
	.good{
		width: 100%;height: 2.4rem;align-items:center;
		.good-img{width: 2rem;height: 2rem;}
		.good-name{flex: 1;margin-left: 0.2rem;font-size: 0.36rem;font-weight: bold;color: #5B5A5F;}
		.good-price{
			width: 2.4rem;text-align: center;
			.good-price2{font-size: 0.3rem;height: 1.4rem;line-height: 1.4rem;}
			.good-price3{font-size: 0.24rem;height: 0.6rem;line-height: 0.6rem;width: 1.6rem;background-color: gainsboro;margin: 0 auto;border-radius: 5px;}
		}
	}
}
</style>