// components/cc_btnToPage/cc_btnToPage.js
Component({
  properties: {
     text:{
       type:'String',
       value:'默认值'
     },
     url:{
       type:'String',
       value:'page/index/index'
     },
     source:{
       type:'String',
       value:'null'
     },
     data:{
       type:'Object',
       value:''
     }
  },
  data: {

  },
  methods: {
     toUrl:function(){
       let $url = this.data.url;
       let $source = this.data.source;
       let $data = new String();
       for(let name in this.data.data){
         console.log(name,this.data.data[name]);
         $data +='&' + name+'='+this.data.data[name];
       }
       console.log($data);
       wx.navigateTo({
         url: $url + '?source='+$source + $data
       })
     }
  }
})
