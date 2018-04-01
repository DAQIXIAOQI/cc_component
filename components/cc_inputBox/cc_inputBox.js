const app = getApp()
Component({
  properties: {
   
    name: {
      type: String,
      value: ''
    },
    cname: {
      type: String,
      value: '名称'
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
      let value = (e.detail ? e.detail.value : e);
      if (app.globalData[this.data.setglobal] && app.globalData[this.data.setglobal][this.data.setglobal]) {
        app.globalData[this.data.setglobal][this.data.name].value = value;
      }
      else {
        if (!app.globalData[this.data.setglobal]){
          app.globalData[this.data.setglobal] = {};
        }   
        let obj = this.data;
        obj.value = value;
        app.globalData[this.data.setglobal][this.data.name] = obj;  
      }
      this.setData({"value":value})
    },
    clear() {
      this.setData({
        value: ''
      });
      this.input("");
    }
  }
})
