import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {


  config: {
  	"enablePullDownRefresh": true,
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "首页",
    "backgroundColor": "#eeeeee",
    "backgroundTextStyle": "light"
  }

}