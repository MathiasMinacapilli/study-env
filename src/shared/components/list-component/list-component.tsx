import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

interface ListComponentI {
  items: any[];
}

const ListComponent = ({ items }: ListComponentI) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem>
          {item.icon ? (
            <ListItemAvatar>
              <Avatar>{item.icon}</Avatar>
            </ListItemAvatar>
          ) : null}
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListComponent;
