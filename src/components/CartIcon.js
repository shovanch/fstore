import React from "react";
import { ReactComponent as Icon } from "../assets/images/shopping-cart.svg";

const CartIcon = ({ itemCount }) => (
  <div className="header__cart">
    <Icon className="header__cart-icon" />
    <span className="header__cart-value">{itemCount}</span>
  </div>
);

export default CartIcon;
