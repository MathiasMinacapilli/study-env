import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import {
  ComputerOutlined,
  MicOutlined,
  DirectionsRunOutlined,
} from "@material-ui/icons";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Áreas de estudios</h1>
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ComputerOutlined />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Computación" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MicOutlined />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Comunicaciones" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DirectionsRunOutlined />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Educación Física" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default HomePage;
