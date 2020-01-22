import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "components/CartIcon";
import CartDropdown from "components/CartDropdown";
import { auth } from "firebase/firebase.utils";
import { selectCurrentUser } from "redux/user/user.selector";

const Header = ({ currentUser }) => (
  <header className="header">
    <h1 className="header__logo">FSTORE.</h1>
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

    {/* <CartDropdown /> */}
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
