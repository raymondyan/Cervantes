Component({
  properties: {
    images: {
      type: Array,
      observer: function (newVal, oldVal) {
        let scope = this;
        scope.setData({
          dots: Array.from({ length: newVal.length }, (x, i) => i)
        })
      }
    },
  },

  data: {
    current: 0
  },

  methods: {
    changeSlides: function (e) {
      this.setData({
        current: e.detail.current
      })
    }
  },

})
