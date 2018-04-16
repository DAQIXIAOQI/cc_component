// pages/example/imgBox/imgBox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temData:{
    title:'userAbstract 个人中心样式',
    para:{
      key:"userAbstract-para",
      list:[
        {
          "name":"imgsrc",
          "type":"String",
          "remark":"头像路径",
          "default":""
        }, {
          "name": "nameText",
          "type": "String",
          "remark": "姓名文字",
          "default":'昵称'
        }, {
          "name": "事件click",
          "type": "事件",
          "remark": "当点击头像时会触发回调，返回头像路径",
          "default": ''
        },
      ]
    },
    explain:"个人中心常用样式"
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
  click(){
    wx.showModal({
      title: '通知',
      content: '你点击了头像',
    })
  }
})