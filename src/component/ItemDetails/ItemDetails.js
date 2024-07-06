import React, { useState } from "react";

import "./ItemDetails.css";

const Record = ({ item, field, label }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default function ItemDetails(props) {
  const { itemId, getData, getImageUrl } = props;
  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);

  if (!itemId) {
    return <span>Select from a list</span>;
  }

  getData(itemId).then((item) => {
    setItem(item);
    setImage(getImageUrl(item));
  });

  if (!item) {
    return <span>Select from a list</span>;
  }

  return (
    <div className="item-details">
      <img src={image} alt="image" />
      <ul>
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, { item });
        })}
      </ul>
    </div>
  );
}
