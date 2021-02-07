import React, { useState } from "react";
import ListComponent from "../../shared/components/list-component/list-component";

const PersonalArea = () => {
  const [listItems, setListItems] = useState([]);

  return (
    <div className="container">
      <h1>Área personal</h1>
      <ListComponent items={listItems} canBeEdited />
    </div>
  );
};

export default PersonalArea;
