<template>
  <div class="main" >
		
		<div class="content">
			  <div class="section flex-box border-box" v-for="(item,index) in lists">
						<div class="dotted-border"></div>
						<div class="circle circle-l"></div>
						<div class="circle circle-r"></div>
						
						<img class="pic" :src="item.img" />
						<div class="mid">
							<div class="name">{{ item.content }}</div>
							<div class="price">在售价   ￥{{ item.cost_price }}</div>
							<div class="price">券后价   ￥<span class="price2">{{ item.current_price }}</span></div>
						</div>
						<img @click="getTicket(item.url)"  class="get" src="../../../static/img/get.png"></img>
				</div>
				
				<div class="section flex-box border-box">
						<div class="dotted-border"></div>
						<div class="circle circle-l"></div>
						<div class="circle circle-r"></div>
						
						<img class="pic" src="../../../static/img/good3.jpg" />
						<div class="mid">
							<div class="name">抖音同款隔离防晒霜喷雾全身防紫外线补水保湿美白男女士学生户外【包邮】</div>
							<div class="price">在售价   ￥48.80</div>
							<div class="price">券后价   ￥<span class="price2">18.80</span></div>
						</div>
						<img  @click="getTicket('€4JNFb0mufGP€')" class="get" src="../../../static/img/get.png"></img>
				</div>
				<div class="section flex-box border-box">
						<div class="dotted-border"></div>
						<div class="circle circle-l"></div>
						<div class="circle circle-r"></div>
						
						<img class="pic" src="../../../static/img/good2.jpg" />
						<div class="mid">
							<div class="name">济公缘青海纯野生黑枸杞狗杞正品黑果枸杞子男肾免洗230g【包邮】</div>
							<div class="price">在售价   ￥79.00</div>
							<div class="price">券后价   ￥<span class="price2">59.00</span></div>
						</div>
						<img  @click="getTicket('€kizCb0mF4vr€')" class="get" src="../../../static/img/get.png"></img>
				</div>
				<div class="section flex-box border-box">
						<div class="dotted-border"></div>
						<div class="circle circle-l"></div>
						<div class="circle circle-r"></div>
						
						<img class="pic" src="../../../static/img/good1.jpg" />
						<div class="mid">
							<div class="name">热烈牌10包美式球形爆米花焦糖奶油甜味即食便携零食小吃批发包邮</div>
							<div class="price">在售价   ￥14.90</div>
							<div class="price">券后价   ￥<span class="price2">9.90</span></div>
						</div>
						<img  @click="getTicket('€UdL0b0mFMHl€')" class="get" src="../../../static/img/get.png"></img>
				</div>
				<div class="section flex-box border-box">
						<div class="dotted-border"></div>
						<div class="circle circle-l"></div>
						<div class="circle circle-r"></div>
						
						<img class="pic" src="../../../static/img/goods4.png" />
						<div class="mid">
							<div class="name">味品堂黄桃罐头425g*6罐装 黄桃对开新鲜水果罐头方便休整箱包邮【包邮】</div>
							<div class="price">在售价   ￥42.00</div>
							<div class="price">券后价   ￥<span class="price2">27.00</span></div>
						</div>
						<img  @click="getTicket('€viIib0NX5jR€')" class="get" src="../../../static/img/get.png"></img>
				</div>
				<div class="section flex-box border-box">
						<div class="dotted-border"></div>
						<div class="circle circle-l"></div>
						<div class="circle circle-r"></div>
						
						<img class="pic" src="../../../static/img/goods5.png" />
						<div class="mid">
							<div class="name">信钻 水果罐头 砀山酸奶黄桃西米露酸奶菠萝罐头 混合装312gX6罐【包邮】</div>
							<div class="price">在售价   ￥38.00</div>
							<div class="price">券后价   ￥<span class="price2">28.00</span></div>
						</div>
						<img  @click="getTicket('€emdZb0N2OEV€')" class="get" src="../../../static/img/get.png"></img>
				</div>
		</div>
		<div class="loading">{{ loadingText }}</div>
		<div class="zanwei"></div>
		<mfooter :nav-active="navactive"></mfooter>
  	
  </div>
</template>

<script>
import mfooter from '@/components/mfooter'
import { goodAll } from '@/api/good'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      navactive:0,
      lists:[],
      ticket_url:"",
      pageNo:1,
      pageSize:5,
      total:0,
      loadingText:"加载中..."
    }
  },

  components: {
    mfooter
  },
	onReachBottom() {
	  this.pageNo = this.pageNo+1;
	  if(this.pageNo>this.total){
	  	this.loadingText="---加载完毕---"
	  }else{
	  	this.getList(this.pageNo,this.pageSize)
	  }
	},
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getList:function(pageNo,pageSize){
    	this.$ajax.post(this.$url+"/goodAll",{pageNo:pageNo,pageSize:pageSize}).then((res)=>{
    		if(res.data.code==0){
    			this.total = Math.ceil(res.data.total/this.pageSize);
    			this.lists =this.lists.concat(res.data.data);
    		}
    	})
    },
    getTicket:function(url){
    	this.ticket_url = url;
      let ticket_url =url;
    	wx.showModal({
			  title: '点击复制后打开淘宝客户端即可',
			  content: ticket_url,
			  confirmText:"复制",
			  showCancel:false,
			  success: function(res) {
			    if (res.confirm) {
			    	wx.setClipboardData({
						  data:ticket_url ,
						  success: function(res) {
						    wx.getClipboardData({
						      success: function(res) {
						        wx.showToast({
										  title: '复制成功',
										  icon: 'success',
										  duration: 2000
										})
						      }
						    })
						  }
						})
								     	
			    }
			  }
			})
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.getList(this.pageNo,this.pageSize);
  }
}
</script>

<style  scoped lang=scss>
.main{background-color: #efefef;}
.content{
	width:96%;margin: 0 auto;padding-top: 10px;
	.section{
		font-size: 0.2rem;width: 100%;height:2.4rem;padding:0.2rem;position:relative;overflow:hidden;color: #fff;background-color:#fff;margin-bottom:0.2rem;
		.dotted-border{border-top:4px dotted #efefef;height: 4px;position: absolute;top: -2px;width: 100%;}
		.circle{position: absolute;width: 0.3rem;height: 0.3rem;background-color: #efefef;border-radius: 50%;z-index: 2;top:1rem;}
		.circle-l{left: -0.15rem;}
		.circle-r{right: -0.15rem;}
		
		.pic{height: 2rem;width: 2rem;}
		.mid{
			flex: 1;padding: 0 5px 0 10px;color: #000000;font-family: Roboto;font-size: 0.26rem;
			.name{overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:2;margin-bottom: 0.3rem; }
			.price{color: dimgray;font-size: 0.3rem;}
			.price2{color: #000000;font-size: 0.4rem;font-weight: bold;}
		}
		.get{width:1rem ;height: 1rem;margin-top: 0.6rem;}
	}

	
}
.zanwei{height: 60px;width: 100%;}
.loading{text-align: center;font-size: 12px;height: 30px;line-height: 30px;}
</style>
