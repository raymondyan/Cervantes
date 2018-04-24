import { categories } from '../../fixture/categories.js'

Page({

  data: {
    curNav: 1,
    curIndex: 0,
    winWidth: 0,
    winHeight: 0,
    animationMarker:{}
  },

  onLoad: function () {
    const animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'ease',
    })

    this.animation = animation
    this.setData({
      categories: categories,
      subCategories: categories[this.data.curIndex].subCategory
    })
  },
  onReady: function () {
    var that = this;
    setTimeout(function () {
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            winWidth: res.windowWidth,
            winHeight: res.windowHeight / (res.windowWidth / 750)
          });
        }
      });
    }, 600);
  },
  switchRightTab: function (e) {
    const id = e.target.dataset.id;
    const index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index,
      subCategories: categories[index].subCategory
    })
    this.moveTabMarker(index)
  },
  moveTabMarker: function(index) {
    this.animation.translateY(index*42).step()
    this.setData({
      animationMarker: this.animation.export()
    })
  }
})  