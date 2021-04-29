import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  //* as the Login comp is rendered from App comp, useEfffecct is used here to execute once
  useEffect(() => {
    const hash = getTokenFromUrl();
    //* TO hide the acces token from url for security
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      //*return an user obj from the spotify
      spotify.getMe().then(user => {
        // console.log('From Spotify', user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }

    // console.log('Your token is', _token);
    // console.log('Token State is', token);
    spotify.getUserPlaylists().then(playlists => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      });
    });
  }, []);
  console.log('From Spotify-ContextAPI, User', user);
  console.log('From Spotify-ContextAPI, Token', token);

  return (
    <div className="app">
      {/* {console.log('Token State is', token)} */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
