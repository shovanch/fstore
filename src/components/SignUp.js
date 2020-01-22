import React from "react";

const SignUp = () => (
  <div className="sign-in">
    <h1 className="sign-in__heading">I do not have an account</h1>
    <h3 className="sign-in__subheading">
      Sign up with your email and password
    </h3>
    <form action="" className="form">
      <div className="form-group">
        <input type="text" name="" className="form-input" />
        <label className="form-input-label">Display Name</label>
      </div>
      <div className="form-group">
        <input type="email" name="" className="form-input" />
        <label className="form-input-label">Email</label>
      </div>
      <div className="form-group">
        <input type="password" name="" className="form-input" />
        <label className=" form-input-label">Password</label>
      </div>
      <div className="form-group">
        <input type="password" name="" className="form-input" />
        <label className=" form-input-label">Confirm Password</label>
      </div>
      <button className="form-button">Sign Up</button>
    </form>
  </div>
);

export default SignUp;
