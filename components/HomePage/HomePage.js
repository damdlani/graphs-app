import { signIn, signOut, useSession } from "next-auth/client";
import { Button, Wrapper } from "../common";
import { AuthBox } from "./styled";
import { Status } from "../Status";

export const HomePage = () => {
  const [session, loading] = useSession();

  if (loading) return <Status />;

  if (!!session)
    return (
      <Wrapper>
        <AuthBox>
          <p>Hello, {session.user.name}</p>
          <Button onClick={signOut}>Sign out</Button>
        </AuthBox>
      </Wrapper>
    );

  return (
    <Wrapper>
      <AuthBox>
        <p>You are not signed in</p>
        <Button onClick={signIn}>Sign in</Button>
      </AuthBox>
    </Wrapper>
  );
};
