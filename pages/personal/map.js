
Page({
  data: {
    coordinate: {
      latitude: 36.62584,
      longitude: 114.51087,
    },
    markers: [{
      iconPath: "/images/coordinate-red.png",
      id: 0,
      latitude: 36.625840,
      longitude: 114.510870,
      width: 30,
      height: 30
    }],
  },
  onLoad (options) {
    let lat = options.lat
    let long = options.long
    console.log(lat)
    console.log(long)

    if(lat != null && lat != undefined && long != null && long != undefined) {
      this.setData({
        coordinate: {
          latitude: lat,
          longitude: long
        },
        markers: [{
          iconPath: "/images/coordinate-red.png",
          id: 0,
          latitude: lat,
          longitude: long,
          width: 30,
          height: 30
        }],
      })
    }

  },
  markertap(e) {
    console.log(e.markerId)
  }
})