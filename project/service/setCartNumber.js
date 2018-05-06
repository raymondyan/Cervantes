const setCartNumber = (number) => {
  const text = number.toString()
  if (number === 0) {
    wx.removeTabBarBadge({
      index: 3,
    })
  } else {
    wx.setTabBarBadge({
      index: 3,
      text: text,
      fail: function (e) {
        console.log(e)
      }
    })
  }
}

module.exports = {
  setCartNumber: setCartNumber
}