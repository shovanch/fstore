import React from "react";
import CartItem from "components/CartItem";

const CartDropdown = () => (
  <div className="cart">
    <div className="cart-items">
      <CartItem name="Black Shoes" quantity="10" price="90" />
      <CartItem name="Red Jacket" quantity="5" price="1550" />
      <CartItem name="black shoes" quantity="19" price="19" />
      <CartItem name="black shoes" quantity="10" price="90" />
      <CartItem name="black shoes" quantity="10" price="90" />
      <CartItem name="black shoes" quantity="10" price="90" />
    </div>
    <button className="cart-button">GO TO CHECKOUT</button>
  </div>
);

export default CartDropdown;
