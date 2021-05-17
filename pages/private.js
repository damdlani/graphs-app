import React from "react";
import { signIn, useSession } from "next-auth/client";

const PrivateGraphPage = () => {
  const [session, loading] = useSession();
  // if (loading) return <p> loading...</p>
  console.log(session);
  return (
    <>
      {session ? (
        <p>I am a private graph page</p>
      ) : (
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </>
  )
}

export default PrivateGraphPage;