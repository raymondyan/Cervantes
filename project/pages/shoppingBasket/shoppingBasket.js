Page({
  data: {
    empty: true,
    auPostChoices: [
      {
        id: 1990288442,
        image: "http://img12.360buyimg.com/n5/s450x450_jfs/t15568/339/2465866375/325714/78ee8e75/5aaf74a6N63d96cdf.jpg",
        name: "儿童增高补钙+VD软糖强健骨骼肌肉(小黄瓶)",
        brand: "Nature's Way",
        price: 65
      }, {
        id: 1990334354,
        image: "http://img10.360buyimg.com/n5/s450x450_jfs/t17365/70/897692801/170642/3d12290a/5aaf82d8Nb4d52afa.jpg",
        name: "孕妇DHA海藻油60粒胶囊",
        brand: "Bio island",
        price: 159
      }, {
        id: 1990334354,
        image: "http://img13.360buyimg.com/n5/s450x450_jfs/t15151/330/2668917326/307918/77f4a078/5aaf8617N9674ffa1.jpg",
        name: "基础护肤三件套装洗面奶爽肤水乳液补水保湿滋润",
        brand: "Sukin",
        price: 89
      }, {
        id: 1990334354,
        image: "http://img13.360buyimg.com/n5/s450x450_jfs/t16774/135/798050072/104075/edccb442/5aab59f6N1f0438d0.jpg",
        name: "娜缇欧玫瑰补水保湿系列",
        brand: "NATIO",
        price: 109
      },
      {
        id: 1990334354,
        image: "http://img10.360buyimg.com/n5/s450x450_jfs/t15601/101/2498454546/354184/fa15714a/5aaf79a0Nc82fc800.jpg",
        name: "婴幼儿童维生素D滴剂补钙草莓味",
        brand: "Ostelin",
        price: 56
      }, {
        id: 1990334354,
        image: "http://img11.360buyimg.com/n5/s450x450_jfs/t14656/194/2651544435/346247/fbaaf826/5aaf73f7N5ec804f7.jpg",
        name: "益生菌肠胃养护调理.适合6-36月宝宝",
        brand: "Life Space",
        price: 189
      },
    ],
  },

  goToHome: function(){
    wx.switchTab({
      url: '../../pages/home/home',
    })
  },

  onLoad: function (options) {
    let scope = this;
    wx.getStorage({
      key: 'myCart',
      success: function (res) {
        if (res.data.length === 0) {
          scope.setData({
            empty: true
          })
        }
      },
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})