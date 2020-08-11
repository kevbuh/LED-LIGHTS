import React from 'react'
import './Shop.css'
import ProductCard from './ProductCard'
import SideBar from './SideBar'

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
          src={"https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg"}
          title={"Original Custom"}
          price={"30"}
          info={"The perfect LED lights for any occasion. Over 100 custom design patterns. Wireless connection to control lights through custom phone software. "}
          
          />
          <ProductCard 
          src={"https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg"}
          title={"Original Custom"}
          price={"30"}
          info={"The perfect LED lights for any occasion. Over 100 custom design patterns. Wireless connection to control lights through custom phone software. "}
          
          />
          <ProductCard 
          src={"https://images.unsplash.com/photo-1558249579-fde0d755f0b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"}
          title={"Original Custom"}
          price={"30"}
          info={"The perfect LED lights for any occasion. Over 100 custom design patterns. Wireless connection to control lights through custom phone software. "}
          
          />
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Products
