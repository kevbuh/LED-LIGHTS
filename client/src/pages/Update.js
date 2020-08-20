import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

function Update() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  // const useStateWithLocalStorage = (localStorageKey) => {
  //   const [data, setData] = useState(
  //     localStorage.getItem(localStorageKey) || ""
  //   );

  //   useEffect(() => {
  //     localStorage.setItem(localStorageKey, data);
  //   }, [data]);

  //   return [data, setData];
  // };
  let history = useHistory();
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

  useEffect(() => {
    getUser();
  }, []);
  const updateInfo = () => {
    Axios({
      method: "POST",
      data: {
        // username: loginUsername,
        // password: loginPassword,
        email: updateEmail,
        phone: updatePhone,
      },
      withCredentials: true,
      url: "http://localhost:4000/update",
    })
      .then(() => {
        console.log("updated user info");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="login">
      <div className="login__form">
        <h6>Update & Add Information </h6>
        {data ? (
          <div>
            {" "}
            Please email us at: gravityleds@gmail.com to tell use what
            information needs updating.
          </div>
        ) : (
          <div>Please Login</div>
        )}
      </div>
    </section>
  );
}

export default Update;

//   <form>
//     <div className="login__textbox">
//       <input
//         required
//         onChange={(e) => setUpdateEmail(e.target.value)}
//         type="email"
//         placeholder="Email"
//       />
//       <span className="login__check-message hidden">Required</span>
//     </div>
//     <div className="login__textbox">
//       <input
//         onChange={(e) => setUpdatePhone(e.target.value)}
//         type="tel"
//         pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
//         placeholder="*Phone Number (XXX-XXX-XXXX)"
//       />
//       <span className="login__check-message hidden">Required</span>
//     </div>
//     {/* <div className="login__textbox">
//   <input
//     required
//     onChange={(e) => setRegisterPassword(e.target.value)}
//     type="password"
//     placeholder="Password"
//   />
//   <span className="login__check-message hidden">Required</span>
// </div> */}

//     {/* <div className="login__options">
//   <label className="login__remember-me">
//     <span className="login__checkbox">
//       <input type="checkbox" />
//       <span className="login__checked"></span>
//     </span>
//     Remember me
//   </label>

//   <a href="/">Forgot Password?</a>
// </div> */}

//     <button
//       type="button"
//       onClick={updateInfo}
//       className="login__login-btn"
//     >
//       Update/Add
//     </button>

//     {/* <div className="login__privacy-link">
//   <a href="/privacy">Privacy Policy</a>
// </div> */}
//   </form>

//   <div className="login__dont-have-account">
//     <a href="/account">Go back to account</a>
//   </div>
//   <div className="login__dont-have-account">* = optional</div>
