import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./contexts/StateProvider";
import { getTotal } from "./reducers/reducer";
import "./Cart.css";
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
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
            <span>$5</span>
          </div>
          <div className="cart__summaryPriceSub">
            <span>Tax:</span>
            <span>$6.01</span>
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
          <Link to="/stripe/create-payment-intent">
            <button className="cart__summaryCheckout">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
