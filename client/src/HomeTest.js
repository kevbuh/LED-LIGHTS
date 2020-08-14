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
          image="https://i.pinimg.com/564x/d9/52/01/d95201cbe3f33bfc70ff0166d4e34f8c.jpg"
        />
        <Product
          id="0002"
          title="Gravity Origin: Simple"
          price={30}
          // rating={4}
          image="https://hackaday.com/wp-content/uploads/2015/09/led-room-lights.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
