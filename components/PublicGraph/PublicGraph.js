import { useQuery } from "@apollo/client";
import { latestLaunches } from "../../queries";

export const PublicGraph = ({data}) => {
  const oldLaunches = data.launchesPast.filter(
    ({ launch_year }) => launch_year !== "2020" && launch_year !== "2021"
  );
  const { data: latest, error, loading } = useQuery(latestLaunches);
//add to loading sth like loading&& !latest, 
//fix callback/credentials after logging in
  return (
    <>
    
      {(loading && !latest) && <p>loading</p>}
      {latest && latest.twenty20.map((launch, index) => {
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
}