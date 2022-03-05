import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-bottom: 4.8px;

  font: 700 1.2rem "Inter", sans-serif;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.colors.white};

  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
`;

export default StyledFooter;
