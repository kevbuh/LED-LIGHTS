import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useStateValue } from "../contexts/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import React from "react";

function NavBar() {
  const [{ cart }] = useStateValue();

  const openMenu = () => {
    console.log("SIDEBAR OPENED!!!!!!!!!!!!!!");
    document.querySelector(".nav__sidebar").classList.add("open");
  };
  const closeMenu = () => {
    console.log("SIDEBAR CLOSED!!!!!!!!!!!!!!");
    document.querySelector(".nav__sidebar").classList.remove("open");
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <span className="nav__logoText">Gravity LEDs</span>
          {/* <img src="https://raw.githubusercontent.com/kevinbuhlerr/LED-LIGHTS/master/client/src/ledlogo.png" alt="." /> */}
        </Link>
      </div>

      <div className="nav__search">
        <SearchIcon fontSize="inherit" className="nav__searchIcon" />
        <input
          type="text"
          className="nav__searchInput"
          placeholder="Search..."
        />
        <button className="nav__button" onClick={openMenu}>
          <MenuIcon className="nav__searchIcon" />
        </button>
      </div>
      <aside className="nav__sidebar">
        <div className="nav__sidebarLinks">
          <button onClick={closeMenu} className="nav__buttonClose">
            X
          </button>
          <Link to="/shop" onClick={closeMenu} className="nav__sidebarLink">
            <span>Shop</span>
          </Link>
          <Link to="/faqs" onClick={closeMenu} className="nav__sidebarLink">
            <span>FAQS</span>
          </Link>
          <Link to="/contact" onClick={closeMenu} className="nav__sidebarLink">
            <span>Contact</span>
          </Link>
          <Link to="/checkout" onClick={closeMenu} className="nav__sidebarLink">
            <span>Cart: {cart?.length}</span>
          </Link>
          <Link
            to="/users/login"
            onClick={closeMenu}
            className="nav__sidebarLink"
          >
            <span>Login</span>
          </Link>
        </div>
      </aside>

      <div className="nav__links hide">
        {/* <Link to="/" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineTwo big">Home</span>
          </div>
        </Link> */}

        <Link to="/shop" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineTwo big">Shop</span>
          </div>
        </Link>

        <Link to="/faqs" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne big">FAQS</span>
          </div>
        </Link>

        {/* <Link to="/about" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne big">About Us</span>
          </div>
        </Link> */}

        <Link to="/contact" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne big">Contact</span>
          </div>
        </Link>

        <div className="nav__icons">
          <Link to="/checkout">
            <div className="nav__shoppingBasketIcon big">
              <ShoppingBasketIcon />
              <span className="nav__cartLength">{cart?.length}</span>
            </div>
          </Link>

          <Link to="/users/login" className="nav__link">
            <div className="nav__options">
              <span className="nav__optionLineOne big">Login</span>
            </div>
          </Link>

          {/* <Link to="/account">
            <div className="nav__accountBoxIcon big">
              <AccountBoxIcon />
            </div>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
