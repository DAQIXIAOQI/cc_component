// pages/example/imgBox/imgBox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temData:{
    title:'tbNotice 顶部/底部提示栏',
    para:{
      key:"tbNotice-para",
      list:[
        {
          "name":"position",
          "type":"String",
          "remark":"为top时位于顶部，为bottom时位于底部",
          "default":"top"
        }, {
          "name": "color",
          "type": "String",
          "remark": "字体颜色",
          "default":'#ffffff'
        }, {
          "name": "bgcolor",
          "type": "String",
          "remark": "背景颜色",
          "default": '#000000'
        }, {
          "name": "automove",
          "type": "Boolean",
          "remark": "当文字长度大于宽度时，是否出现自动滚动",
          "default": 'true'
        },
      ]
    },
    explain:"提示栏，文字长度过长时可拖动/滚动"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})