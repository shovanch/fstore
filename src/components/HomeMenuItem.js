import React from "react";

const HomeMenuItem = ({ title, number }) => (
  <a
    className={`collections__link link-${number} background-img sale__background`}
  >
    <h1 className="collections__link-text">{title}</h1>
  </a>
);

export default HomeMenuItem;
