import React from "react";
import { signIn, useSession } from "next-auth/client";
import { PrivateGraph } from "../components/PrivateGraph/PrivateGraph";
import { Button } from "../components/common";
import { Status } from "../components/Status";

const PrivateGraphPage = () => {
  const [session, loading] = useSession();
  
  if (!!session) return <PrivateGraph />
  
  if (loading) return <Status />;

  return (!loading && !!session === false) && (
    <div>
      <p>You are not permitted to see this page</p>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
};

export default PrivateGraphPage;
