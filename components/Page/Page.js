import Head from "next/head";
import { Header } from "./Header/Header";


export const Page = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Graphs App</title>
        <meta name="description" content="Recruitment task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};
