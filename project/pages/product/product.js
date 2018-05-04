Page({
  data: {
    count: 1,
    showChooseProduct: -1,
    productImages: [
      "https://img.xiaohongshu.com/items/1346be69826e4cc87e4806e270d7d812@800w_90Q_1x_2o.jpg",
      "https://img.xiaohongshu.com/items/05116294ecbc225485b987e664c6c2f5@800w_90Q_1x_2o.jpg",
      "https://img.xiaohongshu.com/items/0624b3d016213470ecc5be0f447cbb22@800w_90Q_1x_2o.jpg"
    ],
    profile: {
      name: "一抹一擦净洁滑白 · 温和无痛系列脱毛膏 150g",
      tag: "温和脱毛清凉一夏",
      price: 89,
      priceold: 99,
      brand: "Nair"
    },
    brandProfile: {
      name: "Nair",
      imageUrl: "https://cloud-minapp-13706.cloud.ifanrusercontent.com/1fDsRoWqTAUxPSap.jpg"
    },
    configs: [
      {
        props: "商品名称",
        value: "温和无痛系列脱毛膏"
      },
      {
        props: "重量",
        value: "150g"
      },
      {
        props: "品牌",
        value: "Nair"
      },
      {
        props: "是否为特殊用途化妆品",
        value: "否"
      },
      {
        props: "产地",
        value: "澳大利亚"
      },
      {
        props: "规格类型",
        value: "正常规格"
      },
      {
        props: "功效",
        value: "脱毛"
      },
    ],
    details: [
      "http://img30.360buyimg.com/popWaterMark/jfs/t16222/259/2654257875/139294/6c5fa259/5ac1eb06N20654780.jpg",
      "http://img30.360buyimg.com/popWaterMark/jfs/t16885/133/1238449157/133880/d8a633a/5ac1eb06N0781c30c.jpg",
      "http://img30.360buyimg.com/popWaterMark/jfs/t18841/86/1243923558/213232/fa157f47/5ac1eb06Nc18d212e.jpg",
      "http://img30.360buyimg.com/popWaterMark/jfs/t19516/68/1196546892/214843/f2fbec94/5ac1eb07Nd592e659.jpg",
      "http://img30.360buyimg.com/popWaterMark/jfs/t17641/294/1205246507/203956/7528a330/5ac1eb07N2702962f.jpg",
      "http://img30.360buyimg.com/popWaterMark/jfs/t16675/110/1317602838/174766/3f25f8bd/5ac1eb06N4db96d68.jpg",
      "http://img30.360buyimg.com/popWaterMark/jfs/t18628/187/1239857412/196224/cfd61865/5ac1eb06N090b678e.jpg"

    ],
    productChoices: [
      {
        sku: 1,
        type: "150g * 1",
        imageUrl: "https://img.xiaohongshu.com/items/1346be69826e4cc87e4806e270d7d812@800w_90Q_1x_2o.jpg",
        available: true,
        price: 89
      },
      {
        sku: 15,
        type: "150g * 2",
        imageUrl: "https://img.xiaohongshu.com/items/630de6a255136f1055948424e22d4a62@800w_90Q_1x_2o.jpg",
        available: true,
        price: 109
      },
      {
        sku: 16,
        type: "150g * 3",
        imageUrl: "https://img.xiaohongshu.com/items/88846e1abdac8e1b32777278901d6676@800w_90Q_1x_2o.jpg",
        available: false,
        price: 89
      },
    ]
  },
  switchChoosePanel: function () {
    const scope = this;
    scope.setData({
        showChooseProduct: scope.data.showChooseProduct * -1
    })
  }
})