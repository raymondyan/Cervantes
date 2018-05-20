import { addUnpaidOrder } from '../../service/saveOrder'

Component({
  properties: {
    showPanel: {
      type: Number,
      value: -1,
      observer: function (newVal, oldVal) {
        let scope = this;
        scope.animation.translateY(newVal * -500).step();
        scope.setData({
          animationChooser: this.animation.export(),
        })
      }
    },
    productId: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        let scope = this;
        scope.loadSkus(newVal)
      }
    },
  },
  data: {
    count: 1,
    animationChooser: {},
    index: 0
  },
  attached: function () {
    let scope = this;
    const animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease'
    });
    scope.animation = animation;
    wx.getSystemInfo({
      success: function (res) {
        const modalHeight = 750 / res.windowWidth * res.windowHeight;
        scope.setData({
          modalHeight: modalHeight
        });
      }
    });
  },
  methods: {
    minusMount: function () {
      const scope = this;
      scope.setData({
        count: scope.data.count - 1
      })
    },
    loadSkus: function (productId) {
      const scope = this;
      let tableID = 37225;
      let query = new wx.BaaS.Query();
      query.compare('productId', '=', productId)
      let Sku = new wx.BaaS.TableObject(tableID)
      Sku.setQuery(query).select(['id', 'type', 'name', 'price', 'images', 'stock']).find().then(res => {
        const skus = res.data.objects;
        scope.setData({ skus, choosenSku: skus[0].id })
      }, err => {
        console.log(err)
      })
    },
    addMount: function () {
      const scope = this;
      scope.setData({
        count: scope.data.count + 1
      })
    },
    changeMount: function(e){
      const scope = this;
      const count = parseInt(e.detail.value) === 0 ? 1 : parseInt(e.detail.value) ;
      scope.setData({
        count
      })
    },
    chooseIt: function (e) {
      this.setData({
        index: e.currentTarget.dataset.index,
        choosenSku: e.currentTarget.dataset.sku
      })
    },

    addProductToCart: function() {
      const goods = this.data.skus[this.data.index];
      const count = this.data.count
      const order = {
        ...goods, count, selected: false
      }
      addUnpaidOrder(order);
      this.closePanel();
    },

    addToCart: function () {
      this.addProductToCart();
      this.triggerEvent('addtocart')
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
    },

    goToCheckOut: function(){
      this.addProductToCart();
      this.triggerEvent('gotocart')
    },

    closePanel: function () {
      this.triggerEvent('taptouchlayer')
    }
  }
})
