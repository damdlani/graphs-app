import React from "react";
import { signIn, useSession } from "next-auth/client";
import { PrivateGraph } from "../components/PrivateGraph";

const PrivateGraphPage = () => {
  const [session, loading] = useSession();
  
  if (!!session) return <PrivateGraph />
  
  if (loading) return <p>Loading</p>;

  return (!loading && !!session === false) && (
    <div>
      <p>You are not permitted to see this page</p>
      <button onClick={signIn}>Sign in</button>
    </div>
  );
};

export default PrivateGraphPage;
