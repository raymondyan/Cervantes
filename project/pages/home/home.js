Page({
    data: {
        searchKeywords :[
            "防晒套装",
            "鱼肝油",
            "脱毛",
            "精油",
            "奶粉",
            "维生素",
            "护手霜",
            "山羊皂",
            "祛痘",
            "心脑血管",
            "面膜",
            "孕妇DHA",
            "婴幼儿",
            "解酒",
            "无火香薰",
        ],
        showModal: false,
        animationPanel:{}
    },
    onShow: function () {
        let scope  = this;
        const animation = wx.createAnimation({
            duration: 400,
            timingFunction: 'ease'
        });
        scope.animation = animation;
        wx.getSystemInfo({
            success: function(res) {
                const modalHeight = 750 / res.windowWidth * res.windowHeight - 80;
                scope.setData({
                    modalHeight: modalHeight
                });
            }
        })
    },
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
    hideTheModel:  function () {
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
});

