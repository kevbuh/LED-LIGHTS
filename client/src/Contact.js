import React from 'react'
import './Contact.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';

function Contact() {
  return (
    <section className="contact">
      <div>
        <span className="contact__title">Gravity LEDs</span>
      </div>
      <div className="contact__contactTitle">
        Contact Us
      </div>
      <div className="contact__container">
        <div className="contact__info">
        <div>
        Email Us: <strong>gravityleds@gmail.com</strong>
        </div>
        <div className="contact__or">
          or
        </div>
        <div>
          DM us on instagram: <strong>@gravityleds</strong>
        </div>
      </div>
      <div className="contact__bottom">
        <MailOutlineIcon className="contact__button"/>
        <InstagramIcon className="contact__button"/>
      </div>
      </div>
      
    </section>
  )
}

export default Contact
