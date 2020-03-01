import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form__group">
    <label className="form__label" htmlFor={otherProps.name}>
      {label}
    </label>
    <input className="form__input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
