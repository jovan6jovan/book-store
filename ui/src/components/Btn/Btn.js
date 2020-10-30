import React from "react";
import { Button } from "@material-ui/core";

const Btn = ({ text, icon, color, variant, onClick }) => (
  <Button startIcon={icon} color={color} variant={variant} onClick={onClick}>
    {text}
  </Button>
);

export default Btn;
