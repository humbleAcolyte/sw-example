import React from "react";
import PropTypes from "prop-types";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li key={id} onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return <ul>{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func,
  children: PropTypes.func.isRequired,
};

export default ItemList;
