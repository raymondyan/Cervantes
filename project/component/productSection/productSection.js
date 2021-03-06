Component({
  properties: {
    name: String,
    nameEn: String,
    more: String
  },
  data: {},
  methods: {
    goToProduct: function(e) {
      const sku = e.currentTarget.dataset.sku;
      wx.navigateTo({
        url: '../product/product?skuId=' + '5b016e5a4648023bb4be971b',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
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
