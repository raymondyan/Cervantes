import { addUnpaidOrder } from '../../service/saveOrder'

Component({
  properties: {
    showPanel: {
      type: Number,
      value: -1,
      observer: function (newVal, oldVal) {
        let scope = this;
        scope.animation.translateY(newVal * -500).step();
        scope.setData({
          animationChooser: this.animation.export(),
        })
      }
    },
    choices: Array
  },
  data: {
    count: 1,
    animationChooser: {},
    index: 0
  },
  attached: function () {
    let scope = this;
    scope.setData({
      choosenSku: scope.data.choices[0].sku
    })
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
  },
  methods: {
    minusMount: function () {
      const scope = this;
      scope.setData({
        count: scope.data.count - 1
      })
    },
    addMount: function () {
      const scope = this;
      scope.setData({
        count: scope.data.count + 1
      })
    },
    changeMount: function(e){
      const scope = this;
      const count = parseInt(e.detail.value) === 0 ? 1 : parseInt(e.detail.value) ;
      scope.setData({
        count
      })
    },
    chooseIt: function (e) {
      this.setData({
        index: e.currentTarget.dataset.index,
        choosenSku: e.currentTarget.dataset.sku
      })
    },

    addProductToCart: function() {
      const goods = this.data.choices[this.data.index];
      const count = this.data.count
      const order = {
        ...goods, count, selected: false
      }
      addUnpaidOrder(order);
      this.closePanel();
    },

    addToCart: function () {
      this.addProductToCart();
      this.triggerEvent('addtocart')
      wx.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
    },

    goToCheckOut: function(){
      this.addProductToCart();
      this.triggerEvent('gotocart')
    },

    closePanel: function () {
      this.triggerEvent('taptouchlayer')
    }
  }
})
