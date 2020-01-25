import React from "react";
import { withRouter, useHistory } from "react-router-dom";

const HomeMenuItem = ({ title, imageUrl, size, linkUrl }) => {
  // let { url } = useParams();
  let history = useHistory();

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${size} collections__link link background-img`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      onClick={() => history.push(`${linkUrl}`)}
    >
      <h1 className="collections__link-text">{title}</h1>
    </div>
  );
};

// export default withRouter(HomeMenuItem);
export default HomeMenuItem;
