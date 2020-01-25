import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomeMenu from "components/HomeMenu";
import { selectIsCollectionFetching } from "redux/shop/shop.selector";

const HomePage = ({ isFetching }) => {
  console.log("RENDERING");
  return (
    <main>
      <HomeMenu />
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching
});

export default connect(mapStateToProps)(HomePage);
