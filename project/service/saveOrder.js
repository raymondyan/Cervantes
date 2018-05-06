import { setCartNumber } from './setCartNumber'
import _ from '../utils/lodash'

const loadUnpaidOrder = () => {
  try {
    var value = wx.getStorageSync('myUnpaidOrder')
    if (value) {
      return value
    }
  } catch (e) {
    console.log(e)
  }
};

const addUnpaidOrder = (order) => {
  let orders = loadUnpaidOrder() || [];
  orders = mergeOrder(orders, order)
  try {
    wx.setStorageSync('myUnpaidOrder', orders)
  } catch (e) {
    console.log(e)
  }
};

const updateUnpaidOrder = (orders) => {
  try {
    wx.setStorageSync('myUnpaidOrder', orders)
  } catch (e) {
    console.log(e)
  }
};

const mergeOrder = (orderList, newOrder) => {
  const ret = _.find(orderList, (o) => o.sku == newOrder.sku)
  if (ret) {
    const orders = _.map(orderList, function (o) {
      if (o.sku == newOrder.sku) {
        o.count = o.count + newOrder.count;
        return o
      } else {
        return o
      }
    })
    return orders
  } else {
    orderList.unshift(newOrder)
    return orderList
  }
}

const onlySetCartNumber = () => {
  const orders = loadUnpaidOrder() || [];
  const totalAmount = _.reduce(orders, function (sum, o) {
    return sum + o.count;
  }, 0);
  setCartNumber(totalAmount);
}

module.exports = { updateUnpaidOrder, loadUnpaidOrder, addUnpaidOrder, onlySetCartNumber };