const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    bannerList: [],
    defaultIndex: 0,
    dataList: [],
    db: null
  },
  onLoad: function (options) {
    this.setData({
      db: wx.cloud.database()
    })
    this.getBanner()
    this.getHomepageCase()
  },
  getBanner() {
    var that = this

    const coll = this.data.db.collection('banner')
    coll.get().then(res => {
      let list = res.data
      let bannerList = list.map(it => {
        return it.url
      })
      console.log(bannerList)
      if (res.data.length > 0) {
        that.setData({
          bannerList: bannerList
        })
      }
    })
  },
  getHomepageCase() {
    var that = this

    wx.showNavigationBarLoading()
    const coll = this.data.db.collection('case')
    coll.where({
      homepage: true
    }).get().then(res => {
      let list = res.data
      console.log(list)

      if (res.data.length > 0) {
        that.setData({
          dataList: list
        })
      }
      wx.hideNavigationBarLoading()
    })
  },
  previewImage: function (event) {
    util.previewImage(event)
  },
  gotoCase() {
    wx.switchTab({
      url: '/pages/case/index',
    })
  },
  gotoMap() {
    wx.navigateTo({
      url: '/pages/personal/map',
    })
  },
  gotoAbout() {
    wx.navigateTo({
      url: '/pages/personal/about',
    })
  },
  /**
   * 拨打电话
   */
  doPhone() {
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber
    })
  },
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '义置居，德天下 - 邯郸市丛台义德房地产经纪有限公司',
      path: '/pages/index/index'
    }
  }
})