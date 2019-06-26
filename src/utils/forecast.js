const request = require("request");

const forecast = (latitude, longitude, callback) => {
  // const url =
  //   "https://api.darksky.net/forecast/6bf7dfbfa9ddf86f148341c05c566034/37.8267,-122.4233";

  const url =
    "https://api.darksky.net/forecast/6bf7dfbfa9ddf86f148341c05c566034/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Bad coordinates", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degrees out." +
          " There is a " +
          body.currently.precipProbability +
          "% change of precipitation."
      );
    }
  });
};

module.exports = forecast;
