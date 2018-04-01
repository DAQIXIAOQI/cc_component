// components/cc_circleListHorizon/cc_circleListHorizon.js
Component({

  properties: {
     listData:{
       type:Array,
       value:[]
     }
  },
  data: {

  },
  methods: {
     click(e){
       console.log(e);
       let data = e.currentTarget.dataset;
       if(data.callback){
         this.triggerEvent('callback',{mark:data.mark,source:'circleList'});
       }
       else{
         wx.navigateTo({
           url: data.url
         })
       }
     }
  }
})
