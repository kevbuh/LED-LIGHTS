import React from "react";
import "../css/HomeScreen.css";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <section className="homescreen">
      <div className="homescreen__info">
        <div className="homescreen__logo">
          <h1>GRAVITY LEDs</h1>
          <h2 className="homescreen__logoInfo"> #1 Rated Custom LED Lights</h2>
        </div>
        <div className="homescreen__button">
          <Link to="/shop" className="homescreen__buttonField">
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
