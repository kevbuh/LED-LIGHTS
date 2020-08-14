import React from "react";
import "./BigProduct.css";
// import GroupedSelect from "./GroupedSelect";
// import ColorTextFields from './ColorTextFields'
// import CustomizedInputs from './Textfields'
// import SimpleSelect from "./SimpleSelect";
// import CustomizedButtons from './fdfsfasd'
import { useStateValue } from "./contexts/StateProvider";
import Product from "./Product";

function BigProduct({ id, title, price, image }) {
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
    <section className="bigproduct">
      <Product
        id="#8F26HD7"
        title="Gravity Origin: Custom"
        price={45}
        // rating={5}
        image="https://i.pinimg.com/564x/d9/52/01/d95201cbe3f33bfc70ff0166d4e34f8c.jpg"
      />
      <div className="bigproduct__left">
        <img
          className="bigproduct__image"
          src={
            "https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg"
          }
          alt="original"
        />
      </div>
      <div className="bigproduct__right">
        <div className="bigproduct__title">
          <span>{title}</span>
        </div>
        <div className="bigproduct__price">
          <span>{price}</span>
        </div>
        {/* <div className="bigproduct__amount">
          <span>
            Amount in Box: <GroupedSelect />{" "}
          </span>
        </div>
        <div className="bigproduct__quantity">
          <div className="bigproduct__input">
            <span>
              Quantity: <SimpleSelect />{" "}
            </span>
          </div>
        </div> */}
        <div className="bigproduct__info">
          <span>
            The perfect LED lights for any occasion. Over 100 custom design
            patterns. Wireless connection to control lights through custom phone
            software. The best led strip out there. Easy to install. Best in
            class for ease of use. Uses the WLED software.
          </span>
        </div>
        <button onClick={addToCart} className="bigproduct__addToCart">
          <span>Add To Cart</span>
        </button>
      </div>
    </section>
  );
}

export default BigProduct;
