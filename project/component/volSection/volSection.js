Component({
  properties: {
    name: String,
    nameEn: String, 
    choices: Array
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
  attached: function() {
  let scope = this;
  scope.setData({
    dots: Array.from({ length: scope.data.choices.length }, (x, i) => i)
  })
  }
})
