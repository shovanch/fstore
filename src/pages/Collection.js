import React from "react";
import { connect } from "react-redux";

import CollectionItem from "components/CollectionItem";
import CollectionHeader from "components/CollectionHeader";

import {
  selectCollection,
  selectIsCollectionFetching
} from "redux/shop/shop.selector";

const CollectionPage = ({ collection, selectIsCollectionFetching }) => {
  if (!collection) {
    return <h1>NOT FOUND</h1>;
  }
  if (selectIsCollectionFetching) {
    return <h1>LOADING</h1>;
  }
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
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
