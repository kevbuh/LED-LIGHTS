import React from "react";
import "../css/Contact.css";
import PolicyIcon from "@material-ui/icons/Policy";

function PrivacyPolicy() {
  return (
    <section className="contact">
      <div>
        <span className="contact__title">Gravity LEDs</span>
      </div>
      <div className="contact__contactTitle">Privacy Policy</div>
      <div className="contact__container">
        <div className="contact__info">
          <div>At Gravity LEDs, we will never sell your information.</div>
          <div className="contact__or">&</div>
          <div className="contact__privacy">
            <span>
              This includes any other personal and non-public information with
              any telemarketer or marketing agency. At Gravity LEDs, we will
              only reach out to you with your own consent. Your transaction
              specific information is help by Stripe and that information will
              be treated pursuant to their privacy policy. All transactions a
              protected through Stripe. Please contact us with any concerns.
            </span>
          </div>
        </div>
        <div className="contact__bottom">
          <PolicyIcon className="contact__button" />
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
