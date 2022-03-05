import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 4.8rem;
  width: 100%;

  font: 700 1.2rem "Inter", sans-serif;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.colors.white};

  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

export default StyledFooter;
