import React, { useState } from "react";
import { auth, createUserProfileDocument } from "firebase/firebase.utils";
import FormInput from "./FormInput";

const SignUp = () => {
  const [userData, setuserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  /* Submit form with form data as paramas */
  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userData;

    // If both passwords don't match, alert user
    if (password !== confirmPassword) {
      alert("Passwords don't match. Try again");
      return;
    }

    try {
      // Create new authenicated User in firebase, passing email & password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // Store the created user Obj into Firebase DB collection, displayName as add. data
      await createUserProfileDocument(user, { displayName });

      // Reset the form fields
      setuserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      console.log(err);
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

  const { displayName, email, password, confirmPassword } = userData;
  return (
    <div className="sign-in">
      <h1 className="sign-in__heading">Do not have an account</h1>
      <h3 className="sign-in__subheading">
        Sign up with your email and password
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          onChange={handleChange}
          required
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          minLength="8"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="form-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
