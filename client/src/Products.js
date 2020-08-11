import React from 'react'
import './Shop.css'
import ProductCard from './ProductCard'
import SideBar from './SideBar'
import BigProduct from './BigProduct'

function Products() {
  return (
    <section className="shop">
        <div className="shop__top">
          <div className="shop__title">
          <span> Gravity LEDs Products</span>
        </div>
        </div>
      <div className="shop__bottom">
        <div className="shop__left">
        <div className="shop__sidebar">
          <SideBar />
        </div>
      </div>
      <div className="shop__right">
        
        <div className="shop__imgMediaCards">
          <ProductCard 
          src={"https://i.pinimg.com/564x/d9/52/01/d95201cbe3f33bfc70ff0166d4e34f8c.jpg"}
          title={"Gravity Origin: Custom"}
          price={"45"}
          info={"The perfect LED lights for any occasion. Over 100 custom design patterns. Wireless connection to control lights through custom phone software. "}
          />
          <ProductCard 
          src={"https://hackaday.com/wp-content/uploads/2015/09/led-room-lights.jpg"}
          title={"Gravity Origin: Simple"}
          price={"30"}
          info={" Over 100 custom design patterns. Wireless connection to control lights through custom phone software."}
          />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Products
