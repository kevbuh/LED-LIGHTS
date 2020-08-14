import React from "react";
// import Star from "@material-ui/icons/Star";
import { useStateValue } from "./contexts/StateProvider";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function Product({ id, title, price, image }) {
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
    <div className="productcard__card test">
      <Link to="/products/original">
        <div className="product__info">
          <img className="productcard__cardImage" src={image} alt="" />
          <p className="productcard__cardInfo">{title}</p>
          <p className="productcard__cardInfo">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          {/* <div className="product__rating">
          Creating an array of size $rating
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <Star className="product__star" />
              </p>
            ))}
        </div> */}
        </div>
      </Link>
      <button className="productcard__button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
