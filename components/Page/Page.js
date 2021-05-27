import Head from "next/head";
import { Header } from "./Header/Header";

export const Page = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Graphs App</title>
        <meta name="description" content="Recruitment task" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
    crossorigin="anonymous" />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};
