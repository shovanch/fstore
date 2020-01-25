import React from "react";

const CollectionHeader = ({ title }) => (
  <div
    className="product-hero collections__link background-img sale__background"
    style={{ backgroundColor: "red" }}
  >
    <h1 className="collections__link-text product-hero__text">{title}</h1>
  </div>
);

export default CollectionHeader;
