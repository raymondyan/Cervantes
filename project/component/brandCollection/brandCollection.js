Component({
  properties: {
    collectionId: String,
  },
  data: {
    current: 0
  },
  methods: {
    changeSlides: function (e) {
      this.setData({
        current: e.detail.current
      })
    },
    fetchSkus: function (collection) {
      let scope = this;
      let tableID = 37225;
      let query = new wx.BaaS.Query();
      query = query.in('id', collection.skus);
      const Sku = new wx.BaaS.TableObject(tableID);
      Sku.setQuery(query).find().then( (res) => {
        collection.skus = res.data.objects;
        scope.setData({
          collection,
          dots: Array.from({length: res.data.objects.length + 1}, (x, i) => i)
        })
      }, (err) => {
       console.log(err);
      })
    },
    goToProduct: function (e) {
      const sku = e.currentTarget.dataset.sku;
      wx.navigateTo({
        url: '../product/product?skuId=' + sku,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  attached: function () {
    let scope = this;
    let tableID = 34922;
    let recordID = scope.data.collectionId;
    let Collection = new wx.BaaS.TableObject(tableID);

    Collection.get(recordID).then( (res) => {
      scope.fetchSkus(res.data)
    }, (err) => {
      console.log(err);
    })
  }
});
