import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BottomSection from "./Components/BottomBanner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HomeScreen from "./Components/Welcome";
import AccountDetails from "./pages/Account";
import ChipInfo from "./Components/ChipInfo";
import ProductBig from "./pages/ProductInfo";
import Gallery from "./Components/Gallery";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Why from "./Components/Why";
import About from "./pages/About";
import Login from "./pages/Login";
import Faqs from "./pages/Faqs";
import React from "react";
import "./css/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users/register">
            <SignUp />
          </Route>

          <Route path="/shop">
            <NavBar />
            <Products />
            <Footer />
          </Route>

          <Route path="/privacy">
            <NavBar />
            <PrivacyPolicy />
            <Footer />
          </Route>

          <Route path="/products/original">
            <NavBar />
            <ProductBig
              id="#8F26HD7"
              title="Gravity Origin"
              price={45}
              image="https://images.unsplash.com/photo-1583267926025-393ef3e5f878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            />
            <Footer />
          </Route>

          <Route path="/checkout">
            <NavBar />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/users/login">
            <Login />
          </Route>

          <Route path="/about">
            <NavBar />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <NavBar />
            <Contact />
            <Footer />
          </Route>

          <Route path="/account">
            <NavBar />
            <AccountDetails />
            <Footer />
          </Route>
          <Route path="/faqs">
            <NavBar />
            <Faqs />
            <h1>faqs</h1>
            <Footer />
          </Route>

          <Route path="/">
            <NavBar />
            <HomeScreen />
            <Why />
            <ChipInfo />
            <Gallery />
            <BottomSection />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
