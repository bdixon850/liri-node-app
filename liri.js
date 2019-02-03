require("dotenv").config();

const axios = require('axios');

const command = process.argv[2];
const value = process.argv[3];
const Spotify = require('node-spotify-api');

const spotify = new Spotify({
    id: 'fff3f7bff4d04183b2ed49c6a360181d',
    secret: 'eabd1489ec9b457d8e5a2ad2564b291f'
  });

  function getSpotify(item) {
    spotify.search({ query: item, type: 'track', limit: 1}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log("Artist Name: " + data.item); 
      });
  } 
  


function myBands(artist){
    
    const url = "https://rest.bandsintown.com/artists/" + artist + "/events?"

    axios.get(url, {
        params: {
          app_ID: "codingbootcamp"
        }
      })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

}

function myMovie(){
  
  const url = 'http://www.omdbapi.com/?apikey=[674655e8]&'

  axios.get(url, {
    params: {
      app_ID: 'codingbootcamp'
    }
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

switch(command) {
  case 'concert-this':
    myBands(value);
    break;

  case 'spotify-this-song':
    getSpotify(value);
    break;

  case 'movie-this':
    myMovie(value);
    break; 
  default:
    console.log('Please enter one of the following commands\n node liri.js concert-this song_value \n node liri.js spotify-this-song value');
}



