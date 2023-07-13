const request = require("request")

const weather = (coordinates, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=dbad983ca790600699592bb291ff251e&query=" + coordinates + "&units=f"
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(error)
    } else {
      const currentTemp = body.current.temperature
      const rainProb = body.current.precip
      const feelsLike = body.current.feelslike
      //console.log(response.body.current.weather_descriptions[0] + ". It is currently " + currentTemp + "degree F out. It feels like " + feelsLike + " degree out.")
      callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + currentTemp + "degree F out. It feels like " + feelsLike + " degree out.")
    }
  })
}

module.exports = weather
