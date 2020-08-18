import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../contexts/StateProvider";
import { getTotal } from "../reducers/reducer";
import "../css/Cart.css";

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51H4vK0AOX0Rrng5PSwKUVW8Dx4lGsXdbMFldfXHgQO6kpbu71XMsf1ZIgKLS6El4o9qidR9jxeLDheBAtFgtxkak00vZh9j4Sd"
);

function Subtotal() {
  const [{ cart }] = useStateValue();

  // const handleClick = async (event) => {
  //   // Call your backend to create the Checkout Session—see previous step
  //   const createCheckoutSession = async () => {
  //     const response = await fetch("/pay");
  //     const { session_id: sessionID } = await response.json();
  //     // Call stripe.redirectToCheckout() with the Session ID.
  //   };
  //   const { sessionId } = await createCheckoutSession();
  //   // When the customer clicks on the button, redirect them to Checkout.
  //   const stripe = await stripePromise;
  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems: [sessionId],
  //     mode: "payment",
  //     successUrl: "https://locahost:3000/success",
  //     cancelUrl: "https://localhost:3000/canceled",
  //   });
  //   // If `redirectToCheckout` fails due to a browser or network
  //   // error, display the localized error message to your customer
  //   // using `error.message`.
  // };
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe
      .redirectToCheckout({
        lineItems: [{ price: "price_1HHYwHAOX0Rrng5PGU68Ft4C", quantity: 1 }],
        mode: "payment",
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: "http://localhost:3000/payment-success",
        cancelUrl: "http://localhost:3000/payment-canceled",
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  return (
    <div className="subtotal">
      <div className="cart__right">
        <div className="cart__summary">
          <span>Cart Summary</span>
          <span> ~ ({cart.length} items): </span>
        </div>
        <div className="cart__summaryPrice">
          <div className="cart__summaryPriceSub">
            <span>Subtotal:</span>
            <span>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      <strong>{`${value}`}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
          <div className="cart__summaryPriceSub">
            <span>Shipping:</span>
            <span>FREE</span>
          </div>
          <div className="cart__summaryPriceSub">
            <span>Tax:</span>
            <span>$0.00</span>
          </div>
        </div>
        <div className="cart__summaryTotal">
          <div className="cart__summaryPriceSub">
            <span>Estimated total:</span>
            <span>
              <CurrencyFormat
                decimalScale={2}
                value={getTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </div>
          <button
            role="link"
            onClick={handleClick}
            className="cart__summaryCheckout"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
