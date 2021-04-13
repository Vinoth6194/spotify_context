import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  //* as the Login comp is rendered from App comp, useEfffecct is used here to execute once
  useEffect(() => {
    const hash = getTokenFromUrl();
    const token = hash.access_token;
    console.log('Your token is', token);
    //* TO hide the acces token from url for security
    window.location.hash = '';
  }, []);
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
