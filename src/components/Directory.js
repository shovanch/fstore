import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomeMenuItem from "components/HomeMenuItem";
import { selectDirectorySections } from "redux/directory/directory.selector";

const Directory = ({ sections }) => (
  <>
    <h1 className="section-heading">collections</h1>
    <div className="collections">
      {sections.map(({ id, ...otherSectionProps }) => (
        <HomeMenuItem key={id} {...otherSectionProps} />
      ))}
      {/* <HomeMenuItem title="watches" number="1" />
      <HomeMenuItem title="shoes" number="2" />
      <HomeMenuItem title="hats" number="3" />
      <HomeMenuItem title="men's" number="4" />
      <HomeMenuItem title="women's" number="5" /> */}
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
