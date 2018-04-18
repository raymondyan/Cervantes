Component({
  properties: {
    slides: Array,
  },

  data: {
    current: 0
  },

  methods: {
    changeSlides : function(e){
      this.setData({
        current: e.detail.current
      })
    }
  },

  attached: function () {
    let scope = this;
    const itemCount = scope.data.slides.length
    scope.setData({
      itemCount
    })
  }
})
