import React from "react";
import "../css/Canceled.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Link } from "react-router-dom";


function Canceled() {
  return (
    <section className="canceled">
      <HelpOutlineIcon className="canceled__icon" />
      <div>
        <span className="canceled__big">You Canceled!</span>
      </div>
      <div>
        <span className="canceled__small">
          Would You Like to continue shopping?
        </span>
      </div>
      <div>
        <Link to="/shop">
          <span className="canceled__link">Click Here</span>
        </Link>
      </div>
    </section>
  );
}

export default Canceled;
