import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-group">
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {/* Dynamically style label, depending on if lable input is empty */}
    {label ? (
      <label
        htmlFor={otherProps.name}
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
