import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Axios from "axios";
// import SimpleAlerts from './MAlerts'
// import FormAlerts from './FormAlerts'
// import TransitionAlerts from './MAlerts'

function SignUp() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
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
        <form>
          <div className="login__textbox">
            <input
              onChange={(e) => setRegisterUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <span className="login__check-message hidden">Required</span>
          </div>
          <div className="login__textbox">
            <input
              onChange={(e) => setRegisterPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
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

          <button onClick={register} className="login__login-btn">
            Sign Up
          </button>

          {/* <div className="login__section">
          <div className="login__or">
            <p>or</p>
          </div>
          <a href="/auth/google" className="login__google-button">
            <i className="fab fa-google left"></i> Log In with google
          </a>
        </div> */}
          <div className="login__privacy-link">
            <a href="/privacy">Privacy Policy</a>
          </div>
        </form>

        <div className="login__dont-have-account">
          Already have an account?
          <a href="/users/login">Sign In</a>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
