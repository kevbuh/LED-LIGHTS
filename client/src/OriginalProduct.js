import React from "react";
import "./OriginalProduct.css";
import { useStateValue } from "./contexts/StateProvider";

function OriginalProduct({ id, title, price, image }) {
  const [{ cart }, dispatch] = useStateValue();

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
    <section className="originalproduct">
      <div className="originalproduct__left">
        <div className="originalproduct__title">
          <span>{title}</span>
        </div>
        <div className="originalproduct__info">
          <span>
            Running one the WLED software and ESP8266 MicroChip, the Gravity
            Origin is bound to keep you satisfied. Perfect for any room, explore
            the countless patterns and colors it comes with.
          </span>
        </div>
      </div>

      <div className="originalproduct__right">
        <img
          className="originalproduct__img"
          src="https://www.allegromicro.com/-/media/images/products/8503/a8503-product-image.ashx"
          alt="."
        />
      </div>
    </section>
  );
}

export default OriginalProduct;
