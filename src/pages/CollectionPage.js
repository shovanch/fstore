import React from "react";
import CollectionItem from "components/CollectionItem";
import CollectionHeader from "components/CollectionHeader";

const CollectionPage = () => (
  <>
    <CollectionHeader title="watches" />
    <main>
      <div className="product product-category">
        <CollectionItem name="Black Shoes" price="99" />
        <CollectionItem name="Black Shoes" price="99" />
        <CollectionItem name="Black Shoes" price="99" />
        <CollectionItem name="Black Shoes" price="99" />
        <CollectionItem name="Black Shoes" price="99" />
        <CollectionItem name="Black Shoes" price="99" />
        <CollectionItem name="Black Shoes" price="99" />
        <CollectionItem name="Black Shoes" price="99" />
      </div>
    </main>
  </>
);

export default CollectionPage;
