require("dotenv").config();

// Create a new objects
var TV = require("./movie");
var keys = require("./keys");
var Music = require("./songs");
var BANDS = require("./bands");
var Spotify = require('node-spotify-api');
var tv = new TV();
var bands = new BANDS();
var music = new Music();
var spotify = new Spotify(keys.spotify);


// // Grab search command line argument
var search = process.argv[2];
// // Joining the remaining arguments since an actor or movie name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search term is provided, search for "Minority Report"
if (!term) {
  term = "Minority Report";
}

// Searches
if (search === "movie-this") {
  console.log("Searching for Movie","\n\n");
  tv.findMovie(term);
 } else if (search === "concert-this") {
  console.log("Searching for Concert","\n\n");
  bands.findConcert(term);
} else if (search === "spotify-this-song") {
  console.log("Searching for Song","\n\n");
  music.findSong(term);}