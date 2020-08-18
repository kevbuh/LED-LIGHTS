import React, { useState } from "react";
import "../css/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MailIcon from "@material-ui/icons/Mail";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Link } from "react-router-dom";

function Footer() {
  const [data, setData] = useState(null);

  return (
    <footer className="footer">
      <div className="footer__links width">
        <Link to="/">
          <span className="footer__quickLinks">Quick Links</span>
        </Link>
        <Link to="/">
          <span className="footer__link">Home</span>
        </Link>
        <Link to="/shop">
          <span className="footer__link">Shop</span>
        </Link>
        <Link to="/about">
          <span className="footer__link">About Us</span>
        </Link>
        <Link to="/faqs">
          <span className="footer__link">FAQS</span>
        </Link>
        <Link to="/checkout">
          <span className="footer__link">Cart</span>
        </Link>
        {data ? (
          <Link to="/account">
            <span className="footer__link">Account</span>
          </Link>
        ) : (
          <Link to="/users/login">
            <span className="footer__link">Login</span>
          </Link>
        )}
      </div>
      <div className="footer__links width">
        <Link to="/">
          <span className="footer__quickLinks">Customer Service</span>
        </Link>
        <Link to="/contact">
          <span className="footer__link">Contact Us</span>
        </Link>
        <Link to="/returns">
          <span className="footer__link">Returns</span>
        </Link>
        <Link to="/shipping">
          <span className="footer__link">Shipping</span>
        </Link>
        <Link to="/terms">
          <span className="footer__link">Terms and Conditions</span>
        </Link>
        <Link to="/privacy">
          <span className="footer__link">Privacy Policy</span>
        </Link>
      </div>

      <div className="footer__companyArea width">
        <span className="footer__companyName">
          <CopyrightIcon className="footer__copyrightIcon" />
          {new Date().getFullYear()} | Gravity LEDs
        </span>
        <div className="footer__policies">
          <div className="footer__privacy">
            <h3 className="footer__policy">
              <h6>All Rights Reserved</h6>

              <h6>
                *The product images are for illustration purposes only and may
                not be an exact representation of the product.{" "}
              </h6>
            </h3>
          </div>
        </div>
      </div>
      <div className="width">
        <div className="footer__media">
          <span className="footer__mediaInfo">Connect With Gravity LEDs: </span>
          <div className="footer__mediaIcons">
            {/* <YouTubeIcon className="footer__mediaIcon" /> */}
            <MailIcon className="footer__mediaIcon" />
            <InstagramIcon className="footer__mediaIcon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
