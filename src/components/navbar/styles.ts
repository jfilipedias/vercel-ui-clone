import styled from "styled-components";

const Item = styled.li`
  padding: 0.8rem;

  text-decoration: none;
  cursor: pointer;
  color: inherit;

  transition: 0.1s ease-in;

  &:not(:first-of-type) {
    margin-left: 1.2rem;
  }

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  color: ${props => props.theme.colors.gray};
`;

export { Item, List };
