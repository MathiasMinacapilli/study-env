import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

const HomePage = () => {
  return (
    <div>
      <h1>home page</h1>
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default HomePage;
