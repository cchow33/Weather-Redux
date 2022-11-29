import React from 'react';
import logo from './logo.svg';
import { DisplayWeather }  from './components/DisplayWeather';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux Weather App</h1>
      <DisplayWeather/>
    </div>
  );
}

export default App;
