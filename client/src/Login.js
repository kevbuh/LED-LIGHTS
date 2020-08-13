import React from 'react'
import './Login.css'
import {
  Link
} from 'react-router-dom';
import SimpleAlerts from './MAlerts'
import FormAlerts from './FormAlerts'
import TransitionAlerts from './MAlerts'

function Login() {
  return (
  <section className="login">
    <div className="login__form">
      {/* <div className="logo__code">
        <a href="/"><img src="images/findnue-text.png" alt="." /></a>
      </div> */}


      <Link to="/">
        <h6>Gravity LEDS</h6>
      </Link>
      
      {/* <TransitionAlerts text={"Hello"} /> */}
      <form action="/users/login" method="POST">
        <div className="login__textbox">
          <input type="text" placeholder="Username or Email" />
          <span className="login__check-message hidden">Required</span>
        </div>
        <div className="login__textbox">
          <input type="password" placeholder="Password" />
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


          <a href="#">Forgot Password?</a>

        </div>

        <button type="submit" className="login__login-btn" disabled >Log In Now</button>

        {/* <div className="login__section">
          <div className="login__or">
            <p>or</p>
          </div>
          <a href="/auth/google" className="login__google-button">
            <i className="fab fa-google left"></i> Log In with google
          </a>
        </div> */}
        <div className="login__privacy-link">
          <a href="#">Privacy Policy</a>
        </div>

      </form>

      <div className="login__dont-have-account">
        Don't Have an account?
        <a href="/signup">Sign Up</a>
      </div>
    </div>
    </section>
  )
}

export default Login
