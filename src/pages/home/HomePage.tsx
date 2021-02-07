import React from "react";

import {
  ComputerOutlined,
  MicOutlined,
  DirectionsRunOutlined,
} from "@material-ui/icons";
import ListComponent from "../../shared/components/list-component/list-component";

const HomePage = () => {
  const studyAreaItems = [
    {
      name: "Computación",
      icon: <ComputerOutlined />,
    },
    {
      name: "Comunicaciones",
      icon: <MicOutlined />,
    },
    {
      name: "Educación Física",
      icon: <DirectionsRunOutlined />,
    },
  ];
  return (
    <div className="container">
      <h1>Áreas de estudios</h1>
      <ListComponent items={studyAreaItems} />
    </div>
  );
};

export default HomePage;
