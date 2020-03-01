import React, { useState } from "react";
import { auth, signinWithGoogle } from "firebase/firebase.utils";
import { Link } from "react-router-dom";
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
    <section className="section-login">
      <div className="login">
        <h1 className="login-header">Signin to Your Account</h1>
        <form className="form" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            placeholder="you@exmaple.com"
            value={email}
            onChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            placeholder="********"
            minLength="8"
            value={password}
            onChange={handleChange}
            required
          />

          <div className="form__group">
            <button type="submit" className="form__btn">
              Sign In
            </button>
          </div>
          <div className="form__group">
            <button
              type="button"
              onClick={signinWithGoogle}
              className="form__btn form__btn--google"
            >
              Sign In With Google
            </button>
          </div>
        </form>
        <Link to="/signup" className="sign-account-link">
          Create Account
        </Link>
      </div>
    </section>
  );
};
export default SignIn;
