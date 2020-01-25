import React from "react";

const CartItem = ({ item: { name, imageUrl, quantity, price } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="" className="cart-item-image" />
    <div className="item-details">
      <span>{name}</span>
      <span>
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
