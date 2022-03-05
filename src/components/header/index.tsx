import React from "react";
import { Button, Left, Span, StyledHeader, Right, List, Item } from "./styles";
import VercelLogo from "../../../public/vercel.svg";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Left>
        <img height="26" src={VercelLogo} alt="Vercel Logo" />
      </Left>
      <nav>
        <List>
          <Item>Features</Item>
          <Item>Templates</Item>
          <Item>Integrations</Item>
          <Item>Costumers</Item>
          <Item>Pricing</Item>
        </List>
      </nav>
      <Right>
        <Span>Contact</Span>
        <Span>Login</Span>
        <Button type="button">Sign Up</Button>
      </Right>
    </StyledHeader>
  );
};

export default Header;
