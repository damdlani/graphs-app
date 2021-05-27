import Link from "next/link";
import {
  List,
  ListItem,
  StyledLink,
  Navbar,
  StyledHeader,
  Title,
} from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Title>Graphs App</Title>
      <Navbar>
        <List>
          <ListItem>
            <Link href="/"><StyledLink>Home</StyledLink></Link>
          </ListItem>
          <ListItem>
          <Link href="/public"><StyledLink>Public graph</StyledLink></Link>
          </ListItem>
          <ListItem>
          <Link href="/private"><StyledLink>Private graph</StyledLink></Link>
          </ListItem>
        </List>
      </Navbar>
    </StyledHeader>
  );
};
