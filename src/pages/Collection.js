import React from "react";
import { connect } from "react-redux";
import Error from "components/Error";

import CollectionItem from "components/CollectionItem";
import CollectionHeader from "components/CollectionHeader";
import LoadingSpinner from "components/LoadingSpinner";

import {
  selectCollection,
  selectIsCollectionFetching
} from "redux/shop/shop.selector";

const CollectionPage = ({ collection, isFetching }) => {
  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (!collection) {
    return <Error />;
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
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  isFetching: selectIsCollectionFetching(state)
});

export default connect(mapStateToProps)(CollectionPage);
