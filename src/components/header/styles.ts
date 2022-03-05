import styled from "styled-components";

const Button = styled.button`
  padding: 0 1.2rem;
  margin-left: 2.4rem;
  height: 3rem;

  background: ${props => props.theme.colors.white};
  border: 0.1rem solid ${props => props.theme.colors.white};
  border-radius: 0.5rem;

  cursor: pointer;

  transition: 0.15s ease-in;

  &:hover {
    background: transparent;
    color: ${props => props.theme.colors.white};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
`;

const Span = styled.span`
  margin-left: 2.4rem;

  cursor: pointer;
  transition: 0.1s ease-in;

  &:first-of-type {
    margin-left: 5.296rem;
  }

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  margin: 2.35rem 15.55rem;
  padding: 0 2.4rem;

  font: 1.4rem "Inter", sans-serif;
  color: ${props => props.theme.colors.gray};
`;

const Third = styled.div`
  display: flex;
  align-items: center;
`;

export { Button, Logo, Span, StyledHeader, Third };
