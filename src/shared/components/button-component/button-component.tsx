import React from "react";
import Button from "@material-ui/core/Button";

interface ButtonComponentI {
  icon: any;
  text: string;
}
const ButtonComponent = ({ icon, text }: ButtonComponentI) => {
  return (
    <Button variant="contained" color="default" startIcon={icon}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
