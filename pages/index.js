import { useSession, signIn, signOut } from "next-auth/client";
import Head from "next/head";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <Head>
        <title>Graphs App</title>
        <meta name="description" content="Recruitment task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>I am main page</p>
      {loading && "<p>loading</p>"}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Hello, {session.user.name} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </div>
  );
}
