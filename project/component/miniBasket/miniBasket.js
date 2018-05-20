Component({
  properties: {
    showPanel: {
      type: Number,
      value: -1,
      observer: function (newVal, oldVal) {
        let scope = this;
        scope.animation.translateY(newVal * -460).step();
        scope.setData({
          animationCart: this.animation.export(),
        })
      }
    },
    orders : Array
  },
  data: {
    animationCart: {},
  },
  methods: {
    closePanel: function () {
      this.triggerEvent('taptouchlayer')
    },
    goToCheckOut: function () {
      this.triggerEvent('gotocart')
    },
  },
  attached: function() {
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
  }
})
