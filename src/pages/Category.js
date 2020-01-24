import React from "react";
import ShopItem from "components/ShopItem";
import ShopHeader from "components/ShopHeader";

const CollectionPage = () => (
  <>
    <ShopHeader title="watches" />
    <main>
      <div className="product product-category">
        <ShopItem name="Black Shoes" price="99" />
        <ShopItem name="Black Shoes" price="99" />
        <ShopItem name="Black Shoes" price="99" />
        <ShopItem name="Black Shoes" price="99" />
        <ShopItem name="Black Shoes" price="99" />
        <ShopItem name="Black Shoes" price="99" />
        <ShopItem name="Black Shoes" price="99" />
        <ShopItem name="Black Shoes" price="99" />
      </div>
    </main>
  </>
);

export default CollectionPage;
