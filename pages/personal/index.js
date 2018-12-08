const app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {

  },
  /**
   * 拨打电话
   */
  doPhone() {
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber
    })
  },

})