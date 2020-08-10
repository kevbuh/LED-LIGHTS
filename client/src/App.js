import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
    </div>
    </Router>
    
  );
}

export default App;
