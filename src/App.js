import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();
  //* as the Login comp is rendered from App comp, useEfffecct is used here to execute once
  useEffect(() => {
    const hash = getTokenFromUrl();
    //* TO hide the acces token from url for security
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);

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

    console.log('Your token is', _token);
    // console.log('Token State is', token);
  }, []);
  console.log('From Spotify-ContextAPI', user);

  return (
    <div className="app">
      {console.log('Token State is', token)}
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
