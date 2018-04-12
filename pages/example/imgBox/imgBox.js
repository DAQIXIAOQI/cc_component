// pages/example/imgBox/imgBox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temData:{
    title:'imgBox 图片容器',
    para:{
      key:"imgBox-para",
      list:[
        {
          "name":"src",
          "type":"String",
          "remark":"展示的图片路径",
          "default":""
        }, {
          "name": "preview",
          "type": "Boolean",
          "remark": "点击是否可以预览",
          "default":'false'
        }, {
          "name": "filling",
          "type": "Boolean",
          "remark": "true：自动填充父元素，false：根据宽度自适应",
          "default": 'true'
        },
      ]
    },
    explain:"使图片加载完再显示的一个组件。（透明度渐变淡入）"
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