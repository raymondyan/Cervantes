Component({
  properties: {
    name: String,
    nameEn: String,
  },
  data: {
    current: 0
  },
  methods: {
    changeSlides: function (e) {
      this.setData({
        current: e.detail.current
      })
    }
  },
  attached: function () {
    let scope = this;
    let tableID = 34921;
    let objects = {tableID};
    wx.BaaS.getRecordList(objects).then((res) => {
      scope.setData({
        choices: res.data.objects,
        dots: Array.from({length: res.data.objects.length}, (x, i) => i)
      })
    }, (err) => {
      console.log(err);
    })
  }
});
