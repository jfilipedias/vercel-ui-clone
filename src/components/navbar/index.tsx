import React from "react";
import { Item, List } from "./styles";

const Navbar: React.FC = () => {
  return (
    <nav>
      <List>
        <Item>Features</Item>
        <Item>Templates</Item>
        <Item>Integrations</Item>
        <Item>Costumers</Item>
        <Item>Pricing</Item>
      </List>
    </nav>
  );
};

export default Navbar;
