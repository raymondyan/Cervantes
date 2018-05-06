import { onlySetCartNumber } from '../../service/saveOrder'

Page({

  data: {
    deliveries: [
      {
        orderId: "YJY0707",
        desc: "澳佳宝鱼肝油等4件商品",
        status: "航空件已从悉尼发出",
        statusDate: "2018-04-29 11:23",
        next: "广州口岸"
      },{
        orderId: "ZZY0618",
        desc: "Sukin护肤等三件商品",
        status: "从广州中转发出",
        statusDate: "2018-04-29 11:23",
        next: "北京转运中心"
      },
    ],
    dots: 2,
    current: 0
  },
  changeSlides: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  onShow: function () {
    onlySetCartNumber()
  },
  onTabItemTap: function () {
    onlySetCartNumber()
  }
})