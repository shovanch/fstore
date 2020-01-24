import React from "react";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="product__item">
      <div
        className="background-img product__image "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <button className="product__button">Add to Cart</button>
      <div className="product__footer">
        <span className="product__name">{name}</span>
        <span className="product__price">${price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
