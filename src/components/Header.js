import React from "react";
import CartIcon from "components/CartIcon";
import CartDropdown from "components/CartDropdown";

const Header = () => (
  <header className="header">
    <h1 className="header__logo">FSTORE.</h1>
    <CartIcon itemCount="10" />
    <a className="header__signin" href="/test">
      Sign In
    </a>
    <CartDropdown />
  </header>
);

export default Header;
