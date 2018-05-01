Component({
  properties: {
    name: String,
    nameEn: String,
    more: String
  },
  data: {
    current: 0
  },
  methods: {
    sortBrands: function (brands) {
      const sortedBrands = [];
      sortedBrands.push(brands.slice(0, 6));
      sortedBrands.push(brands.slice(6, 11));
      return sortedBrands
    },
    changeSlides: function (e) {
      this.setData({
        current: e.detail.current
      })
    }
  },
  attached: function () {
    let scope = this;
    let tableID = 34910;
    let objects = {tableID};
    wx.BaaS.getRecordList(objects).then((res) => {
      scope.setData({
        sortedBrands: scope.sortBrands(res.data.objects),
        dots: [0,1]
      })
    }, (err) => {
      console.log(err);
    })
  }
});
