Component({
  properties: {
     imgsrc:{
       type:String,
       value:''
     },
    nameText: {
       type: String,
       value: '昵称'
     },
     clickHeaderSrc:{
       type:String,
       value:'pages/index/index'
     }
     
  },
  data: {

  },
  methods: {
    callback:function(){
      this.triggerEvent("click",{name:this.data.nameText,imgSrc:this.data.headerSrc});
    }
  }
})
