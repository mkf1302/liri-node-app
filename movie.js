var request = require("request");
var fs = require("fs");

// Create the TV constructor
var TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findMovie takes in the name of a movie and searches the tvmaze API
  this.findMovie = function(movie) {
    var URL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);

      // movieData ends up being the string containing the movie data we will print to the console
      var movieData = [
        "Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "IMDB Rating: " + jsonData.imdbRating,
        // "Rotten Tomatoes Rating: " + jsonData.Ratings.Source("Rotten Tomatoes"),
        "Country: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Actors: " + jsonData.Actors
      ].join("\n\n");

      // Append movieData and the divider to log.txt, print movieData to the console
      fs.appendFile("log.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log(movieData);
      });
    });
  };
};

module.exports = TV;
