
Page({
  data: {
    caseInfo: [],
    db: null
  },
  onLoad: function (options) {
    this.setData({
      db: wx.cloud.database()
    })
    let id = options.id
    this.getData(id)
  },
  getData(_id) {
    var that = this

    const coll = this.data.db.collection('case')
    coll.where({
      _id: _id
    }).get().then(res => {
      let list = res.data
      console.log(list)

      if(res.data.length > 0) {
        that.setData({
          caseInfo: list[0],
        })
      }

      wx.setNavigationBarTitle({
        title: that.data.caseInfo.name
      })
    })
  },
  onShareAppMessage: function () {

  }
})