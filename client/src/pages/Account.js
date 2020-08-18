import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/AccountDetails.css";

function AccountDetails() {
  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      // setData(res.data);
      console.log("LOCAL STORAGE WORKS");
      const storage = localStorage.getItem("user");
      if (storage) {
        setData(JSON.parse(JSON.stringify(res.data)));
      }
    });
  };

  // const logOut = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "https://localhost:4000/logout",
  //   }).then((res) => {
  //     setData(null);
  //   });
  // }

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    console.log("LOCAL STORAGE CLEARED");
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <section className="account">
      <div className="account__details">
        <span>ACCOUNT DETAILS</span>
      </div>
      <div className="account__bottom">
        <div className="account_left">
          <div>
            <span className="account__name">
              Welcome, {data ? <span> {data.username}</span> : null}
            </span>
          </div>
          {/* <div className="account__email">
            <span>Hello, {data ? <span>{data.email}</span>
          </div> */}
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
      <button type="button" className="account__logout" onClick={logOut}>
        Log Out
      </button>
    </section>
  );
}

export default AccountDetails;
