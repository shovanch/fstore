import React from "react";

const CollectionItem = ({ name, price }) => (
  <div className="product__item">
    <div className="background-img product__image product-7" />
    <button className="product__button">Add to Cart</button>
    <div className="product__footer">
      <span className="product__name">{name}</span>
      <span className="product__price">${price}</span>
    </div>
  </div>
);

export default CollectionItem;
