import React from "react";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";

const SignInPage = () => (
  <main>
    <div className="sign-up-in">
      <SignIn />
      <SignUp />
    </div>
  </main>
);

export default SignInPage;
