// components/cc_cartA/cc_cartA.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String,
      value: ''
    },
    imgh: {
      type: String,
      value: 1
    },
    maintext: {
      type: String,
      value: ''
    },
    lefttext: {
      type: String,
      value: ''
    },
    righttext: {
      type: String,
      value: ''
    },
    mark: {
      type: String,
      value: ''
    },
    imgsrc: {
      type: String,
      value: ''
    }
  },
  data: {

  },
  ready() {
    if (this.data.width) {
      let nr = /(\d+)([a-zA-Z]+)/g.exec(this.data.width);
      let temp = {
        value: parseInt(nr[1]) * parseFloat(this.data.imgh),
        unit: nr[2]
      }
      this.setData(
        { imgh: temp.value + temp.unit }
      );
    }
  },
  methods: {
    tap() {
      this.triggerEvent('callback', { 'mark': this.data.mark });
    }
  }
})
