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
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
