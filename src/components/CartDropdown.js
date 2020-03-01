import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "redux/cart/cart.actions";
import { selectCartItems } from "redux/cart/cart.selector";
import { selectCurrentUser } from "redux/user/user.selector";
import CartItem from "components/CartItem";

const CartDropdown = ({ currentUser, cartItems, dispatch }) => {
  let history = useHistory();
  return (
    <div className="cart">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <h1>Cart Is empty</h1>
        )}
      </div>
      {/* Go to checkout page only if user is signed in, else go to signin */}
      {currentUser ? (
        <button
          type="button"
          className="cart-button"
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden()); // Hide cartdropdown after moving to checkout page
          }}
        >
          GO TO CHECKOUT
        </button>
      ) : (
        <button
          type="button"
          className="cart-button"
          onClick={() => {
            history.push("/signin");
            dispatch(toggleCartHidden());
          }}
        >
          SIGN IN TO CHECKOUT
        </button>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps, null)(CartDropdown);
