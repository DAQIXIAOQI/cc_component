const app = getApp()
Component({
  properties: {
    cnameShow:{
      type: Boolean,
      value: true  
    },
    name: {
      type: String,
      value: ''
    },
    cname: {
      type: String,
      value: '默认'
    },
    isrequire: {
      type: Boolean,
      value: false
    },
    setglobal: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    maxlength: {
      type: Number,
      value: -1
    },
    notice: {
      type: String,
      value: ''
    },
    height:{
      type:String,
      value:''
    },
    single:{
      type:Boolean,
      value:true
    },
    clear:{
      type:Boolean,
      value:true
    },
    cid:{
      type:String,
      value:""
    }
  },
  data: {

  },
  ready(){  
       this.input(this.data.value);
  }
  ,
  methods: {
    input(e) {
      let that = this ;
      let value = (e.detail ? e.detail.value : e);
      if(!this.checkLength(value)) {
        wx.showToast({
          title: '输入过长，只能显示'+that.data.maxlength+'个字符',
          icon: 'none',
          duration: 1000
        })
        value = value.slice(0,that.data.maxlength);
      }
      if(this.data.setglobal){
      if (app.globalData[this.data.setglobal] && app.globalData[this.data.setglobal][this.data.setglobal]) {
        app.globalData[this.data.setglobal][this.data.name].value = value;
      }
      else {
        if (!app.globalData[this.data.setglobal]){
          app.globalData[this.data.setglobal] = {};
        }   
        let obj = this.data;
        obj.value = value;
        app.globalData[this.data.setglobal][this.data.name] = {value:obj.value,isrequire:obj.isrequire,cname:obj.cname,maxlength:obj.maxlength,cid:obj.cid};  
      }
      }
      this.setData({"value":value});
      this.triggerEvent('input',{'value':value});
    },
    clear() {
      this.setData({
        value: ''
      });
      this.input("");
    },
    checkLength(e){
     
      if (this.data.maxlength == -1 || e.length < this.data.maxlength ){ 
         return true
       }
       else{
         return false
       }
    },
    anC(obj){
      this.setData(obj);
      this.input(obj.value);
    }
  }
})
