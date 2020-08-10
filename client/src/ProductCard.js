import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
  return (
    <section classname="productcard">
      <div className="productcard__card">
        <img src={props.src} alt="." className="productcard__cardImage" />
        <div className="productcard__bottom">
          <span className="productcard__cardTitle">{props.title}</span>
          <span className="productcard__cardInfo">$ {props.price}</span>
          <span className="productcard__cardInfo">{props.info}</span>
          
        </div>
        
      </div>
    </section>
  )
}

export default ProductCard
