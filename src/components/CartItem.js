import React from "react";
import Img from "../assets/images/winter-sale-2.jpg";

const CartItem = ({ name, quantity, price }) => (
  <div className="cart-item">
    <img src={Img} alt="" className="cart-item-image" />
    <div className="item-details">
      <span>{name}</span>
      <span>
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
