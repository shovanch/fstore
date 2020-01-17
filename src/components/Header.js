import React from "react";
import CartIcon from "components/CartIcon";

const Header = () => (
  <header className="header">
    <h1 className="header__logo">FSTORE.</h1>
    <CartIcon itemCount="10" />
    <a className="header__signin">Sign In</a>
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item">
          <img
            src="./assets/images/winter-sale.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket</span>
            <span>9 X $100</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            src="https://i.ibb.co/sWN32Jc/h2-600.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket</span>
            <span>9 X $100</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            src="https://i.ibb.co/jTZB37W/h7-600.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket</span>
            <span>9 X $100</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            src="./assets/images/winter-sale.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket</span>
            <span>9 X $100</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            src="./assets/images/winter-sale.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket</span>
            <span>9 X $100</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            src="./assets/images/winter-sale.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket</span>
            <span>9 X $100</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            src="./assets/images/winter-sale.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket</span>
            <span>9 X $100</span>
          </div>
        </div>
        <div className="cart-item">
          <img
            src="./assets/images/winter-sale.jpg"
            alt=""
            className="cart-item-image"
          />
          <div className="item-details">
            <span>Black leather Jacket abra dabra</span>
            <span>9 X $100</span>
          </div>
        </div>
      </div>
      <button className="cart-button">GO TO CHECKOUT</button>
    </div>
  </header>
);

export default Header;
