import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import ListBlock from "../ListBlock";
import { PersonList, PersonDetails } from "../SwComponents";

const PeoplePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <ListBlock
      list={<PersonList onItemSelected={(id) => navigate(id)} />}
      details={<PersonDetails itemId={id} />}
    />
  );
};

export default PeoplePage;
