<template>
	<div>
		<div class="gwc">
			<div class="good flex-box">
				
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
	width: 94%;margin: 0 auto;
}
</style>