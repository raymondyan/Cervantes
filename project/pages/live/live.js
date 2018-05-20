import _ from '../../utils/lodash'

Page({
  data: {
    scrollTop: 500,
    current: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  changeSection: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  jumpToTab: function (e) {
    this.setData({
      current: e.currentTarget.dataset.tab
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
    this.setData({
      name: e.detail.userInfo.nickName,
      focus: true
    })
  },
  createDanmu: function (e) {
    let scope = this;
    const content = e.detail.value;
    const name = this.data.name;
    if (content.length === 0) {
      return;
    }
    let tableID = 36255
    let Danmu = new wx.BaaS.TableObject(tableID)
    let danmu = Danmu.create()
    let item = { name, content }
    danmu.set(item).save().then(res => {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 1000
      })
      scope.setData({
        emptyValue: ''
      })

    }, err => {
      // err
    })
  },
  onLoad: function (options) {
    let scope = this;
    wx.getSystemInfo({
      success: function (res) {
        const interactHeight = 750 / res.windowWidth * res.windowHeight - 600;
        scope.setData({
          interactHeight: interactHeight
        });
      }
    });
  },
  loadDanmu: function () {
    let scope = this;
    let tableID = 36255;
    var Danmu = new wx.BaaS.TableObject(tableID)

    var query = new wx.BaaS.Query()

    Danmu.setQuery(query).limit(1000).offset(0).orderBy('created_at').find().then(res => {
      scope.setData({
        danmus: res.data.objects,
        toView: 'danmu_' + _.last(res.data.objects).id
      })
    }, err => {
      // err
    })
    
  },
  loadProduct: function () {
    let scope = this;
    let tableID = 34908;
    let objects = { tableID };
    wx.BaaS.getRecordList(objects).then((res) => {
      scope.setData({
        products: res.data.objects,
      })
    }, (err) => {
      console.log(err);
    })
  },
  onReady: function () {
    let scope = this;
    scope.loadDanmu()
    // setInterval(() => { scope.loadDanmu() }, 3000);
    scope.loadProduct();
  },
  onShareAppMessage: function (res) {
    let title = "直播测试";
    let path = '/pages/live/live'
    return {
      title: title,
      path: path
    }
  },
})