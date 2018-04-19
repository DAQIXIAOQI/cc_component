//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code);
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx0249c48751160f02&secret=9f3210bd634bf24ea13f067b83b9beab&js_code='+res.code+'&grant_type=authorization_code',
          success(res){
            console.log(res);
          }
        })
      }
    })

  },
  globalData: {
    userInfo: null
  }
})