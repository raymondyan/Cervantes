Component({
  data: {
    showModal: false,
    animationPanel: {}
  },
  methods: {
    showTheModal: function () {
      let scope = this;
      scope.setData({
        showModal: true
      });
      scope.animation.translateY(-20).step();
      scope.setData({
        animationPanel: scope.animation.export()
      })
    },
    hideTheModel: function () {
      let scope = this;
      scope.animation.translateY(0).step();
      scope.setData({
        animationPanel: scope.animation.export()
      });
      setTimeout(function () {
        scope.setData({
          showModal: false,
        });
      }, 100)
    },
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
        const modalHeight = 750 / res.windowWidth * res.windowHeight - 80;
        scope.setData({
          modalHeight: modalHeight
        });
      }
    });

    let tableID = 34931;
    let objects = {tableID};
    wx.BaaS.getRecordList(objects).then((res) => {
      scope.setData({
        searchKeywords: res.data.objects,
      })
    }, (err) => {
      console.log(err);
    })
  }
});
