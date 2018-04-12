//index.js
//获取应用实例
const app = getApp()
import list from './config.js';
Page({
  data:{
  },
  onReady(){
    this.setData({
      listD: list,
    });
  }  
})
