import client from "../apollo-client";
import { PublicGraph } from "../components/PublicGraph/PublicGraph";
import { lastHundredLaunches } from "../queries";

const PublicGraphPage = ({ data }) => {
  return <PublicGraph data={data}/>
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: lastHundredLaunches,
  });

  return {
    props: {
      data,
    },
  };
}

export default PublicGraphPage;
