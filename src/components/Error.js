import React from "react";
import { Link } from "react-router-dom";

import ErrorImg from "assets/images/error.png";

const Error = () => (
  <div className="error-container">
    <div>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/">⟵ Go back to Home</Link>
    </div>

    <img className="error-img" src={ErrorImg} alt="Error Illustration" />
  </div>
);

export default Error;
