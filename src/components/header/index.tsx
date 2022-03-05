import React from "react";
import Navbar from "../navbar";
import { Button, Logo, Span, StyledHeader, Third } from "./styles";
import VercelLogo from "../../../public/vercel.svg";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>
        <img height="26" src={VercelLogo} alt="Vercel Logo" />
      </Logo>
      <Navbar />
      <Third>
        <Span>Contact</Span>
        <Span>Login</Span>
        <Button type="button">Sign Up</Button>
      </Third>
    </StyledHeader>
  );
};

export default Header;
