import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "redux/cart/cart.actions";
import { selectCartItemsCount } from "redux/cart/cart.selector";
import { ReactComponent as Icon } from "../assets/images/shopping-cart.svg";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className="header__cart" onClick={toggleCartHidden}>
    <Icon className="header__cart-icon" />
    <span className="header__cart-value">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
