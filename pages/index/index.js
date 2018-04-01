//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    btn:{
      name:'aa',
      id:'0'
    },
    circleList:[
      {
        text:'录音',
        style:'',
        callback: true,
        mark:'record'
      },
      {
        text: '背景音乐',
        style: '',
        callback: true,
        mark: 'bgmusic'
      },
      {
        text: '点赞数',
        style: '',
        callback: true,
        mark: 'like'
      }
    ],
    selectList:{

    },
    ajaxData:{
      pageNum:1
    }
  },
  onLoad(){
    this.fulist = this.selectComponent("#fulist");
    this.editBox = this.selectComponent("#editBox");
  } 
  ,
  click(){
    this.fulist.toggle();
  },
  clickEdit(){
    this.editBox.toggle();
  }
  ,
  con:function(e){
    console.log(e);
  },
  consoleGlob(){
    console.log(app.globalData);
  }

})
