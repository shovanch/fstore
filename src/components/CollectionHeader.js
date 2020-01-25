import React from "react";

const CollectionHeader = ({ title }) => (
  <div
    className="product-hero collections__link background-img sale__background"
    style={{ backgroundColor: "#01B3E1" }}
  >
    <h1 className="collections__link-text product-hero__text">{title}</h1>
  </div>
);

export default CollectionHeader;
