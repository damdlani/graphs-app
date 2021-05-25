import { useQuery } from "@apollo/client";
import client from "../apollo-client";
import { lastHundredLaunches, latestLaunches } from "../queries";

const PublicGraphPage = ({ data }) => {
  const oldLaunches = data.launchesPast.filter(
    ({ launch_year }) => launch_year !== "2020" && launch_year !== "2021"
  );
  const { data: latest, error, loading } = useQuery(latestLaunches);

  return (
    <>
      {oldLaunches.map((launch, index) => {
        return (
          <div key={index}>
            <span>
              <b>{launch.launch_year}</b>
            </span>
            <div>
              {launch.rocket.second_stage.payloads[0].payload_mass_kg} kg
            </div>
          </div>
        );
      })}
    </>
  );
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
