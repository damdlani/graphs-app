import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #008080;
  display: grid;
  grid-template-columns: auto auto;
`;

export const Title = styled.h1`
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const Navbar = styled.nav``;

export const List = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
`;

export const ListItem = styled.li`
  text-align: center;
  list-style: none;
  text-decoration: none;
  align-self: center;
`;

export const StyledLink = styled.a`
  color: #ffffff;
  transition: 0.3s ease;
  

  &:hover {
    cursor: pointer;
    color: #bbbbbb;
  }
`;
