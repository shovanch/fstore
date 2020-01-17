import React from "react";
import CollectionItem from "components/CollectionItem";
import HomeMenuItem from "components/HomeMenuItem";

const HomeMenu = () => (
  <main>
    <div className="sale">
      <div className="background-img sale__background " />
      <div className="sale__content">
        <h1 className="sale__heading">Exclusive Winter Collection</h1>
        <a href="#" className="sale__link">
          Shop Now
        </a>
      </div>
    </div>

    <h1 className="section-heading">trending now</h1>
    <div className="product">
      <CollectionItem name="Black Party Cap" price="30" />
      <CollectionItem name="Red Tshirt" price="210" />
      <CollectionItem name="Black Party Cap" price="30" />
      <CollectionItem name="Black Party Cap" price="30" />
      <CollectionItem name="Black Party Cap" price="30" />
      <CollectionItem name="Black Party Cap" price="30" />
      <CollectionItem name="Black Party Cap" price="30" />
      <CollectionItem name="Black Party Cap" price="30" />
    </div>

    <h1 className="section-heading">collections</h1>
    <div className="collections">
      <HomeMenuItem title="watches" number="1" />
      <HomeMenuItem title="shoes" number="2" />
      <HomeMenuItem title="hats" number="3" />
      <HomeMenuItem title="men's" number="4" />
      <HomeMenuItem title="women's" number="5" />
    </div>
  </main>
);

export default HomeMenu;
