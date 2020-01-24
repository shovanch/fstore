import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Header from "components/Header";
import withRouterLoading from "components/withRouterLoading";
import HomePage from "pages/Home";
import CategoryPage from "pages/Category";
import CheckoutPage from "pages/Checkout";
import SignInPage from "pages/SignIn";
import Error from "components/Error";

import {
  auth,
  createUserProfileDocument,
  addCollectionsAndDocuments
} from "firebase/firebase.utils";

// Redux action and selector
import { setCurrentUser } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user/user.selector";
import { selectShopCollections } from "redux/shop/shop.selector";

const App = ({ setCurrentUser, currentUser, collections }) => {
  useEffect(() => {
    // unscribeauth to null
    let unsubscribeFromAuth = null;
    // Subcribe to auth changes b/w app & firebase
    // Changes when user signs in or signs out
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // user signs in, checking through userAuth obj
      if (userAuth) {
        // Get user data, it will return ref to the logged in user if exists
        const userRef = await createUserProfileDocument(userAuth);

        // Set it as current user
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        // If userAuth is null, means user is signed out or no user
        // set currentUser to userAuth returned value
        setCurrentUser(userAuth);
        addCollectionsAndDocuments("collections", collections);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:categoryId" component={CategoryPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/loading" component={withRouterLoading} />
        {/* Render props for conditional rendering */}
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectShopCollections
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
