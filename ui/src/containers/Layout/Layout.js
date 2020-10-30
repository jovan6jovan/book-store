import React from "react";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => (
  <Container maxWidth="md">
    {children}
  </Container>
);

export default Layout;
