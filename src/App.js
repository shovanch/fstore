/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header";
import HomePage from "pages/HomePage";
import CollectionPage from "pages/CollectionPage";
import CheckoutPage from "pages/CheckoutPage";
import SignInPage from "pages/SignInPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/collection" component={CollectionPage} />
          <Route exact path="/collection" component={CollectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
