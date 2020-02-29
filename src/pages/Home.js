import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import LoadingSpinner from "components/LoadingSpinner";
import HomeMenu from "components/HomeMenu";
import { selectIsCollectionFetching } from "redux/shop/shop.selector";

const HomePage = ({ isFetching }) => {
  // If the data is still being loaded, show loading spinner
  if (isFetching) {
    return <LoadingSpinner />;
  }

  // After data has been succesfully loaded
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
