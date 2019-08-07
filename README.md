# liri-node-app

### Overview

LIRI stands for _Language_ Interpretation and Recognition Interface. LIRI is a CLI node application that takes in parameters and gives back data.

LIRI makes searches to the Spotify, Bands In Town, and OMDB APIs and will give back predefined information

### Technologies

* Javascript
* Node.js
* Bands in Town API
* [node-spotify-api package] to recieve information from the Spotify API
* OMDB API
* Axios
*  `fs` Node package
* `dotenv` package to set environment variables to the global `process.env` object in node.
* Use moment to format this as "MM/DD/YYYY"

### Instructions On How To Run The App

1. Clone the repository

2. Run npm install, and the following packages should be installed:

    * Axios
    * Node-Spotify-API
    * Moment
    * DotEnv
    * FS

3. Create a .env file in the same directory as the rest of the files. In the .env file should be:

    '# Spotify API keys'
    'SPOTIFY_ID=your-spotify-ID-here'
    'SPOTIFY_SECRET=your-spotify-secret-here'

### The Commands of LIRI

 * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

### What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.


3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.


### Examples of the app working
