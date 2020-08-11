import React from 'react'
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <footer className="footer">
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
      <Link to="/contact">
        <span className="footer__link">Contact Us</span>
      </Link>
      <Link to="/cart">
        <span className="footer__link">Cart</span>
      </Link>
      <Link to="/account">
        <span className="footer__link">Account</span>
      </Link>
    </div>
    <div className="footer__companyArea">
      <span className="footer__companyName"><CopyrightIcon className="footer__copyrightIcon" /> 2020 | Gravity LEDs</span><div className="footer__policies">
      <div>
        <span className="footer__policy"><small>All Rights Reserved</small></span>
      </div>
      
    </div>
    </div>
    <div>
      
    
    <div className="footer__media">
      <span className="footer__mediaInfo">Connect With Gravity LEDs: </span>
      <div className="footer__mediaIcons">
        <YouTubeIcon className="footer__mediaIcon"/>
        <TwitterIcon className="footer__mediaIcon"/>
        <InstagramIcon className="footer__mediaIcon"/>
      </div>
    </div>
    </div>
    

  </footer>
  )
}

export default Footer
