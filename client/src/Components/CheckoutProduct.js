import React from "react";
import { useStateValue } from "../contexts/StateProvider";
import "../css/Cart.css";
import ClearIcon from "@material-ui/icons/Clear";

function CheckoutProduct({ id, title, price, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        // rating: rating, !!!!!if you want to use again, add to the props
        image: image,
      },
    });
  };

  return (
    <div className="cart">
      <div className="cart__left">
        <div className="cart__cart">
          <img className="cart__cartImage" src={image} alt="." />
          <div className="cart__cartInfo">
            <div className="cart__cartID">
              <span>{id}</span>
              <span>
                <ClearIcon onClick={RemoveFromCart} className="cart__clear" />
              </span>
            </div>
            <div className="cart__cartInfoText">
              <div className="cart__cartThree">
                <span>
                  <a href="/shop">
                    <strong>{title}</strong>
                  </a>
                </span>
                <span onClick={addToCart}>+</span>
                <span>|</span>
                <span onClick={RemoveFromCart}>-</span>
                <span>${price}</span>
              </div>
            </div>

            <div>
              The perfect LED lights for any occasion. Over 100 custom design
              patterns. Wireless connection to control lights through custom
              phone software. The best led strip out there. Easy to install.
              Best in class for ease of use. Uses the WLED software.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
