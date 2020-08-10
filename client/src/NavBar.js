import React from 'react'
import "./NavBar.css"  
import { Link } from 'react-router-dom'
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import { useStateValue } from "./StateProvider"

function NavBar() {
  // const [{ basket }] = useStateValue();

  // console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
      <img className="header__logo" href="./LED-LIGHTS.jpg" alt="amazon logo"></img>
      LED Lights
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      {/* <SearchIcon className="header__searchIcon"/> */}
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Hello Kevin</span>
            <span  className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span> */}
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
