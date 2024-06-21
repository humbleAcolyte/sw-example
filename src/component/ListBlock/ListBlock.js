import React from "react";
import PropTypes from "prop-types";

import "./ListBlock.css";

const ListBlock = ({ list, details }) => {
  return (
    <div className="list-block">
      {list}
      {details}
    </div>
  );
};

ListBlock.propTypes = {
  list: PropTypes.node,
  details: PropTypes.node,
};

export default ListBlock;
