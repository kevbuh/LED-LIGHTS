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
          src={"https://sc01.alicdn.com/kf/HTB1b81Yd2BNTKJjy1zdq6yScpXaZ.jpg_350x350.jpg"}
          title={"1"}
          price={"75"}
          info={" led lights "}
          
          />
          <ProductCard 
          src={"https://i.pinimg.com/564x/85/9f/56/859f566921f888ee6e9d2511ee2ed1c0.jpg"}
          title={"2"}
          price={"20"}
          info={" led lights "}

          />
          <ProductCard 
          src={"https://i.pinimg.com/564x/4c/82/43/4c8243997270dfa137af7f0f16f56d8f.jpg"}
          title={"3"}
          price={"40"}
          info={" led lights "}

          />
          <ProductCard 
          src={"https://i.pinimg.com/236x/c9/6e/32/c96e3234f93db3f93617d01ec5a1c1a9.jpg"}
          title={"4"}
          price={"95"}
          info={" led lights "}
          
          />
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Products
