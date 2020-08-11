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
import Featured from './Featured'
import Products from './Products'
import Contact from './Contact'
import BigProduct from './BigProduct'
import OriginalProduct from './OriginalProduct'
import BottomSection from './BottomSection'
import Faqs from './Faqs'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/shop">
            <TestNav />
            <Products />
            <Footer />
          </Route>
          <Route path="/products/original">
            <TestNav />
            <BigProduct />
            <Footer />
          </Route>

          <Route path="/about">
          <TestNav />
            <h1>about</h1>
            <Footer />
          </Route>
          <Route path="/contact">
          <TestNav />
            <Contact />
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
          <Route path="/faqs">
          <TestNav />
            <Faqs />
            <h1>faqs</h1>
            <Footer />
          </Route>

          <Route path="/">
            <TestNav />
            <HomeScreen />
            <Info />
            <OriginalProduct />
            <Featured />
            <BottomSection />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
