// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const coll = db.collection('case')

// 云函数入口函数
exports.main = async (event, context) => {

  let { id } = event

console.log(id)

  return coll.where({
    _id: id,
  }).get()
  

}


