import React from "react";
import { connect } from "react-redux";
import { addItem } from "redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="product__item">
      <div
        className="background-img product__image "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <button
        type="button"
        className="product__button"
        onClick={() => addItem(item)}
      >
        Add to Cart
      </button>
      <div className="product__footer">
        <span className="product__name">{name}</span>
        <span className="product__price">${price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
