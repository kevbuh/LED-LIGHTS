import React, { useState } from "react";
import Axios from "axios";
import "../css/AccountDetails.css";

function AccountDetails() {
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
    <section className="account">
      <div className="account__details">
        <span>ACCOUNT DETAILS</span>
      </div>
      <div className="account__bottom">
        <div className="account_left">
          <div className="account__name">
            <span>
              Welcome,{" "}
              {data ? (
                <h1>Welcome Back {data.username}</h1>
              ) : (
                <h1>Please Sign In</h1>
              )}
            </span>
          </div>
          <div className="account__email">
            <span>kevinbuhler@gmail.com</span>
          </div>
          <div className="account__addressTitle">
            <span> Primary Address</span>
          </div>
          <div className="account__email">
            <span>No addresses currently on file</span>
            <span>View addresses (0)</span>
          </div>
        </div>
        <div className="account__right">
          <div className="account__history">
            <span>Order History</span>
          </div>
          <div>
            <span>You haven't placed any orders yet</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountDetails;
