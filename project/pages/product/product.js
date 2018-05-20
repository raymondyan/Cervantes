import { loadUnpaidOrder } from '../../service/saveOrder'
Page({
  data: {
    count: 1,
    showChooseProduct: -1,
    showCartPanel: -1,
  },
  onLoad: function (options) {
    const skuId = options.skuId;
    this.loadSku(skuId);
    this.loadUnpaidOrder();
  },
  goToCart: function () {
    wx.switchTab({
      url: '../shoppingBasket/shoppingBasket',
    })
  },
  switchChoosePanel: function () {
    const scope = this;
    scope.setData({
      showCartPanel: -1,
      showChooseProduct: scope.data.showChooseProduct * -1
    })
  },
  switchCartPanel: function () {
    const scope = this;
    scope.setData({
      showCartPanel: scope.data.showCartPanel * -1
    })
  },
  checkHasItemInBasket: function (myUnpaidOrder) {
    let scope = this;
    scope.setData({
      empty: myUnpaidOrder.length === 0
    })
  },
  loadSku: function (skuId) {
    const scope = this;
    let tableID = 37225;
    let recordID = skuId;
    let Sku = new wx.BaaS.TableObject(tableID)
    Sku.select(['images', 'name', 'price', 'priceOld', 'productId', 'tags']).get(recordID).then(res => {
      const profile = res.data;
      scope.loadDetail(profile.productId);
      scope.loadBrand(profile.productId);
      scope.loadConfig(profile.productId);
      scope.setData({ profile, productId: profile.productId })
    }, err => {
      console.log(err)
    })
  },

  loadDetail: function (productId) {
    const scope = this;
    let tableID = 37220;
    let query = new wx.BaaS.Query();
    query.compare('productId', '=', productId)
    let Detail = new wx.BaaS.TableObject(tableID)
    Detail.setQuery(query).find().then(res => {
      const details = res.data.objects[0].details;
      scope.setData({ details })
    }, err => {
      console.log(err)
    })
  },
  loadConfig: function (productId) {
    const scope = this;
    let tableID = 37219;
    let query = new wx.BaaS.Query();
    query.compare('productId', '=', productId)
    let Config = new wx.BaaS.TableObject(tableID)
    Config.setQuery(query).select(['props', 'value']).find().then(res => {
      const configs = res.data.objects;
      scope.setData({ configs })
    }, err => {
      console.log(err)
    })
  },
  loadBrand: function (productId) {
    const scope = this;
    let tableID = 37224;
    let recordID = productId;
    let Product = new wx.BaaS.TableObject(tableID)
    Product.select(['brandId']).get(recordID).then(res => {
      const brandId = res.data.brandId;
      let brandTableID = 34910;
      let recordID = brandId;
      let Brand = new wx.BaaS.TableObject(brandTableID)
      Brand.select(['name', 'imageUrl']).get(recordID).then(res => {
        const brand = res.data;
        scope.setData({ brand })
      }, err => {
        console.log(err)
      })
    }, err => {
      console.log(err)
    })
  },
  loadUnpaidOrder: function () {
    const scope = this;
    const myUnpaidOrder = loadUnpaidOrder() || []
    scope.checkHasItemInBasket(myUnpaidOrder)
    scope.setData({
      myUnpaidOrder
    })
  },
})