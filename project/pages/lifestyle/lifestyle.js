import { onlySetCartNumber } from '../../service/saveOrder'

Page({
  data: {
    blogs: [
      "https://cloud-minapp-13706.cloud.ifanrusercontent.com/1fFX5pyFsmgHzcTa.jpg",
      "https://cloud-minapp-13706.cloud.ifanrusercontent.com/1fFX5pzYbmnMGxFz.jpg",
      "https://cloud-minapp-13706.cloud.ifanrusercontent.com/1fFX5pzOqicxldgG.jpg"
    ],
    lives: [
      {
        avatar:"https://img.xiaohongshu.com/avatar/5ace0797d2c8a55c1132451d.jpg@80w_80h_90q_1e_1c_1x.jpg",
        name: "CC小姐姐_SYD",
        title: "Swisse家的好物推荐",
        image: "https://rpic.douyucdn.cn/live-cover/appCovers/2018/04/28/4846676_20180428183732.jpg"
      },
      {
        avatar: "https://img.xiaohongshu.com/avatar/5acb5f6db46c5d5df5515fa9.jpg@80w_80h_90q_1e_1c_1x.jpg",
        name: "韩漫漫呀",
        title: "每日美妆",
        image: "https://rpic.douyucdn.cn/live-cover/roomCover/2017/10/14/4ef9441c9ca8c808559ce75ef110e135.jpg"
      },
      {
        avatar: "https://img.xiaohongshu.com/avatar/5964c32fb46c5d61981f1465.jpg@80w_80h_90q_1e_1c_1x.jpg",
        name: "暖大君",
        title: "美丽的大堡礁美美的我",
        image: "https://rpic.douyucdn.cn/live-cover/appCovers/2018/04/11/4738971_20180411230925.jpg"
      },
      {
        avatar: "https://img.xiaohongshu.com/avatar/598d977cb46c5d2a9942cbcf.jpg@80w_80h_90q_1e_1c_1x.jpg",
        name: "Maggiekiki卖个梨",
        title: "命是葡萄籽给的！",
        image: "https://rpic.douyucdn.cn/roomCover/2017/07/20/5364d4c9b6dd3cf3c858a5502e304ba4.jpg"
      },
      {
        avatar: "https://img.xiaohongshu.com/avatar/5abda496d2c8a5032d1e4ec5.jpg@80w_80h_90q_1e_1c_1x.jpg",
        name: "Alina球",
        title: "布里斯班小资生活",
        image: "https://rpic.douyucdn.cn/live-cover/appCovers/2018/05/04/4087894_20180504100146.jpg"
      },
      {
        avatar: "https://img.xiaohongshu.com/avatar/5a84370214de4105b03900fb.jpg@80w_80h_90q_1e_1c_1x.jpg",
        name: "Ke_rry",
        title: "开播啦",
        image: "https://rpic.douyucdn.cn/live-cover/roomCover/2018/04/23/21f28f9f174bc147a3144a10bae69296.jpg"
      },
    ],
    dots: 3,
    current: 0
  },
  changeSlides: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
  goToLive: function(){
    wx.navigateTo({
      url: '../live/live'
    })
  },
  onShow: function () {
    onlySetCartNumber()
  },
  onTabItemTap: function () {
    onlySetCartNumber()
  }
})