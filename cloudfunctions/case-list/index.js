// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  let { q, cate1, cate2, cate3, purity, ratios, sorting, order, pno, isCover } = event


  return await new Promise((resolve, reject) => {

    request(url, function (error, response, body) {

      let list = []
      if (!error && response.statusCode == 200) {
        list = dealImageUrl(body, isCover)
      }
      resolve(list)
    })

  });

}

const getData = () => {
  const db = wx.cloud.database()
  const coll = db.collection('case')

  coll.where({
    _openid: 'user-open-id',
    done: false
  })
    .get({
      success: function (res) {
        // res.data 是包含以上定义的两条记录的数组
        console.log(res.data)
      }
    })
}
