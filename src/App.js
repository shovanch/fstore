// import React, { useEffect } from "react";
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Header from "components/Header";
import HomePage from "pages/Home";
import CollectionPage from "pages/Collection";
import CheckoutPage from "pages/Checkout";
import SignInPage from "pages/SignIn";
import Error from "components/Error";
import withRouterLoading from "components/withRouterLoading";
import { auth, createUserProfileDocument } from "firebase/firebase.utils";

// Redux action and selector
import { setCurrentUser } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user/user.selector";
import { fetchCollectionsStartAsync } from "redux/shop/shop.actions";

const App = ({ setCurrentUser, currentUser, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
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
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:collectionId" component={CollectionPage} />
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
