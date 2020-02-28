import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "redux/cart/cart.selector";
import StripeCheckoutButton from "components/StripeCheckoutButton";
import CheckoutItem from "components/CheckoutItem";

const CheckoutPage = ({ cartItems, totalAmount }) => (
  <main>
    <h1 className="section-heading">shopping cart</h1>
    <div className="checkout">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <h1>CART IS EMPTY</h1>
      )}

      <span className="checkout-total">Total: ${totalAmount}</span>
      <div className="checkout-button">
        <h2>
          *Use the following card-number: 4242 4242 4242 4242, with any date and
          CVV
        </h2>
        <StripeCheckoutButton price={totalAmount} />
      </div>
    </div>
  </main>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
