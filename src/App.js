import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Header from "components/Header";
import HomePage from "pages/HomePage";
import CollectionPage from "pages/CollectionPage";
import CheckoutPage from "pages/CheckoutPage";
import SignInPage from "pages/SignInPage";
import Error from "components/Error";
import withRouterLoading from "components/withRouterLoading";
import { auth, createUserProfileDocument } from "firebase/firebase.utils";

// Redux action and selector
import { setCurrentUser } from "redux/user/user.actions";
import { selectCurrentUser } from "redux/user/user.selector";

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    // unscribeauth to null
    let unsubscribeFromAuth = null;
    // Subcribe to auth changes b/w app & firebase
    // Changes when user signs in or signs out
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // user signs in, checking through userAuth obj
      if (userAuth) {
        // Get user data and set it as current user
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        // If userAuth is null, means user is signed out,
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
        <Route exact path="/collection" component={CollectionPage} />
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
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
