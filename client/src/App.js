import React from 'react';
import './App.css';
import TestNav from './TestNav'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Footer from './Footer'
import HomeScreen from './HomeScreen'
import Info from './Info'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shop">
          <TestNav />
            <h1>shop</h1>
            <Footer />
          </Route>
          <Route path="/about">
          <TestNav />
            <h1>about</h1>
            <Footer />
          </Route>
          <Route path="/contact">
          <TestNav />
            <h1>contact</h1>
            <Footer />
          </Route>
          <Route path="/cart">
          <TestNav />
            <h1>cart</h1>
            <Footer />
          </Route>
          <Route path="/account">
          <TestNav />
            <h1>account</h1>
            <Footer />
          </Route>
          <Route path="/">
            <TestNav />
            <HomeScreen />
            <Info />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
