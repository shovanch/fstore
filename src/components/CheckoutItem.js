import React from "react";
import Img from "assets/images/winter-sale.jpg";

const CheckoutItem = ({ name, price }) => (
  <div className="checkout-item">
    <img src={Img} alt="" className="checkout-item__image" />
    <div className="checkout-1">
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">
        <div className="decrease">-</div>
        <span className="checkout-item__value">10</span>
        <div className="increase">+</div>
      </span>
    </div>
    <div className="checkout-2">
      <span className="checkout-item__price">${price}</span>
      <div className="checkout-item__remove-btn">X</div>
    </div>
  </div>
);

export default CheckoutItem;
