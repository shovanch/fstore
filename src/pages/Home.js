import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomeMenu from "components/HomeMenu";
import { selectIsCollectionFetching } from "redux/shop/shop.selector";

const HomePage = ({ isFetching }) => {
  console.log("RENDERING");
  return (
    <main>
      {isFetching ? <h1>LOADING</h1> : <h1>DONE</h1>}
      <HomeMenu />
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching
});

export default connect(mapStateToProps)(HomePage);
