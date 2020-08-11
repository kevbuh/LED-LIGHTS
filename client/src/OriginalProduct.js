import React from 'react'
import './OriginalProduct.css'

function OriginalProduct() {
  return (
    <section className="originalproduct">
      <div className="originalproduct__left">
        <div className="originalproduct__title">
          <span>Gravity Origin</span>
          <span> LED Light</span>
        </div>
        <div className="originalproduct__info">
          <span>Built with the WLED software and FF85 Microcontroller, the Gravity Origin is bound to keep you satisfied. Perfect for any room, explore the countless patterns and colors it comes with. </span>
        </div>
      </div>

      <div className="originalproduct__right">
        <img className="originalproduct__img" src="https://www.allegromicro.com/-/media/images/products/8503/a8503-product-image.ashx" alt="." />
      </div>

    </section>
  )
}

export default OriginalProduct
