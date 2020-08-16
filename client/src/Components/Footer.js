import React from "react";
import "../css/Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__twoBlocks">
        <div className="footer__links">
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

          <Link to="/cart">
            <span className="footer__link">Cart</span>
          </Link>
          <Link to="/account">
            <span className="footer__link">Account</span>
          </Link>
        </div>
        <div className="footer__links">
          <Link to="/">
            <span className="footer__quickLinks">Customer Service</span>
          </Link>
          <Link to="/contact">
            <span className="footer__link">Contact Us</span>
          </Link>
          <Link to="/">
            <span className="footer__link">Returns</span>
          </Link>
          <Link to="/shop">
            <span className="footer__link">Shipping</span>
          </Link>
          <Link to="/about">
            <span className="footer__link">Warranty</span>
          </Link>
          <Link to="/contact">
            <span className="footer__link">Terms and Conditions</span>
          </Link>
          <Link to="/privacy">
            <span className="footer__link">Privacy Policy</span>
          </Link>
        </div>
      </div>

      <div className="footer__companyArea">
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
      <div>
        <div className="footer__media">
          <span className="footer__mediaInfo">Connect With Gravity LEDs: </span>
          <div className="footer__mediaIcons">
            <YouTubeIcon className="footer__mediaIcon" />
            <TwitterIcon className="footer__mediaIcon" />
            <InstagramIcon className="footer__mediaIcon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
