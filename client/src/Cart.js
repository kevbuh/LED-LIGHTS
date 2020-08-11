import React from 'react'
import './Cart.css'
import FloatingActionButtonSize from './Button'

function Cart() {
  return (
    <section className="cart">
      <div className="cart__left">
        <div className="cart__title">
          Shopping Cart
        </div>
        <div className="cart__cart">
          <img className="cart__cartImage" src="https://i.pinimg.com/564x/ae/49/59/ae4959b9a83eb02ed43e32bb31ad7708.jpg" alt="." />
          <div className="cart__cartInfo">
            <div className="cart__cartID">
              <span>#23H3eFGk</span>
            </div>
            <div className="cart__cartInfoText">
              <div className="cart__cartThree">
                <span><strong>Product Name</strong></span>
                <span>+ | -</span>
                <span>$35.99</span>
              </div>
            </div>
            
              

            <div>
              Amount
            </div>
          </div>
          

        </div>
      </div>

      <div className="cart__right">
        <div className="cart__summary">
          <span>Cart Summary</span>
        </div>
        <div className="cart__summaryPrice">
          <div>
            <span>Subtotal:</span>
          </div>
          <div>
            <span>Shipping:</span>
          </div>
          <div>
            <span>Tax:</span>
          </div>
        </div>
        <div className="cart__summaryTotal">
          <div>
            Estimated total:
          </div>
          
        </div><div>
            <span className="cart__summaryCheckout">Checkout</span>
          </div>
      </div>
    </section>
  )
}

export default Cart
