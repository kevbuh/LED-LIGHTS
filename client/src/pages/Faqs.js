import React from "react";
import "../css/Faqs.css";

function Faqs() {
  return (
    <section className="faqs">
      <div className="faqs__title">FAQS</div>
      <div className="faqs__questions">
        <div className="faqs__question">
          <span className="faqs__questionTitle">How to Sync?</span>
          <span className="faqs__questionInfo">
            Verify that phone and LED strip are on the same network.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">How do I install?</span>
          <span className="faqs__questionInfo">
            Download WLED in the app store, and fill in your wifi information.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">Removable?</span>
          <span className="faqs__questionInfo">
            Yes, however warranty is voided once protective covering is removed.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            How do I contact Gravity LEDs?
          </span>
          <span className="faqs__questionInfo">
            Visit our contact page!
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">What's the return policy?</span>
          <span className="faqs__questionInfo">
            Contact us and we will work out a plan.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            Where do I go to checkout?
          </span>
          <span className="faqs__questionInfo">
            Add a product to cart, and click checkout!
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            What's the privacy policy?
          </span>
          <span className="faqs__questionInfo">
            We do not sell any of your information. All credit card info is covered through Stripe's policy.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            How do I choose the effects?
          </span>
          <span className="faqs__questionInfo">
            Download the WLED light and click on patterns.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            What is the waterproof rating?
          </span>
          <span className="faqs__questionInfo">
            IP67
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            How do I install the newest software?
          </span>
          <span className="faqs__questionInfo">
            We will update through the WLED software.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            How do I set the lights to a certain effect?
          </span>
          <span className="faqs__questionInfo">
            Millions of colors and a hundred patterns are available through the WLED application.
          </span>
        </div>
        <div className="faqs__question">
          <span className="faqs__questionTitle">
            How do I request new products/ designs?
          </span>
          <span className="faqs__questionInfo">
            Contact our design department!
          </span>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
