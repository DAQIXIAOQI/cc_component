const app = getApp()
Component({
  properties: {
    listurl:{
      type:String,
      value:''
    },
    cname: {
      type: String,
      value: '名称'
    },
    name: {
      type: String,
      value: 'null'
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
    isedit:{
      type:Boolean,
      value: false
    }
  },
  data: {

  },
  ready(){
    this.fullist = this.selectComponent("#fulist");
    this.editBox = this.selectComponent("#editBox");
      this.input(this.data.value);
    
  }
  ,
  methods: {
    openList(){
        this.fullist.toggle();
    },
    con(e){
      let val = e.detail.value || e.detail.text ;
      if(this.data.maxlength && (val.length > parseInt(this.data.maxlength))){
        wx.showToast({
          title: '选择的模板过长',
          icon: 'none',
          duration: 1000
        });
        return
      }
      this.setData({
       value:val
      }) ; 
      this.sendVal(this.data.value);
    },
    openEdit(){
        if(!this.data.isedit) return  ;
        this.editBox.setValue(this.data.value);
    },
    sendVal(val){
      this.triggerEvent('saveData',{'value':val});
      this.input(val);
    },
    input(e) {
      let value = (e.detail ? e.detail.value : e);
      if (app.globalData[this.data.setglobal] && app.globalData[this.data.setglobal][this.data.setglobal]) {
        app.globalData[this.data.setglobal][this.data.name].value = value;
      }
      else {
        if (!app.globalData[this.data.setglobal]) {
          app.globalData[this.data.setglobal] = {};
        }
        let obj = this.data;
        obj.value = value;
        app.globalData[this.data.setglobal][this.data.name] = obj;
      }
    }
  }
})
