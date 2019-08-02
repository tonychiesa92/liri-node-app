require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format();

var action = process.argv[2];
// var value = process.argv[3];



switch (action) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThis();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;
}

function concertThis() {

    // Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
    var axios = require("axios");

    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the artist/band names
    var artist = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            artist = artist + "+" + nodeArgs[i];
        } else {
            artist += nodeArgs[i];

        }
    }

    // Then run a request with axios to the Bands In Town API with the artist/band specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
        function (response) {
            
            console.log("Venue: " + response.data[0].venue.name);
            console.log("City: " + response.data[0].venue.city);
            console.log("Date: " + moment().format("MM/DD/YYYY"));// NEED TO USE MOMENT TO FORMAT "MM/DD/YYYY"

        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function spotifyThis() {

    var nodeArgs = process.argv;
    var songName = "";

    // If no song is provided then your program will default to "The Sign" by Ace of Base.

    if (nodeArgs.length <= 3) {
        songName = "the+sign+ace+of+base";
    } else {

        for (var i = 3; i < nodeArgs.length; i++) {
            if (i > 3 && i < nodeArgs.length) {
                songName = songName + "+" + nodeArgs[i];
            } else {
                songName += nodeArgs[i];
            }
        }
    }

    spotify
        .search({ type: 'track', query: songName })

        .then(function (response) {

            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song: " + response.tracks.items[0].name);
            console.log("Preview: " + response.tracks.items[3].preview_url);
            console.log("Album: " + response.tracks.items[0].album.name);

        })
        .catch(function (err) {
            console.log(err);
        });

}



function movieThis() {

    var axios = require("axios");

    var nodeArgs = process.argv;
    var movieName = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        } else {
            movieName += nodeArgs[i];
        }
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Movie title: " + response.data.Title);// Movie title
            console.log("Release Year: " + response.data.Year);// Year movie came out
            console.log("IMDB rating: " + response.data.imdbRating);// IMDB rating
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);// Rotten Tomatoes rating
            console.log("Country: " + response.data.Country);// Country where movie was produced
            console.log("Language: " + response.data.Language);// Language of the movie
            console.log("Plot: " + response.data.Plot);// Plot of the movie
            console.log("Actors: " + response.data.Actors);// Actors in the movie
        })
        .catch(function (error) {
            if (error.response) {

                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);
            } else {

                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}