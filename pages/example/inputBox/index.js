let options = {
  boo: {
    cnameShow:false,
    isrequire:false,
    single:true,
    clear:true,
  },
  str: {
    name: '',
    cname: '',
    setglobal:'',
    placeholder:'',
    value:'',
    maxlength:100,
    notice:'',
    height:'',
    cid:''
  }
};
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temData: {
      title: 'inputBox 输入框组件',
      para: {
        key: "inputBox-para",
        list: [
          {
            "name": "cname",
            "type": "String",
            "remark": "中文名，可用于ui显示",
            "default": "默认"
          }, {
            "name": "name",
            "type": "String",
            "remark": "存储数据的name值",
            "default": ''
          }, {
            "name": "cnameShow",
            "type": "Boolean",
            "remark": "是否在输入框前显示名字",
            "default": 'true'
          }, {
            "name": "isrequire",
            "type": "Boolean",
            "remark": "该输入框是否必填",
            "default": 'false'
          }, {
            "name": "setglobal",
            "type": "String",
            "remark": "重要！存入globaData的组名。存储形式为：app.globalData[setglobal][name]",
            "default": ''
          }, {
            "name": "placeholder",
            "type": "String",
            "remark": "无值时的占位符",
            "default": '请输入[cname]'
          }, {
            "name": "value",
            "type": "String",
            "remark": "初始值",
            "default": ''
          }, {
            "name": "maxlength",
            "type": "Number",
            "remark": "输入最大长度",
            "default": '-1'
          }, {
            "name": "notice",
            "type": "String",
            "remark": "输入最大长度",
            "default": '红色提示语'
          }, {
            "name": "height",
            "type": "String",
            "remark": "输入框高度",
            "default": ''
          }, {
            "name": "single",
            "type": "Boolean",
            "remark": "是否使用单行模式，单行使用input框，多行使用textarea框",
            "default": 'true'
          }, {
            "name": "clear",
            "type": "Boolean",
            "remark": "是否显示清除按钮",
            "default": 'true'
          }, {
            "name": "cid",
            "type": "String",
            "remark": "业务标识，可用于业务样式",
            "default": ''
          }, {
            "name": "事件：input",
            "type": "事件",
            "remark": "当有字符输入时触发的回调，输入值作为参数传出",
            "default": ''
          },
        ]
      },
      explain: "多功能input框"
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady: function () {
    this.inputBox = this.selectComponent("#inputBox");
    this.update();
  },
  toggleBoo(e){
    const obj = e.currentTarget.dataset;
    options.boo[obj.name]=!obj.value;
    this.update();
  },
  update(){
    this.setData({  
      "options": options
    });
    const obj = Object.assign({},options.boo,options.str);
    this.inputBox.anC(obj);
  },
  inputV(e){
    const obj = e.currentTarget.dataset;
    options.str[obj.name] = e.detail.value;
  },
  showGlobal(){
    if (!app.globalData[options.str.setglobal]) {
      wx.showModal({
        title: '全局变量',
        content: '无生成变量',
      })
    }else{
    wx.showModal({
      title: '全局变量',
      content: JSON.stringify(app.globalData[options.str.setglobal]),
    })
    }
  }
})