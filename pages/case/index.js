
Page({
  data: {
    dataList: [],
    db: null
  },
  onLoad: function () {
    this.setData({
      db: wx.cloud.database()
    })
    this.getData()
  },
  getData() {
    var that = this

    wx.showNavigationBarLoading()
    const coll = this.data.db.collection('case')
    coll.get().then(res => {
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
  onShareAppMessage: function () {

  }

})