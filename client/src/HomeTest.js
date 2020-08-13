import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Product
          id="0001"
          title="Gravity Origin: Custom"
          price={45}
          // rating={5}
          image="https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
        />
        <Product
          id="0002"
          title="Gravity Origin: Simple"
          price={30}
          // rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71J-YtSUd3L._AC_UX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
