import React from "react";
import { connect } from "react-redux";

import ShopItem from "components/ShopItem";
import ShopHeader from "components/ShopHeader";

import { selectCollection } from "redux/shop/shop.selector";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <>
      <ShopHeader title={title} />
      <main>
        <div className="product product-category">
          {items.map(item => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
