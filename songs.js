var request = require("request");
var fs = require("fs");
var Spotify = require('node-spotify-api');

// Create the TV constructor
var Music = function() {
    // findSong takes in the name of a movie and searches the tvmaze API
  this.findSong = function(spotify, song) {

    spotify.search({

        type: "track",
        query: song,
        limit: "1"
    }, function(err, data) {

        if (err) {
            console.log("Problem with seraching song")
        }
        console.log("Artist: " + data.tracks.items[0].artist[0].name)
        console.log("Song:         " + data.tracks.items[0].name);
        console.log("Album:        " + data.tracks.items[0].album.name);
        console.log("Preview Link: " + data.tracks.items[0].preview_url);
    });
  };
}

module.exports = Music
