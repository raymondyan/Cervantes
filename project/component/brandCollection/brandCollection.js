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
    fetchProducts: function (collection) {
      let scope = this;
      let tableID = 34923;
      let query = new wx.BaaS.Query();
      query = query.in('sku', collection.productIds);
      const Product = new wx.BaaS.TableObject(tableID);
      Product.setQuery(query).find().then( (res) => {
        collection.products = res.data.objects;
        scope.setData({
          collection
        })
      }, (err) => {
       console.log(err);
      })
    }
  },
  attached: function () {
    let scope = this;
    let tableID = 34922;
    let recordID = scope.data.collectionId;
    let Collection = new wx.BaaS.TableObject(tableID);

    Collection.get(recordID).then( (res) => {
      scope.fetchProducts(res.data)
    }, (err) => {
      console.log(err);
    })
  }
});
