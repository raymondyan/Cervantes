import { onlySetCartNumber } from '../../service/saveOrder'

Page({
  data: {

  },

  onShow: function () {
    onlySetCartNumber()
  },
  onTabItemTap: function () {
    onlySetCartNumber()
  }
})