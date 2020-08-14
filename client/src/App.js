import React, { useEffect, setState } from "react";
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
import Cart from "./Cart";
import AccountDetails from "./AccountDetails";
import About from "./About";
import Login from "./Login";
import { listLogEntries } from "./API";
import SignUp from "./SignUp";
import Checkout from "./Checkout";
import PrivacyPolicy from "./PrivacyPolicy";
import usePersistedState from "./reducers/localreducer";
import ProductBig from "./ProductBig";
// import HomeTest from "./HomeTest";

const App = () => {
  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
    })();
  }, []);

  // const [{ cart }, dispatch] = useStateValue();

  // // useEffect(() => {
  // //   const data = localStorage.getItem('my-cart')
  // //   if (data) {
  // //     dispatch(JSON.parse(data)
  // // }, []);
  // useEffect(() => {
  //   dispatch({
  //     type: SET_POSTS,
  //     value: JSON.parse(localStorage.getItem("my-cart")) || [],
  //   });
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("my-cart", JSON.stringify({ cart }));
  // });
  usePersistedState();

  // let localCart = localStorage.getItem({ cart });

  // //this is called on component mount
  // useEffect(() => {
  //   //turn it into js
  //   localCart = JSON.parse(localCart);
  //   //load persisted cart into state if it exists
  //   if (localCart) localStorage.setItem("cart", localCart);
  // }, []); //the empty array ensures useEffect only runs once

  // // let localCart = localStorage.getItem("cart");

  // // //this is called on component mount
  // // useEffect(() => {
  // //   //turn it into js
  // //   localCart = JSON.parse(localCart);
  // //   //load persisted cart into state if it exists
  // //   if (localCart) localStorage.setItem("cart", localCart);
  // // }, []); //the empty array ensures useEffect only runs once

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
            {/* <HomeTest /> */}
            <Footer />
          </Route>

          <Route path="/privacy">
            <TestNav />
            <PrivacyPolicy />
            <Footer />
          </Route>

          <Route path="/products/original">
            <TestNav />
            <ProductBig
              id="#8F26HD7"
              title="Gravity Origin"
              price={50}
              // rating={5}
              image="https://images.unsplash.com/photo-1583267926025-393ef3e5f878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            />
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
          <Route path="/cart">
            <TestNav />
            <Cart />
            <Footer />
          </Route>
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
