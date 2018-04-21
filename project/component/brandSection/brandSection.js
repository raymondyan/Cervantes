Component({
  properties: {
    name: String,
    nameEn: String, 
    brands: Array,
    more: String
  },
  data: {
    current: 0
  },
  methods: {
    sortBrands : function(brands){
      var sortedBrands = []
      sortedBrands.push(brands.slice(0,6))
      sortedBrands.push(brands.slice(6, 11))      
      return sortedBrands
    },
    changeSlides: function (e) {
      this.setData({
        current: e.detail.current
      })
    }
  },
  attached: function() {
  let scope = this;
  scope.setData({
    sortedBrands: scope.sortBrands(scope.data.brands),
    dots: Array.from({ length: scope.sortBrands(scope.data.brands).length }, (x, i) => i)
  })
  }
})
