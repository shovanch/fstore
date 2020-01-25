import React, { useState } from "react";
import { auth, signinWithGoogle } from "firebase/firebase.utils";
import FormInput from "./FormInput";

const SignIn = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: ""
  });

  /* Submit form with form data as paramas */
  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = userData;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setuserData({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  /* Update corresponding state with current value from form field */
  const handleChange = event => {
    const { name, value } = event.target;

    // update state data of matching name on input change
    setuserData({
      ...userData,
      [name]: value
    });
  };

  const { email, password } = userData;
  return (
    <div className="sign-in">
      <h1 className="sign-in__heading">I already have an account</h1>
      <h3 className="sign-in__subheading">
        Sign in with your email and password
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          minLength="8"
          value={password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="form-button">
          Sign In
        </button>
        <button
          type="button"
          onClick={signinWithGoogle}
          className="form-button"
        >
          Sign In With Google
        </button>
      </form>
    </div>
  );
};
export default SignIn;
