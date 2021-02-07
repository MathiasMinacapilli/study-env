import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import ButtonComponent from "../button-component/button-component";
import { PlusOneOutlined } from "@material-ui/icons";

interface ListComponentI {
  items: any[];
  canBeEdited?: boolean;
}

const ListComponent = ({ items, canBeEdited = false }: ListComponentI) => {
  return (
    <div>
      {canBeEdited ? (
        <ButtonComponent icon={<PlusOneOutlined />} text="Agregar" />
      ) : null}
      {items.length > 0 ? (
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
      ) : (
        <p>No hay items en el listado</p>
      )}
    </div>
  );
};

export default ListComponent;
