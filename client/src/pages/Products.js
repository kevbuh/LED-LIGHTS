import React from "react";
import "../css/Shop.css";
import Product from "../Components/CardProduct";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Products() {
  return (
    <section className="shop">
      <div className="shop__top">
        <div className="shop__title">
          <span> Gravity LEDs Products</span>
        </div>
        <span className="shop__titleTwo"> Click To See More Info!</span>
        <span className="shop__arrow">
          <ArrowDownwardIcon />
        </span>
      </div>
      <div className="shop__bottom">
        <div className="shop__left">
          {/* <div className="shop__sidebar">
            <SideBar />
          </div> */}
        </div>

        <div className="shop__right">
          <div className="shop__imgMediaCards">
            {/* <ProductCard
              src={
                "https://i.pinimg.com/564x/d9/52/01/d95201cbe3f33bfc70ff0166d4e34f8c.jpg"
              }
              title={"Gravity Origin: Custom"}
              price={60}
              info={
                "The perfect LED lights for any occasion. Over 100 custom design patterns. Wireless connection to control lights through custom phone software. "
              }
            />
            <ProductCard
              src={
                "https://hackaday.com/wp-content/uploads/2015/09/led-room-lights.jpg"
              }
              title={"Gravity Origin: Simple"}
              price={"30"}
              info={
                " Over 100 custom design patterns. Wireless connection to control lights through custom phone software."
              }
              
            /> */}
            <Product
              id="#8F26HD7"
              title="Gravity Origin: Custom"
              price={60}
              // rating={5}
              image="https://i.pinimg.com/564x/d9/52/01/d95201cbe3f33bfc70ff0166d4e34f8c.jpg"
            />
            {/* <Product
              id="#B93MND9"
              title="Gravity Origin: Simple"
              price={30}
              // rating={4}
              image="https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
