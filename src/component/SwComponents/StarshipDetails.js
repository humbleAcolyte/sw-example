import React from "react";
import { useParams } from "react-router-dom";

import ItemDetails, { Record } from "../ItemDetails";
import { WithSwService } from "../Wrappers";

const StarshipDetails = (props) => {
  const { itemId } = useParams();

  return (
    <ItemDetails {...props} itemId={itemId}>
      <Record field="model" label="Model" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (service) => {
  return {
    getData: service.getStarship,
    getImageUrl: service.getStarshipImage,
  };
};

export default WithSwService(mapMethodsToProps)(StarshipDetails);
