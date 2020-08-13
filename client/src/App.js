import React, { useEffect } from "react";
import "./App.css";
import TestNav from "./TestNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import HomeScreen from "./HomeScreen";
import Info from "./Info";
import Featured from "./Featured";
import Products from "./Products";
import Contact from "./Contact";
import BigProduct from "./BigProduct";
import OriginalProduct from "./OriginalProduct";
import BottomSection from "./BottomSection";
import Faqs from "./Faqs";
// import Cart from './Cart'
import AccountDetails from "./AccountDetails";
import About from "./About";
import Login from "./Login";
import { listLogEntries } from "./API";
import SignUp from "./SignUp";
import Checkout from "./Checkout";
import HomeTest from "./HomeTest";

const App = () => {
  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
    })();
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users/register">
            <SignUp />
          </Route>

          <Route path="/shop">
            <TestNav />
            {/* <SideNav /> */}
            <Products />
            <HomeTest />
            <Footer />
          </Route>

          <Route path="/products/original">
            <TestNav />
            <BigProduct />
            <Footer />
          </Route>
          <Route path="/checkout">
            <TestNav />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/users/login">
            {/* Add Login Here */}
            <Login />
            {/* <SignIn /> */}
          </Route>

          <Route path="/users/register">{/* Add register Here */}</Route>

          <Route path="/about">
            <TestNav />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <TestNav />
            <Contact />
            <Footer />
          </Route>
          {/* <Route path="/cart">
            <TestNav />
            <Cart />
            <Footer />
          </Route> */}
          <Route path="/account">
            <TestNav />
            <AccountDetails />
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
};

export default App;
