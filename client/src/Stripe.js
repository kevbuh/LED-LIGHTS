import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./StripeCheckout";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(
  "pk_test_51H4vK0AOX0Rrng5PSwKUVW8Dx4lGsXdbMFldfXHgQO6kpbu71XMsf1ZIgKLS6El4o9qidR9jxeLDheBAtFgtxkak00vZh9j4Sd"
);
export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
