import React from "react";
import "../css/Success.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <section className="success">
      <div className="success__title">Success!</div>
      <div className="success__thanks">
        <span>Thank you for purchasing: Gravity Origin LED Strip</span>
      </div>
      <div className="success__email">
        <span>Please check your email for the receipt.</span>
      </div>
      <div className="success__email">
        <span>
          We will be sending you an email with your tracking number once the
          product is shipped.
          <div>
            <Link to="/shop">Click here to continue shopping</Link>
          </div>
        </span>
      </div>
    </section>
  );
}

export default Success;
