import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);
  //* as the Login comp is rendered from App comp, useEfffecct is used here to execute once
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }

    console.log('Your token is', _token);
    // console.log('Token State is', token);
    //* TO hide the acces token from url for security
    window.location.hash = '';
  }, []);
  return (
    <div className="app">
      {console.log('Token State is', token)}
      {token ? <h1>Logged in</h1> : <Login />}
    </div>
  );
}

export default App;
