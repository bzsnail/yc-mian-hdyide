
Page({
  data: {
    dataList: [],
  },
  onLoad: function () {
    this.getData()
  },
  getData() {
    var that = this

    const db = wx.cloud.database()
    const coll = db.collection('case')
    coll.get().then(res => {
      let list = res.data
      console.log(list)

      if (res.data.length > 0) {
        that.setData({
          dataList: list
        })
      }
    })
  },
  onShareAppMessage: function () {

  }

})