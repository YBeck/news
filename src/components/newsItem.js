import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ item }) => {
  //   console.log(item);
  const author = item.author || item.source.name;
  return (
    <div>
      {`${item.title}\u00A0\u00A0\u00A0\u00A0${
        item.description
      }\u00A0\u00A0\u00A0\u00A0${author}`}
    </div>
  );
};
NewsItem.propTypes = {
  item: PropTypes.object
};
export default NewsItem;
