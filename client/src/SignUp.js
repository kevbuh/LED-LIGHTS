import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
// import SimpleAlerts from './MAlerts'
// import FormAlerts from './FormAlerts'
// import TransitionAlerts from './MAlerts'
import "./Login.css";

function SignUp() {
  return (
    <section className="login">
      <div className="login__form">
        {/* <div className="logo__code">
        <a href="/"><img src="images/findnue-text.png" alt="." /></a>
      </div> */}

        <Link to="/">
          <h6>Gravity LEDS</h6>
        </Link>
        <Link to="/">
          <h4>Sign Up</h4>
        </Link>

        {/* <TransitionAlerts text={"Hello"} /> */}
        <form action="/users/register" method="POST">
          <div className="login__textbox">
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Enter Name"
              value="{ typeof name != 'undefined' ? name : '' }"
            />
            <span className="login__check-message hidden">Required</span>
          </div>
          <div className="login__textbox">
            <input type="email" placeholder="Email" />
            <span className="login__check-message hidden">Required</span>
          </div>
          <div className="login__textbox">
            <input type="password" placeholder="Password" />
            <span className="login__check-message hidden">Required</span>
          </div>
          <div className="login__textbox">
            <input type="password" placeholder="Confirm Password" />
            <span className="login__check-message hidden">Required</span>
          </div>

          <div className="login__options">
            <label className="login__remember-me">
              <span className="login__checkbox">
                <input type="checkbox" />
                <span className="login__checked"></span>
              </span>
              Remember me
            </label>
            <a href="/">Forgot Password?</a>
          </div>

          <button type="submit" className="login__login-btn" disabled>
            Sign Up
          </button>

          <div className="login__privacy-link">
            <a href="/">Privacy Policy</a>
          </div>
        </form>

        <div className="login__dont-have-account">
          Already have an account?
          <a href="/users/login">Log In</a>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
