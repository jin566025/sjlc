<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
.border-box{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
.flex-box{display: flex;display: -ms-flexbox;display: -webkit-flex;}
.clear{clear: both;}
.fl{float: left;}
.fr{float: right;}

</style>
