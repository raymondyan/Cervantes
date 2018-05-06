import { updateUnpaidOrder, onlySetCartNumber, loadUnpaidOrder } from '../../service/saveOrder'
import _ from '../../utils/lodash'
Page({
  data: {
    empty: false,
  },

  goToHome: function () {
    wx.switchTab({
      url: '../../pages/home/home',
    })
  },

  onShow: function () {
    wx.removeTabBarBadge({
      index: 3
    })
    this.loadUnpaidOrder();
  },
  onTabItemTap: function () {
    wx.removeTabBarBadge({
      index: 3
    })
    this.loadUnpaidOrder();
  },
  onLoad: function (options) {
    let scope = this;
    wx.getSystemInfo({
      success: function (res) {
        const modalHeight = 750 / res.windowWidth * res.windowHeight;
        scope.setData({
          modalHeight: modalHeight
        });
      }
    });
    scope.loadUnpaidOrder();
    scope.calculateSelectedUnpaidOrder();
  },

  loadUnpaidOrder: function () {
    const scope = this;
    const myUnpaidOrder = loadUnpaidOrder() || []
    scope.setData({
      myUnpaidOrder
    })
    if (myUnpaidOrder.length === 0) {
      scope.setData({
        empty: true
      })
    }
  },

  chooseIt: function (e) {
    const sku = e.currentTarget.dataset.sku;
    let myUnpaidOrder = this.data.myUnpaidOrder;
    myUnpaidOrder = _.map(myUnpaidOrder, (o) => {
      if (o.sku == sku) {
        o.selected = !o.selected;
        return o
      } else {
        return o
      }
    });
    this.setData({
      myUnpaidOrder
    })
    this.saveMyUnpaidOrder(myUnpaidOrder)
    this.calculateSelectedUnpaidOrder()
  },

  calculateSelectedUnpaidOrder: function () {
    const myUnpaidOrder = this.data.myUnpaidOrder;
    const selectedOrders = _.filter(myUnpaidOrder, { selected: true })
    const totalPrice = _.reduce(selectedOrders, function (sum, o) {
      return sum + o.count * o.price;
    }, 0);
    this.setData({
      totalPrice,
      pickAll: selectedOrders.length === myUnpaidOrder.length
    })
  },

  selectAll: function () {
    let myUnpaidOrder = this.data.myUnpaidOrder;
    let pickAll = this.data.pickAll;
    myUnpaidOrder = _.map(myUnpaidOrder, (o) => {
      o.selected = !pickAll;
      return o
    });
    this.setData({
      myUnpaidOrder
    })
    this.saveMyUnpaidOrder(myUnpaidOrder)
    this.calculateSelectedUnpaidOrder()
  },

  addMount: function(e) {
    const sku = e.currentTarget.dataset.sku;
    let myUnpaidOrder = this.data.myUnpaidOrder;
    myUnpaidOrder = _.map(myUnpaidOrder, (o) => {
      if (o.sku == sku) {
        o.count = o.count + 1;
        return o
      } else {
        return o
      }
    });
    this.setData({
      myUnpaidOrder
    });
    this.saveMyUnpaidOrder(myUnpaidOrder)
    this.calculateSelectedUnpaidOrder()
  },

  minusMount: function (e) {
    const sku = e.currentTarget.dataset.sku;
    let myUnpaidOrder = this.data.myUnpaidOrder;
    myUnpaidOrder = _.map(myUnpaidOrder, (o) => {
      if (o.sku == sku) {
        o.count = o.count - 1;
        return o
      } else {
        return o
      }
    });
    this.setData({
      myUnpaidOrder
    })
    this.saveMyUnpaidOrder(myUnpaidOrder)
    this.calculateSelectedUnpaidOrder()
  },

  saveMyUnpaidOrder: function (myUnpaidOrder){
    updateUnpaidOrder(myUnpaidOrder)
  }


})