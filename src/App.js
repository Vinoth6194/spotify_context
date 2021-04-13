import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  //* as the Login comp is rendered from App comp, useEfffecct is used here to execute once
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log('Your token is', token);
  }, []);
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
