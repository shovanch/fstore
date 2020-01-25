import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "components/CartIcon";
import CartDropdown from "components/CartDropdown";
import { auth } from "firebase/firebase.utils";
import { selectCurrentUser } from "redux/user/user.selector";
import { selectCartHidden } from "redux/cart/cart.selector";

const Header = ({ currentUser, hidden }) => (
  <header className="header">
    <Link className="header__logo" to="/">
      FSTORE.
    </Link>
    <CartIcon itemCount="10" />
    {/* Handle condtional rednering of signout button, depending on if user logged in */}
    {currentUser ? (
      <button
        type="button"
        className="header__signin"
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    ) : (
      <Link className="header__signin" to="/signin">
        Sign In
      </Link>
    )}
    {hidden ? null : <CartDropdown />}
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
