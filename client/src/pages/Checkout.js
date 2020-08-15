import React from "react";
import { useStateValue } from "../contexts/StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "../Components/Subtotal";
import "../css/Cart.css";
import "../css/About.css";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__left">
        {cart?.length === 0 ? (
          <section className="about1">
            <div className="about__text">
              <div className="about__title1">
                <span>Your Cart is Empty!</span>
              </div>
              <div className="about__info1">
                <span>
                  Please visit the shop and add and item to the cart in order to
                  proceed.{" "}
                </span>
              </div>
            </div>
          </section>
        ) : (
          <div>
            <h2 className="cart__title">Shopping Cart</h2>
            {cart.map((item) => (
              <CheckoutProduct
                className="fff"
                id={item.id}
                title={item.title}
                // rating={item.rating}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal className="fff" />
        </div>
      )}
    </div>
  );
}

export default Checkout;
