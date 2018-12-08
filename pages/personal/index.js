const app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {

  },

  doPhone() {
    let that = this
    wx.showActionSheet({
      itemList: [app.globalData.phoneNumber],
      success(res) {
        console.log(res)
        if (res.tapIndex == 0){
          that.doPhoneCall()
        }
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  /**
   * 拨打电话
   */
  doPhoneCall () {
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber
    })
  }

})