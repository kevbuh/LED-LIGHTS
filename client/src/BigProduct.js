import React from 'react'
import './BigProduct.css'
import GroupedSelect from './GroupedSelect'
// import ColorTextFields from './ColorTextFields'
// import CustomizedInputs from './Textfields'
import SimpleSelect from './SimpleSelect'
// import CustomizedButtons from './fdfsfasd'

function BigProduct() {
  return (
    <section className="bigproduct">
      <div className="bigproduct__left">
        <img className="bigproduct__image" 
        src={"https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg"} 
        alt="original" 
        />
      </div>
      <div className="bigproduct__right">
        <div className="bigproduct__title">
          <span>Original Custom LED Lights</span>
        </div>
        <div className="bigproduct__price">
          <span>$30</span>
        </div>
        <div className="bigproduct__amount">
          <span>Amount in Box: <GroupedSelect/> </span>
        </div>
        <div className="bigproduct__quantity">
          <div className="bigproduct__input">
            <span>Quantity: <SimpleSelect /> </span>
          </div>
          
        </div>
        <div className="bigproduct__info">
          <span>The perfect LED lights for any occasion. Over 100 custom design patterns. Wireless connection to control lights through custom phone software. The best led strip out there. Easy to install. Best in class for ease of use. Uses the WLED software.</span>
        </div>
        <div className="bigproduct__addToCart">
          <span>Add To Cart</span>
        </div>
      </div>

    </section>
  )
}

export default BigProduct
 