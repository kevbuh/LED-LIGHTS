import React from "react";
import "../css/Lulu.css";

function Lulu() {
  return (
    <section className="lulu">
      <div className="lulu__left">
        <span className="lulu__leftTextTwo">Why we</span>
        <span className="lulu__leftTextOne">made this.</span>
        <span className="lulu__leftTextSmall">
          Here at GravityLEDs, we are commited to making high quality LED
          strips.
        </span>
      </div>
      <div className="lulu__right">
        <img
          src="https://raw.githubusercontent.com/kevinbuhlerr/LED-LIGHTS/master/client/src/images/IMG_5926.jpg"
          alt="lulu"
          className="lulu__image"
        />
      </div>
    </section>
  );
}

export default Lulu;
