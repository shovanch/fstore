import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart
} from "redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <img src={imageUrl} alt="" className="checkout-item__image" />
      <div className="checkout-1">
        <span className="checkout-item__name">{name}</span>
        <span className="checkout-item__quantity">
          <div className="decrease" onClick={() => removeItem(cartItem)}>
            -
          </div>
          <span className="checkout-item__value">{quantity}</span>
          <div className="increase" onClick={() => addItem(cartItem)}>
            +
          </div>
        </span>
      </div>
      <div className="checkout-2">
        <span className="checkout-item__price">${price}</span>
        <div
          className="checkout-item__remove-btn"
          onClick={() => clearItem(cartItem)}
        >
          X
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
