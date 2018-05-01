Component({
  properties: {
    name: String,
    nameEn: String,
    more: String
  },
  data: {},
  methods: {},
  attached: function () {
    let scope = this;
    let tableID = 34908;
    let objects = {tableID};
    wx.BaaS.getRecordList(objects).then((res) => {
      scope.setData({
        products: res.data.objects,
      })
    }, (err) => {
      console.log(err);
    })
  }
});
