import client from "../apollo-client";
import { rocketQuery } from "../queries/rocketQuery";

const PublicGraphPage = ({ data }) => {
  return (
    <>
      {data?.launchesPast.map((launch) => {
        return (
          <div>{launch.rocket.second_stage.payloads[0].payload_mass_kg} kg</div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: rocketQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default PublicGraphPage;
