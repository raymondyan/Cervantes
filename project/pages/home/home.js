import { onlySetCartNumber } from '../../service/saveOrder'

Page({
  onLoad: function () {
    let scope = this;
    let tableID = 34932;
    let objects = {tableID,  order_by: 'order'};
    wx.BaaS.getRecordList(objects).then((res) => {
      scope.setData({
        indexStructures: res.data.objects,
      })
    }, (err) => {
      console.log(err);
    })
  },
  onShow: function() {
    onlySetCartNumber()
  },
  onTabItemTap: function() {
    onlySetCartNumber()
  }
});

