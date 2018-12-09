var moment = require('moment');
moment().format();
var request = require("request");
var fs = require("fs");


// Create the bands constructor
var BANDS = function() {
  // divider will be used as a spacer between the bands data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findConcert takes in the name of an artist and searches the bandsintown API
  this.findConcert = function(artist) {
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body)[0];
      var unformattedTime =  JSON.parse(body)[0].datetime;
      var time = moment(unformattedTime).format("MMMM Do YYYY, h:mm a");

      // bandData ends up being the string containing the band data we will print to the console
      var bandData = [
        "Name of Venue: " + jsonData.venue.name,
        "Venue Location: " + jsonData.venue.city + ", " + jsonData.venue.region,
        "Date of the Event: " + time,
      ].join("\n\n");

      // Append bandData and the divider to log.txt, print bandData to the console
      fs.appendFile("log.txt", bandData + divider, function(err) {
        if (err) throw err;
        console.log(bandData);
      });
    });
  };
};

module.exports = BANDS;
