import React from "react";
import PropTypes from "prop-types";
const TrendingList = ({ data }) => {
  const list = data.map((item) => {
    return (
      <li className="list-group-item" key={item.search}>
        <h5 className="list-item-search">{item.search}</h5>
        <p className="list-item-type">{item.type}</p>
      </li>
    );
  });

  const title = "Trending Searches";

  return (
    <div className="trending-list-container">
      <h6 className="trending-list-title">{title}</h6>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

TrendingList.propTypes = {
  data: PropTypes.array.isRequired,
};

export { TrendingList };
