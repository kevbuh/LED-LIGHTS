import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/AccountDetails.css";
import { Link } from "react-router-dom";

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
    // Axios({
    //   method: "GET",
    //   withCredentials: true,
    //   url: "http://localhost:4000/logout",
    // }).then(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    console.log("LOCAL STORAGE CLEARED");
    window.location.reload();
    // });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="account">
      <div className="account__details">
        <span>ACCOUNT DETAILS</span>
      </div>
      {data ? (
        <div className="account__bottom">
          <div className="account_left">
            <div>
              <span className="account__name">
                Welcome,
                <br />
                <span className="account__update"> {data.username}</span>
              </span>
            </div>
            <div className="account__email">
              <span className="account__name">
                Email:{" "}
                {data.email ? (
                  <span> {data.email}</span>
                ) : (
                  <div>
                    <span className="account__update">
                      You currently have no phone number linked.
                    </span>
                  </div>
                )}
              </span>
            </div>
            <div className="account__email">
              <span className="account__name">
                Phone Number:{" "}
                {data.phone ? (
                  <span> {data.phone}</span>
                ) : (
                  <div>
                    <span className="account__update">
                      You currently have no email linked.
                    </span>
                  </div>
                )}
              </span>
              <div className="account__history">
                <span>Order History</span>
                <div>
                  <span className="account__update">
                    You haven't placed any orders yet.
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="account__addressTitle">
            <span> Primary Address</span>
          </div>
          <div className="account__email">
            <span>No addresses currently on file</span>
            <span>View addresses (0)</span>
          </div> */}
          </div>
          <div className="account__right">
            <button type="button" className="account__logout">
              <Link to="/update" className="about__updateLink">
                Update Your Information
              </Link>
            </button>
            <span className="account__or">or</span>
            <button type="button" className="account__logout" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div>Please Sign In.</div>
      )}
    </section>
  );
}

export default AccountDetails;
