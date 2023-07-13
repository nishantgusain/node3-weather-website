const request = require("request")

const geocode = (address, callback) => {
  const url = "http://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibmlzaGFudGd1c2FpbiIsImEiOiJjbGp1Ynk0dDMwYWYxM2ltajl3ODZ2eW95In0.VqMLsdXMOF61ygkgJzEQ7A&limit=1"
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log("Some error" + error)
      callback(error)
    } else {
      const latitude = body.features[0].center[1]
      const longitude = body.features[0].center[0]
      const location = body.features[0].place_name
      const data = latitude + "" + longitude
      callback(undefined, {
        latitude,
        longitude,
        location
      })
    }
  })
}

module.exports = geocode
