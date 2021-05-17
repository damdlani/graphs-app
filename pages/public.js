import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const rocketQuery = gql`
{
  launchesPast(limit: 100) {
    launch_date_local
    rocket {
      second_stage {
        payloads {
          payload_mass_kg
        }
      }
    }
  }
}
`;

const PublicGraphPage = () => {
  const {data, error, loading}  = useQuery(rocketQuery);
  console.log(data)

  if(loading) return <p>Loading...</p>;

  return (
    <>
      {data?.launchesPast.map((launch) => {
        return <div>{launch.rocket.second_stage.payloads[0].payload_mass_kg} kg</div>
      })}
    </>
  );
};

export default PublicGraphPage;
