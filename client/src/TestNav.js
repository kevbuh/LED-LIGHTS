import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './TestNav.css'

function TestNav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
        <span className="nav__logoText">Gravity LEDs</span>
        {/* <img src="https://raw.githubusercontent.com/kevinbuhlerr/LED-LIGHTS/master/client/src/ledlogo.png" alt="." /> */}
        </Link>
      </div>

      <div className="nav__search">
        <SearchIcon className="nav__searchIcon"/>
        <input type="text" className="nav__searchInput" placeholder="Search..."/>
      </div>

      <div className="nav__links">
       <Link to="/" className="nav__link">
          <div className="nav__options">
            <span  className="nav__optionLineTwo">Home</span>
          </div>
        </Link>

        <Link to="/shop" className="nav__link">
          <div className="nav__options">
            <span  className="nav__optionLineTwo">Shop</span>
          </div>
        </Link>

        <Link to="/about" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne">About Us</span>
          </div>
        </Link>

        <Link to="/contact" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne">Contact</span>
          </div>
        </Link>

        <div className="nav__icons">
          <Link to="/cart">
            <div className="nav__shoppingBasketIcon">
            <ShoppingBasketIcon />
            </div>
          </Link>

          <Link to="Account">
            <div className="nav__accountBoxIcon">
            <AccountBoxIcon />
            </div>
          </Link>    

        </div>
      </div>
    </nav>
  )
}

export default TestNav