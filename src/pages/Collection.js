import React from "react";
import { connect } from "react-redux";

import CollectionItem from "components/CollectionItem";
import CollectionHeader from "components/CollectionHeader";

import {
  selectCollection,
  selectIsCollectionFetching
} from "redux/shop/shop.selector";

const CollectionPage = ({ collection, selectIsCollectionFetching }) => {
  const { title, items } = collection;
  return (
    <>
      <CollectionHeader title={title} />
      <main>
        <div className="product product-category">
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
